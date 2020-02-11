const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(ls1, ls2) {
  const result = [];
  for (let i = 0; i < ls1.length; i++) {
    result.push(ls1[i], ls2[i]);
  }
  return result;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(ls1, ls2) {
  return _.flatten(_.zip(ls1, ls2));
}

console.log(zipListTheSimpleWay(test1, test2));
