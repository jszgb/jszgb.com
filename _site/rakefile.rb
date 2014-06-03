require 'rss'
require 'open-uri'
require 'date'
require 'nokogiri'
require 'yaml'
require 'time'

ENV["TZ"] = "Europe/Zagreb"

namespace :jszgb do

  desc "Build the list of the future meetups"
  task :future_meetups do
    meetups = []
    puts "Loading future meetups"
    url = 'http://www.meetup.com/JavaScript-Zagreb/events/rss/JavaScript+Zagreb/'
    open(url) do |rss|
      feed = RSS::Parser.parse(rss)
      feed.items.each do |item|
        meetup =  {}
        puts "-- Getting data for: " + item.title
        page = Nokogiri::HTML(open(item.guid.content))

        page.css('#event-where-display .event-where-address .event-map-link').remove

        meetup[:date]    = DateTime.parse(page.css('time').text) -  DateTime.now.offset
        meetup[:venue]   = page.css('#event-where-display .headline').text.strip
        meetup[:address] = page.css('#event-where-display .event-where-address').text.strip

        meetups << meetup
      end
    end

    File.open('data/meetups.yml', 'w'){ |f| f.write meetups.to_yaml }
    puts "Done"
  end

  desc "Compile site"
  task :compile do
    puts `nanoc compile && cp -r output/* ../`
  end
end

