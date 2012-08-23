steal(
  'jquery',
  './sampleapp.css',
  'sampleapp/plugin',
  'steal/coffee'
).then(
  './sampleapp.coffee',
  'sampleapp/plugins/lodash',
  'sampleapp/plugins/qtip2',
  'sampleapp/plugins/toastmessage',
  function() {
    console.log('ready!');
    console.log(_.map([1, 2, 3], function(num) { return num * 3; }));
    $('#stealdoc').click(function(ev) {
      ev.preventDefault();
      console.log('Link clicked!');
      $().toastmessage('showSuccessToast', "Steal docs link was clicked!");
    });
    $('#stealdoc').qtip(); //BANG!
  }
);

