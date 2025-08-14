function calculateGrade() {
    let score = parseInt(document.getElementById("score").value);
    let extraCredit = document.getElementById("extraCredit").value === "true";

    let grade = "";
    let comment = "";
    let honors = false;

// check for valid score
if(isNaN(score) || score < 0 || score > 100){  
    document.getElementById("result").innerText = "Please enter a valid score between 0 - 100.";
    return;
}

// Calculate grade using if-else
    if (score>=90){
        grade= "A";
        comment= "Excellent work!";
    }else if (score >= 80){
        grade = "B";
        comment = "Great job!";
    } else if(score >=70){
        grade = "C";
        comment = "Good effort!";
    } else if(score >= 60){
        grade = "D";
        comment = "Needs improvement.";
    } else{
        grade = "F";
        comment = "Failed.";
    }

// Honors eligibility using logical operators
honors = (grade === "A" || grade === "B") && extraCredit;

// Using ternary operator for result display
let honorMessage = honors ? "Congratulations! You are eligible for honors." : "Keep working hard!";

// Exta: Using switch for feedback based on grade
let extraFeedback;
switch (grade){
    case "A":
        extraFeedback = "You should apply for scholarships!";
        break;
    case "B":
        extraFeedback = "Try pushing for an A next time!";
        break;
    case "C":
        extraFeedback = "You're doing okay, but there's room for improvement.";
        break;
        case "D":
            extraFeedback = "Dont't give up, try again!";
            break;
            default:
                extraFeedback = "Don't read again go and learn handwork!";
}
// Display the results
document.getElementById("result").innerHTML = `
Score: ${score}<br>
Grade: ${grade}<br>
Comment: ${comment}<br>
${honorMessage}<br>
${extraFeedback}
`
}