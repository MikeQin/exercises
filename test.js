//console.log(3 / 2);
//console.log('white space', isNaN(parseInt('9')) ? true : false);

const str = 'hello!     w!';
//const astr = str.replace(/[^\w]/g, '');
const astr = str.replace(/[\W]/g, '');
// console.log('cleaned:', astr);

const ip = '192.168.1.1';

function replace(ip) {
  return ip.replace(/[.]/g, '[.]');
}

console.log(replace(ip));

let test = 'slabcdA     !'.replace(/[\W]/g, '*');
console.log(test);


function say(...msg) {
  console.log(msg);
  return msg;
}

say.apply(this, ['fuck']);
