class TemplateProcessor {
  constructor(value) {
    // Constructor
    this.template = value;
  }

  fillIn(object) {
    const obj = { month: "", day: "", year: "" };
    if (object.day === undefined) {
      obj.day = "";
    } else {
      obj.day = object.day;
    }

    if (object.month === undefined) {
      obj.month = "";
    } else {
      obj.month = object.month;
    }

    if (object.year === undefined) {
      obj.year = "";
    } else {
      obj.year = object.year;
    }
    const str = `My favorite month is ${obj.month} but not the day ${obj.day} or the year ${obj.year}`;
    return str;
  }
}

myTemplate = new TemplateProcessor("Ford");
const obj = { day: 27, month: "January", year: 2000 };
const result = myTemplate.fillIn(obj);
console.log(result);
