const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

async function promiseOutput(hasil2) {
  const result = await promiseTheaterIXX();
  const result2 = await promiseTheaterVGC();

  let i = 0;
  for (let index = 0; index < result.length; index++) {
    if (result[index].hasil == hasil2) {
      i ++;
    }
  }
  for (let index = 0; index < result2.length; index++) {
    if (result2[index].hasil == hasil2) {
      i ++;
    }
  }

  return i
}
module.exports = {
  promiseOutput,
};
