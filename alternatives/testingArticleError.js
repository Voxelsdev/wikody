let failedArticles = [];

function addFailure(category){
  for (var i = 0; i < failedArticles.length; i++) {
    if(failedArticles[i].categoryName === category){
      failedArticles[i].failedTimes++;
    }
  }
  fixFailures();
}

function fixFailures(){
  for (var i = 0; i < failedArticles.length; i++) {
    if(failedArticles[i].failedTimes){
      requestNewArticle(failedArticles[i].categoryName);
      failedArticles[i].failedTimes--;
    }
  }
}

function requestNewArticle(category){
  getRandomArticleInCat(category);
}

function getRandomArticleText(rawData, category){
  let articleName = rawData.trim().substring(rawData.indexOf('<title>') + 7, rawData.indexOf('</title>') - 35);

  if(articleName.indexOf(':') > -1 || articleName.startsWith('List of')) {
    addFailure(category);
  } else {
    let $article = $.getJSON(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exsectionformat=wiki&titles=${articleName}&callback=?`);

    $article.done(function(contentData){
      getFirstSentence(contentData, category);
    });

    $article.fail(function(err){
      console.log(err);
    })
  }
}
//when you select a category, push an object with the category title as a .name property and .failed# into failedAricles
