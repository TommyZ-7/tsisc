'use server';

import sqlite3 from 'sqlite3';
import path from 'path';

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
  const filepath = path.join(process.cwd(), 'tsisc.sqlite3');

  const db = new sqlite3.Database(filepath);
  const actions = await new Promise<void>((resolve, reject) => {
    //undefinedの場合は0に変換
    db.run(`UPDATE Schedule SET comment = '${action.comment}', mon1 = '${action.mon1}', mon2 = '${action.mon2}', mon3 = '${action.mon3}', mon4 = '${action.mon4}', mon5 = '${action.mon5}', mon6 = '${action.mon6}', tue1 = '${action.tue1}', tue2 = '${action.tue2}', tue3 = '${action.tue3}', tue4 = '${action.tue4}', tue5 = '${action.tue5}', tue6 = '${action.tue6}', wed1 = '${action.wed1}', wed2 = '${action.wed2}', wed3 = '${action.wed3}', wed4 = '${action.wed4}', wed5 = '${action.wed5}', wed6 = '${action.wed6}', thu1 = '${action.thu1}', thu2 = '${action.thu2}', thu3 = '${action.thu3}', thu4 = '${action.thu4}', thu5 = '${action.thu5}', thu6 = '${action.thu6}', fri1 = '${action.fri1}', fri2 = '${action.fri2}', fri3 = '${action.fri3}', fri4 = '${action.fri4}', fri5 = '${action.fri5}', fri6 = '${action.fri6}', sat1 = '${action.sat1}', sat2 = '${action.sat2}', sat3 = '${action.sat3}', sat4 = '${action.sat4}', sat5 = '${action.sat5}', sat6 = '${action.sat6}' WHERE id = '${action.id}'`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

  db.close();
  return;}
