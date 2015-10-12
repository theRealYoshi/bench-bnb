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
      data: {bench: newBench},// can you pass it as params?
      success: function(responseBench){
        console.log(responseBench);
        ApiActions.createBench(responseBench);
        redirect();
      }
    });
  },
  hoverBenchIndexItem: function(index){
    //on hover of item


  }
};
