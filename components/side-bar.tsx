'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import NavLink from './nav-link'
import { usePathname } from 'next/navigation'
import {
    Sidebar,
    SidebarContent,
    // SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    // SidebarRail,
    } from "@/components/ui/sidebar"

const nav = [
    {
        link: "/",
        icon: "home",
        label: "Home"
    },
    {
        link: "/transactions",
        icon: "transactions",
        label: "Transactions"
    },
    {
        link: "/budgets",
        icon: "budgets",
        label: "Budgets"
    },
    {
        link: "/analytics",
        icon: "analytics",
        label: "Analytics"
    },
    {
        link: "/accounts",
        icon: "accounts",
        label: "Accounts"
    },
]

const AppSidebar = () => {
    const pathname = usePathname()
    const [activePage, setActivePage] = useState('')   
    
    useEffect(() => {
        // Determine the active page based on the pathname
        if (pathname === '/') {
            setActivePage('home')
        } else if (pathname.startsWith('/transactions')) {
            setActivePage('transactions')
        } else if (pathname.startsWith('/analytics')) {
            setActivePage('analytics')
        } else if (pathname.startsWith('/accounts')) {
            setActivePage('accounts')
        } else if (pathname.startsWith('/budgets')) {
            setActivePage('budgets')
        } else if (pathname.startsWith('/settings')) {
            setActivePage('settings')
        } else {
            setActivePage('')
        }
    }, [pathname])


  return (
    <Sidebar collapsible='icon' className='px-3 py-5 bg-card'>
        <SidebarHeader className='!p-0'>
            <SidebarMenu>
                <SidebarMenuItem>
                    <div className="flex gap-1 border-b-2 border-border items-center pb-5">
                        <SidebarMenuButton className='!p-0 !w-fit !h-fit'>
                            <Image
                                src="/icons/Neospend-logo.svg"
                                alt="NeoSpend Logo"
                                width={500}
                                height={500}
                                className="w-[48px] h-auto"
                            />
                            <span className='font-clash-medium text-foreground text-2xl'>NeoSpend</span>
                        </SidebarMenuButton>
                    </div>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <nav className='w-full pt-5'>
                <ul className='w-full flex flex-col gap-4'>
                    {
                        nav.map((item, index) => (
                            <li key={index} className='w-full'>
                                <NavLink
                                    href={item.link}
                                    icon={item.icon}
                                    label={item.label}
                                    active={activePage === item.label.toLowerCase()}
                                />
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar