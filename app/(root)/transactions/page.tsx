import React from 'react'
import TransactionsTable from '@/components/transactions-table'

const Transactions = () => {
  return (
    <div className='flex flex-col p-6 bg-card rounded-md'>
      <div className=""></div>
      <div className=""></div>
      <div className="">
        <TransactionsTable prop={-1} />
      </div>
    </div>
  )
}

export default Transactions