    $('input').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
        if ($.trim($('input').val()).length > 4) {
            $('input').val($('input').val().substr(0,4));
        }
