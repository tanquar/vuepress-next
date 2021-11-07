---
home: true
title: ホーム
heroImage: /images/hero.png
actions:
  - text: 始めてみる
    link: /ja/guide/getting-started.html
    type: primary
  - text: 紹介
    link: /ja/guide/
    type: secondary
features:
  - title: シンプルが第一
    details: 書くことに集中できる、Markdownを中心としたコンパクトなプロジェクトを構築できます。
  - title: Vueのパワーを活用
    details: Vueの開発環境の力を借りて、MarkdownにVueコンポーネントを取り入れたり、Vueを使ったカスタムテーマを開発したりできます。
  - title: 高パフォーマンス
    details: 各ページは、事前レンダリングの静的なHTMLとしてビルドされ、ロードするとSPAとして動作します。
  - title: 豊富なテーマ
    details: 設定なしで使えるデフォルトのテーマを備えます。コミュニティが整備したテーマを選択したり、自分だけのテーマを作成したりすることもできます。
  - title: 豊富なプラグイン
    details: 柔軟なプラグインAPIを備え、プラグアンドプレイのさまざまな機能をサイトに追加することができます。
  - title: バンドラーの選択肢
    details: WebpackとViteの両方がサポートされています。お好みで選択してください。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

### 数ステップで簡単に導入

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 既存のプロジェクトにインストール
yarn add -D vuepress@next

# Markdownファイルを作成
echo '# Hello VuePress' > README.md

# 執筆環境を起動
yarn vuepress dev

# 静的ファイルをビルド
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
# 既存のプロジェクトにインストール
npm install -D vuepress@next

# Markdownファイルを作成
echo '# Hello VuePress' > README.md

# 執筆環境を起動
npx vuepress dev

# 静的ファイルをビルド
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
