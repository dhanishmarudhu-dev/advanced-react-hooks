import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focusInput() {
            inputRef.current.focus();
        },
        clearInput() {
            inputRef.current.value = '';
        }
    }));

    return <input ref={inputRef} {...props} />;
});

export default MyInput;