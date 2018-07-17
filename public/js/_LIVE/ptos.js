//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////
$(document).ready(function () {
	try {
		_sm ['hover'] = 'off';
		setTimeout(function(){
			try {
				_sm ['hover'] = 'on';
			}catch (err){
				alert ('#_select_card timeout\n\n' + err);	
			}
		},3000);
		_create_array ();
		_create_sounds ();
		_init_design ();
		_render ();
		if (_sm ['id'] != 'none'){
			_start_card (_sm ['id']);
			$.ionSound.play (_sm ['id']);
		}else{
			_start_card ('2_T');
		}
		setTimeout(function(){
			try {
				_ptos_css ('#_ptos', 'visibility', 'visible');
				_ptos_css ('#_nav', 'visibility', 'visible');
				_ptos_css ('#_op', 'visibility', 'visible');
			}catch (err){
				alert ('#_ptos timeout\n\n' + err);	
			}
		},500);
	} catch (err){
		alert ('#_ptos Ready Error \n\n ' + err);
	}
});