var FilterParams = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  blankAttrs: {
      min: '',
      max: ''
  },
  // getInitialState: function(){
  //   var filtered = BenchStore.all();
  //   // get max seats and get min seats in window
  //   this.blankAttrs.min = filtered.min_seats;
  //   this.blankAttrs.max = filtered.max_seats;
  //   debugger;
  //   return this.blankAttrs;
  // },
  _changeSeats: function(event){
    event.preventDefault();
    var range = {};
    Object.keys(this.state).forEach(function(key){
      range[key] = this.state[key];
    });

    console.log(range);
  },
  render: function(){
    return(
      <div>
        <form className="seating-form" onSubmit={this._changeSeats}>
          <label key="1">Min Seats:</label>
          <input type='text' key="2" id="min" />
          <br />
          <label key="3">Max Seats:</label>
          <input type='text' key="4" id="max" />
          <br />
          <button>Set Seating</button>
        </form>
      </div>
    );
  }
});
