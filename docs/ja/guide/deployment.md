# デプロイ

このガイドは、以下の前提があるものとして進めます。

- Markdownのソースファイルは、プロジェクトの`docs`ディレクトリ内に配置する。
- ビルドの出力場所には、デフォルトの場所(`.vuepress/dist`)を使用する。
- パッケージマネージャーに[Yarn (クラシック)](https://classic.yarnpkg.com/en/)を使用する (当然npmを使用してもよい)。
- VuePressをプロジェクトのローカルの依存関係としてインストールし、`package.json`に以下のスクリプトを設定している。

```json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

## GitHub Pages

1. [base](../reference/config.md#base)設定を正しく行います。

    `https://<ユーザー名>.github.io/`にデプロイする場合は`base`がデフォルトで`"/"`になるため、このステップは省略できます。

    `https://<ユーザー名>.github.io/<レポジトリ>/`にデプロイする場合、例としてリポジトリが`https://github.com/<ユーザー名>/<レポジトリ>`であれば、`base`を`"/<レポジトリ>/"`にします。

2. お好みのCIツールを選択します。ここでは例として[GitHub Actions](https://github.com/features/actions)を選択します。

    `.github/workflows/docs.yml`を作成して、ワークフローを設定します。

::: details クリックして設定のサンプルを展開
```yaml
name: docs

on:
  # mainブランチへのプッシュでデプロイをトリガーする
  push:
    branches: [main]
  # 手動でデプロイをトリガーする
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # すべてのコミットをfetchして、最終更新時刻やその他のgitログの情報を取得する
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 使用するnode.jsのバージョンを選択する
          node-version: '14'

      # node_modulesをキャッシュする
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # キャッシュがヒットしなかった場合に依存関係のインストールを行う
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # ビルドスクリプトを実行する
      - name: Build VuePress site
        run: yarn docs:build

      # ワークフローの詳細は、ドキュメントを参照
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # gh-pagesブランチにデプロイする
          target_branch: gh-pages
          # VuePressのデフォルトの出力ディレクトリにデプロイする
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
:::

::: tip
詳しくは、[GitHub Pagesの公式ガイド](https://pages.github.com/)を参照してください。
:::

## GitLab Pages

1. [base](../reference/config.md#base)設定を正しく行います。

    `https://<ユーザー名>.gitlab.io/`にデプロイする場合は`base`がデフォルトで`"/"`になるため、このステップは省略できます。

    `https://<ユーザー名>.gitlab.io/<レポジトリ>/`にデプロイする場合、例としてリポジトリが`https://gitlab.com/<ユーザー名>/<レポジトリ>`であれば、`base`を`"/<レポジトリ>/"`にします。

2. `.gitlab-ci.yml`を作成して、[GitLab CI](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/)のワークフローを設定します。

::: details クリックして設定のサンプルを展開
```yaml
# 使用するDockerイメージを選択する
image: node:14-buster

pages:
  # mainブランチへのプッシュでデプロイをトリガーする
  only:
  - main

  # node_modulesをキャッシュする
  cache:
    paths:
    - node_modules/

  # 依存関係をインストールし、ビルドスクリプトを実行する
  script:
  - yarn --frozen-lockfile
  - yarn docs:build --dest public

  artifacts:
    paths:
    - public
```
:::

::: tip
詳細は[GitLab Pagesの公式ガイド](https://docs.gitlab.com/ce/user/project/pages/#getting-started)を参照してください。
:::

## Google Firebase

1. [firebase-tools](https://www.npmjs.com/package/firebase-tools)がインストールされていることを確認します。

2. プロジェクトのルートディレクトリに、以下の内容で`firebase.json`と`.firebaserc`を作成します。

`firebase.json`:

```json
{
  "hosting": {
    "public": "./docs/.vuepress/dist",
    "ignore": []
  }
}
```

`.firebaserc`:

```json
{
  "projects": {
    "default": "<FirebaseのID>"
  }
}
```

3. `yarn docs:build`を実行した後、`firebase deploy`コマンドでデプロイを行います。

::: tip
詳細は[Firebase CLIの公式ガイド](https://firebase.google.com/docs/cli)を参照してください。
:::

## Heroku

1. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)をインストールします。

2. [サインアップ](https://signup.heroku.com)からHerokuのアカウントを作成します。

3. `heroku login`を実行し、Herokuの認証情報を入力します。

```bash
heroku login
```

4. プロジェクトのルートディレクトリに、以下の内容で`static.json`というファイルを作成します。

`static.json`:

```json
{
  "root": "./docs/.vuepress/dist"
}
```

これがサイトの設定になります。詳しくは[heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static)を参照してください。

## Netlify

1. [Netlify](https://netlify.com)で、以下の設定でGitHubからの新規プロジェクトを立ち上げます。

    - **Build Command:** `yarn docs:build`
    - **Publish directory:** `docs/.vuepress/dist`

2. [環境変数](https://docs.netlify.com/configure-builds/environment-variables)を設定し、Nodeのバージョンを選択します。

    - `NODE_VERSION`: 14

3. デプロイボタンを押します。

## Vercel

[VercelでのVuePressアプリの作成とデプロイ](https://vercel.com/guides/deploying-vuepress-to-vercel)を参照してください。
