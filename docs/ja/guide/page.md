# ページ

VuePressで中心になるものは、Markdownです。プロジェクト内にMarkdownファイルを置くと、それぞれが独立したページを形成します。

## ルーティング

デフォルトでは、あるページの場所を示すルートパスは、Markdownファイルの相対パスによって決まります。

以下のようなディレクトリ構造でMarkdownファイルが配置されているとします。

```
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
```

`vuepress dev docs`のようなコマンドを実行すると、`docs`ディレクトリが[sourceDir](../reference/cli.md)として扱われます。このとき、各Markdownファイルのルートパスは以下のように定まります。

|   相対パス          |      ルートパス        |
|--------------------|----------------------|
| `/README.md`       | `/`                  |
| `/contributing.md` | `/contributing.html` |
| `/guide/README.md` | `/guide/`            |
| `/guide/page.md`   | `/guide/page.html`   |

## フロントマター

Markdownファイルにはフロントマターを含めることができます。フロントマターは[YAML](https://yaml.org/)で記述し、上下を3連続のハイフンで囲ってMarkdownファイルの先頭に置く必要があります。簡単な例を下に示します。

```md
---
lang: ja-JP
title: これはページのタイトルです
description: これはページの説明です
---
```

フィールドが[設定ファイル](./configuration.md#site-config)の[サイト設定](./configuration.md#config-file)によく似ていることに気付いたでしょうか。フロントマターを使うと、そのページの`lang`、`title`、`description`などを上書きすることができます。つまり、フロントマターを使用すると、ページを有効範囲とした設定を行うことができます。

VuePressのフロントマターでは、いくつかの組み込みのフィールドも利用できます。また、テーマによっては独自のフロントマターを備えている場合があります。

::: tip
VuePressに組み込まれているすべてのフロントマターの一覧は、参考資料の[フロントマター](../reference/frontmatter.md)で確認してみてください。

デフォルトのテーマのフロントマターについては、参考資料の[デフォルトのテーマ &gt; フロントマター](../reference/default-theme/frontmatter.md)を確認してください。
:::

## コンテンツ

ページのメインコンテンツは、Markdownで記述します。VuePressは、それをまずHTMLコードに変換し、さらにそれをVue SFCの`<template>`として扱います。

シンプルなMarkdownを大幅に拡張したい場合は、[markdown-it](https://github.com/markdown-it/markdown-it)の力と、Vueのテンプレート構文の力を借りることができます。次は、VuePressのMarkdownの全般的な拡張機能について、[「ガイド > Markdown」で確認しましょう](./markdown.md)。
