var Search = React.createClass({
  handleMapClick: function(latLng){
    var coords = {
      lat: latLng["J"],
      lng: latLng["M"]
    };
    this.props.history.pushState(null, '/benches/new', coords);
  },
  render: function(){
    return (
      <div>
        <Map handleMapClick={this.handleMapClick}/>
        <BenchIndex />
      </div>
    );
  }
});
