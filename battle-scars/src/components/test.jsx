// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import { Grid, Icon, Menu, Sidebar, Segment } from "semantic-ui-react";
// import SearchBox from "./searchBox";
// import { BrowserRouter, Link, NavLink } from "react-router-dom";

// const VerticalSidebar = ({ visible, handleMenuSidebarStateClick }) => (
//   <Sidebar
//     as={Menu}
//     animation="uncover"
//     direction="right"
//     icon="labeled"
//     inverted
//     vertical
//     visible={visible}
//     width="thin"
//   >
//     <Menu.Item as="a" onClick={handleMenuSidebarStateClick}>
//       <Icon name="home" />
//       Home
//     </Menu.Item>
//     <Menu.Item as="a" onClick={handleMenuSidebarStateClick}>
//       <Icon name="gamepad" />
//       Games
//     </Menu.Item>
//     <Menu.Item as="a" onClick={handleMenuSidebarStateClick}>
//       <Icon name="camera" />
//       Channels
//     </Menu.Item>
//   </Sidebar>
// );

// VerticalSidebar.propTypes = {
//   visible: PropTypes.bool
// };

// const VerticalMenu = ({ activeItem, handleMenuSidebarStateClick }) => (
//   <Menu icon="labeled" inverted vertical floated="right">
//     <Menu.Item
//       name="gamepad"
//       active={activeItem === "gamepad"}
//       onClick={handleMenuSidebarStateClick}
//     >
//       <Icon name="gamepad" />
//       Games
//     </Menu.Item>

//     <Menu.Item
//       name="video camera"
//       active={activeItem === "video camera"}
//       onClick={handleMenuSidebarStateClick}
//     >
//       <Icon name="video camera" />
//       Channels
//     </Menu.Item>

//     <Menu.Item
//       name="video play"
//       active={activeItem === "video play"}
//       onClick={handleMenuSidebarStateClick}
//     >
//       <Icon name="video play" />
//       Videos
//     </Menu.Item>
//   </Menu>
// );

// export default class MainNavBar extends Component {
//   state = {
//     dimmed: false,
//     visible: false,
//     activeItem: "gamepad"
//   };

//   handleMenuSidebarStateClick = (e, { name }) =>
//     this.setState({
//       activeItem: name,
//       dimmed: !this.state.dimmed,
//       visible: !this.state.visible
//     });

//   render() {
//     const { dimmed, visible, activeItem } = this.state;
//     return (
//       <div>
//         <Sidebar.Pushable>
//           <VerticalSidebar
//             visible={visible}
//             handleMenuSidebarStateClick={this.handleMenuSidebarStateClick}
//           />
//           <Sidebar.Pusher dimmed={dimmed && visible}>
//             <main className="container-fluid">
//               <VerticalSidebar
//                 visible={!visible}
//                 handleMenuSidebarStateClick={this.handleMenuSidebarStateClick}
//               />
//               <VerticalMenu
//                 activeItem={activeItem}
//                 handleMenuSidebarStateClick={this.handleMenuSidebarStateClick}
//               />
//               <div className="row justify-content-md-center">
//                 <div className="col col-lg-6">
//                   <SearchBox />
//                 </div>
//               </div>
//             </main>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     );
//   }
// }
