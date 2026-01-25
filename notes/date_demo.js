let d1=new Date()
let d2 =new Date(2022-1-1)
let d3 = new Date(2022,0,12)
let d4 =new Date(Date.now())//timestamp
let d5 =new Date(2022,0,0)//1stmonth
let d6=new Date(2022,0)
//UTC timezone
//A Javascript date object stores time as a UTC 
//new Date()
//new Date(yyyy,mm,dd)
//new Date(isoDate)
//new Date(timestamp)
//Date.now
/*getFullYear()#year
getMonth() #month(0-11)
getDate()#dayofthemonth */
let d7=new Date(2022,0,1)
let d8=new Date(2024,0,1)
//find difference between two dates
if(d7>d8){
    [d7,d8]=[d8,d7]
}
//find years
let years= d8.getFullYear()-d7.getFullYear()
//find months
let months=d8.getMonth()-d7.getMonth()
//find days
let days=d8.getDate()-d7.getDate()
if(months<0){
    years--
    months+=12
}
if(days<0){
    months--
    //get no.of days in previous month of d8    
    let daysInPrevMonth=new Date(d8.getFullYear(),d8.getMonth(),0).getDate()
    days+=daysInPrevMonth
}
console.log("difference is",years,months,days)