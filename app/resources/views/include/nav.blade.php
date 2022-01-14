<nav class="navbar navbar-expand-lg navbar-light">
	<div class="container-fluid">
		<h1 class="navbar-brand-h1"><a class="navbar-brand" href="{{ env('APP_URL') }}">lwbase</a></h1>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarScroll">
				<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="{{ env('APP_URL') }}">Home</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle active" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
						<ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
							<li><a class="dropdown-item" href="/ac">Top</a></li>
							<li><a class="dropdown-item" href="/ac/category">Category</a></li>
							<li><a class="dropdown-item" href="/ac/archives">Archives</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="/ac/gallery">Gallery</a></li>
						</ul>
					</li>
					@if (Route::has('login'))
						@auth
						<li class="nav-item"><a class="nav-link active" href="{{ url('/home') }}">Home</a></li>
						@else
						<li class="nav-item"><a class="nav-link active" href="{{ route('login') }}">Log in</a></li>
							@if (Route::has('register'))
							<li class="nav-item"><a class="nav-link active" href="{{ route('register') }}">Register</a></li>
							@endif
						@endauth
					@endif
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle active" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
						<ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
							<li><a class="dropdown-item" href="/vue">vue.js</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</li>
				</ul>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn" type="submit">
						<img src="/assets/img/item/search.svg" width="24" height="24" alt="search">
					</button>
				</form>
			</div>
  	</div>
  </nav>