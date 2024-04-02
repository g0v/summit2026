# g0v Summit 2024

- 使用 gulp + pug + tailwindcss
- 使用 baseurl 來解決 /2024 & /summit2024 的相對路徑問題

## how to dev
```
  npm i
  npm start
```
gh-pages 會自動根據 new_design branch 更新，作為 staging site

## translation

- 使用 JQuery i18n
- 華語直接使用程式碼內文字，英文使用 `/src/locale/en.yml`


## how to deploy
`./deploy`
會自動將 static/2024 下的檔案推送到 production branch，再到 [summit repo](https://github.com/g0v/summit.g0v.tw) 更新 submodules
