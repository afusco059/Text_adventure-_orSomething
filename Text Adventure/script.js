
document.getElementById("output").innerHTML = "Welcome to the Great Kingdom of Shot young hero"

var characters = [
  {
    "name" : name,
    "Class" : "warrior",
    "Special Ability" : "Charge",
      "Hit Points" : 300.0,
      "Power" : 300.0,
      "Mana" : 0.0,
      "Armor" : 500.0,
  },
    {
      "Name" : name,
      "Class" : "Mage",
      "Special Ability" : "High Mana",
      "Hit Points" : 100.0,
      "Power" : 500.0,
      "Mana" : 300.0,
      "Armor" : 100.0,
     }, 
     {
       "Name" : name,
     "Class" : "Sharp Shooter",
     "Special Ability" : "Accuracy",
     "Hit Points" : 100.0,
     "Power" : 500.0,
     "Aim" : 500.0,
     "Armor" : 50.0,S
     },

    ]
  function MainFunction(){
    
    var name = document.getElementById("firstInput").value
    document.getElementById("dialogue").innerHTML = "Welcome Young "+ name 
    if("firstInput " == mage ){
      document.getElementById("output").innerHTML = "You have chosen Mage here are the Stats: " + characters[0]["name"]
    }else{}

    document.getElementById("output").innerHTML = "Welcome to the Great Kingdom of Shot young " + name + "What Class would you like to have" + mage + warrior + SharpShooter

  };