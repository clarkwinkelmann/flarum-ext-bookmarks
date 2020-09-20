<?php

namespace ClarkWinkelmann\Bookmarks;

use Flarum\Event\ConfigureDiscussionGambits;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less')
        ->route('/bookmarks', 'bookmark', Content\Bookmarks::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    new Extenders\DiscussionAttributes(),
    new Extenders\ForumAttributes(),

    function (Dispatcher $events) {
        $events->listen(ConfigureDiscussionGambits::class, function (ConfigureDiscussionGambits $event) {
            $event->gambits->add(Gambits\BookmarkedGambit::class);
        });
    },
];
