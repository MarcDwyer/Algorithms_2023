const kwh = [23, 20, 29, 8, 23, 29, 27, 18, 18, 27];

function getSum(arr: number[]) {
  return arr.reduce((num, kw) => {
    return num + kw;
  }, 0);
}

const rate = 0.17;

const sum = getSum(kwh);

const cost = sum * rate;

const meanKwh = sum / kwh.length;

const meanCost = meanKwh * rate;

const monthEstimate = 15 * meanCost;

const yearEstimate = 15 * 12 * meanCost;

console.log({
  times: kwh.length,
  sum,
  cost,
  meanKwh,
  meanCost,
  monthEstimate,
  yearEstimate,
});
