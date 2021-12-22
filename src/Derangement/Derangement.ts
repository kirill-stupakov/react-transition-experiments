class Derangement {
  private readonly length: number;
  private readonly permutation: number[] = [];

  constructor(length: number) {
    if (length <= 1) throw new Error("Wrong permutation length");
    this.length = length;
    this.permutation = [...Array(length)].map((_, index) => index);
    for (let i = 0; i < length; i++) {
      if (this.permutation[i] === i) {
        let j = Math.floor(Math.random() * length);
        while (j === i) j = Math.floor(Math.random() * length);
        this.swapPermutationElements(j, i);
      }
    }
  }

  private swapPermutationElements(j: number, i: number) {
    let t = this.permutation[j];
    this.permutation[j] = this.permutation[i];
    this.permutation[i] = t;
  }

  getLength() {
    return this.length;
  }

  getElement(index: number) {
    return this.permutation[index];
  }
}

export default Derangement;
