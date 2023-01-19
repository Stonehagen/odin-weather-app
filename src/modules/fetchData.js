export default async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();

  return data;
};
