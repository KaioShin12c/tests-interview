import { useMutation } from "@tanstack/react-query";

import userApi from "@/apis/userApi";

const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: number) => userApi.deleteUser(id),
  });
};

export default useDeleteUser;
