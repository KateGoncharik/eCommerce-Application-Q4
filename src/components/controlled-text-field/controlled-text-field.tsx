import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { TextField } from '@mui/material';

export const ControlledTextField = <T extends FieldValues>({
  control,
  disabled = false,
  label,
  name,
  type = 'text',
}: {
  control: Control<T>;
  disabled?: boolean;
  label?: string;
  name: Path<T>;
  type?: string;
  variant?: string;
}): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <TextField
            disabled={disabled}
            error={fieldState.invalid}
            helperText={fieldState.error?.message ?? ' '}
            label={label}
            size="small"
            type={type}
            {...field}
          />
        );
      }}
    />
  );
};
