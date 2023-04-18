// export const getRandomApí = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const n = Math.floor(Math.random() * 1000);
//       if (n == 100) {
//         return reject();
//       }
//       return resolve(n);
//     }, 500);
export const getRandomApí = async () => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  return Number(await res.text());
};
