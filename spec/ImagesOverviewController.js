describe("Images OVerview Controller", function()
{
    //1. angular app simuleren

    beforeEach(module("app"));

    //controller is niets meer dan een functie
    var $controller;

    beforeEach(inject(function(_$controller_)
    {
      $controller = _$controller_;
    }));

    describe("Image properties", function()
    {
      it("should contain an image property", function()
      {
        var $scope = {};
        var controller = $controller("ImagesOverviewController", {$scope: $scope});
        $scope.searchImages();
        expect($scope.images).toBeDefined();
        expect($scope.images.length).toBeGraterThan(0);
      });
    });
});
