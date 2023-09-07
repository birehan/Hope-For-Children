import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import Loading from "./Loading";
import Sidebar from "./dashboard_components/Sidebar";
import DesktopSidebar from "./dashboard_components/DesktopSidebar";
import Header from "./dashboard_components/Header";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DesktopSidebar />

        <div className="lg:pl-72">
          <Header setSidebarOpen={setSidebarOpen} />

          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
}
