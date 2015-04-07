describe('getTitleCase', function() {
  it("capitalizes one letter word", function() {
    expect(getTitleCase("a")).to.equal("A");
  });

  it("capitalizes multiple letter word", function() {
    expect(getTitleCase("dam")).to.equal("Dam");
  });

  it("capitalizes multiple letter words and more than one word", function() {
    expect(getTitleCase("i have ten pet robots")).to.equal("I Have Ten Pet Robots");
  });

  it("does not capitalize articles if not first or last words", function() {
    expect(getTitleCase("i have a pet robot")).to.equal("I Have a Pet Robot");
  });

});
