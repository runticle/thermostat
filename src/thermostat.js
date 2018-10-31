var Thermostat = function () {
  this.temp = 20
  this.powerSaver = true
  this.MIN_TEMPERATURE = 10
}

Thermostat.prototype._up = function () {
  this.temp++
  this._boundaryCheck()
}

Thermostat.prototype._down = function () {
  this.temp--
  this._boundaryCheck()
}

Thermostat.prototype.switchMode = function () {
  this.powerSaver = !this.powerSaver
  this._boundaryCheck()
}

Thermostat.prototype._boundaryCheck = function () {
  if (this.temp < this.MIN_TEMPERATURE) this.temp = this.MIN_TEMPERATURE
  if (this.powerSaver === true && this.temp > 25) this.temp = 25
  if (this.powerSaver === false && this.temp > 32) this.temp = 32
}

Thermostat.prototype.reset = function () {
  this.temp = 20
}

Thermostat.prototype.energyUsage = function () {
  if (this.temp < 18) return 'Low'
  if (this.temp < 25) return 'Medium'
  if (this.temp > 24) return 'High'
}
