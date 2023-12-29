import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from './day-order-amout-card'
import { MonthCanceledOrderAmountCard } from './month-cenceled-order-amout-card'
import { MonthOrderAmountCard } from './month-order-amout-card'
import { MonthRevenueCard } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrderAmountCard />
        <DayOrderAmountCard />
        <MonthCanceledOrderAmountCard />
      </div>
    </>
  )
}
