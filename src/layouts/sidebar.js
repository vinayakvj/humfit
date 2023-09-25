import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import career from '../assets/carreer.png';
import message from '../assets/chat.png';
import content from '../assets/content.png';
import settings from '../assets/settings.png';
import student from '../assets/student1.png';
import Logo from '../assets/logo.png';
function Sidebar() {
  const tags = [
    {
      id: 1,
      image: student,
      link: '/dashboard/student',
      name: 'Students'
    },
    {
      id: 2,
      image: content,
      link: '/dashboard/content',
      name: 'Content'
    },
    {
      id: 3,
      image: career,
      link: '/dashboard/Careers',
      name: 'Careers'
    },
    {
      id: 4,
      image: settings,
      link: '/dashboard/settings',
      name: 'Settings'
    },
    {
      id: 5,
      image: message,
      link: '/dashboard/Message',
      name: 'Message'
    }
  ];
  return (
    <div>
      <div className="side">
        <div className="img">
          <img className="hum-logo" src={Logo} />
        </div>
        <div className="navs">
          {tags.map((item) => {
            return (
              <div key={item.id} className="tags">
                <img className="icons" src={item.image} alt="image" />
                <Link to={item.link}>{item.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Sidebar;
