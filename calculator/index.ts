class Calculator {
    add(x: number, y: number): number {
      return x + y;
    }
  
    subtract(x: number, y: number): number {
      return x - y;
    }
  
    multiply(x: number, y: number): number {
      return x * y;
    }
  
    divide(x: number, y: number): number {
      if (y === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return x / y;
    }
  }
  
  const calculator = new Calculator();
  
  console.log("Calculator Operations:");
  console.log("Addition: 5 + 3 =", calculator.add(5, 3));
  console.log("Subtraction: 10 - 2 =", calculator.subtract(10, 2));
  console.log("Multiplication: 4 * 6 =", calculator.multiply(4, 6));
  
  try {
    console.log("Division: 8 / 0 =", calculator.divide(8, 0));
  } catch (error) {
    console.error(error.message);
  }
  