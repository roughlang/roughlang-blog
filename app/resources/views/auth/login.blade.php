@extends('layouts.app')

@section('title', 'Login')



@section('content_block')
<div class="container lw-contents-block login-contents-block mt60 mb60">
	<div class="row">
		<div class="col-md-12 login">
			<div class="login-form card mt20">
				<div class="card-header">{{ __('Login') }}</div>
				<div class="card-body">

					<form method="POST" action="{{ route('login') }}">
						@csrf
						<label for="email" class="mt10 mb10">{{ __('E-Mail Address') }}</label>
						<input id="email" type="email" class="mb15 form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
						@error('email')
							<span class="invalid-feedback" role="alert">
								{{ $message }}
							</span>
						@enderror
						<label for="password" class="mt10 mb10">{{ __('Password') }}</label>
						<input id="password" type="password" class="mb15 mb20 form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
						@error('password')
							<span class="invalid-feedback" role="alert">
								{{ $message }}
							</span>
						@enderror
						<input class="form-check-input mt10" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
						<label class="form-check-label mt10" for="remember">{{ __('Remember Me') }}</label>
						<div class="login-button mt10">
							<button type="submit" class="btn btn-secondary">
								{{ __('Login') }}
							</button>
						</div>
						<p class="mt10"> 
						@if (Route::has('password.request'))
						<a href="{{ route('password.request') }}">
							{{ __('Forgot Your Password?') }}
						</a>
						@endif
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection

