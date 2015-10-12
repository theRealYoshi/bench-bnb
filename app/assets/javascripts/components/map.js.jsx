var Map = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function(){
    return {markers: []};
  },
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions); // this initializes the map
    BenchStore.addChangeListener(this._addMarkers);
    this.map.addListener('idle',function(){
      this._removeMarkers();
      var bounds = this._getBounds();
      ApiUtil.fetchBenches(bounds);
    }.bind(this));  // this listens for a change in the map
    this.map.addListener('click', function(event){
      this.props.handleMapClick(event.latLng);
    }.bind(this));
  },
  _getBounds: function(){
    var latlngBounds = this.map.getBounds();
    var nEbound = latlngBounds.getNorthEast();
    var sWbound = latlngBounds.getSouthWest();
    var bounds = {
      bounds:{
        northEast: {
          lat: nEbound.lat(),
          lng: nEbound.lng()
        },
        southWest: {
          lat: sWbound.lat(),
          lng: sWbound.lng()
        }
      }
    };
    return bounds;
  },
  _addMarkers: function(){
    var benches = BenchStore.all();
    // var image = 'http://www.realfitscore.com/images/silouhettes/realFIT_Max-Bench-Press_v02.png';
    benches.forEach(function(bench){
      var latlng = new google.maps.LatLng(bench.lat, bench.lng);
      var tempMarker = new google.maps.Marker({ position: latlng,
                                                title: bench.description});
                                                // icon: image});
      if (this.state.markers.indexOf(tempMarker) === -1){ // if it's not included
        this.state.markers.push(tempMarker);
      }
    }.bind(this));
    this.state.markers.forEach(function(marker){
      marker.setMap(this.map);
    }.bind(this));
    console.log(this.state.markers.length);
  },
  _removeMarkers: function(){
    this.state.markers.forEach(function(marker){
      marker.setMap(null);
    }.bind(this));
    this.setState({markers: []});
  },
  render: function(){
      return (
        <div className='map' ref="map">
        </div>
      );
  }
});
