$(window).scroll({
		previousTop: 0
	},
	function () {
		var currentTop = $(window).scrollTop();
		if (currentTop < this.previousTop) {
			$("main").show();
			$("nav").show();
		} else {
			$("nav").hide();
		}
		this.previousTop = currentTop;
	});
