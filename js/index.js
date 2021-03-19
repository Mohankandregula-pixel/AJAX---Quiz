// json array movement variable
var i = 0;
var correctCount = 0 ;
//initialize the first question
generate(0);
// generate from json array data with index
function generate(m) {
    document.getElementById("question").innerHTML = Questions[m].q;
    document.getElementById("optt1").innerHTML = Questions[m].a;
    document.getElementById("optt2").innerHTML = Questions[m].b;
    document.getElementById("optt3").innerHTML = Questions[m].c;
    document.getElementById("optt4").innerHTML = Questions[m].d;
}

function checkAnswer() {
    if (document.getElementById("opt1").checked && Questions[i].a == Questions[i].answer) {
       correctCount++;
    }
    if (document.getElementById("opt2").checked && Questions[i].b == Questions[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt3").checked && Questions[i].c == Questions[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt4").checked && Questions[i].d == Questions[i].answer) {
        correctCount++;
    }
    // increment i for next question
    i++;
    if(Questions.length-1 < i){
        document.write("<body style='background-color:#46ade9;'>");
        document.write("<div style='color:black; padding:250px;font-size:18pt;text-align:center;'>*****Your score is : "+correctCount+"*****</div>");
        document.write("</body>");
    }
    // callback to generate
    generate(i);
}