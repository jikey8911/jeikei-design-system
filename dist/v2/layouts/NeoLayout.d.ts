import React from 'react';
import '../styles/globals.css';
import '../styles/effects.css';
export interface NeoLayoutProps {
    children: React.ReactNode;
    showScanlines?: boolean;
}
export declare const NeoLayout: React.FC<NeoLayoutProps>;
