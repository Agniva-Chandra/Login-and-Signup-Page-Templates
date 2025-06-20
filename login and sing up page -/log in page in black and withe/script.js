
        const loginToggle = document.getElementById('loginToggle');
        const signupToggle = document.getElementById('signupToggle');
        const toggleSlider = document.getElementById('toggleSlider');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const successMessage = document.getElementById('successMessage');

        // Toggle between login and signup
        loginToggle.addEventListener('click', () => {
            if (!loginToggle.classList.contains('active')) {
                switchToLogin();
            }
        });

        signupToggle.addEventListener('click', () => {
            if (!signupToggle.classList.contains('active')) {
                switchToSignup();
            }
        });

        function switchToLogin() {
            loginToggle.classList.add('active');
            signupToggle.classList.remove('active');
            toggleSlider.classList.remove('signup');
            
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden', 'show-signup');
            
            hideSuccess();
        }

        function switchToSignup() {
            signupToggle.classList.add('active');
            loginToggle.classList.remove('active');
            toggleSlider.classList.add('signup');
            
            loginForm.classList.add('show-signup');
            setTimeout(() => {
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
            }, 250);
            
            hideSuccess();
        }

        // Form submissions
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            simulateLogin();
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            simulateSignup();
        });

        function simulateLogin() {
            const submitBtn = loginForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Logging in...';
            submitBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                showSuccess('Welcome back! You\'ve successfully logged in.');
            }, 1500);
        }

        function simulateSignup() {
            const submitBtn = signupForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Creating Account...';
            submitBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                showSuccess('Account created successfully! Welcome aboard!');
            }, 1500);
        }

        function showSuccess(message) {
            successMessage.textContent = message;
            successMessage.classList.add('show');
            
            setTimeout(() => {
                hideSuccess();
            }, 4000);
        }

        function hideSuccess() {
            successMessage.classList.remove('show');
        }

        function handleSocialLogin(provider) {
            const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);
            showSuccess(`Redirecting to ${providerName} login...`);
        }

        function showForgotPassword() {
            showSuccess('Password reset link sent to your email!');
        }

        // Add floating animation to inputs
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });

        // Add particle interaction
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 50;
                const xMove = (x - 0.5) * speed;
                const yMove = (y - 0.5) * speed;
                
                particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });
   
