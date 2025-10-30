// O que o JS faz:
// 1. Encontra o botão e o parágrafo pelo ID no HTML.
// 2. Define o que acontece quando o botão é clicado.

// 1. Encontrando os elementos pelo ID
const botao = document.getElementById('meuBotao');
const areaDeMensagem = document.getElementById('mensagem-do-dia');

// 2. Adicionando um "ouvinte de evento" (listener)
// Quando o evento 'click' acontecer no 'botao', ele executa a função.
botao.addEventListener('click', function() {
    
    // Altera o texto do parágrafo
    areaDeMensagem.textContent = "Sucesso! Você adicionou interatividade com JavaScript! Parabéns pela atividade!";
    
    // Altera o estilo (CSS) do botão e da mensagem para destacar o resultado
    botao.style.backgroundColor = '#27ae60'; // Muda para verde
    botao.textContent = "CLICADO!";
    
    areaDeMensagem.style.fontWeight = 'bold';
    areaDeMensagem.style.color = '#27ae60'; 
});