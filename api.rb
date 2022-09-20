require 'yaml'

config = YAML.load_file('plugins.yml') # Read the config file to determine what plugins are being requested
plugins = config['plugins']

plugins.each do |plugin|
    case plugin
    when 'plugin_a'
        PluginA.initialise # use the plugin
    when 'plugin_b'
        PluginB.initialise # use the plugin
    else
        puts "Unknown plugin: #{plugin}"    
    end
end

module PluginA
    def self.initialise
        puts "Initialising plugin A"
    end
end

module PluginB
    def self.initialise
        puts "Initialising plugin B"
    end
end

require 'sinatra'
require 'sinatra/cross_origin'
require 'rack/cors'
require 'json'

use Rack::Cors do
    allow do
        origins '*'
        resource '/api/*', headers: :any, methods: :get
    end
end
  
get '/api/plugins' do
    content_type :json
  
    plugins = ['plugin_a', 'plugin_b', 'plugin_c'] # Replace with your actual plugin information
    plugins.to_json
end