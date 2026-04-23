import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'enroll';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ 
  children, 
  variant = 'dark', 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
