function multiply(num1, num2) {
      if (num2 !== undefined) {
            return num1 * num2;
      }
      return function anotherMultiply(num2) {
            return num1 * num2;
      };
}