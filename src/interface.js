
$(document).ready(function () {
  var thermostat = new Thermostat()

  getSettings()

  $('#select_city').submit(function (event) {
    event.preventDefault()
    var city = $('#current_city').val()
    displayWeather(city)
    postCity(city)
  })

  $('*').click(function () {
    updateTemp()
  })

  $('#temp_up').click(function () {
    thermostat._up()
    postTemp()
  })

  $('#temp_down').click(function () {
    thermostat._down()
    postTemp()
  })

  $('#switch_mode').click(function () {
    thermostat.switchMode()
    setPsm()
    postTemp()
  })

  $('#reset').click(function () {
    thermostat.reset()
    postTemp()
  })

  function getSettings () {
    $.ajax({
      url: 'http://localhost:4567/settings',
      type: 'GET',
      dataType: 'json'
    })
      .done(function (json) {
        console.log(json.temp)
        console.log(json.city)
        console.log(json.psm)
        thermostat.temp = json.temp
        thermostat.powerSaver = json.psm
        setPsm()
        updateTemp()
        displayWeather(json.city)
      })
  }

  function postTemp () {
    $.ajax({
      url: 'http://localhost:4567/update-temp',
      data: {
        temp: thermostat.temp,
        psm: thermostat.powerSaver
      },
      type: 'POST'
    })
  }

  function postCity (city) {
    $.ajax({
      url: 'http://localhost:4567/update-city',
      data: {
        city: city
      },
      type: 'POST'
    })
  }

  function setPsm () {
    thermostat.powerSaver === true ? ps = 'ON' : ps = 'OFF'
    $('#powermode').text(ps)
  }

  function updateTemp () {
    $('#temperature').text(thermostat.temp)
    $('#energy_usage').text(thermostat.energyUsage())
    $('#energy_usage').attr('class', thermostat.energyUsage())
  }

  function displayWeather (city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
    var units = '&units=metric'
    $.get(url + token + units, function (data) {
      iconcode = data.weather[0].icon
      var iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png'
      $('#current-temperature').text(Math.round(data.main.temp))
      $('#location').text(data.name)
      $('#weather_description').text(data.weather[0].description)
      $('#wicon').attr('src', iconurl)
    })
  };
})
