const obj = {
  name: "Example",
  regularFunction() {
    console.log("regularFunction this.name:", this.name);
  },
  arrowFunction: () => {
    console.log("arrowFunction this.name:", this.name);
  },
  nested: {
    name: "NestedExample",
    regularFunction() {
      console.log("nested regularFunction this.name:", this.name);
    },
    arrowFunction: () => {
      console.log("nested arrowFunction this.name:", this.name);
    }
  }
};

obj.regularFunction();
obj.arrowFunction();

obj.nested.regularFunction();
obj.nested.arrowFunction();
