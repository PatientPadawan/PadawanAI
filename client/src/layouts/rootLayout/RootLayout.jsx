import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import {
  ClerkProvider,
  SignedIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

const UserInfo = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return null;
  }

  // Display username if available, otherwise use email
  const displayName =
    user.username || user.primaryEmailAddress?.emailAddress || "";

  return <div className="user">{displayName}</div>;
};

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="root-layout">
          <header>
            <Link to="/" className="logo-link">
              <img src="/logo.png" alt="logo" className="logo" />
              <span className="title">PadawanAI</span>
            </Link>
            <UserInfo />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
