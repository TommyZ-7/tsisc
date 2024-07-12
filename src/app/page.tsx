'use client';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchActions } from './dbFetch';
import { useRouter } from 'next/navigation';
import { authActions } from './authdb';
import { supabase } from '@/lib/supabaseClient';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"


import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { CodeSquare } from 'lucide-react';

type Action = {
  id: number;
  comment: string;
  name: string;
  mon1: number;
  mon2: number;
  mon3: number;
  mon4: number;
  mon5: number;
  mon6: number;
  tue1: number;
  tue2: number;
  tue3: number;
  tue4: number;
  tue5: number;
  tue6: number;
  wed1: number;
  wed2: number;
  wed3: number;
  wed4: number;
  wed5: number;
  wed6: number;
  thu1: number;
  thu2: number;
  thu3: number;
  thu4: number;
  thu5: number;
  thu6: number;
  fri1: number;
  fri2: number;
  fri3: number;
  fri4: number;
  fri5: number;
  fri6: number;
  sat1: number;
  sat2: number;
  sat3: number;
  sat4: number;
  sat5: number;
  sat6: number;
};

export default function Page() {
  const route = useRouter();
  const [value, setValue] = React.useState("")
  const [iinntyo, setIinntyo] = useState<Action>();
  const [huku, setHuku] = useState<Action>();
  const [huku2 , setHuku2] = useState<Action>();
  const [warnMSG, setWarnMSG] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const list = [iinntyo, huku, huku2];
  const listName = ['委員長', '副委員長', '副委員長2'];


  useEffect(() => {
    const response = async () => {
      const response = await fetchActions();
      setIinntyo(response.filter((action: { id: number; }) => action.id === 1)[0]);
      setHuku(response.filter((action: { id: number; }) => action.id === 2)[0]);
      setHuku2(response.filter((action: { id: number; }) => action.id === 3)[0]);
      setIsLoading(false);
    };
    response();
  }, []);
  



  const handlePress = () => {
    console.log('pressed');
    if (value.length !== 6) {
      setWarnMSG(true);
      return;
    }

    console.log(value);
    setWarnMSG(false);
    const response = async () => {
      const response = await authActions(value);
      if (response.status === 200) {
        route.push(`/${response.key}`)
        return;
      } else {
        setWarnMSG(true);
      }
    }
    response();

  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {list.map((item , index) => {
        return (
          <div key={index} className=" max-w-2xl">
            <h1 className="text-2xl font-bold text-center">{listName[index]}</h1>
            <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">時限</TableHead>
                  <TableHead>月</TableHead>
                  <TableHead>火</TableHead>
                  <TableHead>水</TableHead>
                  <TableHead>木</TableHead>
                  <TableHead>金</TableHead>
                  <TableHead>土</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              <TableRow key={1}>
                  <TableCell className="">1</TableCell>
                  <TableCell className={item && item.mon1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.tue1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.wed1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.thu1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.fri1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.sat1 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={2}>
                  <TableCell className="">2</TableCell>
                  <TableCell className={item && item.mon2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.tue2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.wed2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.thu2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.fri2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.sat2 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={3}>
                  <TableCell className="">3</TableCell>
                  <TableCell className={item && item.mon3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.tue3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.wed3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.thu3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.fri3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.sat3 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={4}>
                  <TableCell className="">4</TableCell>
                  <TableCell className={item && item.mon4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.tue4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.wed4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.thu4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.fri4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.sat4 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={5}>
                  <TableCell className="">5</TableCell>
                  <TableCell className={item && item.mon5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.tue5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.wed5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.thu5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.fri5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.sat5 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={6}>
                  <TableCell className="">6</TableCell>
                  <TableCell className={item && item.mon6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.tue6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.wed6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.thu6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.fri6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item && item.sat6 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
               
              </TableBody>
            </Table>
            </Card>
            <Accordion type='single' collapsible className="w-full pb-10">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  コメント
                </AccordionTrigger>
                <AccordionContent>
                  <p>{item && item.comment}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );
      }
      )}
      
      
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">ログイン</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>ログイン</DrawerTitle>
              <DrawerDescription>６桁のコードを入力してください</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <InputOTP inputMode="text" maxLength={6} className='text-center' value={value} onChange={(value) => setValue(value)} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup inputMode="text">
                  <InputOTPSlot index={0} inputMode="text"/>
                  <InputOTPSlot index={1} inputMode="text"/>
                  <InputOTPSlot index={2} inputMode="text"/>
                  <InputOTPSlot index={3} inputMode="text"/>
                  <InputOTPSlot index={4} inputMode="text"/>
                  <InputOTPSlot index={5} inputMode="text"/>
                </InputOTPGroup>
              </InputOTP>
              {warnMSG ? <p className="text-red-500 text-center">正しいコードを入力してください</p> : <br />}

              
            </div>
            <DrawerFooter>
              <Button onClick={handlePress}>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>


    </main>
  );
}



