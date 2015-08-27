var array = [9,7,4,5,2,6,12,4,56,1,3,74,23];

var bubbleSort = function(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      var a = array[j];
      var b = array[j+1];
      if (array[j] > array[j+1]) {
        array[j] = b;
        array[j+1] = a;
      };
    };
  };
  return array;
};

