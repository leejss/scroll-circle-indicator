export const getRandomNumber = (max = 10, min = 1) =>
  Math.floor(Math.random() * max) + min;

export const getRandomColor = () =>
  "#" + ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);

export const getRandomBackground = () => {
  const background = [];
  for (let i = 0; i < getRandomNumber(); i++) {
    background.push(`
      radial-gradient(
        circle at ${getRandomNumber(100)}% ${getRandomNumber(100)}%,
        ${getRandomColor() + "0d"},
        transparent ${getRandomNumber(100, 60)}%
      )
  `);
  }
  return background.join(",");
};
