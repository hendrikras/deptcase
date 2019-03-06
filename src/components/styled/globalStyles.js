import styled from 'vue-styled-components'

export const AlignLeftList = styled.ul `{
  text-align: left;
}
`

export const AlignRightList = styled.ul `{
  text-align: right;
}
`
export const StyledNavBar = styled.div`
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
  `;

export const StyledRuler = styled.div`
   border-bottom: 1px solid;
  `;

export const StyledNavButton = styled('button', {big: Boolean})`
    border: 0;
    background: transparent;
    font-size: 25px;
    font-weight: ${({big}) => (big ? '900' : '400')};
    cursor: pointer;
    padding-right: 35px;
  `;

export const StyledMenuButton = styled('a', {big: Boolean})`
    color: grey;
    border: 0;
    background: transparent;
    font-size: ${({big}) => (big ? '10vh' : '15px')};
    font-weight: ${({big}) => (big ? '900' : '400')};
    cursor: pointer;
    padding-right: 35px;
    :hover {
      text-decoration: underline;
          color: #fff;
    }
  `;

export const StyledTitle = styled.h1`
  font-size: 200px;
  margin: 0;
  padding: 0;
  `;

export const StyledModal = styled.div`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 95%;
    margin: 0px auto;
    background-color: #000;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .modal-header h3 {
    color: #fff;
    float: left;
    margin: 15px;

  }

  .modal-body {
    width: 100%;
  }

  .modal-default-button {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    font-size: 0.85rem;
    cursor: pointer;
    color: white;
    outline: none;
  }

  .button-submit {
    background: dodgerblue;
    margin: 0 16px;
  }

  .button-close {
    background: #000;
    float: right;
    margin: 5px;
  }

  &.modal-enter {
    opacity: 0;
  }

  &.modal-leave-active {
    opacity: 0;
  }

  .modal-footer {
    width: 100%;
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: #000;
    box-shadow: 0 -3px 6px 0 rgba(18, 19, 18, 0.09);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &.modal-enter .modal-container,
  &.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const BurgerContainer = styled.div`
  width: 100%;
  height: auto;
  
`

export const Burger = styled.div`
float: right;
  width: 20px;
  height: 20px;
  position: relative;
  top: -25px;
  right: -20px;
  span {
    height: 2px;
    width: 24px;
    background-color: #000;
    position: absolute;
    transition: all 0.3s;
  }
`

export const BurgerLineRight = styled('span', {open: Boolean})`
  top: 0;
  ${({open}) => open &&
  `
        top : 9px;
        transform : rotate(45deg);
    `};
`

export const BurgerLineLeft = styled('span', {open: Boolean})`
  bottom: 0;
  ${({open}) => open &&
  `
        bottom : 9px;
        transform : rotate(-45deg);
    `};
`

export const BurgerLineMiddle = styled('span', {open: Boolean})`
  top: calc(50% - 1px);
  opacity: 1;
  ${({open}) => open &&
  `
        opacity : 0;
    `};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Row = styled('div', {ruler: Boolean})`
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 800px;
  justify-content: space-between;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 780px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      order: 2;
    }
    section {
      order: 1;
    }
  }
${({ruler}) => ruler &&
  `
   border-bottom : 1px solid;
    `};
`

export const FlexRow = styled('div', {open: Boolean})`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  padding: 16px 0 32px 0;
  display: none;
  justify-content: space-around;
  @media (min-width: 320px) and (max-width: 900px) {
    width: 50%;
  }
  a {
    font-size: 1rem;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  ${({open}) => open &&
  `
        display : flex;
    `};
`

