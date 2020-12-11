export const applySort = (data, sortBy) => {
  if (sortBy === 'ASC') {
    return data.sort((a, b) => Number(a.population) - Number(b.population));
  } else if (sortBy === 'DSC') {
    return data.sort((a, b) => Number(b.population) - Number(a.population));
  }
};
