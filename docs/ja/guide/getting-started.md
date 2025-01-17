# 始めよう

## 事前に用意するもの

- [Node.js v12以降](https://nodejs.org/)
- [Yarn v1 (クラシック)](https://classic.yarnpkg.com/en/) (オプショナル)

::: tip
- [pnpm](https://pnpm.io/)を使用する場合、[`.npmrc`](https://pnpm.io/npmrc#shamefully-hoist)ファイルで`shamefully-hoist=true`を設定する必要があります。
- [yarn 2](https://yarnpkg.com/)を使用する場合、[`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker)ファイルで`nodeLinker: 'node-modules'`を設定する必要があります。
:::

## 手動インストール

このセクションでは、VuePressのシンプルなドキュメントサイトをゼロから構築する手順を紹介しています。既存のプロジェクトが手元にあり、プロジェクト内にドキュメントを追加したい場合は、ステップ3から始めてください。

- **ステップ1**：新しいディレクトリを作成し、cdする

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- **ステップ2**：プロジェクトを初期化する

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>

- **ステップ3**：VuePressをローカルにインストールする

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress@next
```

  </CodeGroupItem>


  <CodeGroupItem title="NPM">


```bash
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

- **ステップ4**：`package.json`に[スクリプト](https://classic.yarnpkg.com/en/docs/package-json#toc-scripts)を追加する

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **ステップ5**：デフォルトの一時ディレクトリとキャッシュディレクトリを`.gitignore`ファイルに追記する

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- **ステップ6**：最初のドキュメントを作成する

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- **ステップ7**：ローカルサーバーでドキュメントサイトの提供を開始する

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn docs:dev
```

  </CodeGroupItem>


  <CodeGroupItem title="NPM">


```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

  VuePressによってホットリロードに対応した開発サーバーが起動され、[http://localhost:8080](http://localhost:8080)からアクセスできるようになります。Markdownファイルを編集すると、ブラウザで開いているコンテンツが自動的に更新されます。

これで、簡単なVuePressのドキュメントサイトの構築が完了し、機能するようになったはずです。次は、[VuePressの設定について詳しく見ていきましょう](./configuration.md)。
