class Animal{
  constructor(name, sound, habitat){
    this.name = name;
    this.sound = sound;
    this.habitat = habitat;
  }

  cry(){
    console.log(`A ${this.name} goes ${this.sound}`)
  }
}

const cat = new Animal('cat', 'meow', 'urban');
const cow = new Animal('cow', 'moo', 'farmland');

Animal.prototype.speak= function(words){
  return`${this.name} says ${words}`
};

const dog = new Animal('dog', 'woof', 'urban');
console.log(dog.speak('hello'))