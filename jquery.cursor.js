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
            this.setSelectionRange(0, 0);
        });
    };

    $.fn.setAtTheEnd = function () {
        return this.each(function () {
            var _this = $(this);
            var len = _this.val().length;
            this.setSelectionRange(len, len);
        });
    };

    $.fn.setRange = function (begin, end) {
        if ((!begin || !end) || begin >= end) {
            throw 'Incorrect range';
        }

        return this.each(function () {
            this.setSelectionRange(begin, end);
        });
    };

    $.fn.setAtThePosition = function (position) {
        return this.each(function () {
            this.setSelectionRange(position, position);
        });
    };
})(jQuery);
