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
  }
};
