import PatientForm from '@/components/forms/patient-form';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex max-h-screen h-screen'>
			<section className='relative flex-1 my-auto remove-scrollbar'>
				<div className='flex flex-col max-w-[496px] mx-auto px-6'>
					<div className='flex items-center mb-12'>
						<Image
							src='/logo-icon.svg'
							height={1000}
							width={1000}
							alt='patient'
							className='h-10 w-10'
						/>
						<span className='pl-2.5 text-xl text-white font-bold'>MedFlow</span>
					</div>
					<PatientForm />
					<div className='flex items-center justify-between mt-20 text-[14px] leading-[18px] '>
						<p className='justify-items-end text-gray-600 xl:text-left'>
							&copy; 2024 MedFlow
						</p>
						<Link
							href='/?admin=true'
							className='text-green-500 hover:underline'
						>
							Admin
						</Link>
					</div>
				</div>
			</section>
			<Image
				src='/images/onboarding-img.png'
				height={1000}
				width={1000}
				alt='Med Flow'
				className='hidden md:block max-w-[50%] object-cover'
			/>
		</div>
	);
}
