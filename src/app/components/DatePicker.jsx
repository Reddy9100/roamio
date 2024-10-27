"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar"; 
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; 
import { Button } from "@/components/ui/button"; 
import { format } from "date-fns";

export function DatePickerDemo() {
  const [date, setDate] = React.useState(undefined); 

  const handleDateSelect = (selectedDate) => { 
    console.log("Selected Date:", selectedDate); 
    if (selectedDate instanceof Date) {
      setDate(selectedDate);
    } else {
      console.error("Invalid date selected:", selectedDate);
    }
  };

  console.log("Current Date State:", date); 

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[257px]  justify-start text-left font-normal">
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
