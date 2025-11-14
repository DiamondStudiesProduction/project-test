import styles from './panel-item-color-palette.module.css'
import type { TColorPaletteProps } from "../../../utils/types/types";

const PanelItemColorPalleteUI = ({ color }: TColorPaletteProps) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}></div>
  );
};

export default PanelItemColorPalleteUI;
