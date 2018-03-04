var $$ = function(){}
$$.prototype = {
	$id:function(id){
		return document.getElementById(id)
	},
}

$$ = new $$();