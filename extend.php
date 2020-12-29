<?php

namespace ClarkWinkelmann\Bookmarks;

use ClarkWinkelmann\Bookmarks\Listeners\SaveDiscussion;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
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

    (new Extend\Event())
        ->listen(Saving::class, SaveDiscussion::class),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('bookmarked', function (DiscussionSerializer $serializer, Discussion $discussion) {
            return $discussion->state ? !is_null($discussion->state->bookmarked_at) : false;
        }),

    (new Extend\Settings())
        ->serializeToForum('independentBookmarkButton', 'bookmarks.independentButton', function ($value) {
            return $value !== '0';
        }),

    function (Dispatcher $events) {
        $events->listen(ConfigureDiscussionGambits::class, function (ConfigureDiscussionGambits $event) {
            $event->gambits->add(Gambits\BookmarkedGambit::class);
        });
    },
];
