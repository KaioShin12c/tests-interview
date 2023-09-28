import { Button, Form, Input, Select, Space } from "antd";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import { User } from "@/models";
import { roleOptions } from "@/constants";
import useEditUser from "../use-edit-user";

interface EditUserFormProps {
  onCloseModal?: () => void;
  user: User;
}

const EditUserForm = ({ onCloseModal, user }: EditUserFormProps) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm<User>();

  const { mutate } = useEditUser();

  const handleSubmit = (values: User) => {
    mutate(
      { id: user.id || 0, newUser: values },
      {
        onSuccess() {
          toast.success("Successfully edit user");
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError() {
          toast.error("Error edit user");
        },
        onSettled() {
          if (onCloseModal) {
            onCloseModal();
          }
        },
      }
    );
  };

  return (
    <Form form={form} onFinish={handleSubmit} initialValues={user}>
      <div>
        <label htmlFor="username">Username</label>
        <Form.Item
          id="username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <Form.Item
          id="address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input placeholder="Enter your address" />
        </Form.Item>
      </div>
      <div>
        <label>Role</label>
        <Form.Item
          name="role"
          rules={[{ required: true, message: "Please select your role!" }]}
        >
          <Select options={roleOptions} placeholder="Select your role" />
        </Form.Item>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Space>
          <Button onClick={onCloseModal}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Edit user
          </Button>
        </Space>
      </div>
    </Form>
  );
};

export default EditUserForm;
