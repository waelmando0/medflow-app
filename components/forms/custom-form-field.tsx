'use client';

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';
import { FormFieldType } from './patient-form';
import Image from 'next/image';

interface CustomProps {
	control: Control<any>;
	fieldType: FormFieldType;
	name: string;
	label?: string;
	placeholder?: string;
	iconSrc?: string;
	iconAlt?: string;
	disabled?: string;
	dateFormat?: string;
	showTimeSelect?: boolean;
	children?: React.ReactNode;
	renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
	const { fieldType, iconSrc, iconAlt, placeholder } = props;

	switch (props.fieldType) {
		case FormFieldType.INPUT:
			return (
				<div className='flex rounded-md border border-muted-foreground bg-zinc-800 text-zinc-200'>
					{iconSrc && (
						<Image
							src={iconSrc}
							alt={iconAlt || 'icon'}
							height={24}
							width={24}
							className='ml-2'
						/>
					)}
					<FormControl>
						<Input
							placeholder={placeholder}
							{...field}
							className='border-0 bg-zinc-800 placeholder:text-zinc-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 '
						/>
					</FormControl>
				</div>
			);

		default:
			break;
	}
};

const CustomFormField = (props: CustomProps) => {
	const { control, fieldType, name, label } = props;

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex-1'>
					{fieldType !== FormFieldType.CHECKBOX && label && (
						<FormLabel className='text-white'>{label}</FormLabel>
					)}
					<RenderField field={field} props={props} />
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomFormField;
