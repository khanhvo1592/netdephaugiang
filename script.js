document
    .querySelector(".submit-link")
    .addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

        const subject = encodeURIComponent("Dự thi Nét đẹp phụ nữ Hậu Giang");
        const body = encodeURIComponent(
            "[Tên của bạn]\n\n[Số điện thoại:]\n\nCơ quan:\nLưu ý: Đừng quên đính kèm ảnh dự thi"
        );

        const mailtoLink = `mailto:tts.hgtv@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });
