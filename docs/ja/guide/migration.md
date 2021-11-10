# v1からの移行

::: warning
VuePress v1のプラグインとテーマはVuePress v2と互換性がありません。v1のプラグインとテーマは、対応するv2バージョンのものに更新する必要があります。
:::

VuePress v2では、以下のような大幅な変更と機能強化が行われています。

- VuePress v2ではVue3を採用しました。コンポーネントやその他のクライアントファイルがVue3に対応していることを確認してください。
- VuePress v2はTypeScriptで開発され、TSのサポートが向上しています。プラグインとテーマの開発にもTypeScriptを使用することが強く推奨されます。VuePressの設定ファイルはTypeScriptもサポートし、`.vuepress/config.ts`を直接使用できます。
- VuePress v2は、バンドラーとしてWebpackとViteの2つをサポートしています。開発モードではViteを使って開発エクスペリエンスを向上させたり、ビルドモードではWebpackを使ってブラウザーの互換性を向上させたりすることもできます。

VuePress v2の中核的なコンセプトとプロセスはv1から変わりませんが、v2のAPIは再設計されて標準化が進められました。そのため、既存のv1プロジェクトをv2に移行するときには大幅な変更が発生する可能性があります。v1のサイト、プラグイン、テーマをv2に移行する際は、このガイドを活用してください。

- 一般ユーザーの場合は、[ユーザー向け](#for-users)のガイドに進んでください。
- プラグイン作成者の場合は、[プラグイン作成者向け](#for-plugin-authors)のガイドに進んでください。
- テーマ作成者の場合は、[テーマ作成者向け](#for-theme-authors)のガイドに進んでください。

## ユーザー向け

### ユーザー設定の変更

#### shouldPrefetch

デフォルト値が`() => true`から`false`に変更されました。

#### extraWatchFiles

削除されました。

[onWatched](../reference/plugin-api.md#onwatched)フックでファイルを手動で監視してください。

#### プラグイン

[Babel方式](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html#babel-style)の構成のみが利用できます。

[オブジェクト方式](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html#object-style)の構成はv2では**サポートされなくなりました**。

#### patterns

名前が`pagePatterns`に変更されました。

#### markdown.lineNumbers

[markdown.code.lineNumbers](../reference/config.md#markdown-code-linenumbers)に移動しました。

デフォルト値が`false`から`true`に変更されました。

#### markdown.slugify

削除されました。

どうしてもslugifyの機能を変更する必要がある場合は、以下のオプションを個別に設定してください。

- `markdown.anchor.slugify`
- `markdown.toc.slugify`
- `markdown.extractHeaders.slugify`

#### markdown.pageSuffix

削除されました。

#### markdown.externalLinks

[markdown.links.externalAttrs](../reference/config.md#markdown-links)に移動しました。

#### markdown.toc

変更があります。

詳しくは、[設定 > markdown.toc](../reference/config.md#markdown-toc)を参照してください。

#### markdown.plugins

削除されました。

[extendsMarkdown](../reference/plugin-api.md#extendsmarkdown)フックの中でmarkdown-itプラグインを使用してください。

#### markdown.extendMarkdown

削除されました。

[extendsMarkdown](../reference/plugin-api.md#extendsmarkdown)フックを使用してください。

#### markdown.extractHeaders

変更があります。

詳しくは、[設定 > markdown.extractHeaders](../reference/config.md#markdown-extractheaders)を参照してください。

#### Webpack関連の設定

Webpack関連のすべての設定は`@vuepress/bundler-webpack`のオプションに移動しました。そのため、設定は以下のように[bundlerConfig](../reference/config.md#bundlerconfig)で行う必要があります。

- `postcss`：`bundlerConfig.postcss`に移動しました。
- `stylus`：`bundlerConfig.stylus`に移動しました。
- `scss`：`bundlerConfig.scss`に移動しました。
- `sass`：`bundlerConfig.sass`に移動しました。
- `less`：`bundlerConfig.less`に移動しました。
- `chainWebpack`：`bundlerConfig.chainWebpack`に移動しました。
- `configureWebpack`：`bundlerConfig.configureWebpack`に移動しました。
- `evergreen`：`bundlerConfig.evergreen`に移動し、デフォルト値が`false`から`true`に変更されました。

詳しくは、[バンドラー > Webpack](../reference/bundler/webpack.md)を参照してください。

### フロントマターの変更

#### meta

削除されました。

代わりに[head](../reference/frontmatter.md#head)を使用してください。例：

```yaml
head:
  - - meta
    - name: foo
      content: bar
  - - link
    - rel: canonical
      href: foobar
  - - script
    - {}
    - console.log('hello from frontmatter');
```

これは以下と同じ構造になります。

```js
// .vuepress/config.js
module.exports = {
  // ...
  head: [
    ['meta', { name: 'foo', content: 'bar' }],
    ['link', { rel: 'canonical', href: 'foobar' }],
    ['script', {}, `console.log('hello from frontmatter');`],
  ],
  // ...
}
```

### パーマリンクパターンの変更

- `:i_month`：削除されました。
- `:i_day`：削除されました。
- `:minutes`：削除されました (v1ではドキュメントにありません)。
- `:seconds`：削除されました (v1ではドキュメントにありません)。
- `:regular`：名前が`:raw`に変更されました。

詳しくは、[フロントマター > permalinkPattern](../reference/frontmatter.md#permalinkpattern)を参照してください。

### パレットシステムの変更

VuePress v1のStylusのパレットシステム (`styles/palette.styl`および`styles/index.styl`) は、VuePressのコアからは提供されなくなりました。

パレットシステムは[@vuepress/plugin-palette](../reference/plugin/palette.md)に切り出されました。

これにより、テーマ作成者はStylusによる制限を受けずに、独自の方法でユーザーがスタイルをカスタマイズ可能にすることができるようになりました。

デフォルトのテーマを使用している場合、パレットシステムは引き続き使用できます。ただしパレットシステムはSASSに移行され、ほとんどの変数がCSS変数に移行されています。詳しくは、[デフォルトのテーマ > スタイル](../reference/default-theme/styles.md)を参照してください。

### 従来のファイルへの変更

#### .vuepress/enhanceApp.js

名前が`.vuepress/clientAppEnhance.{js,ts}`に変更されました。

関数の引数にも変更があります。

詳しくは、[クライアントAPI> defineClientAppEnhance](../reference/client-api.md#defineclientappenhance)を参照してください。

#### .vuepress/components/

このディレクトリ内のファイルが、自動的にはVueコンポーネントとして登録されなくなりました。

[@vuepress/plugin-register-components](../reference/plugin/register-components.md)を使用するか、手動で`.vuepress/clientAppEnhance.{js,ts}`にコンポーネントを登録する必要があります。

#### .vuepress/theme/

このディレクトリが存在しても、暗黙的にはローカルテーマとして使用されなくなりました。

[テーマ](../reference/config.md#theme)オプションを使ってローカルテーマへのパスを明示的に設定してください。

### Markdownのスロットの変更

Markdownのスロットはサポートされなくなりました。

### プラグインAPIの変更

- `plugins`：削除されました。
- `ready`：名前が`onPrepared`に変更されました。
- `updated`：名前が`onWatched`に変更されました。
- `generated`：名前が`onGenerated`に変更されました。
- `additionalPages`：削除されました。`onInitialized`フックの中で`app.pages.push(createPage())`を使ってください。
- `clientDynamicModules`：削除されました。`onPrepared`フックの中で`app.writeTemp()`を使ってください。
- `enhanceAppFiles`：名前が`clientAppEnhanceFiles`に変更されました。
- `globalUIComponents`：名前が`clientAppRootComponentFiles`に変更されました。
- `clientRootMixin`：名前が`clientAppSetupFiles`に変更されました。
- `extendMarkdown`：名前が`extendsMarkdown`に変更されました。
- `chainMarkdown`：削除されました。
- `extendPageData`：名前が`extendsPageData`に変更されました。
- `extendsCli`：削除されました。
- `configureWebpack`：削除されました。
- `chainWebpack`：削除されました。
- `beforeDevServer`：削除されました。
- `afterDevServer`：削除されました。

詳しくは、[プラグインAPI](../reference/plugin-api.md)を参照してください。

### テーマAPIの変更

#### レイアウト

レイアウトディレクトリとレイアウトコンポーネントは、手動で指定するように変更されました。

詳しくは、[テーマAPI > レイアウト](../reference/theme-api.md#layouts)を参照してください。

#### extend

名前が`extends`に変更されました。

引き続き`extends: 'parent-theme'`を使って親テーマを継承し、プラグインやレイアウトなどを拡張することもできます。

`@theme`および`@parent-theme`エイリアスは利用できなくなりました。

マルチレベルのテーマ継承がサポートされるようになりました。

### CLIの変更

#### ejectコマンド

削除されました。

#### キャッシュオプション

- `-c, --cache [cache]`：`--cache <cache>`に変更されました。省略形の`-c`が`cache`オプションを指さなくなり、`cache`オプションの値が必須になりました。
- `--no-cache`：名前が`--clean-cache`に変更されました。

### デフォルトのテーマの変更

#### 組み込みコンポーネント

- `<CodeGroup />`と`<CodeBlock />`は、`<CodeGroup />`と`<CodeGroupItem />`に名前が変更されました。
- `<Badge />`
  - `$badgeErrorColor`パレット変数の名前が`$badgeDangerColor`に変更されました。
  - `type`プロパティが`tip`、`warning`、`danger`のみを受け付けるようになりました

#### パレットシステム

デフォルトのテーマのパレットシステムが、SASSおよびCSS変数に移行されました。

詳しくは、[デフォルトのテーマ > スタイル](../reference/default-theme/styles.md)を参照してください。

#### テーマ設定

デフォルトのテーマ設定が大幅に変更されました。

詳しくは、[デフォルトのテーマ > 設定](../reference/default-theme/config.md)を参照してください。

### 公式プラグインの変更

詳しくは、[公式プラグイン](../reference/plugin/README.md)を参照してください。

### コミュニティのテーマとプラグイン

v1のテーマとプラグインはv2と互換性がありません。

使用しているテーマとプラグインがv2をサポートしていることを確認してください。移行に関するガイドについては、それぞれのドキュメントを参照してください。

## プラグイン作成者向け

まず、[プラグインAPIの変更](#plugin-api-change)をお読みください。

以下のような大幅な変更があります。

- プラグインの中で他のプラグインを使用することができなくなりました。これにより、プラグインをネストすることによって生じる多くの潜在的な問題が回避されます。自分で作成するプラグインが他のプラグインに依存する場合は、それらをドキュメントに記載する必要があります。
- ほとんどのv1フックは、v2でも同等のものが利用できます。唯一の例外は`extendsCli`で、これは削除されました。
- VuePressのコア部分がWebpackと切り離されたことにより、Webpack関連のフックが削除されました。プラグインの中でWebpackの設定を変更する必要がある場合は、`app.options.bundlerConfig`を直接変更することを検討してください。

## テーマ作成者向け

まず、[プラグインAPIの変更](#plugin-api-change)と[テーマAPIの変更](#theme-api-change)をお読みください。

プラグインの中で他のプラグインを使用することはできなくなりましたが、テーマの中ではプラグインを使用できます。

以下のような大幅な変更があります。

- **従来のテーマディレクトリ構造**がなくなりました。
  - ファイル`theme/enhanceApp.js`および`theme/clientAppEnhance.{js,ts}`が、暗黙的にはクライアントアプリの拡張ファイルとして使用されなくなりました。`clientAppEnhanceFiles`フックで明示的に指定する必要があります。
  - `theme/global-components/`ディレクトリ内のファイルが、自動的にはVueコンポーネントとして登録されなくなりました。[@vuepress/plugin-register-components](../reference/plugin/register-components.md)を使用するか、コンポーネントを手動で`clientAppEnhance.{js,ts}`に登録する必要があります。
  - `theme/layouts/`ディレクトリ内のファイルが、自動的にはレイアウトコンポーネントとして登録されなくなりました。`layouts`オプションで明示的に指定する必要があります。
  - `theme/templates/`ディレクトリ内のファイルが、自動的にはdev/ssrテンプレートとして使用されなくなりました。
  - テーマのエントリファイルの指定が必須になりました。テーマのエントリとして`"main": "layouts/Layout.vue"`は使用しないでください。
- StylusがデフォルトのCSSプリプロセッサではなくなり、Stylusのパレットシステムが組み込まれなくなりました。どうしてもv1と同じパレットシステムを使う必要がある場合は、[@vuepress/plugin-palette](../reference/plugin/palette.md)が役立ちます。
- Prism.jsによるMarkdownのコードブロックの構文ハイライトが、デフォルトの組み込みではなくなりました。[@vuepress/plugin-prismjs](../reference/plugin/prismjs.md)または[@vuepress/plugin-shiki](../reference/plugin/shiki.md)のいずれかを使用するか、独自の構文ハイライトを導入してください。
- スケーラビリティの問題で、`$site.pages`は使用できなくなりました。