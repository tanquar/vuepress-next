import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const ja: NavbarConfig = [
  {
    text: 'ガイド',
    link: '/ja/guide/',
  },
  {
    text: '参考資料',
    children: [
      {
        text: 'VuePress',
        children: [
          '/ja/reference/cli.md',
          '/ja/reference/config.md',
          '/ja/reference/frontmatter.md',
          '/ja/reference/components.md',
          '/ja/reference/plugin-api.md',
          '/ja/reference/theme-api.md',
          '/ja/reference/client-api.md',
          '/ja/reference/node-api.md',
        ],
      },
      {
        text: 'バンドラー',
        children: [
          '/ja/reference/bundler/webpack.md',
          '/ja/reference/bundler/vite.md',
        ],
      },
      {
        text: 'デフォルトのテーマ',
        children: [
          '/ja/reference/default-theme/config.md',
          '/ja/reference/default-theme/frontmatter.md',
          '/ja/reference/default-theme/components.md',
          '/ja/reference/default-theme/markdown.md',
          '/ja/reference/default-theme/styles.md',
        ],
      },
    ],
  },
  {
    text: 'プラグイン',
    children: [
      {
        text: '共通機能',
        children: [
          '/ja/reference/plugin/back-to-top.md',
          '/ja/reference/plugin/container.md',
          '/ja/reference/plugin/google-analytics.md',
          '/ja/reference/plugin/medium-zoom.md',
          '/ja/reference/plugin/nprogress.md',
          '/ja/reference/plugin/register-components.md',
        ],
      },
      {
        text: 'コンテンツ検索',
        children: [
          '/ja/reference/plugin/docsearch.md',
          '/ja/reference/plugin/search.md',
        ],
      },
      {
        text: 'PWA',
        children: [
          '/ja/reference/plugin/pwa.md',
          '/ja/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: '構文ハイライト',
        children: [
          '/ja/reference/plugin/prismjs.md',
          '/ja/reference/plugin/shiki.md',
        ],
      },
      {
        text: 'テーマ開発',
        children: [
          '/ja/reference/plugin/active-header-links.md',
          '/ja/reference/plugin/debug.md',
          '/ja/reference/plugin/git.md',
          '/ja/reference/plugin/palette.md',
          '/ja/reference/plugin/theme-data.md',
          '/ja/reference/plugin/toc.md',
        ],
      },
    ],
  },
  {
    text: '詳細を知る',
    children: [
      {
        text: '高度な内容',
        children: [
          '/ja/advanced/architecture.md',
          '/ja/advanced/plugin.md',
          '/ja/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/ja/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'その他の資料',
        children: [
          '/ja/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新ログ',
        link:
          'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/ja/',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/ja/',
      },
    ],
  },
]
