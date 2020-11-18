var temp;
var count = 0;
var result = 0;
var op = null;
var digit = "";
var count_check = 0;
function answer(input) {


    for (var i = 0; i <= 9; i++) {

        if (input == i) {
            digit += input;
            document.getElementById("display").innerText = digit;
            break;
        }

    }
    if (input == "+" || input == "-" || input == "*" || input == "/") {
        if (count < 1) {
            temp = Number(digit);
            console.log(temp);
            op = input;

        } else if (count_check > 0) {
            op = input;
            count_check -= 1;
        }
        else {

            if (op == "+") {
                result = temp + Number(digit);
                temp = result;
                op = input;
                document.getElementById("display").innerText = result;
            } else if (op == "-") {
                result = temp - Number(digit);
                temp = result;
                op = input;
                document.getElementById("display").innerText = result;
            }
            else if (op == "*") {
                result = temp * Number(digit);
                temp = result;
                op = input;
                document.getElementById("display").innerText = result;
            }
            else if (op == "/") {
                result = temp / Number(digit);
                temp = result;
                op = input;
                document.getElementById("display").innerText = result;
            }
        }
            count += 1;
            digit = "";

        }
        if (input == "=") {
            if (count >= 1) {
                if (op == "+") {
                    result = temp + Number(digit);
                    temp = result;
                    document.getElementById("display").innerText = result;
                } else if (op == "-") {
                    result = temp - Number(digit);
                    temp = result;
                    document.getElementById("display").innerText = result;
                }
                else if (op == "*") {
                    result = temp * Number(digit);
                    temp = result;
                    document.getElementById("display").innerText = result;
                }
                else if (op == "/") {
                    result = temp / Number(digit);
                    temp = result;
                    document.getElementById("display").innerText = result;
                }

            }
            digit = "";
            count_check += 1;
        }
        // console.log(temp);
        // if( input=="="){
        //     if(count==1){            
        //         temp.push(Number(digit));
        //         switch (op){
        //             case '+':
        //                 result = temp[0] + temp [1];
        //                 document.getElementById("display").innerHTML = result;
        //                 temp = [];
        //                 temp[0] = result;
        //                 break;
        //             case '-':
        //                 result = temp[0] - temp [1];
        //                 document.getElementById("display").innerHTML = result;
        //                 temp = [];
        //                 temp[0] = result;
        //                 break;   
        //             case '*':
        //                 result = temp[0] * temp [1];
        //                 document.getElementById("display").innerHTML = result;
        //                 temp = [];
        //                 temp[0] = result;
        //                 break; 
        //             case '/':
        //                 result = temp[0] / temp [1];
        //                 document.getElementById("display").innerHTML = result;
        //                 temp = [];
        //                 temp[0] = result;
        //                 break;   
        //             default:
        //                 break;           
        //         }

        //     }





        if (input == "c") {
            temp = null;
            op = null;
            count = 0;
            count_check = 0;
            digit = "";
            document.getElementById("display").innerText = "";
        }
    }