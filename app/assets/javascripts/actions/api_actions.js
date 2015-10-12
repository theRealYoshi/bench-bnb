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
  }
};
