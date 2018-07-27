$(window).scroll(function() {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

$(window).resize(function() {
  $("#movie").removeClass("make-visible");
  $("#movie").addClass("hide");
  $("#season").removeClass("make-visible");
  $("#season").addClass("hide");
  $("#video").removeClass("make-visible");
  $("#video").addClass("hide");
  $("#music").removeClass("make-visible");
  $("#music").addClass("hide");
});

function switchPlaylist(firstId, secondId) {
  var current = document.getElementById(firstId);
  var previous = document.getElementById(secondId);
  current.classList.add("make-visible");
  current.classList.remove("hide");
  previous.classList.add("hide");
  previous.classList.remove("make-visible");
}

function clicked(el) {
  var screen = el.view.screen;
  var constant = 6;
  if (screen.width < 1024) {
    constant = 2;
  }

  console.log(screen);
  var element = el.srcElement.closest(".tile");

  var parent = el.srcElement.closest(".container");
  console.log(element.id);
  var res = element.id.split("-");
  var key = res[1];
  var section = res[0];

  var d = document.getElementById(section);
  d.classList.remove("make-visible");

  d.classList.add("hide");

  var siblings = [];
  var sibling = element.parentNode.firstChild;
  var skipMe = element;
  for (; sibling; sibling = sibling.nextSibling)
    if (sibling.nodeType == 1) siblings.push(sibling);
  var total = siblings.length - 1;
  var last_key = siblings[siblings.length - 1];

  var offset = element.offsetLeft - parent.offsetLeft + element.offsetWidth / 2;
  var next = Math.ceil(key / constant) * constant;
  console.log(last_key);
  var ending_element = last_key;
  if (next <= total) {
    ending_element = document.getElementById(section + "-" + next);
  } else {
    ending_element = last_key;
  }

  var before = document.getElementById("before-" + section);

  var after = document.getElementById("after-" + section);
  ending_element.parentNode.insertBefore(d, ending_element.nextSibling);
  //document.styleSheets[0].addRule('description:before','left: "'+offset+'px";');
  before.setAttribute("style", "left:" + offset + "px;");
  after.setAttribute("style", "left:" + offset + "px;");

  console.log(offset);
  d.classList.add("make-visible");

  d.classList.remove("hide");

  smoothScroll(section);
}

function quit(id) {
  console.log(id);

  var elem = document.getElementById(id);
  console.log(elem);

  elem.classList.add("hide");

  elem.classList.remove("make-visible");
}

function toggleSearch() {
  var toggle = document.getElementById("search-toggle");
  toggle.classList.add("hide");
  toggle.classList.remove("make-visible");

  var submit = document.getElementById("search");
  submit.classList.remove("hide");
  submit.classList.add("make-visible");
}
function enterPressed(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    submitSearch();
  }
}
function submitSearch() {
  var toggle = document.getElementById("search-toggle");
  toggle.classList.remove("hide");
  toggle.classList.add("make-visible");

  var submit = document.getElementById("search");
  submit.classList.add("hide");
  submit.classList.remove("make-visible");
  window.location.href='search.html'
}

function smoothScroll(elementId) {
  var elmnt = document.getElementById(elementId);
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
