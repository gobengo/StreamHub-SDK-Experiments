require([
    'jquery',
    'streamhub-sdk'],
function ($, sdk) {
    var opts = {
        network: 'labs-t402.fyre.co',
        siteId: '303827',
        articleId: 'sxsw_photos_0',
        environment: 't402.livefyre.com'
    };
    // Get a LivefyreStream
    sdk.createLivefyreStreams(opts, function (err, stream) {
        stream.main.on('end', function () {
            stream.main.start();
        });
        stream.main.on('readable', function () {
            var data = stream.main.read();
            console.log('Data:',data);
            renderData(data);
        });
        stream.main.start();
    });

    // Create widget to renderData into
    $widget = $('#example');

    function renderData (data) {
        var bodyHtml = data.content.bodyHtml;
        var dataHtml = "<div><p>{{ authorId }}</p>{{ bodyHtml }}</div>"
                .replace('{{ authorId }}', data.content.authorId)
                .replace('{{ bodyHtml }}', bodyHtml || '');
        var $newEl = $(dataHtml);
        $newEl.prependTo($widget);
    }
});