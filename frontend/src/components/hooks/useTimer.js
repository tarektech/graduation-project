import {useState, useEffect } from "react";


export function useTimer(){
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const countdownDate = new Date("2024-05-31T23:59:59");
      const timer = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = countdownDate - currentTime;
  
        if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        } else {
          clearInterval(timer);
        }
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    const formatTimeValue = (timeValue) => {
      return timeValue.toString().padStart(2, '0');
    };

    return { days, hours, minutes, seconds, formatTimeValue };
}