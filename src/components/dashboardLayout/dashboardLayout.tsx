import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { Drawer } from "antd";
import { useState } from "react";
import "../../../src/styles/tailwind.css";

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpen = () => setOpenSidebar(true);
  const handleClose = () => setOpenSidebar(false);

  return (
    <main>
      <Header handleOpenSidebar={handleOpen} />
      <div className="flex flex-col h-screen">
        <section className="flex flex-1">
          <section className="h-full bg-gray-10 border-r border-gray-300 sm:ml-4 sm:block hidden">
            <Sidebar />
          </section>
          {/* Conditionally render Drawer only on small screens */}
          <Drawer placement="left" onClose={handleClose} visible={openSidebar} className="sm:hidden">
            <Sidebar />
          </Drawer>
          <section className="flex flex-col w-full  bg-gray-10 overflow-hidden sm:ml-0 flex-1">
            <div className="flex flex-col w-full  rounded-lg  sm:pl-4 sm:pr-4  flex-1">
              <Outlet />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
