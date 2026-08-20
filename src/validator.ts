const TITULO_MIN_LENGTH = 5;
const TITULO_MAX_LENGTH = 100;

function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim().length === 0) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    const tituloLimpo = titulo.trim();

    if (tituloLimpo.length < TITULO_MIN_LENGTH) {
        throw new Error(
            `O título do chamado deve possuir no mínimo ${TITULO_MIN_LENGTH} caracteres.`
        );
    }

    if (tituloLimpo.length > TITULO_MAX_LENGTH) {
        throw new Error(
            `O título do chamado deve possuir no máximo ${TITULO_MAX_LENGTH} caracteres.`
        );
    }

    return true;
}

export default validarChamado;
