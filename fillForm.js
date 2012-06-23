myData = JSON.parse(localStorage["formdata"], function (key, val) {
	if(key != ''){
		if(document.getElementsByName(key)[0].type === 'text' || document.getElementsByName(key)[0].type.substring(0,6) === 'select'){
			document.getElementsByName(key)[0].value = val;
		}
		else if(document.getElementsByName(key)[0].type === 'radio'){
			var r = document.getElementsByName(key);
			for(i=0;i<r.length;i++){
				if(r[i].value === val){
					r[i].checked = true;
				}
			}
		}
	}
});