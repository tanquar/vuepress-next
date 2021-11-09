# アセット

## 相対URL

Markdownコンテンツでは、以下のように相対URLを使ってアセットを参照することができます。

```md
![画像](./image.png)
```

ユーザーは通常、画像を参照するMarkdownファイルの近くにその画像を配置するため、画像の取り込み方法としてはこれが一般的に推奨されます。

## 公開のファイル

静的アセットはpublicディレクトリに置くことができます。ここに置いたアセットは、ビルドで生成されるディレクトリのルートにコピーされます。

デフォルトのpublicディレクトリは`.vuepress/public`ですが、設定で変更することもできます。

これは、以下のようなケースで便利です。

- どのMarkdownファイルからも直接参照されない静的アセットを用意する必要がある (faviconやPWAアイコンなど)
- サイト外からも参照される可能性のある共有の静的アセットを用意する必要がある (ロゴ画像など)
- Markdownコンテンツ内で絶対URLを使って画像を参照したい

このドキュメントのソースファイルを例にとると、VuePressのロゴをpublicディレクトリに置いています。

```bash
└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # <- ロゴファイル
   └─ guide
      └─ assets.md       # <- 現在のページ
```

現在のページからは、以下のようにロゴを参照することができます。

**入力**

```md
![VuePressのロゴ](/images/hero.png)
```

**出力**

![VuePressのロゴ](/images/hero.png)

::: tip
設定リファレンス：[public](../reference/config.md#public)
:::

### baseヘルパー

ルート以外のURLにデプロイする場合、つまり[base](../reference/config.md#base)が`"/"`でない場合は、publicファイルの絶対URLの前に`base`を付ける必要があります。

例えば`https://foo.github.io/bar/`にサイトをデプロイする予定であれば、`base`を`"/bar/"`に設定し、Markdownでは以下のようにしてpublicファイルを参照します。

```md
![VuePressのロゴ](/bar/images/hero.png)
```

「base」を他のものに変更する必要が生じると、この方法は明らかに不便です。これが、相対URLで静的アセットを参照することが推奨される理由です。

それを助けるため、VuePressは正しいパスを生成する組み込みのヘルパーとして`$withBase`を提供しています。

```md
<img :src="$withBase('/images/hero.png')" alt="VuePressのロゴ">
```

baseヘルパーは、Markdownでは冗長になります。テーマやプラグインの開発者なら、より便利に活用できる可能性があります。

::: tip
設定リファレンス：[base](../reference/config.md#base)
:::

## パッケージとパスのエイリアス

あまり一般的な使い方ではありませんが、依存関係のパッケージに含まれる画像を参照することもできます。

```bash
npm install -D パッケージ名
```

```md
![依存関係に含まれる画像](パッケージ名/image.png)
```

設定ファイルで指定されたパスのエイリアスもサポートされます。

```js
module.exports = {
  alias: {
    '@alias': path.resolve(__dirname, './path/to/some/dir'),
  },
}
```

```md
![パスのエイリアスが指す画像](@alias/image.png)
```

::: tip
設定リファレンス：[エイリアス](../reference/config.md#alias)
:::
