const kodomAli = {
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

const result = kodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 5000
}

const result2 = kodomAli.exam.call(badamAli);

const badamMoney = kodomAli.treatDey.call(badamAli, 400, 50)

// console.log(result2)
console.log(badamMoney);

const badamAli2 = kodomAli.treatDey.apply(badamAli, [1000, 100])
console.log(badamAli2)

const badamAliTreat = kodomAli.treatDey.bind(badamAli)
const remaining = badamAliTreat(1000, 100)
console.log(remaining)