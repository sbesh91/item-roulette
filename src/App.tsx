import { ModeToggle } from './components/dark-mode';
import { Home } from './pages/home';
import { List } from './pages/list';
import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core';
import { Route, Router } from '@solidjs/router';

const App = () => {
  const storageManager = createLocalStorageManager('theme');

  return (
    <>
      <ColorModeScript storageType={storageManager.type} />
      <ColorModeProvider storageManager={storageManager}>
        <div class="h-dvh overflow-auto dark:bg-zinc-950">
          <header class="border-muted-foreground sticky top-0 grid w-full grid-cols-[1fr_auto] items-center border-b-[1px] bg-zinc-400/40 p-2 backdrop-blur-sm dark:bg-zinc-700/40">
            <a href="/" class="font-semibold">
              Roulette
            </a>
            <ModeToggle />
          </header>
          <main class="h-[1200px] p-2">
            <Router base="item-roulette">
              <Route path="/" component={Home} />
              <Route path="/list" component={List} />
            </Router>
          </main>
        </div>
      </ColorModeProvider>
    </>
  );
};

export default App;
