//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////
/*
 * 	some random functions we might could use
 */
function _email_dialog (){
	try {
		$( "#_hb_dialog" ).dialog( "option", "title", 'Email \'' + _sm ['phrase'] + '\' to...');
		var h= '';
		h += '<br /><input type="text" id="_email_address" name="_address" value="email" />';
		h += '<input type="submit" id="_email_send" value="Send now" name="_send" /><br />';
		$( "#_hb_dialog" ).html (h);
		_ptos_btn ($('#_email_send'), 'help', true);
		_ptos_css ($('#_email_address'), 'padding', '5px');
		$('#_email_address').addClass('ui-state- ui-corner-all');
		_ptos_css ($('#_email_address'), 'border', '1px solid ' + _sm ['light_blue']);
		$( "#_hb_dialog" ).dialog( "open" );
	}catch (err){
		alert ( '_email_dialog\n\n'+err);
	}
}

function _create_array (){
	try {
		var ret= true;
        _sm ['elements'] = [];
        var h = '';
        $("._element").each (function(index, element) {
        	var e = [];
        	e ['div'] = element;
        	e ['number'] = parseFloat ($("#" + element.id).attr ('number'));
        	e ['symbol'] = $("#" + element.id).attr ('symbol');
        	e ['swear'] = $("#" + element.id).attr ('swear');
        	e ['weight'] = parseFloat ($("#" + element.id).attr ('weight'));
        	e ['id'] = element.id;
        	h += e ['swear'] + ' > ' + e ['symbol'] + ' > ' + e ['number'] + ' > W' + e ['weight'] +'<br />';
			_sm ['elements'].push (e);
		});
    	return ret;
	}catch (err){
		alert ( '_create_array \n\n'+err);
	}
}
function _hover_card (id){
	try {
		if (_sm ['hover'] != 'off'){
			_sm ['cur_id'] = id;
			var h = '';
			h += '<a href="#" class="_selected_element" title="' + id.attr ("name") + '">';
			h += '<img class="_selected_element_img" src="_png/' + id.attr ("name") + '.png" />';
			h += '</a>';
			$( "#_jquery" ).html (h);
			_render_jq ();
		}
	}catch (err){
		alert ( '_hover_card \n\n'+err);
	}
}
function _click_card (id){
	try {
		_ptos_css ('#_ptos', 'visibility', 'hidden');
		_ptos_css ('#_nav', 'visibility', 'hidden');
		$( ".google_share" ).html ('');
		window.location.assign ('?id=' + id.attr ("name"));
	}catch (err){
		alert ( '_hover_card \n\n'+err);
	}
}
function _start_card (name){
	try {
		var h = '';
		h += '<a href="#" class="_selected_element" title="' + name + '">';
		h += '<img class="_selected_element_img" src="_png/' + name + '.png" />';
		h += '</a>';
		$( "#_jquery" ).html (h);
		_render_jq ();
	}catch (err){
		alert ( '_hover_card \n\n'+err);
	}
}
function _get_readable_date_time (unix){
	try {
		var
        date = new Date(unix * 1000),
        year = date.getFullYear(),
        day = date.getDate(),
        month = date.getMonth(),
        hours = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()),
        minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
        seconds = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()),
        formattedTime = ' ' +  hours + ':' + minutes;
        date_str = formattedTime + ' ' + day + '/' + month + '/' + year;
    	return date_str;
	}catch (err){
		alert ( '_get_readable_date\n\n'+err);
	}
}
function _get_readable_date (unix){
	try {
		var
        date = new Date(unix * 1000),
        year = date.getFullYear(),
        day = date.getDate(),
        month = date.getMonth(),
        hours = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()),
        minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
        seconds = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()),
        date_str = '' + day + '/' + month + '/' + year;
    	return date_str;
	}catch (err){
		alert ( '_get_readable_date\n\n'+err);
	}
}
function _secs_to_mins (secs){
	try {
		var sec = parseInt(secs);
		var min=0;
		while(sec>59){
			sec-=60;
			min++;
		}
		return min + ' Mins, ' + sec +' Secs';
	}catch (err){
		alert ( '_secs_to_mins\n\n'+err);
	}
}
function _create_sounds (){
	try {
		$.ionSound({
		    sounds: [
		        "1_C",
		        "2_T",
		     	"3_Sc",
		     	"4_F",
		     	"5_P",
		     	"6_Bs",
		     	"7_By",
		     	"8_Sd",
		     	"9_Yllt",
		     	"10_Sfc",
		     	"11_Fc",
		     	"12_Yp",
		     	"13_Fbti",
		     	"14_Bh",
		     	"15_St",
		     	"16_Ta",
		     	"17_Tfc",
		     	"18_Fy",
		     	"19_Mf",
		     	"20_S",
		     	"21_B",
		     	"22_A",
		     	"23_Bd",
		     	"24_Ck",
		     	"25_W",
		     	"26_Wr",
		     	"27_As",
		     	"28_Tw",
		     	"29_Pss",
		     	"30_Egp",
		     	"31_Fba",
		     	"32_Bfs",
		     	"33_Bos",
		     	"34_Upt",
		     	"35_Soc",
		     	"36_Fo",
		     	"37_Mfa",
		     	"38_Si",
		     	"39_Bks",
		     	"40_Ba",
		     	"41_Fob",
		     	"42_Cs",
		     	"43_Bw",
		     	"44_Fow",
		     	"45_Ai",
		     	"46_Two",
		     	"47_Slp",
		     	"48_Ph",
		     	"49_Sb",
		     	"50_Bfh",
		     	"51_Ysfs",
		     	"52_Gmt",
		     	"53_Ysfc",
		     	"54_Fa",
		     	"55_Ow",
		     	"56_Sffb",
		     	"57_Lob",
		     	"58_Lra",
		     	"59_Sb",
		     	"60_Ufc",
		     	"61_Sow",
		     	"62_Lw",
		     	"63_Yba",
		     	"64_Bot",
		     	"65_Pac",
		     	"66_Sp",
		     	"67_Gfb",
		     	"68_Sbn",
		     	"69_Sty",
		     	"70_Bt",
		     	"71_Ysfac",
		     	"72_Cfb",
		     	"73_Mfm",
		     	"74_Sft",
		     	"75_Btt",
		     	"76_Afg",
		     	"77_Bft",
		     	"78_Cg",
		     	"79_Flw",
		     	"80_Wa",
		     	"81_Foa",
		     	"82_Tp",
		     	"83_Piw",
		     	"84_Pc",
		     	"85_Ogb",
		     	"86_Wh",
		     	"87_Sfo",
		     	"88_Oo",
		    ],
		    path: _sm ['app_path'] + "_mp3_ogg/",                
		    multiPlay: true,               
		    volume: "1"
		});
	}catch (err){
		alert ( '_create_sounds \n\n'+err);
	}
}

function _ptos_btn (selector, icon, showtext){
	try {
		new_button = $(selector).button ({
		icons: {
			primary: "ui-icon-"+icon
		},
		text: showtext 
		});
		new_button.click (function(){
			return true;
		});
		_ptos_css (new_button, 'text-align', 'left');
		_ptos_css (new_button, 'margin', '3px');
		_ptos_css (new_button, 'font-size', '15px');
		_ptos_css (new_button, 'color', 'white');
	}catch (err){	
		alert ( '_ptos_btn\n\n'+err);
	}
}
