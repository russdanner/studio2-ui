tinyMCEPopup.requireLangPack();
function initCommonAttributes(c){var a=document.forms[0],b=tinyMCEPopup.editor.dom;
setFormValue("title",b.getAttrib(c,"title"));
setFormValue("id",b.getAttrib(c,"id"));
selectByValue(a,"class",b.getAttrib(c,"class"),true);
setFormValue("style",b.getAttrib(c,"style"));
selectByValue(a,"dir",b.getAttrib(c,"dir"));
setFormValue("lang",b.getAttrib(c,"lang"));
setFormValue("onfocus",b.getAttrib(c,"onfocus"));
setFormValue("onblur",b.getAttrib(c,"onblur"));
setFormValue("onclick",b.getAttrib(c,"onclick"));
setFormValue("ondblclick",b.getAttrib(c,"ondblclick"));
setFormValue("onmousedown",b.getAttrib(c,"onmousedown"));
setFormValue("onmouseup",b.getAttrib(c,"onmouseup"));
setFormValue("onmouseover",b.getAttrib(c,"onmouseover"));
setFormValue("onmousemove",b.getAttrib(c,"onmousemove"));
setFormValue("onmouseout",b.getAttrib(c,"onmouseout"));
setFormValue("onkeypress",b.getAttrib(c,"onkeypress"));
setFormValue("onkeydown",b.getAttrib(c,"onkeydown"));
setFormValue("onkeyup",b.getAttrib(c,"onkeyup"))
}function setFormValue(a,b){if(document.forms[0].elements[a]){document.forms[0].elements[a].value=b
}}function insertDateTime(a){document.getElementById(a).value=getDateTime(new Date(),"%Y-%m-%dT%H:%M:%S")
}function getDateTime(b,a){a=a.replace("%D","%m/%d/%y");
a=a.replace("%r","%I:%M:%S %p");
a=a.replace("%Y",""+b.getFullYear());
a=a.replace("%y",""+b.getYear());
a=a.replace("%m",addZeros(b.getMonth()+1,2));
a=a.replace("%d",addZeros(b.getDate(),2));
a=a.replace("%H",""+addZeros(b.getHours(),2));
a=a.replace("%M",""+addZeros(b.getMinutes(),2));
a=a.replace("%S",""+addZeros(b.getSeconds(),2));
a=a.replace("%I",""+((b.getHours()+11)%12+1));
a=a.replace("%p",""+(b.getHours()<12?"AM":"PM"));
a=a.replace("%%","%");
return a
}function addZeros(c,a){var b;
c=""+c;
if(c.length<a){for(b=0;
b<(a-c.length);
b++){c="0"+c
}}return c
}function selectByValue(a,c,g,f,h){if(!a||!a.elements[c]){return
}var b=a.elements[c];
var j=false;
for(var d=0;
d<b.options.length;
d++){var e=b.options[d];
if(e.value==g||(h&&e.value.toLowerCase()==g.toLowerCase())){e.selected=true;
j=true
}else{e.selected=false
}}if(!j&&f&&g!=""){var e=new Option("Value: "+g,g);
e.selected=true;
b.options[b.options.length]=e
}return j
}function setAttrib(e,d,c){var b=document.forms[0];
var a=b.elements[d.toLowerCase()];
tinyMCEPopup.editor.dom.setAttrib(e,d,c||a.value)
}function setAllCommonAttribs(a){setAttrib(a,"title");
setAttrib(a,"id");
setAttrib(a,"class");
setAttrib(a,"style");
setAttrib(a,"dir");
setAttrib(a,"lang")
}SXE={currentAction:"insert",inst:tinyMCEPopup.editor,updateElement:null};
SXE.focusElement=SXE.inst.selection.getNode();
SXE.initElementDialog=function(a){addClassesToList("class","xhtmlxtras_styles");
TinyMCE_EditableSelects.init();
a=a.toLowerCase();
var b=SXE.inst.dom.getParent(SXE.focusElement,a.toUpperCase());
if(b!=null&&b.nodeName.toUpperCase()==a.toUpperCase()){SXE.currentAction="update"
}if(SXE.currentAction=="update"){initCommonAttributes(b);
SXE.updateElement=b
}document.forms[0].insert.value=tinyMCEPopup.getLang(SXE.currentAction,"Insert",true)
};
SXE.insertElement=function(f){var g=SXE.inst.dom.getParent(SXE.focusElement,f.toUpperCase()),e,c;
if(g==null){var d=SXE.inst.selection.getContent();
if(d.length>0){c=f;
insertInlineElement(f);
var a=tinymce.grep(SXE.inst.dom.select(f));
for(var b=0;
b<a.length;
b++){var g=a[b];
if(SXE.inst.dom.getAttrib(g,"data-mce-new")){g.id="";
g.setAttribute("id","");
g.removeAttribute("id");
g.removeAttribute("data-mce-new");
setAllCommonAttribs(g)
}}}}else{setAllCommonAttribs(g)
}SXE.inst.nodeChanged();
tinyMCEPopup.execCommand("mceEndUndoLevel")
};
SXE.removeElement=function(a){a=a.toLowerCase();
elm=SXE.inst.dom.getParent(SXE.focusElement,a.toUpperCase());
if(elm&&elm.nodeName.toUpperCase()==a.toUpperCase()){tinyMCE.execCommand("mceRemoveNode",false,elm);
SXE.inst.nodeChanged();
tinyMCEPopup.execCommand("mceEndUndoLevel")
}};
SXE.showRemoveButton=function(){document.getElementById("remove").style.display=""
};
SXE.containsClass=function(b,a){return(b.className.indexOf(a)>-1)?true:false
};
SXE.removeClass=function(f,c){if(f.className==null||f.className==""||!SXE.containsClass(f,c)){return true
}var e=f.className.split(" ");
var d="";
for(var a=0,b=e.length;
a<b;
a++){if(e[a]!=c){d+=(e[a]+" ")
}}f.className=d.substring(0,d.length-1)
};
SXE.addClass=function(b,a){if(!SXE.containsClass(b,a)){b.className?b.className+=" "+a:b.className=a
}return true
};
function insertInlineElement(b){var a=tinyMCEPopup.editor,c=a.dom;
a.getDoc().execCommand("FontName",false,"mceinline");
tinymce.each(c.select("span,font"),function(d){if(d.style.fontFamily=="mceinline"||d.face=="mceinline"){c.replace(c.create(b,{"data-mce-new":1}),d,1)
}})
};