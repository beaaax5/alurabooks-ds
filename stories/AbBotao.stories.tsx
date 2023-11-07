import React from "react";

import {AbBotao, AbBotaoProps} from '../src/Components/AbBotao';

import { ComponentMeta, ComponentStory} from '@storybook/react'


export default{
    title: 'Components/AbBotao',
    component: AbBotao

} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/> 

export const Primario = Template.bind({})

Primario.args = {
    text: 'Ab botão primário',
    tipo: 'primario'
} as AbBotaoProps


export const Secundario = Template.bind({})

Secundario.args = {
    text: 'Ab Botão secundário',
    tipo: 'secundario',
} as AbBotaoProps