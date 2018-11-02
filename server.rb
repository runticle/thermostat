require 'json'
require 'sinatra/base'
require 'sinatra/cross_origin'
require 'sinatra/cors'

class Settings

  def self.set_psm(bool)
    @psm = bool
  end

  def self.temperature
    @temperature ||= 20
  end

  def self.psm
    @psm ||= false
  end

  def self.city
    @city ||= "London"
  end

  def self.set_temp(temp)
    @temperature = temp
  end

  def self.set_city(city)
    @city = city
  end

end

class Server < Sinatra::Base
  register Sinatra::Cors

  set :allow_origin, "null"
  set :allow_methods, "GET,HEAD,POST"
  set :allow_headers, "content-type,if-modified-since"
  set :expose_headers, "location,link"

  get '/settings' do
    {
      "temp":Settings.temperature,
      "city":Settings.city,
      "psm":Settings.psm
    }.to_json
  end

  post '/update-temp' do
    puts params[:temp]
    puts params[:psm]
    Settings.set_temp(params[:temp])
    Settings.set_psm(params[:psm])
  end

  post '/update-city' do
    puts params[:city]
    Settings.set_city(params[:city])
  end

  run! if app_file == $0

end
