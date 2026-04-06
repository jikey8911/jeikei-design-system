import React from 'react';
type ToastProps = {
    message: string;
    description?: string;
    variant?: 'success' | 'info' | 'warning' | 'danger';
    actionLabel?: string;
    onAction?: () => void;
    onClose?: () => void;
};
export declare const NeoToast: React.FC<ToastProps>;
export {};
