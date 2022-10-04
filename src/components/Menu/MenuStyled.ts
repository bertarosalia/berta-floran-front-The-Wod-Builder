import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const MenuStyled = styled.div`
  visibility: visible;
  @media (min-width: 700px) {
    visibility: hidden;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 66px;
    height: 43px;
    right: -250px;
    top: 50px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${styledMainTheme.buttonBig};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${styledMainTheme.sideBar};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${styledMainTheme.black};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    width: 240px;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${styledMainTheme.sideBar};
    padding: 2.5em 1.5em 0;
    font-size: 28px;
    width: 300px;
    height: 50px;
  }

  .bm-menu {
    font-size: 36px;
  }

  /* Morph shape necessary with bubble or elastic */
  /* .bm-morph-shape {
  fill: #373a47;
} */

  /* Individual item */
  .bm-item {
    display: inline-block;
    font-size: 28px;
    color: ${styledMainTheme.black};
    font-weight: bold;
    margin: 10px 0;
    text-decoration: none;
    margin-bottom: 20px;
  }
`;

export default MenuStyled;
