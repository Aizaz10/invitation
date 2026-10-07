import { MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'
import Cover from './components/Cover'
import AyahSection from './components/sections/AyahSection'
import ClosingSection from './components/sections/ClosingSection'
import CountdownSection from './components/sections/CountdownSection'
import DressCodeSection from './components/sections/DressCodeSection'
import InvitationSection from './components/sections/InvitationSection'
import TimelineSection from './components/sections/TimelineSection'
import VenueSection from './components/sections/VenueSection'
import ScrollProgress from './components/ui/ScrollProgress'
import { COVER_TOTAL_MS } from './utils/motion'

/** closed → opening (doors parting) → open (cover removed from the DOM) */
export default function App() {
  const [phase, setPhase] = useState('closed')

  // Always start at the top, behind the cover
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  // Lock scrolling until the doors have fully parted
  useEffect(() => {
    const root = document.documentElement
    root.style.overflow = phase === 'open' ? '' : 'hidden'
    return () => {
      root.style.overflow = ''
    }
  }, [phase])

  // Safety net in case the animation-complete callback is skipped
  useEffect(() => {
    if (phase !== 'opening') return
    const id = setTimeout(() => setPhase('open'), COVER_TOTAL_MS + 400)
    return () => clearTimeout(id)
  }, [phase])

  // Gentle auto-scroll feature
  useEffect(() => {
    // Wait until the cover is completely open before starting the logic.
    // Otherwise, the user clicking to open the cover would immediately cancel the scroll!
    if (phase !== 'open') return

    let scrollInterval
    let interrupted = false

    const stopAutoScroll = () => {
      interrupted = true
      if (scrollInterval) clearInterval(scrollInterval)
    }

    // Stop auto-scroll on user interactions
    window.addEventListener('touchstart', stopAutoScroll, { passive: true })
    window.addEventListener('wheel', stopAutoScroll, { passive: true })
    window.addEventListener('mousedown', stopAutoScroll, { passive: true })

    // Wait 3 seconds before starting the cinematic scroll
    const startTimeout = setTimeout(() => {
      if (!interrupted) {
        scrollInterval = setInterval(() => {
          window.scrollBy(0, 1)
        }, 30)
      }
    }, 1000)

    // Cleanup listeners and intervals
    return () => {
      clearTimeout(startTimeout)
      if (scrollInterval) clearInterval(scrollInterval)
      window.removeEventListener('touchstart', stopAutoScroll)
      window.removeEventListener('wheel', stopAutoScroll)
      window.removeEventListener('mousedown', stopAutoScroll)
    }
  }, [phase])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />

      {phase !== 'open' && (
        <Cover
          opening={phase === 'opening'}
          onOpen={() => setPhase('opening')}
          onOpened={() => setPhase('open')}
        />
      )}

      <div inert={phase === 'closed'} className="relative overflow-x-clip">
        <main>
          <AyahSection revealed={phase !== 'closed'} />
          <InvitationSection />
          <CountdownSection />
          <VenueSection />
          <TimelineSection />
          <DressCodeSection />
        </main>
        <ClosingSection />
        <footer className="w-full bg-[#f9f6f0] py-5">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-xs text-[#C5A059] tracking-widest uppercase opacity-80">
              Designed by{' '}
              <a 
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-1 hover:text-emerald-ink transition-colors"
              >
                Aizaz Ahmed
              </a>
            </p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}
