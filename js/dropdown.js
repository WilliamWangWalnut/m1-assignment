//3.4. Drop Down Box
document.getElementById("chooseCat").addEventListener("change", showcat);
function showcat() {
  var selectCatash = document.getElementById("ash");
  var selectCatbaker = document.getElementById("baker");
  var selectCathissy = document.getElementById("hissy");
  var selectCatmaxie = document.getElementById("maxie");

  var catash = document.getElementById("pAsh");
  var catbaker = document.getElementById("pBaker");
  var cathissy = document.getElementById("pHissy");
  var catmaxie = document.getElementById("pMaxie");
  var tellushere = document.getElementById("tellushere");

  if (selectCatash.selected) {
    catash.style.display = "block";
    tellushere.style.display = "block";
    catbaker.style.display = "none";
    cathissy.style.display = "none";
    catmaxie.style.display = "none";
  } else if (selectCatbaker.selected) {
    catash.style.display = "none";
    tellushere.style.display = "block";
    catbaker.style.display = "block";
    cathissy.style.display = "none";
    catmaxie.style.display = "none";
  } else if (selectCathissy.selected) {
    catash.style.display = "none";
    tellushere.style.display = "block";
    catbaker.style.display = "none";
    cathissy.style.display = "block";
    catmaxie.style.display = "none";
  } else if (selectCatmaxie.selected) {
    catash.style.display = "none";
    tellushere.style.display = "block";
    catbaker.style.display = "none";
    cathissy.style.display = "none";
    catmaxie.style.display = "block";
  } else {
    catash.style.display = "none";
    tellushere.style.display = "none";
    catbaker.style.display = "none";
    cathissy.style.display = "none";
    catmaxie.style.display = "none";
  }
}
