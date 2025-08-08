import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { EllipsisVertical } from 'lucide-react';
  import { transactions } from "@/db/database";

  
  const TransactionsTable = ({ prop }: { prop: number }) => {
    // console.log("TransactionsTable prop:", prop);
    return (
      <div>
        <Table>
          {/* <TableCaption>A list of your recent transactions.</TableCaption> */}
          <TableHeader id="transactions-header">
            <TableRow>
              <TableHead className="w-[100px]">Description</TableHead>
              <TableHead>Amount ($)</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-foreground">
            {transactions.slice(0, prop).map((tx, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{tx.description}</TableCell>
                <TableCell className={tx.amount >0 ? 'text-good' : ''}>{tx.amount < 0 ? `-$${Math.abs(tx.amount)}` : `$${tx.amount}`}</TableCell>
                <TableCell>{new Date(tx.date).toLocaleString()}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-md text-xs inline-flex items-center gap-1 font-medium ${
                      tx.status === "Successful"
                        ? "text-good bg-good/10"
                        : tx.status === "Pending"
                        ? "text-pend bg-pend/10"
                        : tx.status === "Failed"
                        ? "text-bad bg-bad/10"
                        : ""
                    }`}
                  >
                    <span className="text-2xl ">•</span> {tx.status}
                  </span>
                </TableCell>
                <TableCell>{tx.category}</TableCell>
                <TableCell className="text-right">
                  <button>
                    <EllipsisVertical className="w-5 h-5" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  export default TransactionsTable