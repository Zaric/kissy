﻿/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Dec 7 00:25
*/
/**
 * Add indent button.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/indent/index", function (S, Editor, indexCmd) {

    function Indent() {

    }

    S.augment(Indent, {
        pluginRenderUI:function (editor) {
            indexCmd.init(editor);
            editor.addButton("indent", {
                tooltip:"增加缩进量 ",
                listeners:{
                    click:function () {
                        editor.execCommand("indent");
                        editor.focus();
                    }
                },
                mode:Editor.WYSIWYG_MODE
            });
        }
    });

    return Indent;

}, {
    requires:['editor', './cmd']
});
