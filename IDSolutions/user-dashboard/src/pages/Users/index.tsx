import { Divider } from "antd";

import UsersList from "../../features/users/users-list";
import UsersSearch from "../../features/users/users-search";

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
