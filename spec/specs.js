describe('getTitleCase', function() {
  it("capitalizes one letter word", function() {
    expect(getTitleCase("z")).to.equal("Z");
  });

  it("capitalizes multiple letter word", function() {
    expect(getTitleCase("dam")).to.equal("Dam");
  });

  it("capitalizes multiple letter words and more than one word", function() {
    expect(getTitleCase("i have ten pet robots")).to.equal("I Have Ten Pet Robots");
  });

  it("does not capitalize articles", function() {
    expect(getTitleCase("i have a pet robot")).to.equal("I Have a Pet Robot");
  });

  it("capitalizes articles that are the first and last word", function() {
    expect(getTitleCase("a night to dream an")).to.equal("A Night to Dream An");
  });

  it("capitalizes all words in a string but articles, conjuctions, pepositions and infinitives", function() {
    expect(getTitleCase("a cat onto the rug is by the fire")).to.equal("A Cat onto the Rug Is by the Fire");
  });

});
