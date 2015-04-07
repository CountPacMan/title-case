function getTitleCase(input) {
  var ignore = ["a", "an", "the", "and", "but", "or", "nor", "at", "by", "for", "from", "in", "into", "of", "off", "on", "onto", "out", "up", "with", "to", "as"];
  var words = input.split(" ");

  var words_uppercase = [];
  words.forEach(function(word, index) {
    var isNotExceptionWord = ignore.indexOf(word) === -1;
    var isFirstOrLastWord = index === 0 || index === words.length - 1;

    if (isFirstOrLastWord || isNotExceptionWord) {
      words_uppercase.push(word[0].toUpperCase() + word.substring(1));
    } else {
      words_uppercase.push(word);
    }
  });

  return words_uppercase.join(" ");
}


jQuery(document).ready(function() {
  $("#title-case").submit(function(event) {
    var title = $("#title").val();
    var proper_title = getTitleCase(title);
    $("#proper-title").text(proper_title);
    $("#result").show();
    $("#title").val("");
    event.preventDefault();
  });
});
