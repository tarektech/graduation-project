import React, { useContext } from 'react';
import NavBar from '../navigation/NavBarSignIn';
import Footer from '../Footer/Footer';
import signinupstyles from './SignInup.module.css';
// import './SignUp-Login.css';
import { AuthContext } from '@/context/AuthContext';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useHttpClient } from '../hooks/http-hook';
import '../UI/LoadingSpinner.css';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '../shadcn/ui/form';
import { Input } from '../shadcn/ui/input';
import { Button } from '../shadcn/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

function SignInPage() {
  const auth = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const responseData = await sendRequest(
        'http://localhost:4000/users/login',
        'POST',
        JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        { 'Content-Type': 'application/json' }
      );
      console.log('responseData', responseData);
      auth.login(responseData.userId, responseData.token);
    } catch (err) {
      console.log('error of sign in ', err);
    }
  };

  return (
    <>
      <NavBar />
      <div className={signinupstyles.signincontainer}>
        <div className="form-container">
          {isLoading && <LoadingSpinner className="center" />}
          <p className="title">Welcome back</p>
          <Form {...form}>
            <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading || form.formState.isSubmitting}
                className="form-btn w-full"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignInPage;
