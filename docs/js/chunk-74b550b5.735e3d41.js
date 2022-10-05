(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b550b5"],{"7c304":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"components-show"},[t("um-card",{attrs:{title:"多选框组件"}},[t("div",{staticClass:"components-group"},[t("p",[e._v("单独使用")]),t("um-checkbox",{model:{value:e.testdata.first.box,callback:function(t){e.$set(e.testdata.first,"box",t)},expression:"testdata.first.box"}},[e._v("默认")]),t("um-checkbox",{attrs:{disabled:""},model:{value:e.testdata.first.box,callback:function(t){e.$set(e.testdata.first,"box",t)},expression:"testdata.first.box"}},[e._v("禁用")])],1),t("div",{staticClass:"components-group"},[t("p",[e._v("成组使用")]),t("um-checkbox-group",{model:{value:e.testdata.second.box,callback:function(t){e.$set(e.testdata.second,"box",t)},expression:"testdata.second.box"}},[t("um-checkbox",{attrs:{label:"foo"}},[e._v("foo")]),t("um-checkbox",{attrs:{label:"bar"}},[e._v("bar")]),t("um-checkbox",{attrs:{label:"baz",disabled:""}},[e._v("baz")])],1)],1),t("div",{staticClass:"components-group"},[t("p",[e._v("自定义大小")]),t("um-checkbox-group",{model:{value:e.testdata.second.box,callback:function(t){e.$set(e.testdata.second,"box",t)},expression:"testdata.second.box"}},[t("um-checkbox",{attrs:{size:30,label:"foo"}},[e._v("foo")]),t("um-checkbox",{attrs:{size:30,label:"bar"}},[e._v("bar")]),t("um-checkbox",{attrs:{size:30,label:"baz",disabled:""}},[e._v("baz")])],1)],1),t("template",{slot:"moreinfo"},[t("div",{staticClass:"components_code"},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}]},[e._v("                        "),t("code",{staticClass:"xml"}),e._v("\n                    ")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecodeJS,expression:"sourcecodeJS"}]},[e._v("                        "),t("code",{staticClass:"javascript"}),e._v("\n                    ")])])])],2)],1),t("div",{staticClass:"components-use"},[t("div",[t("h2",[e._v("um-checkbox")]),t("um-table",{attrs:{columns:e.attribution.columns,data:e.attribution.data}}),t("h2",[e._v("um-checkbox-group")]),t("um-table",{attrs:{columns:e.attributionGroup.columns,data:e.attributionGroup.data}})],1)])])},s=[],c={data(){return{sourcecode:'<div class="components-group">\n    <p>单独使用</p>\n    <um-checkbox v-model="testdata.first.box">默认</um-checkbox>\n    <um-checkbox v-model="testdata.first.box" disabled>禁用</um-checkbox>\n</div>\n<div class="components-group">\n    <p>成组使用</p>\n    <um-checkbox-group v-model="testdata.second.box">\n        <um-checkbox label="foo">foo</um-checkbox>\n        <um-checkbox label="bar">bar</um-checkbox>\n        <um-checkbox label="baz" disabled>baz</um-checkbox>\n    </um-checkbox-group>\n</div>\n<div class="components-group">\n    <p>自定义大小</p>\n    <um-checkbox-group v-model="testdata.second.box">\n        <um-checkbox :size="30" label="foo">foo</um-checkbox>\n        <um-checkbox :size="30" label="bar">bar</um-checkbox>\n        <um-checkbox :size="30" label="baz" disabled>baz</um-checkbox>\n    </um-checkbox-group>\n</div>',sourcecodeJS:"export default {\n    data() {\n        return {\n            testdata: {\n                first: {\n                    box: false\n                },\n                second: {\n                    box: []\n                }\n            },\n        }\n    }\n}",testdata:{first:{box:!1},second:{box:[]}},attribution:{columns:[{name:"attr",label:"属性名称",width:"12%"},{name:"type",label:"接受类型",width:"12%"},{name:"default",label:"默认值",width:"12%"},{name:"description",label:"其他说明",width:"64%"}],data:[{attr:"v-model",type:"Boolean",default:"false",description:"单独使用时的双向绑定值, 选中时为真."},{attr:"label",type:"String",default:"-",description:"单独使用时, label中的值可以代替插槽显示描述文字, 与um-checkbox-group一起使用时, 作为数组中的值"},{attr:"name",type:"String",default:"-",description:"对应input中的name属性"},{attr:"size",type:"Number",default:"20",description:"大小属性, 单位为px"},{attr:"disabled",type:"Boolean",default:"false",description:"是否禁用"}]},attributionGroup:{columns:[{name:"attr",label:"属性名称",width:"12%"},{name:"type",label:"接受类型",width:"12%"},{name:"default",label:"默认值",width:"12%"},{name:"description",label:"其他说明",width:"64%"}],data:[{attr:"v-model",type:"Array",default:"-",description:"使用um-checkbox-group时的双向绑定值, 选中时向数组添加选中的um-checkbox中的label值."}]}}}},n=c,l=a("2877"),b=Object(l["a"])(n,o,s,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-74b550b5.735e3d41.js.map