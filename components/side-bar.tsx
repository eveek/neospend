'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import NavLink from './nav-link'
import { usePathname } from 'next/navigation'
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarHeader,
//     SidebarRail,
//   } from "@/components/ui/sidebar"

const AppSidebar = () => {
    const pathname = usePathname()
    const [activePage, setActivePage] = useState('')   
    
    useEffect(() => {
        // Determine the active page based on the pathname
        if (pathname === '/') {
            setActivePage('dashboard')
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
    <div className='w-[260px] bg-card px-5 py-6'>
        <div className="flex gap-1 border-b-2 border-border items-center pb-6">
            <Image
                src="/images/logo.png"
                alt="NeoSpend Logo"
                width={500}
                height={500}
                className="w-10 h-10"
            />
            <Image
                src="/images/logo-text.png"
                alt="NeoSpend Logo"
                width={500}
                height={500}
                className="w-auto h-[24px]"
            />
        </div>
        <nav className='w-full pt-6'>
            <ul className='w-full flex flex-col gap-2'>
                <li className='w-full'>
                    <NavLink href="/" icon="home" label="Dashboard" active={activePage == 'dashboard' ? true : false} />
                </li>
                <li className='w-full'>
                    <NavLink href="/transactions" icon="transactions" label="Transactions" active={activePage == 'transactions' ? true : false} />
                </li>
                <li className='w-full'>
                    <NavLink href="/budgets" icon="budgets" label="Budgets" active={activePage == 'budgets' ? true : false} />
                </li>
                <li className='w-full'>
                    <NavLink href="/analytics" icon="analytics" label="Analytics" active={activePage == 'analytics' ? true : false} />
                </li>
                <li className='w-full'>
                    <NavLink href="/accounts" icon="accounts" label="Accounts" active={activePage == 'accounts' ? true : false} />
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default AppSidebar