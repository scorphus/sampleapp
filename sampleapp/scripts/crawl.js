// load('sampleapp/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("sampleapp/sampleapp.html","sampleapp/out")
});
