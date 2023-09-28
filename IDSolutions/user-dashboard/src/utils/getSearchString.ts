import { SearchForm } from "@/features/users/users-search";

export const getSearchString = (search?: SearchForm) => {
  const result = [];
  for (const key in search) {
    if (search[key]) {
      result.push(`${key}.eq.${search[key]}`);
    }
  }
  return result.join(",");
};
