import { useMutation } from "@tanstack/react-query";
import { User } from "@/models";
import userApi from "@/apis/userApi";

const useAddUser = () => {
  return useMutation({
    mutationFn: (user: User) => userApi.addUser(user),
  });
};

export default useAddUser;
