'use client'

import React from 'react'
import { bankAccounts } from '@/db/database';
import Card from '@/components/card';
import { WalletMinimal } from 'lucide-react';
// import CountUp from 'react-countup';



const Accounts = () => {
  return (
    <div className='p-6 rounded-[12px] bg-card text-secondary flex flex-col gap-6'>
      <div className="border flex flex-col items-center border-border w-fit p-4 rounded-lg mb-4">
        <h2 className='font-semibold flex gap-0.5 items-center'>
          <WalletMinimal className='text-brand-primary w-[20px]' />
          <span>Total Balance</span>
        </h2>
        <p className='text-[28px] font-semibold text-primary mt-2'>
          ${bankAccounts.reduce((total, account) => total + account.balance, 0)}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground font-bold">
            Linked Accounts
          </div>
          <button className='pry-btn'>+ Link new account</button>
        </div>
        <div className="flex gap-4 flex-wrap">
          {bankAccounts.length > 0 ? (
            bankAccounts.map((account, index) => (
              <Card 
                key={index}
                bankName={account.bankName}
                accountType={account.accountType}
                accountNumber={account.accountNumber}
                balance={account.balance}
              />
            ))
          ) : (
            <p className="text-center text-secondary">No accounts linked yet. Please add an account.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Accounts