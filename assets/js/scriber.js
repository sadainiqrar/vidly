$(window).scroll(function() {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

$( window ).resize(function() {
  $( "#movie" ).removeClass( "make-visible" );
  $( "#movie" ).addClass( "hide" );
  $( "#season" ).removeClass( "make-visible" );
  $( "#season" ).addClass( "hide" );
  $( "#video" ).removeClass( "make-visible" );
  $( "#video" ).addClass( "hide" );
  $( "#music" ).removeClass( "make-visible" );
  $( "#music" ).addClass( "hide" );
});




function clicked(el) {
  var screen = el.view.screen;
  
  console.log(screen)
  var element = el.srcElement.closest(".tile");
  console.log(element.id)
  var res = element.id.split("-");
  var key = res[1];
  var section = res[0];

  var d = document.getElementById(section);
	d.classList.remove("make-visible");
  
	d.classList.add("hide");
  
  var siblings = [];
    var sibling = element.parentNode.firstChild;
    var skipMe = element;
    for ( ; sibling; sibling = sibling.nextSibling ) 
       if ( sibling.nodeType == 1)
          siblings.push( sibling );
  console.log(siblings.length)
  console.log(siblings[siblings.length-1])
  var total = siblings.length - 1
  var last_key = siblings[siblings.length-1]

  var offset = element.offsetLeft;
  console.log(res)
  var next = Math.ceil(key/6)*6;
  console.log(last_key)
  var ending_element = last_key
  if(next <= total){
	console.log('if')
	  ending_element = document.getElementById(section + '-' + next);
  }
	else{console.log('else')
	ending_element = last_key;
	}
	console.log(ending_element)
  
  var before = document.getElementById('before');
  
  var after = document.getElementById('after');
  ending_element.parentNode.insertBefore(d, ending_element.nextSibling);
  //document.styleSheets[0].addRule('description:before','left: "'+offset+'px";');
  before.setAttribute('style', 'left:'+ offset + 'px;');
  after.setAttribute('style', 'left:'+ offset + 'px;');
  if(screen.width > 1023){
  d.classList.add("make-visible");

  d.classList.remove("hide");
  }
  
}

function quit(id){
  console.log(id)
  
  var elem = document.getElementById(id);
  console.log(elem)
  
  elem.classList.add("hide");
  
  
  elem.classList.remove("make-visible");
}

