
angular
        .module(appObj.id)
        .directive('datePicker', datePicker);

function datePicker() {
    return {
        require: '?ngModel',
        restrict: 'A',
        link: function (scope, element) {
            element.datepicker({
                autoclose: true,
                format: 'yyyy-mm-dd'
            });
        }
    };
}
