const allUsers = [
    "Mithun",
    "Sambit",
    "Pawan",
    "Prabin",
    "Ashraf",
    "Ballav",
    "Pradyumna",
    "Srikant",
  ];

  function isUserPresent(user) {
    var decision =allUsers.includes(user);
    if (decision==true){
        console.log(`Yes, ${user} is a valid user.`);
    }
    else {
        console.log(`No, ${user} is not a valid user.`);
    }
  }
  isUserPresent("Prabin")
  isUserPresent("Someone")