import {extend} from 'flarum/extend';
import app from 'flarum/app';
import DiscussionListState from 'flarum/states/DiscussionListState';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

/* global m */

export default function () {
    app.routes.bookmarks = {
        path: '/bookmarks',
        component: IndexPage,
    };

    extend(IndexPage.prototype, 'navItems', function (items) {
        if (!app.session.user) {
            return;
        }

        items.add('bookmarks', LinkButton.component({
            href: app.route('bookmarks', app.search.stickyParams()),
            icon: 'fas fa-bookmark',
        }, app.translator.trans('clarkwinkelmann-bookmarks.forum.page.link')));
    });

    extend(IndexPage.prototype, 'setTitle', function () {
        if (app.current.get('routeName') === 'bookmarks') {
            app.setTitle(app.translator.trans('clarkwinkelmann-bookmarks.forum.page.title'));
        }
    });

    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        if (app.current.get('routeName') === 'bookmarks') {
            params.filter.q = (params.filter.q || '') + ' is:bookmarked';
        }
    });
}
