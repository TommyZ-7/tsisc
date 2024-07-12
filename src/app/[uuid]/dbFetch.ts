'use server';

import sqlite3 from 'sqlite3';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';


export const fetchActions = async (lpath: String) => {
  //supabaseのScheduleテーブル内のkeyカラムとlpathの値が一致するものを取得
  const { data, error } = await supabase.from("Schedule").select();
  if (error){
    return {status : 404}
  }
  
  const actions = data;




  
  return JSON.parse(JSON.stringify(actions));
};
