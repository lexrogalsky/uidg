function parse_tweet(text) {
	var parsed = text.replace(/(http|https)(:\/\/)([^ )]+)/ig, '<a href="$1$2$3">$1$2$3</a>');
	parsed = parsed.replace(/@([^ ]+)/gi,'<a href="http://twitter.com/$1">@$1</a>');
	parsed = parsed.replace(/#([^ ]+)/gi,'<a href="http://twitter.com/search?q=%23$1">#$1</a>');
	return parsed;
}


$(document).ready(function(){
	$('.social-links .span2, .social-links .span4, .news figure').each(function(i, article){
		if($(article).attr('data-target')){
			$(article).click(function(e){
				window.open($(article).attr('data-target'));
			});
		}
	});
});