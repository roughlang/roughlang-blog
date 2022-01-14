@extends('layouts.app')

@section('title', 'Gallery')

@section('content_block')
<div class="container lw-contents-block mt60 mb60">
  <div class="row">
    <div class="col-md-9">
      <h2 class="mb20">Gallery</h2>
      <ul>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
        <li><a href="#">xxxxxxxxxxxxx</a></li>
      </ul>
    </div>
    <div class="col-md-3 blog-sidebar">
      @include('include/sidebar') 
    </div>
  </div>
</div>
@endsection