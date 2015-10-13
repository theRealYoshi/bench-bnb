(function(root) {
  var _filters = {};
  var CHANGE_EVENT = "CHANGE";

  var update_filter = function(filters){
     _filters = $.extend(_filters, filters);
  };

  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return $.extend({},_filters);
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    changed: function(){
      this.emit(CHANGE_EVENT);
    },
    dispatcherId: AppDispatcher.register( function(payload){
      switch(payload.actionType){
        case FilterConstants.UPDATE_BOUNDS:
          update_filter(payload.bounds);
          root.FilterStore.changed();
          break;
        case FilterConstants.UPDATE_MINMAX:
        // store these params as keys and values in POJO
          update_filter(payload.minMax);
          root.FilterStore.changed();
          break;
      }
    })
  });

}(this));
