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

全体の感想
全体として、フロントエンドとバックエンドの両方を体験できたのがとても良い経験になりました。実際に動くアプリを自分の手で作ることができ、開発の流れや構成を具体的に理解することができた。

個人的にはフロントエンドの開発が特に面白かったです。理由としては、自分が設計したコードが実際に動いているのをすぐに見れるので面白かったです。

その他として、フロントエンドとの接続の際にエラーが出て詰まることもありましたが、その分動いた時の感動もあり、両方を理解しておくことの大切さを実感しました。


