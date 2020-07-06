
// MY OBSERVATIONS
// The way you are calculating the points is wrong, i have fixed the first if statement for you
// fix the rest by yourself

let presentInpuField=0;
let isOpen=false;
function toggleNavBar(){
    console.log("clicked");
    if(isOpen){
        isOpen=false;
        document.getElementById("header-options").classList.remove("open-nav");
        document.getElementById("header-options").classList.add("close-nav");
    }else{
        isOpen=true;
        document.getElementById("header-options").classList.remove("close-nav");
        document.getElementById("header-options").classList.add("open-nav");

    }
}
document.getElementById("nav-toggle").addEventListener("click",toggleNavBar);
document.getElementById("about").addEventListener("click",toggleNavBar);
document.getElementById("settings").addEventListener("click",toggleNavBar);


document.getElementById("enter-btn").addEventListener('click',function(event){
    //The page reloads because the button is inside a form thats why the value in the input field dissapears
    // The code in the next line  stops the page from reloading.
    event.preventDefault();
    
    let courseCode=document.getElementById("course").value; 
    let courseUnit=document.getElementById("unit").value;
    let courseScore=document.getElementById("score").value; 

    // i used .trim() to remove empty spaces at the front and the back of the string so something like "  " will not be accepted
    if(courseUnit.trim()==""||courseCode.trim()==""||courseScore.trim()==""){
        prompt("Please fill out all the fields");
        return;
    }

    receiveScoreValues(courseCode,courseUnit,courseScore);
    getGrade(courseScore);

  
});

 function receiveScoreValues(courseCode,courseUnit,courseScore){
       // i increment the value of presentInpuField
    ++presentInpuField
     // by doing this, we can dynamcally populate each input field after the prevous input field is clicked
     // since we are appending the value of presentInpuField which increases everytime the enter button is clicked
     //to "course", unit and the likes
     let courseId="course"+presentInpuField;
     let unitId="unit"+presentInpuField;
     let scoreId="score"+presentInpuField;
     let gradeId="grade"+presentInpuField;
     let pointsId="points"+presentInpuField;

 document.getElementById(courseId).value= courseCode;  
 document.getElementById(unitId).value= courseUnit;  
 document.getElementById(scoreId).value= courseScore;  
 document.getElementById(gradeId).value= getGrade(courseScore);
 document.getElementById(pointsId).value= getPoints(courseScore,courseUnit);
 }
 function getGrade(courseScore)
 {
    if(courseScore>=70){
        return "A";
    }
    if (courseScore>=60){
        return"B";
    }
    if (courseScore>=50){
        return"C";
    }
    if (courseScore>=40){
        return"D";
    }
    if (courseScore < 40){
        return"F";
    }

}
function getPointsMark(courseScore)
{
   if(courseScore>=70){
       return "5";
   }
   if (courseScore>=60){
       return"4";
   }
   if (courseScore>=50){
       return"3";
   }
   if (courseScore>=40){
       return"2";
   }
   if (courseScore < 40){
       return"0";
   }
    
 }
 function getPoints(courseScore,courseUnit)
 {
    if(courseScore>=70){
        return 5*courseUnit;
    }
    if(courseScore>=60){
        return 4*courseUnit;
    }
    if(courseScore>=50){
        return 3*courseUnit;
    }
    if(courseScore>=40){
        return 2*courseUnit;
    }
    if(courseScore < 40){
        return 0*courseUnit;
    } 
  };

  




   





























// var course=window.prompt("Input Course Point")
// function testgetCoursePoint (course) {
//     if(course >= 70){
//         return "5";
//     }

//     if(course >= 60){
//         return "4";
//     }

//     if(course >= 50){
//         return "3";
//     }

//     if(course >= 45) {
//         return "2";
//     }

//     if(course <= 45){
//         return "0";
//     }

// };
// console.log(testgetCoursePoint(course));

// function solveCgpa ({score,courseTitle,courseUnit}){
//     var totalUnit = 0;
//     var totalUnitPoint = 0;
// }
// document.getElementById(grade).innerHTML = 'New text!'