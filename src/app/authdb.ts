'use server';

import sqlite3 from 'sqlite3';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';



export const authActions = async (value: String) => {
    //supabaseのdataテーブルからuu

  const { data, error } = await supabase.from("data").select();

  if (error){
    return {status : 404}
  }
  try{
    const actions = data.filter((action : {uuid : String}) => action.uuid === value);
    const key = actions[0].key;
    return {status : 200, key : key};
  }catch(e){
    return {status : 404}
  }
  
  
};
