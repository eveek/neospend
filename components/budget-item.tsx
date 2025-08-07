import React from 'react'
import { ShoppingCart, Lightbulb, BusFront } from 'lucide-react'
import { Progress } from './ui/progress'

export type BudgetItemProps = {
  id: string
  name: string
  color: string
  targetBudget: number
  usedBudget: number
}

// Helper to convert hex to rgba with 10% opacity
function hexToRgba(hex: string, alpha = 0.1) {
  let c = hex.replace('#', '')
  if (c.length === 3) c = c.split('').map(x => x + x).join('')
  const num = parseInt(c, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255
  return `rgba(${r},${g},${b},${alpha})`
}

const BudgetItem = ({ id, name, color, targetBudget, usedBudget }: BudgetItemProps) => {
  return (
      <div className="flex items-center gap-2 py-3 rounded-lg  border-gray-300 transition-colors">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ backgroundColor: hexToRgba(color, 0.2) }}
        >
          {id === 'groceries' && <ShoppingCart color={color} className="w-5 h-5" />}
          {id === 'utilities' && <Lightbulb color={color} className="w-5 h-5" />}
          {id === 'transportation' && <BusFront color={color} className="w-5 h-5" />}
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between w-full">
            <span className="text-[16px] text-foreground">{name}</span>
            <span className="text-sm text-gray-500">{(usedBudget / targetBudget) * 100}%</span>
          </div>
          <div className="">
            <Progress
              value={(usedBudget / targetBudget) * 100}
              className="h-2 mt-1 rounded-full"
              style={{ backgroundColor: hexToRgba(color, 0.2) }}
              indicatorStyle={{ backgroundColor: color }} // Pass the color prop here
            />
          </div>
          {/* <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
            <span>Used: ${(usedBudget / 100).toFixed(2)}</span>
            <span>Target: ${(targetBudget / 100).toFixed(2)}</span>
          </div> */}
        </div>
      </div>
  )
}

export default BudgetItem