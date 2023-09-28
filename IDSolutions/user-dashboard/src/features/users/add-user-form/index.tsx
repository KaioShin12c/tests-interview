import React from "react";
import { Button, Form, Input, Select, Space } from "antd";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import { User } from "@/models";
import { roleOptions } from "@/constants";
import useAddUser from "../use-add-user";

interface AddUserFormProps {
  onCloseModal?: () => void;
}

const AddUserForm = ({ onCloseModal }: AddUserFormProps) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm<User>();

  const { mutate } = useAddUser();

  const handleSubmit = (values: User) => {
    mutate(values, {
      onSuccess() {
        toast.success("Successfully add user");
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
      onError() {
        toast.error("Error add user");
      },
      onSettled() {
        if (onCloseModal) {
          onCloseModal();
        }
      },
    });
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
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
            Add user
          </Button>
        </Space>
      </div>
    </Form>
  );
};

export default AddUserForm;
