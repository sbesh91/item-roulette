import { TextField, TextFieldInput, TextFieldLabel } from '~/components/ui/text-field';

const App = () => {
  return (
    <div class="dark h-dvh bg-slate-700 p-2">
      <TextField>
        <TextFieldLabel>Hello World</TextFieldLabel>
        <TextFieldInput
          onChange={(e) => {
            console.log(e);
          }}
        />
      </TextField>
    </div>
  );
};

export default App;
