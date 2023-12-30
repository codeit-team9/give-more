import Modal from '@/components/@common/Modal/Modal/Modal';
import NotificationModal from '@/components/@common/Modal/NotificationModal/NotificationModal';
import useModal from '@/hooks/useModal';
import { Items } from '@/@types/notification.type';
import styles from './index.module.css';
import FilterModal from '@/components/@common/Modal/FilterModal/FilterModal';
import NotificationButton from '@/components/@common/NotificationButton/NotificationButton';

const item: Items = {
  offset: 0,
  limit: 10,
  count: 7,
  hasNext: false,
  items: [
    {
      item: {
        id: '602bf104-aca5-4418-8ff0-78babd1af64e',
        createdAt: '2023-12-29T06:58:16.036Z',
        result: 'rejected',
        read: false,
        application: {
          item: {
            id: 'b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
            status: 'rejected',
          },
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/applications/b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
        },
        shop: {
          item: {
            id: '383deacd-9d00-411e-8e42-85b0928e1058',
            name: '내 가게',
            category: '편의점',
            address1: '서울시 종로구',
            address2: '상세 주소인듯',
            description: '가게 설명',
            imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
            originalHourlyPay: 9620,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058',
        },
        notice: {
          item: {
            id: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
            hourlyPay: 12000,
            description: '새로운 노예 구함',
            startsAt: '2023-12-31T09:00:00Z',
            workhour: 7,
            closed: true,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058/notices/203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
        },
      },
      links: [
        {
          rel: 'read',
          description: '읽음 처리',
          method: 'PUT',
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/alerts/602bf104-aca5-4418-8ff0-78babd1af64e',
        },
      ],
    },
    {
      item: {
        id: '602bf104-aca5-4418-8ff0-78babd1af64e',
        createdAt: '2023-12-28T06:58:16.036Z',
        result: 'accepted',
        read: false,
        application: {
          item: {
            id: 'b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
            status: 'accepted',
          },
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/applications/b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
        },
        shop: {
          item: {
            id: '383deacd-9d00-411e-8e42-85b0928e1058',
            name: '내 가게',
            category: '편의점',
            address1: '서울시 종로구',
            address2: '상세 주소인듯',
            description: '가게 설명',
            imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
            originalHourlyPay: 9620,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058',
        },
        notice: {
          item: {
            id: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
            hourlyPay: 12000,
            description: '새로운 노예 구함',
            startsAt: '2023-12-31T09:00:00Z',
            workhour: 6,
            closed: true,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058/notices/203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
        },
      },
      links: [
        {
          rel: 'read',
          description: '읽음 처리',
          method: 'PUT',
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/alerts/602bf104-aca5-4418-8ff0-78babd1af64e',
        },
      ],
    },
    {
      item: {
        id: '602bf104-aca5-4418-8ff0-78babd1af64e',
        createdAt: '2023-12-20T06:58:16.036Z',
        result: 'rejected',
        read: false,
        application: {
          item: {
            id: 'b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
            status: 'rejected',
          },
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/applications/b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
        },
        shop: {
          item: {
            id: '383deacd-9d00-411e-8e42-85b0928e1058',
            name: '내 가게',
            category: '편의점',
            address1: '서울시 종로구',
            address2: '상세 주소인듯',
            description: '가게 설명',
            imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
            originalHourlyPay: 9620,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058',
        },
        notice: {
          item: {
            id: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
            hourlyPay: 12000,
            description: '새로운 노예 구함',
            startsAt: '2023-12-31T09:00:00Z',
            workhour: 3,
            closed: true,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058/notices/203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
        },
      },
      links: [
        {
          rel: 'read',
          description: '읽음 처리',
          method: 'PUT',
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/alerts/602bf104-aca5-4418-8ff0-78babd1af64e',
        },
      ],
    },
    {
      item: {
        id: '602bf104-aca5-4418-8ff0-78babd1af64e',
        createdAt: '2023-12-20T06:58:16.036Z',
        result: 'accepted',
        read: false,
        application: {
          item: {
            id: 'b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
            status: 'accepted',
          },
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/applications/b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
        },
        shop: {
          item: {
            id: '383deacd-9d00-411e-8e42-85b0928e1058',
            name: '내 가게',
            category: '편의점',
            address1: '서울시 종로구',
            address2: '상세 주소인듯',
            description: '가게 설명',
            imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
            originalHourlyPay: 9620,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058',
        },
        notice: {
          item: {
            id: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
            hourlyPay: 12000,
            description: '새로운 노예 구함',
            startsAt: '2023-12-31T09:00:00Z',
            workhour: 5,
            closed: true,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058/notices/203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
        },
      },
      links: [
        {
          rel: 'read',
          description: '읽음 처리',
          method: 'PUT',
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/alerts/602bf104-aca5-4418-8ff0-78babd1af64e',
        },
      ],
    },
    {
      item: {
        id: '602bf104-aca5-4418-8ff0-78babd1af64e',
        createdAt: '2023-12-20T06:58:16.036Z',
        result: 'accepted',
        read: false,
        application: {
          item: {
            id: 'b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
            status: 'accepted',
          },
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/applications/b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
        },
        shop: {
          item: {
            id: '383deacd-9d00-411e-8e42-85b0928e1058',
            name: '내 가게',
            category: '편의점',
            address1: '서울시 종로구',
            address2: '상세 주소인듯',
            description: '가게 설명',
            imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
            originalHourlyPay: 9620,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058',
        },
        notice: {
          item: {
            id: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
            hourlyPay: 12000,
            description: '새로운 노예 구함',
            startsAt: '2023-12-31T09:00:00Z',
            workhour: 3,
            closed: true,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058/notices/203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
        },
      },
      links: [
        {
          rel: 'read',
          description: '읽음 처리',
          method: 'PUT',
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/alerts/602bf104-aca5-4418-8ff0-78babd1af64e',
        },
      ],
    },
    {
      item: {
        id: '602bf104-aca5-4418-8ff0-78babd1af64e',
        createdAt: '2023-12-20T06:58:16.036Z',
        result: 'accepted',
        read: false,
        application: {
          item: {
            id: 'b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
            status: 'accepted',
          },
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/applications/b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
        },
        shop: {
          item: {
            id: '383deacd-9d00-411e-8e42-85b0928e1058',
            name: '내 가게',
            category: '편의점',
            address1: '서울시 종로구',
            address2: '상세 주소인듯',
            description: '가게 설명',
            imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
            originalHourlyPay: 9620,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058',
        },
        notice: {
          item: {
            id: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
            hourlyPay: 12000,
            description: '새로운 노예 구함',
            startsAt: '2023-12-31T09:00:00Z',
            workhour: 3,
            closed: true,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058/notices/203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
        },
      },
      links: [
        {
          rel: 'read',
          description: '읽음 처리',
          method: 'PUT',
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/alerts/602bf104-aca5-4418-8ff0-78babd1af64e',
        },
      ],
    },
    {
      item: {
        id: '602bf104-aca5-4418-8ff0-78babd1af64e',
        createdAt: '2023-12-20T06:58:16.036Z',
        result: 'accepted',
        read: false,
        application: {
          item: {
            id: 'b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
            status: 'accepted',
          },
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/applications/b8180cbe-4a42-4d0b-8c7c-12ade3a9c82e',
        },
        shop: {
          item: {
            id: '383deacd-9d00-411e-8e42-85b0928e1058',
            name: '내 가게',
            category: '편의점',
            address1: '서울시 종로구',
            address2: '상세 주소인듯',
            description: '가게 설명',
            imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
            originalHourlyPay: 9620,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058',
        },
        notice: {
          item: {
            id: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
            hourlyPay: 12000,
            description: '새로운 노예 구함',
            startsAt: '2023-12-31T09:00:00Z',
            workhour: 3,
            closed: true,
          },
          href: '/api/01-09/the-julge/shops/383deacd-9d00-411e-8e42-85b0928e1058/notices/203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
        },
      },
      links: [
        {
          rel: 'read',
          description: '읽음 처리',
          method: 'PUT',
          href: '/api/01-09/the-julge/users/52228cd0-a7cf-4862-a1a2-ebfbd324a26c/alerts/602bf104-aca5-4418-8ff0-78babd1af64e',
        },
      ],
    },
  ],
};

function Home() {
  const { isOpenModal, openModal, closeModal } = useModal();
  const {
    isOpenModal: isOpenNotification,
    toggleModal: toggleNotification,
    closeModal: closeNotification,
  } = useModal();

  const { isOpenModal: isOpenFilter, toggleModal: toggleFilter, closeModal: closeFilter } = useModal();

  const handleButtonClick = () => {
    alert('sadasd');
    console.log(isOpenModal, 'ok 클릭');
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 버튼
      </button>
      {isOpenModal && (
        <Modal
          IconType="alert"
          ButtonType="login"
          text="로그인이 필요한 서비스입니다."
          onClick={handleButtonClick}
          onClose={closeModal}
        />
      )}
      <div className={styles.button2Container}>
        <NotificationButton active onClick={toggleNotification} />
        {isOpenNotification && (
          <NotificationModal type="notification" count={item.count} data={item} onClose={closeNotification} />
        )}
      </div>

      <div className={styles.detailContainer}>
        <button className={styles.button2} type="button" onClick={toggleFilter}>
          상세 필터
        </button>
        {isOpenFilter && <FilterModal type="filter" onClose={closeFilter} />}
      </div>
    </>
  );
}

export default Home;
