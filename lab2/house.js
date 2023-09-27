class House {
    constructor() {
        this.address = "No information";
        this.numberOfFloors = 0;
        this.hasGarden = false;
    }

    setAddress(address) {
        this.address = address;
    }

    setNumberOfFloors(numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    }

    setHasGarden(hasGarden) {
        this.hasGarden = hasGarden;
    }

    displayDetails() {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
            <h2>Деталі будинку:</h2>
            <p>Адреса будинку: ${this.address}</p>
            <p>Кількість поверхів: ${this.numberOfFloors}</p>
            <p>Наявність саду: ${this.hasGarden ? "Так" : "Ні"}</p>
        `;
    }
}

let house = null;

function createHouse() {
    const address = document.getElementById("address").value;
    const numberOfFloors = parseInt(document.getElementById("numberOfFloors").value);
    const hasGarden = document.getElementById("hasGarden").checked;

    
    house = new House();
    house.setAddress(address);
    house.setNumberOfFloors(numberOfFloors);
    house.setHasGarden(hasGarden);

    alert("Будинок створено!");

    hideDetails();
    displayDetails();
}

function displayDetails() {
    if (house) {
        house.displayDetails();
    } else {
        alert("Будинок ще не створено.");
    }
}

function addFloor() {
    if (house) {
        house.setNumberOfFloors(house.numberOfFloors + 1);
        alert("Поверх додано!");
    } else {
        alert("Будинок ще не створено.");
    }

    hideDetails();
    displayDetails();
}

function removeFloor() {
    if (house) {
        if (house.numberOfFloors > 0) {
            house.setNumberOfFloors(house.numberOfFloors - 1);
            alert("Поверх видалено!");
        } else {
            alert("Не можна видалити поверх. Кількість поверхів вже мінімальна.");
        }
    } else {
        alert("Будинок ще не створено.");
    }

    hideDetails();
    displayDetails();
}

function hideDetails() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '';
}