enum MoveDirection {
    UP, RIGHT, DOWN, LEFT
}

class GridNavigator {
    private readonly dimensions: number[];
    private position: number[];

    constructor(width: number, height: number) {
        this.dimensions = [Math.max(width, 1), Math.max(height, 1)];
        this.position = [0, 0];
    }

    getDimensions() {
        return this.dimensions;
    }

    getPosition() {
        return this.position;
    }

    setPosition(newPosition: number[]) {
        this.position = this.clampPosition(newPosition);
    }

    move(direction: MoveDirection, distance: number) {
        const directionVector = this.getDirectionVector(direction);
        const newPosition = this.position.map((value, index) => value + directionVector[index] * distance);
        this.setPosition(newPosition);
    }

    moveRandomDistance(direction: MoveDirection) {
        const maximumDistance = this.getDistanceToBorder(direction);
        const distance = Math.floor(Math.random() * (maximumDistance - 1) + 1);
        this.move(direction, distance);
    }

    getDistanceToBorder(direction: MoveDirection) {
        switch (direction) {
            case MoveDirection.UP:
                return this.dimensions[1] - this.position[1] - 1;
            case MoveDirection.RIGHT:
                return this.dimensions[0] - this.position[0] - 1;
            case MoveDirection.DOWN:
                return this.position[1];
            case MoveDirection.LEFT:
                return this.position[0];
        }

        return 0;
    }

    private getDirectionVector(direction: MoveDirection) {
        switch (direction) {
            case MoveDirection.UP:
                return [0, 1];
            case MoveDirection.RIGHT:
                return [1, 0];
            case MoveDirection.DOWN:
                return [0, -1];
            case MoveDirection.LEFT:
                return [-1, 0];
        }
        return [0, 0];
    }

    private clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(max, value));
    }

    private clampPosition(newPosition: number[]) {
        return newPosition.map((value, index) => this.clamp(value, 0, this.dimensions[index] - 1));
    }
}

export {GridNavigator, MoveDirection};