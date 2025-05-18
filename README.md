## 環境構築方法

```bash
git clone https://github.com/YoshihiroIzakai/real-sns.git
cd real-sns

フロントエンドのセットアップ
cd frontend
npm install
npm start

バックエンドのセットアップ
cd ../backend
npm install
npm start
```

## 環境変数の設定
```bash
- frontend/.env  
  -REACT_APP_PUBLIC_FOLDER：バックエンドサーバーのURL

- backend/.env
  -MONGOURL：MongoDBの接続URL
```

## 技術スタック
```bash
フロントエンド
- React：UIライブラリ
- Axios：API通信
- React Router：ルーティング
- CSS：スタイル

バックエンド
- Node.js：サーバーサイドJavaScriptランタイム
- Express：Node.js用Webフレームワーク
- JWT（JSON Web Token）：認証と認可
- Mongoose：MongoDBのオブジェクトデータモデリング

データベース
- MongoDB：NoSQLデータベース
- Mongoose：スキーマベースのMongoDBモデル
```
