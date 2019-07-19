var videos;
var xhr = new XMLHttpRequest();//与后台服务器交换数据
xhr.open("GET", "data.json", true);
xhr.onreadystatechange = function() {// readyState每次变化就调用onreadystatechange
	if(xhr.readyState === 4) {//4 是 请求完成，响应就绪
		if(xhr.status === 200) {// 200 是 OK
			var r = xhr.responseText;//获得字符串类型的响应数据
			r = JSON.parse(r);
			videos = r.rows;
			var container = document.querySelector("#list");
			for(var i = 0; i < videos.length; i++) {
				var div = document.createElement("div");
				div.setAttribute("data-url", videos[i].url);
				div.innerHTML = videos[i].title;
				container.appendChild(div);
				div.onclick = clickme;
			}
		}
	}
}
xhr.send(null);

function clickme(e) {
	var e1 = e || event;
	var me = e1.target;
	var url = me.dataset.url;
	document.querySelector("video").src = url;
}