let amountYes = 0;
let amountNo = 0;


function cleanVote() {
    document.getElementById("optionYes").checked = false;
    document.getElementById("optionNo").checked = false;
}

function updateVotes(){
    document.getElementById("labelYes").innerText = amountYes;
    document.getElementById("labelNo").innerText = amountNo;
}

function vote(){
  // discover which radio is checked
  if (document.getElementById("optionYes").checked == true) {

    // if "optionYes" is true, then increment 1 in amountYes variable:
    amountYes = amountYes + 1;
    updateVotes();
    cleanVote();
  }
  else if (document.getElementById("optionNo").checked == true) {
    
    // if "optionNo" is true, then increment 1 in amountNo variable:
    amountNo = amountNo + 1;
    updateVotes();
    cleanVote();
  } 
  else {
    // then if anyone selected, show a message asking for select one Option
    window.alert("Please, Select One Option!!!")
  }
}