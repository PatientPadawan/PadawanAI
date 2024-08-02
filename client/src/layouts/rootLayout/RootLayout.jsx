import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="root-layout">
        <header>
          <Link to="/">
            <img src="/logo.png" alt="logo" className="logo" />
            <span>PadawanAI</span>
          </Link>
          <div className="user">User Name</div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
