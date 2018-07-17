<?php
	global $o;
	
	$o ['site'] = 'Swear Machine';
	//$o ['app_path'] = 'http://' . $_SERVER['SERVER_NAME'] . '/swear-machine.com/';
	$o ['app_path'] = 'http://' . $_SERVER['SERVER_NAME'] . '/';
	$o ['title'] = 'Swear Machine';
	$o ['phrase'] = $o ['title'];
	$o ['theme_jq'] = $o ['app_path'] . '_js/jquery-ui/js/jquery-1.10.2.js';
	$o ['theme_jqui'] = $o ['app_path'] . '_js/jquery-ui/js/jquery-ui-1.10.4.custom.min.js';
	$o ['theme_css'] = $o ['app_path'] . '_js/jquery-ui/css/swearmachine/jquery-ui-1.9.2.custom.min.css';
	$o ['id'] = 'none';
	$o ['image'] = $o ['app_path'].'_png/_logos/Modern-Toss-Logo.png';
	if (isset ($_GET)){
		if (isset ($_GET['id'])){
			$o ['id'] = $_GET['id'];
			$o ['title'] = $o ["elements"][$o ['id']] . ' Swear Machine';
			$o ['phrase'] = $o ["elements"][$o ['id']];
			$o ['image'] = $o ['app_path'].'_png/' . $o ['id'] . '.png';
		}
	}
	$o ['url'] = _this_url ();
	$o ['player'] = '_dev';
	$o ['headings'] = '#3299cc';
	$o ['light_grey'] = '#f4f4f4';
	$o ['dark_grey'] = '#666';
	$o ['light_blue'] = '#9e2414';
	$o ['dark_blue'] = '#d64733';	
	$o ['blue_bg'] = '#8db6cd';
	/*
	$o ['border'] = '#9e2414';00688b
	$o ['header'] = '#d64733';3299cc
	 * 
	 */
	function _this_url (){
		$pageURL = 'http';
		if (isset($_SERVER["HTTPS"])){
			if ($_SERVER["HTTPS"] == "on") {
				$pageURL .= "s";
			}
		}
		$pageURL .= "://";
		if ($_SERVER["SERVER_PORT"] != "80") {
			$pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
		} else {
			$pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
		}
		return $pageURL;
	}
?>
