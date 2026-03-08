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
### Project file map
```text
jpd123-fe/
├── public/                         # Tai nguyen tinh duoc serve truc tiep
│   ├── cloudflare.svg              # Icon mac dinh cua Cloudflare
│   ├── og-cover.png                # Anh preview khi share link (Open Graph)
│   └── vite.svg                    # Icon mau cua Vite
│
├── src/                            # Ma nguon chinh cua ung dung React
│   ├── components/
│   │   └── Layout.tsx              # Layout dung chung cho cac trang
│   ├── data/                       # Du lieu tu vung/Kanji theo tung bai
│   │   ├── index.ts                # Export du lieu + helper getLessonById
│   │   ├── lesson4.ts
│   │   ├── lesson4kanji.ts
│   │   ├── lesson5.ts
│   │   ├── lesson5kanji.ts
│   │   ├── lesson6.ts
│   │   ├── lesson6kanji.ts
│   │   ├── lesson7.ts
│   │   └── lesson7kanji.ts
│   ├── pages/                      # Cac man hinh route
│   │   ├── Home.tsx
│   │   ├── VocabularyPage.tsx
│   │   ├── KanjiPage.tsx
│   │   ├── FlashcardPage.tsx
│   │   ├── KanjiFlashcardPage.tsx
│   │   ├── QuizPage.tsx
│   │   ├── KanjiQuizPage.tsx
│   │   └── NotFound.tsx
│   ├── types/
│   │   └── lesson.ts               # Dinh nghia type cho du lieu bai hoc
│   ├── App.tsx                     # Cau hinh router + luong dieu huong
│   ├── index.css                   # CSS global
│   └── main.tsx                    # Entry point React
│
├── .devcontainer/
│   └── devcontainer.json           # Cau hinh moi truong dev container
├── index.html                      # HTML shell, meta, mount point #root
├── eslint.config.js                # Cau hinh ESLint
├── package.json                    # Dependencies va scripts
├── pnpm-lock.yaml                  # Lockfile cua pnpm
├── tsconfig.json                   # Cau hinh TypeScript (base)
├── tsconfig.app.json               # Cau hinh TypeScript cho app
├── vite.config.ts                  # Cau hinh Vite
├── wrangler.jsonc                  # Cau hinh deploy Cloudflare
└── LICENSE                         # License cua du an
```