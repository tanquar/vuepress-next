import type { SidebarConfig } from '@vuepress/theme-default'

export const ja: SidebarConfig = {
  '/ja/guide/': [
    {
      text: 'ガイド',
      children: [
        '/ja/guide/README.md',
        '/ja/guide/getting-started.md',
        '/ja/guide/configuration.md',
        '/ja/guide/page.md',
        '/ja/guide/markdown.md',
        '/ja/guide/assets.md',
        '/ja/guide/i18n.md',
        '/ja/guide/deployment.md',
        '/ja/guide/theme.md',
        '/ja/guide/plugin.md',
        '/ja/guide/bundler.md',
        '/ja/guide/migration.md',
      ],
    },
  ],
  '/ja/advanced/': [
    {
      text: '詳細を知る',
      children: [
        '/ja/advanced/architecture.md',
        '/ja/advanced/plugin.md',
        '/ja/advanced/theme.md',
      ],
    },
    {
      text: 'クックブック',
      children: [
        '/ja/advanced/cookbook/README.md',
        '/ja/advanced/cookbook/usage-of-client-app-enhance.md',
        '/ja/advanced/cookbook/adding-extra-pages.md',
        '/ja/advanced/cookbook/extending-a-theme.md',
        '/ja/advanced/cookbook/passing-data-to-client-code.md',
        '/ja/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/ja/reference/': [
    {
      text: 'VuePressの参考資料',
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
  ],
  '/ja/reference/bundler/': [
    {
      text: 'バンドラーの参考資料',
      children: [
        '/ja/reference/bundler/webpack.md',
        '/ja/reference/bundler/vite.md',
      ],
    },
  ],
  '/ja/reference/default-theme/': [
    {
      text: 'デフォルトのテーマの参考資料',
      children: [
        '/ja/reference/default-theme/config.md',
        '/ja/reference/default-theme/frontmatter.md',
        '/ja/reference/default-theme/components.md',
        '/ja/reference/default-theme/markdown.md',
        '/ja/reference/default-theme/styles.md',
      ],
    },
  ],
  '/ja/reference/plugin/': [
    {
      text: 'プラグインの参考資料',
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
  ],
}
