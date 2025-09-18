## Fitoko ランディングページ開発プロジェクト

### 概要

このプロジェクトは、ゲーム感覚のフィットネス iOS アプリ「Fitoko」のランディングページを実装したものです。Figma のデザインを基に、React と Tailwind CSS を使用して構築されています。

### サイト仕様

- **フレームワーク**: React
- **スタイリング**: Tailwind CSS
- **インタラクティブ要素**: React アイランド（MiniGame など）
- **フォーム**: Resend でメール送信、待機リスト登録は Cloudflare D1 or KV（後差替可）
- **デプロイ**: Cloudflare Pages
- **対応デバイス**: モバイルファースト（375px〜）、タブレット、デスクトップ

### ファイル構成

```
fitoko-landing/
├── .git/
├── dist/
│   ├── assets/
│   │   ├── ... (画像ファイル)
│   ├── favicon.ico
│   └── index.html
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── ... (画像ファイル)
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── components.json
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

### 調整依頼

このプロジェクトのコードをレビューし、以下の点を中心に調整をお願いします。

1.  **コードの品質向上**:

    - コンポーネントの分割や再利用性を高めるリファクタリング
    - 可読性や保守性を向上させるためのコードの整理
    - 不要なコードやコメントの削除

2.  **パフォーマンスの最適化**:

    - 画像の遅延読み込み（lazy loading）の実装
    - バンドルサイズの削減
    - その他、パフォーマンス向上に繋がる改善

3.  **インタラクティブ要素の実装**:

    - 待合室参加フォームのメール送信機能（Resend を使用）
    - Cloudflare D1 または KV への待機リスト登録機能
    - その他、インタラクティブな要素の追加や改善

4.  **その他**:
    - アクセシビリティの向上
    - SEO 対策

上記の調整を進めてください。
