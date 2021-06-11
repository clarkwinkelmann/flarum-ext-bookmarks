import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import Badge from 'flarum/common/components/Badge';
import Discussion from 'flarum/common/models/Discussion';

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
