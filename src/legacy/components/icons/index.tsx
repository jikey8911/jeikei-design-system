import React from 'react';

export const IconProps = {
  size: 24,
  color: "#00ff9c",
  strokeWidth: 2,
};

export const NeuralIcon: React.FC<{ size?: number; color?: string; children: React.ReactNode }> = ({
  size = 24,
  color = "#00ff9c",
  children,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: `drop-shadow(0 0 5px ${color})` }}
  >
    {children}
  </svg>
);

export const ActivityIcon = (props: any) => (
  <NeuralIcon {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </NeuralIcon>
);

export const CommandIcon = (props: any) => (
  <NeuralIcon {...props}>
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
    <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3 3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" />
  </NeuralIcon>
);

export const ShieldIcon = (props: any) => (
  <NeuralIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </NeuralIcon>
);

export const TerminalIcon = (props: any) => (
  <NeuralIcon {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </NeuralIcon>
);

