# Coursera: Interactivity with JavaScript - Interactive Photo Gallery

> **Khóa học:** Interactivity with JavaScript (University of Michigan / Coursera)  
> **Bài tập:** Week 2 Assignment - Interactive Photo Gallery (Thư viện ảnh tương tác)  
> **Tác giả:** [thntue](https://github.com/thntue)  
> **GitHub Repository:** [https://github.com/thntue/coursera-ex-JavaScript](https://github.com/thntue/coursera-ex-JavaScript)

---

## 📖 Giới thiệu Dự Án (Project Overview)

Dự án này là bài tập thực hành thuộc môn học **Interactivity with JavaScript** của Đại học Michigan trên Coursera. Mục tiêu là vận dụng ngôn ngữ JavaScript thuần (Vanilla JavaScript) kết hợp với HTML5 và CSS3 để thao tác với **DOM (Document Object Model)**:
- Lắng nghe các sự kiện chuột (`onmouseover` và `onmouseout`).
- Cập nhật linh hoạt nội dung văn bản (`innerHTML` / `textContent`) và hình nền (`style.backgroundImage`) của phần tử `#image`.
- Phục hồi lại trạng thái ban đầu của khung hiển thị khi chuột rời khỏi hình ảnh thu nhỏ.

---

## 📂 Cấu Trúc Thư Mục (Folder Structure)

```
coursera-ex-JavaScript/
├── index.html        # Tệp HTML chứa cấu trúc trang, thẻ div#image và các thẻ img.preview
├── css/
│   └── gallery.css   # Tệp định kiểu CSS cho khung hiển thị và các ảnh thumbnail
├── js/
│   └── gallery.js    # Tệp mã nguồn JavaScript chứa hàm upDate(previewPic) và unDo()
├── images/           # Tệp ảnh mẫu cục bộ phục vụ chạy offline
│   ├── bacon.jpg
│   ├── bacon2.JPG
│   └── bacon3.jpg
└── README.md         # Hướng dẫn chi tiết & Tiêu chí chấm điểm (Peer Review Rubric)
```

---

## 💻 Mã Nguồn Chi Tiết (Code Details)

### 1. Hàm `upDate(previewPic)`
Được kích hoạt khi người dùng di chuột lên trên một ảnh thu nhỏ (`onmouseover="upDate(this)"`):
1. Ghi log kiểm tra sự kiện kích hoạt bằng `console.log()`.
2. In ra thuộc tính `alt` và `src` của ảnh được tương tác (`previewPic.alt`, `previewPic.src`).
3. Truy xuất phần tử DOM có id là `image` qua `document.getElementById("image")`.
4. Cập nhật văn bản của khung `#image` thành nội dung thuộc tính `alt` của ảnh.
5. Cập nhật hình nền của `#image` thành URL ảnh (`previewPic.src`) bằng cú pháp `url('...')`.

```javascript
function upDate(previewPic) {
    console.log("--> upDate event triggered successfully!");
    console.log("previewPic alt text: " + previewPic.alt);
    console.log("previewPic source URL: " + previewPic.src);

    var imageElement = document.getElementById("image");
    imageElement.innerHTML = previewPic.alt;
    imageElement.style.backgroundImage = "url('" + previewPic.src + "')";
}
```

### 2. Hàm `unDo()`
Được kích hoạt khi người dùng di chuột rời khỏi ảnh thu nhỏ (`onmouseout="unDo()"`):
1. Ghi log kiểm tra sự kiện rời chuột.
2. Truy xuất phần tử DOM có id là `image`.
3. Đặt lại thuộc tính hình nền về giá trị ban đầu: `url('')`.
4. Đặt lại nội dung văn bản về thông điệp mặc định: `"Hover over an image below to display here."`.

```javascript
function unDo() {
    console.log("--> unDo event triggered: Resetting display to original state.");

    var imageElement = document.getElementById("image");
    imageElement.style.backgroundImage = "url('')";
    imageElement.innerHTML = "Hover over an image below to display here.";
}
```

---

## 📋 Tiêu Chí Đánh Giá Ngang Hàng (Peer Review Rubric)

| Tiêu chí (Rubric Item) | Yêu cầu | Trạng thái đạt được |
| :--- | :--- | :---: |
| **Sự kiện `onmouseover`** | Gọi hàm `upDate(this)` khi rê chuột lên ảnh | ✅ Đầy đủ |
| **Sự kiện `onmouseout`** | Gọi hàm `unDo()` khi chuột rời ảnh | ✅ Đầy đủ |
| **In thông tin Debug** | Sử dụng `console.log()` kiểm tra sự kiện, in `alt` và `src` | ✅ Đầy đủ |
| **Cập nhật Văn bản DOM** | Thay đổi nội dung của `#image` thành `previewPic.alt` | ✅ Đầy đủ |
| **Cập nhật Hình nền DOM** | Gán `previewPic.src` vào `backgroundImage` của `#image` | ✅ Đầy đủ |
| **Khôi phục Trạng thái** | Xóa hình nền (`url('')`) và trả về câu văn bản gốc | ✅ Đầy đủ |

---

## 🚀 Hướng Dẫn Sử Dụng (How to Run / Share)

### 1. Chạy trên máy tính cá nhân (Local)
- Mở trực tiếp tệp [index.html](index.html) bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Safari).
- Nhấn phím `F12` hoặc chuột phải $\rightarrow$ chọn **Inspect** $\rightarrow$ chọn thẻ **Console** để quan sát các dòng thông điệp ghi log mỗi khi di chuột.

### 2. Sử dụng trên CodePen
- Tạo một Pen mới trên [CodePen.io](https://codepen.io/).
- Dán nội dung của `index.html` vào khung HTML (phần bên trong thẻ `<body>`).
- Dán nội dung của `css/gallery.css` vào khung CSS.
- Dán nội dung của `js/gallery.js` vào khung JS.
- Lưu lại và chia sẻ đường dẫn Pen để nộp bài hoặc đánh giá ngang hàng.