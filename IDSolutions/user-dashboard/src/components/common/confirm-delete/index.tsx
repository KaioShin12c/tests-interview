import { Alert, Button, Space } from "antd";
import { User } from "@/models";

interface ConfirmDeleteProps {
  onCloseModal?: () => void;
  onDelete: (onCloseModal: () => void) => void;
  user: User;
}

const ConfirmDelete = ({
  onCloseModal = () => {},
  onDelete,
  user,
}: ConfirmDeleteProps) => {
  const handleDelete = () => {
    onDelete(onCloseModal);
  };

  return (
    <div>
      <Alert
        message="Cảnh báo"
        description={`Bạn có chắc chắn xoá tài khoản tên ${user.username}`}
        type="warning"
        showIcon
      />
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 30 }}
      >
        <Space>
          <Button onClick={onCloseModal}>Cancel</Button>
          <Button danger type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ConfirmDelete;
