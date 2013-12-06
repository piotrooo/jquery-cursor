jQuery cursor
=============

jQuery plugin to manipultaing cursor inside text and textarea fields

Usage
-----

### setAtTheBegin

Set cursor at the begining in text field.

```js
$('textarea').setAtTheBegin().focus();
```

### setAtTheEnd

Set cursor at the end of text field.

```js
$('textarea').setAtTheEnd().focus();
```

### setRange

Select text in user defined range. If range is incorrect throw exception.

```js
$('textarea').setRange(13, 17).focus();
```

### setAtThePosition

Set cursor on the position.

```js
$('textarea').setAtThePosition(13).focus();
```
