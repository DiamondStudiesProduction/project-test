import type { TColorPaletteProps } from "../../utils/types/types";
import PanelItemColorPalleteUI from "../ui/panel-item-color-palette/panel-item-color-palette";

const PanelItemColorPallete = ({ color }: TColorPaletteProps) => {
  return <PanelItemColorPalleteUI color={color} />;
};

export default PanelItemColorPallete;
