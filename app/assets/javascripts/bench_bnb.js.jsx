$(function() {
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={Search}/>
      <BenchForm path='benches/new' component={BenchForm} />
    </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
