import app from 'flarum/app';
import BaseSettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

/* global m */

export default class SettingsModal extends BaseSettingsModal {
    title() {
        return app.translator.trans('clarkwinkelmann-bookmarks.admin.settings.title');
    }

    form() {
        return m('.Form-group', Switch.component({
            state: this.setting('bookmarks.independentButton', '1')() === '1',
            onchange: value => {
                this.setting('bookmarks.independentButton')(value ? '1' : '0');
            },
        }, app.translator.trans('clarkwinkelmann-bookmarks.admin.settings.independentButton')));
    }
}
