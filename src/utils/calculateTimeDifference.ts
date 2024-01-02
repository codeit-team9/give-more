function calculateTimeDifference(createdAt: string) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  const timeDifference = currentDate.getTime() - createdDate.getTime();
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (minutes < 2) {
    return '1분 전';
  }

  if (minutes <= 59) {
    return `${minutes}분 전`;
  }

  if (minutes <= 60) {
    return '1시간 전';
  }

  if (hours <= 23) {
    return `${hours}시간 전`;
  }

  if (hours <= 24) {
    return '1일 전';
  }

  if (days <= 30) {
    return `${days}일 전`;
  }

  if (days <= 31) {
    return `1달 전`;
  }

  if (months <= 11) {
    return `${months}달 전`;
  }

  if (months <= 12) {
    return `1년 전`;
  }

  return `${years}년 전`;
}

export default calculateTimeDifference;
