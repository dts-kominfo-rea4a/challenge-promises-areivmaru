const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

async function promiseOutput(hasil2) {
  const result = await promiseTheaterIXX();
  const result2 = await promiseTheaterVGC();
  const merge = result.concat(result2);

  let i = 0;
  for (let index = 0; index < merge.length; index++) {
    if (merge[index].hasil == hasil2) {
      i++;
    }
  }
  return i;
}
module.exports = {
  promiseOutput,
};
