import {extend} from 'flarum/extend';
import app from 'flarum/app';
import Button from 'flarum/components/Button';
import DiscussionPage from 'flarum/components/DiscussionPage';
import DiscussionControls from 'flarum/utils/DiscussionControls';

function bookmarkButton(discussion, translation, className = '') {
    const bookmarked = discussion.attribute('bookmarked');

    return Button.component({
        className: className + (bookmarked ? ' Button--bookmarked' : ''),
        icon: bookmarked ? 'fas fa-bookmark' : 'far fa-bookmark',
        onclick() {
            discussion.save({
                bookmarked: !bookmarked,
            }).then(() => {
                m.redraw();
            });
        },
    }, app.translator.trans('clarkwinkelmann-bookmarks.forum.' + translation + '.' + (bookmarked ? 'remove' : 'add')));
}

export default function () {
    extend(DiscussionControls, 'userControls', (items, discussion, context) => {
        if (!app.session.user || (app.forum.attribute('independentBookmarkButton') && context instanceof DiscussionPage)) {
            return;
        }

        items.add('bookmark', bookmarkButton(discussion, 'dropdownButton'));
    });

    extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
        if (!app.session.user || !app.forum.attribute('independentBookmarkButton')) {
            return;
        }

        items.add('bookmark', bookmarkButton(this.discussion, 'independentButton', 'Button Button--bookmark'));
    });
}
