var values = {};
$('input, select, textarea').each(function() { 
	if(this.value != '-X-' && this.value != '' && this.value != ' ' && this.type != 'hidden'){
		values[this.name]=this.value; 
	}
}); 
localStorage["formdata"] = JSON.stringify(values);