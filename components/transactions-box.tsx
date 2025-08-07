import TransactionsTable from "./transactions-table"
import Link from "next/link";

const TransactionsBox = () => {
  return (
    <div className="flex gap-6 text-secondary flex-col bg-card p-6 rounded-[12px] w-full h-fit">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground font-bold">
            Recent Transactions
          </div>
          <Link href={'/transactions'}><button className='sec-btn'>View all</button></Link>
        </div>
        <TransactionsTable prop={10} />
    </div>
  )
}

export default TransactionsBox