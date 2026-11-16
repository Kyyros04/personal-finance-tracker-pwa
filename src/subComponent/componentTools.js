import { categories, date, inModal, itemData_Tools, warning, ClearItemDataTools } from "../globalVar.js";
import { computed , watch } from 'vue';
import { graphView } from '../myclass.js';
import {CheckDate} from '../utils/helpers.js';

var viewgraph=new graphView();

export const ConfirmDate = () => {
    //controlli sulla data
    switch(itemData_Tools.type){
      case "day": CheckDate(itemData_Tools.value);
      break;
      case "week":CheckDate(itemData_Tools.value);
      break;
      case "month":CheckDate(itemData_Tools.value);
      break;
      case "year":CheckDate(itemData_Tools.value);
      break;
      case "alltime": itemData_Tools.value="";
      break;
      default:{warning.value="scegliere il tipo di data"; return;}
    }

    console.log(itemData_Tools.type+" "+ itemData_Tools.value);

    date.type = itemData_Tools.type;
    date.value = itemData_Tools.value.toString();
    itemData_Tools.tabBool = "block";
    itemData_Tools.sumBool = "block";
    inModal.bool = false;
    warning.value = "";
    itemData_Tools.toolsGump = "none";
}
export const OpenToolsGump = () => {
  ClearItemDataTools();
  itemData_Tools.toolsGump="block";
  warning.value="";
}
export const CloseToolsGump = () => {
  inModal.bool = false;
  warning.value = "";
  itemData_Tools.toolsGump = "none";
  itemData_Tools.value = "";
  itemData_Tools.type = "";
}

watch(()=>itemData_Tools.type, (type) => {
  switch(type){
      case "day": 
        itemData_Tools.yBool = "none"; itemData_Tools.mBool = "none"; 
        itemData_Tools.dBool = "flex"; itemData_Tools.aBool = "none"; 
      break;
      case "week": 
        itemData_Tools.yBool = "none"; itemData_Tools.mBool = "none"; 
        itemData_Tools.dBool = "flex"; itemData_Tools.aBool = "none"; 
      break;
      case "month": 
        itemData_Tools.yBool = "none"; itemData_Tools.mBool = "flex"; 
        itemData_Tools.dBool = "none"; itemData_Tools.aBool = "none"; 
      break;
      case "year": 
        itemData_Tools.yBool = "flex"; itemData_Tools.mBool = "none"; 
        itemData_Tools.dBool = "none"; itemData_Tools.aBool = "none"; 
      break;
      case "alltime": 
        itemData_Tools.yBool = "none"; itemData_Tools.mBool = "none"; 
        itemData_Tools.dBool = "none"; itemData_Tools.aBool = "flex"; 
      break;
      case "": break;
      default: warning.value="Errore nel tipo della data";
  }
})


const CalculateGraphs = () => {

   if (!categories.value || Object.entries(categories.value).length == 0) {
    return {"h_bar":{}, "week":{}, "month":{}, "year":{}, "all":{}};
  }

  const categoriesClone = JSON.parse(JSON.stringify(categories.value));
  
  viewgraph = new graphView(categoriesClone);

  if(Object.entries(categories.value).length==0) return {"h_bar":{}, "week":{}, "month":{}, "year":{}, "all":{}};
  viewgraph.ShowGraphics(date.type,date.value);
  return {
    "h_bar": viewgraph.SumValueTransition(), 
    "week":viewgraph.week, 
    "month":viewgraph.month, 
    "year":viewgraph.year,
    "all":viewgraph.allTime
  };
}

export const objView = computed(()=>CalculateGraphs());




