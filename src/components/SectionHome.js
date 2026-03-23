import { forwardRef, useEffect } from 'react';

const SectionHome = forwardRef((props, ref) => {
    useEffect(() => {
        const buttons = document.querySelectorAll('.btn-outline');

        const handleMouseMove = (e, button) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const diffX = x - centerX;
            const diffY = y - centerY;
            const distance = Math.sqrt(diffX * diffX + diffY * diffY);

            if (distance < 1) return;

            const dirX = (diffX / distance);
            const dirY = (diffY / distance);

            button.style.boxShadow = `
                0 8px 32px rgba(53, 0, 139, 0.2),
                inset 0 1px 1px rgba(255, 255, 255, 0.2),
                ${dirX * 25}px ${dirY * 25}px 35px rgba(146, 0, 190, 0.4),
                ${dirX * 12}px ${dirY * 12}px 15px rgba(64, 0, 167, 0.2)
            `;
        };

        const handleMouseLeave = (button) => {
            button.style.boxShadow = `
                0 8px 32px rgba(53, 0, 139, 0.2),
                inset 0 1px 1px rgba(255, 255, 255, 0.2)
            `;
        };

        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => handleMouseMove(e, button));
            button.addEventListener('mouseleave', () => handleMouseLeave(button));
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('mousemove', (e) => handleMouseMove(e, button));
                button.removeEventListener('mouseleave', () => handleMouseLeave(button));
            });
        };
    }, []);

    return (
        <section id="home" ref={ref} className="container-fluid p-5 d-flex align-items-center justify-content-center h-100 position-relative overflow-hidden">
            <div className="w-max-content z-10 position-relative">
                <h1 className="text-center text-white">
                    Hi, <span className="span-home">I'm Vitor Miguel</span> ---- <br />
                    <span className="span-home">Full Stack Developer</span>
                </h1>
                <p className="text-center text-white my-4">
                    Full Stack Developer Laravel, PHP, MySQL, <br /> javascript, HTML, CSS and Bootstrap
                </p>

                <div className="d-flex g-2 m-auto w-100 justify-content-around mt-4" role="group" aria-label="Group of buttons">
                    <button type="button" className="btn btn-outline text-white"><i className="bi bi-github"></i> Github</button>
                    <button type="button" className="btn btn-outline text-white"><i className="bi bi-instagram"></i> Instagram</button>
                    <button type="button" className="btn btn-outline text-white"><i className="bi bi-linkedin"></i> LinkedIn</button>
                </div>
            </div>
        </section>
    );
});

export default SectionHome;