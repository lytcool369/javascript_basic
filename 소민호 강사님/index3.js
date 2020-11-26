const person1 = {};  // Prototype Object
person1["name"] = "소민호";
person1["age"] = 33;
person1["printme"] = () => {
    console.log(person1.name, person1.age);
};

console.log(person1["name"]);
console.log(person1.printme());

const person2 = {
    name: "소민호",
    age: 33,
    printme: () => {
        console.log("person2_printme", person2.name, person2.age);
    },
};

person2.printme();