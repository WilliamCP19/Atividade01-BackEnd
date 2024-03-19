class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }

    Aprovado() {
        return this.nota >= 6;
    }
}

module.exports = Turma;