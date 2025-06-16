import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
    // SidebarGroup,
    // SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavLinkProps = {
    href: string
    icon: string
    label: string
    active?: boolean
    className?: string
}


const NavLink = ({href, icon, label, active}: NavLinkProps) => {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <Link href={href} className={`${active ? 'bg-brand-primary/10 text-brand-primary' : 'text-secondary'} text-[16px] hover:bg-brand-primary/10 flex gap-3 rounded-[8px] text-brand-primary w-full`}>
                    <SidebarMenuButton
                    className="px-3 py-2 flex gap-3  items-center w-full h-full"
                    tooltip={label}
                    >
                    <Image
                        src={`/icons/${icon}${active ? '-active' : ''}.svg`}
                        alt={`${label} icon`}
                        width={20}
                        height={20}
                    />
                    <span>{label}</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default NavLink