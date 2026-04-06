import React from 'react';
type Props = {
    open: boolean;
    title?: string;
    onClose: () => void;
    footer?: React.ReactNode;
};
export declare const NeoModal: React.FC<React.PropsWithChildren<Props>>;
export {};
