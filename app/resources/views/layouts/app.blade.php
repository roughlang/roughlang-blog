<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
	
</head>
<body>
<div class="topbar"></div>
@include('include/nav')
@yield('top_banner')
@yield('content_block')

@include('include/footer')
</body>
</html>





