import { displayAppSpese, categories, codContainer, itemData, itemData_Tools,
    warning, modalCategState, modalTransitionState, objGraphView, GetCateg, titlePage, currentTab } from './globalVar.js';

import { CloseCategGump, OpenCategGump, AddCateg, ModCateg, 
    MergeCateg, RemCateg, LoadImg, images, colors, matColors, PickIcon, PickColor} from './subComponent/componentCategory.js';

import { AddTransition, RemTransition, ModTransition, 
    OpenAddTransitionGump, OpenModTransitionGump, OpenDelTransitionGump, 
    CloseTransitionGump,GetTransitions} from './subComponent/componentTransition.js';

import { ConfirmDate, objView, OpenToolsGump, CloseToolsGump} from './subComponent/componentTools.js';

import { componentSpese_Html } from './componentHtml.js';
import { computed } from 'vue';

export default{
    data(){        
        const OpenCategory = () => { currentTab.value = "categories"; };
        const OpenTransitions = () => { currentTab.value = "transitions"; };
        const OpenAnalyticsTools = () => { currentTab.value = "tools"; };
    
        const arrayTransitions =  computed(()=>GetTransitions(categories))

        return {PickIcon, PickColor, images, colors, matColors, categories, codContainer, itemData, modalCategState, modalTransitionState, displayAppSpese, CloseCategGump, OpenCategGump, 
            AddCateg, ModCateg, MergeCateg, AddTransition, RemTransition,ModTransition, warning, RemCateg, OpenAddTransitionGump, 
            CloseTransitionGump, OpenModTransitionGump, OpenDelTransitionGump, currentTab, OpenCategory, OpenAnalyticsTools, OpenTransitions, 
            arrayTransitions, objGraphView, objView, ConfirmDate, GetCateg, OpenToolsGump, CloseToolsGump, itemData_Tools, LoadImg
        }
    },
    template:componentSpese_Html
}
