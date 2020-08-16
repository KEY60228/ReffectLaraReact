<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  {{-- CSRF Token --}}
  <meta name="csrf-token" content="{{ csrf_token() }}">
  
  {{-- Scripts --}}
  <script defer src="{{ mix('js/index.js') }}"></script>

  <title>{{ config('app.name', 'Laravel') }}</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>