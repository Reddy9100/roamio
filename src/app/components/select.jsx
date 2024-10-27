import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React from 'react'

const SelectOption = () => {
  return (
    <div>
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Vehicle" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Scooter</SelectItem>
    <SelectItem value="dark">Car</SelectItem>
    
  </SelectContent>
</Select>

    </div>
  )
}

export default SelectOption