console.log(`Here is your otp: ${generateOtp()}`);
function generateOtp(){
     const number = Math.floor(Math.random()*9000+1000);
     return number;
}