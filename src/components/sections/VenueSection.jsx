import { EVENT } from '../../data/event'
import Button from '../ui/Button'
import { ArrowUpRightIcon, PinIcon } from '../ui/Icons'
import Reveal from '../ui/Reveal'
import { Divider, FrameCorners } from '../ui/Ornaments'

export default function VenueSection() {
  return (
    <section id="venue" aria-labelledby="venue-title" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <Reveal className="relative mx-auto max-w-2xl border border-gold/40 p-2 sm:p-3">
        <div className="relative border border-gold/20 bg-white/55 px-5 py-14 text-center sm:px-14 sm:py-16">
          <FrameCorners className="inset-3 text-gold/70" />

          <PinIcon className="mx-auto size-8 text-gold" />
          <p className="mt-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.42em] text-gold-deep">
            The Venue
          </p>
          <h2
            id="venue-title"
            className="mt-4 font-serif text-[clamp(1.9rem,6vw,2.75rem)] leading-tight text-emerald-ink"
          >
            {EVENT.venue}
          </h2>
          <p className="mt-4 text-base text-emerald-ink/75 sm:text-lg">{EVENT.address}</p>

          <Divider className="my-8 text-gold" />

          <p className="flex flex-col items-center gap-1 font-sans text-xs font-medium uppercase tracking-[0.25em] text-gold-deep sm:flex-row sm:justify-center sm:gap-0 sm:text-sm">
            <span>October 11, 2026</span>
            <span aria-hidden="true" className="hidden px-3 text-gold sm:inline">
              |
            </span>
            <span>2:00 PM onwards</span>
          </p>

          <Button
            as="a"
            id="open-google-maps"
            href={EVENT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="emerald"
            className="mt-10"
          >
            Open in Google Maps
            <ArrowUpRightIcon className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
