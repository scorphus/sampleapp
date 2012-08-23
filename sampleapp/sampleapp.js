steal(
  'jquery',
  './sampleapp.css',
  'sampleapp/plugin',
  'steal/coffee'
).then(
  './sampleapp.coffee',
  'sampleapp/plugins/qtip2',
  function() {
    console.log('ready!');
    $('#stealdoc').click(function(ev) {
      ev.preventDefault();
      console.log('Link clicked!');
    });
    $('#stealdoc').qtip();
  }
);

