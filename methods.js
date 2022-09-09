const student = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function () {
        //    console.log(this.name, 'is participating in an exam');
        return this.name + ' ' + 'is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is takeing improvment exam on ${subject}`
    },
    treatDey: function (amount, tips = 0) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam();
console.log(output);
const reExam = student.improveExam('algebra');
console.log(reExam);
const remaining = student.treatDey(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDey(500);
console.log(dolaRemaining)
