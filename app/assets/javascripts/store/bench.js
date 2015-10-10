(function(root) {
  var _benches = [];
  var CHANGE_EVENT = "CHANGE";
  var reset_benches = function(benches){
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice();
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
        case (BenchConstants.BENCHES_RECEIVED):
          reset_benches(payload.benches);
          root.BenchStore.changed();
          break;
      }
    })
  });

}(this));
