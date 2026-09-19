// 1. Cấu hình mốc thời gian đích: 00:00:00 ngày 26/06/2027
const targetDate = new Date("2027-06-26T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Lấy các phần tử hiển thị từ HTML
    const mainDayNumber = document.querySelector(".MAIN__DAY__NUMBER");
    const mainEstimateP = document.querySelector(".MAIN__ESTIMATE__P");
    const boxElements = document.querySelectorAll(".MAIN__BOX__ELEMENT__NUMBER");

    // Nếu đã qua mốc thời gian thi
    if (distance < 0) {
        if (mainDayNumber) mainDayNumber.textContent = "0";
        if (mainEstimateP) mainEstimateP.textContent = "Kỳ thi THPT Quốc Gia 2027 đã diễn ra!";
        boxElements.forEach(el => el.textContent = "00");
        return;
    }

    // 2. Tính toán thời gian (Ngày, Giờ, Phút, Giây)
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Định dạng thêm số 0 đằng trước nếu nhỏ hơn 10 (ví dụ: 09 giờ, 05 phút)
    const formatNumber = (num) => num < 10 ? `0${num}` : num;

    // 3. Cập nhật dữ liệu ra giao diện HTML
    
    // Cập nhật số ngày lớn ở giữa
    if (mainDayNumber) {
        mainDayNumber.textContent = days;
    }

    // Cập nhật văn bản mô tả bên dưới
    if (mainEstimateP) {
        mainEstimateP.innerHTML = `Còn khoảng <strong>${days}</strong> ngày nữa đến thi THPT Quốc Gia 2027 - mốc tính là ngày 26/06/2027. <br>Lịch chính thức chưa được công bố.`;
    }

    // Cập nhật 4 ô chi tiết trong .MAIN__BOX (Ngày - Giờ - Phút - Giây)
    if (boxElements.length >= 4) {
        boxElements[0].textContent = days;
        boxElements[1].textContent = formatNumber(hours);
        boxElements[2].textContent = formatNumber(minutes);
        boxElements[3].textContent = formatNumber(seconds);
    }
}

// 4. Chạy hàm ngay lập tức khi tải trang và thiết lập tự động cập nhật mỗi 1 giây (1000ms)
updateCountdown();
setInterval(updateCountdown, 1000);