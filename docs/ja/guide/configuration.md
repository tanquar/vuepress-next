# 設定

## 設定ファイル

設定ファイルがない場合、VuePressのサイトが提供する機能は最小限になります。サイトのカスタマイズを始めるには、まずdocsディレクトリの中に`.vuepress`というディレクトリを作成します。ここが、VuePress固有のさまざまなファイルを置く場所になります。プロジェクトの構造は、次のようになります。

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```

VuePressのサイトを設定するために欠かせないファイルは`.vuepress/config.js`で、JavaScriptのオブジェクトをエクスポートする形式にする必要があります。TypeScriptを使用する場合は代わりに`.vuepress/config.ts`を置くと、VuePressの設定に合った型のヒントを得ることができます。

<codegroup>
  <codegroupitem title="JS" active>
</codegroupitem></codegroup>

```js
module.exports = {
  lang: 'ja-JP',
  title: 'こんにちは、VuePress！',
  description: '初めてのVuePressサイト',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

  


  <codegroupitem title="TS">
</codegroupitem>


```ts
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})
```

  



::: tip<br>設定用のオブジェクトを、**VuePress設定**と呼びます。<br>:::

## 設定のスコープ

VuePressの設定には`themeConfig`という項目があることにお気づきだと思います。

`themeConfig`より外側の項目は**サイト設定**と呼び、`themeConfig`より内側の項目は**テーマ設定**と呼びます。

### サイト設定

サイト設定は、使用するテーマに関係なく常に適用される設定を指します。

よく知られるように、あらゆるサイトには`lang`、`title`、`description`などのサイト固有の属性があります。VuePressは、これらの属性をビルトインでサポートします。

::: tip<br>サイト設定のすべての項目については、[設定リファレンス](../reference/config.md)を参照してください。<br>:::

### テーマ設定

テーマ設定はVuePressのテーマによって処理され、使用するテーマによって内容が異なります。

VuePress設定で`theme`オプションを指定しない場合、デフォルトのテーマが使用されます。

::: tip<br>デフォルトのテーマのテーマ設定については、[デフォルトのテーマ &gt; 設定リファレンス](../reference/default-theme/config.md)を参照してください。<br>:::
