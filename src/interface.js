
$(document).ready(function () {
  var thermostat = new Thermostat()

  $('#temperature').text(thermostat.temp)
  $('#energy_usage').text(thermostat.energyUsage())

  displayWeather('London')

  $('#select-city').submit(function (event) {
    event.preventDefault()
    var city = $('#current-city').val()
    displayWeather(city)
  })

  $('*').click(function () {
    $('#temperature').text(thermostat.temp)
    $('#energy_usage').text(thermostat.energyUsage())
    $('#energy_usage').attr('class', thermostat.energyUsage())
  })

  $('#temp_up').click(function () {
    thermostat._up()
  })

  $('#temp_down').click(function () {
    thermostat._down()
  })

  $('#switch_mode').click(function () {
    thermostat.switchMode()
    thermostat.powerSaver === true ? ps = 'ON' : ps = 'OFF'
    $('#powermode').text(ps)
  })

  $('#reset').click(function () {
    thermostat.reset()
  })

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
