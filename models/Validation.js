function Validate() {
	this.kiemTraKyTu = function (value, errorSelector) {
		if (value.length > 6) {
			document.querySelector(errorSelector).innerHTML =
				"Ma nhan vien toi da chi duoc 6 ki tu";

			return false;
		} else {
			document.querySelector(errorSelector).innerHTML = "";
			return true;
		}
	};
	this.kiemTraTatCaLaKyTu = function (value, errorSelector) {
		let regex = /^[a-zA-Z ]*$/;
		if (regex.test(value)) {
			document.querySelector(errorSelector).innerHTML = "";
			return true;
		} else {
			document.querySelector(errorSelector).innerHTML =
				"Ten nhan vien phai la ky tu";

			return false;
		}
	};
	this.kiemTraLuongCoBan = function (value, errorSelector) {
		if (value >= 1000000 && value <= 20000000) {
			document.querySelector(errorSelector).innerHTML = "";
			return true;
		} else {
			document.querySelector(errorSelector).innerHTML =
				"Luong co ban phai tu 1 trieu toi 20 trieu";

			return false;
		}
	};
	this.kiemTraSoGioLam = function (value, errorSelector) {
		if (value >= 50 && value <= 150) {
			document.querySelector(errorSelector).innerHTML = "";
			return true;
		} else {
			document.querySelector(errorSelector).innerHTML =
				"So gio lam phai tu 50 toi 150 gio trong mot thang";

			return false;
		}
	};
}
