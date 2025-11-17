import { Helmet } from 'react-helmet-async';
import { Home } from '../pages/home';
import flags from '../../images/flags.jpg';
import { useEffect, useState } from 'react';
import { getWords } from 'src/utils/EnglishLearning-api';
export const App = () => {
	const [wordsData, setWordsData] = useState<any>(null);

	useEffect(() => {
		const loadWords = async () => {
			const wordsData = await getWords();
			setWordsData(wordsData);
		};
		loadWords();
	}, []);

	return (
		<>
			<Helmet>
				<link rel='icon' type='image/jpg' href={flags} />
				<meta name='description' content='тест по англискому' />
			</Helmet>
			<Home wordsData={wordsData}/>
		</>
	);
};
