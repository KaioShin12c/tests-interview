import userApi from "@/apis/userApi";
import { User } from "@/models";
import { useMutation } from "@tanstack/react-query";

const useEditUser = () => {
  return useMutation({
    mutationFn: ({ id, newUser }: { id: number; newUser: User }) =>
      userApi.updateUser(id, newUser),
  });
};

export default useEditUser;
