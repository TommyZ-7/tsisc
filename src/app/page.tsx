'use client';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchActions } from './dbFetch';
import { useRouter } from 'next/navigation';
import { authActions } from './authdb';
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

type Action = {
  id: number;
  comment: string;
  name: string;
  mon1: boolean;
  mon2: boolean;
  mon3: boolean;
  mon4: boolean;
  mon5: boolean;
  mon6: boolean;
  tue1: boolean;
  tue2: boolean;
  tue3: boolean;
  tue4: boolean;
  tue5: boolean;
  tue6: boolean;
  wed1: boolean;
  wed2: boolean;
  wed3: boolean;
  wed4: boolean;
  wed5: boolean;
  wed6: boolean;
  thu1: boolean;
  thu2: boolean;
  thu3: boolean;
  thu4: boolean;
  thu5: boolean;
  thu6: boolean;
  fri1: boolean;
  fri2: boolean;
  fri3: boolean;
  fri4: boolean;
  fri5: boolean;
  fri6: boolean;
  sat1: boolean;
  sat2: boolean;
  sat3: boolean;
  sat4: boolean;
  sat5: boolean;
  sat6: boolean;
};

export default function Page() {
  const route = useRouter();
  const [value, setValue] = React.useState("")
  const [iinntyo, setIinntyo] = useState<Action[]>([]);
  const [huku, setHuku] = useState<Action[]>([]);
  const [syomu, setSyomu] = useState<Action[]>([]);
  const [syougai, setSyougai] = useState<Action[]>([]);
  const [kikaku, setKikaku] = useState<Action[]>([]);
  const [kouhou, setKouhou] = useState<Action[]>([]);
  const [warnMSG, setWarnMSG] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const list = [iinntyo, huku, syomu, syougai, kikaku, kouhou];
  const listName = ['委員長', '副委員長', '庶務局', '渉外局', '企画局', '広報局'];
  useEffect(() => {
    const response = async () => {
      const response = await fetchActions();
      setIinntyo(response.filter((action: Action) => action.name === 'iinntyo'));
      setHuku(response.filter((action: Action) => action.name === 'huku'));
      setSyomu(response.filter((action: Action) => action.name === 'syomu'));
      setSyougai(response.filter((action: Action) => action.name === 'syougai'));
      setKikaku(response.filter((action: Action) => action.name === 'kikaku'));
      setKouhou(response.filter((action: Action) => action.name === 'kouhou'));
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
      console.log(response);
      if (response.status === 404) {
        return;
      }
      route.push(`/${response.key}`)
    }
    response();

  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {list.map((item) => {
        return (
          <div key={item[0].id} className="pb-12">
            <h1 className="text-2xl font-bold text-center">{listName[item[0].id - 1]}</h1>
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
                  <TableCell className={item[0].mon1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].tue1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].wed1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].thu1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].fri1 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].sat1 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={2}>
                  <TableCell className="">2</TableCell>
                  <TableCell className={item[0].mon2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].tue2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].wed2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].thu2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].fri2 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].sat2 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={3}>
                  <TableCell className="">3</TableCell>
                  <TableCell className={item[0].mon3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].tue3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].wed3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].thu3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].fri3 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].sat3 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={4}>
                  <TableCell className="">4</TableCell>
                  <TableCell className={item[0].mon4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].tue4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].wed4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].thu4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].fri4 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].sat4 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={5}>
                  <TableCell className="">5</TableCell>
                  <TableCell className={item[0].mon5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].tue5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].wed5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].thu5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].fri5 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].sat5 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
                <TableRow key={6}>
                  <TableCell className="">6</TableCell>
                  <TableCell className={item[0].mon6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].tue6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].wed6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].thu6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].fri6 ? "text-center bg-green-400" : ""}></TableCell>
                  <TableCell className={item[0].sat6 ? "text-center bg-green-400" : ""}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </Card>
            <Accordion type='single' collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  コメント
                </AccordionTrigger>
                <AccordionContent>
                  <p>{item[0].comment}</p>
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
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <InputOTP maxLength={6} className='text-center' value={value} onChange={(value) => setValue(value)} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              {warnMSG ? <p className="text-red-500 text-center">6文字入力してください</p> : <br />}

              
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



