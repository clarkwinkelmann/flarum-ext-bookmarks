<?php

namespace ClarkWinkelmann\Bookmarks\Gambits;

use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\AbstractSearch;
use Illuminate\Database\Query\Builder;

class BookmarkedGambit extends AbstractRegexGambit
{
    protected $pattern = 'is:bookmarked';

    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        $actor = $search->getActor();

        $method = $negate ? 'whereNotIn' : 'whereIn';
        $search->getQuery()->$method('id', function (Builder $query) use ($actor) {
            $query->select('discussion_id')
                ->from('discussion_user')
                ->where('user_id', $actor->id)
                ->whereNotNull('bookmarked_at');
        });
    }
}
