(function()
{
  "use strict";

  var FlickrController = function($scope, $http)
  {
    //scopes
    $scope.searchQuery = "dog";
    $scope.images = [];
    $scope.searchImages = function()
    {
      $scope.images = null; //voor wachten ding

      //private var
      var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ca53bc81589d3ad195743451a4d28869&tags=" + $scope.searchQuery + "&format=json&nojsoncallback=1";

      $http.get(url).then(onImagesDownloaded, onImagesDownloadError); //gelukt downloaded, mislukt onerror
    };

    $scope.sortProperty = "title";
    $scope.filterQuery = "";

    $scope.checkandStyleTitle = function(i)
    {
      if(!i.title || i.title === "")
      {
        return "flickrNoTitle";
      }
    }

    $scope.filterImages = function(i)
    {
      if($scope.filterQuery === "")
      {
        return true;
      }

      if(i.title.toLowerCase().indexOf($scope.filterQuery.toLowerCase()) >= 0)
      {
        return true;
      }

      return false;

    };

    var onImagesDownloaded = function(response)
    {
      //https://www.flickr.com/services/api/explore/flickr.photos.search

      $scope.images = [];
      angular.forEach(response.data.photos.photo, function(photo)
      {
        var newFlickrImg = new FlickrImage(photo.id, photo.owner, photo.secret, photo.server, photo.farm, photo.title); //is async

        $scope.images.push(newFlickrImg);

      }); //angular forloop

    };
    var onImagesDownloadError = function(err){};
    /*var searchImages = function()
    {
      $http.get(url).then(onImagesDownloaded, onImagesDownloadError); //gelukt downloaded, mislukt onerror
    };*/

  };

  angular.module("app").controller("FlickrController", ["$scope", "$http", FlickrController]); //$http is een get/post/put/delete uit te voeren, om de zoveel tijd iets ophalen

})();
