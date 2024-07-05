'use server';

import { supabase } from '@/lib/supabaseClient';
import { on } from 'events';


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


export const writeActions = async (action: Action) => {
  console.log(action);
  //actionをsupabaseのScheduleテーブルに上書きする
  //idが一致するものにUPDATEする  
  const { data, error } = await supabase
    .from("Schedule")
    .update(action)
    .eq('id', action.id)
    .single()
  if (error) {
    console.error('Error updating data:', error)
    return null
  }
 
  return;
}
  
 
