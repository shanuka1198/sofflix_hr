import SideNav from "../component/side-Nav/sideNav";
import Header from "../component/header/header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div className="flex flex-row bg-gray-200 min-h-screen">
      {/* Sidebar */}
      <div className="h-screen sticky top-0">
        <SideNav />
      </div>

      {/* Main area */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className="h-14 sticky top-0 z-10">
          <Header />
        </div>

        {/* Page content */}
        <div className="flex-grow ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
