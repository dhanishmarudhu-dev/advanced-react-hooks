import { useInsertionEffect } from 'react';

// A minimal "CSS-in-JS" hook — injects a style tag before layout/paint
export function useCSS(css) {
    useInsertionEffect(() => {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style); // cleanup on unmount
        };
    }, [css]);
}