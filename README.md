# roadmap

## 博士修了までの統合ロードマップ

2026年7月から2030年3月までの研究、留学、インターン、就活、住居、資金、生活を、9ページの個人ダッシュボードとして整理しています。

公開ページ: https://aki41105.github.io/roadmap/

## ページ

- `/roadmap/` — 現在地、次の90日、締切、判断、リスク
- `/roadmap/research/` — 研究・学位
- `/roadmap/research-stays/` — 国内・海外研究滞在
- `/roadmap/internships/` — 企業研究インターン
- `/roadmap/career/` — 就職・キャリア
- `/roadmap/finance-life/` — お金・住居・車
- `/roadmap/wellbeing/` — 生活・健康・人間関係
- `/roadmap/timeline/` — D1〜D3の36か月計画、月別・四半期・3年間表示
- `/roadmap/decisions/` — 判断・リスク・資料
- `/roadmap/legacy/` — 2026年7月26日時点の改修前バックアップ

## 編集する場所

- `src/data.ts` — 旧ページから移行した詳細データの原本
- `src/data/` — 予定、組織、研究、資金、判断、出典の共通データ
- `src/data/doctoralSchedule.ts` — 2027年4月〜2030年3月の36か月、12四半期、8判断点の原本
- `src/pages/` — 9ページの表示内容
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

公開用の9ページを生成して検査する場合:

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` は型検査、ブラウザ用ビルド、静的プリレンダリング、全9ルート・canonical・主要HTML・アセットの確認を行います。主要本文はHTMLへ書き出されるため、JavaScriptが無効でも読めます。

## 公開

`main` ブランチへの更新を GitHub Actions が自動的に GitHub Pages へ公開します。
