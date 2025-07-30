"use client"

import { CirclePlus } from 'lucide-react';
import React from 'react'
import CountUp from 'react-countup';
import Card from '@/components/card';
// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const bankAccounts = [
    {
      bankName: "Zenith Bank",
      accountType: "Checking",
      accountNumber: "1234",
      balance: 1234.56,
    },
    {
      bankName: "Access Bank",
      accountType: "Savings",
      accountNumber: "5678",
      balance: 8490.00,
    },
    {
      bankName: "First Bank",
      accountType: "Checking",
      accountNumber: "9012",
      balance: 305.75,
    },
    {
      bankName: "GTBank",
      accountType: "Savings",
      accountNumber: "3456",
      balance: 7321.89,
    }
  ]
  

const TotalBalanceBox = () => {
    return (
        <div className='text-[16px] flex gap-6 text-secondary flex-col bg-card p-6 rounded-[12px]'> 
            <div className="text-center">
                <h2 className='font-semibold tracking-normal'>Total Balance</h2>
                <CountUp 
                    end={14456.78} 
                    decimals={2}
                    decimal="."
                    prefix="$"
                    className='text-[32px] font-semibold text-primary mt-2'
                />
            </div>
            <div className="">
                <p className='font-semibold'>Linked Accounts: {bankAccounts.length}</p>
                <Carousel className="mt-4 w-full">
                    <CarouselContent className="flex ml-0 gap-4 h-full">
                        {bankAccounts.map((accounts, index) => (
                        <CarouselItem key={index} className="w-[100px] h-fit rounded-lg flex items-center justify-center">
                                <Card 
                                    bankName={accounts.bankName}
                                    accountType={accounts.accountType}
                                    accountNumber={accounts.accountNumber}
                                    balance={accounts.balance}
                                />
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="text-brand-primary" />
                    <CarouselPrevious className="text-brand-primary" />
                </Carousel>
            </div>
            <button className='rounded-[12px] border-1 flex justify-center items-center border-dashed h-12 text-brand-primary border-brand-primary'> 
                <CirclePlus className='inline h-5 w-5 mr-2' />
                Add New Account
            </button>
        </div>
    )
}

export default TotalBalanceBox