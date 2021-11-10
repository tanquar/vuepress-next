# Markdown

このセクションは、すでにMarkdownについて詳しく知っていることを前提としています。もしまだ詳しく知らなければ、先に[Markdownチュートリアル](https://commonmark.org/help/)を確認することをおすすめします。

## 構文拡張

VuePressでは、[構文拡張](https://github.com/markdown-it/markdown-it#syntax-extensions)をサポートする[markdown-it](https://github.com/markdown-it/markdown-it)の各種プラグインを使ってMarkdownコンテンツの解析が行われます。

このセクションでは、VuePressが組み込みで提供するMarkdownの構文拡張機能について紹介します。

組み込みの拡張機能は、設定を変更することができます。また、markdown-itの他のプラグインを読み込んだり、[markdown](../reference/config.md#markdown)オプションや[extendsMarkdown](../reference/plugin-api.md#extendsmarkdown)オプションを使って独自の機能拡張を開発したりすることもできます。

### 埋め込みの構文

markdown-itは以下の埋め込みの構文に対応します。

- [テーブル](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [取り消し線](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

### ヘッダーアンカー

各セクションのヘッダーにマウスカーソルを合わせると、「`#`」というアンカーが表示されることに気付いたでしょうか。「`#`」のアンカーをクリックすると、そのセクションに直接ジャンプすることができます。

::: tip
ヘッダーアンカーの拡張機能は、[markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)でサポートされています。

設定リファレンス：[markdown.anchor](../reference/config.md#markdown-anchor)
:::

### リンク

Markdownの[リンク構文](https://spec.commonmark.org/0.29/#link-reference-definitions)を使用すると、VuePressによって変換が実行されます。

このドキュメントのソースファイルを例にします。

```bash
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  ├─ markdown.md    # <- 現在のファイル
   │  └─ README.md
   ├─ reference
   │  └─ config.md
   └─ README.md
```

**元のMarkdown**

```md
<!-- 相対パス -->
[ホーム](../README.md)
[設定リファレンス](../reference/config.md)
[はじめに](./getting-started.md)
<!-- 絶対パス -->
[ガイド](/guide/README.md)
[設定リファレンス > markdown.links](/reference/config.md#links)
<!-- URL -->
[GitHub](https://github.com)
```

**変換後**

```vue
<template>
  <RouterLink to="/">ホーム</RouterLink>
  <RouterLink to="/reference/config.html">設定リファレンス</RouterLink>
  <RouterLink to="/guide/getting-started.html">はじめに</RouterLink>
  <RouterLink to="/guide/">ガイド</RouterLink>
  <RouterLink to="/reference/config.html#links">設定リファレンス &gt; markdown.links</RouterLink>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<OutboundLink/></a>
</template>
```

**レンダリング結果**

[ホーム](../README.md)
[設定リファレンス](../reference/config.md)
[はじめに](./getting-started.md)
[ガイド](/guide/README.md)
[設定リファレンス > markdown.links](/reference/config.md#links)
[GitHub](https://github.com)

**説明**

- 内部リンクは、SPAのナビゲーションを実現する`<RouterLink>`に変換されます。
- `.md`ファイルへの内部リンクは、[ページのルートパス](./page.md#routing)に変換されます。絶対パスと相対パスのどちらも利用できます。
- 外部リンクには、`target="_blank" rel="noopener noreferrer"`の属性と、<OutboundLink />のタグが付けられます。

**推奨事項**

以下の理由から、内部リンクには絶対パスではなく相対パスを使用することが推奨されます。

- 相対パスは対象のファイルへの有効なリンクであり、エディタやリポジトリでソースファイルを参照するときにも適切にナビゲートできます。
- 相対パスは異なるロケールでも一貫性を持ちます。コンテンツを翻訳するとき、ロケールごとにパスを変更する必要がありません。
- 絶対パスを使用すると、サイトの[base](../reference/config.md#base)の設定が`"/"`と異なる場合に、手動で`base`を追加するか、[baseヘルパー](./assets.md#base-helper)を使用する必要が生じます。

::: tip
リンクの拡張機能は、組み込みのプラグインでサポートされています。

設定リファレンス：[markdown.links](../reference/config.md#markdown-links)

合わせて参照：[組み込みコンポーネント &gt; OutboundLink](../reference/components.md#outboundlink)
:::

### 絵文字:tada:

Markdownコンテンツには、`:EMOJICODE:`と入力することで絵文字を追加できます。

利用できる絵文字と対応するコードの全体リストは、[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)で確認できます。

**入力**

```md
VuePress 2がリリースされました:tada:
```

**出力**

VuePress 2がリリースされました:tada:

::: tip
絵文字の拡張機能は[markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)でサポートされています。

設定リファレンス：[markdown.emoji](../reference/config.md#markdown-emoji)
:::

### 目次構文

現在のページの目次をMarkdownのコンテンツに配置するには、`[[toc]]`構文を使用します。

**入力**

```md
[[toc]]
```

**出力**

[[toc]]

目次に含まれる各ヘッダーは、対応する[ヘッダーアンカー](#header-anchors)にリンクします。そのため、ヘッダーアンカーを無効にすると目次が適切に機能しません。

::: tip
目次の拡張機能は、[markdown-it-toc-done-right](https://github.com/nagaozen/markdown-it-toc-done-right)からフォークされて変更が加えられた組み込みのプラグインによってサポートされています。

設定リファレンス：[markdown.toc](../reference/config.md#markdown-toc)
:::

### コードブロック

以下のコードブロックの拡張は、Node側でMarkdownを解析する処理の中に組み込まれています。つまり、クライアント側ではコードブロックの処理が行われません。

#### 行のハイライト

コードブロックに行範囲の指定を追加することで、コードブロックの特定の行だけをハイライトすることができます。

**入力**

````md
```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```
````

**出力**

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

行範囲の指定の例：

- シンプルな行範囲：`{5-8}`
- 複数の単一行：`{4,7,9}`
- これらの組み合わせ：`{4,7-13,16,23-27,40}`

::: tip
行のハイライトの拡張機能は、[markdown-it-highlight-lines](https://github.com/egoist/markdown-it-highlight-lines)からフォークされて変更が加えられた組み込みのプラグインによってサポートされています。

設定リファレンス：[markdown.code.highlightLines](../reference/config.md#markdown-code-highlightlines)
:::

#### 行番号

コードブロックの左側に行数が表示されていることに気付いたでしょうか。これはデフォルトで有効になっていて、設定で無効にすることができます。

コードブロックに`:line-numbers`または`:no-line-numbers`の指定を追加すると、設定ファイルの値を上書きすることができます。

**入力**

````md
```ts
// デフォルトでは行番号が有効
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行番号を無効化
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**出力**

```ts
// デフォルトでは行番号が有効
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行番号を無効化
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

::: tip
行番号の拡張機能は、組み込みのプラグインでサポートされています。

設定リファレンス：[markdown.code.lineNumbers](../reference/config.md#markdown-code-linenumbers)
:::

#### v-preによるラップ

[テンプレート構文はMarkdown内で利用でき](#template-syntax)、コードブロック内でも機能します。

コードブロックがVueによってコンパイルされるのを防ぐため、VuePressはデフォルトでコードブロックに[v-pre](https://v3.vuejs.org/api/directives.html#v-pre)ディレクティブを追加します。これは、設定で無効にすることができます。

`:v-pre`/`:no-v-pre`の指定をコードブロックの囲みに追加することで、設定の値を上書きすることができます。

::: warning
二重の波括弧を使う「Mustache」構文など、テンプレート構文の文字には構文ハイライトの解析が先に適用されてしまうことがあります。その場合、以下の例のように`:no-v-pre`を追加しても、言語によってはVueのコンパイルがうまく機能しません。

そのような言語でもVueのコンパイルを機能させたい場合は、デフォルトの構文ハイライトを無効にして、クライアント側に独自の構文ハイライトを組み込むことを検討してください。
:::

**入力**

````md
```md
<!-- これはデフォルトでそのまま保たれる -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- ここではVueのコンパイルが機能する -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// JavaScriptの構文ハイライトが適用され、Vueのコンパイルが機能しない
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```
````

**出力**

```md
<!-- これはデフォルトでそのまま保たれる -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- ここではVueのコンパイルが機能する -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

<!--
using :no-v-pre on JS code blocks has potential issue with shiki, so we are
not actually using :no-v-pre here, just as an example of incorrect usage
-->

```js
// JavaScriptの構文ハイライトが適用され、Vueのコンパイルが機能しない
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

::: tip
v-preの拡張機能は、組み込みのプラグインでサポートされています。

設定リファレンス：[markdown.code.vPre](../reference/config.md#markdown-vpre)
:::

### コードブロックのインポート

次のようなコードインポート構文を使うと、ファイルからコードブロックをインポートできます。

```md
<!-- 最短の構文 -->
@[code](../foo.js)
```

ファイルから部分的にインポートする場合は、以下のようにします。

```md
<!-- 部分的にインポートする (1行目〜10行目) -->
@[code{1-10}](../foo.js)
```

コードの言語はファイルの拡張子から推測されますが、以下のように明示的に指定することが推奨されます。

```md
<!-- コードの言語を指定する -->
@[code js](../foo.js)
```

`[]`の中の2番目の要素は、コードの囲みに付ける属性として扱われます。ここでは先ほど[コードブロック](#code-blocks)のセクションで説明したすべての構文がサポートされます。

```md
<!-- 行のハイライト -->
@[code js{2,4-5}](../foo.js)
```

複合的な例を以下に示します。

- `'../foo.js'`というファイルの3行目〜10行目をインポートします。
- 言語には`'js'`を指定します。
- インポートされたコードの3行目、つまり`'../foo.js'`ファイルの5行目をハイライトします。
- 行番号を無効にします。

```md
@[code{3-10} js{3}:no-line-numbers](../foo.js)
```

コードインポート構文では、パスのエイリアスが使用できません。次の設定を使用すると、パスのエイリアスを独自に処理できます。

```js
module.exports = {
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, 'path/to/src')),
    },
  },
}
```

```md
<!-- 'path/to/src/foo.js' に解決される -->
@[code](@src/foo.js)
```

::: tip
コードインポートの拡張機能は、組み込みのプラグインでサポートされています。

設定リファレンス：[markdown.importCode](../reference/config.md#markdown-importcode)
:::

## Markdownの中でVueを使用する

このセクションでは、Markdown内でのVueの基本的な使用方法をいくつか紹介します。

詳細については、[クックブック > MarkdownとVueのSFC](../advanced/cookbook/markdown-and-vue-sfc.md)を参照してください。

### テンプレート構文

まず、以下の前提があります。

- Markdownの中にはHTMLを記述できる。
- Vueのテンプレート構文はHTMLと互換性がある。

このことから、Markdownの中に[Vueのテンプレート構文](https://v3.vuejs.org/guide/template-syntax.html)を記述することができる、と分かります。

**入力**

```md
1たす1は、{{ 1 + 1 }}。

<span v-for="i in 3"> span: {{ i }} </span>
```

**出力**

1たす1は、{{1 + 1}}。

<span v-for="i in 3"> span: {{ i }} </span>

### コンポーネント

Markdownの中でVueコンポーネントを直接使用できます。

**入力**

```md
これはデフォルトのテーマの`<Badge />`という組み込みコンポーネントです：<Badge text="サンプル" />
```

**出力**

これはデフォルトのテーマの`<Badge />`という組み込みコンポーネントです：<Badge text="サンプル" />

::: tip
組み込みコンポーネントの全体リストについては、[組み込みコンポーネント](../reference/components.md)を参照してください。

デフォルトのテーマによって提供される組み込みコンポーネントの全体リストについては、[デフォルトのテーマ > 組み込みコンポーネント](../reference/default-theme/components.md)を参照してください。
:::

## 注意

### 非推奨のHTMLタグ

[\<center>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center)や[\<font>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)などのHTMLタグは非推奨とされ、デフォルトではVuePressのMarkdownの中で使うことができません。

Vueのテンプレートコンパイラは、これらのタグをネイティブのHTMLタグとして認識せず、代わりにVueコンポーネントとして解決しようと試みます。しかし、結果として通常これらのコンポーネントは存在しません。

非推奨のHTMLタグの使用は、避ける必要があります。ただし、どうしても使用しなければならない場合は、次の回避策のいずれかを試みてください。

- [v-pre](https://v3.vuejs.org/api/directives.html#v-pre)ディレクティブを追加して、これらのタグの要素とその子のコンパイルをスキップします。ただし、テンプレート構文も無効になることに注意する必要があります。
- [compilerOptions.isCustomElement](https://v3.vuejs.org/api/application-config.html#compileroptions)を設定して、Vueのテンプレートコンパイラがこれらのタグをコンポーネントとして解決しないように指示します。
  - `@bundler-webpack`では、[vue.compilerOptions](../reference/bundler/webpack.md#vue)で設定します
  - `@bundler-vite`では、[vuePluginOptions.template.compilerOptions](../reference/bundler/vite.md#vuepluginoptions)で設定します
