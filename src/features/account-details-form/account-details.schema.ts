import { z } from 'zod';

export const accountSchema = z.object({
  dateOfBirth: z
    .string()
    .date()
    .refine((value) => {
      const currentDate = new Date();
      const userDateOfBirth = new Date(value);
      const userAge = currentDate.getFullYear() - userDateOfBirth.getFullYear();
      return userAge >= 13;
    }, 'Must be at least 13 years old'),
  email: z.string().email('should be properly formatted'),
  firstName: z
    .string()
    .min(1, 'Must be at least 1 character')
    .regex(/^[a-zA-Z]+$/, 'Must contain only letters'),
  isEditMode: z.boolean(),
  lastName: z
    .string()
    .min(1, 'Must be at least 1 character')
    .regex(/^[a-zA-Z]+$/, 'Must contain only letters'),
});
export type AccountDetails = z.infer<typeof accountSchema>;
