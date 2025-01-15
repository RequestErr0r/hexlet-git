// "use strict"

const Num = {
  toString(number) {
    return `${number}`; // Преобразование числа в строку
  },
  round(number) {
    return (number + 0.5) | 0; // Округление до ближайшего
  },
  ceil(number) {
    return (number | 0) === number ? number : (number | 0) + 1; // Округление вверх
  },
  floor(number) {
    return number | 0; // Округление вниз
  },
};

const Str = {
  substring(str, start, end) {
    let result = "";
    for (let i = start; i < end && i < str.length; i++) {
      result += str[i];
    }
    return result;
  },
  indexOf(str, substr) {
    for (let i = 0; i <= str.length - substr.length; i++) {
      let match = true;
      for (let j = 0; j < substr.length; j++) {
        if (str[i + j] !== substr[j]) {
          match = false;
          break;
        }
      }
      if (match) return i;
    }
    return -1;
  },
};

const Arr = {
  forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  },

  indexOf(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        return i;
      }
    }
    return -1;
  },

  find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return arr[i];
      }
    }
    return undefined;
  },
};