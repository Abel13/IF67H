
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('if67h.db');

async function RunMigration()  {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        PRIMARY KEY (id)
      );`
    );
  });
}

export default RunMigration;