import Derangement from "./Derangement";

test("creating derangement of length 1 throws error", () => {
  expect(() => {
    let d = new Derangement(1);
  }).toThrow();
});

test("creating derangement of negative length throws error", () => {
  expect(() => {
    let d = new Derangement(-3);
  }).toThrow();
});

test("can get length", () => {
  expect(new Derangement(5).getLength()).toBe(5);
});

test("all items of derangement are within boundaries", () => {
  let d = new Derangement(6);
  for (let i = 0; i < d.getLength(); i++) {
    const item = d.getElement(i);
    expect(item).toBeLessThan(6);
    expect(item).toBeGreaterThanOrEqual(0);
  }
});

test("no item points to itself", () => {
  let d = new Derangement(6);
  for (let i = 0; i < d.getLength(); i++) expect(d.getElement(i)).not.toBe(i);
});

test("all items are distinct", () => {
  let d = new Derangement(6);
  let allItems = [];
  for (let i = 0; i < d.getLength(); i++) allItems.push(d.getElement(i));
  expect(new Set(allItems).size).toBe(d.getLength());
});
