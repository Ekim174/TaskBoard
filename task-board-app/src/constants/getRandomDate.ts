export const getRandomDate = () => {
  const randomDate = new Date(Number(new Date()) - Math.floor(Math.random() * 1e10));
  return randomDate.toLocaleDateString('en-GB')
}