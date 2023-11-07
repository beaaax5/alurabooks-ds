import React from "react";

import {AbGrupoOpcoes} from '../src/Components/AbGrupoOpcoes'
import { ComponentMeta, ComponentStory} from '@storybook/react'


export default{
    title: 'Components/AbGrupoOpcoes',
    component: AbGrupoOpcoes

} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes /> // Eu recebo os argumentos e encaminhos os argumentsos para AbBotao

export const Padrao = Template.bind({})

Padrao.args = {

}
