$( document ).ready(function() {
  let categories = [  'Classics', 'Critical theory', 'Cultural anthropology', 'Folklore', 'Food culture', 'Food and drink', 'Languages',
                      'Literature', 'Museology', 'Mythology', 'Philosophy', 'Popular culture', 'Science and culture', 'Traditions',
                      'Arts and crafts', 'Celebrity', 'Censorship in the arts', 'Festivals', 'Humor', 'Literature', 'Museums', 'Parties', 'Poetry',
                      'Circus', 'Dance', 'Film', 'Music', 'Opera', 'Storytelling', 'Theatre', 'Architecture', 'Comics', 'Crafts', 'Design',
                      'Drawing', 'Film', 'Animation', 'New media art', 'Painting', 'Photography', 'Sculpture', 'Board games', 'Card games',
                      'Dolls', 'Puppetry', 'Puzzles', 'Role-playing games', 'Video games', 'Air sports', 'American football', 'Association football',
                      'Auto racing', 'Baseball Basketball', 'Boating', 'Boxing', 'Canoeing', 'Cricket', 'Cycling', 'Exercise', 'Fishing',
                      'Golf', 'Gymnastics', 'Hobbies', 'Horse racing', 'Ice hockey', 'Lacrosse', 'Olympic Games', 'Rugby league',
                      'Rugby union', 'Sailing', 'Skiing', 'Swimming', 'Tennis', 'Track and field', 'Walking trails', 'Water sports',
                      'Whitewater sports', 'Broadcasting', 'Film', 'Internet', 'Magazines', 'Newspapers', 'Publications', 'Publishing', 'Television', 'Radio',
                      'Earth', 'World', 'Bodies of water', 'Cities', 'Communities', 'Continents', 'Countries', 'Deserts', 'Lakes', 'Landforms',
                      'Mountains', 'Navigation', 'Oceans', 'Populated places', 'Protected areas', 'Regions', 'Rivers', 'Subterranea', 'Territories',
                      'Towns', 'Villages', 'Health promotion', 'Life extension', 'Prevention', 'Sleep', 'Skin Care', 'Dietary supplements',
                      'Dietetics', 'Nutrients', 'Amino acids', 'Minerals', 'Nootropics', 'Phytochemicals', 'Vitamins', 'Nutritional advice pyramids',
                      'Aerobics', 'Bodyweight exercise (Calisthenics)', 'Cycling', 'Exercise equipment', 'Exercise instructors', 'Dancing',
                      'Exercise physiology', 'Hiking', 'Pilates', 'Running', 'Sports', 'Swimming', 'Walking', 'Weight training exercises', 'Yoga',
                      'Cleaning', 'Oral hygiene', 'Mental health', 'Psychotherapy', 'Health by country', 'Healthcare', 'Health law', 'Health promotion',
                      'Health standards', 'Hospitals', 'Occupational safety and health', 'Pharmaceutical industry', 'Pharmaceuticals policy', 'Safety',
                      'Clinical research', 'Diseases', 'Epidemiology', 'Midwifery', 'Nursing', 'Nutrition', 'Optometry', 'Pharmacy', 'Public health',
                      'Alternative medicine', 'Cardiology', 'Endocrinology', 'Forensics', 'Gastroenterology', 'Human Genetics', 'Geriatrics',
                      'Gerontology', 'Gynecology', 'Hematology', 'Nephrology', 'Neurology', 'Obstetrics', 'Oncology', 'Ophthalmology',
                      'Orthopedic surgical procedures', 'Pathology', 'Pediatrics', 'Psychiatry', 'Rheumatology', 'Surgery', 'Urology',
                      'Dental hygiene', 'Orthodontics', 'Veterinary medicine', 'Africa', 'Asia', 'Europe', 'America', 'North America',
                      'South America', 'Central Europe', 'Middle East', 'Oceania', 'Empires', 'Mathematics education', 'Equations', 'Heuristics',
                      'Measurement', 'Numbers', 'Proofs', 'Theorems', 'Arithmetic', 'Algebra', 'Geometry', 'Trigonometry', 'Mathematical analysis', 'Calculus',
                      'Deductive reasoning', 'Inductive reasoning', 'History of logic', 'Logical fallacies', 'Metalogic', 'Philosophy of logic',
                      'Computational science', 'Operations research', 'Theoretical physics', 'Analysis of variance', 'Bayesian statistics', 'Categorical data',
                      'Covariance and correlation', 'Data analysis', 'Decision theory', 'Design of experiments', 'Logic and statistics', 'Multivariate statistics',
                      'Non-parametric statistics', 'Parametric statistics', 'Regression analysis', 'Sampling', 'Statistical theory', 'Stochastic processes',
                      'Summary statistics', 'Survival analysis', 'Time series analysis', 'Uncertainty of numbers', 'Botany', 'Ecology', 'Health sciences',
                      'Medicine', 'Neuroscience', 'Zoology', 'Atmospheric sciences', 'Geography', 'Geology', 'Geophysics', 'Oceanography',
                      'Animals', 'Environment', 'Humans', 'Life', 'Natural resources', 'Plants', 'Pollution', 'Astronomy', 'Chemistry',
                      'Climate', 'Physics', 'Space', 'Universe', 'Scientists', 'Beginners and newcomers', 'Biographies', 'Children',
                      'Heads of state', 'Humans', 'Legal categories of people', 'Men', 'Old age', 'Political people', 'Rivalry', 'Social groups',
                      'Subcultures', 'Women', 'Lists of people', 'Personal timelines', 'Activists', 'Actors', 'Astronauts', 'Billionaires',
                      'Chief executives', 'Composers', 'Cyborgs', 'Defectors', 'Generals', 'Humanitarians', 'Innovators', 'Inventors', 'Monarchs',
                      'Musicians', 'Musical groups', 'Philosophers', 'Photographers', 'Politicians', 'Presidents', 'Princes', 'Princesses',
                      'Revolutionaries', 'Scientists', 'Settlers', 'Singers', 'Slaves', 'Victims', 'People associated with war', 'Writers',
                      'Alter egos', 'Consciousness studies', 'Clothing', 'Employment', 'Entertainment', 'Food and drink', 'Games',
                      'Health', 'Hobbies', 'Home', 'Income', 'Interpersonal relationships', 'Leisure', 'Love', 'Motivation', 'Personal development', 'Pets',
                      'Branches', 'Schools and traditions', 'Movements', 'Concepts', 'Theories', 'Arguments', 'Philosophers', 'Literature',
                      'History', 'By period', 'By region', 'Aesthetics', 'Epistemology', 'Ethics', 'Logic', 'Metaphysics', 'Social philosophy',
                      'Attention', 'Cognition', 'Cognitive biases', 'Creativity', 'Decision theory', 'Emotion', 'Error', 'Imagination',
                      'Intelligence researchers', 'Learning', 'Perception', 'Problem solving', 'Psychological adjustment', 'Psychometrics',
                      'Qualities of thought', 'Agriculture', 'Agronomy', 'Architecture', 'Automation', 'Biotechnology', 'Cartography',
                      'Chemical engineering', 'Communication', 'Media studies', 'Telecommunications', 'Construction', 'Control theory',
                      'Design', 'Digital divide', 'Earthquake engineering', 'Energy', 'Ergonomics', 'Firefighting', 'Fire prevention',
                      'Forensics', 'Forestry', 'Industry', 'Information science', 'Internet', 'Management', 'Manufacturing', 'Marketing',
                      'Medicine', 'Unsolved problems in neuroscience', 'Metalworking', 'Microtechnology', 'Military science', ',Mining',
                      'Nanotechnology', 'Nuclear technology', 'Optics', 'Plumbing', 'Robotics', 'Sound technology', 'Technology forecasting',
                      'Tools', 'Artificial intelligence', 'Classes of computers', 'Companies', 'Computer architecture', 'Computer model',
                      'Computer engineering', 'Computer science', 'Computer security', 'Computing and society', 'Data', 'Embedded systems',
                      'Free software', 'Human–computer interaction', 'Information systems', 'Information technology', 'Internet', 'Mobile Web',
                      'Languages', 'Multimedia', 'Networks', 'Industrial Networks', 'Operating systems', 'Platforms', 'Product lifecycle management',
                      'Programming', 'Real-time computing', 'Software', 'Software engineering', 'Unsolved problems in computer science',
                      'Avionics', 'Circuits', 'Companies', 'Connectors', 'Consumer electronics', 'Digital electronics',
                      'Digital media', 'Electrical components', 'Electronic design', 'Electronics manufacturing', 'Embedded systems',
                      'Integrated circuits', 'Microwave technology', 'Molecular electronics', 'Water technology', 'Optoelectronics', 'Quantum electronics',
                      'Radio-frequency identification RFID', 'Radio electronics', 'Semiconductors', 'Signal cables', 'Surveillance',
                      'Telecommunications', 'Terminology', 'Aerospace engineering', 'Bioengineering', 'Chemical engineering',
                      'Civil engineering', 'Electrical engineering', 'Environmental engineering', 'Materials science', 'Mechanical engineering',
                      'Nuclear technology', 'Software engineering', 'Structural engineering', 'Systems engineering', 'Automobiles', 'Aviation',
                      'Cycling', 'Public transport', 'Rail transport', 'Road transport', 'Shipping', 'Spaceflight', 'Vehicles', 'Water transport'];

  function randomCategory() {
    return categories[ Math.floor( Math.random() * 469 ) ];
  }

  for(let i = 0; i < 6; i++) {

    let category = randomCategory();
    $(`#cat${i + 1}`).text(category);

    for(let j = 0; j < 5; j++) {

      let $randomArticle = $.get(`https://en.wikipedia.org/wiki/Special:RandomInCategory/${category}`);

      $randomArticle.fail(function(err){});

      $randomArticle.done(function(data) {

        let articleName = data.trim().substring(data.indexOf('<title>') + 7, data.indexOf('</title>') - 35);

        if(articleName.indexOf(':') > -1 || articleName.startsWith('List of')) {

          //console.log('Bad article!');
          j--;

        } else {

          let $article = $.getJSON(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exsectionformat=wiki&titles=${articleName}&callback=?`);
          //console.log(i, j, category, articleName);
          $article.done(function(data){
            let extract = data.query.pages[Object.keys(data.query.pages)[0]].extract;
            let firstSentence = extract.substring(0, extract.indexOf('.') + 1);
            //console.log('CATEGORY: ' + category, "ARTICLENAME: " + articleName);
            console.log(i * j);
          });

          $article.fail(function(err){
            console.log(err);
          })
        }
      });
    }
  }
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
 });
