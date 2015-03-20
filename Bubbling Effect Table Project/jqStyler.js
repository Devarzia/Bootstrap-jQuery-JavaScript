$(function ()
{
    $(".select:checkbox").change(function ()
        // Also can be typed as $("input.select[type=checkbox]")
        // Also can be typed as $("input[type=checkbox]")
    {
        // Inside an Event Handler
        // "this" pointer references the element
        // on which the event fired

        // event.target references the element
        // on which the evvent occured

        // When using bubbling, event.target != this
        // otherwise they reference the same element

        if (this.checked)
        {
            $(this).parents("tr").addClass("select");
        }
        else
        {
            $(this).parents("tr").removeClass("select");
        }
    });
});

// Alternative Method
//$(function () {
//    $("#Bubbling").change(function (event)
//        // Also can be typed as $("input.select[type=checkbox]")
//        // Also can be typed as $("input[type=checkbox]")
//    {
//        // Inside an Event Handler
//        // "this" pointer references the element
//        // on which the event fired

//        // event.target references the element
//        // on which the evvent occured

//        // When using bubbling, event.target != this
//        // otherwise they reference the same element

//        if (event.target.checked) {
//            $(event.target).parents("tr").addClass("select");
//        }
//        else {
//            $(event.target).parents("tr").removeClass("select");
//        }
//    });
//});

// Alternative method with Bubbling
$(function () {
    $("#Bubbling").on("change", ":checkbox", function ()
        // Also can be typed as $("input.select[type=checkbox]")
        // Also can be typed as $("input[type=checkbox]")
    {
        // Inside an Event Handler
        // "this" pointer references the element
        // on which the event fired

        // event.target references the element
        // on which the evvent occured

        // When using bubbling, event.target != this
        // otherwise they reference the same element

        if (this.checked) {
            $(this).parents("tr").addClass("select");
        }
        else {
            $(this).parents("tr").removeClass("select");
        }
    });
});