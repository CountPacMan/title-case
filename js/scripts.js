function getTitleCase(input) {

  var words = input.split(" ");

  var words_uppercase = [];
  words.forEach(function(word) {
    words_uppercase.push(word[0].toUpperCase() + word.substring(1));
  });

  return words_uppercase.join(" ");
}


jQuery(document).ready(function() {
  $("#title-case").submit(function(event) {
    $("#error").empty();

    event.preventDefault();
  });
});
