---
sidebar: auto
---

# 貢献ガイド

## 概要

このリポジトリは、[クラシックのYarn Workspace](https://classic.yarnpkg.com/en/docs/workspaces)を使った[Monorepo](https://en.wikipedia.org/wiki/Monorepo)構成で提供しています。`packages`ディレクトリには、独立した以下の関連パッケージを収録しています。

- `@vuepress/core`：VuePressのコア。ページの処理、プラグインシステム、データの準備など、VuePressアプリの生成に関係するネイティブのNodeAPIを提供します。

- `@vuepress/client`：VuePressのクライアントパッケージ。クライアントのエントリを提供し、クライアントサイドの開発で利用できる各種の型やユーティリティをエクスポートします。

- `@vuepress/bundler-vite`：Viteを使ったVuePressのバンドラーパッケージ。`@vuepress/core`によるVuePressアプリの`dev`と`build`の実行にViteを使用します。

- `@vuepress/bundler-webpack`：Webpackを使ったVuePressのバンドラーパッケージ。`@vuepress/core`によるVuePressアプリの`dev`と`build`の実行にWebpackを使用します。

- `@vuepress/cli`：VuePressのコマンドラインインターフェイス (CLI) パッケージ。設定ファイルを配置し、`@vuepress/core`を使ってVuePressアプリを作成したら、`@vuepress/bundler-${name}`を使って対応するコマンドを実行します。

- `@vuepress/theme-default`：VuePressのデフォルトのテーマ。

- `@vuepress/plugin-${name}`：公式の各種プラグイン。

- `@vuepress/shared`：Node側とクライアント側で共通のユーティリティ。

- `@vuepress/utils`：Node側だけで使用するユーティリティ。

- `vuepress`：`@vuepress/cli` + `@vuepress/bundler-webpack` + `@vuepress/theme-default`のラッパー。Webpackでデフォルトのテーマを使用する場合は、このパッケージをインストールするだけで準備が整います。

- `vuepress-vite`：`@vuepress/cli` + `@vuepress/bundler-vite` + `@vuepress/theme-default`のラッパー。Viteでデフォルトのテーマを使用する場合は、このパッケージをインストールするだけで準備が整います。

## 開発環境のセットアップ

事前に用意するもの

- [Node.js](http://nodejs.org)**バージョン12以降**
- [Yarn v1 (クラシック)](https://classic.yarnpkg.com/en/docs/install)

リポジトリをクローンして、依存関係をインストールします。

```bash
yarn
```

ソースファイルの監視を開始します。

```bash
yarn dev
```

別のターミナルを開き、ドキュメントサイトの執筆を開始します。

```bash
yarn docs:dev
```

このプロジェクトで使用している主なツール

- [TypeScript](https://www.typescriptlang.org/)：開発用の言語
- [Jest](https://jestjs.io/)：ユニットテスト
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)：コードのリンティングと整形

## 各種スクリプト

### `yarn build`

`build`スクリプトは、`tsc`を使ってTypeScriptのソースファイルをJavaScriptのdistファイルにコンパイルします。

distファイルは`.gitignore`によって無視されるため、このリポジトリのクローンを作成した後は、最初にこのスクリプトを実行する必要があります。

### `yarn copy`

プロジェクトルートの`copy`スクリプトは、すべてのパッケージの`copy`スクリプトを実行し、ソースディレクトリのリソースをdistディレクトリにコピーします。

`build`スクリプトでは一部のソースファイル (`.vue`、`.css`など) が処理されないため、distディレクトリに同じ相対パスを構築するためにこのスクリプトを実行する必要があります。

このリポジトリのクローンを作成した後は、このスクリプトも合わせて実行する必要があります。

### `yarn dev`

`dev`スクリプトは、`copy`スクリプトと`build`スクリプトを監視モードで実行します。

### `yarn clean`

`clean`スクリプトは、すべてのパッケージの`clean`スクリプトを実行し、distファイルおよびキャッシュをすべてクリーンアップします。つまり、`build`、`copy`、および`dev`スクリプトで生成されたすべてのファイルを削除します。

クリーンな初期状態のソースファイルにリセットしたい場合に使用します。

### `yarn docs:*`

#### `yarn docs:build`、`yarn docs:dev`、`yarn docs:clean`

`docs:`プレフィックスの付いたスクリプトは、`docs`ディレクトリに置かれたドキュメント用のスクリプトです。

VuePressでは、自身のドキュメントサイトの構築にそれ自身を使っています。

最初に`yarn build && yarn copy`を実行してVuePressのソースファイルをビルドしてから、`docs:`の付いたスクリプトを実行してドキュメントの執筆やビルドを行います。

#### `yarn docs:serve`

ローカルでのドキュメントサイトの提供を開始します。

`yarn docs:serve`を実行する前に、`yarn docs:build`を実行してドキュメントのdistファイルを生成しておく必要があります。そこで生成されたdistファイルが提供に使用されます。

### `yarn lint`

`lint`スクリプトは、ESLintを使ったソースファイル全体のチェックを実行します。

### `yarn test`

`test`スクリプトは、Jestを使ったユニットテストを実行します。

## ドキュメントの執筆

VuePressのドキュメントの執筆には、このリポジトリのソースコードからビルドされるVuePress自身を利用しています。

すべてのMarkdownのソースファイルは`docs`ディレクトリに置かれています。そこに以下の2つの翻訳が維持されています。

- `/`のパス：英語 (en-US)
- `/zh/`のパス：中国語 (zh-CN)

デプロイには以下の2つがあります。

- [Netlify](https://www.netlify.com)を利用したリリース用のデプロイ。最新のリリースバージョンからビルドされ、リリースされていない変更は表示されません。ドメイン名は[https://v2.vuepress.vuejs.org](https://v2.vuepress.vuejs.org)です。
- [GitHub Pages](https://pages.github.com)を利用した開発者向けのデプロイ。最新のコミットから構築され、開発者は最新の変更をプレビューできます。ドメイン名は[https://vuepress.github.io](https://vuepress.github.io)です。
