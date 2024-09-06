'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomFormField from './custom-form-field';

export enum FormFieldType {
	INPUT = 'input',
	TEXTAREA = 'textarea',
	PHONE_INPUT = 'phoneInput',
	CHECKBOX = 'checkbox',
	DATE_PICKER = 'datePicker',
	SELECT = 'select',
	SKELETON = 'skeleton',
}

const formSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
});

const PatientForm = () => {
	// Define your form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
		},
	});

	// Define a submit handler
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 flex-1'>
				<div>
					<h2 className='mt-6 text-3xl font-extrabold text-slate-100'>
						Hi there 👋
					</h2>
					<p className='mt-2 text-lg text-muted-foreground'>
						Schedule your first appointment
					</p>
				</div>
				{/* Pass the control */}
				<CustomFormField
					fieldType={FormFieldType.INPUT}
					control={form.control}
					name='name'
					label='Full name'
					placeholder='John doe'
					iconSrc='/icons/user.svg'
					iconAlt='user'
				/>
				<Button type='submit' variant='secondary'>
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default PatientForm;
