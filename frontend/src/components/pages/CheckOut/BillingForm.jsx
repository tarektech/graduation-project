'use client';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/shadcn/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/ui/form';
import { Input } from '@/components/shadcn/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/ui/select';
import { PhoneInput } from '@/components/shadcn/ui/phone-input';

const formSchema = z.object({
  first_name: z.string().min(1),
  'address-1': z.string().min(1),
  'address-2': z.string().min(1),
  city_selector: z.string(),
  email: z.string(),
  phone_number: z.string(),
});

export default function BillingForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full"
      >
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium text-gray-700">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your full name"
                  type="text"
                  className="h-11"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="address-1"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Address Line 1
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Street address"
                    type="text"
                    className="h-11"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address-2"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Address Line 2
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Apartment, suite, etc."
                    type="text"
                    className="h-11"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="city_selector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium text-gray-700">
                City
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Choose your city" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="istanbul">Istanbul</SelectItem>
                  <SelectItem value="ankara">Ankara</SelectItem>
                  <SelectItem value="izmir">Izmir</SelectItem>
                  <SelectItem value="antalya">Antalya</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    className="h-11"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Phone Number
                </FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Enter your phone number"
                    className="h-11"
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
