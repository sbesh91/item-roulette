import { createRenderEffect, createSignal, Show } from 'solid-js';
import { IconSettings, IconSmile } from '~/components/icons';
import { Button } from '~/components/ui/button';
import { Link } from '~/components/ui/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';
import { Skeleton } from '~/components/ui/skeleton';
import { get, Item } from '~/db';
import randomItem from '~/random';

export function Home() {
  const [list, setList] = createSignal<Item[]>([]);
  const [selected, setSelected] = createSignal<Item>();

  createRenderEffect(async () => {
    const defaultList = (await get<Item[]>('list')) ?? [];
    setList(defaultList);
  });

  return (
    <div class="m-auto flex h-full max-w-96 flex-col items-center duration-300 animate-in fade-in-0 zoom-in-105">
      <Link href="/list" class="sticky bottom-2 flex gap-2" variant={{ variant: 'outline' }}>
        <span>Edit Roulette List</span>
        <IconSettings />
      </Link>
      <Sheet
        onOpenChange={(isOpen) => {
          const values = list();
          if (values.length === 0) {
            return;
          }

          if (isOpen) {
            setTimeout(() => {
              setSelected(randomItem(values));
            }, 2000);
          } else {
            setTimeout(() => {
              setSelected(undefined);
            }, 500);
          }
        }}
      >
        <SheetTrigger as={Button<'button'>} variant="ghost" size="flexible">
          <IconSmile class="size-16" />
        </SheetTrigger>
        <SheetContent noOverlay class="h-1/2">
          <SheetHeader>
            <SheetTitle>Today's roulette says...</SheetTitle>
            <SheetDescription>
              <Show when={!selected()}>
                <Skeleton class="m-auto" height={40} width={200} radius={10} />
              </Show>
              <Show when={selected}>
                <span class="text-lg font-semibold">{selected()?.name}</span>
              </Show>
              <Show when={list().length === 0}>Add items to your roulette first!</Show>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
