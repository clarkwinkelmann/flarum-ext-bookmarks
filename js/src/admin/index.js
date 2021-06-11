import app from 'flarum/admin/app';

app.initializers.add('clarkwinkelmann-bookmarks', () => {
    app.extensionData
        .for('clarkwinkelmann-bookmarks')
        .registerSetting({
            setting: 'bookmarks.independentButton',
            label: app.translator.trans('clarkwinkelmann-bookmarks.admin.settings.independentButton'),
            type: 'boolean',
        });
});
