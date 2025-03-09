document.addEventListener('DOMContentLoaded', function() {
    // Language settings
    const translations = {
        en: {
            // Header Navigation
            home: "Home",
            characters: "Characters",
            news: "News",
            guides: "Guides",
            subscribe: "Subscribe",

            // Slider content
            slide1Title: "TEKKON 7 - Available Now",
            slide1Desc: "Experience the next generation of the King of Iron Fist Tournament",
            slide2Title: "Devil Jin Returns",
            slide2Desc: "The power of the devil gene unleashed once again",
            slide3Title: "New Features",
            slide3Desc: "Discover new mechanics and battle systems",

            // News Section
            newsTitle: "LATEST NEWS",
            news1Title: "ANNA WILLIAMS WILL RETURN IN TEKKON 7 AS SEASON 1 AVATAR!",
            news1Desc: "The fan-favorite assassin makes her dramatic return to the King of Iron Fist Tournament.",
            news2Title: "TEKKEN 8 PATCH NOTES V1.03",
            news2Desc: "Major balance updates and character adjustments in the latest patch.",
            news3Title: "TEKKEN 8 PATCH NOTES V1.01",
            news3Desc: "Initial balance adjustments and bug fixes for a better fighting experience.",
            readMore: "Read More",
            viewAll: "View All",

            // Extra Content Sections
            rosterTitle: "CHARACTER ROSTER",
            rosterDesc: "Explore the legendary fighters of TEKKEN 8",
            viewCharacters: "View Characters",
            guidesTitle: "GAME GUIDES",
            guidesDesc: "Master your favorite characters with our comprehensive guides",
            learnMore: "Learn More",

            // Footer Links
            termsOfService: "Terms of Service",
            privacyPolicy: "Privacy Policy",
            communityEvents: "Community Events",
            legal: "Legal",

            // Rating Info
            ratingLanguage: "Language",
            ratingSuggestive: "Suggestive Themes",
            ratingViolence: "Violence",
            ratingInteract: "Users Interact",
            ratingPurchases: "In-Game Purchases",

            // Subscribe Form
            createAccount: "Create Account",
            username: "Username",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            terms: "I agree to the terms and conditions",
            registrationSuccess: "Registration Successful!",
            accountCreated: "Your account has been created successfully.",
            returnHome: "Return to Homepage",

            // Form Placeholders
            usernamePlaceholder: "Enter your username",
            emailPlaceholder: "Enter your email",
            passwordPlaceholder: "Enter your password",
            confirmPasswordPlaceholder: "Confirm your password",

            // Form Validation Messages
            usernameTooShort: "Username must be at least 4 characters long",
            usernameInvalid: "Username can only contain letters and numbers",
            emailInvalid: "Please enter a valid email address",
            passwordTooShort: "Password must be at least 8 characters long",
            passwordNoNumber: "Password must contain at least one number",
            passwordsNoMatch: "Passwords do not match",
            termsRequired: "You must agree to the terms and conditions"
        },
        id: {
            // Header Navigation
            home: "Beranda",
            characters: "Karakter",
            news: "Berita",
            guides: "Panduan",
            subscribe: "Daftar",

            // Slider content
            slide1Title: "TEKKEN 8 - Sudah Tersedia",
            slide1Desc: "Rasakan generasi berikutnya dari Turnamen King of Iron Fist",
            slide2Title: "Devil Jin Kembali",
            slide2Desc: "Kekuatan gen iblis dilepaskan sekali lagi",
            slide3Title: "Fitur Baru",
            slide3Desc: "Temukan mekanik dan sistem pertarungan baru",

            // News Section
            newsTitle: "BERITA TERBARU",
            news1Title: "ANNA WILLIAMS AKAN KEMBALI DI TEKKEN 8 SEBAGAI AVATAR SEASON 1!",
            news1Desc: "Pembunuh bayaran favorit penggemar membuat comeback dramatis ke Turnamen King of Iron Fist.",
            news2Title: "CATATAN PATCH TEKKEN 8 V1.03",
            news2Desc: "Pembaruan keseimbangan utama dan penyesuaian karakter dalam patch terbaru.",
            news3Title: "CATATAN PATCH TEKKEN 8 V1.01",
            news3Desc: "Penyesuaian keseimbangan awal dan perbaikan bug untuk pengalaman bertarung yang lebih baik.",
            readMore: "Baca Selengkapnya",
            viewAll: "Lihat Semua",

            // Extra Content Sections
            rosterTitle: "DAFTAR KARAKTER",
            rosterDesc: "Jelajahi petarung legendaris TEKKEN 8",
            viewCharacters: "Lihat Karakter",
            guidesTitle: "PANDUAN GAME",
            guidesDesc: "Kuasai karakter favorit Anda dengan panduan lengkap kami",
            learnMore: "Pelajari Lebih Lanjut",

            // Footer Links
            termsOfService: "Ketentuan Layanan",
            privacyPolicy: "Kebijakan Privasi",
            communityEvents: "Acara Komunitas",
            legal: "Hukum",

            // Rating Info
            ratingLanguage: "Bahasa",
            ratingSuggestive: "Tema Sugestif",
            ratingViolence: "Kekerasan",
            ratingInteract: "Interaksi Pengguna",
            ratingPurchases: "Pembelian Dalam Game",

            // Subscribe Form
            createAccount: "Buat Akun",
            username: "Nama Pengguna",
            email: "Email",
            password: "Kata Sandi",
            confirmPassword: "Konfirmasi Kata Sandi",
            terms: "Saya menyetujui syarat dan ketentuan",
            registrationSuccess: "Pendaftaran Berhasil!",
            accountCreated: "Akun Anda telah berhasil dibuat.",
            returnHome: "Kembali ke Beranda",

            // Form Placeholders
            usernamePlaceholder: "Masukkan nama pengguna",
            emailPlaceholder: "Masukkan email",
            passwordPlaceholder: "Masukkan kata sandi",
            confirmPasswordPlaceholder: "Konfirmasi kata sandi",

            // Form Validation Messages
            usernameTooShort: "Nama pengguna minimal 4 karakter",
            usernameInvalid: "Nama pengguna hanya boleh berisi huruf dan angka",
            emailInvalid: "Masukkan alamat email yang valid",
            passwordTooShort: "Kata sandi minimal 8 karakter",
            passwordNoNumber: "Kata sandi harus memuat setidaknya satu angka",
            passwordsNoMatch: "Kata sandi tidak cocok",
            termsRequired: "Anda harus menyetujui syarat dan ketentuan"
        }
    };

    // Update placeholders function
    function updatePlaceholders(lang) {
        document.querySelectorAll('[data-translate-placeholder]').forEach(input => {
            const key = input.getAttribute('data-translate-placeholder');
            if (translations[lang][key]) {
                input.placeholder = translations[lang][key];
            }
        });
    }

    // Country selector and language handling
    const countrySelector = document.querySelector('.country-selector');
    if (countrySelector) {
        const currentLang = localStorage.getItem('language') || 'en';
        
        // Initial language update
        updatePageLanguage(currentLang);
        updatePlaceholders(currentLang);

        // Update selected option
        const languageSelect = countrySelector.querySelector('.language-select');
        if (languageSelect) {
            languageSelect.value = currentLang;
            
            // Add event listener for language change
            languageSelect.addEventListener('change', function() {
                const selectedLang = this.value;
                localStorage.setItem('language', selectedLang);
                updatePageLanguage(selectedLang);
                updatePlaceholders(selectedLang);
            });
        }
    }

    function updatePageLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Image slider functionality
    const slider = document.querySelector('.slider');
    if (slider) {
        const slides = slider.querySelector('.slides');
        const leftArrow = slider.querySelector('.left-arrow');
        const rightArrow = slider.querySelector('.right-arrow');
        
        let currentPosition = 0;
        const slideWidth = 100;

        function updateSlidePosition() {
            slides.style.transform = `translateX(-${currentPosition}%)`;
        }

        rightArrow.addEventListener('click', () => {
            const numSlides = slides.children.length;
            currentPosition = (currentPosition + slideWidth) % (numSlides * slideWidth);
            updateSlidePosition();
        });

        leftArrow.addEventListener('click', () => {
            const numSlides = slides.children.length;
            currentPosition = (currentPosition - slideWidth + numSlides * slideWidth) % (numSlides * slideWidth);
            updateSlidePosition();
        });
    }

    // Guide category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const guideCards = document.querySelectorAll('.guide-card');

    if (categoryButtons.length > 0 && guideCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const category = button.textContent.toLowerCase();
                guideCards.forEach(card => {
                    if (category === 'all') {
                        card.style.display = 'block';
                    } else {
                        const difficulty = card.querySelector('.difficulty').textContent.toLowerCase();
                        card.style.display = difficulty === category ? 'block' : 'none';
                    }
                });
            });
        });
    }
});
