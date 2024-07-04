'use server';

import sqlite3 from 'sqlite3';

export const fetchActions = async (path: String) => {
  const db = new sqlite3.Database('./tsisc.sqlite3');
  const actions = await new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Schedule WHERE key = '${path}'`, (err, rows) => {
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
