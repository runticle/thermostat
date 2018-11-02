# Thermostat #

Control the temperature with this online thermostat controller! It uses Javascript n stuff. It has an API to pull live weather information for wherever you may be, so that you'll always know what temp to set your thermostat at! The setting will be saved on the server.

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
