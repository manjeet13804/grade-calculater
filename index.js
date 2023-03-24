var english =document.getElementById("english")
var maths =document.getElementById("maths")
var physics =document.getElementById("physics")
var chemistry =document.getElementById("chemistry")
var computer =document.getElementById("computer")
english.addEventListener("change",(e)=>{
    if(document.getElementById("english").value<100 && document.getElementById("english").value>0){
    english =document.getElementById("english").value
    }
    else alert("Kindly enter number between 0 and 100")
  })
  maths.addEventListener("change",(e)=>{
    if(document.getElementById("maths").value<100 && document.getElementById("maths").value>0){
    maths =document.getElementById("maths").value
    }
    else alert("Kindly enter number between 0 and 100")
  })
  physics.addEventListener("change",(e)=>{
    if(document.getElementById("physics").value<100 && document.getElementById("physics").value>0){

    physics =document.getElementById("physics").value
    }
    else alert("Kindly enter number between 0 and 100")

  })
  chemistry.addEventListener("change",(e)=>{
    if(document.getElementById("chemistry").value<100 && document.getElementById("chemistry").value>0){

    chemistry =document.getElementById("chemistry").value
    }
    else alert("Kindly enter number between 0 and 100")

  })
  computer.addEventListener("change",(e)=>{
    if(document.getElementById("computer").value<100 && document.getElementById("computer").value>0){

    computer =document.getElementById("computer").value
    }
    else alert("Kindly enter number between 0 and 100")

  })
function calculateGrade(){
var totalText =document.getElementById("total-text")
var AverageText =document.getElementById("average-text")
var GradeText =document.getElementById("grade-text")
  var totalmarks = english + maths + chemistry + computer +physics;
  var AverageMarks = totalmarks/5;
  var GradeValue
  if(english<35 || maths<35 || physics<35 || chemistry<35 || computer<35){
    GradeValue = "F"
  }
  else if(AverageMarks>=90) GradeValue ="A"
  else if(AverageMarks>=80) GradeValue ="B"
  else if(AverageMarks>=70) GradeValue ="C"
  else if(AverageMarks>=60) GradeValue ="D"
  else GradeValue ="E"
  totalText.innerHTML =`Your Total Marks are ${totalmarks}`
  AverageText.innerHTML =`Your Average Marks are ${AverageMarks}`
  GradeText.innerHTML =`Your Grade is ${GradeValue}`

}
document.getElementById("btn").onclick =function(){
    calculateGrade()
}