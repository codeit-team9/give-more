interface ConvertedWorkhourResult {
  formattedDate: string;
  formattedTime: string;
}

function convertedWorkhour(input: string, workhour?: number): ConvertedWorkhourResult {
  const date = new Date(input);

  // 잘못된 날짜 형식인 경우 빈 배열 반환
  if (Number.isNaN(date.getTime())) {
    console.log('Invalid date format');
    return { formattedDate: '', formattedTime: '' };
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const hoursWithWorkhour = workhour !== undefined ? date.getHours() + workhour : date.getHours();

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  const formattedTime = `${hoursWithWorkhour}:${minutes}`;

  return { formattedDate, formattedTime };
}

export default convertedWorkhour;
