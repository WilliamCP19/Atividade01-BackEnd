const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    Aprovado() {
        return super.Aprovado() && this.frequencia >= 0.75; // Considerando que a frequência mínima para aprovação é 75%
    }
}

module.exports = TurmaPresencial;