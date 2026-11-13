import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

type Variant = 'dark' | 'light' | 'outline';

type Props = {
    variant?: Variant;
    arrow?: 'right' | 'up-right';
    href?: string;
    children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

import React from 'react'

export const PillButton = ({ variant = 'dark', arrow, href, children, className, ...props }: Props) => {
    const cls = ['pill', `pill--${variant}`, arrow && `pill--arrow-${arrow}`, className].filter(Boolean).join(' ');

    const inner = (
        <span className="pill__in">
            {children}
            {arrow && (
                <span className={`pill__badge pill__badge--${arrow === 'right' ? 'r' : 'ur'}`}>
                    {arrow === 'right' ? <ArrowRight /> : <ArrowUpRight />}
                </span>
            )}
        </span>
    )

    if (href) {
        return (
            <Link href={href} className={cls}>
                {inner}
            </Link>
        )
    }

    return (
        <button type="button" className={cls} {...props}>
            {inner}
        </button>
    )
}

export const Eyebrow = ({ children, tone = 'dark', boxed }: { children: ReactNode; tone?: 'dark' | 'light'; boxed?: boolean }) => {
    return (
        <span className={['eyebrow', tone === 'light' && 'eyebrow--light', boxed && 'eyebrow--boxed'].filter(Boolean).join(' ')}>
            {children}
        </span>
    )
}