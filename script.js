// Tocar/pausar música
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const icon = document.getElementById('musicIcon');
    
    if (music.paused) {
        music.play();
        icon.textContent = '🔊';
    } else {
        music.pause();
        icon.textContent = '🔇';
    }
}

// Rolagem suave para o conteúdo
function scrollToContent() {
    document.querySelector('main').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Mostrar relatos das montanhas
function showStory(mountain) {
    // Esconder todos os relatos primeiro
    const stories = document.querySelectorAll('.story');
    stories.forEach(story => {
        story.classList.remove('active');
    });
    
    // Mostrar o relato selecionado
    const selectedStory = document.getElementById(`${mountain}-story`);
    selectedStory.classList.add('active');
    
    // Rolagem suave para a seção de relatos
    document.getElementById('storiesSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Mostrar o primeiro relato por padrão
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('everest-story').classList.add('active');
    
    // Tentar reproduzir música automaticamente (pode não funcionar em todos os navegadores)
    document.getElementById('bgMusic').volume = 0.3;
    const playPromise = document.getElementById('bgMusic').play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Reprodução automática impedida. O usuário precisa interagir primeiro.");
        });
    }
});
