<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  {{-- Roboto Font --}}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

  {{-- Japanese Font --}}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese" />

  {{-- Font Icons --}}
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

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