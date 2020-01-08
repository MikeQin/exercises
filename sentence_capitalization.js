function capitalize(str) {
  const strArr = str.split(' ');
  const arr = [];
  for (let s of strArr) {
    arr.push(s[0].toUpperCase() + s.slice(1));
  }

  return arr.join(' ');
}

const str = 'a hello world test';
const cstr = capitalize(str);
console.log(cstr);