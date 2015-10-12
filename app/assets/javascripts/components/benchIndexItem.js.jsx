var BenchIndexItem = React.createClass({
  getInitialState: function(){
    return {hovered: false};
  },
  _onHover: function(){
    // change the state to true
    // add class hover to marker?
    // else return false
  },
  render: function(){
    var className = "bench";
    if (this.state.hovered) {
      className += " hover";
    }
    return (

        <li className={className}>{this.props.bench.description}</li>
    );
  }
});
