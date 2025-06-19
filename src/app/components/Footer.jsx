'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  LineChart,
  Plus,
  ReceiptText,
  User,
  IndianRupee,
  ListOrdered,
  StickyNote,
  Gauge,
  Calendar as CalendarIcon,
  Calendar1Icon,
} from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CalendarViewMonthOutlined } from '@mui/icons-material';


export default function BottomNavBar() {
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAddExpense = (e) => {
    e.preventDefault();
    console.log({
      monthlyBudget,
      amount,
      date,
      category,
      description,
    });

    // Reset
    setAmount('');
    setCategory('');
    setDescription('');
    setDate(new Date());
  };

  return (
    <>
      {/* Drawer Trigger */}
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <button className="fixed bottom-24 right-4 z-50 w-16 h-16 rounded-full bg-green-900 hover:bg-green-600 flex items-center justify-center shadow-lg transition">
            <Plus className="w-8 h-8 text-white" />
          </button>
        </DrawerTrigger>

        <DrawerContent
          className="fixed bottom-0 inset-x-0 w-full bg-white rounded-t-xl shadow-xl overflow-hidden flex flex-col"
          style={{ maxHeight: '75vh' }}
        >
          <div className="mx-auto h-1.5 w-12 rounded-full bg-green-900 mt-4" />
          <DrawerHeader className='text-left'>
            <DrawerTitle className="text-2xl font-extrabold text-green-800">💸 Add Expense</DrawerTitle>
            <DrawerDescription className="text-gray-500 text-sm">All fields are required.</DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleAddExpense} className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
            {/* Budget */}
            <div className="relative">
              <Gauge className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <Input
                type="number"
                placeholder="Monthly Budget (₹)"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
                required
                className="pl-10 border-green-300 focus:border-green-600"
              />
            </div>

            {/* Amount */}
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <Input
                type="number"
                placeholder="Expense Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="pl-10 border-green-300 focus:border-green-600"
              />
            </div>

            {/* MUI Date Picker */}
           
             
              <div className=" w-full">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Select Date"
    value={date}
    onChange={(newDate) => setDate(newDate)}
    disableFuture
    slots={{
      openPickerIcon: CalendarViewMonthOutlined,
    }}
    slotProps={{
      popper: {
        disablePortal: true,
      },
      dialog: {
        container: () => document.getElementById('drawer-content'),
        PaperProps: {
          sx: {
            zIndex: 60,
          },
        },
      },
      textField: {
        fullWidth: true,
        required: true,
        variant: 'outlined',
        size: 'small',
        sx: {
          mt: 1,
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.5rem',
          },
        },
        InputProps: {
          sx: {
            backgroundColor: 'white',
          },
        },
      },
    }}
  />
</LocalizationProvider>
              </div>
            

            {/* Category */}
            <div className="relative">
              <ListOrdered className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger className="pl-10 border-green-300 focus:border-green-600">
                  <SelectValue placeholder="🍽️ Choose Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">🍔 Food</SelectItem>
                  <SelectItem value="travel">✈️ Travel</SelectItem>
                  <SelectItem value="shopping">🛍️ Shopping</SelectItem>
                  <SelectItem value="utilities">💡 Utilities</SelectItem>
                  <SelectItem value="other">🧾 Others</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="relative">
              <StickyNote className="absolute left-3 top-3 text-green-600 w-5 h-5" />
              <Textarea
                placeholder="📝 Add a description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="pl-10 pt-2 border-green-300 focus:border-green-600"
              />
            </div>
          </form>

          {/* Footer */}
          <div className="px-4 pb-4 pt-2 border-t border-gray-200">
            <Button type="submit" onClick={handleAddExpense} className="w-full bg-green-700 hover:bg-green-600 text-white">
              Add Expense
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full mt-2 border border-red-600 text-green-800">
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-green-900 text-white border-t border-green-700 z-40 md:hidden h-20">
        <div className="flex justify-around items-center h-full px-4">
          <Link href="/" className="flex flex-col items-center hover:text-yellow-400">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/expenses" className="flex flex-col items-center hover:text-yellow-400">
            <LineChart className="w-6 h-6" />
            <span className="text-xs mt-1">Expenses</span>
          </Link>
          <Link href="/bills" className="flex flex-col items-center hover:text-yellow-400">
            <ReceiptText className="w-6 h-6" />
            <span className="text-xs mt-1">Bills</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center hover:text-yellow-400">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
