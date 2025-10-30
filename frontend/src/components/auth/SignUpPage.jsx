import React, { useContext } from 'react';
import NavBar from '../navigation/NavBarSignIn';
import Footer from '../Footer/Footer';
import signinupstyles from './SignInup.module.css';
import './SignUp-Login.css';
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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

function SignUpPage() {
  const auth = useContext(AuthContext);
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });
  const { sendRequest, isLoading, error } = useHttpClient();

  const onSubmit = async (data) => {
    try {
      const responseData = await sendRequest(
        'http://localhost:4000/users/signup',
        'POST',
        JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
        { 'Content-Type': 'application/json' }
      );
      auth.login(responseData.userId, responseData.token);
    } catch (err) {
      console.error('error of sign up ', err);
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
                name="name"
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
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
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                }}
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
              {error && <p className="error">{error}</p>}
              <p className="page-link">
                <span className="page-link-label">Forgot Password?</span>
              </p>
              <button className="form-btn" type="submit">
                Sign up
              </button>
            </form>
          </Form>

          <div className="text-center flex flex-col items-center gap-2">
            <p>Don&apos;t have an account?</p>
            <Button asChild variant="link" className="sign-up-link mx-auto">
              <Link to="/signin">Login</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignUpPage;
