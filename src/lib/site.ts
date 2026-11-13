/**
 * All site copy and settings in one place.
 * Edit this file to change wording; components read from it.
 */

export const site = {
    name: 'Vulterra',
    title: 'Vulterra — Machine-learning cybersecurity',
    description:
        'Vulterra builds machine-learning defences that detect intrusions in real time, and monitors small-business websites so problems are fixed before they cost you.',
    url: process.env.SITE_URL ?? 'https://citrixgate.org',
    location: 'Belgrade, Serbia',
    timeZone: 'Europe/Belgrade',
    clockLabel: 'Belgrade',
    /** Add real profiles here; empty entries are not rendered. */
    social: [] as { label: string; href: string }[],
    year: new Date().getFullYear(),
}

export type NavKey = 'home' | 'work' | 'services' | 'about' | 'contact'

export const nav: { key: NavKey; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'work', label: 'Work' },
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' },
]

export const loader = {
    tagline: 'Security that learns faster than attackers do.',
}

export const hero = {
    eyebrow: 'Machine-learning cybersecurity',
    headingLines: ['Security that', 'learns faster than', 'attackers do'],
    proof: 'Research-led, built in Belgrade',
    primaryCta: 'Talk to us',
    secondaryCta: 'See our work',
    card: [
        { caption: 'Detect', title: 'Spot intrusions as they happen.' },
        { caption: 'Prevent', title: 'Stop them before damage.' },
        { caption: 'Monitor', title: 'Watch your site around the clock.' },
    ],
    sectorsLabel: 'Built for',
    sectors: ['Banking', 'Healthcare', 'Government', 'E-commerce', 'Education', 'Small business'],
    status: ['ML × Cybersecurity', 'Belgrade, Serbia', 'Scroll to explore'] as const,
    watermark: 'VULTERRA',
    images: {
        /** Always-visible surface image. */
        surface: '/hero/surface.jpg',
        /** Painted under the cursor: what's beneath the surface. */
        reveal: '/hero/network.jpg',
    },
}

export const about = {
    eyebrow: 'Vulterra',
    note: 'Research-driven security from Belgrade, for teams anywhere.',
    statement: [
        { text: 'We build machine-learning defences that spot intrusions in real time — ' },
        {
            text: 'so data-dependent organisations stop paying for attacks after the fact.',
            muted: true,
        },
    ],
    footLabel: 'Based in Belgrade, Serbia',
    footText: 'Working with teams anywhere.',
    cta: 'Our work',
}

export const band = [
    { text: 'We', variant: 'light' },
    { text: 'Detect', variant: 'accent' },
    { text: '→', variant: 'dark' },
    { text: 'First', variant: 'ghost' },
] as const

export const services = {
    eyebrow: 'Services',
    heading: 'What we do',
    items: [
        {
            title: 'Intrusion Detection',
            text: 'ML models that flag anomalous traffic the moment it appears.',
            href: '/work/intrusion-detection',
        },
        {
            title: 'Website Security Monitoring',
            text: 'Vulterra WebSM watches your site and fixes what it finds.',
            href: '/work/websm',
        },
        {
            title: 'Security Assessments',
            text: 'Find the gaps in your systems before someone else does.',
            href: 'contact',
        },
        {
            title: 'Applied ML Research',
            text: 'Peer-reviewed methods, turned into working defences.',
            href: '/work/applied-ml-research',
        },
    ],
}

export const approach = {
    eyebrow: 'Our approach',
    heading: 'Defence that learns from every signal.',
    steps: [
        { title: 'Monitor', text: 'Continuous visibility across your traffic and systems.' },
        { title: 'Detect', text: 'Models trained to separate noise from real attacks.' },
        { title: 'Respond', text: 'Contain fast, before cleanup costs start to climb.' },
        { title: 'Harden', text: 'Every incident makes the next one easier to stop.' },
    ],
}

export const footer = {
    heading: "Worried about what you can't see? Let's talk.",
    cta: 'Start a conversation',
    tagline: 'Machine-learning cybersecurity for organisations that run on their data.',
}

export const contact = {
    kicker: 'Start a conversation',
    heading: "Tell us what you're protecting.",
    note: "We'll get back to you shortly.",
    submit: 'Send message',
    sending: 'Sending…',
    successTitle: 'Message received',
    successText: "Thanks for reaching out — we'll be in touch shortly.",
}
