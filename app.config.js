"use strict";

angular.module("BudgetApp")
.config(["$routeProvider", ($routeProvider) => { // config dependency is routeProvider, uses it for routing
    $routeProvider // imported server
    .when("/budget", { // when url is here,
        template: "<budget></budget>" // use this template
    })
    // .when("/hero", {
    //     template: "<hero></hero>"
    // })
    // .when("/villains", {
    //     template: "<villains></villains>"
    // })
    .otherwise({ // if url is anything other than these options, default to /home
        redirectTo: "/budget"
    })
}]);

// don't know why this isn't working atm..