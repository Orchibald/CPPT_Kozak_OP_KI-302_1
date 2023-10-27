class CalculationError extends Error {
  constructor(message) {
      super(message);
      this.name = "CalculationError";
  }
}

function calculateExpression() {
  const inputX = document.getElementById("inputX").value;

  try {
      const x = parseFloat(inputX);

      if (Math.abs(x) < 1e-19) {
          throw new CalculationError("Expression is undefined (x is too small).");
      } else if (x % 3.14 === 0) {
        throw new CalculationError("Expression is undefined (tan(x) or cotan(x) has invalid value).");
      }

      const result = calculateExpressionValue(x);
      displayResult(result);
  } catch (error) {
      if (error instanceof CalculationError) {
          displayError("Calculation Error: " + error.message);
      } else {
          displayError("An unexpected error occurred.");
      }
  }
}

function calculateExpressionValue(x) {
  const tanX = Math.tan(x);
  const cotanX = 1 / Math.tan(x);

  if (isNaN(tanX) || isNaN(cotanX)) {
      throw new CalculationError("Expression is undefined (tan(x) or cotan(x) has invalid value).");
  }

  return tanX / cotanX;
}

function displayResult(result) {
  document.getElementById("result").textContent = "Result: " + result;
}

function displayError(errorMessage) {
  document.getElementById("result").textContent = errorMessage;
}