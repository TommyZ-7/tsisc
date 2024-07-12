'use client';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchActions } from './dbFetch';
import { writeActions } from './dbWrite';
import { usePathname } from 'next/navigation';
import { Textarea } from "@/components/ui/textarea"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
  

  const [iinntyo, setIinntyo] = useState<Action>({
    id: 0,
    comment : "",
    name: "",
    mon1: 0,
    mon2: 0,
    mon3: 0,
    mon4: 0,
    mon5: 0,
    mon6: 0,
    tue1: 0,
    tue2: 0,
    tue3: 0,
    tue4: 0,
    tue5: 0,
    tue6: 0,
    wed1: 0,
    wed2: 0,
    wed3: 0,
    wed4: 0,
    wed5: 0,
    wed6: 0,
    thu1: 0,
    thu2: 0,
    thu3: 0,
    thu4: 0,
    thu5: 0,
    thu6: 0,
    fri1: 0,
    fri2: 0,
    fri3: 0,
    fri4: 0,
    fri5: 0,
    fri6: 0,
    sat1: 0,
    sat2: 0,
    sat3: 0,
    sat4: 0,
    sat5: 0,
    sat6: 0,
  });
  const [huku, setHuku] = useState<Action>({
    id: 0,
    comment : "",
    name: "",
    mon1: 0,
    mon2: 0,
    mon3: 0,
    mon4: 0,
    mon5: 0,
    mon6: 0,
    tue1: 0,
    tue2: 0,
    tue3: 0,
    tue4: 0,
    tue5: 0,
    tue6: 0,
    wed1: 0,
    wed2: 0,
    wed3: 0,
    wed4: 0,
    wed5: 0,
    wed6: 0,
    thu1: 0,
    thu2: 0,
    thu3: 0,
    thu4: 0,
    thu5: 0,
    thu6: 0,
    fri1: 0,
    fri2: 0,
    fri3: 0,
    fri4: 0,
    fri5: 0,
    fri6: 0,
    sat1: 0,
    sat2: 0,
    sat3: 0,
    sat4: 0,
    sat5: 0,
    sat6: 0,
  });
  const [huku2, setHuku2] = useState<Action>({
    id: 0,
    comment : "",
    name: "",
    mon1: 0,
    mon2: 0,
    mon3: 0,
    mon4: 0,
    mon5: 0,
    mon6: 0,
    tue1: 0,
    tue2: 0,
    tue3: 0,
    tue4: 0,
    tue5: 0,
    tue6: 0,
    wed1: 0,
    wed2: 0,
    wed3: 0,
    wed4: 0,
    wed5: 0,
    wed6: 0,
    thu1: 0,
    thu2: 0,
    thu3: 0,
    thu4: 0,
    thu5: 0,
    thu6: 0,
    fri1: 0,
    fri2: 0,
    fri3: 0,
    fri4: 0,
    fri5: 0,
    fri6: 0,
    sat1: 0,
    sat2: 0,
    sat3: 0,
    sat4: 0,
    sat5: 0,
    sat6: 0,
  });

  const list = [iinntyo, huku, huku2];

  const setList = [setIinntyo, setHuku, setHuku2];

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/").pop();

  useEffect(() => {
    const response = async () => {
      const response = await fetchActions(path || "");
      setIinntyo(response.filter((action: { id: number; }) => action.id === 1)[0]);
      setHuku(response.filter((action: {id: number; }) => action.id === 2)[0]);
      setHuku2(response.filter((action: {id: number; }) => action.id === 3)[0]);
      setIsLoading(false);
    };
    response();

  }, [path]);

  const handleSubmit = () => {
    list.forEach((item) => {
      writeActions(item);
    });
    router.push("/");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {list.map((item , index) => {
      return (
          
      <div className="pb-9" key={index}>
            <h1 className="text-2xl font-bold text-center">{item.name}</h1>
            <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">時限</TableHead>
                  <TableHead className='text-center'>月</TableHead>
                  <TableHead className='text-center'>火</TableHead>
                  <TableHead className='text-center'>水</TableHead>
                  <TableHead className='text-center'>木</TableHead>
                  <TableHead className='text-center'>金</TableHead>
                  <TableHead className='text-center'>土</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              <TableRow key={1} >
                  <TableCell>1</TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={list[index].mon1 ? "bg-green-400" : ""} onClick={() => {setList[index](prevData => ({...prevData, mon1: prevData.mon1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={list[index].tue1 ? "bg-green-400" : ""} onClick={() => {setList[index](prevData => ({...prevData, tue1: prevData.tue1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={list[index].wed1 ? "bg-green-400" : ""} onClick={() => {setList[index](prevData => ({...prevData, wed1: prevData.wed1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={list[index].thu1 ? "bg-green-400" : ""} onClick={() => {setList[index](prevData => ({...prevData, thu1: prevData.thu1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={list[index].fri1 ? "bg-green-400" : ""} onClick={() => {setList[index](prevData => ({...prevData, fri1: prevData.fri1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={list[index].sat1 ? "bg-green-400" : ""} onClick={() => {setList[index](prevData => ({...prevData, sat1: prevData.sat1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </Card>
          <Textarea placeholder="コメント記入欄" value={list[index].comment} onChange={(e) => setList[index](prevData => ({...prevData, comment: e.target.value}))} />
          </div>
      )})}
          <Button  onClick={handleSubmit} >登録</Button>
    </main>
  );
}



