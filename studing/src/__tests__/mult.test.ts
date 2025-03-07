// GetAverageGrade.test.ts
import { expect, test, beforeAll, afterEach, afterAll } from '@jest/globals';
import { server } from '../mocks/node';
import { getAvarageGrade } from '../components/mult/mult';

beforeAll(() => {
    // перед запуском всех тестов, запускаем сервер для перехва сетевых запросов
    server.listen()
})

afterAll(() => {
    // выключаем перехват запросов после прохождения всех тестов
    server.close()
})

test('тест расчета средней оценки студента', async () => {
    const averageGrade = await getAvarageGrade(1);

    expect(averageGrade).toBe(5);
})


/*
import { data } from "../../data";
import { api } from "../../utils/api";
import { getIngredients } from "./actions";
import { allIngredients, initialState, reducer, sortIngredients, withoutBuns } from "./slice";
import { store } from "../store";

const mockIngredients = [
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0945",
    name: "Соус с шипами Антарианского плоскоходца",
    type: "sauce",
    proteins: 101,
    fat: 99,
    carbohydrates: 100,
    calories: 100,
    price: 88,
    image: "https://code.s3.yandex.net/react/code/sauce-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
  },
];

const sortedIngredients = [
  {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0945",
    name: "Соус с шипами Антарианского плоскоходца",
    type: "sauce",
    proteins: 101,
    fat: 99,
    carbohydrates: 100,
    calories: 100,
    price: 88,
    image: "https://code.s3.yandex.net/react/code/sauce-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
  },
];

const filteredIngredients = [
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0945",
    name: "Соус с шипами Антарианского плоскоходца",
    type: "sauce",
    proteins: 101,
    fat: 99,
    carbohydrates: 100,
    calories: 100,
    price: 88,
    image: "https://code.s3.yandex.net/react/code/sauce-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
  },
];

describe('.', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  })
    test('sortedIngredients', () => {
const result = reducer(
      {
        ...initialState,
        ingredients: mockIngredients,
      },
      sortIngredients({from: 1, to: 0})
    );
expect(result).toEqual({ ...initialState, ingredients: sortedIngredients });
    }),
  test('should filter out buns', () => {
        const state = {
      burgerConstructor: {
        ...initialState,
        ingredients: mockIngredients,
      },
    };
    const result = withoutBuns(state);
    expect(result).toEqual(filteredIngredients);
  }),
  test('extraReducers check', async () => {

                global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockIngredients),
            })
        ) as jest.Mock;
                const ingredients = allIngredients(store.getState());
const getIngredientsSpy = jest.spyOn(api, "getIngredients").mockResolvedValue({ ingredients: data });
        await store.dispatch(getIngredients());
  });
})


*/