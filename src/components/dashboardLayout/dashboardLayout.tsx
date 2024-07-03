import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { Drawer } from "antd";
import { useState } from "react";
import '../../../src/styles/tailwind.css'; 


const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpen = () => setOpenSidebar(true);
  const handleClose = () => setOpenSidebar(false);

  return (
    <main className="container flex flex-row h-full w-full bg-gray-100">
      <Header handleOpenSidebar={handleOpen} />
      <section style={{ display: "flex", width:'100%' }}>
       
          <section className='sidebar h-full whitespace-nowrap bg-gray-200 border-r border-gray-300 sm:hidden sm:w-7/12 sm:whitespace-normal'>
            <Sidebar />
          </section>
          <Drawer placement={"left"} onClose={handleClose} open={openSidebar}  >
            <Sidebar />
          </Drawer>
       

        <section className='mainContent flex flex-col w-full bg-gray-200 p-16 overflow-hidden sm:pl-0 sm:p-0'>
          <div className='children flex flex-col w-full p-16 bg-white rounded-lg shadow-md sm:pl-4 sm:pr-4 lg:pl-60'>
            <Outlet />
          </div>
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;


