"use client";

import { CheckCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/common/logo";

interface LoggedInDisplayProps {
  email: string;
  onLogout: () => void;
}

export function LoggedInDisplay({ email, onLogout }: LoggedInDisplayProps) {
  return (
    <Card className="w-full max-w-md text-center shadow-xl animate-in fade-in-0 zoom-in-95 duration-500">
      <CardHeader>
         <div className="mx-auto mb-4">
          <Logo className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl font-semibold tracking-tight flex items-center justify-center gap-2">
          <CheckCircle className="h-7 w-7 text-green-500 animate-in fade-in-0 zoom-in-125 duration-700 delay-200" />
          Logged In!
        </CardTitle>
        <CardDescription className="animate-in fade-in-0 slide-in-from-bottom-1 duration-500 delay-100">
          Welcome back to the portal.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-1 duration-500 delay-200">
        <p className="text-lg">
          Successfully logged in as: <strong className="text-primary">{email}</strong>
        </p>
        <p className="text-muted-foreground">
          You can now access all features of the Login Portal.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 animate-in fade-in-0 slide-in-from-bottom-1 duration-500 delay-300">
        <Button onClick={onLogout} variant="outline" className="w-full" aria-label="Logout from your account">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
         <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Login Portal. All rights reserved.</p>
      </CardFooter>
    </Card>
  );
}
