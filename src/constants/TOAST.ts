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
  password: {
    message: '비밀번호가 일치하지 않습니다.',
  },
  email: {
    message: '이미 사용 중인 이메일입니다.',
  },
  error: {
    message: '올바른 사용자 타입이 아닙니다.',
  },
  signed: {
    message: '가입이 완료되었습니다.',
  },
};
