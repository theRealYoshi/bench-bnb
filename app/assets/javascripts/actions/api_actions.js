var ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  createBench: function(newBench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_CREATED,
      newBench: newBench
    });
  },
  updateFilteredBenches: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.UPDATE_BENCHES,
      benches: benches
    });
  },
  updateFilterMapBound: function(bounds){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: bounds
    });
  }
};
