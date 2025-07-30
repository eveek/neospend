import React from 'react'
import TotalBalanceBox from '@/components/total-balance-box'
import BudgetList from '@/components/budget-list'
import InExBox from '@/components/in-ex-box'
import TransactionsBox from '@/components/transactions-box'

const Home = () => {
    return (
        <div className='flex flex-col gap-3 lg:flex-row h-fit w-full'>
            <div className="w-full lg:w-[380px] flex flex-col gap-3">
                <TotalBalanceBox />
                <div className="text-[16px] flex gap-6 text-secondary flex-col bg-card p-6 rounded-[12px]">
                    <BudgetList />  
                </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col gap-3">
                <InExBox />
                <TransactionsBox />
            </div>
        </div>
    )
}

export default Home