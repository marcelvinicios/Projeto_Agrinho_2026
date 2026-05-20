function verificarResposta(isCorrect, elemento) {
    const feedback = document.getElementById('feedback');
    
    // Torna o bloco de feedback visível na página
    feedback.style.display = 'block';
    
    if (isCorrect) {
        feedback.textContent = "Correto! O uso massivo e contínuo de químicos sintéticos degrada o solo e polui os lençóis freáticos, indo contra os princípios da sustentabilidade.";
        feedback.className = "correct";
    } else {
        feedback.textContent = "Incorreto. Essa é uma prática sustentável positiva. Tente procurar a alternativa que causa danos a longo prazo!";
        feedback.className = "incorrect";
    }
}