import React from "react";
import styled, { css } from "styled-components";

export interface AbBotaoProps {
  text?: string
  tipo?: 'primario' | 'secundario'
  onClick?: () => void
}
// o Abbotaoprops = as props que o botao poderá receber, então ela poderá receber um texto e um tipo, primario ou secundario


const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#fff' : '#EB9B00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: AbBotaoProps) => props.tipo === 'primario' 
  ? css`
  &:hover {
    background: #B87900;
    border: 2px solid #B87900;
  } 
  `

  : css`
  &:hover {
    background: #fff;
    border: 2px solid #B87900;
    color:  #B87900;
  }
    ;`
}
`
  

export const AbBotao = ({ text, onClick, tipo = 'primario'} : AbBotaoProps) => {
  return <BotaoEstilizado onClick={onClick} tipo= {tipo}>
    {text}
    </BotaoEstilizado>;
};

// No meu export const AbBotao ele recebrá = ({ text, onClick, tipo = 'primario'} : AbBotaoProps) => --- E no meu meu BotaoEstilizado terá um onClick e um tipo, dentro desse botão, vou ter um texto