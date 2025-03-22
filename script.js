document.addEventListener('DOMContentLoaded', function() {
            // Abre la envoltura
            setTimeout(function() {
                document.querySelector('.envelope').classList.add('open');
            }, 1000);
            
            const container = document.querySelector('.flower-container');
            const numPetals = 12; // Numeros de petalos
            
            // SVG de un petalo
            const petalSVG = `
            <svg viewBox="0 0 76 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.6397 84.8001C61.2416 105.126 51.2974 122.322 41.2184 133.694C36.1779 139.382 31.1214 143.593 26.3525 146.019C21.5847 148.445 17.1504 149.065 13.3015 147.665C9.45252 146.264 6.45481 142.938 4.36161 138.015C2.26798 133.091 1.10117 126.615 0.8957 119.018C0.484849 103.828 3.92035 84.2629 11.3184 63.9369C18.6932 43.675 32.6221 27.9502 44.7292 17.282C50.7802 11.9501 56.3693 7.88731 60.4443 5.1583C62.4817 3.79391 64.14 2.76327 65.2878 2.07442C65.8339 1.74665 66.2644 1.49629 66.565 1.32421C66.6847 1.64928 66.8535 2.11777 67.0612 2.71989C67.4976 3.98534 68.1055 5.84083 68.7892 8.19559C70.1567 12.9055 71.8267 19.6104 73.0347 27.5844C75.4519 43.5389 76.0144 64.5382 68.6397 84.8001Z" fill="url(#paint0_linear_174_7)" stroke="url(#paint1_linear_174_7)"/>
                <defs>
                    <linearGradient id="paint0_linear_174_7" x1="66.8276" y1="0.602624" x2="13.1305" y2="148.134" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F7FE6E"/>
                        <stop offset="1" stop-color="#EBB062"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_174_7" x1="66.8276" y1="0.602624" x2="13.1305" y2="148.134" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5C462A" stop-opacity="0.72"/>
                        <stop offset="1" stop-color="#F7FE6E" stop-opacity="0.5"/>
                    </linearGradient>
                </defs>
            </svg>
            `;
            
            // Circulo rotatorio
            for (let i = 0; i < numPetals; i++) {
                const angle = (i * (360 / numPetals));
                const delay = 3 + (i * 0.2); // Animación secuencial de los pétalos
                
                const petalDiv = document.createElement('div');
                petalDiv.className = 'petal';
                petalDiv.innerHTML = petalSVG;
                petalDiv.style.setProperty('--rotation', `${angle}deg`);
                petalDiv.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
                petalDiv.style.animation = `growPetal 0.8s ease-in-out ${delay}s forwards`;
                
                container.appendChild(petalDiv);
            }
        });
