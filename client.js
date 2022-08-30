// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// employees is an array of objects
for(let i=0; i<employees.length; i++){
  let currentEmployee = employees[i];
  let employeeObject = calculateIndividualEmployeeBonus(currentEmployee);
  console.log(`Employee ${i} is ${employeeObject.name} Total comp is ${employeeObject.totalCompensation} and total bonus is ${employeeObject.totalBonus}`);
}


// This function will calculate 1 employee's bonus!


// employee is an object
function calculateIndividualEmployeeBonus( employee ) {  
  
  let bonusPercentage = 0;

  //~~~~~ items 1-4 on Individual Bonus Rules~~~~~~
  if(employee.reviewRating <= 2){
    //no bonus, probably unnecssary
  }else if(employee.reviewRating === 3){
    bonusPercentage += 4;
  }else if(employee.reviewRating === 4){
    bonusPercentage += 6;
  }else if(employee.reviewRating === 5){
    bonusPercentage += 10;
  }

  //~~~~ items 5 on Individual Bonus Rules~~~~~~
  
  if(employee.employeeNumber.length === 4){
    bonusPercentage += 5;
  }

  //~~~~ items 6 on Individual Bonus Rules~~~~~~
  if(employee.annualSalary > 65000){
    bonusPercentage -= 1;
  }


  //~~~~ items 7 on Individual Bonus Rules~~~~~~
  if(bonusPercentage > 13){
    bonusPercentage = 13;
  } else if (bonusPercentage < 0){
    bonusPercentage = 0;
  }

  
  let totalBonus = employee.annualSalary * (bonusPercentage*.01)
  let employeeName = employee.name;
  let totalCompensation = totalBonus + Number(employee.annualSalary);

  let outputObject = {
    name: employeeName,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }

  return outputObject;
  // return new object with bonus results
  
}



