function getMin(array) {
    let min;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (min === undefined || element < min) {
        min = element;
      }
    }
    return min;
  }

  var minhaArray = [3, 2, 9];

getMin([3, 2, 9, 80, 30, 22, 500]);