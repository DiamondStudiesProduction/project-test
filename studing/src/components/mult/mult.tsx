// getGrades.ts
export interface Grades {
	math: number;
	programming: number;
	physics: number;
}

export async function getGrades(studentId: number): Promise<Grades> {
	const response = await fetch(
		`https://school-api/get-grades?studentId=${studentId}`
	);
	const grades: Grades = await response.json();
	return grades;
}
export async function getAvarageGrade(studentId: number): Promise<number> {
	const gradesMap = await getGrades(studentId);

	const grades: number[] = Object.values(gradesMap);
	const sumOfGrades = grades.reduce((acc, value) => acc + value, 0);
	const result = sumOfGrades / grades.length;
	return result;
}
