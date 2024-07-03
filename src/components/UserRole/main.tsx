import PageLayout from "../pageLayout/main";
import { ReactComponent as Seperator } from "../../assets/Seperator.svg";
import { ReactComponent as Search } from "../../assets/magnifier.svg";
import { ReactComponent as Pics } from "../../assets/Frame 1.svg";
import { ReactComponent as Filter } from "../../assets/greys.svg";

import Button from "../../custom/button/button";
import { ReactComponent as Add } from "../../assets/Vector.svg";
import { Dropdown, Table, Button as AntButton, MenuProps, Modal } from "antd";
import { useState } from "react";
import SearchInput from "../../custom/searchInput/searchInput";
import { Form, Formik } from "formik";
import EditContent from "./edit";

const Main = () => {
  //   const [showSearch, setShowSearch] = useState(false);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [showAllFilter, setShowAllFilter] = useState(false);
  //   const [showAddModal, setShowAddModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  //   const handleSearch = (e: any) => {
  //     setSearchTerm(e.target.value);
  //   };

  const data = Array.from({ length: 2 }, (_, index) => ({
    id: `1234${index}`,
    name: "About Us",
    EmailAddress: "Description",
    Role: "blah",
  }));

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button style={{ border: "0rem" }} onClick={() => setOpenEdit(true)}>
          Edit
        </button>
      ),
    },
  ];
  const columns = [
    {
      key: "name",
      title: "name",
      dataIndex: "name",
    },
    {
      key: "EmailAddress",
      title: "Email Address",
      dataIndex: "EmailAddress",
    },
    {
      key: "Role",
      title: "Role",
      dataIndex: "Role",
    },

    {
      key: "action",
      title: "Action",
      render: () => (
        // <Dropdown menu={{ items }} trigger={["click"]}>
        <span>
          <AntButton onClick={() => setOpenEdit(true)} type="text">
            Edit
          </AntButton>
          <AntButton onClick={() => setOpenEdit(true)} type="text">
            Remove
          </AntButton>
        </span>
        // </Dropdown>
      ),
    },
  ];
  return (
    <main>
      <PageLayout
        paragraph="LGA Setup"
        firstText="Settings"
        secondText="Users & Roles Settings"
        iconBefore={<Seperator />}
      />

      <section className="card">
        {/* <div className='inside'>
          <p>Showing 1-11 of 88</p>
          <div>
            {!showSearch && (
              <span>
                <Search
                  onClick={() => setShowSearch((showSearch) => !showSearch)}
                />
              </span>
            )}
            {showSearch && (
              <SearchInput value={searchTerm} onChange={handleSearch} />
            )}

            {!showAllFilter && (
              <Search
                onClick={() =>
                  setShowAllFilter((showAllFilter) => !showAllFilter)
                }
              />
            )}
          </div>
        </div> */}

        <section className="w-full p-8 flex justify-between items-center bg-white">
          
          <>
            <SearchInput />
            <Filter />
            <Button iconBefore={<Add />} text="New User" className="  p-2" />
          </>

     
        </section>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ position: ["bottomCenter"] }}
          //rowKey={(record, index) => `${record.id}${index}`}
        />
      </section>

      <Modal
        open={openEdit}
        onCancel={() => setOpenEdit(false)}
        centered
        title={
          <div>
            <Pics />
            <p>New User</p>
          </div>
        }
        footer={() => (
          <Button
            onClick={() => setOpenEdit(false)}
            variant="text"
            text="Add User"
          />
        )}
      >
        <EditContent />
      </Modal>
    </main>
  );
};
export default Main;
