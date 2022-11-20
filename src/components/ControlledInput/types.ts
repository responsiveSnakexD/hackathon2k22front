import {Control, Path, FieldValues} from 'react-hook-form';

export type ControlledInputProps<T extends FieldValues> = {
  label: string;
  control: Control<T>;
  name: Path<T>;
  validate?: (value: string) => string | undefined;
  password?: boolean;
};
