/*
 * @Author: Akarichan
 * @LastEditors: Akarichan
 */

// 入口文件
import UmButton from './um-button'
import UmCard from './um-card'
import UmCheckbox from './um-checkbox'
import UmCheckboxGroup from './um-checkbox-group'
import UmDialog from './um-dialog'
import UmInput from './um-input'
import UmMenu from './um-menu'
import UmMenuItem from './um-menu-item'
import UmRadio from './um-radio'
import UmRadioGroup from './um-radio-group'
import UmSlider from './um-slider'
import UmSwitch from './um-switch'
import UmTabPane from './um-tab-pane'
import UmTable from './um-table'
import UmTabs from './um-tabs'
import UmTag from './um-tag'
import './assets/icon/iconfont.css'

const components = [
    UmButton,
    UmCard,
    UmCheckbox,
    UmCheckboxGroup,
    UmDialog,
    UmInput,
    UmMenu,
    UmMenuItem,
    UmRadio,
    UmRadioGroup,
    UmSlider,
    UmSwitch,
    UmTabPane,
    UmTable,
    UmTabs,
    UmTag
]


const install = function(Vue) {
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


export default { install }