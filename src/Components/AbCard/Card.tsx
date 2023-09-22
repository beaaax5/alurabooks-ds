import React, { ReactNode } from "react"
import styled from "styled-components";

export interface CardProps {
    children: ReactNode
}

const CardStyled = styled.div`
    padding: 48px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

export const Card = ({ children }: CardProps) => {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}



/*/ Aqui, uma interface chamada CardProps está sendo definida. Esta interface especifica que o componente Card aceitará uma propriedade chamada children, que deve ser do tipo ReactNode. 

A propriedade children é comumente usada para passar elementos filhos para o componente, permitindo que você coloque conteúdo dentro do Card quando você usá-lo.
        
"export const Card = ({ children }: CardProps) => { ... }:" Aqui, o componente Card está sendo definido como uma função de componente React. Ele recebe as propriedades especificadas na interface CardProps, que neste caso inclui apenas children.
({ children }: CardProps) é uma desestruturação de argumentos que extrai a propriedade children da props. Isso permite que você acesse children diretamente dentro da função.

Dentro do componente Card, você está retornando o CardStyled com {children} dentro dele. Isso significa que qualquer conteúdo que você coloque dentro de um componente Card quando o utilizar será renderizado dentro do elemento CardStyled.
/*/