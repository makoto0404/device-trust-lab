# Device Trust Lab｜硬體裝置信任實驗室

一個以原生 HTML、CSS、JavaScript 建立的靜態教學網站，介紹硬體裝置特徵、裝置基準線、異常訊號與 Zero Trust，並提供可互動的風險評分示範。

## 專案特色

- **可延伸的內容架構：** 新增頁面有固定範本、命名規則與驗收清單。
- **AI 開發規範：** `AGENTS.md` 定義 AI 修改與擴充專案時必須遵守的規則。
- **互動式 Demo：** Risk Lab 可調整裝置訊號並觀察示範分數變化。
- **GitHub Pages 友善：** 無後端、無建置流程，使用相對路徑即可部署。

## 快速瀏覽

直接以瀏覽器開啟 `index.html`，或使用 VS Code Live Server。

## 部署到 GitHub Pages

1. 建立一個 GitHub Repository，例如 `device-trust-lab`。
2. 將本專案所有檔案上傳到 Repository 根目錄。
3. 進入 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/ (root)`，按下 Save。
6. 等待 GitHub Pages 部署完成，網址通常為：  
   `https://<你的GitHub帳號>.github.io/device-trust-lab/`

若 Repository 名稱不同，網址中的 `device-trust-lab` 也要換成實際名稱。

## 專案結構

```text
device-trust-lab/
├── AGENTS.md
├── README.md
├── index.html
├── pages/
│   ├── architecture.html
│   ├── fingerprinting.html
│   ├── zero-trust.html
│   └── risk-lab.html
├── assets/
│   ├── css/style.css
│   └── js/app.js
└── templates/
    ├── page-template.html
    └── content-template.md
```

## 如何使用 AI 擴充

將 Repository 提供給 AI，要求它先閱讀 `AGENTS.md`，再依照「新增一個知識頁面的標準流程」建立頁面。AI 應沿用共用版型、相對路徑、內容規範，並同步更新首頁卡片與資訊架構表。

## 教學聲明

本網站為學習與概念展示用途。風險評分頁的公式與門檻皆為簡化示例，不構成正式資安判斷或部署建議。
