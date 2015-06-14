(function () {
	angular.module('app.contact')
		.controller('Contact', Contact);

		function Contact(dataservice) {
			var vm = this;
			vm.title = 'Contact Us';
			vm.contact = {};
			vm.response = false;
			vm.sendEmail = sendEmail;

			//privates funcs
			function sendEmail () {
				vm.loading = true;
				return dataservice.sendEmail(vm.contact)
					.success(function (response) {
						vm.response = response;
						vm.loading = false;
						vm.contact = {};

					}).error(function (reasons) {
						vm.response = reasons;
						vm.loading = false;
					});
			}
		}


})();
