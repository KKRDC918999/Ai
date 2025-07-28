// Enhanced JavaScript with accessibility and security features
(function() {
    'use strict';

    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contactForm');
    const alertContainer = document.getElementById('alert-container');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const spinner = submitBtn?.querySelector('.spinner');

    // Form Validation Configuration
    const validators = {
        name: {
            required: true,
            minLength: 2,
            maxLength: 100,
            pattern: /^[a-zA-Z\u0E00-\u0E7F\s]+$/,
            errorMessages: {
                required: 'กรุณากรอกชื่อ-นามสกุล',
                minLength: 'ชื่อ-นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร',
                maxLength: 'ชื่อ-นามสกุลต้องไม่เกิน 100 ตัวอักษร',
                pattern: 'กรุณากรอกชื่อ-นามสกุลด้วยตัวอักษรเท่านั้น'
            }
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessages: {
                required: 'กรุณากรอกอีเมล',
                pattern: 'กรุณากรอกอีเมลในรูปแบบที่ถูกต้อง'
            }
        },
        phone: {
            required: false,
            pattern: /^[0-9+\-\s\(\)]+$/,
            errorMessages: {
                pattern: 'กรุณากรอกเบอร์โทรศัพท์ในรูปแบบที่ถูกต้อง'
            }
        },
        subject: {
            required: true,
            errorMessages: {
                required: 'กรุณาเลือกหัวข้อ'
            }
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000,
            errorMessages: {
                required: 'กรุณากรอกข้อความ',
                minLength: 'ข้อความต้องมีอย่างน้อย 10 ตัวอักษร',
                maxLength: 'ข้อความต้องไม่เกิน 1000 ตัวอักษร'
            }
        }
    };

    // Navigation Toggle
    function initNavigation() {
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('active');
                
                // Announce to screen readers
                const status = isExpanded ? 'ปิดเมนู' : 'เปิดเมนู';
                announceToScreenReader(status);
            });
        }
    }

    // Form Validation Functions
    function validateField(field, rules) {
        const value = field.value.trim();
        const errorElement = document.getElementById(field.id + '-error');
        
        // Clear previous error
        clearFieldError(field);

        // Required validation
        if (rules.required && !value) {
            showFieldError(field, errorElement, rules.errorMessages.required);
            return false;
        }

        // Skip other validations if field is empty and not required
        if (!value && !rules.required) {
            return true;
        }

        // Pattern validation
        if (rules.pattern && !rules.pattern.test(value)) {
            showFieldError(field, errorElement, rules.errorMessages.pattern);
            return false;
        }

        // Length validation
        if (rules.minLength && value.length < rules.minLength) {
            showFieldError(field, errorElement, rules.errorMessages.minLength);
            return false;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            showFieldError(field, errorElement, rules.errorMessages.maxLength);
            return false;
        }

        return true;
    }

    function showFieldError(field, errorElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.setAttribute('role', 'alert');
        }
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
        
        // Announce error to screen readers
        announceToScreenReader(message);
    }

    function clearFieldError(field) {
        const errorElement = document.getElementById(field.id + '-error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.removeAttribute('role');
        }
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
    }

    // Initialize form validation
    function initFormValidation() {
        if (!contactForm) return;

        // Real-time validation
        Object.keys(validators).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                field.addEventListener('blur', () => {
                    validateField(field, validators[fieldName]);
                });

                field.addEventListener('input', () => {
                    if (field.classList.contains('error')) {
                        clearFieldError(field);
                    }
                });

                // Add character counter for textarea
                if (fieldName === 'message') {
                    field.addEventListener('input', updateCharacterCount);
                }
            }
        });

        // Form submission
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Character counter for textarea
    function updateCharacterCount() {
        const messageField = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        const currentLength = messageField.value.length;
        const maxLength = validators.message.maxLength;
        
        if (messageError) {
            const counterText = `${currentLength}/${maxLength} ตัวอักษร`;
            messageError.textContent = counterText;
            messageError.className = currentLength > maxLength ? 'error' : 'info';
        }
    }

    // Form submission handler
    async function handleFormSubmission(e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        Object.keys(validators).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field && !validateField(field, validators[fieldName])) {
                isValid = false;
            }
        });

        if (!isValid) {
            showAlert('กรุณาตรวจสอบข้อมูลที่กรอก', 'error');
            return;
        }

        // Show loading state
        setLoadingState(true);

        try {
            // Simulate API call
            await submitFormData(new FormData(contactForm));
            showAlert('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด', 'success');
            contactForm.reset();
            
            // Announce success to screen readers
            announceToScreenReader('ส่งข้อความเรียบร้อยแล้ว');
        } catch (error) {
            showAlert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', 'error');
            console.error('Form submission error:', error);
            
            // Announce error to screen readers
            announceToScreenReader('เกิดข้อผิดพลาดในการส่งข้อความ');
        } finally {
            setLoadingState(false);
        }
    }

    // Form submission function
    async function submitFormData(formData) {
        // In a real application, you would send this to your server
        // For demo purposes, we'll simulate an API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% success rate)
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    // Loading state management
    function setLoadingState(loading) {
        if (!submitBtn) return;

        if (loading) {
            submitBtn.classList.add('loading');
            if (btnText) btnText.style.display = 'none';
            if (spinner) spinner.style.display = 'inline-block';
            submitBtn.disabled = true;
        } else {
            submitBtn.classList.remove('loading');
            if (btnText) btnText.style.display = 'inline';
            if (spinner) spinner.style.display = 'none';
            submitBtn.disabled = false;
        }
    }

    // Alert system
    function showAlert(message, type = 'info') {
        if (!alertContainer) return;

        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.setAttribute('role', 'alert');
        alert.setAttribute('aria-live', 'polite');
        alert.textContent = message;

        alertContainer.appendChild(alert);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 5000);
    }

    // Screen reader announcements
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (announcement.parentNode) {
                announcement.parentNode.removeChild(announcement);
            }
        }, 1000);
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update focus for accessibility
                    setTimeout(() => {
                        target.focus();
                    }, 1000);
                }
            });
        });
    }

    // Keyboard navigation support
    function initKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            // Escape key to close mobile menu
            if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
                navToggle.click();
            }
            
            // Enter key to submit form when focused on submit button
            if (e.key === 'Enter' && e.target === submitBtn) {
                contactForm?.dispatchEvent(new Event('submit'));
            }
        });
    }

    // Focus management for accessibility
    function initFocusManagement() {
        document.addEventListener('focusin', function(e) {
            if (e.target.closest('.nav-menu')) {
                navToggle?.setAttribute('aria-expanded', 'true');
            }
        });

        // Trap focus in mobile menu when open
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab' && navMenu?.classList.contains('active')) {
                const focusableElements = navMenu.querySelectorAll('a, button, input, textarea, select');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }

    // Performance optimization: Lazy loading for images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Service Worker registration for PWA capabilities
    function initServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Error handling
    function initErrorHandling() {
        window.addEventListener('error', function(e) {
            console.error('JavaScript error:', e.error);
            showAlert('เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่อีกครั้ง', 'error');
        });

        window.addEventListener('unhandledrejection', function(e) {
            console.error('Unhandled promise rejection:', e.reason);
            showAlert('เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่อีกครั้ง', 'error');
        });
    }

    // Analytics tracking (example)
    function initAnalytics() {
        // Track form submissions
        if (contactForm) {
            contactForm.addEventListener('submit', function() {
                // In a real application, you would send this to your analytics service
                console.log('Form submitted');
            });
        }

        // Track page views
        console.log('Page loaded:', window.location.pathname);
    }

    // Initialize all functions when DOM is loaded
    function init() {
        initNavigation();
        initFormValidation();
        initSmoothScrolling();
        initKeyboardNavigation();
        initFocusManagement();
        initLazyLoading();
        initServiceWorker();
        initErrorHandling();
        initAnalytics();
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export functions for testing (if needed)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            validateField,
            showAlert,
            submitFormData,
            setLoadingState
        };
    }

})(); 