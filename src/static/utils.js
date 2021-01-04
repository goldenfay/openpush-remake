export function getDateDifference(date){
    // Get today's date and time
    var now = new Date().getTime();
          
        
    var distance = date - now;
      
   
    var days = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60*24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return{days,hours,minutes,seconds,distance}
}