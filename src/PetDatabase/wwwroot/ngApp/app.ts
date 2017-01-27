namespace PetDatabase {
    angular.module("PetDatabase", ["ui.router", "ui.bootstrap.modal"]).config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        $stateProvider
            .state("master", {
                url: "/",
                templateUrl: "ngApp/views/master.html",
                controller: PetDatabase.Controllers.MasterController,
                controllerAs: "c"
            })
            .state("details", {
                url: "/details/:id",
                templateUrl: "ngApp/views/details.html",
                controller: PetDatabase.Controllers.DetailController,
                controllerAs: "c"
            })
            .state("add", {
                url: "/add",
                templateUrl: "ngApp/views/add.html",
                controller: PetDatabase.Controllers.AddController,
                controllerAs: "c"
            })
            .state("edit", {
                url: "/edit/:id",
                templateUrl: "ngApp/views/edit.html",
                controller: PetDatabase.Controllers.EditController,
                controllerAs: "c"
            });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });


}
