import PatientForm from '@/components/forms/patient-form';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col md:flex-row'>
			<section className='w-full md:w-1/2 flex-1 remove-scrollbar'>
				<div className='flex flex-col mx-auto p-[max(4rem,calc(50%-38rem))] h-screen'>
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
					<div className='flex items-center justify-between text-[14px] leading-[18px] '>
						<p className='justify-items-end text-muted-foreground xl:text-left'>
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
			<div className='w-full md:w-1/2 hidden md:block'>
				<Image
					src='/images/onboarding-img.png'
					height={1000}
					width={1000}
					alt='Med Flow'
					className='object-cover w-full h-full'
				/>
			</div>
		</div>
	);
}
