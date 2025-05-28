## 環境構築方法(noseチェック済み)

```bash
git clone git clone git@github.com:YoshihiroIzakai/real-sns.git
cd real-sns

フロントエンドのセットアップ
cd frontend
npm install
npm start

バックエンドのセットアップ
cd ../backend
npm install
chmod +x ./node_modules/.bin/nodemon
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

「新しい変更」
