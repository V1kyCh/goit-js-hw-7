import {technologies} from './technology'
import makeTemplateTechnologies from '../templates/technologies-list.hbs'

const layout = makeTemplateTechnologies({technologies})

document.querySelector('body').innerHTML = layout;