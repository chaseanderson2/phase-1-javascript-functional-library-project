function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Iterate over each element in the array
      for (let i = 0; i < collection.length; i++) {
        // Apply the callback function to the current element
        callback(collection[i]);
      }
    } else {
      // Convert the object's values into an array
      const values = Object.values(collection);
      // Iterate over each value in the array
      for (let i = 0; i < values.length; i++) {
        // Apply the callback function to the current value
        callback(values[i]);
      }
    }
  
    // Return the original collection
    return collection;
  }

function myMap(collection, callback) {
    const result = [];
    
    myEach(collection, function(element) {
    result.push(callback(element));
    });
    
    return result;
    }

    function myReduce(collection, callback, acc) {
        let result;
      
        if (acc !== undefined) {
          result = acc;
        } else {
          // If acc is not provided, use the first element of the collection as the initial value
          const firstElement = Array.isArray(collection) ? collection[0] : Object.values(collection)[0];
          result = firstElement;
          collection = Array.isArray(collection) ? collection.slice(1) : collection;
        }
      
        myEach(collection, function(element) {
          result = callback(result, element, collection);
        });
      
        return result;
      }
        
    
    myEach([1, 2, 3], alert);
    
    myEach({one: 1, two: 2, three: 3}, alert);

    const result1 = myMap([1, 2, 3], function(num) {
        return num * 3;
      });
      console.log(result1);
      // Output: [3, 6, 9]
      
      const result2 = myMap({one: 1, two: 2, three: 3}, function(num, key) {
        return num * 3;
      });
      console.log(result2);
      // Output: [3, 6, 9]

      const sum1 = myReduce([1, 2, 3], function(acc, val) {
        return acc + val;
      }, 10);
      console.log(sum1);
      // Output: 16
      
      const sum2 = myReduce({one: 1, two: 2, three: 3}, function(acc, val) {
        return acc + val;
      });
      console.log(sum2);
      // Output: 6
      
      