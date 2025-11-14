import clsx from 'clsx';
import styles from './button.module.css'
import type { TButtonProps } from '../../../utils/types/types';

const ButtonUI: React.FC<TButtonProps> = ({children,width}) => {
  const className = clsx(styles[`width${width}`], styles.buttton);
  return <button className={className}>{children}</button>;
};

export default ButtonUI;
