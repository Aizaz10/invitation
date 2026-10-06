const VARIANTS = {
  'outline-gold': 'border border-gold/70 text-gold-light hover:text-emerald-ink animate-glow',
  gold: 'bg-gold text-emerald-ink hover:bg-gold-light shadow-[0_14px_34px_-14px_rgb(197_160_89/0.7)]',
  emerald:
    'bg-emerald-ink text-gold-light hover:bg-emerald-soft hover:shadow-lg',
}

export default function Button({
  as: Tag = 'button',
  variant = 'gold',
  className = '',
  children,
  ...props
}) {
  const isOutline = variant === 'outline-gold'
  const typeProps = Tag === 'button' ? { type: 'button' } : {}

  return (
    <Tag
      className={`group relative isolate inline-flex items-center justify-center gap-3 overflow-hidden px-6 py-4 font-sans text-[0.7rem] font-medium uppercase tracking-[0.24em] transition-[color,background-color,translate,box-shadow] duration-500 ease-silk hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none sm:px-10 sm:tracking-[0.32em] ${VARIANTS[variant]} ${className}`}
      {...typeProps}
      {...props}
    >
      {isOutline && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-silk group-hover:scale-x-100"
        />
      )}
      {/* light sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 -z-5 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-silk group-hover:translate-x-[650%]"
      />
      {children}
    </Tag>
  )
}
