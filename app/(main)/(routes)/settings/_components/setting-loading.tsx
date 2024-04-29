import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SettingLoading = () => {
  return (
    <div className="grid grid-cols-5 space-y-4 px-2 mb-3">
    <Skeleton className="col-span-2 h-52 bg-muted-foreground" />
    <div className="col-span-3" />
    <Skeleton className="col-span-2 h-10 bg-muted-foreground" />
    <div className="col-span-3" />
    <Skeleton className="col-span-2 h-10 bg-muted-foreground" />
  </div>
  )
}

export default SettingLoading