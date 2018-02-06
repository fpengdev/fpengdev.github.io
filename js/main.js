function getCurrentYear() {
  return new Date().getFullYear();
}

function setCopyright() {
  var cString = "&copy Copyright 2017 - " + getCurrentYear();
  document.getElementId("copyrightText").innerHTML = cString;
}
