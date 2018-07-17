//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////
function _render (){
	try {
		_ptos_css ($('#_ptos'), 'font-family', 'Open Sans');
		_ptos_css ($('#_nav'), 'font-family', 'Open Sans');
		_ptos_css ($('#_ptos'), 'color', _sm ['dark_grey']);
		_ptos_css ($('#_ptos'), 'font-size', '12px');
		_ptos_css ($('#_ptos'), 'width', '780px');
		_ptos_css ($('#_nav'), 'width', '780px');
		_ptos_css ($('#_nav'), 'margin', 'auto');
		_ptos_css ($('#_ptos'), 'margin', 'auto');
		_ptos_css ($('#_ptos a'), 'text-decoration', 'none');
		_ptos_css ($('#_nav a'), 'text-decoration', 'none');
		_ptos_css ($('#_desc a'), 'color', _sm ['dark_blue']);
		_ptos_css ($('#_hb_title'), 'margin-top', '6px');
		_ptos_css ($('#_hb_title'), 'float', 'left');
		_ptos_css ($('#_hb_title h1'), 'font-size', '18px');
		_ptos_css ($('#_ptos a:focus'), 'outline', 'none');
		_ptos_css ($('._element'), 'float', 'left');
		_ptos_css ($('._card_img'), 'width', '100%');
		_ptos_css ($('._logos'), 'float', 'right');
		_ptos_css ($('._logos'), 'margin-top', '15px');
		_ptos_css ($('._logos'), 'margin-left', '15px');
		_ptos_css ($('._logos'), 'width', '25px');
		_ptos_css ($('._logos'), 'height', '25px');
		_ptos_css ($('._logo_hb'), 'width', '37px');
		_ptos_css ($('._logo_hb'), 'height', '37px');
		_ptos_css ($('._logo_hb'), 'float', 'right');
		_ptos_css ($('._logo_hb'), 'margin-top', '10px');
		_ptos_css ($('._logo_hb'), 'margin-left', '10px');
		$('#_jquery').addClass('ui-state- ui-corner-all');
		_ptos_css ($('#_table'), 'margin-top', '-75px');
		_ptos_css ($('#_table_pusher'), 'margin-top', '75px');
		_ptos_css ($('#_jquery'), 'margin-bottom', '25px');
		_ptos_css ($('#_jquery'), 'position', 'absolute');
		_ptos_css ($('#_jquery'), 'margin-left', '100px');
		_ptos_css ($('#_jquery'), 'margin-top', '0px');
		_ptos_css ($('#_jquery'), 'width', '415px');
		_ptos_css ($('#_jquery'), 'height', '215px');;
		$('._card_img').addClass('ui-state- ui-corner-all');
		_ptos_css ($('._card_img'), 'border', '1px solid ' + _sm ['light_blue']);
		_ptos_css ($('#_link_logos'), 'padding', '5px');
		_ptos_css ($('#_link_logos'), 'margin', '2px');
		_ptos_css ($('._spacer'), 'height', '64px');
		_ptos_css ($('._col'), 'width', '39px');
		_ptos_css ($('._col'), 'margin', '2px');
		_ptos_css ($('._col'), 'float', 'left');
	}catch (err){
		alert ( '_render\n\n'+err);
	}
}
function _init_design (){
	try {
		_ptos_btn ($('#_btn_home'), 'home', false);
		_ptos_btn ($('#_btn_phrase'), 'volume-on', true);
		_ptos_btn ($('#_btn_email'), 'mail-closed', false);	
		$( "#_btn_email" ).click (function(){
			try{
				_email_dialog ();
			}catch (err){
				alert (err);
			}
			return false;
		});
		$( "#_hb_dialog" ).dialog({
			autoOpen: false,
			width: 335,
			modal: true,
			buttons: {
				"Cancel": function() {
					$( this ).dialog( "close" );
				}
			},
		});
		$( "._card" ).mouseover (function(){
			try{
				_hover_card ($(this));
			}catch (err){
				alert (err);
			}
			return false;
		});
		$( "._card" ).click (function(){
			try{
				_click_card ($(this));
			}catch (err){
				alert (err);
			}
			return false;
		});
	}catch (err){
		alert ( '_init_design\n\n'+err);
	}
}
function _ptos_css (selector, css, value){
	try {
		$(selector).css (css,value);
	}catch (err){
		alert ( '_ptos_css\n\n'+err);
	}
}
function _clear_both (){
	try {
		var h = '';
		h += '<div style="clear:both;"></div>';
		return h;
	}catch (err){
		alert ( '_clear_both\n\n'+err);
	}
}