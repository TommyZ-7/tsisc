'use server';

import sqlite3 from 'sqlite3';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';



export const authActions = async (value: String) => {
  
  if (value === "sakura") { 
    return {status: 200, key: "dd63d414-e908-ad29-53a3-a1196d5b1c33"};
  } else {
    return {status: 401, key: "error"};
  }

};
