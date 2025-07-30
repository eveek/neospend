"use client"

import React from 'react'
import { IncomeExpenseChart } from './BarChart'
import CountUp from 'react-countup'
import { BanknoteArrowUp, BanknoteArrowDown } from 'lucide-react';


const InExBox = () => {
  return (
    <div className='flex gap-6 text-secondary flex-col bg-card p-6 rounded-[12px] w-full h-fit'>
        <div className="w-full flex justify-center">
          <div className="flex gap-5 md:gap-20">
            <div className="text-center flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className='bg-brand-primary w-6 h-6 p-1 rounded-[8px] inline-flex items-center justify-center mb-1'>
                  <BanknoteArrowUp className='inline text-white text-[10px]' />
                </span>
                <h2 className='font-semibold tracking-normal'>Total Income</h2>
              </div>
              <CountUp
                  end={10999.78}
                  decimals={2}
                  decimal="."
                  prefix="$"
                  className='text-[24px] font-semibold text-primary'
              />
              <div className="text-[12px] text-secondary">
                <span className='bg-bad/10 text-bad py-1 px-2 rounded-[8px] mr-1'>-21%</span>
                from last month
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className='bg-brand-secondary w-6 h-6 p-1 rounded-[8px] inline-flex items-center justify-center mb-1'>
                  <BanknoteArrowDown className='inline text-white text-[10px]' />
                </span>
                <h2 className='font-semibold tracking-normal'>Total Expense</h2>
              </div>
              <CountUp
                  end={10999.78}
                  decimals={2}
                  decimal="."
                  prefix="$"
                  className='text-[24px] font-semibold text-primary'
              />
              <div className="text-[12px] text-secondary">
                <span className='bg-good/10 text-good py-1 px-2 rounded-[8px] mr-1'>+21%</span>
                from last month
              </div>
            </div>
          </div>
        </div>
      <IncomeExpenseChart />
    </div>
  )
}

export default InExBox