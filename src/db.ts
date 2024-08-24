import { openDB } from 'idb';

const db = await openDB('item_roulette', 1, {});
export default db;
