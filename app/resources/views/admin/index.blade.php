@extends('layouts.app')

@section('title', 'Admin')

@section('content_block')
<div class="container lw-contents-block admin mt100">
  <div class="row mb100">
    <div class="col-sm-3">
      <ul class="admin-menu">
        <li><a href="{{ route('adminroot', ['slug' => 'admin']) }}">Admin top</a></li>
        <li><a href="{{ route('uploader', ['slug' => 'storage']) }}">Image uploader</a></li>
      </ul>
    </div>
    <div class="col-sm-9">
      <h3 class="mb30">Admin</h3>

      <h4 class="mb20">Super users</h4>
      <p>
        以下に登録されたユーザーのみSuperuserとして管理権限を与えられています。追加削除は、.envのAPP_SUPERUSERSに登録・削除を行います。
        またそれぞれのユーザーは操作拠点のIPアドレスをAPP_ALLOW_GIPに登録します。IPが動的に付与されるDHCPの環境で（例えばスマホやテザリング）は管理者操作ができません。
      </p>
      <table>
        <tr>
          <th>No</th>
          <th>Email</th>
        </tr>
        @php $i=0; @endphp
        @foreach($superusers as $superuser)
        
        <tr>
          <td>{{ $i }}</td>
          <td>{{ $superuser }}</td>
        </tr>
        @php $i++; @endphp
        @endforeach
       
      </table>

      
    </div>
  </div>
</div>
@endsection