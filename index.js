sap.ui.define([
	"sap/ui/ ìcore/mvc/XMLView"
], function (XMLView) {
		"use strict";
		XMLView.create({
			viewName: "sap.ui.demo.walkthrough.view.App"
		}).then(function (oView) {
			oView.placeAt("content");
		});
});