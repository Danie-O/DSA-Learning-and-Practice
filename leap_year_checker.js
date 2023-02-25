function isLeapYear(year) { 
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
} 

isLeapYear(2023)