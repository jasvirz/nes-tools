//modules
const nh = require("./newHires");

const sayHi = (name) => {
  console.log(`hello there ${name}`);
};
console.log("new hires = ", nh.newHires);
console.log("new employees = ", nh.newEmployees);
{
  nh.newHires.map((p) => {
    sayHi(p);
    if ((e = nh.newEmployees.find((n) => n.name === p)))
      console.log("Find: welcome ", e.name, "to role", e.role);
    // two different ways to use this information

    nh.newEmployees.filter((n) => {
      if (n.name === p) {
        console.log("Filter: welcome ", n.name, "to role", n.role);
      }
    });
  });
}
