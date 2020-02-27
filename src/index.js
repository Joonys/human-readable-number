module.exports = function toReadable(number) {
  const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  transform = (val) => ((val == 0) ? 'zero' : makeHundreds(val));

  makeTens = (val) => ((val < 10) ? a[val] : (val >= 10 && val < 20) ? b[val - 10] : `${c[Math.floor(val / 10)]} ${a[val % 10]}`);

  makeHundreds = (val) => ((val > 99) ? `${a[Math.floor(val / 100)]} hundred ${makeTens(val % 100)}` : makeTens(val));

  return transform(number).trim();
};