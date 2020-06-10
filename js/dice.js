 
            var k = false;
            var left = 0;
            var right= 0;
            function Check_BTN_Click(){
                if(document.getElementById("check-btn").innerText=="Restart"){
                   Restart();
                  
                }
                else{
                    document.getElementById("left").innerText='';
                    document.getElementById("right").innerText='';
                    if(!k){
                    k = true;
                    
                    left = Math.floor(Math.random() * 5) + 2;
                    document.getElementById("check-btn").innerText='Check: 2';
                    document.getElementById("left").style.backgroundImage='url(images/'+left+'.ico';
                    }
                    else{
                        k = false;
                        right = Math.floor(Math.random() * 5) +2;
                        document.getElementById("check-btn").innerText='Check: 1';
                        document.getElementById("right").style.backgroundImage='url(images/'+right+'.ico';
                        Check_Winner();
                    }
                }
               
                function Check_Winner(){
                    var doc = document.getElementById("winner-text");
                    if(left>right){
                        doc.innerText ='Winner: Player: 1';
                        doc.style.color="#0392ff";
                    }
                    else if(left<right){
                        doc.innerText ='Winner: Player: 2';
                        doc.style.color="#ff0000f5";
                    }
                    else if(left==right){
                        doc.innerText ='Equal !';
                        doc.style.color="Yellow";
                    }
                    document.getElementById("check-btn").innerText='Restart';
                    
                }
                function Restart(){
                    document.getElementById("left").innerText=0;
                    document.getElementById("right").innerText=0;
                    document.getElementById("left").style.backgroundImage='none';
                    document.getElementById("right").style.backgroundImage='none';
                    var doc = document.getElementById("winner-text");
                    doc.innerText ='Dice Game';
                    doc.style.color="white";
                    document.getElementById("check-btn").innerText="Check: 1";
                }
            }