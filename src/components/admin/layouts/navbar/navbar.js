import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation,Trans } from 'react-i18next'
import {logoutForm} from '../../../../services/login'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import avatar from '../../../../assets/images/logo/avatar.svg'

const Navbar = (props)  => {

  const dispatch = useDispatch();
const history = useHistory();
  const [state,setState] = useState({
    lang : localStorage.getItem('i18nextLng'),
    class : `flag-icon flag-icon-${localStorage.getItem('i18nextLng') === 'en' ? 'us' : 'sa'}`

  });

  const {i18n,t} = useTranslation();

  const changLang = (lng) => {

    i18n.changeLanguage(lng);

    document.body.className = i18n.dir();

    if(lng === 'ar'){

      setState({
        class : 'flag-icon flag-icon-sa'
      })

    }else{
      setState({
        class : 'flag-icon flag-icon-us'
      })
    }

  }

  const logOut = () => {
    logoutForm(null).then(res => {
      if (res.status) {
        dispatch({
            type: 'LOGOUT',
            payload: {
                token: null,
                role: null,
                status: false
            }
        });
        localStorage.removeItem("token");
        console.log(props)
        history.push('/');
    }
    })
  }

  return (
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
          <i className="mdi mdi-menu"></i>
        </button>
        <ul className="navbar-nav navbar-nav-left header-links align-self-center">
          
        </ul>

        <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item dropdown language-dropdown border-0 pl-4">
          <Dropdown>
            
              <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <div className="d-inline-flex mr-0">
                  <div className="flag-icon-holder">
                    <i className={state.class}></i>
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list" >

                <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="en" onClick={e => e.preventDefault()} onSelect={changLang}>
                  <div className="flag-icon-holder">
                    <i className="flag-icon flag-icon-us"></i>
                  </div>
                  English
                </Dropdown.Item>

                <div className="dropdown-divider"></div>

                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="ar" onClick={e => e.preventDefault()} onSelect={changLang}>
                  <div className="flag-icon-holder">
                    <i className="flag-icon flag-icon-sa"></i>
                  </div>Arabic
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </li>
          
        <li className="nav-item  nav-profile border-0 ">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count bg-success">4</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown preview-list">
                <Dropdown.Item className="dropdown-item py-3 d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <p className="mb-0 font-weight-medium float-left">{t('You have')} 4 {t('new notifications')} </p>
                  <span className="badge badge-pill badge-primary float-right">View all</span>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1"><Trans>Application Error</Trans></h6>
                    <p className="font-weight-light small-text mb-0"> <Trans>Just now</Trans> </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1"><Trans>Settings</Trans></h6>
                    <p className="font-weight-light small-text mb-0"> <Trans>Private message</Trans> </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1"><Trans>New user registration</Trans></h6>
                    <p className="font-weight-light small-text mb-0"> 2 <Trans>days ago</Trans> </p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          {/* <li className="nav-item  nav-profile border-0">
            <Dropdown>
              
              <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <i className="mdi mdi-chat-processing"></i>
                <span className="count">7</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list">
                <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <p className="mb-0 font-weight-medium float-left"><Trans>You have</Trans> 7 <Trans>unread mails</Trans> </p>
                  <span className="badge badge-pill badge-primary">View all</span>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <img src={props.admin.image} alt="profile" className="img-sm profile-pic" /> </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark"><Trans>Marian Garner</Trans> </p>
                    <p className="font-weight-light small-text"> <Trans>The meeting is cancelled</Trans> </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <img src={props.admin.image} alt="profile" className="img-sm profile-pic" /> </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark"><Trans>David Grey</Trans> </p>
                    <p className="font-weight-light small-text"> <Trans>The meeting is cancelled</Trans></p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <img src={props.admin.image} alt="profile" className="img-sm profile-pic" /> </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark"><Trans>Travis Jenkins</Trans> </p>
                    <p className="font-weight-light small-text"> <Trans>The meeting is cancelled</Trans> </p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li> */}
          
          
          <li className="nav-item  nav-profile border-0">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                <span className="profile-text">{props.admin.name}</span>
                <img className="img-xs rounded-circle" src={avatar} alt="Profile" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                <div className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom">
                  <div className="d-flex">
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                      <i className="mdi mdi-account-outline mr-0"></i>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i className="mdi mdi-alarm-check mr-0"></i>
                    </div>
                  </div>
                </div>

                {/* <Link to="/dashboard/setting" className="dropdown-item preview-item d-flex align-items-center border-0 mt-2">
                    <Trans>Manage Accounts</Trans>
                </Link> */}

                <Link to="/dashboard/setting" className="dropdown-item preview-item d-flex align-items-center border-0 mt-2">
                    <Trans>Change Password</Trans>
                  </Link>
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={logOut}>
                  <Trans>Sign Out</Trans>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
}


export default Navbar;
