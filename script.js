class Animal {
  constructor(species) {
    this._species = species; // Store species in a private variable
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  // Method for barking
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  // Method for purring
  purr() {
    console.log("purr");
  }
}

// Creating an instance of Cat
const myCat = new Cat("Siamese");
myCat.makeSound();
// Expected Output: The Siamese makes a sound

myCat.purr();
// Expected Output: purr

// Creating an instance of Dog
const myDog = new Dog("Golden Retriever");
myDog.makeSound();
// Expected Output: The Golden Retriever makes a sound

myDog.bark();
// Expected Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
