import { openDB } from 'idb';

const dbPromise = openDB('item_roulette', 1, {
  upgrade(db) {
    db.createObjectStore('keyval');
  },
});

export async function get<T>(key: IDBKeyRange | IDBValidKey) {
  return (await dbPromise).get('keyval', key) as Promise<T>;
}
export async function set(key: IDBKeyRange | IDBValidKey | undefined, val: unknown) {
  return (await dbPromise).put('keyval', val, key);
}
export async function del(key: IDBKeyRange | IDBValidKey) {
  return (await dbPromise).delete('keyval', key);
}
export async function clear() {
  return (await dbPromise).clear('keyval');
}
export async function keys() {
  return (await dbPromise).getAllKeys('keyval');
}

export type Item = {
  id: string;
  name: string;
};
