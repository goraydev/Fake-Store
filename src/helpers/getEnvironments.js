export const getEnvironments = () => {
    return {
        ...import.meta.env,
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_URL_PAY_COMPLETED: import.meta.env.VITE_URL_PAY_COMPLETED,
        VITE_URL_BACKEND: import.meta.env.VITE_URL_BACKEND,
        VITE_MODE: import.meta.env.VITE_MODE
    }
};
