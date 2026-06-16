import fs from 'fs/promises'
import path from 'path'
import 'dotenv/config'
import { scheduleToJson } from 'opass-schedule-to-json'

const schedule = await scheduleToJson({
  spreadsheetId: process.env.SPREADSHEET_ID,
  avatarBaseUrl: process.env.AVATAR_BASE_URL,
  defaultAvatar: process.env.DEFAULT_AVATAR,
})

const filePath = 'src/data/schedule.json'
const publicFilePath = 'public/data/schedule.json'

await Promise.all([fs.mkdir(path.dirname(filePath), { recursive: true }), fs.mkdir(path.dirname(publicFilePath), { recursive: true })])

const json = JSON.stringify(schedule, null, 2)
await Promise.all([fs.writeFile(path.resolve(filePath), json, 'utf-8'), fs.writeFile(path.resolve(publicFilePath), json, 'utf-8')])
