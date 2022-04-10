<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

define( 'WP_TOPURL', 'https://insomnia.roughlang.com' );
define( 'WP_HOME', 'https://insomnia.roughlang.com/ac' );
define( 'WP_SITEURL', 'https://insomnia.roughlang.com/ac' );
define( 'WP_ENVPATH', '../../.env' );

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'LAA1288950-ideerghlng' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'LAA1288950' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', 'YFdNqW8AQxpf' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'mysql154.phy.lolipop.lan' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=vxe8($]j)IW`h%&WHAL:5CpP6ZfD#0 YC]fobxFBkYK)8F|oHlXR3>0;T~HsL(d' );
define( 'SECURE_AUTH_KEY',  ' EZ7W)|s U(lJ|,)5#+lb=or(XfWY%<S%bT]{MRaxKv)CwPtA;04{~9sbGb{Ouy}' );
define( 'LOGGED_IN_KEY',    '$uAv~gVjC[3-GUCDvd~;t@r7:7*fbd%3MsaqnCL}x!SSkjyFyoPF90YrSxUC)F;y' );
define( 'NONCE_KEY',        '?s|^u[}A~I*2]U6exfXV;3,b;a.~Q_F+wBzb9Wf[Dozd7N/oALhRB#:#c~[vJcPy' );
define( 'AUTH_SALT',        'eK0X -LJ{)BR=-a[1Ab`!a1`uaU*wz.p<(XiIu?_`hdgK=*4^-.wVXDNS1.3tKi[' );
define( 'SECURE_AUTH_SALT', 'J3^e_4@E7@l|i,exn[qN5jag7=:Ib4Kr(0xV;4={.>@~])=!y{{Fa2$Q{-!)cBEe' );
define( 'LOGGED_IN_SALT',   '3jz }j/At$)8n=:S*dR~3?9G! Q@a?%1!I7O7xE{uJgYu!LMobtavq@{bCvF/uwD' );
define( 'NONCE_SALT',       '&zY.S}}FhnUk^p!,E.ML!,~EmE25n.?6W;LEk*^/qs,~sfcdhU9@yVJ&DBeularS' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* カスタム値は、この行と「編集が必要なのはここまでです」の行の間に追加してください。 */



/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/**
 * Get env information from .env of Laravel.
 */
$envs = @file_get_contents(WP_ENVPATH);
function get_env($envs) {
	$lara_env = [];
	$rows = explode("\n", $envs);
	$i = 0;
	foreach ($rows as $row) {
		@list($para, $value) = explode("=", $row);
		// echo $i."-".$para.":".$value."\n";
		if (!empty($para) && !empty($value)) {
			$lara_env = $lara_env + array($para => $value);
		}
		$i++;
	}	
	return $lara_env;
}

define ('WPLANG', 'ja');
