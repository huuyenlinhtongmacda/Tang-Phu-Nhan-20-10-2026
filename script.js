const Mat_ma_chinh_xac = "2010";

let mat_ma = "";
let bat_dau_mua_hoa = false;
let hen_gio = null;

const man_hinh_nhap_mat_ma = document.getElementById("man_hinh_nhap_mat_ma");
const man_hinh_trai_tim = document.getElementById("man_hinh_trai_tim");

const noi_dung_mat_ma = document.getElementById("noi_dung_mat_ma");
const goi_y = document.getElementById("goi_y");

const trai_tim = document.getElementById("trai_tim");
const thong_bao_2 = document.getElementById("thong_bao_2");
const loi_chuc = document.getElementById("loi_chuc");

const nhac_bai_1 = document.getElementById("nhac_bai_1");
const nhac_bai_2 = document.getElementById("nhac_bai_2");

//PHÂN NHẬP MẬT MÃ

// cập nhật mat ma
function cap_nhat_mat_ma() {
    noi_dung_mat_ma.textContent = "●".repeat(mat_ma.length);
}

// Nhap so
document.querySelectorAll("[data-number]").forEach((button) => {
    button.addEventListener("click", () => {
        if (mat_ma.length >= 4) {    
            return;
        }

        mat_ma += button.dataset.number;

        if (mat_ma.length === 1) {
            nhac_bai_1.volume = 0.5;

            nhac_bai_1.play().catch((loi) => {
                console.log("Không thể phát bài nhạc đầu tiên:", loi);
            });
        }

        cap_nhat_mat_ma();

        goi_y.textContent = "hì hì , cố lên Phu Nhân 💕";

        if (mat_ma.length === 4) {
            check_mat_ma();
        }
    });
});

// Xóa số

document.getElementById("nut_xoa").addEventListener("click", () => {
    mat_ma = "";
    cap_nhat_mat_ma();
    goi_y.textContent = "Thử lại đi Phu Nhân !";
});

// kiem tra mat ma

function check_mat_ma() {
    if (mat_ma === Mat_ma_chinh_xac) {
        goi_y.textContent = "Chúc mừng Phu Nhân 💗 ";
        setTimeout(() => {
            man_hinh_nhap_mat_ma.style.display = "none";
            man_hinh_trai_tim.classList.add("hien_thi");
        },1000);
    }
    else {
        goi_y.textContent = "Sai rồi Phu Nhân !";
        setTimeout(() => {
        mat_ma = "";
        cap_nhat_mat_ma();
    },700);
    }
}

// Nut nhâp
document.getElementById("nut_gui").addEventListener("click", () => {
    if (mat_ma.length < 4) {
        goi_y.textContent = "Nhập đủ 4 số đi Phu Nhân 💌";
        return;
    }
    check_mat_ma();
});


// PHÂN HIỆN TRÁI TIM

function hoa_roi(){
    const hoa_roi = document.createElement("div");
    hoa_roi.className = "hoa_roi";

    const danh_sach_hoa = [
        "🌹",
        "🌸",
        "🌷",
        "💗",
        "💕",
        "💖",
        "🌺",
        "❤️",
        "🌼",
        "💮"
            ];
    
    hoa_roi.textContent = danh_sach_hoa[Math.floor(Math.random() * danh_sach_hoa.length)];
    
    const kich_thuoc = 15 + Math.random() * 25;
    const thoi_gian_roi = 4 + Math.random() * 5;
    const do_lech = (Math.random() - 0.5) * 250;
    const do_xoay = Math.random() * 720 - 360;

    hoa_roi.style.left = Math.random() * 100 + "vw";
    hoa_roi.style.fontSize = kich_thuoc + "px";

    hoa_roi.style.setProperty("--do_lech", do_lech + "px");
    hoa_roi.style.setProperty("--do_xoay", do_xoay + "deg");

    hoa_roi.style.animationDuration = thoi_gian_roi + "s";

    document.body.appendChild(hoa_roi);

    setTimeout(() => {
        hoa_roi.remove();
    }, thoi_gian_roi * 1000);
    
}

// Bắt đầu mưa hoa

trai_tim.addEventListener("click", () => {
    if (!bat_dau_mua_hoa) {
        bat_dau_mua_hoa = true;

        nhac_bai_1.pause();
        nhac_bai_1.currentTime = 0;

        nhac_bai_2.volume = 0.5;
        nhac_bai_2.play().catch((loi) => {
            console.log("Không thể phát bài nhạc thứ hai:", loi);
        });

        loi_chuc.classList.add("hien_thi");

        document.querySelector(".Ten_Phu_Nhân").classList.add("hien_thi");
        document.querySelector(".Ten_Ta").classList.add("hien_thi");

        thong_bao_2.textContent = "bình bình, an an, vui vui, vẻ vẻ, không cần quá nổi bật, chỉ cần sống tốt cho bản thân.";
        trai_tim.textContent ="💖";
    

        // Bắt đầu mưa hoa
        for (let i = 0; i < 25; i++) {
            setTimeout(hoa_roi, i * 100);
        }

        hen_gio = setInterval(() => {
            hoa_roi();

            if(Math.random() > 0.5) {
                hoa_roi();
            }
        }, 180);
    }
    else {
        for (let i = 0; i < 25; i++) {
            setTimeout(hoa_roi, i * 70);
        }
    }
});

