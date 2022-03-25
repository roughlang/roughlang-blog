@extends('layouts.app')

@section('title', 'Uploader')

@section('content_block')
<div class="container lw-contents-block mt100">
  <div class="row mb100">
    <div class="col-sm-3">
      foobar  
    </div>
    <div class="col-sm-9">
      <form action="/save" method="post"  enctype="multipart/form-data">
        @csrf
        <input type="file" name="a" >
        <input type="submit" >
      </form> 
    </div>
  </div>
</div>
@endsection