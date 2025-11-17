export type TButtonProps = {
  children: React.ReactNode;
  width?: 9 | 11 | 15
};

export type TFavouritesButtonProps = {
  children: React.ReactNode;
};

export type TColorPaletteProps = {
  color: string
}

export type TPanelItemSize = {
  text: string
}

export type TUserDataComponent = {
    title: string;
    text1: string;
    text2?: string | boolean;
    buttonText: string;
    linkText: string;
    linkText2?: string;
}

export interface IHeaderLayoutUI {
  mobileAsideIsOpen: boolean;
  handleToggleMobileAside: () => void;
}

export interface IAsideHeader {
  mobileAsideIsOpen: boolean;
}

export interface IAsideHeaderUI extends IAsideHeader{
  asideManIsOpen: boolean;
  handleToggleAsideManIsOpen: () => void;
  asideWomanIsOpen: boolean;
  handleToggleAsideWomanIsOpen: () => void
}

export interface IHeaderUI {
  mobileAsideIsOpen: boolean;
  handleToggleMobileAside: () => void;
}

export interface ICatalogUI {
  mobileFilterIsOpen: boolean;
  handleTogglemMbileFilter: () => void;
}