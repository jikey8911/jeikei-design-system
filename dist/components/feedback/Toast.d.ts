import React from 'react';
export interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info';
    onClose?: () => void;
    className?: string;
}
export declare const Toast: React.FC<ToastProps>;
