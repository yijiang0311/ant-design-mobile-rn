import { RenderLabel } from '../date-picker-view/PropsType';
import { PickerColumn } from '../picker-view/PropsType';
import type { DatePickerFilter } from './date-picker-utils';
export type DatePrecision = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export declare function generateDatePickerColumns(selected: string[], min: Date, max: Date, precision: DatePrecision, renderLabel: RenderLabel, filter: DatePickerFilter | undefined, tillNow?: boolean): PickerColumn[];
export declare function convertDateToStringArray(date: Date | undefined | null): string[];
export declare function convertStringArrayToDate<T extends string | number | null | undefined>(value: T[]): Date;
