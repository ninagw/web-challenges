// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log.

function whoIsPaying(names) {
  const randomPersonPosition = Math.floor(Math.random() * names.length);
  const lunchIsPayedBy = names[randomPersonPosition];
  return lunchIsPayedBy + " is going to buy lunch today.";
}
