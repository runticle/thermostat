# Thermostat #

Control the temperature with this online thermostat controller! It uses Javascript n stuff. It has an API to pull live weather information for wherever you may be, so that you'll always know what temp to set your thermostat at! The setting will be saved on the server.

``` +/- ``` - control temperature in 1˚C increments

``` reset ``` - sets temperature to 20˚C

``` mode ``` - switches PowerSaverMode on/off (max temp is 25˚C with PSM on or 32˚C off.

## Setup ##

Clone the repo, and in the root folder run:

```
bundle
ruby server.rb
open -a "Google Chrome" index.html  
```

Woohoo!

##### Issues

Currently the powerSaver mode is not updating on the client side after the GET request.

## Screenshots

![Image of index](/images/thermostat_index.png)

![Image of server](/images/thermostat_server.png)
