const endDate = new Date('2024-04-31T23:59:59').getTime();

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    let nowDate = new Date().getTime();
    const restTime = endDate - nowDate;
    // const restTime = 0;
    
    if (restTime == 0) {
        clearInterval(countdownInterval);
        const countdown = document.getElementById('countdownContainer');
        countdown.innerHTML = ``;
        countdown.innerHTML = '<p>Le compte à rebours est terminé!</p>';
    }
    else {
        let days = Math.floor(restTime / (1000 * 60 * 60 * 24));
        let stringDays = `${days}`;
        const day = document.getElementById("day")
        day.innerHTML = stringDays;



        let hours = Math.floor((restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let stringHours = `${hours}`;
        const hour = document.getElementById("hour");
        hour.innerHTML = stringHours;


        let minutes = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60));
        let stringMinutes = `${minutes}`; 
        const min = document.getElementById("minute");
        min.innerHTML = stringMinutes;


        let seconds = Math.floor((restTime % (1000 * 60)) / 1000);
        let stringSeconds = `${seconds}`;
        const sec = document.getElementById("second");
        sec.innerHTML = stringSeconds;
    }
}
