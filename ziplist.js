const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(array1, array2) {
  const newList = [];
  for (let i = 0; i < array1.length; i++) {
    newList.push(array1[i]);
    newList.push(array2[i]);
  }
  return newList;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

console.log(zipListTheSimpleWay(list1, list2));

// 20:43
