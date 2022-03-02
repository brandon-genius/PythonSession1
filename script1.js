/*This is JS zone,
this is js comment*/
//This is a line comment
//console.log("Script file");
//console.warn("This is a warning message");
//console.error("Error connecting to server");
//alert("Hello world");
//prompt("Enter something");

//var x;  //var declaration
//x=2;  //assign value

//let/var/const variablename = value;
//let student=prompt("Enter your Name");
//console.log(student);

//let age=99;

//console.log(age);

//Exorcise #1

//let numberChildren= 3;
//let jobTitle ="Operations Manager";
//let geoLocation = "Hawaii";
//let partnerName = "Jessica";

//console.log("I am an " +jobTitle+ " who lives in " +geoLocation+ " with " +partnerName+ " and has " +numberChildren+ " kids. ");


//console.log(`The result is = ${100/3}`);

//let name="Brandon";
//let email="brandon.wpi@gmail.com";
//let password="password123";
//let age= 100;
//let country ="USA";
//let salary=10000;

let platform= "Sales Force";
let Machine= "Computer";
let cases = "cases";
let subject = "site name - program name";
let siteName = "Target-123";
let program = "SPP OR";
let daysOpen = 12;
let SLA = 10;
let accountOwner = "The Sales person in charge";
let accountName = "Target";
let caseOwner = "you";
let caseNumber = 55555;
let reportingMethod = "Reports";
let viewingMethod = "Dashboards";
let description = "details of the case";
let internalNotes = "internal status";
let dateModified = "Today";
let integrationTool = "Task Ray";
let integrationToolG = "Google Suite";
let integrationToolS = "Slack";
let company = "Voltus";

let Voltus=`
    <p><b>Company:</b> ${company}</P>
    <p><b>Company runs on:</b> ${Machine}</P>
    <p><b>Company uses:</b> ${platform}</P>
    <p><b>Company Tools:</b> <li> ${company}, ${integrationTool}, ${integrationToolG}, ${integrationToolS}, ${reportingMethod}, ${viewingMethod}</li> </p>
    <p><b>Sales Force uses:</b> ${cases}</P>
    <p><b>Cases have subject structure of:</b> ${subject}</P>
    <p><b>Example of site:</b> ${siteName}</P>
    <p><b>Example of program:</b> ${program}</P>
    <p><b>Example of an account:</b> ${accountName}</P>
    <p><b>How many days a case should be open for:</b> ${SLA}</P>
    <p><b>Average 2021 Days open:</b> ${daysOpen}</P>
    <p><b>Example of case number:</b> ${caseNumber}</P>
    <p><b>Example of case owner:</b> ${caseOwner}</P>
    <p><b>What is in the decription?:</b> ${description}</P>
`;

document.write(Voltus);
