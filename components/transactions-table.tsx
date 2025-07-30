import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  const transactions = [
    {
      description: "Uber Ride",
      amount: -12.50,
      date: "2025-05-01T08:15:00",
      status: "Successful",
      category: "Transportation"
    },
    {
      description: "Grocery - Walmart",
      amount: -85.30,
      date: "2025-05-04T14:10:00",
      status: "Pending",
      category: "Food"
    },
    {
      description: "Salary - May",
      amount: 3000.00,
      date: "2025-05-02T09:00:00",
      status: "Successful",
      category: "Income"
    },
    {
      description: "Gym Membership",
      amount: -40.00,
      date: "2025-05-08T06:50:00",
      status: "Failed",
      category: "Health"
    },
    {
      description: "Electricity Bill",
      amount: -45.00,
      date: "2025-05-05T11:45:00",
      status: "Successful",
      category: "Utilities"
    },
    {
      description: "Grocery - Walmart",
      amount: -85.30,
      date: "2025-05-04T14:10:00",
      status: "Successful",
      category: "Food"
    },
    {
      description: "Uber Ride",
      amount: -12.50,
      date: "2025-05-06T10:30:00",
      status: "Successful",
      category: "Transportation"
    },
    {
      description: "Salary - Bonus",
      amount: 500.00,
      date: "2025-05-07T10:00:00",
      status: "Successful",
      category: "Income"
    },
    {
      description: "Internet Bill",
      amount: -70.00,
      date: "2025-05-03T08:00:00",
      status: "Successful",
      category: "Utilities"
    },
    {
      description: "Netflix Subscription",
      amount: -15.99,
      date: "2025-05-02T19:45:00",
      status: "Successful",
      category: "Entertainment"
    },
    {
      description: "Gym Membership",
      amount: -40.00,
      date: "2025-05-08T06:50:00",
      status: "Successful",
      category: "Health"
    },
    {
      description: "Dinner - Olive Garden",
      amount: -60.00,
      date: "2025-05-01T20:00:00",
      status: "Successful",
      category: "Food"
    },
    {
      description: "Amazon Purchase",
      amount: -120.00,
      date: "2025-05-06T13:25:00",
      status: "Successful",
      category: "Shopping"
    },
    {
      description: "Salary - May",
      amount: 3000.00,
      date: "2025-05-02T09:00:00",
      status: "Successful",
      category: "Income"
    },
    {
      description: "Uber Ride",
      amount: -12.50,
      date: "2025-05-09T07:30:00",
      status: "Pending",
      category: "Transportation"
    },
    {
      description: "Spotify Subscription",
      amount: -9.99,
      date: "2025-05-04T09:10:00",
      status: "Successful",
      category: "Entertainment"
    },
    {
      description: "Phone Recharge",
      amount: -30.00,
      date: "2025-05-07T15:30:00",
      status: "Successful",
      category: "Utilities"
    },
    {
      description: "Grocery - Walmart",
      amount: -95.60,
      date: "2025-05-06T17:20:00",
      status: "Successful",
      category: "Food"
    },
    {
      description: "Salary - May",
      amount: 3000.00,
      date: "2025-05-02T09:00:00",
      status: "Successful",
      category: "Income"
    },
    {
      description: "Doctor Visit",
      amount: -150.00,
      date: "2025-05-03T12:00:00",
      status: "Successful",
      category: "Health"
    },
    {
      description: "Uber Ride",
      amount: -12.50,
      date: "2025-05-01T08:15:00",
      status: "Successful",
      category: "Transportation"
    },
    {
      description: "Electricity Bill",
      amount: -45.00,
      date: "2025-05-05T11:45:00",
      status: "Successful",
      category: "Utilities"
    },
    {
      description: "Lunch - Subway",
      amount: -18.00,
      date: "2025-05-03T13:15:00",
      status: "Successful",
      category: "Food"
    },
    {
      description: "Freelance Payment",
      amount: 750.00,
      date: "2025-05-06T08:30:00",
      status: "Successful",
      category: "Income"
    },
    {
      description: "Movie Ticket",
      amount: -12.00,
      date: "2025-05-08T19:00:00",
      status: "Successful",
      category: "Entertainment"
    },
    {
      description: "Grocery - Walmart",
      amount: -85.30,
      date: "2025-05-04T14:10:00",
      status: "Successful",
      category: "Food"
    },
    {
      description: "Health Insurance",
      amount: -250.00,
      date: "2025-05-01T09:30:00",
      status: "Successful",
      category: "Health"
    },
    {
      description: "Uber Ride",
      amount: -12.50,
      date: "2025-05-10T07:45:00",
      status: "Successful",
      category: "Transportation"
    },
    {
      description: "Electricity Bill",
      amount: -45.00,
      date: "2025-05-05T11:45:00",
      status: "Successful",
      category: "Utilities"
    },
    {
      description: "Gym Membership",
      amount: -40.00,
      date: "2025-05-08T06:50:00",
      status: "Successful",
      category: "Health"
    }
  ];
  
  const TransactionsTable = () => {
    return (
      <div>
        <Table>
          <TableCaption>A list of your recent transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Description</TableHead>
              <TableHead>Amount ($)</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{tx.description}</TableCell>
                <TableCell>{tx.amount < 0 ? `-$${Math.abs(tx.amount)}` : `$${tx.amount}`}</TableCell>
                <TableCell>{new Date(tx.date).toLocaleString()}</TableCell>
                <TableCell>{tx.status}</TableCell>
                <TableCell>{tx.category}</TableCell>
                <TableCell className="text-right">
                  <button className="text-brand-primary">View</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  export default TransactionsTable