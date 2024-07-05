'use server';

import sqlite3 from 'sqlite3';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';



export const authActions = async (value: String) => {
  const { data, error } = await supabase.from("data").select();
  //uuidカラムの値がvalueと一致するものを取得
  if (error) throw error;
  console.log(data);
  const actions = data.filter((action: { uuid: String; }) => action.uuid === value);
  
  
  console.log(actions);
  
  //なかった場合404を返す 
  if (actions.length === 0) {
    return {status: 404};
  }
  const key = actions[0].key;

  return {status: 200, key: key};
};
