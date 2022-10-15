const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"name":"Khoa","age":21}'));
console.log(isValidJSON('{"name":"Thinh",age:"22"}'));
console.log(isValidJSON(null));
