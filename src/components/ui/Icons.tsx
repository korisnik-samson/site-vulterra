import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
    width: '1em',
    height: '1em',
    'aria-hidden': true,
    focusable: false,
    className: ['i', props.className].filter(Boolean).join(' '),
})

const stroke = (width = 2) => ({
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: width,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
})

export const ArrowRight = (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base(p)} {...stroke()}>
        <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
)

export const ArrowUpRight = (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base(p)} {...stroke()}>
        <path d="M7 17 17 7M8 7h9v9"/>
    </svg>
)

export const Globe = (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base(p)} {...stroke(1.4)}>
        <circle cx="12" cy="12" r="9.25"/>
        <path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5"/>
    </svg>
)

export const Close = (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base(p)} {...stroke()}>
        <path d="M4 4l16 16M20 4 4 20"/>
    </svg>
)

export const CircleDot = (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base(p)} {...stroke(1.6)}>
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none"/>
    </svg>
)

export const MenuIcon = (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base(p)} {...stroke()}>
        <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
)
