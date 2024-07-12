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
  rawName: string;
};

export default function Page() {
  

  const [data, setData] = useState<Action>({
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
    rawName: "",
  });


  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/").pop();

  useEffect(() => {
    const response = async () => {
      const response = await fetchActions(path || "");
      if (response.status === 404) {
        router.push("/");
        return;
      }
      setData(response.actions && response.actions.length > 0 ? response.actions[0] : {});
      setIsLoading(false);
    };
    response();

  }, [path, router]);

  const handleSubmit = () => {
    writeActions(data);
    router.push("/");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
      <div className="pb-9">
            <h1 className="text-2xl font-bold text-center">{data.rawName}</h1>
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
                    <Button variant="outline" size="icon" className={data.mon1 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, mon1: prevData.mon1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.tue1 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, tue1: prevData.tue1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.wed1 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, wed1: prevData.wed1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.thu1 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, thu1: prevData.thu1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.fri1 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, fri1: prevData.fri1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.sat1 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, sat1: prevData.sat1 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                </TableRow>
                <TableRow key={2} >
                  <TableCell>2</TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.mon2 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, mon2: prevData.mon2 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.tue2 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, tue2: prevData.tue2 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.wed2 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, wed2: prevData.wed2 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.thu2 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, thu2: prevData.thu2 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.fri2 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, fri2: prevData.fri2 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.sat2 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, sat2: prevData.sat2 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                </TableRow>
                <TableRow key={3} >
                  <TableCell>3</TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.mon3 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, mon3: prevData.mon3 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.tue3 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, tue3: prevData.tue3 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.wed3 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, wed3: prevData.wed3 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.thu3 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, thu3: prevData.thu3 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.fri3 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, fri3: prevData.fri3 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.sat3 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, sat3: prevData.sat3 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                </TableRow>
                <TableRow key={4} >
                  <TableCell>4</TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.mon4 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, mon4: prevData.mon4 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.tue4 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, tue4: prevData.tue4 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.wed4 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, wed4: prevData.wed4 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.thu4 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, thu4: prevData.thu4 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.fri4 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, fri4: prevData.fri4 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.sat4 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, sat4: prevData.sat4 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                </TableRow>
                <TableRow key={5} >
                  <TableCell>5</TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.mon5 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, mon5: prevData.mon5 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.tue5 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, tue5: prevData.tue5 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.wed5 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, wed5: prevData.wed5 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.thu5 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, thu5: prevData.thu5 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.fri5 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, fri5: prevData.fri5 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.sat5 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, sat5: prevData.sat5 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                </TableRow>
                <TableRow key={6} >
                  <TableCell>6</TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.mon6 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, mon6: prevData.mon6 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.tue6 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, tue6: prevData.tue6 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.wed6 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, wed6: prevData.wed6 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.thu6 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, thu6: prevData.thu6 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.fri6 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, fri6: prevData.fri6 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                  <TableCell className='p-1'>
                    <Button variant="outline" size="icon" className={data.sat6 ? "bg-green-400 hover:bg-green-400" : "hover:bg-none"} onClick={() => {setData(prevData => ({...prevData, sat6: prevData.sat6 ===1 ? 0 : 1 }))} }> </Button>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
            </Card>
          <Textarea placeholder="コメント記入欄" value={data.comment} onChange={(e) => setData(prevData => ({...prevData, comment: e.target.value}))} />
          </div>
          <Button  onClick={handleSubmit} >登録</Button>
    </main>
  );
}



