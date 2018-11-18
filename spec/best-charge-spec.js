describe('Take out food', function () {

  it('should generate best charge when best is 50% discount on specified items', function() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let summary = bestCharge(inputs).trim();
    let expected = `
============= Order Detail =============
Fried Chicken x 1 = 18 yuan
Hamburger x 2 = 12 yuan
Noodle x 1 = 8 yuan
-----------------------------------
Promotion Applied:
50% discount on specified items(Fried Chicken，Noodle)，saved 13 yuan
-----------------------------------
Total：25 yuan
===================================`.trim()
    expect(summary).toEqual(expected)
  });

  it('should generate best charge when best is Buy 30 save 6 yuan', function() {
    let inputs = ["ITEM0013 x 4", "ITEM0022 x 1"];
    let summary = bestCharge(inputs).trim();
    let expected = `
============= Order Detail =============
Hamburger x 4 = 24 yuan
Noodle x 1 = 8 yuan
-----------------------------------
Promotion Applied:
Buy 30 save 6 yuan，saved 6 yuan
-----------------------------------
Total：26 yuan
===================================`.trim()
    expect(summary).toEqual(expected)
  });

  it('should generate best charge when no promotion can be used', function() {
    let inputs = ["ITEM0013 x 4"];
    let summary = bestCharge(inputs).trim();
    let expected = `
============= Order Detail =============
Hamburger x 4 = 24 yuan
-----------------------------------
Total：24 yuan
===================================`.trim()
    expect(summary).toEqual(expected)
  });

});