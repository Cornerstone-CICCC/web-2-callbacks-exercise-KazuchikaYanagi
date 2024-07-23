const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  fs.readFile("./lastname.txt", "utf-8", (err, lastName) => {
    fs.readFile("./age.txt", "utf-8", (err, age) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, hobby) => {
        console.log(
          `${data1} ${lastName} is ${age} years old and his hobbies are ${
            hobby.toString().split('"')[1]
          } and ${hobby.toString().split('"')[3]}`
        );
        // console.log(hobby.toString().split('"')[1]);
      });
    });
    // console.log(data1);

    // console.log(lastName);
  });
  // console.log("here is end");
});
