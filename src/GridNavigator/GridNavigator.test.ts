import {GridNavigator, MoveDirection} from "./GridNavigator";

test("can create navigator", () => {
    let navigator = new GridNavigator(1, 1);
})

test("can set dimensions", () => {
    let navigator = new GridNavigator(2, 4);
    expect(navigator.getDimensions()).toEqual([2, 4]);
})

test("negative dimensions default to 1", () => {
    let navigator = new GridNavigator(-2, 4);
    expect(navigator.getDimensions()).toEqual([1, 4]);
})

test("can get position", () => {
    let navigator = new GridNavigator(2, 4);
    expect(navigator.getPosition()).toEqual([0, 0]);
})

test("can set position inside boundary", () => {
    let navigator = new GridNavigator(2, 4);
    navigator.setPosition([1, 3]);
    expect(navigator.getPosition()).toEqual([1, 3]);
})

test("can set position outside boundary", () => {
    let navigator = new GridNavigator(2, 4);
    navigator.setPosition([4, -10]);
    expect(navigator.getPosition()).toEqual([1, 0]);
})

function testMovementInsideBoundary(dir: MoveDirection, expected: number[]) {
    let navigator = new GridNavigator(10, 10);
    navigator.setPosition([5, 5]);
    navigator.move(dir, 2);
    expect(navigator.getPosition()).toEqual(expected);
}

function testMovementOutsideBoundary(dir: MoveDirection, expected: number[]) {
    let navigator = new GridNavigator(10, 10);
    navigator.setPosition([5, 5]);
    navigator.move(dir, 10);
    expect(navigator.getPosition()).toEqual(expected);
}

test("can move up inside boundary", () => {
    testMovementInsideBoundary(MoveDirection.UP, [5, 7]);
})

test("can move left inside boundary", () => {
    testMovementInsideBoundary(MoveDirection.LEFT, [3, 5]);
})

test("can move down inside boundary", () => {
    testMovementInsideBoundary(MoveDirection.DOWN, [5, 3]);
})

test("can move right inside boundary", () => {
    testMovementInsideBoundary(MoveDirection.RIGHT, [7, 5]);
})

test("can move up outside boundary", () => {
    testMovementOutsideBoundary(MoveDirection.UP, [5, 9]);
})

test("can move left outside boundary", () => {
    testMovementOutsideBoundary(MoveDirection.LEFT, [0, 5]);
})

test("can move down outside boundary", () => {
    testMovementOutsideBoundary(MoveDirection.DOWN, [5, 0]);
})

test("can move right outside boundary", () => {
    testMovementOutsideBoundary(MoveDirection.RIGHT, [9, 5]);
})

function testDistanceCalculation(direction: MoveDirection, expectedDistance: number) {
    let navigator = new GridNavigator(10, 10);
    navigator.setPosition([5, 6]);
    expect(navigator.getDistanceToBorder(direction)).toBe(expectedDistance);
}

test("calculates distance to border in up direction", () => {
    testDistanceCalculation(MoveDirection.UP, 3);
})

test("calculates distance to border in right direction", () => {
    testDistanceCalculation(MoveDirection.RIGHT, 4);
})

test("calculates distance to border in down direction", () => {
    testDistanceCalculation(MoveDirection.DOWN, 6);
})

test("calculates distance to border in left direction", () => {
    testDistanceCalculation(MoveDirection.LEFT, 5);
})
