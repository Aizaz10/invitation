import { EVENT } from '../data/event'

/** 2026-10-11T09:00:00.000Z -> 20261011T090000Z */
const toICSDate = (date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

const escapeICS = (value) =>
  value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')

/** Fold lines longer than 75 octets as required by RFC 5545. */
const fold = (line) => {
  const out = []
  let rest = line
  while (rest.length > 74) {
    out.push(rest.slice(0, 74))
    rest = ' ' + rest.slice(74)
  }
  out.push(rest)
  return out.join('\r\n')
}

export function buildICS() {
  const location = `${EVENT.venue}, ${EVENT.address}`
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Bilal Family//Takmeel-e-Hifz Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:takmeel-hifz-javeria-bilal-20261011@invitation',
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(EVENT.start)}`,
    `DTEND:${toICSDate(EVENT.end)}`,
    `SUMMARY:${escapeICS(EVENT.title)}`,
    `DESCRIPTION:${escapeICS(EVENT.description)}`,
    `LOCATION:${escapeICS(location)}`,
    `URL:${EVENT.mapsUrl}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:Takmeel-e-Hifz-ul-Quran — Javeria Bilal',
    'TRIGGER:-PT3H',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  return lines.map(fold).join('\r\n')
}

export function downloadICS() {
  const blob = new Blob([buildICS()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'takmeel-e-hifz-javeria-bilal.ics'
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}

export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT.title,
    dates: `${toICSDate(EVENT.start)}/${toICSDate(EVENT.end)}`,
    details: EVENT.description,
    location: `${EVENT.venue}, ${EVENT.address}`,
    ctz: 'Asia/Karachi',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
