var Search = React.createClass({
  getInitialState: function(){
    return {params: this.props.location.query};
  },
  componentWillMount: function(){
    FilterStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    FilterStore.removeChangeListener(this._onChange);
  },
  componentWillReceiveProps: function(newProps){
    var minMax = {
      min_seats: parseInt(newProps.location.query.min),
      max_seats: parseInt(newProps.location.query.max)
    };
    FilterActions.updateMinMax(minMax);
  },
  _onChange: function(){
    var filtered = FilterStore.all();
    ApiUtil.fetchFilteredBenches(filtered);
    // var params = this.props.location.query;
    // this.setState({params: params});
  },
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
        <FilterParams />
        <BenchIndex />
      </div>
    );
  }
});
