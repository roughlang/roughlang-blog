# set env

```
php 8.0
```

## Laravel8

git clone
```
$ git clone https://github.com/roughlang/lwbase.git lwbase
```
この時点で500 internal server errorになるので、セットアップを行います。
まずは、キャッシュディレクトリの作成を行います。
```
$ mkdir -p storage/framework/app/cache
$ mkdir -p storage/framework/app/compile
$ mkdir -p storage/framework/cache/data
$ mkdir -p storage/framework/sessions
$ mkdir -p storage/framework/views
$ mkdir -p storage/logs
```
`.env`の作成を行います。
```
$ cp -p .env.example .env
```

## MySQL

各サーバー環境によって設定方法は異なりますが、データベース設定の後に`.env`で接続情報を修正してください。
(例)
```
DB_CONNECTION=mysql
DB_HOST=192.168.1.3
DB_PORT=3306
DB_DATABASE=lwbase_db
DB_USERNAME=user
DB_PASSWORD=password
```
設定後に`artisan migrate`を実行します。


## Error

データベースが作成されていません。
```
SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: Name or service not known (SQL: select * from `sessions` where `id` = 3X6wFO6XGEOiYpl5nrbFwFNmQMhnQ45R3LL0bVEi limit 1)
```