const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this.__appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
    set appetizers(newAppetizer) {
      this._appetizers = newAppetizer;
    },
    set mains(newMain) {
      this._mains = newMain;
    },
    set desserts(newDessert) {
      this._desserts = newDessert;
    },
  },
  get courses() {
    return {
      appetizers: this._courses._appetizers,
      mains: this._courses._mains,
      desserts: this._courses._desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    
    this.courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = menu.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    /*console.log(appetizer.price);*/
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal contains of ${appetizer.name}, ${main.name}, ${dessert.name}. Total cost is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 3);
menu.addDishToCourse('appetizers', 'vodka', 10);
menu.addDishToCourse('appetizers', 'tea', 5);

menu.addDishToCourse('mains', 'soup', 12);
menu.addDishToCourse('mains', 'hamburger', 20);
menu.addDishToCourse('mains', 'steak', 40);

menu.addDishToCourse('desserts', 'cake', 4);
menu.addDishToCourse('desserts', 'pancake', 11);
menu.addDishToCourse('desserts', 'cookie', 2);

meal = menu.generateRandomMeal();
console.log(meal);