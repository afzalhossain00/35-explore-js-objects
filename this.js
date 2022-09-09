// console.log(this)

const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function () {
        console.log(this)
        //    console.log(this.name, 'is participating in an exam');
        return this.name + ' ' + 'is participating in an exam';
    },
    examArrow: () => {
        console.log(this)
    },
    examNested: () => {
        const arrow = () => {
            console.log(this)
        }
        arrow();
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

kodomAli.exam()

badamAli.exam = kodomAli.exam;
badamAli.exam()
kodomAli.examArrow()
kodomAli.examNested()

function clickHandler() {
    console.log('inside click handler', this)
}

document.getElementById('btn-click2').addEventListener('click', function () {
    console.log(this)
})
