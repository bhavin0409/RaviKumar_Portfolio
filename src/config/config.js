const config = {
    EMAILJS_PUBLIC_KEY: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
    EMAILJS_TEMPLATE_ID: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    EMAILJS_SERVICE_ID: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
}

export default config;