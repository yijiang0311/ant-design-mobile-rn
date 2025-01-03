import React from 'react';
import { DatePickerPropsType } from './PropsType';
export type DatePickerRef = any;
export interface DatePickerProps extends DatePickerPropsType {
}
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<any>>;
export default DatePicker;
