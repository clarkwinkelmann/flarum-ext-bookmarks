import app from 'flarum/app';
import SettingsModal from './components/SettingsModal';

app.initializers.add('clarkwinkelmann-bookmarks', () => {
    app.extensionSettings['clarkwinkelmann-bookmarks'] = () => app.modal.show(new SettingsModal());
});
