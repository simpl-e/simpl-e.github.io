
define(function () {
    //COMO FUNCION
    return function () {

        $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
            //console.log(event, jqxhr, settings, thrownError);

            //UNAUTHORIZED
            if (401 == jqxhr.status) {

                //LOGIN MODAL
                require(["vue!modules/modal.html"], function (Component) {
                    var component = new Component();

                    //MODAL ESTÁTICO
                    component.data = component.data();
                    component.data.options = {
                        backdrop: 'static',
                        keyboard: false
                    };

                    var vm = new Vue(component);

                    var div = $("<div>").appendTo("body")[0];
                    vm.$mount(div);

                    $(vm.$el).find(".modal-body").css({
                        padding: 0
                    });
                    vm.page = "modules/views/login/login.html";
                });

                return;
            }

            $.notify("<b>" + thrownError + "</b>: " + jqxhr.responseText, {type: 'danger'});
        });

    };
});
