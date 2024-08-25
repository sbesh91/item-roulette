import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core';
import { Route, Router } from '@solidjs/router';
import { ModeToggle } from '~/components/dark-mode';
import { Toaster } from '~/components/ui/sonner';
import { Home } from '~/pages/home';
import { List } from '~/pages/list';

const App = () => {
  const storageManager = createLocalStorageManager('theme');
  return (
    <>
      <ColorModeScript storageType={storageManager.type} />
      <ColorModeProvider storageManager={storageManager}>
        <div class="grid h-dvh grid-rows-[auto_1fr] overflow-auto bg-white dark:bg-black">
          <header class="border-muted-foreground sticky top-0 grid w-full grid-cols-[1fr_auto] items-center border-b-[1px] bg-zinc-400/40 p-2 backdrop-blur-sm dark:bg-zinc-700/40">
            <a href="/item-roulette" class="font-semibold">
              Roulette
            </a>
            <ModeToggle />
          </header>
          <main class="p-2">
            <Router base="item-roulette">
              <Route path="/" component={Home} />
              <Route path="/list" component={List} />
            </Router>
          </main>
        </div>
        <Toaster richColors />
      </ColorModeProvider>
    </>
  );
};

export default App;
