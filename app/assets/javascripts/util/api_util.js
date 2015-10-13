var ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      data: bounds,
      success: function(benches){
        ApiActions.receiveAll(benches);
      }
    });
  },
  createBench: function(newBench, redirect){
    $.ajax({
      url: '/api/benches',
      type: 'POST',
      data: {bench: newBench},
      success: function(responseBench){
        ApiActions.createBench(responseBench);
        redirect();
      }
    });
  },
  hoverBenchIndexItem: function(index){
    //on hover of item
  },
  fetchFilteredBenches: function(filtered){
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      data: filtered,
      success: function(responseFiltered){
        ApiActions.updateFilteredBenches(responseFiltered);
      }
    });
  }
};
