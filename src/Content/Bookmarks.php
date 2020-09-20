<?php

namespace ClarkWinkelmann\Bookmarks\Content;

use Flarum\Api\Client;
use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Frontend\Document;
use Flarum\User\User;
use Illuminate\Contracts\Translation\Translator;
use Illuminate\Contracts\View\Factory;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;

class Bookmarks
{
    protected $api;
    protected $view;
    protected $translator;

    public function __construct(Client $api, Factory $view, Translator $translator)
    {
        $this->api = $api;
        $this->view = $view;
        $this->translator = $translator;
    }

    public function __invoke(Document $document, Request $request)
    {
        $queryParams = $request->getQueryParams();
        $actor = $request->getAttribute('actor');

        $sort = Arr::pull($queryParams, 'sort');
        $q = Arr::pull($queryParams, 'q', '');
        $page = Arr::pull($queryParams, 'page', 1);

        $sortMap = $this->getSortMap();

        $params = [
            'sort' => $sort && isset($sortMap[$sort]) ? $sortMap[$sort] : '',
            'filter' => [
                'q' => "$q is:bookmarked",
            ],
            'page' => ['offset' => ($page - 1) * 20, 'limit' => 20],
        ];

        $apiDocument = $this->getApiDocument($actor, $params);

        $document->title = $this->translator->trans('clarkwinkelmann-bookmarks.forum.page.title');
        $document->content = $this->view->make('flarum.forum::frontend.content.index', compact('apiDocument', 'page'));
        $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    private function getSortMap()
    {
        return [
            'latest' => '-lastPostedAt',
            'top' => '-commentCount',
            'newest' => '-createdAt',
            'oldest' => 'createdAt'
        ];
    }

    private function getApiDocument(User $actor, array $params)
    {
        return json_decode($this->api->send(ListDiscussionsController::class, $actor, $params)->getBody());
    }
}
