import TransactionsTable from "./transactions-table"

const TransactionsBox = () => {
  return (
    <div className="flex gap-6 text-secondary flex-col bg-card p-6 rounded-[12px] w-full h-fit">
        <TransactionsTable />
    </div>
  )
}

export default TransactionsBox