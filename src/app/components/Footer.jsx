'use client';

import React from 'react';
import {
  Home,
  LineChart,
  Plus,
  ReceiptText,
  User,
  IndianRupee,
  ListOrdered,
  StickyNote,
} from 'lucide-react';
import Link from 'next/link';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
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

const BottomNavBar = () => {
  return (
    <>
      {/* Floating Add Expense Drawer */}
      <Drawer direction="bottom" className="">
        <DrawerTrigger asChild>
          <button className="fixed bottom-24 right-4 transform -translate-x-1/2 z-50 shadow-lg animate-fab-glow bg-green-900 hover:bg-green-600 transition text-white border border-white rounded-[16px] w-16 h-16 flex items-center justify-center">
            <Plus className="w-8 h-8" />
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-fit fixed w-full sm:max-w-sm ml-auto bg-white rounded-t-xl shadow-lg  px-4 pb-4 flex flex-col">
        <div className="mx-auto  h-1.5 w-12 rounded-full bg-green-900" />
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-2xl font-extrabold text-green-800">
              💸 Add Expense
            </DrawerTitle>
            <DrawerDescription className="text-gray-500 text-sm">
              Fill in the fields below to track your spending.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex-1 mt-4 px-2 space-y-6">
            {/* Amount Input */}
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <Input
                type="number"
                placeholder="Enter amount (₹)"
                className="pl-10 border-green-300 focus:border-green-600"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <ListOrdered className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <Select>
                <SelectTrigger className="pl-10 border-green-300 focus:border-green-600">
                  <SelectValue placeholder="🍽️ Choose Category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="food">🍔 Food</SelectItem>
                  <SelectItem value="travel">✈️ Travel</SelectItem>
                  <SelectItem value="shopping">🛍️ Shopping</SelectItem>
                  <SelectItem value="utilities">💡 Utilities</SelectItem>
                  <SelectItem value="other">🧾 Others</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description Field */}
            <div className="relative">
              <StickyNote className="absolute left-3 top-3 text-green-600 w-5 h-5" />
              <Textarea
                placeholder="📝 Add a description..."
                className="pl-10 pt-2 border-green-300 focus:border-green-600"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <DrawerFooter className="mt-6">
            <Button className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold">
               Add Expense
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="w-full text-green-800 border-green-300"
              >
                 Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 inset-x-0 bg-green-900 text-white border-t border-green-700 z-40 md:hidden h-20">
        <div className="flex justify-around items-center h-full px-4">
          <Link
            href="/"
            className="flex flex-col items-center text-white hover:text-yellow-400"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1"> Home</span>
          </Link>

          <Link
            href="/expenses"
            className="flex flex-col items-center text-white hover:text-yellow-400"
          >
            <LineChart className="w-6 h-6" />
            <span className="text-xs mt-1"> Expenses</span>
          </Link>

         
          <Link
            href="/bills"
            className="flex flex-col items-center text-white hover:text-yellow-400"
          >
            <ReceiptText className="w-6 h-6" />
            <span className="text-xs mt-1"> Bills</span>
          </Link>

          <Link
            href="/profile"
            className="flex flex-col items-center text-white hover:text-yellow-400"
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1"> Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default BottomNavBar;
