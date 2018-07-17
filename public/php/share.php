<?php global $o; ?>
<div class="_share">
	<div class="fb_like" style="float:left; width:90px; overflow:hidden; margin-top: 10px; margin-left: 0px;">
		<iframe src="//www.facebook.com/plugins/like.php?href=<?php print $o ['url'];?>&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=false&amp;height=21&amp;appId=366573646822116" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:21px;" allowTransparency="true"></iframe>
	</div>
	<div class="tweet_this" style="float:left; margin-top: 10px;">
		<a href="https://twitter.com/share" class="twitter-share-button" data-via="listingslab">@listingslab</a>
		<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
	</div>
	<div class="google_share" style="float:left; width:400px; height:35px; overflow:hidden; margin-top: 10px;">
		<div class="g-plus" data-action="share" data-href="<?php print $o ['url'];?>"></div>
		<script type="text/javascript">
		  (function() {
		    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		    po.src = 'https://apis.google.com/js/platform.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		  })();
		</script>
	</div>
</div>