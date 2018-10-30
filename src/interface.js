
$(document).ready(function() {

  var thermostat = new Thermostat

    $( "#temperature" ).text(thermostat.temp);
    $( "#energy_usage" ).text(thermostat.energyUsage());

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=cd44648d98715f41c2eba1fcebb78f8a&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#location').text(data.name);
    });

    $( "*" ).click(function() {
        $( "#temperature" ).text(thermostat.temp);
        $( "#energy_usage" ).text(thermostat.energyUsage());
        $( '#energy_usage' ).attr("class", thermostat.energyUsage())
    });

    $( "#temp_up" ).click(function() {
        thermostat._up();
    });

    $( "#temp_down" ).click(function() {
        thermostat._down();
    });

    $( "#switch_mode" ).click(function() {
        thermostat.switchMode();
        thermostat.powerSaver === true ? ps = "ON" : ps = "OFF";
        $( "#powermode" ).text(ps);
    });

    $( "#reset" ).click(function() {
        thermostat.reset();
    });

});
