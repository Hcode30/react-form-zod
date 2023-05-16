import { z, ZodType } from 'zod';
export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    password: string;
    confirmPassword?: string;
  }
const schema: ZodType<FormValues> = z
    .object({
      firstName: z
        .string()
        .min(2, 'First name must be more than 2 characters')
        .max(30, 'First name must be less than 30 characters'),
      lastName: z
        .string()
        .min(2, 'Last name must be more than 2 characters')
        .max(30, 'Last name must be less than 30 characters'),
      email: z.string().email('Please enter a valid email address'),
      age: z
        .number().int("Age must be a whole number")
        .positive('Age must be a positive number')
        .min(8, 'You must be at least 8 years old')
        .max(150, 'You must be less than 150 years old'),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(50, 'Password must be less than 50 characters'),
      confirmPassword: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(50, 'Password must be less than 50 characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: `Passwords Don't match`,
      path: ['confirmPassword'],
    });
    export default schema;