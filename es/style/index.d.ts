import React, { ReactNode } from 'react';
import defaultTheme from './themes/default';
export declare const ThemeContext: React.Context<{
    color_text_base: string;
    color_text_base_inverse: string;
    color_text_placeholder: string;
    color_text_disabled: string;
    color_text_caption: string;
    color_text_paragraph: string;
    color_link: string;
    color_icon_base: string;
    fill_body: string;
    fill_base: string;
    fill_tap: string;
    fill_disabled: string;
    fill_mask: string;
    fill_grey: string;
    brand_primary: string;
    brand_primary_tap: string;
    brand_success: string;
    brand_warning: string;
    brand_error: string;
    brand_important: string;
    border_color_base: string;
    border_color_thin: string;
    font_size_icontext: number;
    font_size_caption_sm: number;
    font_size_base: number;
    font_size_subhead: number;
    font_size_caption: number;
    font_size_heading: number;
    radius_xs: number;
    radius_sm: number;
    radius_md: number;
    radius_lg: number;
    border_width_sm: number;
    border_width_md: number;
    border_width_lg: number;
    h_spacing_sm: number;
    h_spacing_md: number;
    h_spacing_lg: number;
    v_spacing_xs: number;
    v_spacing_sm: number;
    v_spacing_md: number;
    v_spacing_lg: number;
    v_spacing_xl: number;
    icon_size_xxs: number;
    icon_size_xs: number;
    icon_size_sm: number;
    icon_size_md: number;
    icon_size_lg: number;
    actionsheet_item_height: number;
    actionsheet_item_font_size: number;
    button_height: number;
    button_font_size: number;
    button_height_sm: number;
    button_font_size_sm: number;
    primary_button_fill: string;
    primary_button_fill_tap: string;
    ghost_button_color: string;
    ghost_button_fill_tap: string;
    warning_button_fill: string;
    warning_button_fill_tap: string;
    link_button_font_size: number;
    modal_font_size_heading: number;
    modal_button_font_size: number;
    modal_button_height: number;
    list_item_height_sm: number;
    list_item_height: number;
    tabs_height: number;
    tabs_font_size_heading: number;
    tab_bar_fill: string;
    tab_bar_height: number;
    toast_fill: string;
    search_bar_fill: string;
    search_bar_height: number;
    search_bar_input_height: number;
    search_bar_font_size: number;
    search_color_icon: string;
    notice_bar_fill: string;
    notice_bar_height: number;
    checkbox_fill_disabled: string;
    checkbox_border: string;
    checkbox_border_disabled: string;
    switch_unchecked: string;
    switch_unchecked_disabled: string;
    tag_height: number;
    tag_small_height: number;
    picker_header_height: number;
    picker_item_height: number;
    prefix_width: number;
    prefix_padding: number;
    extra_max_width: string;
    tooltip_dark: string;
    tooltip_border_radius: number;
    tooltip_arrow_size: number;
    toast_zindex: number;
    action_sheet_zindex: number;
    popup_zindex: number;
    modal_zindex: number;
    tooltip_zindex: number;
}>;
export type Theme = typeof defaultTheme & {
    [key: string]: any;
};
export type PartialTheme = Partial<Theme>;
export interface ThemeProviderProps {
    value?: PartialTheme;
    children?: ReactNode;
}
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
export interface UseThemeContextProps {
    theme?: PartialTheme;
}
export declare function useTheme<T>(props: {
    themeStyles: (theme: Theme) => T;
    styles?: Partial<T>;
}): T;
export interface WithThemeProps<T, S> {
    themeStyles?: (theme: Theme) => T;
    styles?: S & {
        [key: string]: any;
    };
    children: (styles: T & {
        [key: string]: any;
    }, theme: Theme) => ReactNode;
}
/**
 * Component can extends this props
 */
export type WithThemeStyles<T> = {
    styles?: Partial<T>;
};
export declare function WithTheme<T, S>(props: WithThemeProps<T, S>): JSX.Element;