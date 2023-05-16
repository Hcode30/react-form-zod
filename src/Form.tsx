import './formStyle.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import formSchema, { FormValues } from './schema';

const Form = () => {
  //  define The Form Variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  //   Console Log The Raw Validated Data
  const onSubmit = (data: FormValues) => {
    delete data.confirmPassword;
    console.log(data);
  };
  //    The Form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          id="firstName"
          placeholder="First Name ..."
          {...register('firstName')}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          type="text"
          id="lastName"
          placeholder="Last Name ..."
          {...register('lastName')}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
          placeholder="Email ..."
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label htmlFor="age">
        Age
        <input
          type="text"
          id="age"
          placeholder="Age ..."
          {...register('age', {
            setValueAs: (age) => (age === '' ? undefined : parseInt(age)),
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          placeholder="Password ..."
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      <label htmlFor="confirmPassword">
        Confirm Password
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password ..."
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </label>

      <input type="submit" />
    </form>
  );
};
export default Form;
