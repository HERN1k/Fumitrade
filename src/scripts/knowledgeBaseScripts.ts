export const handleHashChange = () => {
    setTimeout(() => {
        const hash = window.location.hash;
    
        if (hash) {
            const section = document.getElementById(hash);
            
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, 0);
};