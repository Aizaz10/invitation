import { useEffect, useState } from 'react'

const getRemaining = (targetMs) => {
  const total = Math.max(0, targetMs - Date.now())
  return {
    total,
    days: Math.floor(total / 86_400_000),
    hours: Math.floor(total / 3_600_000) % 24,
    minutes: Math.floor(total / 60_000) % 60,
    seconds: Math.floor(total / 1000) % 60,
  }
}

export function useCountdown(target) {
  const targetMs = target.getTime()
  const [remaining, setRemaining] = useState(() => getRemaining(targetMs))

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(targetMs))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetMs])

  return remaining
}
