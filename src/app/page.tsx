"use client";

import * as React from "react";
import { LoginForm } from "@/components/auth/login-form";
import { LoggedInDisplay } from "@/components/auth/logged-in-display";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserEmail("");
    setIsLoggedIn(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 selection:bg-primary/20 selection:text-primary">
      {isLoggedIn ? (
        <LoggedInDisplay email={userEmail} onLogout={handleLogout} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}
