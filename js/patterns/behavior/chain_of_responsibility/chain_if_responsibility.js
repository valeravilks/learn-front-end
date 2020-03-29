class MySum {
    constructor(initialValue = 42) {
        this.sum = initialValue
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

const sum = new MySum();

console.log(sum.add(8).add(10).add(9).sum);