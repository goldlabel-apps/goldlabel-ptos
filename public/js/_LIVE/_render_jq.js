//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

function _render_jq (){
	try {
		_ptos_css ($('._selected_element_img'), 'border', '1px solid ' + 'white');
		_ptos_css ($('._selected_element_img'), 'height', '210px');
		//_ptos_css ($('._selected_element_img'), 'margin-right', '10px');	
		_ptos_css ($('._selected_element_img'), 'float', 'right');
		$('._selected_element_img').addClass('ui-state- ui-corner-all');
		
		$( "._selected_element" ).click (function(){
			try{
				window.location.assign ('?id=' + $(this).attr ("title"));
			}catch (err){
				alert (err);
			}
			return false;
		});
		
	}catch (err){
		alert ( '_render_jq ()\n\n'+err);
	}
}