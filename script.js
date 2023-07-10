let userInput = document.getElementById('date')
userInput.max = new Date().toISOString().split("T")[0]; //for selecting valid dates, today and backwards
let result = document.getElementById("result")

//..toISOString() converts the Date object into an ISO 8601 date string format, which has the format "YYYY-MM-DDTHH:mm:ss.sssZ".
//split('T')[0] splits the ISO string at the 'T' character and retrieves the first part, which represents the date in the format "YYYY-MM-DD".
function calculateAge(){
    let birthDate = new Date(userInput.value)
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date

    let d2 = today.getDate();
    let m2 = today.getMonth ()+1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2>=m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1
    }

    if(d2>=d1){
        d3= d2 - d1;
    }else{
        m3--;
        d3 = getDaysInAMonth(y1,m1) + d2-d1;
    }

    if(m3<0){
        m3=11;
        y3--;
    }
    result.innerHTML = `Your are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old!`;
}

function getDaysInAMonth(year, month){
    return new Date (year, month, 0).getDate();
}