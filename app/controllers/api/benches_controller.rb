class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params)
    puts @benches
    render json: @benches
  end

  def create
    @bench = Bench.create(bench_params)
    if @bench.save
      render json: @bench
    else
      return @bench.errors
    end
  end

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description)
  end

end
