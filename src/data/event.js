/**
 * Single source of truth for all event details.
 * Times are pinned to Pakistan Standard Time (UTC+05:00) so the countdown
 * and calendar entries are correct for guests in any timezone.
 */
export const EVENT = {
  honoree: 'Javeria Bilal',
  hosts: 'Mr. & Mrs. Ashfaq',
  lineage: 'D/O Bilal Ashfaq Saigal',
  title: 'Takmeel-e-Hifz-ul-Quran — Javeria Bilal',
  start: new Date('2026-10-11T14:00:00+05:00'),
  end: new Date('2026-10-11T17:00:00+05:00'),
  venue: 'Victoria Palace Ballroom',
  address: 'Block 3 Nazimabad 01, Karachi',
  // Placeholder — replace with the exact Google Maps share link for the venue.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Victoria+Palace+Ballroom+Block+3+Nazimabad+Karachi',
  description:
    'By the grace and mercy of Allah, we joyfully invite you to celebrate the Takmeel-e-Hifz-ul-Quran of Javeria Bilal. Please join us in a gathering of blessing and gratitude.',
}

export const TIMELINE = [
  { time: '2:00 PM', title: 'Guest Arrival', urdu: 'استقبالِ مہمانان' },
  { time: '2:30 PM', title: 'Tilawat-e-Quran', urdu: 'تلاوتِ قرآنِ پاک' },
  { time: '2:45 PM', title: 'Takmeel-e-Hifz Ceremony', urdu: 'تقریبِ تکمیلِ حفظ' },
  { time: '3:00 PM', title: 'Short Bayan', urdu: 'مختصر بیان' },
  { time: '3:30 PM', title: 'Lunch', urdu: 'دعوتِ طعام' },
]
