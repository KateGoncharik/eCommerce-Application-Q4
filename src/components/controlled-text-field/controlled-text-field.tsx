import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { TextField } from '@mui/material';

export const ControlledTextField = <T extends FieldValues>({
  control,
  label,
  name,
}: {
  control: Control<T>;
  label: string;
  name: Path<T>;
}): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <TextField
            error={fieldState.invalid}
            helperText={fieldState.error?.message ?? ' '}
            label={label}
            size="small"
            {...field}
          />
        );
      }}
    />
  );
};
