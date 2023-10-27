var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var House = /** @class */ (function () {
    function House() {
        this.address = "No information";
        this.numberOfFloors = 0;
        this.hasGarden = false;
    }
    House.prototype.setAddress = function (address) {
        this.address = address;
    };
    House.prototype.setNumberOfFloors = function (numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    };
    House.prototype.setHasGarden = function (hasGarden) {
        this.hasGarden = hasGarden;
    };
    return House;
}());
var OfficeCenter = /** @class */ (function (_super) {
    __extends(OfficeCenter, _super);
    function OfficeCenter(address, numberOfFloors, officeSpace, meetingRoom, numberOfDesks, projector, whiteboard) {
        var _this = _super.call(this) || this;
        _this.officeSpace = officeSpace;
        _this.meetingRoom = meetingRoom;
        _this.numberOfDesks = numberOfDesks;
        _this.hasProjector = projector;
        _this.hasWhiteboard = whiteboard;
        return _this;
    }
    OfficeCenter.prototype.setOfficeSpace = function (officeSpace) {
        this.officeSpace = officeSpace;
    };
    OfficeCenter.prototype.equipMeetingRoom = function (meetingRoom, projector, whiteboard) {
        this.meetingRoom = true;
        this.hasProjector = projector;
        this.hasWhiteboard = whiteboard;
    };
    OfficeCenter.prototype.addDesks = function (desksToAdd) {
        this.numberOfDesks = desksToAdd;
    };
    OfficeCenter.prototype.getNumberOfDesks = function () {
        return this.numberOfDesks;
    };
    OfficeCenter.prototype.hasProjectorEquipment = function () {
        return this.hasProjector;
    };
    OfficeCenter.prototype.hasWhiteboardEquipment = function () {
        return this.hasWhiteboard;
    };
    OfficeCenter.prototype.displayDetails = function () {
        var officeCenterDetails = document.getElementById("officeCenterDetails");
        if (officeCenterDetails) {
            officeCenterDetails.innerHTML = "<h2>Деталі офісного центру</h2>";
            officeCenterDetails.innerHTML += "<p>Адреса: " + this.address + "</p>";
            officeCenterDetails.innerHTML += "<p>Кількість поверхів: " + this.numberOfFloors + "</p>";
            officeCenterDetails.innerHTML += "<p>Площа офісу (кв. м): " + this.officeSpace + "</p>";
            officeCenterDetails.innerHTML += "<p>Має кімнату для зборів: " + (this.meetingRoom ? "Так" : "Ні") + "</p>";
            officeCenterDetails.innerHTML += "<p>Кількість робочих столів: " + this.getNumberOfDesks() + "</p>";
            officeCenterDetails.innerHTML += "<p>Має проектор: " + (this.hasProjectorEquipment() ? "Так" : "Ні") + "</p>";
            officeCenterDetails.innerHTML += "<p>Має маркерну дошку: " + (this.hasWhiteboardEquipment() ? "Так" : "Ні") + "</p>";
        }
    };
    return OfficeCenter;
}(House));
var officeCenter = new OfficeCenter("", 0, 0, false, 0, false, false);
function updateOfficeCenter() {
    var address = document.getElementById("address");
    var floors = parseInt(document.getElementById("floors").value);
    var officeSpace = parseInt(document.getElementById("officeSpace").value);
    var meetingRoom = document.getElementById("meetingRoom").checked;
    var desks = parseInt(document.getElementById("desks").value);
    var projector = document.getElementById("projector").checked;
    var whiteboard = document.getElementById("whiteboard").checked;
    officeCenter.setAddress(address.value);
    officeCenter.setNumberOfFloors(floors);
    officeCenter.setOfficeSpace(officeSpace);
    officeCenter.equipMeetingRoom(meetingRoom, projector, whiteboard);
    officeCenter.addDesks(desks);
    officeCenter.displayDetails();
}
