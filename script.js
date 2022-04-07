function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log("I learn " + lang);
  callback();
}

learnJS("JavaScript", function () {
  console.log("I passed the 3rd lesson");
});

function learnJS(lang, callback) {
  console.log("I learn " + lang);
  callback();
}

function done() {
  console.log("I passed the 3rd lesson");
}
learnJS("JavaScript", done);
