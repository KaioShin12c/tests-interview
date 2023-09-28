import { Input, Select, Button, Form, Space } from "antd";
import { useDispatch } from "react-redux";
import { clearSearch, setSearch } from "../../../store/slices/usersSlice";
import { useSearchParams } from "react-router-dom";

const roleOptions = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

export interface SearchForm {
  id: string;
  username: string;
  role: string;
  [key: string]: string;
}

const UsersSearch = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm<SearchForm>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (values: SearchForm) => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    dispatch(setSearch(values));
  };

  const handleReset = () => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    dispatch(clearSearch());
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <div>
        <label htmlFor="id">ID</label>
        <Form.Item id="id" name="id">
          <Input placeholder="Enter your ID" />
        </Form.Item>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <Form.Item id="username" name="username">
          <Input placeholder="Enter your username" />
        </Form.Item>
      </div>
      <div>
        <label>Role</label>
        <Form.Item name="role">
          <Select
            options={roleOptions}
            placeholder="Select your role"
            allowClear
          />
        </Form.Item>
      </div>
      <Space>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="button" onClick={handleReset}>
            Clear
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default UsersSearch;
