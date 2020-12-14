//　モジュールの読み込み
const express = require('express')
const ejs = require('ejs')
const config = require('config')

//モジュールの追加
const layouts = require('express-ejs-layouts')

// カスタムモジュール 読み込み
const routes = require('./routes')

//設定読み込み
const port = config.server.port
const host = config.server.host

console.log(port)
console.log(host)

//Express 作成
const app = express()

//EJS を有効にする (テンプレートエンジンを利用する)
// app.set('ejs',ejs.renderFile)

//テンプレートエンジンをejs
app.set('view engine','ejs')
//views/layouts/latout.ejsを利用
app.set('layout','layouts/layout')
//レイアウトを有効にする
app.use(layouts)

//ミドルウェア
//JSON
app.use(express.json())

//URLエンコード
app.use(express.urlencoded({ extended: true }))

//静的ファイル有効
app.use(express.static(__dirname + '/public'))

//ミドルウェアルーティング
app.use(routes)
app.use('/',routes)

//ポート: 3000 ホスト: localhost で待機
app.listen(port, host, () => {
    console.log(`app listen: http://${host}:${port}`)
});