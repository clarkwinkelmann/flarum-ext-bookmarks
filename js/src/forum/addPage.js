import {extend} from 'flarum/extend';
import app from 'flarum/app';
import DiscussionList from 'flarum/components/DiscussionList';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

/* global m */

export default function () {
    extend(IndexPage.prototype, 'navItems', function (items) {
        if (!app.session.user) {
            return;
        }

        const params = this.stickyParams();

        params.filter = 'bookmarks';

        items.add('bookmarks', LinkButton.component({
            href: app.route('index.filter', params),
            icon: 'fas fa-bookmark',
        }, app.translator.trans('clarkwinkelmann-bookmarks.forum.page.link')));
    });

    extend(IndexPage.prototype, 'config', function (out, isInitialized) {
        if (isInitialized) {
            return;
        }

        if (this.props.routeName === 'index.filter' && m.route.param('filter') === 'bookmarks') {
            app.setTitle(app.translator.trans('clarkwinkelmann-bookmarks.forum.page.title'));
        }
    });

    extend(DiscussionList.prototype, 'requestParams', function (params) {
        if (this.props.params.filter === 'bookmarks') {
            params.filter.q = (params.filter.q || '') + ' is:bookmarked';
        }
    });
}
