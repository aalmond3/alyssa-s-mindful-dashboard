// website loaded?
console.log("👍 Okay");


document.addEventListener("DOMContentLoaded", () => {
    const theClockApp = () => {
      const timeNow = new Date();
      let gotHours = timeNow.getHours();
      let gotMinutes = timeNow.getMinutes();
      let gotSeconds = timeNow.getSeconds();
      let gotAmOrPm = gotHours >= 12 ? "PM" : "AM";
  
      gotHours = gotHours % 12 || 12;
      gotHours = gotHours < 10 ? `0${gotHours}` : gotHours;
      gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
      gotSeconds = gotSeconds < 10 ? `0${gotSeconds}` : gotSeconds;
  
      document.querySelector(".hours").textContent = gotHours;
      document.querySelector(".minutes").textContent = gotMinutes;
      document.querySelector(".seconds").textContent = gotSeconds;
      document.querySelector(".amOrPm").textContent = gotAmOrPm;
    };
  
    theClockApp();
    setInterval(theClockApp, 1000);
  
   
  // document.addEventListener("DOMContentLoaded", () => {
    //  Month & Day Name Arrays
    const allTheMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const allTheDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  
    const dateNow = new Date();
    document.querySelector(".month").textContent = allTheMonths[dateNow.getMonth()];
    document.querySelector(".dayOfMonth").textContent = dateNow.getDate();
    document.querySelector(".year").textContent = dateNow.getFullYear();
    document.querySelector(".dayOfWeek").textContent = allTheDays[dateNow.getDay()];
  
    
    const getDaysUntilEvent = (eventDate) => {
      const now = new Date();
      const event = new Date(eventDate);
      now.setHours(0, 0, 0, 0);
      event.setHours(0, 0, 0, 0);
      const diffInTime = event.getTime() - now.getTime();
      return Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    };
  
    const vacationDay = "2025-03-21"; // Your vacation date
    const daysUntilVacation = getDaysUntilEvent(vacationDay);
    
    const elemDaysUntilVacation = document.querySelector(".daysUntilVacation");
    if (elemDaysUntilVacation) {
      elemDaysUntilVacation.textContent = daysUntilVacation;
      elemDaysUntilVacation.setAttribute("datetime", daysUntilVacation);
    }
  
   
    const getDayStreak = (startDate) => {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diffInTime = today.getTime() - start.getTime();
      return Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    };
  
    const startDate = "2025-03-05"; // Change this to when your streak started
    const streakOfCoffee = getDayStreak(startDate);
  
    const elemStreakOfCoffee = document.querySelector(".streakOfCoffee");
    if (elemStreakOfCoffee) {
      elemStreakOfCoffee.textContent = streakOfCoffee;
      elemStreakOfCoffee.setAttribute("datetime", streakOfCoffee);
    }
  });
  