class ExpressionCalculator<T> {
    private x: T;

    constructor(x: T) {
        this.x = x;
    }

    calculateExpression(): number {
        const tanX = Math.tan(Number(this.x));
        const cotanX = 1 / Math.tan(Number(this.x));

        if (Number.isNaN(tanX) || Number.isNaN(cotanX) || Math.abs(cotanX) < 1e-6 || Number(this.x) % 3.14 === 0) {
            throw new Error("Error calculating: the expression is undefined or dividing by zero.");
        }

        return tanX / cotanX;
    }

    saveResultToFile(textFile: string, binaryFile: string): void {
        const result = this.calculateExpression();
        const resultText = `Result of the expression calculation: ${result}`;

        const textBlob = new Blob([resultText], { type: 'text/plain' });
        const textUrl = URL.createObjectURL(textBlob);
        const textLink = document.createElement('a');
        textLink.href = textUrl;
        textLink.download = textFile;
        textLink.click();

        const binaryBlob = new Blob([new Float64Array([result]).buffer], { type: 'application/octet-stream' });
        const binaryUrl = URL.createObjectURL(binaryBlob);
        const binaryLink = document.createElement('a');
        binaryLink.href = binaryUrl;
        binaryLink.download = binaryFile;
        binaryLink.click();

        const resultTextElement = document.getElementById("resultText");
        if (resultTextElement) {
            resultTextElement.textContent = resultText;
        }
    }
}

function calculateAndSave() {
    const xInput = document.getElementById("inputX") as HTMLInputElement;
    const x = parseFloat(xInput.value);
    if (isNaN(x)) {
        alert("Please enter a valid value for x.");
        return;
    }

    const calculator = new ExpressionCalculator(x);
    try {
        calculator.saveResultToFile("output.txt", "output.bin");
    } catch (error) {
        alert("Error: " + error.message);
    }
}
