'use strict'

describe('thermostat', function () {
  var thermostat
  beforeEach(function () {
    thermostat = new Thermostat()
  })

  describe('thermostat temperature', function () {
    it('starts at 20 degrees', function () {
      expect(thermostat.temp).toBe(20)
    })

    it('add 1 degree to the temp', function () {
      thermostat._up()
      expect(thermostat.temp).toBe(21)
    })

    it('removes 1 degree to the temp', function () {
      thermostat._down()
      expect(thermostat.temp).toBe(19)
    })

    it('can not be < 10degs', function () {
      thermostat.temp = 9
      thermostat._boundaryCheck()
      expect(thermostat.temp).toBe(10)
    })

    it('can be reset to 20 degs', function () {
      thermostat.temp = 16
      thermostat.reset()
      expect(thermostat.temp).toBe(20)
    })
  })

  describe('power saving modes', function () {
    it('starts in power saving mode', function () {
      expect(thermostat.powerSaver).toBe(true)
    })

    it('can switch modes to off', function () {
      thermostat.switchMode()
      expect(thermostat.powerSaver).toBe(false)
    })

    it('cannot be more than 25degs in power saver', function () {
      thermostat.temp = 26
      thermostat._boundaryCheck()
      expect(thermostat.temp).toBe(25)
    })

    it('cannot be more than 32degs if power saver if off', function () {
      thermostat.temp = 33
      thermostat.powerSaver = false
      thermostat._boundaryCheck()
      expect(thermostat.temp).toBe(32)
    })
  })

  describe('energy usage', function () {
    it('if temp <18 then low energy', function () {
      thermostat.temp = 16
      expect(thermostat.energyUsage()).toBe('Low')
    })

    it('if temp <25 then medium energy', function () {
      thermostat.temp = 24
      expect(thermostat.energyUsage()).toBe('Medium')
    })

    it('if temp > 25 then high energy', function () {
      thermostat.powerSaver = false
      thermostat.temp = 30
      expect(thermostat.energyUsage()).toBe('High')
    })
  })
})
