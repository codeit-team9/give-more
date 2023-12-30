interface MESSAGE {
  [key: string]: {
    message: string;
  };
}

export const TOAST_MESSAGE: MESSAGE = {
  accepted: {
    message: '등록이 완료되었습니다.',
  },
  modified: {
    message: '수정이 완료되었습니다.',
  },
  applied: {
    message: '신청 완료!',
  },
  canceled: {
    message: '취소했어요',
  },
};
