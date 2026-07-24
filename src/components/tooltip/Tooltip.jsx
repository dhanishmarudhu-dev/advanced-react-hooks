import { useLayoutEffect, useRef, useState } from 'react';

function Tooltip({ text, children }) {
    const tooltipRef = useRef(null);
    const [top, setTop] = useState(0);
    const [visible, setVisible] = useState(false);

    useLayoutEffect(() => {
        if (visible && tooltipRef.current) {
            const height = tooltipRef.current.offsetHeight;
            setTop(-height - 8); // 8px gap above the button
        }
    }, [visible, text]);

    return (
        <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div
                    ref={tooltipRef}
                    style={{
                        position: 'absolute',
                        top,
                        left: 0,
                        background: '#333',
                        color: '#fff',
                        padding: '4px 8px',
                        borderRadius: 4,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {text}
                </div>
            )}
        </div>
    );
}

export default Tooltip;