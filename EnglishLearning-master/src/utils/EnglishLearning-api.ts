import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export const getWords = async () => {
	const { data, error } = await supabase.from('Words').select('*');

	if (error) {
		console.error('Ошибка при получении слов:', error);
		return null
	} else {
		console.log('Полученные данные:', data);
		return data;
	}
};
