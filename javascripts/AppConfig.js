app.config(function($routeProvider) {
  $routeProvider
    .when("/going-to-the-sun-road", {
      templateUrl: "partials/going-to-the-sun-road.html",
      controller: "GoingToTheSunCtrl"
    })
    .when("/overseas-highway", {
      templateUrl: "partials/overseas-highway.html",
      controller: "OverseasCtrl"
    })
    .otherwise("/going-to-the-sun-road");
});