import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main style={{width: "90vw", margin: "auto"}}>

      <Outlet />
      </main>
    </div>
  );
}