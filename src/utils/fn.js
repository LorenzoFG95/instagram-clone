export function getTimePassed(timestamp) {
    const currentDate = new Date();
    const messageDate = new Date(timestamp);
    const timeDiff = currentDate.getTime() - messageDate.getTime();
    const secondsPassed = Math.floor(timeDiff / 1000);
  
    if (secondsPassed < 60) {
      return `${secondsPassed} secondi fa`;
    }
  
    const minutesPassed = Math.floor(secondsPassed / 60);
  
    if (minutesPassed < 60) {
      return `${minutesPassed} minuti fa`;
    }
  
    const hoursPassed = Math.floor(minutesPassed / 60);
  
    if (hoursPassed < 24) {
      return `${hoursPassed} ore fa`;
    }
  
    const daysPassed = Math.floor(hoursPassed / 24);
  
    if (daysPassed < 7) {
      return `${daysPassed} giorni fa`;
    }
  
    const weeksPassed = Math.floor(daysPassed / 7);
  
    if (weeksPassed < 4) {
      return `${weeksPassed} settimane fa`;
    }
  
    const monthsPassed = Math.floor(daysPassed / 30.42);
  
    if (monthsPassed < 12) {
      return `${monthsPassed} mesi fa`;
    }
  
    const yearsPassed = Math.floor(daysPassed / 365);
  
    return `${yearsPassed} anni fa`;
  }