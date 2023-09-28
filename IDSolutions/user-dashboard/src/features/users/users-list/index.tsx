import { Table, Pagination, Button, Space } from "antd";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import styles from "./UsersList.module.css";

import useUsers from "../use-users";
import { User } from "@/models";
import Modal from "@/components/common/Modal";
import AddUserForm from "../add-user-form";
import EditUserForm from "../edit-user-form";
import ConfirmDelete from "@/components/common/confirm-delete";
import useDeleteUser from "../use-delete-user";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const UsersList = () => {
  const queryClient = useQueryClient();
  const { search } = useSelector((state: RootState) => state.users);
  const { isLoading, data = { data: [], count: 0 } } = useUsers(search || {});
  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate } = useDeleteUser();

  const handleDelete = (id: number, onCloseModal: () => void) => {
    mutate(id, {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        toast.success("Delete user successfully");
      },
      onError() {
        toast.error("Delete user failure");
      },
      onSettled() {
        onCloseModal();
      },
    });
  };

  const handleChangePage = (page: number) => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  };

  const columns = [
    {
      title: "No  ",
      dataIndex: "ordinalNumber",
      key: "ordinalNumber",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      key: "action",
      title: "Action",
      width: 150,
      render: (_: string, record: User) => {
        return (
          <Modal>
            <Space>
              <Modal.Open opens="edit">
                <Button type="primary">Edit</Button>
              </Modal.Open>
              <Modal.Window name="edit" footer={null}>
                <EditUserForm user={record} />
              </Modal.Window>
              <Modal.Open opens="delete">
                <Button danger type="primary">
                  Delete
                </Button>
              </Modal.Open>
              <Modal.Window name="delete" footer={null} closable={false}>
                <ConfirmDelete
                  user={record}
                  onDelete={(onCloseModal) =>
                    handleDelete(record.id || 0, onCloseModal)
                  }
                />
              </Modal.Window>
            </Space>
          </Modal>
        );
      },
    },
  ];

  const users = data.data.map((user: User, index: number) => ({
    ordinalNumber: index + 1,
    key: user.id,
    ...user,
  }));

  const page: number = parseInt(searchParams.get("page") || "1");

  return (
    <>
      <div className={styles.paginationSection}>
        <Modal>
          <Modal.Open opens="add-user">
            <Button type="primary">Add new</Button>
          </Modal.Open>
          <Modal.Window name="add-user" footer={null}>
            <AddUserForm />
          </Modal.Window>
        </Modal>

        {data.count > 10 && (
          <Pagination
            current={page}
            onChange={handleChangePage}
            total={data.count}
          />
        )}
      </div>
      <Table
        loading={isLoading}
        bordered
        pagination={false}
        dataSource={users}
        columns={columns}
      />
    </>
  );
};

export default UsersList;
