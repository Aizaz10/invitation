import { AnimatePresence, motion } from 'framer-motion'
import { EVENT } from '../../data/event'
import { useCountdown } from '../../hooks/useCountdown'
import { downloadICS, googleCalendarUrl } from '../../utils/calendar'
import Button from '../ui/Button'
import { CalendarIcon } from '../ui/Icons'
import { EASE_SILK } from '../../utils/motion'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const UNITS = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds'],
]

function TimeTile({ value, label }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="relative min-w-0 max-w-40 flex-1 rounded-t-full border border-gold/50 bg-white/[0.03] px-1 pb-4 pt-[45%] text-center shadow-[0_0_24px_-6px_rgb(197_160_89/0.3),inset_0_0_22px_-10px_rgb(197_160_89/0.35)] transition-[border-color,box-shadow] duration-500 hover:border-gold/80 hover:shadow-[0_0_32px_-4px_rgb(197_160_89/0.4),inset_0_0_22px_-8px_rgb(197_160_89/0.45)] sm:pb-6">
      <div aria-hidden="true" className="absolute inset-1.5 rounded-t-full border border-gold/10" />
      <div className="relative h-[1.2em] overflow-hidden font-display text-[clamp(1.6rem,7vw,3.25rem)] leading-[1.2] text-gold-light tabular-nums">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            className="block"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE_SILK }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="relative mt-2 pl-[0.18em] text-[0.55rem] font-medium uppercase tracking-[0.18em] text-ivory/65 sm:pl-[0.3em] sm:text-[0.65rem] sm:tracking-[0.3em]">
        {label}
      </p>
    </div>
  )
}

export default function CountdownSection() {
  const remaining = useCountdown(EVENT.start)
  const arrived = remaining.total === 0

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-title"
      className="relative overflow-hidden bg-emerald-ink px-5 py-32 text-ivory sm:px-6 sm:py-40"
    >
      <div aria-hidden="true" className="bg-door absolute inset-0" />
      <div aria-hidden="true" className="bg-geometric mask-frame absolute inset-0 opacity-15" />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          tone="dark"
          id="countdown-title"
          eyebrow="Sunday · 11 October 2026"
          title="Counting the Blessed Days"
        />

        {arrived ? (
          <Reveal as="p" className="text-center font-serif text-2xl italic text-gold-light">
            The blessed day has arrived — Alhamdulillah.
          </Reveal>
        ) : (
          <Reveal
            role="timer"
            aria-label={`${remaining.days} days, ${remaining.hours} hours and ${remaining.minutes} minutes remaining`}
            className="mx-auto flex w-full max-w-2xl items-stretch justify-center gap-2.5 sm:gap-5"
          >
            {UNITS.map(([key, label]) => (
              <TimeTile key={key} value={remaining[key]} label={label} />
            ))}
          </Reveal>
        )}

        <Reveal delay={0.15} className="mt-14 flex flex-col items-center gap-5">
          <Button id="add-to-calendar" variant="emerald" onClick={downloadICS}>
            <CalendarIcon className="size-4" />
            Add to Calendar
          </Button>
          <a
            id="google-calendar-link"
            href={googleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.12em] text-ivory/60 underline decoration-gold/40 underline-offset-4 transition-colors duration-300 hover:text-gold-light hover:decoration-gold"
          >
            or add to Google Calendar
          </a>
        </Reveal>
      </div>
    </section>
  )
}
