import React from 'react'

import { Wifi } from 'lucide-react';
import BankIcon from '../public/icons/bank.svg';

type CardProps = {
    bankName: string;
    accountType: string;
    accountNumber: string;
    balance: number;
     // Define any props you want to pass to the Card component
}

const Card = ({bankName, accountType, accountNumber, balance}:CardProps) => {
  return (
    // <div className='w-[320px] h-[200px] bg-brand-primary p-6 rounded-lg shadow-md flex justify-between items-start'>
    <div className='card flex justify-between'>
        <div className="overlayOne"></div>
        <div className="overlayTwo"></div>
        <div className="h-full flex flex-col justify-between">
            <div className='flex items-center gap-1'>
                <BankIcon alt='bank icon' className='w-5 h-5 text-[#7EC8FF]' />
                <h3 className='text-[16px] font-semibold text-white'>{bankName}</h3>
            </div>
            <p className='text-2xl font-bold text-white'>${balance.toFixed(2)}</p>
            <p className='text-[16px] text-white'>•••• •••• {accountNumber}</p>
            <p className='text-[16px] text-white'>{accountType}</p>
        </div>
        <div className="flex flex-col items-end justify-between h-full">
            <div className=""></div>
            <Wifi className='w-10 h-10 rotate-90 text-[#7EC8FF]' />
        </div>
    </div>
  )
}

export default Card