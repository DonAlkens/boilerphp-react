"use strict";

const ValidateSubmit = (agree = false, signup = false) => {
	var validation = true;
	$('[validationresult="true"]').remove();

	$('[validatefield="true"]').each(function () {
		$(this).css('border-color', '#dcdcdc');
		if ($(this).val() == "") {
			var message = $(this).attr("validationmessage");
			if (message != "" && message != null) {
				FieldError($(this), message);
			}
			validation = false;
		}

		if (signup == true) {

			if ($(this).attr("type") == "email") {
				var val = $(this).val();
				var regex = /[a-zA-Z0-9!@._-]+$/g;
				if (!val.match(regex)) {
					FieldError($(this), "Kindly enter a valid email address!");
					validation = false;
				}
			}

			if ($(this).attr("type") == "password") {
				var val = $(this).val();
				var regex = /[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
				if (!val.match(regex)) {
					FieldError(
						$(this),
						"Password must have at least one uppercase, lowercase and special char e.g !@#%=*($-?."
					);
					validation = false;
				}
			}

		}

	});

	if (agree) {
		if ($("#agree").prop("checked") != true) {
			$('[for="agree-result"]').after(
				'<small class="text-danger" validationresult="true"><br>kindly read and agree to continue.</small>'
			);

			validation = false;
		}
	}

	return validation;
};

const FieldError = (field, message) => {
	if (field.attr("validationoutput")) {
		var target = field.attr("validationoutput");
		field.css("border-color", "red");
		$(target).html(
			'<small class="text-danger" validationresult="true">' +
			message +
			"</small>"
		);
	} else {
		field.siblings('[validationresult="true"]').remove();
		field
			.css("border-color", "red")
			.after(
				'<small class="text-danger" validationresult="true">' +
				message +
				"</small>"
			);
	}
};

export function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

export function deleteCookie(name) {
	if (getCookie(name)) {
		$.ajax({
			url: "/timeout",
			method: "POST",
			data: { name },
			success: function (response) { },
		});
	}
}

export function setCookie(cname, cvalue, exdays, domain) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie =
		cname + "=" + cvalue + ";" + expires + ";path=/;domain=" + domain;
}

export function Timeout() {
	var idleTime = 0;

	// Increment the idle time counter every minute.
	if (localStorage.getItem("_session")) {
		setInterval(timerIncrement, 60000); // 1 minute
	} else {
		localStorage.setItem("_session", 0);
	}

	// Zero the idle timer on mouse movement.
	$(document).on("mousemove", function (e) {
		localStorage.setItem("_session", 0);
	});
	$(document).on("keypress", function (e) {
		localStorage.setItem("_session", 0);
	});

	function timerIncrement() {
		idleTime = Number(localStorage.getItem("_session")) + 1;
		localStorage.setItem("_session", idleTime);

		if (idleTime > 30) {
			// 15 minutes
			localStorage.clear();
			deleteCookie("_apuid");
			window.location.reload();
		}
	}
}

export function AmountField(field, data, callback = null) {
	var value = $(field).val();
	var c = data;

	var regex = /[a-zA-Z!@#\$%\^\&*\)\(+=._-]+$/g;
	var numbers = /^[0-9]+$/g;
	if (c.match(regex)) {
		$(field).val(value.replace(regex, ""));
	} else if (c.match(numbers)) {
		var p = 10 * Number(value);
		$(field).val(parseFloat(p).toFixed(2));
	}

	if (callback != null) {
		callback(field);
	}
}

export function Validator(field) {
	$(field.attr("validationtarget")).html("");
	var regex = new RegExp(",", "g");
	var amountFrom = field.val().replace(regex, "");

	try {
		amountFrom = Number(amountFrom);
		// if (amountFrom > 0) {
		formatCurrency(amountFrom, "ng-NG", field);
		return amountFrom;
		// }
		// else {
		//     $(field.attr('validation-target')).html(field.attr("validation-message"));
		// }
	} catch (error) {
		$(field.attr("validation-target")).html(field.attr("validation-message"));
	}

	$(field.attr("validation-target")).html("");
	var regex = new RegExp(",", "g");
	var amountFrom = field.val().replace(regex, "");
	console.log(amountFrom);

	try {
		amountFrom = Number(amountFrom);
		// if (amountFrom > 0) {
		formatCurrency(amountFrom, "ng-NG", field);
		return amountFrom;
		// }
		// else {
		//     $(field.attr('validation-target')).html(field.attr("validation-message"));
		// }
	} catch (error) {
		console.log(error);
		$(field.attr("validation-target")).html(field.attr("validation-message"));
	}

	return null;
}

export function formatCurrency(amount, format = "ng-NG", field = null) {
	// var $nF = new Intl.NumberFormat(format, {  }).format(amount);
	// var $nF = parseFloat((Math.round(amount*100)/100)).toFixed(2).toLocaleString();
	// if($nF.indexOf(".") == -1) {
	//     $nF = $nF + ".00";
	// }
	// if(field !== null) {
	//     field.val($nF);
	// }
	// return $nF;
}

export function ClearAppMessage(output) {
	$(output).html("");
}

export function AppMessage(status, message, output) {
	if (status == "success") {
		var style = "alert-success";
	} else if (status == "error") {
		var style = "alert-danger";
	} else if (status == "info") {
		var style = "alert-info";
	} else if (status == "warning") {
		var style = "alert-warning";
	}

	var content =
		`<div class="appMessage alert d-flex justify-content-between ` +
		style +
		` fade show mb-2" role="alert">
            <div class="alert-text">` +
		message +
		`</div>
            <div class="alert-close">
                <span 
                  class="close appMessageClose" 
                  data-dismiss="alert" 
                  style="cursor:pointer;" 
                  aria-label="Close">✕</span>
            </div>
        </div>`;

	$(output).html(content);

	$(".appMessageClose").on("click", function () {
		$(".appMessage").remove();
	});

	setTimeout(function () {
		$(".appMessage").fadeOut();
	}, 6000);
}

export function isLoggedIn() {

	var token = localStorage.getItem("token");
	var details = localStorage.getItem("user");

	if (details != null && token != null) {
		return true;
	}

	return false;
}

export function toggleLoader(mode, target = ".hasLoader") {
	if (mode == true) {
		$(target).children("b").addClass("hide");
		$(target).addClass('disabled').attr('disabled', 'disabled');
		$(target).children("div").removeClass("hide");
	} else if (mode == false) {
		$(target).children("div").addClass("hide");
		$(target).removeClass('disabled').removeAttr('disabled');
		$(target).children("b").removeClass("hide");
	}
}

export const Selected = function (value, option) {
	if (value == option) {
		return "selected";
	} else {
		return "";
	}
};

export const SelectField = function (lists = [], selected = 0, options) {
	var field =
		`
			<div class="form-group">
                <label for="country"><b>Select ` +
		(options?.label ? options?.label : options?.name) +
		` </b></label>
                <select name="` +
		options?.name +
		`" class="form-control" id="` +
		(options?.id ? options?.id : options?.name) +
		`"`;
	if (options?.validation == true) {
		field +=
			` validatefield="true" validationmessage="Kindly select your ` +
			(options?.label ? options?.label : options?.name) +
			`*">`;
	} else {
		field += `>`;
	}

	field +=
		`<option disabled>**Select ` +
		(options?.label ? options?.id : options?.name) +
		`**</option>`;

	lists.forEach((list) => {
		field +=
			`<option value=${list.id} ` +
			Selected(selected, list.id) +
			`>${list.name}</option>`;
	});

	field += `</select>
            </div>`;

	return field;
};

export const InputField = function (options) {
	var field =
		`
			<div class="form-group mt-2">
                <label for="country"><b>Enter ` +
		(options?.label ? options.label : options?.name) +
		` </b></label>
                <input type="` +
		(options?.type ? options?.type : "text") +
		`" name="` +
		options?.name +
		`" class="form-control" id="` +
		(options?.id ? options?.id : options?.name) +
		`" value="` +
		(options?.value ? options.value : "") +
		`"`;

	if (options?.validation == true) {
		field +=
			` validatefield="true" validationmessage="Kindly enter your ` +
			(options?.label ? options?.label : options?.name) +
			`*" />`;
	} else {
		field += ` />`;
	}

	field += `
            </div>`;

	return field;
};

export const selectedIndicator = (id) => {
	$(".option-card").removeClass("selected");

	if ($(id).prop("checked") == true) {
		$(id).parent(".option-card").addClass("selected");
		$(id).parent(".form-group").parent(".option-card").addClass("selected");

		if ($(id).attr("id") == "diffent_address") {
			$("[step-toggle]").each(function () {
				message = $(id).attr("step-toggle");
				$(id).attr("step-field-required", "true");
				$(id).attr("step-validation-message", message);
			});

			$(".address-form").slideDown();
		} else {
			$("[step-toggle]").each(function () {
				$(id).removeAttr("step-field-required");
				$(id).removeAttr("step-validation-message");
			});

			$(".address-form").slideUp();
		}
	}
};

export const messageHandler = (state, message) => {

	$(".sf-form-response").fadeIn();
	if (state == 'error') {
		$("#sf-resp-Message").attr('class', 'error').html(message);
	} else if (state == 'success') {
		$("#sf-resp-Message").attr('class', 'success').html(message);
	}

	setTimeout(() => {
		$(".sf-form-response").fadeOut();
	}, 8000);
};

export const activateAswerTypeAction = () => {

	$(".sf-questions-answer-type").on('change', function () {

		var target = $(this).parent('div')
			.parent('div')
			.siblings('.options')

		if ($(this).val() == '5' || $(this).val() == '4') {
			target.show();
		} else {
			target.hide();
		}
	});

};

export const removeVariation = () => {

	$(".rmVar").on("click", function () {
		var skeleton = $(this)
			.parent(".row")
			.parent(".col-md-12")
			.parent(".variation");
		skeleton.remove();
	});
};

export default ValidateSubmit;
