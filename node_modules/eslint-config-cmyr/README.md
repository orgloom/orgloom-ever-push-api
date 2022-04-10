# eslint-config-cmyr

<p>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr" target="_blank">
        <img alt="Version" src="https://img.shields.io/github/package-json/v/CaoMeiYouRen/eslint-config-cmyr" /></a>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr/actions?query=workflow%3ARelease" target="_blank">
        <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/CaoMeiYouRen/eslint-config-cmyr/Release" /></a>
    <img alt="node-current"  src="https://img.shields.io/node/v/eslint-config-cmyr" />
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr#readme" target="_blank">
        <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" /></a>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr/graphs/commit-activity" target="_blank">
        <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" /></a>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr/blob/master/LICENSE" target="_blank">
        <img alt="License: MIT" src="https://img.shields.io/github/license/CaoMeiYouRen/eslint-config-cmyr" /></a>
</p>


## 草梅友仁个人使用的 eslint 检测规范

```sh
"lint": "cross-env NODE_ENV=production eslint src --fix --ext .js,.ts"
```

## 风格理念

1. 若无必要，勿增实体。
2. 如果某元素可有可无，则无
3. 若移除某元素会导致 bug ，则留，否则无

## 配置

```js
// .eslintrc.js
module.exports = {
    root: true,
    extends: [
        'cmyr',
    ],
}

```

