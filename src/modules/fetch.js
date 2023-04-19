const fetchLt = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
  // try {
  //   const res = await fetch(url);
  //   return await res.json();
  // } catch (error) {
  //   return error;
  // }
};

export default fetchLt;