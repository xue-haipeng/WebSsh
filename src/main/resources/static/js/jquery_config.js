!function(e){e.fn.extend({Top:function(n,o){var a=e(n.element);a&&(a.on("click",function(){e("body,html").animate({scrollTop:0},1e3)}),e(document).on("scroll",function(){var o=e(window).scrollTop();o>n.offset?a.fadeIn():a.fadeOut()}))},Navigation:function(n,o){var a=e(n.nav),t=e(n.subMenu+"["+n.subMenuAttr+"]"),i=null;a.hover(function(){a.addClass(n.navHoverClass)},function(){a.remove(n.navHoverClass)}),t.each(function(o){var a=e(this),t=e("#"+e(this).attr(n.subMenuAttr));a.hover(function(){a.addClass(n.subMenuHoverClass),t.stop().slideDown()},function(){i=setTimeout(function(){a.removeClass(n.subMenuHoverClass),t.stop().slideUp()},100)}),t.hover(function(){clearTimeout(i)},function(){i=setTimeout(function(){a.removeClass(n.subMenuHoverClass),t.stop().slideUp()},100)})}),void 0!==n.mobileMenu&&e(n.mobileMenu).click(function(){e(n.mobileItem).stop(),e(this).hasClass("hover")?(e(this).removeClass("hover"),e(n.mobileItem).stop().slideUp()):(e(this).addClass("hover"),e(n.mobileItem).stop().slideDown())}),e(document).on("scroll",function(){var o=e(window).scrollTop();o>n.offset?a.addClass(n.navHoverClass||"hover"):a.removeClass(n.navHoverClass||"hover")})},QRcode:function(n,o){var a=e("["+n.button+"]"),t=e(n.layer),i=e(n.box);a.click(function(){i.css({opacity:1}),i.find("img").attr("src",e(this).attr(n.button)),i.addClass("qr_show"),t.addClass("qr_show_layer")}),i.find("a.closed").click(function(){i.removeClass("qr_show"),t.removeClass("qr_show_layer")}),t.click(function(){i.removeClass("qr_show"),t.removeClass("qr_show_layer")})},fMenu:function(n,o){var a=n.menuElement,t=n.elementHoverClass,i=n.changeButtonElement,r=n.showNumber,s=n.positionIndex,l=e(a),d=e(i),h={index:0,index_begin:0,index_end:4,number:r,max_number:l.length-1},c=location.href,u=function(n){if("number"!=typeof n)return!1;n>h.max_number?n=0:n<0&&(n=0),h.index=n,h.index_begin=Math.floor(n/h.number)*h.number,h.index_end=h.index_begin+h.number-1;for(var o=0;o<=h.max_number;o++)o>=h.index_begin&&o<=h.index_end?l.eq(o).fadeIn():l.eq(o).hide(),e(document).width()<768&&l.eq(o).show()},p=function(e){l.removeClass(t).eq(e).addClass(t)},m=function(){"number"==typeof s&&(c.indexOf("dorado-genius")>-1?s=0:c.indexOf("inwallpaper")>-1?s=1:c.indexOf("pixelphone")>-1?s=2:c.indexOf("shareu")>-1?s=3:c.indexOf("91launcher")>-1?s=4:c.indexOf("dorado-shine")>-1?s=5:c.indexOf("dorado-clean")>-1?s=6:c.indexOf("hindu-weather-calendar")>-1?s=7:c.indexOf("dorado-ringtone")>-1?s=8:c.indexOf("dorado-app-installer")>-1&&(s=9),u(s),p(s)),d.bind("click",{setIndex:u,tag:h},function(n){n.data.tag.index=n.data.tag.index_end+1,n.data.setIndex(n.data.tag.index),e(this).find("div").addClass("hover"),setTimeout(function(){d.find("div").removeClass("hover")},1e3)})};m()},playVideo:function(n,o){var a=e(n.buttons),t=e(n.modal),i=n.url,r=n.title;a.click(function(){e(document).width()<=600?t.modal().find("iframe").attr("height",260):t.modal().find("iframe").attr("height",600),t.modal().find("iframe").attr("src",e(this).attr(i)),t.find(".modal-title").text(e(this).attr(r))})},newsList:function(n,o){for(var a="/news/",t=location.href,i="javascript:alert('no news');",r="javascript:alert('no news')",s=0;s<news.pixelphone.length;s++)if(t.indexOf(news.pixelphone[s].url)>-1){0===s?e("a[data-news='pre']").attr("href",i).css({visibility:"hidden"}):(e("a[data-news='pre']").attr("href",a+news.pixelphone[s-1].url),e("h5[data-news='pre-title']").text(news.pixelphone[s-1].title)),s==news.pixelphone.length-1?e("a[data-news='next']").attr("href",r).css({visibility:"hidden"}):(e("a[data-news='next']").attr("href",a+news.pixelphone[s+1].url),e("h5[data-news='next-title']").text(news.pixelphone[s+1].title));break}}})}(jQuery);var news={pixelphone:[{id:"001001",source:"bloggersideas",url:"review-of-pixelphone-pixelphone-pro-free-download.html",title:"Review of PixelPhone: Pixelphone Pro Free Download",keywords:"bloggersideas, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on bloggersideas.",abstract:"Do you aim to make your Android smartphone improved with progressive features and new theme provision then PixelPhone Pro is the Android app, you must replace with your phone app on Android smartphone. Designed with pace, easier exploration and customization in head,PixelPhone is a superb app for those who look for some transformed and exciting alternatives to the features that their device already has. Every Android mobile emanates a diverse phone app nowadays, which is fundamentally the utmost significant fragments of the device, so selecting something as per your suitability is most important.",date:"",author:"bloggersideas"},{id:"001002",source:"hi-news",url:"pixelphone-a-worthy-replacement-of-the-standard-dialer-on-android.html",title:"PIXELPHONE — ДОСТОЙНАЯ ЗАМЕНА СТАНДАРТНОЙ «ЗВОНИЛКЕ» НА ANDROID",keywords:"hi-news, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on hi-news.",abstract:"Какоеприложениевыиспользуетедлязвонковнасвоем Android-смартфоне? Навернякастандартное — малокомуприходит в головуустанавливатьсторонниепрограммы, ноэтотолькодотехпор, покаониихнепопробуют. ОднимизтакихприложенийявляетсяPixelPhone, разработанноероссийскимиразработчиками, котороезатемприобрелакомпанияFelink Technology.",date:"",author:"hi-news"},{id:"001003",source:"9lessons",url:"pixelphone-enhance-your-experience-getting-over-the-default-ui-of-android-smartphone.html",title:"PixelPhone Enhance your Experience Getting Over the Default UI of your Android Smartphone",keywords:"9lessons, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on 9lessons.",abstract:"PixelPhone is an app for your Android device that replaces your default phone app to offer you a better experience. It has features that you don't usually get through your pre-installed phone & contact apps. Since its initiation some years back, the app has constantly refined and improved its features to better suit user's needs. Once you start using the app, you would not want to go back to the previous default version of your phone. ",date:"",author:"9lessons.info"},{id:"001004",source:"lifehacker",url:"pixelphone-smart-dialer-with-contact-manager-for-android.html",title:"PixelPhone — интеллектуальная звонилка с менеджером контактов для Android",keywords:"lifehacker, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on lifehacker.",abstract:"Когда-то давно статьи про телефоны состояли из обзора функций адресной книги, истории звонков, быстрого набора и т.п. Потом появились универсальные программные платформы (Symbian, Android) и телефонные функции смартфонов не только отошли на второй план, но и стали мало чем отличаться от модели к модели даже разных производителей. Но что если возможностей стандартной «звонилки» в том же Android вам недостаточно?",date:"",author:"lifehacker"},{id:"001005",source:"zoom.cnews",url:"overview-pixelphone-applications-very-functional-dialer.html",title:"Обзор приложения PixelPhone: очень функциональная звонилка",keywords:"zoom.cnews, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on zoom.cnews.",abstract:"Когда-тодавностатьипротелефонысостоялиизобзорафункцийадреснойкниги, историизвонков, быстрогонабора и т.п. Потомпоявилисьуниверсальныепрограммныеплатформы (Symbian, Android) и телефонныефункциисмартфоновнетолькоотошлинавторойплан, но и сталималочемотличатьсяотмодели к моделидажеразныхпроизводителей. Ночтоесливозможностейстандартной «звонилки» в томже Android ",date:"",author:"zoom.cnews"},{id:"001006",source:"androidheadlines",url:"sponsored-app-review-pixelphone.html",title:"Sponsored App Review: PixelPhone",keywords:"androidheadlines, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on androidheadlines.",abstract:"PixelPhone Pro is a dialer app for Android from Dorado apps that wants to make it not only easier and more convenient for you to get quick and easy access to all of your contacts, but to make it more enjoyable, too. This is an app that features a fully-customizable interface, an easy-to-use and to launch dialer with QWERTY and T9 search. With call recording and Caller ID features as well, PixelPhone is an app that’s only growing ever-larger. There are a wide variety of themes on offer here as well as quality contacts management, the option to group message people, support for multiple SIM cards and different contacts, and a whole lot more, PixelPhone seems like the dream phone app for Android. Let’s take a closer look and see, shall we?",date:"",author:"androidheadlines"},{id:"001007",source:"androidinsider",url:"one-of-the-best-dialer-and-contact-manager-for-android.html",title:"Одна из лучших «звонилок» и менеджеров контактов для Android",keywords:"androidinsider, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on androidinsider.",abstract:"По-настоящему «умных» звонилокпод Android катастрофическимало. А ужбесплатныхтемболее, поэтомумногиепользователивынужденыограничиватьсебя в функциях и оставатьсянастандартныхрешениях. Новсеизменилось с появлением PixelPhone — приложения, разработанногороссийскимиразработчиками, котороезатемприобрелакомпанияFelink Technology.",date:"",author:"androidinsider"},{id:"001008",source:"qdtricks",url:"pixelphone-app-review-your-efficient-manager-of-your-dial-and-contacts.html",title:"PixelPhone App Review: Your Efficient Manager of Your Dial and Contacts",keywords:"qdtricks, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on qdtricks.",abstract:"Are you bored with the traditional UI design of your smartphone? Is your smartphone’s UI stopping you from accessing some overwhelming functions on your smartphone? If yes is your answer then PixelPhone is the app you must be looking for. PixelPhone features some of the heart-throbbing functions that you won’t find in the pre-installed contact & phone apps on your smartphone.",date:"",author:"qdtricks"},{id:"001009",source:"techulator",url:"dialer-android-app-pixelphone-review.html",title:"Dialer Android app - PixelPhone Review",keywords:"techulator, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on techulator.",abstract:"Read the review of PixelPhone Android app - an app that seeks to improve your Dialer and Contact management experience on your smartphone. Check out how was our experience while we tested this app on our smartphone.",date:"",author:"techulator"},{id:"001010",source:"trashbox",url:"pixelphone-comfortable-and-functional-dialer-for-android.html",title:"PixelPhone — удобная и функциональная «звонилка» для Android",keywords:"trashbox, PixelPhone, PixelPhone news, Phone Dialer, Phone Contacts，PixelPhone Dialer & Contacts, Pixel Phone, mobile dialer, Caller ID, calls manager",description:"Find all news and events about PixelPhone on trashbox.",abstract:"Изначальнотелефоныпредназначалисьдлязвонков. В смартфонахэтафункцияотошлаеслиненавторой, тонадесятыйплан, покрайнеймередлямногихлюдей. ",date:"",author:"trashbox"},{id:"001011",source:"3dnews",url:"pixelphone-easy-dialer-for-your-smartphone.html",title:"PixelPhone — удобная звонилка для вашего смартфона",keywords:"",description:"Find all news and events about PixelPhone on 3dnews.",abstract:"Большинство предлагаемых на рынке Android-смартфонов поставляются на рынок с модифицированной версией операционной системы. Производители устройств создают собственную оболочку, которая заменяет стандартный интерфейс, разработанный специалистами Google. У кого-то это выходит лучше, у кого-то — хуже, но сделать идеальную оболочку пока не смогла ни одна компания.",date:"",author:"3dnews"},{id:"001012",source:"4pda",url:"pixelphone-handy-replacement-for-the-standard-dialer.html",title:"PixelPhone удобная замена стандартной «звонилке»",keywords:"",description:"Find all news and events about PixelPhone on 4pda.",abstract:"Хорошая программа-«звонилка» должна уметь делать много вещей, чтобы пользователю было действительно удобно пользоваться смартфоном. Именно поэтому среди пользователей так популярны диалеры от сторонних разработчиков, призванные заменить стандартные решения. ",date:"",author:"4pda"},{id:"001013",source:"24gadget",url:"pixelphone-a-convenient-alternative-to-the-built-in-dialer-10-photos-and-video.html",title:"PixelPhone - удобная альтернатива встроенной звонилки (10 фото + видео)",keywords:"",description:"Find all news and events about PixelPhone on 24gadget.",abstract:"К разочарованию многих пользователей стандартная звонилка на Android-смартфонах не позволяет проявить творческий и прагматичный подход как к настройке самого приложения, так и в отношении контактов из телефонной книги. PixelPhone же, напротив, отвечает всем этим требованиям, привнося в с собой много разнообразных полезных функций. Среди них: легкий поиск контакта с поддержкой QWERTY и T9, запись телефонных разговоров, ведение черного списка и так далее. ",date:"",author:"24gadget"}]};$(function(){$.fn.fMenu({menuElement:".news-menu li",elementHoverClass:"hover",changeButtonElement:".change",showNumber:5,positionIndex:99}),$.fn.Top({element:"#top",offset:100}),location.href.indexOf("404.html")>-1?$.fn.Navigation({nav:"#siteNav",navHoverClass:"nav-hover",offset:-1,subMenu:"#siteNavMenu li",subMenuAttr:"data-menu",subMenuHoverClass:"item-hover",mobileMenu:"#mMenu",mobileItem:".df-items"}):$.fn.Navigation({nav:"#siteNav",navHoverClass:"nav-hover",offset:100,subMenu:"#siteNavMenu li",subMenuAttr:"data-menu",subMenuHoverClass:"item-hover",mobileMenu:"#mMenu",mobileItem:".df-items"}),$.fn.QRcode({button:"data-qrcode",layer:"#download_qr_overlay",box:"#download_qr"}),$.fn.playVideo({buttons:"[data-video]",modal:"#videoModal",url:"data-video",title:"data-video-title"}),$.fn.newsList(),$("#carousel-example-generic").swipe({swipe:function(e,n,o,a,t,i){switch(n){case"left":$(this).carousel("next");break;case"right":$(this).carousel("prev")}},preventDefaultEvents:!1}),$("a.download-office,a.download-google,a.download-qrcode,a.app-ul1-b,.download a").bind("click",function(e){var gacode=$(this).attr("data-ga");void 0!==gacode&&eval(gacode)});for(var str="",newsBaseUrl="/news/",items=news.pixelphone,i=items.length-1;i>-1;i--)str+='<section class="news-item"><h4><a href="'+newsBaseUrl+items[i].url+'">'+items[i].title+'</a></h4>     <div class="author">'+items[i].source+'</div>     <div class="abstract">'+items[i].abstract+'</div> <div class="more"><a rel="nofollow" href="'+items[i].url+'">Read More  &gt;</a></div></section>';$("#news-total,#news-pixelphone").html(str)});