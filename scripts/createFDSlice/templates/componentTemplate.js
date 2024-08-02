const interfaceConst = 'interface';

module.exports = (componentName) => `import styles from './${componentName}.module.scss'
import { FC } from 'react'


${interfaceConst} ${componentName}Props {
    
}

export const ${componentName}: FC<${componentName}Props> = ({}) => {
    return (
        <div>

        </div>
    );
}`
