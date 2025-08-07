import BudgetList from '@/components/budget-list'
import React from 'react'
import Link from 'next/link'

const Budgets = () => {
  return (
    <div className='flex flex-col p-6 bg-card rounded-md'>
      <div className="flex gap-10 flex-wrap border border-border w-fit p-4 rounded-lg mb-4">
        <div className="flex flex-col gap-2 items-center">
          <h2 className='font-semibold text-secondary'>Total Monthly Budget</h2>
          <p className='text-[28px] font-semibold text-primary'>$50,000.00</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2 className='font-semibold text-secondary'>Total Spent</h2>
          <p className='text-[28px] font-semibold text-primary'>$20,000.00</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2 className='font-semibold text-secondary'>Total Remaining</h2>
          <p className='text-[28px] font-semibold text-primary'>$30,000.00</p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground font-bold">
                {/* <Budgets className="text-brand-primary" /> */}
                Budget Distribution
            </div>
            <Link href={'/budgets'}><button className='pry-btn'>+ Add budget</button></Link>
        </div>
        <BudgetList />
      </div>
    </div>
  )
}

export default Budgets