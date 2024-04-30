function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    collection.forEach(callback);
  } else {
    const values = Object.values(collection);
    values.forEach(callback);
  }

  return collection;
}

function myMap(collection, callback) {
  if (Array.isArray(collection)) {
    return collection.map(callback);
  } else {
    const values = Object.values(collection);
    return values.map(callback);
  }
}

function myReduce(collection, callback, acc) {
  if (Array.isArray(collection)) {
    if (acc !== undefined) {
      return collection.reduce(callback, acc);
    } else {
      return collection.reduce(callback);
    }
  } else {
    const values = Object.values(collection);
    if (acc !== undefined) {
      return values.reduce(callback, acc);
    } else {
      return values.reduce(callback);
    }
  }
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
  }
}

function myFilter(collection, predicate) {
  const result = [];

  myEach(collection, function(element) {
    if (predicate(element)) {
      result.push(element);
    }
  });

  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    const keys = Object.keys(collection);
    return keys.length;
  }
}

function myFirst(array, n) {
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(array, n) {
  if (n) {
    return array.slice(-n);
  } else {
    return array[array.length - 1];
  }
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
        
    
myEach([1, 2, 3], alert);
myEach({one: 1, two: 2, three: 3}, alert);

const result1 = myMap([1, 2, 3], function(num) {
  return num * 3;
});
console.log(result1); // Output: [3, 6, 9]

const result2 = myMap({one: 1, two: 2, three: 3}, function(num, key) {
  return num * 3;
});
console.log(result2); // Output: [3, 6, 9]

const sum1 = myReduce([1, 2, 3], function(acc, val) {
  return acc + val;
}, 10);
console.log(sum1); // Output: 16

const sum2 = myReduce({one: 1, two: 2, three: 3}, function(acc, val) {
  return acc + val;
});
console.log(sum2); // Output: 6

const found1 = myFind([1, 2, 3, 4, 5, 6], function(num) {
  return num % 2 == 0;
});
console.log(found1); // Output: 2

const found2 = myFind({one: 1, three: 3, four: 4, six: 6}, function(num) {
  return num % 2 == 0;
});
console.log(found2); // Output: 4

const filtered1 = myFilter([1, 2, 3, 4, 5, 6], function(num) {
  return num % 2 == 0;
});
console.log(filtered1); // Output: [2, 4, 6]

const filtered2 = myFilter({one: 1, three: 3, five: 5}, function(num) {
  return num % 2 == 0;
});
console.log(filtered2); // Output: []

const size1 = mySize({one: 1, two: 2, three: 3});
console.log(size1); // Output: 3

const size2 = mySize([]);
console.log(size2); // Output: 0

const first1 = myFirst([5, 4, 3, 2, 1]);
console.log(first1); // Output: 5

const first2 = myFirst([5, 4, 3, 2, 1], 3);
console.log(first2); // Output: [5, 4, 3]

const last1 = myLast([5, 4, 3, 2, 1]);
console.log(last1); // Output: 1

const last2 = myLast([5, 4, 3, 2, 1], 3);
console.log(last2); // Output: [3, 2, 1]

const keys = myKeys({one: 1, two: 2, three: 3});
console.log(keys); // Output: ["one", "two", "three"]

const values = myValues({one: 1, two: 2, three: 3});
console.log(values); // Output: [1, 2, 3]