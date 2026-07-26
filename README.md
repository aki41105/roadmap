# roadmap

## 博士修了までの統合ロードマップ

2026年7月から2030年3月までの計画を、5つの入口から確認できる個人ロードマップとして整理しています。

公開ページ: https://aki41105.github.io/roadmap/timeline/

## ページ

- `/roadmap/timeline/` — 全体タイムライン
- `/roadmap/internships/` — インターン・就活
- `/roadmap/overseas/` — 留学
- `/roadmap/domestic/` — 国内滞在研究
- `/roadmap/` — その他

詳しい研究、制度、候補、資金、生活、判断資料は、各入口から開く詳細ページに残しています。
- `/roadmap/legacy/` — 2026年7月26日時点の改修前バックアップ

## 編集する場所

- `src/data.ts` — 旧ページから移行した詳細データの原本
- `src/data/` — 予定、組織、研究、資金、判断、出典の共通データ
- `src/data/doctoralSchedule.ts` — 2027年4月〜2030年3月の36か月、12四半期、8判断点の原本
- `src/pages/` — 5つの入口と詳細ページの表示内容
- `src/components/` — ナビゲーション、状態、表、資料などの共通部品
- `src/styles.css`、`src/app/shell.css` — ロードマップ専用の見た目
- `src/app/routes.ts` — URLとナビゲーション

同じ予定や候補を複数ページで使う場合は、ページへ直接コピーせず、`src/data/` の共通データを参照します。

制度、金額、募集条件、締切は毎年度、公式情報で確認して更新します。

状態は `確定`、`予定`、`候補`、`要確認`、`推定`、`提案`、`進行中`、`完了`、`延期`、`中止` のいずれかを使います。将来年度の予定を、過年度の募集実績だけで確定にしないでください。

36か月スケジュールの実務進捗は、`候補`、`応募準備`、`応募済み`、`面接中`、`採用`、`実施予定`、`進行中`、`成果整理中`、`投稿準備中`、`完了`、`延期`、`中止` を使います。

## ローカル確認

```bash
npm install
npm run dev
```

公開用ページを生成して検査する場合:

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` は型検査、ブラウザ用ビルド、静的プリレンダリング、全ルート・canonical・主要HTML・アセットの確認を行います。主要本文はHTMLへ書き出されるため、JavaScriptが無効でも読めます。

## 公開

`main` ブランチへの更新を GitHub Actions が自動的に GitHub Pages へ公開します。
