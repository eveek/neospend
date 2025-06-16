"use client"

import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from 'next/navigation'
// import Image from 'next/image'

const headerInfo = {
    dashboard: {
        title: "Dashboard",
        description: "Get a quick overview of all your spending and budgets",
    },
    transactions: {
        title: "Transactions",
        description: "View and manage your transactions",
    },
    analytics: {
        title: "Analytics",
        description: "Analyze your spending patterns",
    },
    accounts: {
        title: "Accounts",
        description: "Manage your accounts",
    },
    budgets: {
        title: "Budgets",
        description: "Set and track your budgets",
    },
    settings: {
        title: "Settings",
        description: "Configure your preferences",
    },
}

const Header = () => {
    const [ headerDetails, setHeaderDetails ] = useState(headerInfo.dashboard)

    const pathname = usePathname()

    useEffect(() => {
        // Determine the active page based on the pathname
        if (pathname === '/') {
            setHeaderDetails(headerInfo.dashboard)
        } else if (pathname.startsWith('/transactions')) {
            setHeaderDetails(headerInfo.transactions)
        } else if (pathname.startsWith('/analytics')) {
            setHeaderDetails(headerInfo.analytics)
        } else if (pathname.startsWith('/accounts')) {
            setHeaderDetails(headerInfo.accounts)
        } else if (pathname.startsWith('/budgets')) {
            setHeaderDetails(headerInfo.budgets)
        } else if (pathname.startsWith('/settings')) {
            setHeaderDetails(headerInfo.settings)
        } else {
            setHeaderDetails(headerInfo.dashboard)
        }
    }, [pathname])
  return (
    <div className='h-[45px] box-content pb-5 flex justify-between items-center border-b-2 border-border'>
        <div className="flex items-center gap-2">
            <SidebarTrigger />
            <div className="">
                {headerDetails.title === "Dashboard" 
                ? <h1 className='text-xl text-secondary font-clash-medium'>Hello, <span className='text-foreground font-clash-medium'>Victor</span> 👋</h1>
                : <h1 className='text-xl text-foreground font-clash-medium'>{headerDetails.title}</h1>}
                <p className='text-[14px] hidden lg:block text-secondary'>{headerDetails.description}</p>
            </div>
        </div>
        <div className="flex gap-3">
            <ThemeToggle />
            <Button variant="outline" size="icon" className="border-none rounded-[8px] h-10 w-10 bg-card" >
                <Bell className="h-[1.2rem] w-[1.2rem] scale-100 text-foreground transition-all" />
                <span className="sr-only">Notifications</span>  
            </Button>
        </div>
    </div>
  )
}

export default Header