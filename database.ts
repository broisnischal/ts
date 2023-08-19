interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  savetostring(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};

  get(id: string): string {
    return this.db[id];
  }

  set(id: string, value: string) {
    this.db[id] = value;
  }
}

class persistantInMemoryDb extends InMemoryDatabase implements Persistable {
  savetostring(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const db = new persistantInMemoryDb();

db.set("foo", "bar");
console.log(db.get("foo"));
// console.log(db.savetostring());

const saved = db.savetostring();
db.set("foo", "db1 bar");
console.log(db.get("foo"));

const db2 = new persistantInMemoryDb();

db2.restoreFromString(saved);

console.log(db2.get("foo"));
