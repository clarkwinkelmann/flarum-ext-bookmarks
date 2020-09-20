import app from 'flarum/app';
import addBadge from './addBadge';
import addDiscussionControls from './addDiscussionControls';
import addPage from './addPage';

app.initializers.add('clarkwinkelmann-bookmarks', () => {
    addBadge();
    addDiscussionControls();
    addPage();
});
