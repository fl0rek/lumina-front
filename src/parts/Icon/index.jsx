// Imports
// ------
import React from 'react';

// Styles
// ------
import { Jacket } from './styles';

// Component
// ------
const Icon = ({ type, className, onClick }) => {
	if (type === 'facebook')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path d='M24,12.072A12,12,0,1,0,10.125,23.926V15.541H7.078V12.072h3.047V9.428c0-3.007,1.792-4.669,4.532-4.669a18.611,18.611,0,0,1,2.687.234V7.947H15.83a1.734,1.734,0,0,0-1.947,1.49,1.71,1.71,0,0,0-.008.385v2.25H17.2l-.532,3.469h-2.8v8.385A12,12,0,0,0,24,12.072Z' />
			</Jacket>
		);

	if (type === 'codepen')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path d='M24,8.2C24,8.2,24,8.2,24,8.2c0-0.1,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1 c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l-11-7.3 c-0.3-0.2-0.8-0.2-1.1,0l-11,7.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1v7.3 c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0,0,0,0c0,0,0,0,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l11,7.3c0.2,0.1,0.4,0.2,0.6,0.2 c0.2,0,0.4-0.1,0.6-0.2l11-7.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1 c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1V8.3 C24,8.3,24,8.3,24,8.2z M13,3l8.1,5.4l-3.6,2.4l-4.5-3V3z M11,3v4.8l-4.5,3L2.9,8.3L11,3z M2.1,10.3L4.6,12l-2.6,1.7V10.3z M11,21 l-8.1-5.4l3.6-2.4l4.5,3V21z M12,14.4L8.4,12L12,9.6l3.6,2.4L12,14.4z M13,21v-4.8l4.5-3l3.6,2.4L13,21z M21.9,13.7L19.4,12l2.6-1.7 V13.7z' />
			</Jacket>
		);

	if (type === 'dribbble')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M22.1,13.6c-0.4-0.1-3.2-1-6.4-0.4c1.3,3.7,1.9,6.7,2,7.3C20,19,21.7,16.5,22.1,13.6z M16,21.5c-0.2-0.9-0.7-4-2.2-7.8 c0,0,0,0-0.1,0c-5.8,2-7.9,6-8,6.4c1.7,1.4,3.9,2.2,6.3,2.2C13.4,22.3,14.8,22,16,21.5z M4.4,18.9c0.2-0.4,3-5.1,8.3-6.8 c0.1,0,0.3-0.1,0.4-0.1c-0.3-0.6-0.5-1.2-0.8-1.7c-5.1,1.5-10.1,1.5-10.5,1.5c0,0.1,0,0.2,0,0.3C1.8,14.6,2.7,17.1,4.4,18.9z M2,9.9 c0.5,0,4.7,0,9.5-1.2c-1.7-3-3.5-5.6-3.8-5.9C4.8,4.1,2.6,6.7,2,9.9z M9.6,2.1c0.3,0.4,2.1,2.9,3.8,6c3.6-1.4,5.2-3.4,5.4-3.7 C17,2.7,14.6,1.8,12,1.8C11.2,1.8,10.4,1.9,9.6,2.1z M19.9,5.5c-0.2,0.3-1.9,2.5-5.7,4c0.2,0.5,0.5,1,0.7,1.5 c0.1,0.2,0.1,0.4,0.2,0.5c3.4-0.4,6.8,0.3,7.1,0.3C22.2,9.5,21.4,7.3,19.9,5.5z'
				/>
			</Jacket>
		);

	if (type === 'instagram')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'>
				<path d='M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z' />
				<path d='M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z' />
				<circle cx='17.872' cy='6.128' r='1.32' />
			</Jacket>
		);

	if (type === 'linkedin')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path d='M23,0H1C0.4,0,0,0.4,0,1v22c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V1C24,0.4,23.6,0,23,0z M7.1,20.5H3.6V9h3.6 V20.5z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1C7.4,6.5,6.5,7.4,5.3,7.4z M20.5,20.5h-3.6 v-5.6c0-1.3,0-3-1.8-3c-1.9,0-2.1,1.4-2.1,2.9v5.7H9.4V9h3.4v1.6h0c0.5-0.9,1.6-1.8,3.4-1.8c3.6,0,4.3,2.4,4.3,5.5V20.5z' />
			</Jacket>
		);

	if (type === 'arrow-right')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M5 12H18.1818' strokeLinecap='square' />
				<path d='M12 5L19 12L12 19' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-down')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M12 5L12 18.1818' strokeLinecap='square' />
				<path d='M19 12L12 19L5 12' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-left')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M19 12L5.81818 12' strokeLinecap='square' />
				<path d='M12 19L5 12L12 5' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-up')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M12 19L12 5.81818' strokeLinecap='square' />
				<path d='M5 12L12 5L19 12' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'return' || type === 'enter')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M19 7V11H5.83L9.41 7.41L8 6L2 12L8 18L9.41 16.59L5.83 13H21V7H19Z' />
			</Jacket>
		);

	if (type === 'arrow-up-right')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M7 17L16.5 7.5' strokeLinecap='square' />
				<path d='M7 7H17V17' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-left')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M19 12L5.81818 12' />
				<path d='M12 19L5 12L12 5' />
			</Jacket>
		);

	if (type === 'warning')
		return (
			<Jacket
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M15.8,12.526,9.483.88A1.668,1.668,0,0,0,8.8.2,1.693,1.693,0,0,0,6.516.88L.2,12.526A1.678,1.678,0,0,0,1.686,15H14.314a1.7,1.7,0,0,0,.8-.2,1.673,1.673,0,0,0,.687-2.274ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13ZM9,9.5a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,7,9.5v-4A.5.5,0,0,1,7.5,5h1a.5.5,0,0,1,.5.5Z' />
			</Jacket>
		);
	if (type === 'plus')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'>
				<path d='M12 5v14' />
				<path d='M5 12h14' />
			</Jacket>
		);

	if (type === 'Awwwards')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='120'
				height='120'
				viewBox='0 0 120 120'>
				<path d='M65.6002 69.4L56.5002 36H44.7002C44.7002 36 39.1002 58.3 36.4002 69.4C33.6002 61.6 25.9002 36 25.9002 36H14.2002L30.3002 87H41.7002L50.5002 55.8L59.8002 87H70.6002L86.9002 36H74.7002L65.6002 69.4ZM97.0002 70.4C92.5002 70.4 88.8002 74.3 88.8002 79.1C88.8002 83.9 92.5002 87.8 97.0002 87.8C101.5 87.8 105.2 83.9 105.2 79.1C105.2 74.3 101.6 70.4 97.0002 70.4Z' />
			</Jacket>
		);

	if (type === 'CSSDA')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='120'
				height='120'
				viewBox='0 0 120 120'>
				<path d='M72.6001 48.1999L62.5001 38.2999L52.7001 48.1999H47.1001L68.0001 27.3999H46.0001L25.1001 48.1999H17.1001V49.6999H102.9V48.1999H72.6001Z' />
				<path d='M17.1001 72H47.2001L57.0001 81.8L67.0001 72H72.4001L51.6001 92.6H73.5001L84.5001 81.8L94.4001 72H102.9V70.5H17.1001V72Z' />
				<path d='M33.7001 57.2999C34.1001 57.2999 34.5001 57.3999 34.9001 57.4999C35.3001 57.5999 35.6001 57.7999 36.0001 57.8999L36.8001 55.7999C35.8001 55.2999 34.8001 55.0999 33.8001 55.0999C32.8001 55.0999 32.0001 55.2999 31.3001 55.6999C30.6001 56.0999 30.0001 56.6999 29.7001 57.4999C29.3001 58.2999 29.1001 59.0999 29.1001 60.1999C29.1001 61.7999 29.5001 62.9999 30.3001 63.8999C31.1001 64.7999 32.2001 65.1999 33.7001 65.1999C34.7001 65.1999 35.6001 64.9999 36.5001 64.6999V62.4999C36.1001 62.6999 35.7001 62.7999 35.3001 62.8999C34.9001 62.9999 34.5001 63.0999 34.1001 63.0999C32.7001 63.0999 32.0001 62.1999 32.0001 60.2999C32.0001 59.3999 32.2001 58.6999 32.5001 58.1999C32.6001 57.5999 33.1001 57.2999 33.7001 57.2999Z' />
				<path d='M45.4003 63C44.9003 63 44.5003 62.8999 43.9003 62.7999C43.4003 62.6999 42.8003 62.5 42.3003 62.2V64.5C42.8003 64.7 43.2003 64.9 43.7003 65C44.1003 65.1 44.7003 65.0999 45.3003 65.0999C46.1003 65.0999 46.8003 64.9999 47.3003 64.6999C47.9003 64.3999 48.3003 64.0999 48.6003 63.5999C48.9003 63.0999 49.1003 62.6 49.1003 62C49.1003 61.3 48.9003 60.8 48.6003 60.4C48.3003 60 47.7003 59.6 46.9003 59.2C46.0003 58.8 45.5003 58.5 45.3003 58.4C45.1003 58.2 45.0003 58.1 45.0003 57.9C45.0003 57.7 45.1003 57.6 45.2003 57.5C45.4003 57.4 45.6003 57.2999 45.9003 57.2999C46.6003 57.2999 47.3003 57.5 48.3003 57.9L49.1003 55.9C48.1003 55.4 47.0003 55.2 46.0003 55.2C44.9003 55.2 44.0003 55.5 43.3003 56C42.6003 56.5 42.3003 57.1999 42.3003 58.0999C42.3003 58.5999 42.4003 58.9999 42.5003 59.2999C42.7003 59.6999 42.9003 60 43.2003 60.2C43.5003 60.5 44.0003 60.7 44.6003 61C45.3003 61.3 45.7003 61.4999 45.9003 61.5999C46.1003 61.6999 46.2003 61.8 46.3003 61.9C46.4003 62 46.4003 62.0999 46.4003 62.2999C46.4003 62.4999 46.3003 62.6999 46.1003 62.7999C46.0003 62.8999 45.8003 63 45.4003 63Z' />
				<path d='M57.8002 63C57.3002 63 56.9002 62.8999 56.3002 62.7999C55.8002 62.6999 55.2002 62.5 54.7002 62.2V64.5C55.2002 64.7 55.6002 64.9 56.1002 65C56.5002 65.1 57.1002 65.0999 57.7002 65.0999C58.5002 65.0999 59.2002 64.9999 59.7002 64.6999C60.3002 64.3999 60.7002 64.0999 61.0002 63.5999C61.3002 63.0999 61.5002 62.6 61.5002 62C61.5002 61.3 61.3002 60.8 61.0002 60.4C60.7002 60 60.1002 59.6 59.3002 59.2C58.4002 58.8 57.9002 58.5 57.7002 58.4C57.5002 58.2 57.4002 58.1 57.4002 57.9C57.4002 57.7 57.5002 57.6 57.6002 57.5C57.8002 57.4 58.0002 57.2999 58.3002 57.2999C59.0002 57.2999 59.7002 57.5 60.7002 57.9L61.5002 55.9C60.5002 55.4 59.4002 55.2 58.4002 55.2C57.3002 55.2 56.4002 55.5 55.7002 56C55.0002 56.5 54.7002 57.1999 54.7002 58.0999C54.7002 58.5999 54.8002 58.9999 54.9002 59.2999C55.1002 59.6999 55.3002 60 55.6002 60.2C55.9002 60.5 56.4002 60.7 57.0002 61C57.7002 61.3 58.1002 61.4999 58.3002 61.5999C58.5002 61.6999 58.6002 61.8 58.7002 61.9C58.8002 62 58.8002 62.0999 58.8002 62.2999C58.8002 62.4999 58.7002 62.6999 58.5002 62.7999C58.4002 62.8999 58.1002 63 57.8002 63Z' />
				<path d='M75.8 59.9C75.8 58.4 75.4 57.2 74.5 56.4C73.7 55.6 72.4 55.2 70.9 55.2H67.5V65H70.6C72.2 65 73.5 64.6 74.4 63.7C75.4 62.8 75.8 61.6 75.8 59.9ZM72.5 62.0999C72.1 62.5999 71.5 62.7999 70.7 62.7999H70.1V57.4H70.9C71.6 57.4 72.2 57.6 72.5 58C72.9 58.4 73 59.1 73 60C73.1 61 72.9 61.6999 72.5 62.0999Z' />
				<path d='M87.6 63.2L88 65H90.9L87.7 55.2H84.2L81 65H83.9L84.4 63.2H87.6ZM85.7 58C85.8 57.5 85.9 57.1 85.9 56.9C85.9 57.1 86 57.4999 86.2 58.0999C86.3 58.6999 86.5 59.1 86.6 59.5L87 61H84.9C85.3 59.5 85.6 58.5 85.7 58Z' />
			</Jacket>
		);

	if (type === 'FWA')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='120'
				height='120'
				viewBox='0 0 120 120'>
				<path d='M96.5998 51.5999C96.9998 51.5999 97.3998 51.7 97.6998 51.9C98.3998 52.3 98.8998 53 98.8998 53.9V60.4H105.2C106.5 60.4 107.5 61.4 107.5 62.7C107.5 64 106.5 65 105.2 65H98.8998V71.1999C98.8998 72.4999 97.8998 73.5 96.5998 73.5C96.2998 73.5 79.0998 73.5 79.0998 73.5C77.7998 73.5 76.7998 72.4999 76.7998 71.1999V62.5999C76.8998 61.3999 77.8998 60.4 79.0998 60.4H94.2998V56.2H76.7998L68.4998 71.6999C68.3998 72.3999 67.8998 73 67.2998 73.3C66.9998 73.5 66.5998 73.5 66.2998 73.5C65.4998 73.5 64.6998 73.1 64.2998 72.4C64.1998 72.3 64.0998 72.1 64.0998 72L57.4998 59L50.8998 71.6999C50.5998 72.3999 50.1998 73 49.4998 73.3C49.1998 73.5 48.7998 73.5 48.4998 73.5C47.6998 73.5 46.8998 73.1 46.4998 72.4C46.3998 72.3 46.2998 72.1 46.2998 72L38.2998 56.2H24.8998V60.4H35.6998C36.9998 60.4 37.9998 61.4 37.9998 62.7C37.9998 64 36.9998 65 35.6998 65H24.8998V71.3C24.8998 72.6 23.8998 73.5999 22.5998 73.5999C21.2998 73.5999 20.2998 72.6 20.2998 71.3V65H13.9998C12.6998 65 11.6998 64 11.6998 62.7C11.6998 61.4 12.6998 60.4 13.9998 60.4H20.2998V53.9C20.2998 53 20.7998 52.3 21.4998 51.9C21.7998 51.7 22.1998 51.5999 22.5998 51.5999H39.5998C39.9998 51.5999 40.2998 51.6999 40.5998 51.7999C41.0998 51.9999 41.4998 52.4 41.6998 52.9L48.3998 66.1999L55.0998 53.5C55.3998 52.8 55.5998 52.1999 56.3998 51.7999C56.6998 51.5999 57.0998 51.5999 57.3998 51.5999C57.9998 51.5999 58.4998 51.8 58.8998 52.2C59.2998 52.5 59.4998 52.6999 59.7998 53.2999L66.1998 66.1999L73.2998 52.9C73.4998 52.6 73.6998 52.2999 73.9998 52.0999C74.3998 51.7999 74.8998 51.5999 75.4998 51.5999H96.5998ZM81.2998 68.8H94.2998V64.9H81.2998V68.8ZM96.5998 46.9H75.5998C74.0998 46.9 72.5998 47.3999 71.3998 48.2999C70.5998 48.8999 69.8998 49.7 69.3998 50.5L66.4998 55.9C66.4998 55.9 63.0998 49.3 62.0998 48.4C60.7998 47.3 59.1998 46.7 57.5998 46.7C56.5998 46.7 55.4998 46.9 54.5998 47.4C52.7998 48.3 51.7998 49.8999 50.8998 51.7999L48.6998 55.9L45.9998 50.5999C45.2998 49.1999 44.0998 48 42.6998 47.4C41.7998 46.9 40.6998 46.7 39.6998 46.7H22.6998C21.4998 46.7 20.3998 47 19.3998 47.5C17.1998 48.7 15.7998 51.0999 15.7998 53.5999V55.4H14.1998C10.3998 55.4 7.2998 58.5 7.2998 62.4C7.2998 66.2 10.3998 69.4 14.1998 69.4H15.7998V71C15.7998 74.8 18.8998 78 22.6998 78C26.4998 78 29.5998 74.9 29.5998 71V69.4H35.7998C37.0998 69.4 38.3998 69 39.3998 68.4L42.0998 73.8C42.1998 74.1 42.3998 74.3999 42.5998 74.6999C43.8998 76.7999 46.0998 78.0999 48.4998 78.0999C49.4998 78.0999 50.5998 77.9 51.4998 77.4C53.1998 76.6 54.6998 75.2 55.3998 73.4L57.3998 69L59.8998 73.8C59.9998 74.1 60.1998 74.3999 60.3998 74.6999C61.6998 76.7999 63.8998 78.0999 66.2998 78.0999C67.2998 78.0999 68.3998 77.9 69.2998 77.4C70.8998 76.6 72.0998 75.2999 72.7998 73.5999C73.7998 76.0999 76.2998 77.9 79.1998 77.9H96.6998C100.5 77.9 103.6 74.8999 103.6 71.0999V69.5H105.2C109 69.5 112.1 66.4 112.1 62.5C112.1 58.7 109 55.5 105.2 55.5H103.6V53.7C103.6 51.1 102.2 48.7999 99.9998 47.5999C98.8998 47.1999 97.7998 46.9 96.5998 46.9Z' />
			</Jacket>
		);

	if (type === 'check')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'>
				<path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8,8-3.6,8-8S12.4,0,8,0Zm3.707,6.707l-4,4c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.293,1.293,3.293-3.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z" />
			</Jacket>
		);

	if (type === 'back')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'>
				<path d="M15.584,7.44A12.98,12.98,0,0,0,2.848,6.07l.763-2.154a1,1,0,1,0-1.884-.668L.058,7.961A1,1,0,0,0,.666,9.238l4.713,1.668a1,1,0,0,0,.668-1.885L3.305,8.05A11.011,11.011,0,0,1,14.416,9.064,1,1,0,1,0,15.584,7.44Z" />
			</Jacket>
		);

	if (type === 'logoGrad')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'>
				<path d="M0 8C0 5.8383 0.857389 3.87685 2.25066 2.43716C2.4058 2.27685 2.66667 2.39127 2.66667 2.61436V10.314C2.66667 10.5088 2.82457 10.6667 3.01935 10.6667H4.93333C5.06667 10.6778 5.33333 10.7733 5.33333 11.0667V12.9806C5.33333 13.1754 5.49124 13.3333 5.68602 13.3333H10.314C10.5088 13.3333 10.6667 13.1754 10.6667 12.9806V11.0667C10.6667 10.7733 10.9333 10.6778 11.0667 10.6667H12.9806C13.1754 10.6667 13.3333 10.5088 13.3333 10.314V8.35269C13.3333 8.1579 13.1754 8 12.9806 8H11.0194C10.8246 8 10.6667 8.1579 10.6667 8.35269V10.2669C10.6665 10.56 10.4 10.6556 10.2667 10.6667H5.73333C5.60003 10.6556 5.33345 10.56 5.33333 10.2669V0.782796C5.33333 0.583333 5.43235 0.416667 5.70833 0.333333C5.71186 0.332269 5.75 0.320752 5.75 0.320752C6.46373 0.111975 7.21879 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="url(#paint0_linear_60_9298)"/>
				<path d="M10.314 10.6667C10.3144 10.6667 10.3148 10.6667 10.3152 10.6667L10.4086 10.6667C10.5511 10.6667 10.6667 10.7822 10.6667 10.9247L10.6667 11.0182C10.6667 11.0186 10.6667 11.019 10.6667 11.0194V10.9247C10.6667 10.7822 10.5511 10.6667 10.4086 10.6667H10.314Z" fill="url(#paint1_linear_60_9298)"/>
				<path d="M5.33334 10.9247C5.33334 10.7822 5.44887 10.6667 5.5914 10.6667L5.68602 10.6667L5.68483 10.6667H5.5914C5.44887 10.6667 5.33334 10.7822 5.33334 10.9247V11.0182L5.33333 11.0194L5.33334 10.9247Z" fill="url(#paint2_linear_60_9298)"/>
				<defs>
					<linearGradient id="paint0_linear_60_9298" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
					<linearGradient id="paint1_linear_60_9298" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
					<linearGradient id="paint2_linear_60_9298" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
				</defs>
			</Jacket>
		);


	console.error(
		`You've not added the correct 'type' prop to your <Icon /> component`
	);
	console.warn(
		`Remember to add "type='YOUR_ICON_NAME'" to your <Icon /> props or else your icon wont display`
	);
	return null;
};

export default Icon;
