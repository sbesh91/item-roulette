import { createSignal, For, Setter } from 'solid-js';
import { IconPlus } from '~/components/icons';
import { Button } from '~/components/ui/button';
import { TextField, TextFieldInput, TextFieldLabel } from '~/components/ui/text-field';
import { get, set } from '~/db';

type Item = {
  id: string;
  name: string;
};

const defaultList = (await get<Item[]>('list')) ?? [];

export function List() {
  const [list, setList] = createSignal(defaultList);

  return (
    <div>
      <Add setList={setList} />
      <ul>
        <For each={list()}>{(item) => <ListItem item={item} />}</For>
      </ul>
    </div>
  );
}

type ListItemProps = {
  item: Item;
};
function ListItem({ item }: ListItemProps) {
  return <li>{item.name}</li>;
}

const defaultValue = (await get<string>('value')) ?? '';

type AddItemProps = {
  setList: Setter<Item[]>;
};
function Add({ setList }: AddItemProps) {
  const [value, setValue] = createSignal(defaultValue);
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
