const Aluno = require('./Aluno');
const TurmaPresencial = require('./TurmaPresencial');

// Exemplo de uso das classes
const aluno1 = new Aluno("William", "williamCP", "2313707");
const turma1 = new TurmaPresencial("ES46A", 10, 0.9);

console.log(aluno1);
console.log(turma1);
console.log(turma1.Aprovado() ? "Aprovado" : "Reprovado");