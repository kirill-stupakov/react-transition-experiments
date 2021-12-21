class GridSelector {
    private readonly dimensions: number[];
    private permutation: number[] = [];

    constructor(dimensions: number[]) {
        if (!this.isDimensionsCorrect(dimensions))
            throw new Error("Wrong grid size");
        this.dimensions = dimensions;
        this.createRandomPermutation(dimensions[0] * dimensions[1]);
    }

    private createRandomPermutation(length: number) {
        this.permutation = [...Array(length)].map((_, index) => index);
        for (let i = 0; i < length; i++) {
            if (this.permutation[i] === i) {
                let j = Math.floor(Math.random() * length);
                while (j === i)
                    j = Math.floor(Math.random() * length)
                this.swapPermutationElements(j, i);
            }
        }
    }

    private isDimensionsCorrect(dimensions: number[]) {
        return dimensions[0] * dimensions[1] !== 1 && dimensions[0] > 1 && dimensions[1] > 1;
    }

    private swapPermutationElements(j: number, i: number) {
        let t = this.permutation[j];
        this.permutation[j] = this.permutation[i];
        this.permutation[i] = t;
    }

    getDimensions() {
        return this.dimensions;
    }

    getCellValue(coordinates: number[]) {
        if (!this.isCoordinatesWithinDimensions(coordinates))
            throw new Error("Trying to access wrong");
        const valueIndex = this.permutation[this.coordsToPermutationIndex(coordinates)];
        return this.permutationIndexToCoords(valueIndex);
    }

    private isCoordinatesWithinDimensions(coordinates: number[]) {
        return coordinates[0] >= 0 && coordinates[0] < this.dimensions[0] && coordinates[1] >= 0 && coordinates[1] < this.dimensions[1];
    }

    private coordsToPermutationIndex(coordinates: number[]) {
        return coordinates[1] * this.dimensions[0] + coordinates[0];
    }

    private permutationIndexToCoords(permutationIndex: number) {
        return [permutationIndex % this.dimensions[0], Math.floor(permutationIndex / this.dimensions[0])];
    }
}

export default GridSelector;