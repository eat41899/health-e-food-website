/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/

// Simple jQuery event handler
$(document).ready(function () {
    "use strict";
    $('.js-section-features').waypoint(function(direction){
		if (direction == "down"){
			$('nav').addClass('sticky')
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
  		offset: '60px;'
	});
});