$('.summernote-small').on('summernote.keyup', function(we, e) {
    if (typeof all_snippets == 'undefined' || all_snippets == null) {
        console.log('no snippets! disabling keyup event...');
        $('.summernote-small').off('summernote.keyup');
        return false;
    }

    var textBox = $(this);
    var textboxValue = textBox.summernote("code");
    textBox.summernote('editor.saveRange');

    if (e.keyCode == 32) {
        //now check if this typed snippet is same as user saved snippets
        $.each(all_snippets, function(index, val) {
            var re = new RegExp("\\." + val.phrase + '\\.',"g");
            textboxValueChanged = textboxValue.replace(re, val.shortcut);
            if (textboxValueChanged != textboxValue) {
                //$('.summernote-small').summernote("code", textboxValueChanged);
                //$('.summernote-small').summernote({ focus: true });
                textBox.summernote("code", textboxValueChanged);

                textBox.summernote('editor.restoreRange');
                textBox.summernote('editor.focus');
                textBox.summernote('editor.insertText', ' ');
            }
        });
    }

});
