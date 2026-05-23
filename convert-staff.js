import fs from 'fs/promises'
import path from 'path'
import { parse } from 'csv-parse/sync'

const STAFF_CSV = 'https://docs.google.com/spreadsheets/d/1faHWhNV6XvYGI2ZLsdGcNDl-65gKjrESFSHMGuIR4cs/export?format=csv&gid=0'
const staffOutputPath = 'src/data/staff.json'
const teamsOutputPath = 'src/data/teams.json'

const teamMap = {
  總籌組: 'organizers',
  行政組: 'administration',
  宣傳組: 'marketing',
  財務組: 'finance',
  場務組: 'logistics',
  贊助組: 'sponsorship',
  議程組: 'program',
  紀錄組: 'photography',
}

const teamLeaderMap = {
  總籌組長: 'organizers',
  宣傳組長: 'marketing',
  行政組長: 'administration',
  議程組長: 'program',
  紀錄組長: 'photography',
  場務組長: 'logistics',
  贊助組長: 'sponsorship',
  財務組長: 'finance',
}

const groupMap = {
  設計小組: { team: 'marketing', group: 'design' },
  社群小組: { team: 'marketing', group: 'sns' },
  媒體小組: { team: 'marketing', group: 'media' },
  開發小組: { team: 'marketing', group: 'web' },
  報到小組: { team: 'logistics', group: 'registration' },
  餐飲小組: { team: 'logistics', group: 'catering' },
  機動小組: { team: 'logistics', group: 'support' },
  物流小組: { team: 'logistics', group: 'transport' },
  議程助理: { team: 'program', group: 'programAssistants' },
}

const groupLeaderMap = {
  設計總監: groupMap.設計小組,
  社群總監: groupMap.社群小組,
  媒體總監: groupMap.媒體小組,
  開發總監: groupMap.開發小組,
  機動總監: groupMap.機動小組,
  物流總監: groupMap.物流小組,
  報到總監: groupMap.報到小組,
  餐飲總監: groupMap.餐飲小組,
}

const teamOrder = ['organizers', 'marketing', 'administration', 'program', 'photography', 'logistics', 'sponsorship', 'finance']

function splitValues(value) {
  return String(value ?? '')
    .split(/[,，、]/)
    .map(item => item.trim())
    .filter(Boolean)
}

function unique(values) {
  return [...new Set(values)]
}

function createTeams() {
  return Object.fromEntries(
    teamOrder.map(team => [
      team,
      {
        leader: [],
        members: [],
        groups: {},
      },
    ])
  )
}

function addGroupMember(teams, team, group, field, id) {
  teams[team].groups[group] ??= {
    leader: [],
    members: [],
  }
  teams[team].groups[group][field].push(id)
}

function normalizeTeams(teams) {
  return Object.fromEntries(
    teamOrder.map(team => {
      const value = teams[team]

      return [
        team,
        {
          leader: unique(value.leader),
          members: value.members.length > 0 ? unique(value.members) : null,
          groups:
            Object.keys(value.groups).length > 0
              ? Object.fromEntries(
                  Object.entries(value.groups).map(([group, groupValue]) => [
                    group,
                    {
                      leader: unique(groupValue.leader),
                      members: groupValue.members.length > 0 ? unique(groupValue.members) : null,
                    },
                  ])
                )
              : null,
        },
      ]
    })
  )
}

const csvResponse = await fetch(STAFF_CSV)

if (!csvResponse.ok) {
  throw new Error(`Failed to fetch staff CSV: ${csvResponse.status} ${csvResponse.statusText}`)
}

const csv = await csvResponse.text()
const records = parse(csv, {
  columns: true,
  bom: true,
  skip_empty_lines: true,
  trim: true,
})

const teams = createTeams()
const staff = []

for (const record of records) {
  const id = record.id?.trim()
  const personTeams = splitValues(record.組別)
    .map(team => teamMap[team])
    .filter(Boolean)
  const teamLeaders = splitValues(record.組長)
    .map(leader => teamLeaderMap[leader])
    .filter(Boolean)
  const groups = splitValues(record.小組別)
    .map(group => groupMap[group])
    .filter(Boolean)
  const groupLeaders = splitValues(record.小組組長)
    .map(leader => groupLeaderMap[leader])
    .filter(Boolean)

  if (!id || personTeams.length === 0) {
    continue
  }

  staff.push({
    id,
    nickname: record.暱稱?.trim() ?? '',
    hasAvatar: String(record.大頭貼 ?? '').trim().length > 0,
    name: {
      zh: record.華語版稱呼?.trim() ?? '',
      en: record.英文版稱呼?.trim() ?? '',
    },
    intro: record.個人簡介?.trim() ?? '',
    gravatar: record.GravatarHash?.trim() ?? ''
  })

  for (const team of unique(personTeams)) {
    const isTeamLeader = teamLeaders.includes(team)
    const teamGroups = groups.filter(group => group.team === team)
    const leaderGroups = groupLeaders.filter(group => group.team === team)

    if (isTeamLeader) {
      teams[team].leader.push(id)
    }

    for (const { group } of leaderGroups) {
      addGroupMember(teams, team, group, 'leader', id)
    }

    for (const { group } of teamGroups) {
      if (!leaderGroups.some(leaderGroup => leaderGroup.group === group)) {
        addGroupMember(teams, team, group, 'members', id)
      }
    }

    if (!isTeamLeader && teamGroups.length === 0 && leaderGroups.length === 0) {
      teams[team].members.push(id)
    }
  }
}

await fs.mkdir(path.dirname(staffOutputPath), { recursive: true })

await Promise.all([fs.writeFile(staffOutputPath, `${JSON.stringify(staff, null, 2)}\n`, 'utf-8'), fs.writeFile(teamsOutputPath, `${JSON.stringify(normalizeTeams(teams), null, 2)}\n`, 'utf-8')])
