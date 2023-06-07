describe.skip("Description of test suite", () => {
  before(() => {
    console.log("runs once before the first test in this block");
  });

  after(() => {
    console.log("runs after lat test in this block");
  });

  beforeEach(() => {
    console.log("runs after each test in block");
  });

  afterEach(() => {
    console.log("runs after each test in block");
  });

  it("Individual test 1", () => {
    console.log("execute code: Individual test 1");
  });
  it("Individual test 2", () => {
    console.log("execute code: Individual test 2");
  });
});
