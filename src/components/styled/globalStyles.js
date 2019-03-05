import styled from 'vue-styled-components'

export const MenuItem = styled.ul``;
export const StyledTitle = styled.h1`
  font-size: 400px;
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
  width: 20px;
  height: 20px;
  position: relative;
  span {
    height: 2px;
    width: 24px;
    background-color: #000;
    position: absolute;
    transition: all 0.3s;
  }
`

export const BurgerLineRight = styled('span', { open: Boolean })`
  top: 0;
  ${props =>
  props.open &&
  `
        top : 9px;
        transform : rotate(45deg);
    `};
`

export const BurgerLineLeft = styled('span', { open: Boolean })`
  bottom: 0;
  ${props =>
  props.open &&
  `
        bottom : 9px;
        transform : rotate(-45deg);
    `};
`

export const BurgerLineMiddle = styled('span', { open: Boolean })`
  top: calc(50% - 1px);
  opacity: 1;
  ${props =>
  props.open &&
  `
        opacity : 0;
    `};
`
