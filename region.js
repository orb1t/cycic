/* Region Javascript Functions */

var NAME;


function newRegionForm(){
	$('#sandbox_form').empty();	
	$('#sandbox_1 form').append('<p> Region Name:  <input type = "text" name = "region_name"/> </p>');
	$('#sandbox_1 form').append('<button name = "submit_New_Region" type="submit" onClick="openNewRegionForm()"> Submit </button>');
	document.getElementById('sandbox_1').style.display = 'none';					
	document.getElementById('sandbox_1').style.display = 'block';			
}
function openNewRegionForm(){
	window.NAME = document.getElementById('sandbox_form')[0].value;
	$('#sandbox_form').empty();	
	$('.region_type > ul').prepend('<li id = "' + window.NAME.trim() + '" class = "region"><a>' + window.NAME + '</a><ul>');
	updateSidebar();
	document.getElementById('wrapper').style.display = 'none';					
	document.getElementById('wrapper').style.display = 'block';
}

function updateSidebar(){
	$('ul li ul').each(function(){
		$(this).prev('a').find('.total').find('div').remove()
	  	$(this).prev('a').find('.total').append('<div>'+ ($(this).find('li').length - $(this).find('li > ul > li').length - 1) +'</div>');
	});
}
function toTitleCase(str){
	return str.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}