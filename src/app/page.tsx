import { Wordmark } from '@/components/ui/Logo'
import { Eyebrow, PillButton } from '@/components/ui/PillButton'
import { hero, site } from '@/lib/site'

export default function HomePage() {
    return (
        <div className="shell py-24">
            <Wordmark className="h-10 w-auto" title={site.name} />

            <div className="mt-10">
                <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-4 max-w-[18ch] text-6xl font-semibold leading-[.98] tracking-[-.02em]">
                {hero.headingLines.join(' ')}
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
                <PillButton variant="dark" arrow="right">{hero.primaryCta}</PillButton>
                <PillButton variant="outline">{hero.secondaryCta}</PillButton>
                <PillButton variant="light" arrow="up-right">Light variant</PillButton>
            </div>

            <div className="mt-10 flex gap-3">
                {['bg-ink', 'bg-accent', 'bg-accent-light', 'bg-accent-deep', 'bg-brand-paper'].map((c) => (
                    <div key={c} className={`${c} size-16 rounded-card-sm`} />
                ))}
            </div>
        </div>
    )
}
