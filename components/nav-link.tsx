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

// import Home from '@/public/icons/home.svg'
// import Transactions from '@/public/icons/transactions.svg'
// import Budgets from '@/public/icons/budgets.svg'
// import Analytics from '@/public/icons/analytics.svg'
// import Accounts from '@/public/icons/accounts.svg'
// import HomeActive from '@/public/icons/home-active.svg'
// import TransactionsActive from '@/public/icons/transactions-active.svg'
// import BudgetsActive from '@/public/icons/budgets-active.svg'
// import AnalyticsActive from '@/public/icons/analytics-active.svg'
// import AccountsActive from '@/public/icons/accounts-active.svg'

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
                <Link href={href} className={`${active ? 'bg-brand-primary/10' : ''}  ${active? "" : "text-secondary"} text-foreground text-[16px] hover:bg-brand-primary/10 flex gap-3 rounded-[8px] w-full`}>
                    <SidebarMenuButton
                    className="px-3 py-2 flex gap-3  items-center w-full h-full"
                    tooltip={label}
                    >
                    {/* {icon === 'home' && (active ? <HomeActive className='text-brand-primary' /> : <Home className='text-secondary' />)}
                    {icon === 'transactions' && (active ? <TransactionsActive className='text-brand-primary' /> : <Transactions className='text-secondary' />)}
                    {icon === 'budgets' && (active ? <BudgetsActive className='text-brand-primary' /> : <Budgets className='text-secondary' />)}
                    {icon === 'analytics' && (active ? <AnalyticsActive className='text-brand-primary' /> : <Analytics className='text-secondary' />)}
                    {icon === 'accounts' && (active ? <AccountsActive className='text-brand-primary' /> : <Accounts className='text-secondary' />)} */}
                    <Image
                        src={`/icons/${icon}${active ? '-active' : ''}.svg`}
                        alt={`${label} icon`}
                        width={20}
                        height={20}
                        className=''
                    />
                    <span>{label}</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default NavLink