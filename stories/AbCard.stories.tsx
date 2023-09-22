
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Card } from '../src'

export default {
  title: 'Components/AbCard',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent = () => {
    return (<Card>
        <h1>Olá, eu sou um card</h1>
    </Card>)
}



/*/
export default { ... }: Este bloco de código exporta um objeto de configuração do Storybook para o componente Card.

title: 'Components/AbCard': Define o título do grupo de histórias no Storybook onde este componente será categorizado. Neste caso, o componente está sendo colocado no grupo "Components" sob a categoria "AbCard".

component: Card: Especifica qual componente React será documentado no Storybook. Neste caso, é o componente Card que você importou anteriormente.

export const CardComponent = () => { ... }: Isso define uma história (story) do Storybook para o componente Card. Uma história é uma variante ou exemplo de uso do componente que você deseja documentar. A história é definida como uma função de componente semelhante a um componente React.

Dentro da função CardComponent, você está retornando o componente Card com algum conteúdo dentro dele, incluindo um título "Olá, eu sou um card". Esta é a representação visual do componente Card no Storybook.
/*/