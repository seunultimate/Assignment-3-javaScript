const reaadline = require ("readline"). createInterface ({
   input: process.stdin,
   output: process.stdout
});

reaadline.question("Enter your score (0 - 100): ", score => {

    score = Number(score);

    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Invalid input.");
    } else{

        let grade;

        switch  (true) {
            case score >= 90:
                grade = "A";
                break;  
            case score >= 80:
                grade = "B";
                break;  
            case score >= 70:
                grade = "C";
                break;  
            case score >= 60:
                grade = "D";
                break;  
            default:
                grade = "F"
        }

        console.log("Your grade is: " + grade);
        }

        readline.close ();
    });
