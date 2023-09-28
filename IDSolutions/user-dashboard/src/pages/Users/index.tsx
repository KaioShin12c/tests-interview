import React from "react";
import UsersList from "../../features/users/users-list";
import UsersSearch from "../../features/users/users-search";
import { Divider } from "antd";

const UsersPage = () => {
  return (
    <div>
      <UsersSearch />
      <Divider />
      <UsersList />
    </div>
  );
};

export default UsersPage;
