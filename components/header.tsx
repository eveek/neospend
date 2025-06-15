import React from 'react'

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, Search } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
// import Image from 'next/image'

const Header = () => {
  return (
    <div className='h-[64px] flex justify-between items-center border-b-2 border-border'>
        <div className="flex items-center gap-3">
            <SidebarTrigger />
            <div className="">
                <h1 className='text-2xl'>Hello, Victor 👋</h1>
                <p className='text-[14px] text-secondary'>Get a quick overview of all your spending and budgets</p>
            </div>
        </div>
        <div className="flex gap-3">
            <div className="flex items-center px-2 border-none rounded-[8px] h-10 w-fit bg-card">
                <input type="text" name="" id="" className='outline-none w-[300px]' />
                <Search className="h-[1.2rem] w-[1.2rem] scale-100 text-secondary transition-all" />
            </div>
            <ThemeToggle />
            <Button variant="outline" size="icon" className="border-none rounded-[8px] h-10 w-10 bg-card" >
                <Bell className="h-[1.2rem] w-[1.2rem] scale-100 text-secondary transition-all" />
                <span className="sr-only">Notifications</span>  
            </Button>
            <div className="border-2 border-secondary flex items-center justify-center rounded-[8px] h-10 w-10 bg-card">V</div>
        </div>
    </div>
  )
}

export default Header