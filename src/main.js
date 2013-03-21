// Generated by CoffeeScript 1.6.2
(function() {
  require(['jquery', 'streamhub-sdk'], function($, sdk) {
    var $widget, opts, renderData;
    opts = {
      network: 'labs-t402.fyre.co',
      siteId: '303827',
      articleId: 'sxsw_photos_0',
      environment: 't402.livefyre.com'
    };
    sdk.createLivefyreStreams(opts, function(err, stream) {
      stream.main.on('end', function() {
        return stream.main.start();
      });
      stream.main.on('readable', function() {
        return renderData(stream.main.read());
      });
      return stream.main.start();
    });
    $widget = $('#example');
    renderData = function(data) {
      var $newEl, dataHtml;
      dataHtml = "<div><p>{{ authorId }}</p><div>{{ bodyHtml }}</div></div>".replace("{{ authorId }}", data.content.authorId).replace("{{ bodyHtml }}", data.content.bodyHtml || '');
      $newEl = $(dataHtml);
      return $newEl.prependTo($widget);
    };
  });

}).call(this);
