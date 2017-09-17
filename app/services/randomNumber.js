export default {
  getNumber(minNum, maxNum) {
    let min = parseInt(minNum),
        max = parseInt(maxNum),
       rand = new Promise((resolve, reject) => { resolve(Math.floor(Math.random() * (max - min + 1)) + min) });

    return rand;
  }
}