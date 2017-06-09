function getDate(){

    var date = new Date(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();

        if(month < 10){
            month = "0" + month;
        }

        console.log(day + "." + month + "." + year + ".");

}

getDate();