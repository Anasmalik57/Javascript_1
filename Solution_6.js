let Name = "Mithun";
let email = "mithun.s@pw.live";
let age = 21;

// Check Name 
if (typeof Name === "string") {
    // Check Email
    if (typeof email === "string") {
        // Check Age 
        if (typeof (age) === "number") {
            console.log("Everything feels fine")
        } else {
            console.log("Age should a Number")
        }

    } else {
        console.log("email should be a String")
    }
}
else {
    console.log("A should be a String")
}
