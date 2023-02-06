//4.Light Box
$(document).ready(function () {
  //Open lightbox on click <'catphoto-toggle'>
  $(".catphoto-toggle img").click(function () {
    $(".backdrop")
      .animate({ opacity: ".50" }, 300, "linear")
      .css("display", "block");
    $(".box").fadeIn();

    //Check if lightbox has an image
    if ($(".box").contents("img")) {
      $(".box").contents().remove("img");
    }

    //Get Text content
    var altvalue = $(this).attr("alt");

    if (altvalue == "ash") {
        var img = $("#cats4Adopt:nth-child(1) img").clone();
        $(".box").append(img);
    } else if (altvalue == "baker") {
        var img = $("#cats4Adopt:nth-child(2) img").clone();
        $(".box").append(img);
    } else if (altvalue == "hissy") {
        var img = $("#cats4Adopt:nth-child(3) img").clone();
        $(".box").append(img);
    } else {
        var img = $("#cats4Adopt:nth-child(4) img").clone();
        $(".box").append(img);
    }
  });

  //Click to close lightbox
  $(".close, .backdrop").click(function () {
    $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
      $(".backdrop").css("display", "none");
    });
    $(".box").fadeOut();
  });
});
