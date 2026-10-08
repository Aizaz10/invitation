/**
 * Single source of truth for all event details.
 * Times are pinned to Pakistan Standard Time (UTC+05:00) so the countdown
 * and calendar entries are correct for guests in any timezone.
 */
export const EVENT = {
  honoree: 'Javeria Bilal',
  hosts: 'Mr. & Mrs. Muhammad Ashfaq Saigal',
  lineage: 'D/O Bilal Ashfaq Saigal',
  title: 'Takmeel-e-Hifz-ul-Quran — Javeria Bilal',
  start: new Date('2026-10-11T14:00:00+05:00'),
  end: new Date('2026-10-11T17:00:00+05:00'),
  venue: 'Victoria Palace Ballroom',
  address: '2nd floor above Qasr-e-Shireen, Nazimabad No. 3, Karachi Opp. Nazimabad Fire Station',
  // Placeholder — replace with the exact Google Maps share link for the venue.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Victoria+Palace+Ballroom+Block+3+Nazimabad+Karachi',
  description:
    'By the grace and mercy of Allah, we joyfully invite you to celebrate the Takmeel-e-Hifz-ul-Quran of Javeria Bilal. Please join us in a gathering of blessing and gratitude.',
}

export const TIMELINE = [
  { time: '2:00 PM', title: 'Guest Arrival', urdu: 'استقبالِ مہمانان' },
  { time: '2:35 PM', title: 'Short Bayan', urdu: 'مختصر بیان' },
  { time: '3:05 PM', title: 'Lunch', urdu: 'دعوتِ طعام' },
]
