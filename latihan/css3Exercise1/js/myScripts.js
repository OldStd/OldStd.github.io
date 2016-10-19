		function myFunction(num){
			var imgx = document.getElementById("iframe_a");
			var imgsrc = "images\\p" + num + ".jpg";
			imgx.src = imgsrc;

			var ifmb = document.getElementById("iframe_b");
			var ifrmsrc = "usejs.html";
			ifmb.src = ifrmsrc;
		}