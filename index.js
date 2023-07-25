class MyArray {
  constructor(...args) {
    this.elements = args;
  }

  push(element) {
    this.elements.push(element);
  }

  filter(callback) {
    const filteredArray = new MyArray();
    console.log("This is MY OWN FUNCTION!");
    for (let i = 0; i < this.elements.length; i++) {
      if (callback(this.elements[i], i, this.elements)) {
        filteredArray.push(this.elements[i]);
      }
    }
    return filteredArray;
  }
}

const array = new MyArray(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]
const result = array.filter((num) => (num > 3 ? true : false));
console.log(result);

const res = result.filter((num) => (num > 4 ? true : false));
console.log(res);
