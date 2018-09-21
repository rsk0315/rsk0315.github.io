$(window).on('load', function() {
    $('.cmd-in, .cmd-cont').prepend($('<span class="space">'));
    $.each($('.cmd-out>span'), function() {
        var text = $(this).text();
        $(this).attr({'data-content': text});
        $(this).text('');
    });

    $('.cmd-in').before($('<span class="ps1">'));
    $('.cmd-root').prev().addClass('ps1-root');
    if (document.queryCommandSupported('copy')) {
        $('.ps1').attr({
            'data-toggle': 'tooltip',
            'data-trigger': 'manual',
            title: 'Copied!',
        });
    }

    $('.ps1').click(function() {
        window.getSelection().removeAllRanges();
        try {
            var range = document.createRange();
            // 連続で Copy すると Copied! がコピーされる不具合（仕様）
            // セレクタをよしなにやったらいいはずです
            var selected = $(this).next()[0];
            // console.log($(this));
            if (selected.id.startsWith('tooltip')) {
                // あきらめます（は？）
                // 選択範囲がアになるんですが
                return;
            }

            // console.log(selected);
            range.selectNode(selected);
            window.getSelection().addRange(range);
            document.execCommand('copy');
            $(this).tooltip('show');
            var _this = this;
            setTimeout(function() { $(_this).tooltip('hide'); }, 800);

            // remove selection from tooltip
            range.selectNode(selected);
        } catch (err) {
            console.log(err);
        }
    });

    $('.ps1').tooltip();
});
