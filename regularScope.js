const obj = {
  name: "Example",
  regularFunction() {
    console.log("regularFunction this.name:", this.name);
  },
  arrowFunction: () => {
    console.log("arrowFunction this.name:", this.name);
  }
};

obj.regularFunction();
obj.arrowFunction();
