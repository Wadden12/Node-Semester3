// looking at the url componet useing the parse method

const url = require("url");
let adr =
  "https://www.google.ca/search?q=node&sxsrf=ALiCzsb-Di6VqiGImFAinx42O7-PJxX3QQ%3A1652382876482&source=hp&ei=nFx9YsvOGu6mggfN6o-YAQ&iflsig=AJiK0e8AAAAAYn1qrNdDEiWkujzasAChV76x24U1f9N1&ved=0ahUKEwjLjIjz1dr3AhVuk-AKHU31AxMQ4dUDCAk&uact=5&oq=node&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCggAELEDEIMBEEMyBwgAELEDEEMyBQgAEJECMgQIABBDMgQIABBDMgoIABCxAxCDARBDMgUIABCRAjoHCCMQ6gIQJzoLCAAQgAQQsQMQgwFQtA1YqRBgtxJoAXAAeACAAWWIAfgCkgEDMy4xmAEAoAEBsAEK&sclient=gws-wiz";
let parse = url.parse(adr, true);

console.log(`The host for the website is ${parse.host}`);
console.log(`The Protocol is ${parse.protocol}`);
console.log(` Search ${parse.search}`);
