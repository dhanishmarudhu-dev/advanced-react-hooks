import { useCSS } from './useCSS';

function Button({ children, ...props }) {
    useCSS(`
    .fancy-button {
      background: royalblue;
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
  `);

    return <button className="fancy-button" {...props}>{children}</button>;
}

export default Button;