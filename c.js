//Purpose: returns cypher
function caesar(strInput, shiftNum) {
     let cypher="";
   if(strInput!=="" && shiftNum !=="")
   {
        for(let i=0;i<strInput.length;i++)
        {
            let decNum=strInput.charCodeAt(i);//returns ascii val at position i
            let tempDecNum=decNum;

           if(/[a-zA-Z]/.test(strInput.substr(i,1)))//tests if the character is a letter
           {
               for(let j=0;j<Math.abs(shiftNum);j++)
               {    

                   if(shiftNum<0)//if the shift value is positive, go to next unicode char
                       tempDecNum--;
                   else   //if its negative, go to previous unicode char
                       tempDecNum++;

                   if(decNum<=90 && decNum>=65)//if uppercase
                   {
                       //tests if we went outside the bounds 
                       if(tempDecNum>90)
                           tempDecNum=65;
                       else if(tempDecNum<65)
                                tempDecNum=90;
                   }
                   else if(decNum >=97 && decNum<=122 )//if lowercase
                   {
                       //tests if we went outside the bounds 
                       if(tempDecNum>122)
                           tempDecNum=97;
                       else if(tempDecNum<97)
                           tempDecNum=122;
                   }
               }
           }

            //replaces old unicode character with new unicode  character
               cypher+=String.fromCharCode(tempDecNum);
       }
      
    }
    else
    {
        return "ERROR. Input required.";
    }

    return cypher;
    
}

//Purpose: prints cypher in html page
function displayCypher()
{
    let strInput=document.getElementById("textInput").value;
    let shiftNum=document.getElementById("shiftInput").value;
    const displayPara = document.getElementById("display");
    displayPara.innerHTML= caesar(strInput,shiftNum);
}

//Purpose: prevents user from entering in a non-numeric value
function isNumber(e)
{
    if ((e.keyCode < 48 && e.keyCode!=45) || e.keyCode > 57)
    {
        return false;
    }
    else 
        return true;
}
   
