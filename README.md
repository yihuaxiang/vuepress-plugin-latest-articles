# VuePress Latest articles

> Latest arricles plugin for [VuePress](https://github.com/vuejs/vuepress)

Show the latest n articles in your Vuepress blog.

## Install

Install dependence.

```bash
npm install vuepress-plugin-latest-articles
# OR
yarn add vuepress-plugin-latest-articles
```

## Usage

Add plugin in your vuepress config.

```js
// .vuepress/config
module.exports = {
  plugins: [
    "latest-articles"
  ]
}
```

Now, you can [using it in Markdown](https://vuepress.vuejs.org/guide/using-vue.html)!

Simple:
```html
<LatestArticles />
```

More:
```html
<LatestArticles title="My Title" titleTag="h2" number="10" />
```

Additionally, all pages will published. If there are some pages that you don't want to publish, you can add an item in frontmatter:
```yaml
---
publish: false
---
``` 

## Config

### title

- **type**: `String`
- **default**: `"Latest Articles" | "近期文章"`

The title.

### titleTag

- **type**: `String`
- **default**: `"h2"`

The tag of title element.

### number

- **type**: `Number`
- **default**: `10`

The number of articles.
