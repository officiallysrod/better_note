import Dexie from 'dexie';

class DatabaseInstance {
  constructor() {
    const db = new Dexie('BetterNoteDatabase');

    db.version(1).stores({
      notes: '++id,body,isActive,*createdAt,updatedAt'
    });
    return db;
  }
}

export default DatabaseInstance;
