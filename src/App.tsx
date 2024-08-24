import { openDB } from 'idb';
import type { Component } from 'solid-js';

function init() {
  return openDB('item_roulette', 1, {});
}

const App: Component = () => {
  return <div class="grid grid-flow-col bg-red-200 animate-in fade-in">hello world</div>;
};

export default App;
