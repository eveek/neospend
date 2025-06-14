import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    <div className='w-[228px] bg-card px-5 py-8'>
        <div className="flex gap-1 items-center">
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
        <nav className='w-full'>
            <ul className='w-full flex flex-col gap-4'>
                <li className='w-full'>
                    <a href="" className='bg-primary/10 text-[16px] flex gap-3 rounded-[8px] text-primary px-4 py-2 w-full'>
                        <Image
                            src="/icons/home-active.svg"
                            alt="Dashboard Icon"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        Dashboard
                    </a>
                </li>
                <li className='w-full'>
                    <a href="" className='text-[16px] flex gap-3 rounded-[8px] text-secondary px-4 py-2 w-full'>
                        <Image
                            src="/icons/transactions.svg"
                            alt="Dashboard Icon"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        Transactions
                    </a>
                </li>
                <li className='w-full'>
                    <a href="" className='bg-primary/10 text-[16px] flex gap-3 rounded-[8px] text-primary px-4 py-2 w-full'>
                        <Image
                            src="/icons/home-active.svg"
                            alt="Dashboard Icon"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        Dashboard
                    </a>
                </li>
                <li className='w-full'>
                    <a href="" className='bg-primary/10 text-[16px] flex gap-3 rounded-[8px] text-primary px-4 py-2 w-full'>
                        <Image
                            src="/icons/home-active.svg"
                            alt="Dashboard Icon"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        Dashboard
                    </a>
                </li>
                <li className='w-full'>
                    <a href="" className='bg-primary/10 text-[16px] flex gap-3 rounded-[8px] text-primary px-4 py-2 w-full'>
                        <Image
                            src="/icons/home-active.svg"
                            alt="Dashboard Icon"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        Dashboard
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SideBar