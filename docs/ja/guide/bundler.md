# バンドラー

VuePressでは、サイトのdevとbuildを実行するバンドラーとして[Webpack](https://webpack.js.org/)を使用してきました。VuePress v2以降では、[Vite](https://vitejs.dev/)を始めとする他のバンドラーもサポートされます。

コミュニティユーザーが他のバンドラーパッケージを作成することも可能です。ただし、現在のところVuePressチームから提供されるバンドラーのみを使用することが推奨されます。

## バンドラーの選択

[vuepress](https://www.npmjs.com/package/vuepress)パッケージを使用する場合はWebpackバンドラーがインストール済みで、自動的に使用されます。

代わりにViteのバンドラーを使用する場合は、[vuepress-vite](https://www.npmjs.com/package/vuepress-vite)パッケージに切り替えることができます。

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn remove vuepress
yarn add -D vuepress-vite@next
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm uninstall vuepress
npm install -D vuepress-vite@next
```

  </CodeGroupItem>
</CodeGroup>

## バンドラーの構成

通常、これらのバンドラーはVuePressで動作するように適切に構成されているため、追加の構成なしで使用できます。

[themeConfig](../reference/config.md#themeconfig)と同様に、VuePressでは[bundlerConfig](../reference/config.md#bundlerconfig)を使ってユーザーがバンドラーの構成を設定することもできます。

それぞれのバンドラーの全オプションについては、[Bundlers > Webpack](../reference/bundler/webpack.md)および[Bundlers > Vite](../reference/bundler/vite.md)を参照してください。
