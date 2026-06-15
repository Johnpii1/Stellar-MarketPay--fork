/** @jest-environment node */
describe("node-env", () => {
  it("runs in node", () => {
    expect(1+1).toBe(2);
  });
});
