// Code your solutions in this file

const countDown = (number) => {
  for (let i = number; i >= 0; i--) console.log(i);
};

const writeCards = (names) => {
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return arr;
};
