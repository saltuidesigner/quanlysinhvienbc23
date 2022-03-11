let nvArr = [];
let kiemTra = new Validate();
layDataTuLocalStorage();

renderNhanVien();

function themNhanVien() {
	let nhanVien = new NhanVien();

	nhanVien.maNhanVien = document.querySelector("#maNhanVien").value;
	nhanVien.tenNhanVien = document.querySelector("#tenNhanVien").value;
	nhanVien.chucVu = document.querySelector("#chucVu").value;
	nhanVien.luongCoBan = +document.querySelector("#luongCoBan").value;
	nhanVien.soGioLam = +document.querySelector("#soGioLam").value;

	//tongLuong

	nhanVien.tongLuong = nhanVien.luongCoBan*nhanVien.soGioLam

	//xep loai nhan vien dua vao soGioLam

	if (nhanVien.soGioLam >= 100) {
		nhanVien.xepLoai = "Nhan vien xuat sac";
	} else {
		nhanVien.xepLoai = "Nhan vien gioi";
	}

	//VALIDATION

	let valid = true;
	valid =
		valid &
		kiemTra.kiemTraKyTu(nhanVien.maNhanVien, ".maNhanVien-error-msg") &
		kiemTra.kiemTraTatCaLaKyTu(nhanVien.tenNhanVien, ".tenNhanVien-error-msg") &
		kiemTra.kiemTraLuongCoBan(nhanVien.luongCoBan, ".luongCoBan-error-msg") &
		kiemTra.kiemTraSoGioLam(nhanVien.soGioLam, ".soGioLam-error-msg");
	if (!valid) {
		return;
	}
	nvArr.push(nhanVien);
	renderNhanVien(nvArr);
	luuLocalStorage(nvArr);
}

function renderNhanVien() {
	let html = "";
	console.log(nvArr);
	for (var i = 0; i < nvArr.length; i++) {
		html += `
        <tr>
            <td class='maNhanVien'>${nvArr[i].maNhanVien}</td>
            <td>${nvArr[i].tenNhanVien}</td>
            <td>${nvArr[i].chucVu}</td>
            <td>${nvArr[i].luongCoBan}</td>
            <td>${nvArr[i].tongLuong}</td>
            <td>${nvArr[i].soGioLam}</td>
            <td>${nvArr[i].xepLoai}</td>
            <td>
            <button class='btn btn-danger'  onclick="xoaNhanVien('${nvArr[i].maNhanVien}')">Xoa</button>
            </td>
        </tr>
        `;

		document.querySelector(".table-body").innerHTML = html;
	}
}

function luuLocalStorage(nhanVienArr) {
	localStorage.setItem("nvArr", JSON.stringify(nhanVienArr));
}

function layDataTuLocalStorage() {
	nvArr = JSON.parse(localStorage.getItem("nvArr"))
		? JSON.parse(localStorage.getItem("nvArr"))
		: [];
}

function xoaNhanVien(maNhanVienClick) {
	for (var i = 0; i < nvArr.length; i++) {
		var nv = nvArr[i];
		if (nv.maNhanVien === maNhanVienClick) {
			nvArr.splice(i, 1);
		}
	}
	console.log(nvArr);
	renderNhanVien(nvArr);
	luuLocalStorage(nvArr);	
}
document
	.querySelector(".btn-themNhanVien")
	.addEventListener("click", themNhanVien);
