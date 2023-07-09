let userInput = document.getElementById('date')
userInput.max = new Date().toISOString().split("T")[0]; //for selecting valid dates, today and backwards
//..toISOString() converts the Date object into an ISO 8601 date string format, which has the format "YYYY-MM-DDTHH:mm:ss.sssZ".
//split('T')[0] splits the ISO string at the 'T' character and retrieves the first part, which represents the date in the format "YYYY-MM-DD".

