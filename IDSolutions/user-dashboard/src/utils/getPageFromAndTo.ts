const ITEM_PER_PAGE = 10;

export const getPageFromAndTo = (page: number) => {
  const from = (page - 1) * ITEM_PER_PAGE;
  const to = page * ITEM_PER_PAGE - 1;
  return { from, to };
};
