/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import userApi from "../../apis/userApi";
import { setUsers } from "../../store/slices/usersSlice";
import { User } from "@/models";
import { useSearchParams } from "react-router-dom";

const useUsers = (search: any) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const page: number = parseInt(searchParams.get("page") || "1");

  return useQuery<{ data: Array<User>; count: number }>({
    queryKey: ["users", page, search],
    queryFn: () => userApi.getUsers({ page, search }),
    onSuccess: (data) => {
      dispatch(setUsers(data.data));
    },
  });
};

export default useUsers;
