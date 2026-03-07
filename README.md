# JPD123 FE
### Thông tin cơ bản
- Lấy ý tưởng từ: [Tranvanthuan1805/JPD113_FE](https://github.com/Tranvanthuan1805/JPD113_FE)
- Vibe code bằng Claude Sonnet 4.6
### Run thí shit
- Cài Dependency 
    ```
    npm install -g pnpm && pnpm install
    ```
- Chạy dev server
    ```
    pnpm dev
    ```
- Build website để deploy
    ```
    pnpm build
    ```
### Project file map (t quá lười để sửa lại nên để ai tự viết :v)
```
jpd123-fe/
├── 📂 public/                 # Chứa các file tĩnh (không bị Vite nén)
│   ├── background.jpg         # Ảnh nền của toàn bộ website
│   └── favicon.ico            # Icon hiển thị trên tab trình duyệt
│
├── 📂 src/                    # THƯ MỤC CHỨA MÃ NGUỒN CHÍNH (CORE)
│   │
│   ├── 📂 components/         # Chứa các UI Component dùng chung
│   │   └── Layout.tsx         # Khung nền chuẩn cho mọi trang: chứa nút "Quay lại", hiệu ứng kính mờ (Glassmorphism) và Animation chuyển trang (Framer Motion).
│   │
│   ├── 📂 data/               # Chứa dữ liệu tĩnh đóng vai trò như Database (Mock DB)
│   │   ├── index.ts           # Trạm trung chuyển: Gộp tất cả các bài học và cung cấp hàm tìm kiếm (getLessonById).
│   │   ├── lesson4.ts         # Dữ liệu Từ vựng Bài 4 (chia theo category).
│   │   ├── lesson4kanji.ts    # Dữ liệu Kanji Bài 4 (chia nhóm Trọng tâm & Bổ sung).
│   │   └── ... (lesson5, 6, 7)# Tương tự cho các bài khác.
│   │
│   ├── 📂 pages/              # Chứa các Trang giao diện (gắn với các Route)
│   │   ├── Home.tsx           # Trang chủ: Bảng điều khiển chứa các thẻ Bài học, hiển thị số lượng từ vựng và các nút chức năng.
│   │   ├── VocabularyPage.tsx # Trang Danh sách Từ vựng: Hiển thị list từ vựng theo từng chủ đề.
│   │   ├── KanjiPage.tsx      # Trang Danh sách Kanji: Hiển thị dạng Bảng (Table) dùng thuật toán gộp dòng (rowSpan), tô màu phân biệt chữ Hán trọng tâm.
│   │   ├── FlashcardPage.tsx  # Trang Flashcard Từ vựng: Thẻ học 3D lật mặt trước/sau.
│   │   ├── KanjiFlashcardPage.tsx # Trang Flashcard Kanji: Thẻ học 3D chuyên biệt cho chữ Hán.
│   │   ├── QuizPage.tsx       # Trang Test Từ vựng: Game trắc nghiệm yêu cầu gõ phím (Typing), tự động chấm lỗi, đếm câu sai và hỗ trợ ấn Enter để qua bài.
│   │   ├── KanjiQuizPage.tsx  # Trang Test Kanji: Game trắc nghiệm gõ Âm Hán Việt / Hiragana / Nghĩa Tiếng Việt.
│   │   └── NotFound.tsx       # Trang 404: Hiển thị giao diện báo lỗi khi người dùng gõ sai đường dẫn URL.
│   │
│   ├── 📂 types/              # Chứa định nghĩa kiểu dữ liệu (TypeScript)
│   │   └── lesson.ts          # Định nghĩa cấu trúc mảng, biến (VocabItem, KanjiItem...) giúp code không bị lỗi type.
│   │
│   ├── App.tsx                # Quản lý luồng (Routing): Định nghĩa các đường dẫn URL (/lesson/:id/...) và bọc hiệu ứng AnimatePresence.
│   ├── index.css              # File CSS tổng: Chứa TailwindCSS, ảnh nền body và code CSS thuần để vẽ thẻ lật 3D.
│   └── main.tsx               # Điểm vào (Entry point) của React: Bơm ứng dụng vào thẻ <div id="root"> của file HTML.
│
├── ⚙️ CÁC FILE CẤU HÌNH & TOOL HỖ TRỢ
├── yaml_to_ts.py              # Script Python: Tự động đọc file YAML và sinh ra file code TypeScript chuẩn cho thư mục data/.
├── index.html                 # Khung xương HTML gốc của ứng dụng (chứa font chữ Noto Sans JP).
├── package.json               # Quản lý các thư viện đã cài (React, Tailwind, Lucide, Framer Motion...) & các lệnh chạy (npm run dev).
├── tailwind.config.js         # (Hoặc cấu hình tích hợp sẵn) Quản lý class của Tailwind v4.
├── tsconfig.json              # Cấu hình luật kiểm tra lỗi khắt khe của TypeScript.
├── vite.config.ts             # Cấu hình công cụ đóng gói Vite (tốc độ cao).
└── wrangler.jsonc             # Cấu hình triển khai (Deploy) lên server của Cloudflare Pages.
```