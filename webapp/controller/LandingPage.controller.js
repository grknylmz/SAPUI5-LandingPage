sap.ui.define([
	"sap/ui/model/odata/v4/ODataModel",
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(ODataModel, MessageToast, Controller) {
	"use strict";
	var oModel;
	return Controller.extend("ZLANDING.controller.LandingPage", {
		onInit: function() {
			///sap/opu/odata/sap/ZLANDING_SRV_SRV/LANDING_DETSet(Email='',IsPermitted='')
			oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZLANDING_SRV_SRV/", true);
			oModel.getServiceMetadata();
		},
		onPress: function(evt) {
			var oCheckbox = this.byId("checkbox");
			var oEmail = this.byId("input");
			var email = oEmail.getValue(),
				isPermitted = oCheckbox.getSelected();
			var mParameters = {
				async: true,
				//filters: oFilter,
				urlParameters: null,
				success: function(oData) {
					
				},
				error: function() {
					MessageToast.show('Güncellemede hata.');
				}
			};
			//
			var permit = isPermitted ? 1 : 0;
			var queryString = '/LANDING_DETSet(Email=\'' + email + '\',IsPermitted=\'' + permit + '\')';
			oModel.read(queryString, mParameters);
			MessageToast.show('Bilgileriniz başarı ile güncellendi.');
		}
	});
});