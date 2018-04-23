(function ($) {
    var inlineSize = function (el) {
        var hiddenStyle = 'left:-10000px;top:-10000px;height:auto;width:auto;position:absolute;';
        var clone       = document.createElement('div');

        document.all ? clone.style.setAttribute('cssText', hiddenStyle) : clone.setAttribute('style', hiddenStyle);
        clone.innerHTML = el.html();
        parent.document.body.appendChild(clone);
        var rect = {width: clone.clientWidth, height: clone.clientHeight};
        parent.document.body.removeChild(clone);

        return rect;
    };

    $.fn.SlideText = function (options) {
        // Настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
        var settings = $.extend({
            'element': '.slidetext__content',
            'speed'  : 177 // px\sec
        }, options);

        // Поддерживаем цепочки вызовов
        return this.each(function () {
            var elemContent = $(this).find(settings.element);
            var sizes       = inlineSize($(this));
            var distance    = sizes.width - $(this).width();
            var time        = distance / settings.speed; // time (sec) = distance / speed

            //console.log({
            //    'sizes.width': sizes.width,
            //    'distance'   : distance,
            //    'time'       : time
            //});

            elemContent.css({
                'transition-property'       : 'margin-left',
                'transition-duration'       : time + 's',
                'transition-timing-function': 'linear'
            });

            $(this).mouseover(function () {
                elemContent.css('margin-left', '-' + distance + 'px');
            }).mouseout(function () {
                elemContent.css('margin-left', '0');
            });
        });
    };
})(jQuery);