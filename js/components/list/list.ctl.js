(function(){

'use strict';
angular.module(appObj.id).controller('listCtl',listCtl);

listCtl.$inject = ['$scope','listSrv','$filter'];

function listCtl($scope,listSrv,$filter){





	listSrv.getList().success(function (data){
		$scope.data=data.DealerEmployeeList;
		console.log("userlist",data.DealerEmployeeList)





		    
          
        
  
  $scope.viewby = 10;
  $scope.totalItems = $scope.data.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 50; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 15; //reset to first paghe
}

	})


}
})();





//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
// app.filter('startFrom', function() {
//     return function(input, start) {
//         start = +start; //parse to int
//         return input.slice(start);
//     }
// });





// Code goes here

