export default {
  getDate() {
    let date = new Promise((resolve, reject) => {
      // https://stackoverflow.com/a/30245911
      let now = new Date().toLocaleString();
      resolve(now);
    });

    return date;
  }
}