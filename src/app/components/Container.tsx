import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div className='max-w-[1240px] w-full px-[20px] mx-auto'>{children}</div>
	);
};
