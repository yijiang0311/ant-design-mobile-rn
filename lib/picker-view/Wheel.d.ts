import type { ReactNode } from 'react';
import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
type ColumnItem = {
    label: string | ReactNode;
    value: string | number;
};
type Value = string | number;
type Props = {
    index: number;
    column: ColumnItem[];
    value?: Value;
    onSelect: (value: Value, index: number) => void;
    renderLabel: (item: ColumnItem, index: number) => ReactNode;
    itemHeight: number;
    wheelHeight: number;
};
declare class Wheel extends React.Component<Props> {
    scrollerRef: any;
    scrollBuffer: number;
    selectValue: any;
    isScrolling: boolean;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Props): boolean;
    componentDidUpdate(prevProps: Props): void;
    scrollTo: (y: any) => void;
    getSelectIndex(column: ColumnItem[], value?: Value): number;
    handleSelect: () => void;
    onScrollEndForWeb: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    /*** for web event ***/
    onTouchStartForWeb: () => void;
    onTouchEndForWeb: () => void;
    onScrollForWeb: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    updateSelectThrottle: () => void;
    onMomentumScrollBegin: () => void;
    onMomentumScrollEnd: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    renderItems: () => JSX.Element;
    render(): JSX.Element;
}
export default Wheel;
