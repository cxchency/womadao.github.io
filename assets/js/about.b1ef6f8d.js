(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0229":function(t,e,n){},"02b8":function(t,e,n){},"0636":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],attrs:{id:"errorpage","element-loading-text":"啊呀，出现了异常。稍后再过来看一下吧","element-loading-spinner":"iconfont icon-5fed9cf1882c7","element-loading-background":"rgba(0, 0, 0, 0.8)"}})},a=[],l={data:function(){return{img:n("87ba")}}},o=l,c=(n("4aeb"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=s.exports},"0682":function(t,e,n){"use strict";n("0229")},"0815":function(t,e,n){t.exports=n.p+"assets/img/bg4.07d7b6c3.jpg"},"0993":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 活动 ")]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"沃玛岛旅游景区"}},[n("h1",[t._v("原创周更解密服")]),n("div",[t._v("看似平静的岛屿其实有魔法的力量在涌动，在旅游区的表象下好像还有着更古老的气息。沃玛岛的背后究竟隐藏着多少秘密？")]),n("el-button",{attrs:{type:"text",icon:"el-icon-d-arrow-right"}},[t._v("了解更多")])],1),n("el-collapse-item",{attrs:{title:"小游戏服务器"}},[n("h1",[t._v("各种原创小游戏！")]),n("div",[t._v("工作学习累了？来小游戏服务器玩玩吧！各种原创地图和游戏机制，并且持续更新中！玩一年都不会腻！")]),n("el-button",{attrs:{type:"text",icon:"el-icon-d-arrow-right"}},[t._v("了解更多")])],1),n("el-collapse-item",{attrs:{title:"原汁原味鸡窝生存"}},[n("h1",[t._v("经典生存服务器")]),n("div",[t._v("想体验原版生存？这里也可以！这里有着和蔼可亲的op以及充分的自由！死亡不掉落！快来玩吧！")]),n("el-button",{attrs:{type:"text",icon:"el-icon-d-arrow-right"}},[t._v("了解更多")])],1),n("el-collapse-item",{attrs:{title:"自由创造服务器"}},[n("h1",[t._v("自由创造想建就建")]),n("div",[t._v("想自有建筑？没问题！创造服满足你的一切需求！周末还会不定期开展速建比赛和教学哦！")]),n("el-button",{attrs:{type:"text",icon:"el-icon-d-arrow-right"}},[t._v("了解更多")])],1)],1)],1)},a=[],l=n("2877"),o={},c=Object(l["a"])(o,i,a,!1,null,null,null);e["default"]=c.exports},"0cdd":function(t,e,n){},"0ef0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"donate"}},[n("el-card",{staticClass:"ui-flex justify-center center",staticStyle:{position:"fixed",left:"0",top:"0",width:"100%",height:"100%",display:"table-cell","text-align":"center","vertical-align":"middle"}},[n("el-image",{staticStyle:{width:"400px",height:"400px"},attrs:{src:t.pay_img,fit:t.fill}})],1)],1)},a=[],l={data:function(){return{pay_img:n("3766")}}},o=l,c=(n("5aa3"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=s.exports},2150:function(t,e,n){t.exports=n.p+"assets/img/qq.c7cebe04.jpg"},2762:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{id:"test"}},[n("test")],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{ref:"warmacaptcha",staticStyle:{"text-align":"center"}},[n("h3",[t._v("沃玛的生日是多少")]),n("el-input",{on:{input:t.start_time},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}},[n("el-button",{attrs:{slot:"append",type:"primary"},on:{click:t.onsubmit},slot:"append"},[t._v("提交")])],1)],1)},o=[],c={data:function(){return{text:"",time:0,otext:"",speed_list:[],textnum:null}},methods:{turing_test:function(){if(navigator.webdriver)return!0},start_time:function(){if(""==this.text)this.time=(new Date).getTime(),this.textnum=0;else{this.textnum=this.text.length;var t=(new Date).getTime();this.speed_list.push(this.textnum/(t-this.time))}},onsubmit:function(){this.turing_test()&&alert("nota")}}},s=c,r=n("2877"),d=Object(r["a"])(s,l,o,!1,null,null,null),u=d.exports,p={components:{test:u}},f=p,m=(n("6e57"),Object(r["a"])(f,i,a,!1,null,null,null));e["default"]=m.exports},2899:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{id:"board"}},[n("el-timeline",[n("el-timeline-item",{attrs:{timestamp:"2021/1/1",placement:"top"}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h4",[t._v("开服公告")])]),n("div",[t._v("服务器地址 womadao.top 是纯净服，版本1.14.4 欢迎大家来玩")])])],1),n("el-timeline-item",{attrs:{timestamp:"2021/1/2",placement:"top"}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h4",[t._v("异常")])]),n("div",[t._v(" 在2021年1月1日约晚11点，沃玛岛的所有玩家被强制弹出沃玛岛，并无法重进。维护人员音铃在11:10发现本次异常是因魔法道具（插件）错误导致的大规模魔力超载（cpu过载）。维护人员橙息排查发现了魔法泄露中心位于沃玛岛美食街，数以万计的物品展示框不断从烧烤摊位往外喷涌，橙息由于san值归0（电脑卡到爆炸）而被强行带离事发区域。23:15高级维护人员柚子和屁喽接到警报前往事发区域。柚子被喷涌而出的物品展示框的魔法力量暂时的夺去了视力，但依旧利用魔法道具清除了半数的物品展示框；屁喽虽拥有高级魔法书，却依旧由于强力的魔法冲击导致大脑的反应速度降低了99%，据描述只有约1帧每秒。两人于23:20清除了喷涌而出的物品展示框。23:27分，在工作人员们的不懈努力下，魔法道具核心（插件）重新加载并且沃玛岛重新开放。 ")])])],1),n("el-timeline-item",{attrs:{timestamp:"2021/1/4",placement:"top"}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h4",[t._v("活动")])]),n("div",[t._v(" 沃玛旅游公司管理人员及时销毁重置了失控的魔法道具.但是神力的另一面就是恶鬼的力量.1月4日0点,沃玛岛出现了不同程度的闹鬼现象。天空划过tnt ")])])],1)],1)],1)},a=[],l=(n("0682"),n("2877")),o={},c=Object(l["a"])(o,i,a,!1,null,null,null);e["default"]=c.exports},3766:function(t,e,n){t.exports=n.p+"assets/img/donate.a5f5b876.png"},3817:function(t,e,n){t.exports=n.p+"assets/img/cx.c47b5d82.jpg"},"3de5":function(t,e,n){"use strict";n("42dc")},"42dc":function(t,e,n){},"4aeb":function(t,e,n){"use strict";n("0cdd")},"4fe8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{id:"contact"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("h1",[t._v("联系")])]),n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-avatar",{attrs:{src:t.pl,size:50}}),n("span",{staticStyle:{"font-size":"20px"}},[t._v("Pillowo")]),n("el-button",{staticStyle:{"background-color":"#FB7299",color:"#fff"},attrs:{round:"",icon:"iconfont icon-bilibili-line"},on:{click:t.plbi}},[t._v("关注")])],1),n("div",[t._v(" 服主。沃玛2020,2021MC生贺总策划，总建筑师。 建筑方面的问题以及更多关于参与2021MC生贺请联系我~ 大小型建筑，景观，地形；编剧，导演；剪辑等 ")])]),n("el-divider"),n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-avatar",{attrs:{src:t.cx,size:50}}),n("span",{staticStyle:{"font-size":"20px"}},[t._v("橙息")]),n("el-button",{staticStyle:{"background-color":"#FB7299",color:"#fff"},attrs:{round:"",icon:"iconfont icon-bilibili-line"},on:{click:t.cxbi}},[t._v("关注")])],1),n("div",[t._v(" 服主。沃玛2019,2020MC生贺总策划，服务器组组长。 服务器方面的问题以及玩法的建议请联系我~ 负责服务器运营，开发，维护；视频拍摄，剪辑等 ")])]),n("el-divider"),n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-avatar",{attrs:{src:t.qq,size:50}}),n("span",{staticStyle:{"font-size":"20px"}},[t._v("服务器QQ群")]),n("el-button",{staticStyle:{color:"#fff"},attrs:{round:"",icon:"el-icon-plus",type:"primary"},on:{click:t.qql}},[t._v("加入")])],1),n("div",[t._v(" 服务器群号：1139412612 服务器预计于2021年 1月1日正式开放。 在此之前（之后也行）大家可以到“群文件→群在线文档”贡献自己对服务器的想法和建议 ")])])],1)},a=[],l={data:function(){return{pl:n("f5ea"),qq:n("2150"),cx:n("3817")}},methods:{plbi:function(){window.open("https://space.bilibili.com/12684277")},cxbi:function(){window.open("https://space.bilibili.com/112978436")},qql:function(){window.open("https://jq.qq.com/?_wv=1027&k=0ey3Bocn")}}},o=l,c=(n("badc"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=s.exports},"565b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"downloadpage"}},[n("el-main",[n("el-card",{attrs:{id:"downloadpageui"}},[n("h1",[t._v("正在下载客户端...")]),n("i",{staticClass:"el-icon-loading"})])],1)],1)},a=[],l={methods:{}},o=l,c=(n("672b"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=s.exports},"5aa3":function(t,e,n){"use strict";n("b411")},"5ced":function(t,e,n){},"672b":function(t,e,n){"use strict";n("7c5a")},"6e57":function(t,e,n){"use strict";n("de7f")},"754b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{id:"about"}},t._l(t.d,(function(e,i){return n("el-collapse",{key:i},[n("el-collapse-item",{attrs:{title:e.title,name:i}},[n("el-card",[t._v(t._s(e.content))])],1)],1)})),1)},a=[],l=[{title:"沃玛岛",content:"沃玛岛，坐落于忆雨群岛西北部的海域上，于10年前被沃玛旅游有限公司接管经营。全岛四季温暖且森林占比大，拥有着十分优越的自然环境，捕鱼业发达，从而成为了忆雨群岛的一大旅游胜地。沃玛岛是沃玛旅游有限公司（以下简称沃玛旅游公司）改造幅度最大，最精细的景区。全景区分为两部分：即沃玛岛主岛和附属小岛蜘蛛岛。\t有学者认为，原住民的历史可以追溯到约九千年之前。据原住民所有的图书馆史书记载，在忆雨群岛史前时期，居住着未知的文明，经历数千年的灾难后，史前文明后幸存者组成部落，发展文明，取名为“忆雨镇”。据考察，忆雨镇初期仅有数十人，人们不断开垦荒田，制造各种不同的武器与工具，建造楼房，最终发展鼎盛。史书记载，忆雨镇前后遭遇过十余次灾难与暴乱，但所幸这些历史还是保留了下来。沃玛旅游公司为了保护岛上的历史遗产，所以选择进行保护性开发。在该岛建设的初期，原住民西迁或迁移至忆雨群岛的其它岛屿，沃玛旅游公司在沃玛岛中部开创旗下企业——沃玛超市，并在此基础上建造居民区和日常建筑设施。之后，沃玛旅游公司在此岛的沿海部分建造了剩余景区与铁路，截止至2020年9月，沃玛岛一期正式完工。不仅如此，沃玛岛开发了许多的游玩方式。沃玛旅游公司运用了传输梦能量的先进技术，开设了多维度的世界。在沃玛岛主岛，可以四处游览并游玩；沃玛旅游公司也开设了小游戏区域，多样的游戏惊险恐怖，愉悦刺激；同时也架设了生存模拟系列的“鸡窝”服务器，可以让游客体会生存于文明和自然之间的多样化感受。在各个模拟服务器中，还存在各色各样的人物：十六条腿最快的扫地工，小红；忆雨镇的压寨夫人，疯狂桶先生；来自于异乡的旅人，外星生煎包……在沃玛岛上，总是能遇到自己的知己。让我们漫步在沃玛岛其中：忆雨镇的树林下，过山车的轨道上，亦或是鸡窝工厂的蜡烛旁，总会有一处令人难忘。我们致力于最好的观赏及游玩体验，经历了时间的打磨后，沃玛岛变得越发完善。希望各位能支持我们！祝您在沃玛岛游玩愉快！"},{title:"沃玛群岛",content:"沃玛群岛，位于忆雨海域西北部，是沃玛旅游有限公司在此主要的经营范围。其中分为六个岛屿，分别是核心沃玛岛、前哨站蜘蛛岛、铁路下的城堡岛与树屋岛、以及北部的两个不知名小岛。沃玛群岛地理位置优越，气候类型为温带海洋气候，年温差小，常年湿润。其中沃玛群岛中部地势平缓且海拔低，四周海拔较高但也不陡峭。土壤营养丰富，所以植被数量多，种类多，非常有种植农作物的价值。在开发前，沃玛岛与蜘蛛岛外轮廓偏于圆形，而开发后修整外轮廓才变成如今的样子。蜘蛛岛特殊在其土壤结构，蜘蛛岛的土壤并不是常见的土壤，该土壤不利于种植一般作物，但非常适合建筑，以及适合种植一部分罕见的植物。蜘蛛岛中部高，四周低。因为有沃玛岛的阻挡，所以平均风速较小，十分舒适。另外四个岛屿都由地底的魔法波动所构成，魔法波动通常会聚集在一起，所以这些岛屿总体都是中间高，四周低的地形，并且连接成大陆的机会较少。"},{title:"铁路",content:"沃玛旅游有限公司在沃玛岛上建造了两条铁路：蜘蛛岛-沃玛岛铁路与沃玛岛环岛铁路。两条铁路总长超约四千米，为沃玛岛的交通带来了极大的便利。沃玛旅游有限公司在沃玛岛上建造了两条铁路：蜘蛛岛-沃玛岛铁路与沃玛岛环岛铁路。两条铁路总长超约四千米，为沃玛岛的交通带来了极大的便利。环岛铁路起点为长颈鹿车站，终点与前者相同，途径公寓站、mua菇站、爆炸电台站、妙妙屋站、儿童乐园站。环岛铁路可以观赏绝大部分的沃玛岛景点，游客可以在任何一站下车，交通便利且方便观景"},{title:"长颈鹿车站",content:"长颈鹿车站，位于沃玛岛最北端，是环岛铁路的起点站，也是蜘蛛岛铁路的终点站，在沃玛群岛中起到重要的交通作用，是其中最大的交通枢纽。长颈鹿车站主要颜色为橙黄色，其原型来自某艺术家的艺术创作，分为上下两层，一层有通向蜘蛛岛的铁路，二层则是环岛铁路。其中主要使用了非常频繁的亮色以及大面积的玻璃，整体风格独特。图案采用了竖向形状、网格状、小面积纯色等，制造出车站独有的风格。车站内也同样大面积铺设电子屏幕以及艺术画作，并且采用一些包边、包面设计，全面使用全自动音响，将科技与艺术完美地结合。沃玛旅游有限公司在坐垫挑选、墙壁隔音上特别关注，在选材上十分谨慎，意图给游客最好的体验。在坐了许久的列车之后，可以到二楼的阳台放松，也能观赏沃玛岛海岸线旁的景观。      "},{title:"剧院",content:"剧院，位于沃玛岛北部，是沃玛岛举办演讲、或发布公告等的重要地点。整体偏童话风格，虽然面积较小，但客流量大，也是沃玛岛重要的人际交流场所。剧院主要由棕、黄、粉三种颜色组成，多采用竖条状立柱装饰，颜色互相交错，给予人视觉冲击，并且富有童话色彩。整体分成两部分：等待区和演出区。等待区大量使用书架与树叶，再加上吧台所提供的食饮，给游客极好的体验。演出区通过大量使用木材以及不同材料，达到了隔音的效果，虽然整体不大，但艺术风格浓重，观感好。诞生于此剧院的著作有音乐剧《小红的新鞋》《愉悦世界》《歌剧丈光》《日中曲》等，小品《生煎包进大儿童乐园》《忆雨童话外传》《沃玛和金蛋工厂》等。剧院收录的作品大多幽默诙谐，但其中含有深刻的道理，对艺术发展造成了一定的影响。除此以外，剧院也在岛上分布了许多建筑：比如西方广场上的雕像，就是取自《诸神的奥运》的场景，蜘蛛屋、儿童乐园等景点也有参与。剧场的文化并不单薄，而是多元的、有深度的文化."},{title:"花海",content:"花海，位于沃玛岛东北部，植被覆盖规模仅次于忆雨镇森林，是沃玛岛壮观的景点之一，也对岛上的自然环境改善做出了很大贡献。花海原来只是一片小山坡，在忆雨镇时代中期，镇民出行时发现了山坡上的土壤富有营养，并且四面环海、阳光照射多，这一切都让其有了非常高的种植价值。忆雨镇中后期，原来的山坡被种上了小麦等农作物，后经过妥协，被沃玛旅游有限公司所修缮，成为了著名景点。花海的主题是一大片丁香，地形此起彼伏，总量极多，散发淡淡的清香，可以放松身心，花海就和它的名字一样，一大片粉色的花所构成的海。丁香花海的中间有一棵古树，传说在暮春时期，树上的花会开放，并且散发出浓烈的香味，使人进入梦乡。但近几年，从没有人见到过该树开花，本着好奇心的需求，每年春天都会有游客到花海静静地观赏此树。自此，花海以及成为了一个有神秘色彩的景点，就算见不到开花，也常得游客喜欢。"},{title:"蜘蛛屋",content:"蜘蛛屋，全称蜘蛛屋居民区，位于沃玛岛中部偏北地区，在过山车和美食街等建筑群的周边，交通便利。全建筑群由两部分组成：蜘蛛屋和周边居民区。其中的蜘蛛屋部分占比最大。六年前沃玛旅游有限公司建成蜘蛛屋，整体布局大方，紧凑有序，主要由蓝、紫、金三种颜色组成。实际上，蜘蛛屋是一个收容各种奇特蜘蛛的博物馆，虽然总面积不大，但是馆内拥有百余种蜘蛛。蜘蛛屋内所展示的蜘蛛均被改造过，失去毒性，但蜘蛛伤人事件也会偶尔发生。其实，蜘蛛屋外部的蜘蛛与蜘蛛丝均为真实，因为攻击性不强，所以游客可以用手触碰甚至与其交谈。蜘蛛屋周边的居民区所住人口不多，大多建筑都为展览或公共场所使用。蜘蛛屋的设计有很大特点：相比来说，蜘蛛屋东面比西面更富艺术性，其中有部分建筑根据现存人物或地形季节主题建造，颜色多样，每年都会吸引游客。居民区最特殊的一幢建筑是建筑师暮色音铃以矿石为主题的建筑，沃玛旅游有限公司因此斥巨资，完工此建筑历时两年，十分具有艺术效果"},{title:"超市",content:"沃尔玛超市，位于沃玛岛中部偏东，是全岛最大的交易中心。其公司为沃玛旅游有限公司的旗下公司，与岛上多个景点合作，合力推进沃玛岛经济。沃尔玛超市位于蜘蛛屋居民区与老年公寓旁，再加上游客的人数，日利润极多，超市也因此购进或生产了许多普通超市不具备的商品。因为商品的增加，超市在其南方额外拓展了储藏区域，运用大量科技保证食品安全以及物品品质，沃尔玛超市的大量停车位满足了交通需求。沃尔玛超市的一楼售卖日用品、冷冻/新鲜食品、家具、大型电子产品，因收银台的数量多，所以很少出现排队等待的情况，清晰的分类能让游客准确地购买商品，其中商品多样、富有独特性。超市的服务标准也一流：个个彬彬有礼，挂着微笑，也可以让店员帮您推荐以及寻找最新、最实用的商品。后数年，超市二楼逐渐开放。二楼主要售卖或借阅书籍，也售卖小装饰品和艺术类物品。运用了先进的隔音技术使阅读区接收不到来自一楼的嘈杂声。在活动上，沃尔玛超市每周会推出一定主题的促销活动，会在电子广告牌上播放其宣传片以及推荐商品，二楼的阅读区定期更换书目，举办写作活动。"},{title:"美食街",content:"美食街，位于沃玛岛正中部，是全岛最大的步行街，也是忆雨群岛中最重要的饮食文化交流场所之一。如今，美食街与大量周边旗下企业合作，使这片商业街拥有了新的价值。美食街的历史据考证起源于沃玛岛西南部，在忆雨镇晚期建造，沃玛岛前美食街只能算是小吃摊，整体环境差，食物虽然富有特色但是不能保证品质。当时，美食街作为忆雨镇的食物购买加工中心，也是经济中心，但因其没有治理的原因而效果大打折扣。于是美食街向现沃玛岛中部靠拢，并建造了部分石质建筑，环境大大改善。后来，因忆雨镇西迁大改革，美食街定于中部，建造并完善了更多的建筑，吸引更多店家。沃玛旅游有限公司也挑选了一些店家与沃尔玛超市合作，为美食镇带来了繁荣。美食街整体大多是石质建筑，其使用骑楼结构，整体结构精美，布置井井有序。材料多用闪长岩与安山岩，墙壁以雕刻为主，精美的雕刻使美食街的建筑非常有艺术价值。建筑之间紧凑有致，使游客的选择更加多样化。美食街有三条街：西、中、东部各一条，中部以西的美食街主要提供传统食物，而东边因超市的影响多数贩卖新兴食物。美食街中配有广场，能让游客更好的欣赏以及举办活动，美食街的大量活动也让其经济突飞猛进。现在，已有接近百户商家选择美食街，已然成为了沃玛岛的地标性景点之一。"},{title:"学校",content:"在沃玛岛的中西部有着一所学校叫沃德一中，一中的有3个教学楼和一个实验楼，进入校门口，映入眼帘的就是操场了，操场有着一个5比7大的“小型”足球场，球场右边又有4个标准篮球场，看来校方为了学生的身心健康成长也花了不少钱。早晨在学校漫步，你能听到一中学生的朗朗读书声，朝气蓬勃！十分精神！（精神小伙？） 下午在学校稍息，你能看到学生在操场上整齐有序的跑操，做运动，他们挥洒着青春的汗水，迈着大步，朝着美好的未来走去。你是否也燃起了青春的激情了呢？沃德一中是一所现代化初中，在每间教室都有配备空调。在手机上，学校曾经的毕业生 为母校开发了学校软件，这个软件上，学生不仅可以练习到英语口语，而且还能在软件上做物理、化学的虚拟实验，大数据时代为学生的学习也提供了许多的便利。不过传说以前，实验楼发生了一起闹鬼事件，至于是什么时候发生的，人们也无从知晓，但是这骇人听闻的传说却流传下来了。传说以前有一位扎着双麻花辫的小女孩去实验楼做实验，但是却没有看到任何人，地上的血迹，昏暗的环境，都为这栋实验楼添上了一笔神秘的色彩，至于里面发生了什么，那就要去寻找记录着这个传说的ppt了。沃德一中，欢迎你的到来！"},{title:"鸡窝工厂",content:"鸡窝工厂，位于沃玛岛中部偏西南，是沃玛岛主要建筑之一。其中所养殖的鸡大大地解决了沃玛岛居民的食物问题，同时，也是沃玛岛经济的来源之一。鸡窝工厂的外形是一个蛋糕，蛋糕上有生贺标牌与鸡雕像，是为了纪念沃玛生日的重要建筑之一。鸡窝工厂内部可从东部的美食街边进入，内部规划整齐、作用明确、自动化水平高。鸡窝工厂主要以鸡为主题，出售其产品。超高的生产能力使其有着重要的地位，沃玛岛最大的集市——美食街，其中的大部分食物原材料来自鸡窝工厂。鸡窝工厂通过与忆雨镇的合作，对外贸易也十分繁荣，年利润极高。鸡窝工厂大致分为两部分：加工区与贮藏区。加工区中有养殖区，养殖区中的鸡经过处理，使其肉质鲜嫩，寿命长，个头大，大多数鸡会被运向沃玛岛的各个地区。剩下一些鸡会经过流水线，经过冷冻、烘烤、腌制等工艺制作成不同的食物。沃玛旅游有限公司每年会在出口鸡中加入数只经巨大改造的鸡，可以孵出金色鸡蛋。贮藏区中运用了冷冻技术，将鸡肉在5分钟以内冷冻至零下一百度之下，保证鸡肉的品质；也有可能会经过处理，制作成罐头等方便食物。近几年，沃玛旅游有限公司通过旗下产业：沃尔玛超市，大量收购并售卖鸡窝工厂产品，使其得以提升经济能力，从而进行一次大改造。改造后的鸡窝工厂效率更强，面积更大，推进沃玛岛的发展。也因其特别外观，成为了沃玛岛颇有色彩的地标性建筑。"},{title:"沃玛博物馆",content:"沃玛博物馆，位于沃玛岛中南部，是全岛最重要的历史性建筑。其中陈列了许多重要的史料，也将沃玛的经历用其贯穿起来，让游客感受到浓厚的历史文化，十分直观。博物馆分为四部分：走廊区，中心区，左展区，右展区。其中走廊区供游客休息，也是博物馆内唯一能摄影的地方；中心区是博物馆最重要的区域，其中放置的均是有历史价值的文物，也将一些编年史整理，是博物馆游客量最大的区域；左右两个展区会放出UP主沃玛的经历，用来回顾，非常有价值。同时，也会在其中开设一些小活动，可以免费参加。博物馆的建筑大多采用石质，其雕刻花纹精细，细节繁多，选材的特殊使其实用性和美观性都非常高。其大多使用双层铺垫的结构，使其稳固性进一步加强，同样也大量使用斜坡，提升了排水系统的效率，设计师的设计将其实用美观完美的呈现了出来。"},{title:"儿童乐园",content:"儿童乐园，位于沃玛岛东部，是沃玛岛最大的游乐园式景区。其中包含了多座雕像，路径错综复杂，景点多，为孩子们的童年带来了无限的欢乐。儿童乐园分为三部分：雕像群，大型建筑，章鱼花过山车，其总面积与忆雨镇约相等。雕像群中的雕像均取自史书《忆雨童话》内流传的插图，配上文字介绍，再进行改造，就成了游玩项目。有蜘蛛、灭火器、小章鱼花等有趣的项目。也可以选择找一片草地或者mua菇，安静地坐下野营，享受雕像所带来的快乐。整体适合较低龄与高龄游客游玩，令人记忆深刻。一般来说，年龄较大并身体健康的游客都可以到章鱼花过山车游玩，其高低起伏大，设计有特色，非常刺激。大型建筑有停车场解决交通问题，最多可容纳数十辆车；也有集贩卖与生产一体的工厂，专门让游客购买沃玛岛以及儿童乐园的相关周边，拍照留念；还有记录沃玛岛历史的魔法建筑——大事记碑，在这里可以看到沃玛旅游有限公司的发展历程。希望您和您的孩子能在儿童乐园玩得开心！"},{title:"章鱼花过山车",content:"章鱼花过山车，位于沃玛岛东部，属于沃玛岛儿童乐园的一部分，也是最具特色的一部分。整体风格富有艺术性，也因其非常刺激，所以成为了年轻人尤其热爱的游乐场所。章鱼花过山车的中部有一座巨大的章鱼花雕像，其原型来自于某位艺术家的作品，经设计而建造。过山车的轨道采用了特殊材料，其摩擦声音不大，而且也不会有因铁路的颠簸。其中时而平缓，时而起伏，加减速剧烈，给予人强烈的视觉冲击。同样，也有非常多的其他艺术雕像，让人眼前一亮。其中的至高点也是观赏沃玛岛的极佳位置，过山车会在高处减速，让人在体验过山车的同时观赏美景。过山车全天开放，票价便宜，性价比极高，是游客必去的景点之一。"},{title:"医院",content:"医院，全名沃玛岛医院，位于沃玛岛东部，是全岛医疗设备最先进，医疗科技最发达的中心，也是安置病人的中心地点，保障沃玛岛上每一个人的生命安全。医院外部使用粉白两色，有标志性且美观，房间根据方块分隔被隔开。医院左边是医生办公室区域，而右边是病人区域。办公室有配备仪器，取药挂号十分方便。病人区域来者不拒，每种病症都可以给予相关治疗。因为岛上有很多蜘蛛，虽然经过处理，但是会使人变异，其特征是复制器官，医院通过梦改变手术去从内部切除，以绝后患；而通梦手术则是沃玛岛一大特色，在此岛上，人体可能会接受到噩梦能量的伤害，导致人体结构发生变化，于是医院通过反梦能量消耗噩梦能量转变成良性梦能量，排出并稀释后回收，起到了良好的效果。医院中的流程简洁而自动化，到了前台会自动挂号，因资源丰富，找医生与做手术花的时间很少，大大地提升了就医体验。"},{title:"沃玛妙妙屋",content:"沃玛妙妙屋，位于沃玛岛东南部，是沃玛岛最大的集成魔法建筑设施。其因为特殊的魔法特性游客无法禁入，其修缮权力也只属于沃玛旅游有限公司高层。因为妙妙屋对世界的巨大影响，所以被严密保护，防止其损坏。沃玛妙妙屋会隔一段时间选择性地吸收世界上的噩梦能量，通过分析梦能量的状态将其用智能机械所产生的模糊意识而改变微观下的梦能量构成，再吸收进封装梦能量的容器，用同种方法改变其结构使其固体或液体化并改变状态，转换成良性的梦能量散发至全世界，此行为称作“梦循环”，进行梦循环是沃玛妙妙屋的主要职责。沃玛妙妙屋的地基采用大拱形结构，因梦能量与光的特殊性质，整体采用黄色与蓝色，建筑墙壁上有大量的雕刻，并且多次使用拱形结构。建筑西北侧塔楼多，中部有大面积的屋顶，东部则是露台，最东部的大露台向世界发送巨量的良性梦能量。建筑内分多部分。北侧处理气体化的梦能量，其通过梦溶液的吸收加上高温，转化成液体。液体梦能量一部分被导向发射台向世界输送梦能量，而多余的液体经快速升温降温加上梦溶质转化为固体，在固体状态下的梦能量极为稳定，被储存于妙妙屋的仓库内。整体高精度的仪器与操作构成了完美的梦循环。沃玛妙妙屋的梦循环让世界上的大多人受益，是沃玛岛最重要的高科技建筑。"},{title:"老年公寓",content:"老年公寓，全称沃玛岛老年花园公寓，位于沃玛岛东南部偏中地区。是沃玛岛老人占比最多的居民区，也是全岛三大居民区之一，其中的设施与服务专门为老人所提供。周边有超市，便于老人购买食物、衣物、日用品等物品；同样，东面妙妙屋提供的梦能量可以一定程度保持老人的心理健康。小区的东南部分是居民楼，楼下鸟语花香，拥有着十分丰富的绿化。这些楼房共五层，一层有六间，有两种户型供人选择。其中虽然每一间的面积不大，但设施齐全，也具备了安全警报系统，进一步增加了老年人的安全保障。小区西部有着小广场，其中准备了多种健身器材，同样的也架设了许多座椅，让老人可以健身和休息。小区的安保系统十分到位，门卫会通过技术核实每个居民的身份，在进房间时会检测外貌。小区也有着会所，居民可以在其中看书看报，或者询问问题。整个公寓群的氛围良好，功能齐全，有安全保障，总体来说是年长人居住的绝佳场所。"},{title:"忆雨镇",content:"忆雨镇，位于沃玛岛西部。西部树林茂盛，自然资源丰富；南部小镇人口建筑多，经济往来频繁，是沃玛岛主要的居民区之一。该镇也是沃玛岛历史最悠久，文化底蕴最深厚的建筑群之一，建成时间可以追溯到九百年前。忆雨镇由镇政府大楼、居民区、图书馆以及森林组成，南北均有入口可以进入。南部小镇建筑风格多采用木质尖顶结构，以平滑石包边，实用美观。小镇内分布着艺术家塔塔等人做设计的雕像与喷泉，与此同时，也有着非常多的植物，整体融合了多种建筑风格，不失格调。小镇的东部分布着麦田，忆雨镇的粮食供给就源于此地；而西部则是海滩，有巨大的人工游泳池以及游船，旅游业发达，海运便捷，是整个沃玛岛的避暑圣地。小镇的集市也有很大特色，基本上在一天的任何时候都能购买，有极其丰富的特色食物以及装饰品。忆雨镇的北部是图书馆，图书馆有着巨量的藏书，大多为童话故事，剩下一部分为名著古籍。图书馆的氛围一直以来都是安静的，有着非常多的绿化景观，也通过科技让声音的传播效率降低，以保证阅读质量。据馆内古文记载，曾经有过地下室和禁书区，可如今无法发现踪迹，但在其中检测到了大量的能量波动，疑似是高等文明为保护藏书所致。图书馆朝北是一片森林，其中有着数不胜数的未曾发现过的生物，据统计有两百多种。自然资源极其丰富，每年忆雨镇居民会在其中砍伐树木作为建材并补种，形成了良好的循环。传说，在史前时期，这篇森林有着巨大的未知生物，后来因不知原因灭绝。据说，忆雨镇发源于现沃玛岛中部地区，后迁至西部森林东面，直到现在才定于西部海滩旁，其中经历过多次战争与统一，镇民也是这批岛屿开发前的原住民。其历史深远，以现在的科技水平无法研究，沃玛旅游有限公司的研究团队预计在数年内，还原出忆雨镇及忆雨群岛的历史景象。"},{title:"Mua菇乐园",content:"在沃玛岛的西南部有一片湿地，那里生长着各种奇怪的蘑菇，蘑菇的体型十分巨大，至少有着普通人类的两倍身高，有的甚至长出了人脸还扎了辫子。至于是为什么要在这座岛上繁殖呢？谁也不知道。因为其潮湿阴凉的环境，在每年的夏天，都会有许多慕名而来的游客来此地野餐。直到近两年来，发生了一起蘑菇袭击人类的事件，有目击者说是蘑菇开始“吃人”了，引发了岛上居民和游客的恐慌，mua菇乐园也变成了人迹罕至的荒地，在此事件后，岛上的员工在mua菇乐园的周围贴上了“禁止携带食物”的告示牌，这些蘑菇袭击人，似乎是冲着游客在美食街买的食物去的呢。"},{title:"爆炸电台",content:"爆炸电台，位于沃玛岛南部，是沃玛岛的电力中心、监控中心、广播中心、以及实时监测中心。为沃玛岛的安全与资源分配做出巨大贡献，游客暂时无法进入。爆炸电台的外形如其名，原型取自炸药，无论外部还是内部看起来都是巨大的炸药，外部巨大的TNT标志是爆炸电台的特征。内部的爆炸电台分成三部分：外圈的高台使人检测设施，观看屏幕；中部靠前的大屏幕可以看到全岛的监控画面，以及天气与能量的观测情况；而中心则是发射接受台，向全岛发射信号，并接受全岛的信号。全岛的各种重要设施中，也包含了小型的信号处理器，使得沃玛岛能够更好地处理流通信息，各种全岛性活动举办更为方便，构成了沃玛岛的信息网。"},{title:"自由建筑区",content:"曾经在沃玛岛的东北和西南方向，有着一片荒地，荒凉的土地上保存着历史古迹，为了让这一片荒地活跃起来，沃玛岛的领导人在全国招聘建筑师来此地自由创作，甚至有国外的建筑师也慕名而来，原本荒凉的土地瞬间建起了各种建筑设施。古迹重修，艺术创作，宗教建筑都在这里出现，艺术雕塑拔地而起，历史古迹也找回了昔日的辉煌。忆雨府邸的旁边有着一座不知名的城堡，城堡庞大的身躯为忆雨府邸挡下了绝大部分的阳光，这两座建筑放在一起，难免会显得有些违和。在城堡的旁边则有着各种雕塑，但是在雕塑和建筑的中心，有着一所小亭子，亭子不像城堡一般，显得荣华富贵，它那简约的建筑结构又不失美感，矗立在水中，如同一朵莲花。往亭边望去，一座小寺庙坐落于此，由于是寺庙，没有多少现代电器，所以晚上的采光并不是很好。或许有人会注意到路边的爆炸电台，但是这里并不会做过多的介绍，爆炸电台的TNT外表给人带来了一股危险的气息，仿佛会随时爆炸一般······自由建筑区的建设至今都未结束，这些艺术家未来的创造，真是令人期待呢!"}],o=l,c={data:function(){return{d:o}}},s=c,r=(n("3de5"),n("2877")),d=Object(r["a"])(s,i,a,!1,null,null,null);e["default"]=d.exports},"7c5a":function(t,e,n){},"87ba":function(t,e,n){t.exports=n.p+"assets/img/err_show.b1adb710.png"},"890f":function(t,e,n){t.exports=n.p+"assets/img/bg3.72ce07da.jpg"},"975a":function(t,e,n){t.exports=n.p+"assets/img/bg2.773345a6.jpg"},b411:function(t,e,n){},badc:function(t,e,n){"use strict";n("02b8")},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{staticClass:"banner"},[n("el-carousel",{staticClass:"banner",staticStyle:{"z-index":"0"},attrs:{height:"100%"}},t._l(t.bannerimg,(function(e,i){return n("el-carousel-item",{key:i,attrs:{id:"bannerimg"}},[n("div",{staticStyle:{position:"absolute",width:"100%",height:"100%","text-align":"center","z-index":"-1"}},[n("el-image",{staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"-100",left:"0%",top:"0%","background-color":"black",opacity:"1"},attrs:{src:e.img,size:"fill"}}),n("el-card",{staticStyle:{"z-index":"5",top:"30%",position:"absolute",opacity:"0.8",width:"100%"},attrs:{shadow:"never"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("h1",[t._v(" "+t._s(e.text.main_title))]),n("h3",[t._v(t._s(e.text.secondary_title))])]),n("div",[t._v(" "+t._s(e.text.content)+" ")]),n("p",{staticStyle:{"font-size":"12px",color:"#C0C4CC"}},[t._v("游戏版本：1.14.4,java版,国际非正版")]),n("el-divider"),n("el-button",{attrs:{type:"primary"},on:{click:t.gotoabout}},[t._v("了解更多")]),n("el-button",{attrs:{type:"success",round:"",icon:"el-icon-download"},on:{click:t.download}},[t._v("下载客户端")])],1)],1)])})),1)],1),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"videocontentarea"}},[n("iframe",{staticStyle:{position:"absolute",top:"0%",width:"100%",height:"100%",left:"0%"},attrs:{src:"//player.bilibili.com/player.html?aid=884987967&bvid=BV12K4y1h7Vm&cid=249110213&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",id:"video_online"}})])}],l={data:function(){return{bannerimg:[{img:n("c5d6"),text:{main_title:"沃玛岛旅游景区",secondary_title:"原创周更解密服",content:"看似平静的岛屿其实有魔法的力量在涌动，在旅游区的表象下好像还有着更古老的气息。沃玛岛的背后究竟隐藏着多少秘密？"}},{img:n("975a"),text:{main_title:"小游戏服务器",secondary_title:"各种原创小游戏！",content:"工作学习累了？来小游戏服务器玩玩吧！各种原创地图和游戏机制，并且持续更新中！玩一年都不会腻！"}},{img:n("890f"),text:{main_title:"原汁原味鸡窝生存",secondary_title:"经典生存服务器",content:"想体验原版生存？这里也可以！这里有着和蔼可亲的op以及充分的自由！死亡不掉落！快来玩吧！"}},{img:n("0815"),text:{main_title:"自由创造服务器",secondary_title:"自由创造想建就建",content:"想自由建筑？没问题！创造服满足你的一切需求！周末还会不定期开展速建比赛和教学哦！"}}],video:n("c0b9"),cover:n("cb32")}},methods:{govideo:function(){window.open("https://www.bilibili.com/video/BV12K4y1h7Vm")},gotoabout:function(){this.$router.push({path:"/about"})},download:function(){var t=["https://youpai.warma.ren/uploads%2F2021%2F01%2F24%2FfLbuRrB2_womadao.rar"];window.open(t[0])}},mounted:function(){var t=document.getElementById("video_online");t.style.width=.6*t.style.height,window.addEventListener("resize",(function(){var t=document.getElementById("video_online");t.style.width=.6*t.style.height}))}},o=l,c=(n("cccb"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=s.exports},c0b9:function(t,e,n){t.exports=n.p+"assets/media/gw.13923d3a.mp4"},c5d6:function(t,e,n){t.exports=n.p+"assets/img/bg1.d47d949a.jpg"},cb32:function(t,e,n){t.exports=n.p+"assets/img/videocover.fa3d7d8b.jpg"},cccb:function(t,e,n){"use strict";n("5ced")},de7f:function(t,e,n){},f5ea:function(t,e,n){t.exports=n.p+"assets/img/pl.22c4bdfa.jpg"}}]);