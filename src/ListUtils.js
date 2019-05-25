
export const shuffle = (arr) => {
  for (let i=arr.length-1; i >= 0; i--) {
    const randomIdx = Math.floor(Math.random()*(arr.length-1));
    [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
  }
  return arr;
}
export const randomInt = (max) => {
  return Math.floor(Math.random()*max);
}  
export const pickRandomPos = (arr) => {
  return randomInt(arr.length-1);
}
export const pickRandomElement = (arr) => {
  return arr[pickRandomPos(arr)];
}
export const range = (num) => {
  return [...Array(num).keys()];
}
