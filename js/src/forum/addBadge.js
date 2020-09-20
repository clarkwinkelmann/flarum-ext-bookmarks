import {extend} from 'flarum/extend';
import app from 'flarum/app';
import Badge from 'flarum/components/Badge';
import Discussion from 'flarum/models/Discussion';

export default function () {
    extend(Discussion.prototype, 'badges', function (badges) {
        if (this.attribute('bookmarked')) {
            badges.add('bookmarked', Badge.component({
                label: app.translator.trans('clarkwinkelmann-bookmarks.forum.badge'),
                icon: 'fas fa-bookmark',
                type: 'bookmark',
            }));
        }
    });
}
