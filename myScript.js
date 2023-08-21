
function getAkanName () {
  let yearOfBirth = document.getElementById("year-input").value;
  let birthMonth = Number(document.getElementById("month-input").value);
  let birthDate = Number(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");

  // function to get gender
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue);

  // validation functions
  function monthValidator () {
    if (birthMonth < 1 || birthMonth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
    if (birthMonth === 2 && Number(yearOfBirth)%4 === 0) {
      if (birthDate > 28 || birthDate < 1) {
        return false;
      } else if (birthMonth === 2 && birthDate > 29) {
        return false;
      } else if (birthMonth === 2 && birthDate < 1) {
        return false;
      } else {
        return true;
      }
    } else if (birthDate < 1 || birthDate > 31){
      return false;
    } else {
      return true;
    }
  }

  //Validation variables
  let monthValid = monthValidator();
  let dayValid = dayValidator();

  //Formula to determine day of birth (Sunday = 1, Monday = 2)etc..
  let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(birthMonth+1)/10))+birthDate)%7);

  //Creating arrays of Akan names for males & females and days of the week
  let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

  //generating and index value to select items on arrays
  let index;

  // fix formula bug
  if (dayOfWeekNumber == 0){
    index = 6;
  } else {
    index = dayOfWeekNumber - 1;
  }

  console.log(index);

  if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Greetings" + " " + maleAkanNames[index];
    return false;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Greetings" + " " + femaleAkanNames[index];
    return false;
  } else {
    alert("You have entered an invalid date or month, please try again with correct values");
  }
}
