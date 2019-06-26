app.controller('postCtrl', function ($scope, $http) {

    $scope.name = null;

    $scope.age = null;

    $scope.address = null;

    $scope.lblMsg = null;

    $scope.postdata = function (name, age, address) {   

    var data = {

    name: name,

    age: age,

    address: address

    };
    getData(data)
    }
    getDatafromdb().then( function(d) {  
        $scope.data = d.data;
    })
        //Call the services
    function getData(data) {
        var ss = JSON.stringify(data);
        return $http.post('http://localhost:8080/handlers/submit', ss).then( function(d) {
            getDatafromdb()
              return d
        })
    }
    function getDatafromdb() {
        return $http.get('http://localhost:8080/handlers/get')
    }
      
});