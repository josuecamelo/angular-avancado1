/**
 * Created by josuecamelo on 20/12/17.
 */
module.exports = function(){
    return {
        template:  `
            <div class="alert alert-success text-center">
                <p>a</p>
            </div>
        `,
        replace: false,
        restrict: 'AE',
        scope:{
         title: '@'
         },
         transclude: true
    };
};
