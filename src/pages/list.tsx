import { createRenderEffect, createSignal, For, Setter } from 'solid-js';
import { IconInbox, IconPlus } from '~/components/icons';
import { Button } from '~/components/ui/button';
import { Link } from '~/components/ui/link';
import { TextField, TextFieldInput, TextFieldLabel } from '~/components/ui/text-field';
import { get, Item, set } from '~/db';

export function List() {
  const [list, setList] = createSignal<Item[]>([]);

  createRenderEffect(async () => {
    const defaultList = (await get<Item[]>('list')) ?? [];
    setList(defaultList);
  });

  return (
    <div class="m-auto flex max-w-96 flex-col items-center duration-300 animate-in fade-in-0 zoom-in-105">
      <Link href="/" class="flex gap-2" variant={{ variant: 'outline' }}>
        <span>Home</span>
        <IconInbox />
      </Link>
      <div>
        <Add setList={setList} />
        <ul>
          <For each={list()}>{(item) => <ListItem item={item} />}</For>
        </ul>
      </div>
    </div>
  );
}

type ListItemProps = {
  item: Item;
};
function ListItem({ item }: ListItemProps) {
  return <li>{item.name}</li>;
}

type AddItemProps = {
  setList: Setter<Item[]>;
};
function Add({ setList }: AddItemProps) {
  const [value, setValue] = createSignal('');

  createRenderEffect(async () => {
    const defaultValue = (await get<string>('value')) ?? '';
    setValue(defaultValue);
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newItem = {
          id: crypto.randomUUID(),
          name: formData.get('value') as string,
        };
        setValue('');

        setList((prev) => {
          const next = [...prev, newItem];
          set('list', next);
          return next;
        });
      }}
      class="flex items-end gap-2"
    >
      <TextField>
        <TextFieldLabel>Hello World</TextFieldLabel>
        <TextFieldInput
          name="value"
          value={value()}
          onInput={(e) => {
            set('value', e.currentTarget.value);
            setValue(e.currentTarget.value);
          }}
        />
      </TextField>
      <Button type="submit" variant="secondary">
        <IconPlus />
      </Button>
    </form>
  );
}
