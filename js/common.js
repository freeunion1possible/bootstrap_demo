  addEventListener("load",
  function() {
  	setTimeout(hideURLbar, 0);
  },
  false);
  function hideURLbar() {
  	window.scrollTo(0, 1);
  }

	$(function() {
	$('#supported').text('Supported/allowed: ' + !!screenfull.enabled);

	if (!screenfull.enabled) {
		return false;
	}

	$('#toggle').click(function () {
		screenfull.toggle($('#container')[0]);
	});
});