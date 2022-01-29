# lwbase

## Introduction

The lwbase is laravel8 + wordpess(newest) web application.

Web: http://lwbase.roughlang.com/
Github: https://github.com/roughlang/lwbase

Git clone
```
$ git clone https://github.com/roughlang/lwbase.git lwbase
```

- Laravel8
    - db session
    - ui / auth
    - Bootstrap5
    - [ikonate](https://ikonate.com/)

## Docker for lwbase

Change to the app directory.
```
$ cd lwbase
$ cd app
```

Preparation of storage directory.
```
$ mkdir -p storage/framework/app/cache
$ mkdir -p storage/framework/app/compile
$ mkdir -p storage/framework/cache/data
$ mkdir -p storage/framework/sessions
$ mkdir -p storage/framework/views
$ mkdir -p storage/logs
```
In some cases.
```
$ chmod 777 storage/framework/app/cache
$ chmod 777 storage/framework/app/compile
$ chmod 777 storage/framework/cache/data
$ chmod 777 storage/framework/sessions
$ chmod 777 storage/framework/views
$ chmod 777 storage/logs
```
Composer update.
```
$ php composer.phar update
```
set `.env`
```
$ cp -p .env.example .env
```
exec docker
```
$ ./vendor/bin/sail build --no-cache  
$ ./vendor/bin/sail up -d
$ docker-compose down && docker-compose up -d
$ docker-compose ps
```
access: http://localhost:8000


## Create databse and connect

access: http://localhost:8000/pma/index.php  

and create database `lwbase_app`
```
user: root  
password: (empty)
```

or login to docker container and exec to create database
```
$ docker-compose ps
$ docker exec -it app_mysql_1 /bin/bash
bash-4.4# mysql -u root
mysql> show databases;
mysql> create database lwbase_app character set utf8mb4;
```

exec by artisan to exec.
```
$ ./vendor/bin/sail artisan migrate
````
success.

## Wordpress install (GUI auto)

We usually do the initial setup in the Wordpress GUI.
Information for database to connect
```
databse: lwbase_app
user: root
password: (empty)
host: mysql
```
Wordpress user for example.
```
user: user
password: password
```
http://localhost:8000/ac/wp-admin

## Wordpress install (Command manually)

You can also install it manually using subdata (unofficial). You manually create wp-config.php and restore the mysql database data.

```
$ docker cp ../subdata/lwbase_app.sql app_mysql_1:/tmp/lwbase_app.sql
$ docker exec -it app_mysql_1 /bin/bash
bash-4.4# ls /tmp
lwbase_app.sql
mysql -u root lwbase_app < /tmp/lwbase_app.sql
```

### Wordpress plugins

- Classic Editor
- Classic Widgets
- Akismet Spam Protection (Akismet スパム保護)
- WP Githuber MD – WordPress Markdown Editor

## Utility

Laravel version
```
$ ./vendor/bin/sail artisan --version
```
php version
```
$ ./vendor/bin/sail php --version
```
or http://localhost:8000/phpinfo


## Front

```
$ ./vendor/bin/sail npm install
$ ./vendor/bin/sail npm run dev
```

## Reference

- [Font Awesome](https://fontawesome.com/)
- [Bootstrap5](https://getbootstrap.jp/)