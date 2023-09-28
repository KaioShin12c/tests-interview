import { User } from "@/models";
import supabase from "./supabase";
import { getPageFromAndTo } from "@/utils";
import { SearchForm } from "@/features/users/users-search";
import { getSearchString } from "@/utils/getSearchString";

interface Filter {
  page: number;
  search: SearchForm;
}

const userApi = {
  async getUsers(
    filter?: Partial<Filter>
  ): Promise<{ data: Array<User>; count: number }> {
    const { from, to } = getPageFromAndTo(filter?.page || 1);

    let api = supabase
      .from("User")
      .select("*", { count: "exact" })
      .range(from, to);

    if (getSearchString(filter?.search)) {
      api = api.or(getSearchString(filter?.search));
    }

    const { data: users, error, count } = await api;

    if (error) {
      throw error;
    }
    return { data: users, count: count || 0 };
  },
  async addUser(user: User) {
    const { data, error } = await supabase.from("User").insert([user]).select();
    if (error) {
      throw error;
    }
    return data;
  },
  async updateUser(id: number, newUser: User) {
    const { data, error } = await supabase
      .from("User")
      .update(newUser)
      .eq("id", id)
      .select();

    if (error) {
      throw error;
    }
    return data;
  },
  async deleteUser(id: number) {
    const { error } = await supabase.from("User").delete().eq("id", id);
    if (error) {
      throw error;
    }
  },
};

export default userApi;
