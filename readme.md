# g0v Summit 2026

直接 fork [summit2024](https://github.com/g0v/summit2024) 來改的
- 使用 gulp + pug + tailwindcss
- 使用 baseurl 來解決 /2026 & /summit2026 的相對路徑問題

## how to dev
```
  npm i
  npm run pre
  npm start
```
gh-pages 會自動根據 main branch 更新，作為 staging site

## translation

- 使用 JQuery i18n
- 華語直接使用程式碼內文字，英文使用 `/src/locale/en.yml`


## how to deploy (WIP)
`./deploy`
會自動將 static/2026 下的檔案推送到 production branch，並透過 repositor dispatch 觸發 [summit repo](https://github.com/g0v/summit.g0v.tw) 更新 submodules

