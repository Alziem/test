import React, { Component } from "react";
import { Link, withRouter, useRouteMatch } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";

/// Images

import logo from "../../../../assets/images/logo/jeem.png";
import avatar from "../../../../assets/images/logo/avatar.svg";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  routerSeller(route) {
    return (
      <li className="nav-item">
        <Link
          className={
            this.isPathActive(
              `dashboard/seller/${this.props.admin.id}/${route.toLowerCase()}`
            )
              ? "nav-link active"
              : "nav-link"
          }
          to={`dashboard/seller/${this.props.admin.id}/${route.toLowerCase()}`}
        >
          <Trans>{route}</Trans>
        </Link>
      </li>
    );
  }

  onRouteChanged() {
    window.scrollTo(0, 0);
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/admin", state: "appsMenuOpen" },
      { path: "/dashboard/seller", state: "sellerMenuOpen" },
      { path: "/dashboard/carousel", state: "carouselMenuOpen" },
      { path: "/dashboard/meeting", state: "meetingMenuOpen" },
      { path: "/dashboard/message", state: "messageMenuOpen" },
      { path: "/dashboard/chat", state: "chatMenuOpen" },
      { path: "/dashboard/tag", state: "tagMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.allowActiveMenu(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <div className="sidebar-brand brand-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sidebar-brand brand-logo-mini pt-3">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="d-flex justify-content-center align-items-start nav-profile-body">
              <div className="profile-image">
                <img src={avatar} alt="profile" />
              </div>
              <div className="text-left">
                <p className="profile-name">{this.props.admin.name}</p>
                <small className="designation text-muted text-small">
                  admin
                </small>
                <span className="status-indicator online"></span>
              </div>
            </div>
          </li>

          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>

          {this.props.location.pathname.includes("dashboard/seller") ? (
            <li
              className={
                this.allowActiveMenu("/dashboard/seller")
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <div
                className={
                  this.state.sellerMenuOpen
                    ? "nav-link menu-expanded"
                    : "nav-link"
                }
                onClick={() => this.toggleMenuState("sellerMenuOpen")}
                data-toggle="collapse"
              >
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                <span className="menu-title">
                  <Trans>Seller</Trans>
                </span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={this.state.sellerMenuOpen}>
                <ul className="nav flex-column sub-menu">
                  {this.routerSeller("Products")}
                  {this.routerSeller("Subadmin")}
                  {this.routerSeller("Carousel")}
                  {this.routerSeller("Tags")}
                  {this.routerSeller("Posts")}
                  {this.routerSeller("Negotatie")}
                </ul>
              </Collapse>
            </li>
          ) : null}

          <li
            className={
              this.isPathActive("/dashboard/carousel")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard/carousel">
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">
                <Trans>Carousel</Trans>
              </span>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/dashboard/tag")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard/tag">
              <i className="mdi mdi-access-point menu-icon"></i>
              <span className="menu-title">
                <Trans>Tags</Trans>
              </span>
            </Link>
          </li>

          <li
            className={
              this.allowActiveMenu("/dashboard/message")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link
              className={
                this.state.messageMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              to="/dashboard/message"
            >
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">
                <Trans>Messages</Trans>
              </span>
            </Link>
          </li>

          <li
            className={
              this.allowActiveMenu("/dashboard/meeting")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link
              className={
                this.state.meetingMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              to="/dashboard/meeting"
            >
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">
                <Trans>Meetings</Trans>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  allowActiveMenu(path) {
    return this.props.location.pathname.startsWith(path);
  }

  isPathActive(path) {
    return this.props.location.pathname === path ? true : false;
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
