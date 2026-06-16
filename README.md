# g0v Summit 2026

## 技術

- Astro
- TailwindCSS
- jQuery

## 開發

```
  npm i
  npm run dev
```

GitHub action 根據 main branch 更新，作為 staging site

<https://g0v.github.io/summit2026/>

## 議程

議程採用 OPass 格式的 [Google Sheet](https://docs.google.com/spreadsheets/d/1jD0RtB_J4XxcwbgABtHJWo6XECffTLP6_bgzrcy_rqo)。更新前，請先在 `.env` 設定以下欄位：

```
# 以下以 2026 為範例
SPREADSHEET_ID="1jD0RtB_J4XxcwbgABtHJWo6XECffTLP6_bgzrcy_rqo"
DEFAULT_AVATAR="https://summit.g0v.tw/2026/img/avatars/default.jpg"
AVATAR_BASE_URL="https://summit.g0v.tw/2026/img/avatars/"
```

接著執行：

```
npm run fetch-schedule
```

## 講者頭貼

放在 `public/img/avatars` 底下。

上傳前請先檢查檔案副檔名是否正規化（小寫），以 ImageMagick 縮放到短邊 960 像素，並以 Zopfli、JPEGOptim 等軟體壓縮過（壓縮品質 90%）：

```bash
for i in *.jpg; do
    magick $i -resize 960x960^ -quality 90 public/img/avatars/$i
done
```

## 工人資訊

資料來自 [上網頁名單](https://docs.google.com/spreadsheets/d/1ZTCaRrPAvbkMjQRt4xzm106ncgNQ7uc-Se3lX1pMJ8Y)

工人頭貼放在 `public/img/staff` 底下，須轉換成 webp 格式並以工人的 id 命名，例如 `public/img/staff/d48f650c9b96e0b8.webp`

接著執行：

```
npm run convert-staff
```

## 翻譯

網站語系檔放在 `src/i18n/messages/` 底下，格式為 JSON 檔案。

可以使用 `i18n-tool` 方便導出翻譯協作：

```bash
npm run i18n src/i18n/messages/zh-tw.json # 轉換成純文字格式
npm run i18n src/i18n/messages/hak-tw.txt # 轉換成 JSON 格式
```

## 貢獻

本專案由 g0v summit 2026 宣傳組—網站小組負責維護，歡迎透過 [issue](https://github.com/g0v/summit2026/issues) 提出問題與建議，也歡迎提出 PR

## 部署

```
# macOS and Linux only
./deploy

# Cross-platform
npm run deploy
```

會自動將 dist 下的檔案推送到 production branch，並透過 repository dispatch 觸發 [summit repo](https://github.com/g0v/summit.g0v.tw) 更新 submodules
目前是使用網站組小組長 SeanGau 的 Token
