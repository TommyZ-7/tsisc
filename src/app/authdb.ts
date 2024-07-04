'use server';

import sqlite3 from 'sqlite3';


export const authActions = async (value: String) => {
  const db = new sqlite3.Database('./tsisc.sqlite3');
  //データベース内のdataテーブルにあるuuidカラムの値がvalueと一致するものを取得
  interface Action {
    key: string;
    // add other properties here if needed
  }
  
  const actions: Action[] = await new Promise((resolve, reject) => {
    db.all(`SELECT * FROM data WHERE uuid = '${value}'`, (err, rows: unknown[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as Action[]);
      }
    });
  });
  
  db.close();
  
  //なかった場合404を返す 
  if (actions.length === 0) {
    return {status: 404};
  }
  const key = actions[0].key;

  return {status: 200, key: key};
};
