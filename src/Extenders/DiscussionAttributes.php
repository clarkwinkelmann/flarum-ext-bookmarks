<?php

namespace ClarkWinkelmann\Bookmarks\Extenders;

use Carbon\Carbon;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Event\Saving;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class DiscussionAttributes implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(Serializing::class, [$this, 'attributes']);
        $container['events']->listen(Saving::class, [$this, 'saving']);
    }

    public function attributes(Serializing $event)
    {
        if ($event->isSerializer(DiscussionSerializer::class)) {
            $event->attributes['bookmarked'] = $event->model->state ? !is_null($event->model->state->bookmarked_at) : false;
        }
    }

    public function saving(Saving $event)
    {
        if (isset($event->data['attributes']['bookmarked'])) {
            $event->actor->assertRegistered();

            $state = $event->discussion->stateFor($event->actor);

            $state->bookmarked_at = $event->data['attributes']['bookmarked'] ? Carbon::now() : null;
            $state->save();
        }
    }
}
