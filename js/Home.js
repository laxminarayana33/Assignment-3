var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      image: 'images/shirt1.jpg',
      section: 'boys | mens',
      id: 1,
      name: 'Blue Jeans Shirt',
      desc: 'Well nice Blue Jeans for perfect men',
      price: '350',
    },
    {
      section: 'boys | mens',
      id: 2,
      name: 'Red Shirt',
      desc: 'A Colour Full Half Hands for Summer',
      image: 'images/shirt6.jpg',
      price: '450',
    },
    {
      section: 'boys | mens',
      id: 3,
      name: 'Jeans T Shirt',
      desc: 'A Trendy Jeans T Shirft of Full Hands',
      image: 'images/shirt3.jpg',
      price: '600',
    },
    {
      section: 'boys | mens',
      id: 4,
      name: 'Blue Shirt',
      desc: 'A Perfect Party Ware for Mens',
      image: 'images/shirt5.jpg',
      price: '550',
    },
    {
      section: 'boys | mens',
      id: 5,
      name: 'Red Shirt',
      desc: 'An Official Office ware for Mens',
      image: 'images/shirt7.jpg',
      price: '500',
    },
    {
      section: 'boys | mens',
      id: 6,
      name: 'Navy Blue Shirt',
      desc: 'Causal Ware of some Events ',
      image: 'images/shirt2.jpg',
      price: '500',
    },
    {
      section: 'boys | mens',
      id: 7,
      name: 'Black Shirt',
      desc: 'For a best trip in Summer ',
      image: 'images/shirt4.jpg',
      price: '600',
    },
    {
      section: 'boys | mens',
      id: 8,
      name: 'Kurta Style',
      desc: 'Best Kurtas for Family Events',
      image: 'images/kurtha.jpg',
      price: '600',
    },
    {
      section: 'womens|girls',
      id: 9,
      name: 'Gown',
      desc: 'Beautiful Gown For Party',
      image: 'images/dress1.jpg',
      price: '900',
    },
    {
      section: 'womens|girls',
      id: 10,
      name: 'Pink Top',
      desc: 'Causal Ware for Tours',
      image: 'images/dress2.jpg',
      price: '800',
    },
    {
      section: 'womens|girls',
      id: 11,
      name: 'Chudidar',
      desc: 'A nice Light Red Chudidar ',
      image: 'images/dress3.jpg',
      price: '750',
    },
    {
      section: 'womens|girls',
      id: 12,
      name: 'Saree',
      desc: 'Represents the Indian Traditions',
      image: 'images/dress4.jpg',
      price: '1000',
    },
    {
      section: 'womens|girls',
      id: 13,
      name: 'Gree Colour Chudidar',
      desc: 'The best Out Fit For Causal Events',
      image: 'images/dress5.jpg',
      price: '800',
    },
    {
      section: 'womens|girls',
      id: 14,
      name: 'Black Dress',
      desc: 'Offical Party Ware for Ladies',
      image: 'images/dress6.jpg',
      price: '1000',
    },
    {
      section: 'womens|girls',
      id: 15,
      name: 'Skirt',
      desc: 'A Normal Skirts for Meetings',
      image: 'images/dress7.jpg',
      price: '850',
    },
  ]
  $scope.foundList = []
  $scope.message = ''
  $scope.isVisible = false
  $scope.show = function () {
    $scope.isVisible = $scope.isVisible ? fasle : true
  }

  $scope.store = function(item){
    if(item){
    $scope.foundList.push({section:item.section, id:item.id, name:item.name, desc:item.desc, image:item.image, price:item.price})
    // console.log($scope.foundList)
   }
 
  }

  $scope.total = 0;
  $scope.setTotals = function(cart) {
    if(cart){
      $scope.total += cart.price;
       console.log($scope.total)
    }
    
  }

  $scope.remove = function(cart){
    if(cart){
      $scope.foundList.splice($scope.foundList.indexOf(cart),1);
      // $scope.total -= cart.price;
    }
  }


 
});

// app.config(function($routerProvider){
//   $routerProvider
//   .when('/foundlist',{
//     templateUrl: "cart.html"
//   });
// })



// app.filter('section', function(){
//   return function(section){
//     if(section == 'men'){
//       return searchItems.section;
//     }
//     else{
//       return searchItems.section
//     }
//   }
// })


// app.filter('searchFor', function () {
//   return function (arr, searchString) {
//     if (!searchString) {
//       return arr
//     }
//     var result = []
//     searchString = searchString.toLowerCase()
//     angular.forEach(arr, (item) => {
//       if (item.section.toLowerCase().indexOf(searchString) !== -1) {
//         result.push(item)
//       }
//     })
//     return result
//   }
// })
