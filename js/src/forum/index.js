import app from 'flarum/forum/app';
import addBadge from './addBadge';
import { default as addDiscussionControls, bookmarkButton } from './addDiscussionControls';
import addPage from './addPage';

app.initializers.add('clarkwinkelmann-bookmarks', () => {
    addBadge();
    addDiscussionControls();
    addPage();
});

export { bookmarkButton }
