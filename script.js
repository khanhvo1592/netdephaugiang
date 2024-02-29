document
    .querySelector(".submit-link")
    .addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        const subject = encodeURIComponent("Dự thi Nét đẹp phụ nữ Hậu Giang");
        const mailtoLink = `mailto:tts.hgtv@gmail.com?subject=${subject}`;
        // Thiết lập href cho liên kết của bạn
        window.location.href = mailtoLink;
        // Hiển thị thông báo (nếu muốn)
        // alert("Cảm ơn bạn đã tham gia chương trình Nét đẹp phụ nữ Hậu Giang!");
    });
