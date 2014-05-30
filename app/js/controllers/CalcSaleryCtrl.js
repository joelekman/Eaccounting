'use strict';

/* global eaccountingControllers */
/* global console */
/* jshint globalstrict: true */
/* global document */

eaccountingControllers.controller('CalcSaleryCtrl', ['$scope', 
    function ($scope) {
        console.log("test");
      //Check if the object is loaded before or not.
      //  console.log($routeParams);
     /*   if (ContributionFactory.previewData !== null ){
              $scope.contribution = ContributionFactory.previewData.contribution;
              $scope.user_info = ContributionFactory.previewData.user_info;

              // console.log($scope.contribution.desc.eng);
              $scope.contribution.desc.eng = htmlDecode(ContributionFactory.previewData.contribution.desc.eng);
              $scope.contribution.desc.org = htmlDecode(ContributionFactory.previewData.contribution.desc.org);
              // console.log($scope.contribution.desc.eng);

              $scope.publicValue = ContributionFactory.previewData.contribution.public;
              // console.log($scope.publicValue);

              ContributionFactory.resetPreviewData(); // resets the contribution data in ContributionFactory to stop it from beeing loaded more than once.
            }
        else {
            ContributionFactory.getContribution($routeParams)
                .then(function(data) {
                    console.log(data.contribution.desc.eng);
                    $scope.contribution = data.contribution;
                    $scope.user_info = data.user_info; 
                    // $scope.contribution.desc.eng = $sanitize($scope.contribution.desc.eng);
                    // $scope.contribution.desc.org = $sanitize($scope.contribution.desc.org);
                    $scope.publicValue = data.contribution.public;
                    // console.log($scope.publicValue);

                }, function(error) {
                    //TODO: nåt gick fel, visa felmedelande
                    console.log("fel, kontrollera parametern och att servern är på");
              });
         }
         // console.log($scope.contribution);

         $scope.likeContribution = function(){
            console.log("clicked the likeContribution");
            if (true){ //TODO check if the user is logged in and hasen't liked this one before.
                
                if (ContributionFactory.likeContribution($routeParams)){
                    console.log("borde inte printas of den failar");
                   
                    if ($scope.contribution.number_of_likes !== undefined){
                        $scope.contribution.number_of_likes += 1;
                    } else {
                        $scope.contribution.number_of_likes = 1;
                    }
                }
            }
            else {
                // TODO ge fedback till användaren
            }
          };*/
    }
]);

/*function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}*/