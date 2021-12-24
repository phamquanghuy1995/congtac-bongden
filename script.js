class SwitchButton{
    _status
    _lamp

    constructor(status, lamp) {
        this._status = status;
        this._lamp = lamp;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get lamp() {
        return this._lamp;
    }

    set lamp(value) {
        this._lamp = value;
    }

    ConnectToLamp(electricLamp) {
        this._lamp = electricLamp
    }

    switchOff() {
        this._lamp.turnoff()
        this._status=false
    }
    switchon() {
        this._lamp.turnon()
        this._status=true
    }

}

class ElectricLamp{
    _status;
    constructor(status) {
        this._status = status;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    turnoff() {
        this._status = false
    }
    turnon() {
        this._status = true
    }

}