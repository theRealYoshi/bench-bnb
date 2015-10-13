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
      <form className="bench-form" onSubmit={this.createBench}>
        <label key="1">Latitude:</label>
        <input type='text' key="2" id="lat" valueLink={this.linkState('lat')}/>
        <br />
        <label key="3">Longitude:</label>
        <input type='text' key="4" id="long" valueLink={this.linkState('lng')}/>
        <br />
        <label key='5'>Description:</label>
        <input type='text' key='6' id="description" valueLink={this.linkState('description')}/>
        <br />
        <label key='7'>Seating:</label>
        <input type='text' key='8' id="seating" valueLink={this.linkState('seating')}/>
        <br />
        <button>Create Bench</button>
      </form>
    );
  }
});


        // <br />
        // <label>Longitude:</label>
        // <input type='text' valueLink={this.linkState('lng')}/>
        // <br />
        // <label>Description:</label>
        // <input type='text' valueLink={this.linkState('description')}/>
        // <br />
        // <label>Seating:</label>
        // <input type='text' valueLink={this.linkState('seating')}/>
        // <button>Create Bench</button>
