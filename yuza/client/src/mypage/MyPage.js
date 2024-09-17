import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBook, faPencilAlt, faChartBar, faToolbox, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import RotatingGradientBorder from '../menu/RotatingGradientBorder';
import userimg from '../img/userimg/user-img2.png';
import AdminSetQuestion from './Admin/AdminSetQuestion';
import './mypage.css';

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const userLevel = 7; // 임시로 사용자 레벨 하드코딩

  const menuItems = [
    { id: 'edit', icon: faCog, label: '정보수정' },
    { id: 'purchased', icon: faBook, label: '구매한 족보' },
    { id: 'written', icon: faPencilAlt, label: '작성한 족보' },
    { id: 'frequently', icon: faChartBar, label: '자주 공부한 내역' },
  ];

  const adminMenuItems = [
    { id: 'admin1', label: '문제 관리' },
    { id: 'admin2', label: '관리자 메뉴 2' },
    { id: 'admin3', label: '관리자 메뉴 3' },
  ];

  const handleMenuClick = (id) => {
    setSelectedMenu(id);
    if (id !== 'admin') {
      // setIsAdminOpen(false); 
    }
  };

  const handleAdminClick = () => {
    setIsAdminOpen(!isAdminOpen);
    // setSelectedMenu('admin'); 드롭다운 메뉴를 클릭하면 드롭다운이 닫히는 문제 수정
  };

  const renderContent = () => {
    if (!selectedMenu) {
      return <div className="mypage-empty-content">왼쪽 영역에서 메뉴를 선택해주세요</div>;
    }

    // 선택된 메뉴에 따라 다른 내용을 렌더링
    switch (selectedMenu) {
      case 'edit':
        return <div>정보수정 내용</div>;
      case 'purchased':
        return <div>구매한 족보 목록</div>;
      case 'written':
        return <div>작성한 족보 목록</div>;
      case 'frequently':
        return <div>자주 공부한 내역</div>;
      case 'admin1':
        return <AdminSetQuestion></AdminSetQuestion>;
      case 'admin2':
        return <div>관리자 메뉴 2 내용</div>;
      case 'admin3':
        return <div>관리자 메뉴 3 내용</div>;
      default:
        return null;
    }
  };

  return (
    <div className="mypage-container">
      <div className="mypage-left-section">
        <div className="mypage-profile-area">
          <div className="mypage-user-icon-wrapper">
            <RotatingGradientBorder level={userLevel} />
            <img src={userimg} alt="User" className="mypage-user-icon" />
          </div>
          <div className="mypage-nickname">사용자 닉네임</div>
        </div>
        <nav className="mypage-menu-list">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`mypage-menu-item ${selectedMenu === item.id ? 'mypage-active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <FontAwesomeIcon icon={item.icon} className="mypage-menu-icon" />
              <span>{item.label}</span>
            </button>
          ))}
          <div className="mypage-admin-section">
            <button
              className={`mypage-menu-item mypage-admin-item ${isAdminOpen ? 'mypage-admin-active' : ''}`}
              onClick={handleAdminClick}
            >
              <div className="mypage-admin-content">
                <FontAwesomeIcon icon={faToolbox} className="mypage-menu-icon" />
                <span className="mypage-admin-label">관리자 도구&nbsp;&nbsp;</span>
                <FontAwesomeIcon icon={faCaretDown} className={`mypage-admin-caret ${isAdminOpen ? 'mypage-admin-caret-open' : ''}`} />
              </div>
            </button>
            {isAdminOpen && (
              <div className="mypage-admin-dropdown">
                {adminMenuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`mypage-menu-item mypage-admin-subitem ${selectedMenu === item.id ? 'mypage-active' : ''}`}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="mypage-right-section">
        {renderContent()}
      </div>
    </div>
  );
};

export default MyPage;