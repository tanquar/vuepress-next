# プラグイン

VuePressのプラグインは、[プラグインAPI](../reference/plugin-api.md)の助けを借りてさまざまな機能を提供します。

## コミュニティプラグイン

[NPM](https://www.npmjs.com/search?q=keywords:vuepress-plugin)では、コミュニティユーザーが作成した豊富なプラグインが公開されています。また、VuePressチームが管理するいくつかの公式プラグインも、[@vuepress](https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin)のスコープに置かれています。詳しいガイドについては、それぞれのプラグインのドキュメントを参照してください。

一般的に、使用するプラグインの名前を[plugins](../reference/config.md#plugins)オプションで指定する必要があります。

```js
module.exports = {
  plugins: [
    'foo',
    ['bar', { /* options */ }]
  ],
}
```

正式なプラグイン名か、そのショートハンドを使用できます。

|        プラグイン名         |    ショートハンド     |
|---------------------------|---------------------|
| `vuepress-plugin-foo`     | `foo`               |
| `@org/vuepress-plugin-bar`| `@org/bar`          |
| `@vuepress/plugin-foobar` | `@vuepress/foobar`  |

::: tip
ほとんどのプラグインは、一度しか指定できません。同じプラグインを複数回指定した場合、最後に指定したプラグインだけが有効になります。

ただし、[@vuepress/plugin-container](../reference/plugin/container.md)など、プラグインの中には複数回指定できるものもあります。詳しいガイドについては、それぞれのプラグインのドキュメントを参照してください。
:::

## ローカルプラグイン

独自のカスタムプラグインを使いたいが、公開する意図がない場合は、ローカルプラグインを作成しましょう。

推奨される方法は、[設定ファイル](./configuration.md#config-file)をプラグインとして直接利用することです。ほぼすべての[プラグインAPI](../reference/config.md#plugin-api)が利用可能で、多くの場合に便利です。

しかし、設定ファイルに処理を詰め込みすぎだと感じる場合は、独立したプラグインに分けることができます。使用するには絶対パスで指定するか、requireで読み込みます。

```js
module.exports = {
  plugins: [
    path.resolve(__dirname, './path/to/your-plugin.js'),
    require('./another-plugin'),
  ],
}
```

独自のプラグインの作成方法についての詳細は、[詳細 > プラグインの作成](../advanced/plugin.md)を参照してください。
