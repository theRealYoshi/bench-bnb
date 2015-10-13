var FilterActions = {
  updateMinMax: function(minMax){
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTERS_RECEIVED,
      minMax: minMax
    });
  }
};
