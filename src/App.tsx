import { ModeToggle } from './components/dark-mode';
import { List } from './pages/list';
import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core';

const App = () => {
  const storageManager = createLocalStorageManager('theme');

  return (
    <>
      <ColorModeScript storageType={storageManager.type} />
      <ColorModeProvider storageManager={storageManager}>
        <div class="h-dvh overflow-auto bg-zinc-950">
          <header class="border-muted-foreground sticky top-0 grid w-full grid-cols-[1fr_auto] items-center border-b-[1px] bg-zinc-700/40 p-2 backdrop-blur-sm">
            <span class="font-semibold">Roulette</span>
            <ModeToggle />
          </header>
          <main class="h-[1200px] p-2">
            <List />
          </main>
        </div>
      </ColorModeProvider>
    </>
  );
};

export default App;
