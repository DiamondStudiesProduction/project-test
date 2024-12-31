import { useState } from 'react';

const FirstCounter = ({
	value,
	setValue,
}: {
	value: number;
	setValue: (val: number) => void;
}) => {
	console.log('1 перерендер первого компонента 1');
	return (
		<div>
			<p>Счётчик: {value}</p>
			<button onClick={() => setValue(value + 1)}>Увеличить</button>{' '}
		</div>
	);
};

const SecondCounter = ({
	value,
	setValue,
}: {
	value: number;
	setValue: (val: number) => void;
}) => {
	console.log('2 перерендер второго компонента 2');
	return (
		<div>
			<p>Счётчик: {value}</p>
			<button
				onClick={() => {
					let i = 0;
					while (i < 1000000000) {
						i++;
					}
					setValue(value + 1);
				}}>
				Увеличить
			</button>
		</div>
	);
};

export const App = () => {
	const [count1, setCount1] = useState<number>(0);
	const [count2, setCount2] = useState<number>(0);

	return (
		<div>
			<FirstCounter value={count1} setValue={setCount1} />
			<SecondCounter value={count2} setValue={setCount2} />
		</div>
	);
};
