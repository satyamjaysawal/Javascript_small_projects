package assignment_2_of_java;

class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows");
    }
}

class Cow extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cow moos");
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.makeSound();  // Output: The animal makes a sound

        Dog dog = new Dog();
        dog.makeSound();  // Output: The dog barks

        Cat cat = new Cat();
        cat.makeSound();  // Output: The cat meows

        Cow cow = new Cow();
        cow.makeSound();  // Output: The cow moos
    }
}
