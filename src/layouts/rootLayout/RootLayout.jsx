import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="logo" className="logo"/>
          <span>PadawanAI</span>
        </Link>
        <div className="user">User Name</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
