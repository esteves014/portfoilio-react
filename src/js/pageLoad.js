window.addEventListener('DOMContentLoaded', (event) => {

    // Efeito de brilho que segue o mouse na sombra do botão
    document.querySelectorAll('.btn-outline').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Distância do centro
            const diffX = x - centerX;
            const diffY = y - centerY;
            const distance = Math.sqrt(diffX * diffX + diffY * diffY);

            // Evita divisão por zero
            if (distance < 1) return;

            // Normaliza para direção
            const dirX = (diffX / distance);
            const dirY = (diffY / distance);

            button.style.boxShadow = `
                0 8px 32px rgba(53, 0, 139, 0.2),
                inset 0 1px 1px rgba(255, 255, 255, 0.2),
                ${dirX * 25}px ${dirY * 25}px 35px rgba(146, 0, 190, 0.4),
                ${dirX * 12}px ${dirY * 12}px 15px rgba(64, 0, 167, 0.2)
            `;
        });

        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = `
                0 8px 32px rgba(53, 0, 139, 0.2),
                inset 0 1px 1px rgba(255, 255, 255, 0.2)
            `;
        });
    });

    const elements = document.querySelectorAll('.hidden');
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    elements.forEach((element) => myObserver.observe(element));
});


