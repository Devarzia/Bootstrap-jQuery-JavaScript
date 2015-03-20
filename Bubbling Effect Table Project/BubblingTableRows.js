// To Handle all targets with the classname "select"
window.addEventListener("load", function ()
{
    var table = element("Bubbling");
    table.addEventListener("change", function (event)
    {
        var target = event.target;
        if (target.className == "select")
        {
            if (target.checked)
            {
                target.parentNode.parentNode.className = "select";
            }
            else
            {
                target.parentNode.parentNode.className = "";
            }
        }
    });
});

//// Getting all checkboxes with if statement
//window.addEventListener("load", function ()
//{
//    var checkboxContainer = element("checkboxTable");
//    checkboxContainer.addEventListener("click", function(event)
//    {
//        var target = event.target;
//        if (target.nodeName == "INPUT")
//        {
//            if (element("chk1").checked)
//            {
//                element("chk1").parentNode.parentNode.className = "firstRowColor";
//            }
//            else
//            {
//                element("chk1").parentNode.parentNode.className = "firstRowClearColor";
//            }

//            if (element("chk2").checked)
//            {
//                element("chk2").parentNode.parentNode.className = "secondRowColor";
//            }
//            else
//            {
//                element("chk2").parentNode.parentNode.className = "secondRowClearColor";
//            }

//            if (element("chk3").checked)
//            {
//                element("chk3").parentNode.parentNode.className = "thirdRowColor";
//            }
//            else
//            {
//                element("chk3").parentNode.parentNode.className = "thirdRowClearColor";
//            }
//        }
//    });
//});

////Function that calls to the 
//function highlightRow()
//{
//    if (element("chk1").checked)
//    {
//        element("chk1").parentNode.parentNode.className = "firstRowColor";
//    }
//    else 
//    {
//        element("chk1").parentNode.parentNode.className = "firstRowClearColor";
//    }

//    if (element("chk2").checked)
//    {
//        element("chk2").parentNode.parentNode.className = "secondRowColor";
//    }
//    else
//    {
//        element("chk2").parentNode.parentNode.className = "secondRowClearColor";
//    }

//    if (element("chk3").checked)
//    {
//        element("chk3").parentNode.parentNode.className = "thirdRowColor";
//    }
//    else
//    {
//        element("chk3").parentNode.parentNode.className = "thirdRowClearColor";
//    }
//}

function element(id)
{
    return document.getElementById(id)
}