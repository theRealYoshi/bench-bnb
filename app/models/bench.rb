class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(params)
    bounds = params[:bounds]
    maxLat = bounds[:northEast][:lat]
    minLat = bounds[:southWest][:lat]
    maxLng = bounds[:northEast][:lng]
    minLng = bounds[:southWest][:lng]
    if params[:min_seats] && params[:max_seats]
      min_seat = params[:min_seats]
      max_seat = params[:max_seats]
      benches = Bench.where(:lat => minLat..maxLat, :lng => minLng..maxLng, :seating => min_seat..max_seat)
    else
      benches = Bench.where(:lat => minLat..maxLat, :lng => minLng..maxLng)
    end
    benches
  end

end
