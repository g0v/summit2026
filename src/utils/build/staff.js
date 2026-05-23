import { isMandarinPreferred } from '~/i18n/utils'

export function getLocalizedStaffName(person, locale) {
  const zhName = person.name?.zh?.trim()
  const enName = person.name?.en?.trim()
  const nickname = person.nickname?.trim()

  if (isMandarinPreferred(locale)) return zhName || nickname || enName || person.id
  return enName || zhName || nickname || person.id
}

export function hasStaffIntro(person) {
  return Boolean(person.intro?.trim())
}

export function onlyUrl(input) {
  return /^\s*(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?\s*$/.test(input)
}

export function getAvatar(person) {
  return person.hasAvatar ? import.meta.env.BASE_URL + `img/staff/${person.id}.webp` : `https://www.gravatar.com/avatar/${person.gravatar}?s=256&d=${encodeURI('https://summit.g0v.tw/2026/img/staff/default.jpg')}`
}
