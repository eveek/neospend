'use client'

import React from 'react'
// import Budgets from '@/public/icons/budgets.svg'
import BudgetItem, { BudgetItemProps } from './budget-item'

const budgetItems: (BudgetItemProps & { targetBudget: number; usedBudget: number })[] = [
	{
		id: 'groceries',
		name: 'Groceries',
		color: '#00B386',
		targetBudget: 50000,
		usedBudget: 32000,
	},
	{
		id: 'transportation',
		name: 'Transportation',
		color: '#1A73E8',
		targetBudget: 30000,
		usedBudget: 18000,
	},
	{
		id: 'utilities',
		name: 'Utilities',
		color: '#FF910A',
		targetBudget: 20000,
		usedBudget: 12000,
	},
]

const BudgetList = () => {
	return (
		<div className="">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2 text-foreground font-bold">
					{/* <Budgets className="text-brand-primary" /> */}
					Top Categories
				</div>
				<button></button>
			</div>
			<div className="flex flex-col gap-4 mt-4">
				{budgetItems.map((item) => (
					<BudgetItem
						key={item.id}
						id={item.id}
						name={item.name}
						color={item.color}
            targetBudget={item.targetBudget}
            usedBudget={item.usedBudget}
					/>
				))}
			</div>
		</div>
	)
}

export default BudgetList