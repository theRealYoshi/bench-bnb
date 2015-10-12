var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],
  blankAttrs: {
      lat: '',
      lng: '',
      description: '',
      seating: 0
  },
  getInitialState: function(){
    this.blankAttrs.lat = this.props.location.query.lat;
    this.blankAttrs.lng = this.props.location.query.lng;
    return this.blankAttrs;
  },
  createBench: function(event){
    event.preventDefault();
    var bench = {};
    Object.keys(this.state).forEach(function(key){
      bench[key] = this.state[key];
    }.bind(this));
    ApiUtil.createBench(bench, function(){
      this.history.pushState(null, "/", {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },
  render: function(){
    return (
      <form className='new-bench' onSubmit={this.createBench}>
        <div>
          <label>Latitude:</label>
          <input type='text' valueLink={this.linkState('lat')}/>
        </div>
        <br />
        <div>
          <label>Longitude:</label>
          <input type='text' valueLink={this.linkState('lng')}/>
        </div>
        <br />
        <div>
          <label>Description:</label>
          <input type='text' valueLink={this.linkState('description')}/>
        </div>
        <br />
        <div>
          <label>Seating:</label>
          <input type='text' valueLink={this.linkState('seating')}/>
        </div>
        <button>Create Bench</button>
      </form>
    );
  }
});
