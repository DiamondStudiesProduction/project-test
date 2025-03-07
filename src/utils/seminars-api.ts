export const getSeminars = async () => {
  try {
    const response = await fetch("http://localhost:3000/seminars");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    throw err;
  }
};

export type SeminarId = number;

export const deleteSeminar = async (id: SeminarId): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:3000/seminars/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.status;
  } catch (err) {
    throw err;
  }
};
