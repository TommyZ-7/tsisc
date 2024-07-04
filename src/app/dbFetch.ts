'use server';

import sqlite3 from 'sqlite3';
import path from 'path';

export const fetchActions = async () => {
  const filepath = path.join(process.cwd(), 'tsisc.sqlite3');
  const db = new sqlite3.Database(filepath);
  const actions = await new Promise((resolve, reject) => {
    db.all('SELECT * FROM Schedule', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  db.close();
  return JSON.parse(JSON.stringify(actions));
};
