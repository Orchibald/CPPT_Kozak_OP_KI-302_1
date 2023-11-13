var ExpressionCalculator = /** @class */ (function () {
    function ExpressionCalculator(x) {
        this.x = x;
    }
    ExpressionCalculator.prototype.calculateExpression = function () {
        var tanX = Math.tan(Number(this.x));
        var cotanX = 1 / Math.tan(Number(this.x));
        if (Number.isNaN(tanX) || Number.isNaN(cotanX) || Math.abs(cotanX) < 1e-6 || Number(this.x) % 3.14 === 0) {
            throw new Error("Error calculating: the expression is undefined or dividing by zero.");
        }
        return tanX / cotanX;
    };
    ExpressionCalculator.prototype.saveResultToFile = function (textFile, binaryFile) {
        var result = this.calculateExpression();
        var resultText = "Result of the expression calculation: ".concat(result);
        var textBlob = new Blob([resultText], { type: 'text/plain' });
        var textUrl = URL.createObjectURL(textBlob);
        var textLink = document.createElement('a');
        textLink.href = textUrl;
        textLink.download = textFile;
        textLink.click();
        var binaryBlob = new Blob([new Float64Array([result]).buffer], { type: 'application/octet-stream' });
        var binaryUrl = URL.createObjectURL(binaryBlob);
        var binaryLink = document.createElement('a');
        binaryLink.href = binaryUrl;
        binaryLink.download = binaryFile;
        binaryLink.click();
        var resultTextElement = document.getElementById("resultText");
        if (resultTextElement) {
            resultTextElement.textContent = resultText;
        }
    };
    return ExpressionCalculator;
}());
function calculateAndSave() {
    var xInput = document.getElementById("inputX");
    var x = parseFloat(xInput.value);
    if (isNaN(x)) {
        alert("Please enter a valid value for x.");
        return;
    }
    var calculator = new ExpressionCalculator(x);
    try {
        calculator.saveResultToFile("output.txt", "output.bin");
    }
    catch (error) {
        alert("Error: " + error.message);
    }
}
