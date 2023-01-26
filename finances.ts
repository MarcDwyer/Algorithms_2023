function totalMoney(arr) {
  return arr.reduce((accu, numb) => {
    return accu + numb;
  }, 0);
}

const oct28 = totalMoney([10750, 2200, 3500]);

const nov11 = totalMoney([oct28, 3000]);

const nov25 = totalMoney([nov11, 3000]);

const dec8 = totalMoney([nov25, 3000]);

const dec22 = totalMoney([dec8, 3000]);

console.log({ oct28, nov11, nov25, dec8, dec22 });

/**
 * 42 aer, 13 case, 112 keyboard
 */
