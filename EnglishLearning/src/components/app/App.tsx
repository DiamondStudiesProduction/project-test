import { Helmet } from 'react-helmet-async';
import { Home } from '../pages/home';
import flags from '../../images/flags.jpg';
import { useEffect, useState } from 'react';
import { supabase } from 'src/utils/supabaseClient';
export const App = () => {
	const [translations, setTranslations] = useState<any>([]); // Состояние для хранения переводов
	const [loading, setLoading] = useState(true); // Состояние для индикатора загрузки
	const [error, setError] = useState<any>(null); // Состояние для ошибок

	// Функция для получения всех переводов
	const fetchTranslations = async () => {
		setLoading(true); // Начинаем загрузку
		setError(null); // Сбрасываем предыдущую ошибку

		// Делаем запрос к Supabase
		// SELECT * означает "выбрать все колонки"
		// FROM translations - из таблицы translations
		const { data, error } = await supabase
			.from('Words') // Указываем таблицу
			.select('*'); // Выбираем все колонки

		if (error) {
			console.error('Ошибка при получении слов:', error);
			setError('Не удалось загрузить слова.');
		} else {
			console.log('Полученные данные:', data); // Смотрим, что получили
			setTranslations(data || []); // Обновляем состояние с полученными данными
		}
		setLoading(false); // Заканчиваем загрузку
	};

	// useEffect будет выполнен один раз после первого рендера компонента
	return (
		<>
			<Helmet>
				<link rel='icon' type='image/jpg' href={flags} />
				<meta name='description' content='тест по англискому' />
			</Helmet>
			<Home />
		</>
	);
};
