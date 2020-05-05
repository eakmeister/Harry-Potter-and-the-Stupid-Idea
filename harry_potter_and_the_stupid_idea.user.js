// ==UserScript==
// @name     Harry Potter and the Stupid Google Scholar Script
// @version  1
// @grant    none
// @include https://scholar.google.com/scholar?*
// ==/UserScript==

var h3s = document.getElementsByClassName("gs_rt")

for (var i = 0; i < h3s.length; i++) {
  var h3 = h3s[i]
  
  var children = h3.children
  for (var j = 0; j < children.length; j++) {
    var child = children[j]
        
    if (child.tagName == "A") {
      if (child.text.startsWith("The")) {
        child.text = "Harry Potter and " + child.text
      } else {
        child.text = "Harry Potter and the " + child.text
      }
    }
  }
}
