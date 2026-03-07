const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Usage: node scripts/generate-component.js ComponentName');
  process.exit(1);
}

const componentDir = path.join(__dirname, '../src/components/ui', componentName);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

// Generate Component File
const componentContent = `import React from 'react';

export interface ${componentName}Props {
  children?: React.ReactNode;
  className?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ children, className = "" }) => {
  return (
    <div className={\`jk-${componentName.toLowerCase()} \${className}\`}>
      {children}
    </div>
  );
};
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent);

// Generate Index File
const indexContent = `export * from './${componentName}';\n`;
fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);

console.log(`✅ Component ${componentName} generated in src/components/ui/${componentName}`);
