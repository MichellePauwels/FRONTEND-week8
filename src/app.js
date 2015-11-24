(function()
{
  "use strict";

  var app = angular.module("app", []); //array zijn uw dependencies

  app.directive("flickrimage", function()
  {
    return
    {
      restrict: "E",
      templateUrl: "directives/flickrimage.html"
    };
  });

})();
