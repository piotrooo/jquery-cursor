/*!
 * jQuery cursor
 * https://github.com/piotrooo/jquery-cursor
 *
 * Copyright 2013 Piotr Olaszewski
 * Released under the MIT license
 */
(function ($) {
    $.fn.setAtTheBegin = function () {
        return this.each(function () {
            _cursorSetSelectionRange(this, 0, 0);
        });
    };

    $.fn.setAtTheEnd = function () {
        return this.each(function () {
            var _this = $(this);
            var len = _this.val().length;
            _cursorSetSelectionRange(this, len, len);
        });
    };

    $.fn.setRange = function (begin, end) {
        if ((!begin || !end) || begin >= end) {
            throw 'Incorrect range';
        }

        return this.each(function () {
            _cursorSetSelectionRange(this, begin, end);
        });
    };

    $.fn.setAtThePosition = function (position) {
        return this.each(function () {
            _cursorSetSelectionRange(this, position, position);
        });
    };

    function _cursorSetSelectionRange(input, start, end) {
        if (input.setSelectionRange) {
            input.setSelectionRange(start, end);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.moveStart('character', start);
            range.moveEnd('character', end);
            range.select();
        }
    }
})(jQuery);
