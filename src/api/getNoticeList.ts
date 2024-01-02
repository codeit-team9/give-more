import axiosInstance from './settings/axiosInstance';
import { NoticeSearch } from './type';

interface Props {
  params: NoticeSearch;
}

async function getNoticeList(Props: Props) {
  try {
    const response = await axiosInstance.get('/notices', {
      ...Props,
      paramsSerializer: (paramObj) => {
        const params = new URLSearchParams();

        Object.keys(paramObj).forEach((key) => {
          const value = paramObj[key];
          if (Array.isArray(value) && key === 'address') {
            value.forEach((addressValue) => {
              params.append(key, addressValue);
            });
          } else {
            params.append(key, value);
          }
        });

        return params.toString();
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getNoticeList;
