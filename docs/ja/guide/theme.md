# テーマ

VuePressのテーマは、レイアウトやスタイルを始めとする多くの機能を提供し、Markdownコンテンツの執筆に集中するのに役立ちます。

VuePressは、設定なしで使用できるデフォルトのテーマを備えています。これは、いまお読みのドキュメントサイトに適用されています。デフォルトのテーマは、基本的でありながら有用な機能をドキュメントサイトに提供します。設定内容の全容については、[デフォルトのテーマの設定リファレンス](../reference/default-theme/config.md)を参照してください。

それでは十分でない、という場合もあります。また、ブログなど、ドキュメントとは別の種類のサイトを構築したい場合もあります。そのようなときは、[コミュニティテーマ](#community-theme)の利用や[ローカルテーマ](#local-theme)の作成を検討しましょう。

## コミュニティテーマ

[NPM](https://www.npmjs.com/search?q=keywords:vuepress-theme)では、コミュニティユーザーが作成した豊富なテーマが公開されています。詳しいガイドについては、それぞれのテーマのドキュメントを参照してください。

一般的に、使用するテーマの名前を[theme](../reference/config.md#theme)オプションで指定する必要があります。

```js
module.exports = {
  theme: 'foo',
}
```

正式なテーマ名か、そのショートハンドを使用できます。

|          テーマ名          |    ショートハンド     |
|---------------------------|---------------------|
| `vuepress-theme-foo`      | `foo`               |
| `@org/vuepress-theme-bar` | `@org/bar`          |
| `@vuepress/theme-default` | `@vuepress/default` |

## ローカルテーマ

独自のカスタムテーマを使いたいが、公開する意図がない場合は、ローカルテーマを作成しましょう。

まず、ローカルテーマ用のディレクトリ (通常は`.vuepress/theme`) を作成します。

```
└─ docs
   ├─ .vuepress
   │  ├─ theme
   │  │  └─ index.js
   │  └─ config.js
   └─ README.md
```

次に、使用するテーマディレクトリの絶対パスを設定します。

```js
module.exports = {
  theme: path.resolve(__dirname, './path/to/docs/.vuepress/theme'),
}
```

独自のテーマの作成方法についての詳細は、[詳細 > テーマの作成](../advanced/theme.md)を参照してください。