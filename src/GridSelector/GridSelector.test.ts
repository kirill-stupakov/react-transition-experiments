import GridSelector from "./GridSelector";

test("creating 1x1 grid throws error", () => {
    expect(() => {
        let selector = new GridSelector([1, 1]);
    }).toThrow();
})

test("can set size", () => {
    let selector = new GridSelector([2, 3]);
    expect(selector.getDimensions()).toEqual([2,3]);
})

test("can read grid cell", () => {
    let selector = new GridSelector([2, 3]);
    expect(selector.getCellValue([1, 1])).toBeDefined();
})

test("reading incorrect coordinate throws exception", () => {
    let selector = new GridSelector([2, 3]);
    expect(() => selector.getCellValue([-1, 1])).toThrow();
})

test("all grid cell values are within range", () => {
    let selector = new GridSelector([2, 3]);
    for (let i = 0; i < 2; i++)
        for (let j = 0; j < 3; j++) {
            const [x, y] = selector.getCellValue([i, j]);
            expect(x).toBeGreaterThanOrEqual(0);
            expect(x).toBeLessThan(2);
            expect(x).toBeGreaterThanOrEqual(0);
            expect(x).toBeLessThan(3);
        }
})

test("grid cells all have distinct values", () => {
    let selector = new GridSelector([2, 3]);
    let allValues: number[][] = [];
    for (let i = 0; i < 2; i++)
        for (let j = 0; j < 3; j++)
            allValues.push(selector.getCellValue([i, j]));

    for (let i = 0; i < allValues.length; i++)
        for (let j = 0; j < i; j++)
            expect(allValues[i]).not.toEqual(allValues[j]);
})

test("no grid cell points to itself", () => {
    let selector = new GridSelector([2, 3]);
    for (let i = 0; i < 2; i++)
        for (let j = 0; j < 3; j++)
            expect(selector.getCellValue([i, j])).not.toEqual([i, j]);
})