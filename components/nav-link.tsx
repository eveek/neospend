import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import { cn } from '@/lib/utils'

type NavLinkProps = {
    href: string
    icon: string
    label: string
    active?: boolean
    className?: string
}

const NavLink = ({href, icon, label, active}: NavLinkProps) => {
    return (
        <Link href={href} className={`${active ? 'bg-primary/10 text-primary' : 'text-secondary'} text-[14px] hover:bg-primary/10 flex gap-3 rounded-[8px] text-primary px-4 py-2 w-full`}>
            <Image
                // src="/icons/home-active.svg"
                src={`/icons/${icon}${active ? '-active' : ''}.svg`}
                alt="Dashboard Icon"
                width={500}
                height={500}
                className="inline-block w-[1.2rem] h-auto"
            />
            {label}
        </Link>
    )
}

export default NavLink