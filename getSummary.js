const book = {
  title: "Zero to One",
  author: "Peter Thiel",
  year: 2014,
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

console.log(book.getSummary()); 

