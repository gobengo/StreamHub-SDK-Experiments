# StreamHub SDK Experiment

This experiment requires jQuery and the StreamHub SDK

    require [
        'jquery'
        'streamhub-sdk'
    ], ($, sdk) ->

Create the options that will configure the Livefyre Stream

        opts =
            network: 'labs-t402.fyre.co'
            siteId: '303827'
            articleId: 'sxsw_photos_0'
            environment: 't402.livefyre.com'

Ask the SDK to create us some streams for the Collection pointed to by the options. We'll only use the `streams.main` stream for now, and it will give us real-time data.

When the stream is readable, we'll read data from it and render the data using `renderData`. If the stream ever emits 'end', restart the stream to continue polling.

        sdk.createLivefyreStreams opts, (err, stream) ->

            stream.main.on 'readable', () ->
                renderData stream.main.read()

            stream.main.start()

Once we `.read` data from the stream, we'll render its `authorId` and `bodyHtml` to HTML and prepend it to an element on the page.

        $widget = $('#example')

        renderData = (data) ->
            dataHtml = "<div><p>{{ authorId }}</p><div>{{ bodyHtml }}</div></div>"
                .replace("{{ authorId }}", data.content.authorId)
                .replace("{{ bodyHtml }}", data.content.bodyHtml or '')

            $newEl = $(dataHtml)
            $newEl.prependTo $widget

        return