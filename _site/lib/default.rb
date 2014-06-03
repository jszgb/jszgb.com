# encoding: UTF-8

require 'yaml'
# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

def next_meetups

  if @next_meetups.nil? 
    file = File.expand_path(File.dirname(__FILE__) + '/../data/meetups.yml')
    puts file
    if File.exists?(file)
      @next_meetups = YAML.load_file(file)
    else
      @next_meetups = []
    end
  end

  @next_meetups
  
end

def next_meetup
  @next_meetup ||= next_meetups.first
end

def day(ord)
  days = %w(Nedjelja Ponedjeljak Utorak Srijeda Četvrtak Petak Subota)
  days[ord]
end
