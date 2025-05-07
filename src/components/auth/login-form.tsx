"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/common/logo";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  onLoginSuccess: (email: string) => void;
}

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(data.email);
    }, 1000);
  }

  return (
    <Card className="w-full max-w-md shadow-xl animate-in fade-in-0 zoom-in-95 duration-500">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          <Logo className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl font-semibold tracking-tight">Login Portal</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-100">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="name@example.com" {...field} className="pl-10" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-200">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                       <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input type="password" placeholder="••••••••" {...field} className="pl-10" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-300" 
              disabled={isLoading}
              aria-label="Login to your account"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-muted-foreground animate-in fade-in-0 duration-500 delay-400">
        <p>&copy; {new Date().getFullYear()} Login Portal. All rights reserved.</p>
      </CardFooter>
    </Card>
  );
}
