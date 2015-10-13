# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

homeBench = Bench.create([{ description: 'my home', lat:37.78646, lng:-122.39472, seating: 4}])
workshopBench = Bench.create([{ description: 'workshop cafe', lat:37.79080, lng:-122.40209, seating: 1}])
appacademyBench = Bench.create([{ description: 'app academy', lat:37.78106, lng:-122.41146, seating: 2}])
japantownBench = Bench.create([{ description: 'japantown', lat:37.78541, lng:-122.42938, seating: 3}])
zeroBench = Bench.create([{ description: 'zero bench', lat:37.90541, lng:-122.494038, seating: 0}])
