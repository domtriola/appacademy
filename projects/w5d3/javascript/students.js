function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}
Student.prototype.name = function() {
  return this.fname + " " + this.lname;
};
Student.prototype.courses = function() {
  return this.courses;
};
Student.prototype.enroll = function(course) {
  if (this.hasConflict(course)) throw "Conflict!!!!";
  if (this.courses.indexOf(course) === -1) {
    this.courses.push(course);
    course.students.push(this);
  }
};
Student.prototype.hasConflict = function(newCourse) {
  for (let i=0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(newCourse)) return true;
  }
  return false;
};
Student.prototype.courseLoad = function() {
  let load = {};
  this.courses.forEach(course => {
    if (load.department)
      load.department += course.credits;
    else
      load.department = course.credits;
  });

  return load;
};


function Course(name, department, credits, days, timeBlock) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.timeBlock = timeBlock;
  this.students = [];
}
Course.prototype.students = function() {
  return this.students;
};
Course.prototype.addStudent = function(student) {
  student.enroll(this);
};
Course.prototype.conflictsWith = function(course) {
  if (this.timeBlock !== course.timeBlock) return false;
  for(let i = 0; i < this.days.length; i++) {
    if(course.days.indexOf(this.days[i]) !== -1) return true;
  }
};

let a = new Student('kevin', 'moore');
let js = new Course('js', 'computers', 75, ['mon', 'wed'], 2);
let ruby = new Course('ruby', 'computers', 40, ['mon'], 2);
let react = new Course('react', 'computers', 40, ['mon'], 4);
js.addStudent(a);
console.log(a.courses);
console.log(js.students);
