<?php
/**
 * get value from .env
 */
// var_dump($envs);
$env = get_env($envs);
// var_dump($env["APP_NAME"]);
?>
<nav class="navbar navbar-expand-lg navbar-light">
	<div class="container-fluid">
    <div class="sitename">
      <img src="/assets/img/icon/favicon/android-chrome-36x36.png" alt="Roughlang" class="logo">
      <h1 class="navbar-brand-h1"><a class="navbar-brand" href="/"><?php echo $env["APP_NAME"]; ?></a></h1>
		</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><?php echo $blog_title; ?></a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="<?php echo WP_HOME; ?>"><?php echo $blog_title; ?> top</a></li>
            <li><a class="dropdown-item" href="<?php echo WP_HOME; ?>/categories">Categories</a></li>
            <li><a class="dropdown-item" href="<?php echo WP_HOME; ?>/archives">Archives</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="<?php echo WP_HOME; ?>/gallery">Gallery</a></li>
          </ul>
        </li>
        <li class="nav-item"><a  class="nav-link active" href="/ac/about">About</a></li>
        <li class="nav-item"><a class="nav-link active" href="/login">Log in</a></li>
        <li class="nav-item"><a class="nav-link active" href="/register">Register</a></li>
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
      <form role="search" method="get" id="searchform" class="d-flex searchform" action="/ac/">
        <input class="form-control me-2" type="text" placeholder="Search in documents" aria-label="Search" value="" name="s" id="s">
        <button class="btn" type="submit" id="searchsubmit" value="">
          <img src="/assets/img/item/search.svg" width="24" height="24" alt="search">
        </button>
      </form>

    </div>
  </div>
</nav>