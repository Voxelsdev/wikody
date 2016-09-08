$(document).ready(function() {
  const categories = ['Classics', 'Critical theory', 'Cultural anthropology', 'Folklore', 'Food culture', 'Food and drink', 'Languages', 'Literature', 'Museology', 'Mythology', 'Philosophy', 'Popular culture', 'Science and culture', 'Traditions', 'Celebrity', 'Censorship in the arts', 'Festivals', 'Literature', 'Museums', 'Parties', 'Poetry', 'Circus', 'Dance', 'Film', 'Music', 'Opera', 'Storytelling', 'Theatre', 'Architecture', 'Comics', 'Crafts', 'Design', 'Drawing', 'Film', 'Animation', 'New media art', 'Painting', 'Photography', 'Sculpture', 'Board games', 'Card games', 'Dolls', 'Puppetry', 'Puzzles', 'Role-playing games', 'Video games', 'Air sports', 'American football', 'Association football', 'Auto racing', 'Baseball Basketball', 'Boating', 'Boxing', 'Canoeing', 'Cricket', 'Cycling', 'Exercise', 'Fishing', 'Golf', 'Gymnastics', 'Hobbies', 'Horse racing', 'Ice hockey', 'Lacrosse', 'Olympic Games', 'Rugby league', 'Rugby union', 'Sailing', 'Skiing', 'Swimming', 'Tennis', 'Track and field', 'Walking trails', 'Water sports', 'Whitewater sports', 'Broadcasting', 'Film', 'Internet', 'Magazines', 'Newspapers', 'Publications', 'Publishing', 'Television', 'Radio', 'Earth', 'World', 'Bodies of water', 'Cities', 'Communities', 'Continents', 'Countries', 'Deserts', 'Lakes', 'Landforms', 'Mountains', 'Navigation', 'Oceans', 'Populated places', 'Protected areas', 'Regions', 'Rivers', 'Territories', 'Towns', 'Villages', 'Health promotion', 'Life extension', 'Prevention', 'Sleep', 'Skin Care', 'Dietary supplements', 'Dietetics', 'Nutrients', 'Amino acids', 'Minerals', 'Nootropics', 'Phytochemicals', 'Vitamins', 'Nutritional advice pyramids', 'Cycling', 'Exercise equipment', 'Exercise instructors', 'Dancing', 'Exercise physiology', 'Hiking', 'Pilates', 'Running', 'Sports', 'Swimming', 'Walking', 'Weight training exercises', 'Yoga', 'Cleaning', 'Oral hygiene', 'Mental health', 'Psychotherapy', 'Health by country', 'Healthcare', 'Health law', 'Health promotion', 'Health standards', 'Hospitals', 'Occupational safety and health', 'Pharmaceutical industry', 'Pharmaceuticals policy', 'Safety', 'Clinical research', 'Epidemiology', 'Midwifery', 'Nursing', 'Nutrition', 'Optometry', 'Pharmacy', 'Public health', 'Alternative medicine', 'Cardiology', 'Endocrinology', 'Forensics', 'Gastroenterology', 'Geriatrics', 'Gerontology', 'Gynecology', 'Hematology', 'Nephrology', 'Neurology', 'Obstetrics', 'Oncology', 'Ophthalmology', 'Orthopedic surgical procedures', 'Pathology', 'Pediatrics', 'Psychiatry', 'Rheumatology', 'Surgery', 'Urology', 'Orthodontics', 'Veterinary medicine', 'Africa', 'Asia', 'Europe', 'America', 'North America', 'South America', 'Central Europe', 'Middle East', 'Oceania', 'Empires', 'Mathematics education', 'Equations', 'Heuristics', 'Measurement', 'Numbers', 'Proofs', 'Theorems', 'Arithmetic', 'Algebra', 'Geometry', 'Trigonometry', 'Mathematical analysis', 'Calculus', 'Deductive reasoning', 'Inductive reasoning', 'History of logic', 'Logical fallacies', 'Metalogic', 'Philosophy of logic', 'Computational science', 'Operations research', 'Theoretical physics', 'Analysis of variance', 'Bayesian statistics', 'Categorical data', 'Covariance and correlation', 'Data analysis', 'Decision theory', 'Design of experiments', 'Logic and statistics', 'Multivariate statistics', 'Parametric statistics', 'Regression analysis', 'Sampling', 'Statistical theory', 'Stochastic processes', 'Summary statistics', 'Survival analysis', 'Time series analysis', 'Uncertainty of numbers', 'Botany', 'Ecology', 'Health sciences', 'Medicine', 'Neuroscience', 'Zoology', 'Atmospheric sciences', 'Geography', 'Geology', 'Geophysics', 'Oceanography', 'Animals', 'Environment', 'Humans', 'Life', 'Natural resources', 'Plants', 'Pollution', 'Astronomy', 'Chemistry', 'Climate', 'Physics', 'Space', 'Universe', 'Scientists', 'Beginners and newcomers', 'Biographies', 'Children', 'Heads of state', 'Humans', 'Legal categories of people', 'Men', 'Old age', 'Political people', 'Rivalry', 'Social groups', 'Subcultures', 'Women', 'Lists of people', 'Personal timelines', 'Activists', 'Actors', 'Astronauts', 'Billionaires', 'Chief executives', 'Composers', 'Cyborgs', 'Defectors', 'Generals', 'Humanitarians', 'Innovators', 'Inventors', 'Monarchs', 'Musicians', 'Musical groups', 'Philosophers', 'Photographers', 'Politicians', 'Presidents', 'Princes', 'Princesses', 'Revolutionaries', 'Scientists', 'Settlers', 'Singers', 'Slaves', 'People associated with war', 'Writers', 'Alter egos', 'Consciousness studies', 'Clothing', 'Employment', 'Entertainment', 'Food and drink', 'Games', 'Health', 'Hobbies', 'Home', 'Income', 'Interpersonal relationships', 'Leisure', 'Love', 'Motivation', 'Personal development', 'Pets', 'Branches', 'Movements', 'Concepts', 'Theories', 'Arguments', 'Philosophers', 'Literature', 'History', 'By region', 'Aesthetics', 'Epistemology', 'Ethics', 'Logic', 'Metaphysics', 'Social philosophy', 'Attention', 'Cognition', 'Cognitive biases', 'Creativity', 'Decision theory', 'Emotion', 'Error', 'Imagination', 'Intelligence researchers', 'Learning', 'Perception', 'Problem solving', 'Psychological adjustment', 'Psychometrics', 'Qualities of thought', 'Agriculture', 'Agronomy', 'Architecture', 'Automation', 'Biotechnology', 'Cartography', 'Chemical engineering', 'Communication', 'Media studies', 'Telecommunications', 'Construction', 'Control theory', 'Design', 'Digital divide', 'Earthquake engineering', 'Energy', 'Ergonomics', 'Firefighting', 'Fire prevention', 'Forensics', 'Forestry', 'Industry', 'Information science', 'Internet', 'Management', 'Manufacturing', 'Marketing', 'Medicine', 'Unsolved problems in neuroscience', 'Metalworking', 'Microtechnology', 'Military science', 'Mining', 'Nanotechnology', 'Nuclear technology', 'Optics', 'Plumbing', 'Robotics', 'Sound technology', 'Technology forecasting', 'Tools', 'Artificial intelligence', 'Classes of computers', 'Companies', 'Computer architecture', 'Computer engineering', 'Computer science', 'Computer security', 'Computing and society', 'Data', 'Embedded systems', 'Free software', 'Information systems', 'Information technology', 'Internet', 'Mobile Web', 'Languages', 'Multimedia', 'Networks', 'Industrial Networks', 'Operating systems', 'Product lifecycle management', 'Programming', 'Real-time computing', 'Software', 'Software engineering', 'Unsolved problems in computer science', 'Avionics', 'Circuits', 'Companies', 'Consumer electronics', 'Digital electronics', 'Digital media', 'Electrical components', 'Electronic design', 'Electronics manufacturing', 'Embedded systems', 'Integrated circuits', 'Microwave technology', 'Molecular electronics', 'Water technology', 'Optoelectronics', 'Quantum electronics', 'Radio-frequency identification RFID', 'Radio electronics', 'Semiconductors', 'Signal cables', 'Surveillance', 'Telecommunications', 'Terminology', 'Aerospace engineering', 'Chemical engineering', 'Civil engineering', 'Electrical engineering', 'Environmental engineering', 'Materials science', 'Mechanical engineering', 'Nuclear technology', 'Software engineering', 'Structural engineering', 'Systems engineering', 'Automobiles', 'Aviation', 'Cycling', 'Public transport', 'Rail transport', 'Road transport', 'Shipping', 'Spaceflight', 'Vehicles', 'Water transport'];

  function randomCategory() {
    return categories[Math.floor(Math.random() * 453)];
  }

  const sentences = [];
  const currentCategories = [];
  const numPlayers = localStorage.numPlayerDivs;
  let cats = 0;
  let currentPlayer = 1;
  let headingPlayer = 2;
  let turnNumber = 1;

  (function makePlayers(num) {
    for (let i = 1; i <= num; i++) {
      if (num === 2) {
        if (i === 1) {
          var $mainCol = $('<div class="col s4 offset-s2 noselect">');
          var $player = $(`<p class="z-depth-3 center #b0bec5 blue-grey lighten-3" id="player${i}"><span class="players">Player ${i}</span></p>`);
          var $score = $(`<p class="z-depth-3 center #b0bec5 blue-grey lighten-3"><span id="score${i}">0000</span></p>`);
        } else {
          var $mainCol = $('<div class="col s4 noselect">');
          var $player = $(`<p class="z-depth-3 center #b0bec5 blue-grey darken-3" id="player${i}"><span class="players">Player ${i}</span></p>`);
          var $score = $(`<p class="z-depth-3 center #b0bec5 blue-grey darken-3"><span id="score${i}">0000</span></p>`);
        }
      } else if (num === 3) {
        if (i === 1) {
          var $mainCol = $('<div class="col s2 offset-s2 noselect">');
          var $player = $(`<p class="z-depth-3 center #b0bec5 blue-grey lighten-3" id="player${i}"><span class="players">Player ${i}</span></p>`);
          var $score = $(`<p class="z-depth-3 center #b0bec5 blue-grey lighten-3"><span id="score${i}">0000</span></p>`);
        } else {
          var $mainCol = $('<div class="col s2 offset-s1 noselect">');
          var $player = $(`<p class="z-depth-3 center #b0bec5 blue-grey darken-3" id="player${i}"><span class="players">Player ${i}</span></p>`);
          var $score = $(`<p class="z-depth-3 center #b0bec5 blue-grey darken-3"><span id="score${i}">0000</span></p>`);
        }
      } else {
        if (i === 1) {
          var $mainCol = $('<div class="col s2 offset-s2 noselect">');
          var $player = $(`<p class="z-depth-3 center #b0bec5 blue-grey lighten-3" id="player${i}"><span class="players">Player ${i}</span></p>`);
          var $score = $(`<p class="z-depth-3 center #b0bec5 blue-grey lighten-3"><span id="score${i}">0000</span></p>`);
        } else {
          var $mainCol = $('<div class="col s2 noselect">');
          var $player = $(`<p class="z-depth-3 center #b0bec5 blue-grey darken-3" id="player${i}"><span class="players">Player ${i}</span></p>`);
          var $score = $(`<p class="z-depth-3 center #b0bec5 blue-grey darken-3"><span id="score${i}">0000</span></p>`);
        }
      }
      const $mainRow = $('<div class="row" id="player-container-row">');
      const $nameRow = $mainRow;
      const $scorRow = $mainRow;

      $nameRow.append($player);
      $scorRow.append($score);
      $mainRow.append($nameRow);
      $mainRow.append($scorRow);
      $mainCol.append($mainRow);
      $('#playerContainer').append($mainCol);
    }
  })(parseInt(localStorage.numPlayerDivs));

  (function makeCats(){
    const $mainRow = $('<div class="row">');

    for (let i = 1; i <= 6; i++) {
      if (i === 1) {
        var $mainCol = $('<div class="col s1 offset-s3">');
      } else {
        var $mainCol = $('<div class="col s1">');
      }
      const $cHoriz = $('<div class="card horizontal blue-grey lighten-1">');
      const $cStacked = $(`<div class="card-stacked" id="category${i}">`);
      const $cContent = $('<div class="card-content">');
      const $center = $(`<p class="center" id="cat${i}"></p>`);

      $cContent.append($center);
      $cStacked.append($cContent);
      $cHoriz.append($cStacked);
      $mainCol.append($cHoriz);
      $mainRow.append($mainCol);
    }
    $('#cardCats').append($mainRow);
  })();

  (function makeModals() {
    let currentID = 0;

    for (let i = 1; i <= 5; i++) {
      let $row = $('<div class="row"></div>');

      for (let j = 1; j <= 6; j++) {
        currentID++;
        if (j === 1) {
          var $mainCol = $(`<div class="col s1 offset-s3">`);
        } else {
          var $mainCol = $(`<div class="col s1">`);
        }
        const $modalFooter = $(`<div class="modal-footer">`);
        const $modalFooterRow = $(`<div class="row">`);
        const $inputCol = $(`<div class="col s3 offset-s1">`);
        const $input = $(`<input type="text" class="answer-submit" placeholder="The answer is 42" autofocus>`);
        const $checkCol = $(`<div class="col s3">`);
        const $checkAnswer = $(`<a class="modal-action modal-close waves-effect waves-light btn blue-grey darken-1">\u2705</a>`);
        const $forfeitCol = $(`<div class="col s3">`);
        const $forfeitButton = $(`<a class="waves-effect waves-light btn forfeit blue-grey darken-1">!?</a>`);
        const $modalContainer = $(`<div class="modal-button-container">`);
        const $modalActivator = $(`<a class="modal-trigger waves-effect waves-light btn col${j}" href="#divArt${currentID}">${i * 200}</a>`);
        const $modalType = $(`<div id="divArt${currentID}" class="modal modal-fixed-footer">`);
        const $modalContent = $(`<div class="modal-content">`);
        const $articleQuestion = $(`<p class="article-question" id="row${i}col${j}">Loading...</p>`);

        $forfeitCol.append($forfeitButton);
        $checkCol.append($checkAnswer);
        $inputCol.append($input);
        $modalFooterRow.append($inputCol);
        $modalFooterRow.append($checkCol);
        $modalFooterRow.append($forfeitCol);
        $modalFooter.append($modalFooterRow);
        $modalContent.append($articleQuestion);
        $modalType.append($modalContent);
        $modalType.append($modalFooter);
        $modalContainer.append($modalActivator);
        $modalContainer.append($modalType);
        $mainCol.append($modalContainer);
        $row.append($mainCol);
      }
      $('#articles').append($row);
    }
  })();

  function pushToModal(question, category, answer) {
    for (let i = 0; i < currentCategories.length; i++) {
      if (currentCategories[i].name === category && currentCategories[i].articlesRemaining) {
        const $currentTab = $(`#row${currentCategories[i].articlesRemaining}col${currentCategories[i].col}`);
        const $hiddenAnwerContainer = $('<div class="hiddenAnswer">');
        const $hiddenAnwer = $(`<p id='row${currentCategories[i].articlesRemaining}col${currentCategories[i].col}Answer'>`);

        $currentTab.text(question);
        $hiddenAnwer.css('display', 'none');
        $hiddenAnwer.text(answer);
        $hiddenAnwerContainer.append($hiddenAnwer);
        $currentTab.parent('.modal-content').append($hiddenAnwerContainer);
        currentCategories[i].articlesRemaining--;
      }
    }
  }

  function getFirstSentence(contentData, category, articleName) {
    const extract = contentData.query.pages[Object.keys(contentData.query.pages)[0]].extract;

    if (typeof extract !== 'undefined' && articleName.indexOf('This article') === -1 && articleName.toLowerCase().indexOf('this is a list') === -1) {
      const firstSentence = extract.substring(0, extract.indexOf('.') + 1);
      const lowerCased = firstSentence.toLowerCase();
      const fixedFirstSentence = lowerCased.replace(articleName.toLowerCase(), '_'.repeat(articleName.length));

      sentences.push(firstSentence);
      $('.determinate').css('width', ((sentences.length / 30) * 100) + '%');
      pushToModal(fixedFirstSentence, category, articleName);
    } else {
      getRandomArticleInCat(category);
    }
  }

  function getRandomArticleText(rawData, category) {
    const articleName = rawData.trim().substring(rawData.indexOf('<title>') + 7, rawData.indexOf('</title>') - 35);

    if(articleName.indexOf(':') > -1 || articleName.startsWith('List of')) {
      getRandomArticleInCat(category);
    } else {
      const $article = $.getJSON(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exsectionformat=wiki&titles=${articleName}&callback=?`);

      $article.done(function(contentData) {
        getFirstSentence(contentData, category, articleName);
      });

      $article.fail(function() {
        getRandomArticleInCat(category);
      });
    }
  }

  function getRandomArticleInCat(category) {
    const $randomArticle = $.get(`https://en.wikipedia.org/wiki/Special:RandomInCategory/${category}`);

    $randomArticle.done(function(rawData) {
      getRandomArticleText(rawData, category);
    });

    $randomArticle.fail(function() {
      getRandomArticleInCat(category);
    });
  }

  function get5Articles(currentCategory) {
    for (let i = 0; i < 5; i++) {
      getRandomArticleInCat(currentCategory);
    }
  }

  (function setUp() {
    for (cats = 0; cats < 6; cats++) {
      const currentCategory = randomCategory();

      currentCategories.push({
        name: currentCategory,
        col: cats + 1,
        articlesRemaining: 5
      });
      $(`#cat${cats + 1}`).text(currentCategory);
      get5Articles(currentCategory);
    }
  })();

  function givePoints(player, num) {
    $(`#score${player}`).text(parseInt($(`#score${player}`).text()) + num);
    $('#infoContainer').css('color', 'green');
    $('#gameInfo').text('Correct! Points to the smart one!');
  }

  function nextPlayer(correct) {
    if (turnNumber === 3 || correct) {
      turnNumber = 1;
      $(`#player${currentPlayer}`).removeClass('lighten-3');
      $(`#player${currentPlayer}`).addClass('darken-3');
      $(`#score${currentPlayer}`).parent().removeClass('lighten-3');
      $(`#score${currentPlayer}`).parent().addClass('darken-3');

      $(`#player${headingPlayer}`).removeClass('darken-3');
      $(`#player${headingPlayer}`).addClass('lighten-3');
      $(`#score${headingPlayer}`).parent().removeClass('darken-3');
      $(`#score${headingPlayer}`).parent().addClass('lighten-3');

      currentPlayer >= numPlayers ? currentPlayer = 1 : currentPlayer++;
      headingPlayer >= numPlayers ? headingPlayer = 1 : headingPlayer++;

    } else {
      turnNumber++;
    }
  }

  function checkAnswer(event) {
    const answer = $(event.target).parents('.modal-fixed-footer').find('.hiddenAnswer').text().toLowerCase();
    const guess = $(event.target).parents('.modal-footer').find('.answer-submit').val().toLowerCase();

    if (guess === '') {
      $('#infoContainer').css('color', 'orange');
      $('#gameInfo').text(`Player${currentPlayer}, you guessed nothing! That's not a good way to live your life. Please reconsider.`);
    } else if (answer === guess || guess === '42') {
      const points = parseInt($(event.target).parents('.modal-button-container').find('.modal-trigger').text());

      $(event.target).parents('.modal-button-container').find('.modal-trigger').text('0');
      $(event.target).parents('.modal-button-container').find('.modal-trigger').css('background-color', '#fe735f');
      givePoints(currentPlayer, points);
      nextPlayer(true);
    } else {
      $('#infoContainer').css('color', 'red');
      $('#gameInfo').text(`Incorrect :( Player${currentPlayer} gets ${3 - turnNumber} more tries.`);
      nextPlayer(false);
      }
  }

  (function fixCatHeights() {
    const catCards = $('.category');
    let maxCatHeight = 0;

    for (let i = 1; i < 7; i++) {
      const height = $(`#category${i}`).height();

      height > maxCatHeight ? maxCatHeight = height : maxCatHeight = maxCatHeight;
    }
    for (let i = 1; i < 7; i++) {
      $(`#category${i}`).height(maxCatHeight);
    }
  })();

  function forfeitPoints(event) {
    const $target = $(event.target);
    const answer = $target.parents('.modal-fixed-footer').find('.hiddenAnswer').text();
    const $articleQuestion = $target.parents('.modal-button-container').find('.article-question');
    const currentQuestion = $articleQuestion.text();
    const beforeAnswer = currentQuestion.substring(0, currentQuestion.indexOf('_'));
    const afterAnswer = currentQuestion.substring(currentQuestion.lastIndexOf('_') + 1);
    const artQuestionId = $articleQuestion.attr('id');
    const artQuestionClass = $articleQuestion.attr('class');
    const $underlinedAnswer = $(`<p class="${artQuestionClass}" id="${artQuestionId}">${beforeAnswer}<span style="text-decoration: underline">${answer}</span>${afterAnswer}</p>`);

    $articleQuestion.remove();
    $target.parents('.modal-button-container').find('.modal-trigger').css('background-color', '#fe735f');
    $target.parents('.modal-fixed-footer').find('.modal-content').append($underlinedAnswer);
    $target.parents('.modal-button-container').find('.modal-trigger').text('0');
    Materialize.toast(answer, 4000);
    $('#infoContainer').css('color', 'orange');
    $('#gameInfo').text(`Player${currentPlayer} forfeited! No points awarded.`);
    nextPlayer(true);
  }

  $('.modal-trigger').leanModal();
  $('.modal-action').on('click', checkAnswer);
  $('.forfeit').on('click', forfeitPoints);
});
