<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="all">
  <link rel="canonical" href="{{ url()->current() }}">
	@include('include/favicon')
	<title>@yield('title') | Roughlang</title>
	<link rel="stylesheet" href="/assets/css/_main.css" media="screen">
	<script type="text/javascript" src="/assets/bootstrap5/js/bootstrap.min.js"></script>
	@if(env('APP_ENV') == 'local' || env('APP_ENV') == 'develop')
	<script type="text/javascript" src="/assets/js/vue/vue.js"></script>
	<script type="text/javascript" src="/assets/js/vue/axios.js"></script>
	@else
	<script type="text/javascript" src="/assets/js/vue/vue.min.js"></script>
	<script type="text/javascript" src="/assets/js/vue/axios.min.js"></script>
	@endif
	@if(env('APP_ENV') == 'local' || env('APP_ENV') == 'develop')
	<script type="text/javascript" src="/assets/js/jquery/jquery-3.6.0.js"></script>
	<script type="text/javascript" src="/assets/js/_main/main.js"></script>
	@else
	<script type="text/javascript" src="/assets/js/jquery/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="/assets/js/_main/main-dist.js"></script>
	@endif

	@if(env('APP_ENV') == 'local' || env('APP_ENV') == 'develop' || env('APP_ENV') == 'stg')
	<!-- Global site tag (gtag.js) - Google Analytics local/dev/stg-->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-3N6SQZE3KH"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-3N6SQZE3KH');
	</script>
	@else
	<!-- Global site tag (gtag.js) - Google Analytics prod -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-8F44XSQYV9"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-8F44XSQYV9');
	</script>
	@endif
</head>
<body>
<div class="topbar"></div>
@include('include/nav')
@yield('top_banner')
@yield('content_block')

@include('include/footer')
</body>
</html>





