class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    maxLat = bounds[:northEast][:lat]
    minLat = bounds[:southWest][:lat]
    maxLng = bounds[:northEast][:lng]
    minLng = bounds[:southWest][:lng]
    benches = Bench.where(:lat => minLat..maxLat, :lng => minLng..maxLng)
  end
end
