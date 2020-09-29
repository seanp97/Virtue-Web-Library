function checkValid() {
    if ($(".check-valid").length > 0) {
        $(".form-default .form-section input").each(function () {
            $(this).keyup(function () {
                if ($(this).val()  == "") {
                    $(this).siblings("span").closest(".is-valid").text("⨉");
                    $(this).siblings("span").closest(".is-valid").removeClass("isValid");              
                }
                else {
                    $(this).siblings("span").closest(".is-valid").text("✔");
                    $(this).siblings("span").closest(".is-valid").addClass("isValid");                
                }
            });
        });
    }
}


function dropDown() {
    $(".drop-down .drop-heading").each(function () {
        $(this).click(function () {
            $(this).next(".drop-section").toggleClass("drop-show");
        });
    });
}

checkValid();
dropDown();