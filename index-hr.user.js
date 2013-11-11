/**
 * This simple Chrome extension script removes politics, crime news, sport,
 * user comments and ads from www.index.hr news portal
 *
 * Installation: Drag and drop this script to Chrome extensions page.
 */
(function() {
	"use strict";

	Element.prototype.remove = function() {
		this.parentElement.removeChild(this);
	}
	NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
		for (var i = 0, len = this.length; i < len; i++) {
			if (this[i] && this[i].parentElement) {
				this[i].parentElement.removeChild(this[i]);
			}
		}
	}

	window.onload = function() {
		if (window.location.host === 'www.index.hr') {
			kill();
		}
	}

	function kill() {
		// homepage
		try {document.querySelector('.userpad').remove();} catch (e) {}
		try {document.querySelector('#slider1wrap').remove();} catch (e) {}
		try {document.querySelector('#ContentPlaceHolder1_portalbannerrotatorLeft3_divbannercontainer').remove();} catch (e) {}
		try {document.querySelector('[alt="index plus"]').remove();} catch (e) {}
		try {document.querySelector('.vijesti').parentNode.parentNode.remove();} catch (e) {}
		try {document.querySelector('.sport').parentNode.parentNode.remove();} catch (e) {}
		try {document.querySelector('.auto').parentNode.parentNode.remove();} catch (e) {}
		try {document.querySelector('.mame').parentNode.parentNode.remove();} catch (e) {}
		try {document.querySelector('.rouge').parentNode.parentNode.remove();} catch (e) {}
		try {document.querySelector('.bloger').parentNode.parentNode.remove();} catch (e) {}
		try {document.querySelector('[style="width:300px; float:right"]').remove();} catch (e) {}
		try {document.querySelector('[style="width:300px; float:right"]').remove();} catch (e) {}
		try {document.querySelector('.footer').remove();} catch (e) {}

		// article
		try {document.querySelector('#ContentPlaceHolder1_bannergooglevijesti_divbannercontainer').remove();} catch (e) {}
		try {document.querySelector('.list_comments').remove();} catch (e) {}
		try {document.querySelector('.columnright').remove();} catch (e) {}
	}

})();


