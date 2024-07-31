import v from"./V7zAQhJ0.js";import{_ as x}from"./1qbgiEUB.js";import{_ as $}from"./C321hpiN.js";import{_ as h,n as i,o as u,c as m,F as y,u as V,b as a,w as p,a as e,t as d,s as b,d as k}from"./PRsxUUK5.js";const C={data(){return{currentPage:1,totalPages:1,courses:[],rating:5}},methods:{async fetchCourses(){try{const s=await this.$api.get(`courses/?page=${this.currentPage}`);this.courses=s.data.results,this.totalPages=Math.ceil(s.data.count/s.data.results.length)}catch(s){console.log("Error fetching courses:",s)}}},watch:{currentPage(){this.fetchCourses()}},async created(){await this.fetchCourses()}},P={class:"courses"},j={class:"courses__details"},B={class:"courses__title overflow-hidden"},I={class:"courses__price"},N={class:"courses__text"},U={class:"courses__text"},E={class:"courses__text"},F={class:"courses__company-container d-flex justify-space-between"},L=e("img",{src:$},null,-1);function D(s,o,f,w,n,g){const _=i("v-rating"),l=x,r=i("v-pagination");return u(),m("section",P,[(u(!0),m(y,null,V(n.courses,t=>(u(),m("article",{key:t.id,class:"courses__card"},[a(l,{to:`/courseReview/${t.id}`,class:"courses__link d-flex justify-space-between"},{default:p(()=>[e("div",j,[e("h2",B,d(t.title),1),e("p",I,d(t.price),1),e("p",N,d(t.age),1),e("p",U,d(t.company),1),e("p",E,d(t.location),1)]),e("div",F,[L,a(_,{modelValue:n.rating,"onUpdate:modelValue":o[0]||(o[0]=c=>n.rating=c),"active-color":"#999999",readonly:""},null,8,["modelValue"])])]),_:2},1032,["to"])]))),128)),a(r,{class:"courses__pagination",modelValue:n.currentPage,"onUpdate:modelValue":o[1]||(o[1]=t=>n.currentPage=t),length:n.totalPages,onInput:g.fetchCourses},null,8,["modelValue","length","onInput"])])}const M=h(C,[["render",D]]),R={data(){return{dialog:!0}}},S=e("section",{class:"modal-window__content"},[e("p",null," Відгук від наших користувачів дає можливість поділитися своїм досвідом, допомагаючи іншим у виборі відповідних програм навчання. "),e("p",{class:"modal-window__review-guidelines"},[e("h2",{class:"modal-window__guidelines-heading"},"При написанні відгуків дотримуйтесь таких рекомендацій:"),e("ul",{class:"modal-window__guidelines-list"},[e("li",null,"Уникайте образливих чи принизливих коментарів."),e("li",null,"Не використовуйте мову ворожнечі або загроз."),e("li",null,"Відгуки не повинні використовуватися для комерційних цілей, таких як реклама, реферальні програми чи просування. "),e("li",null," Не впливайте штучно на рейтинги відгуків, використовуючи кілька акаунтів, примушуючи інших залишати відгуки або приймаючи оплату чи інші винагороди за написання відгуків. ")])])],-1);function T(s,o,f,w,n,g){const _=v,l=i("v-card-text"),r=i("v-card"),t=i("v-dialog");return u(),b(t,{modelValue:n.dialog,"onUpdate:modelValue":o[1]||(o[1]=c=>n.dialog=c),class:"modal-window"},{default:p(()=>[a(r,{class:"modal-window__card"},{default:p(()=>[a(l,{class:"pa-0 modal-window__header"},{default:p(()=>[a(_,{name:"my-icon:logo",class:"modal-window__logo d-flex"})]),_:1}),S,e("button",{class:"modal-window__accept-button mx-auto",onClick:o[0]||(o[0]=c=>n.dialog=!1)},"Погодитися")]),_:1})]),_:1},8,["modelValue"])}const W=h(R,[["render",T]]),q={data:()=>({rating:5})},z={class:"container-main d-flex mx-auto justify-space-between"},A={class:"container-main__nav-menu align-center"},G={class:"container-main__content-section"},H=e("div",{class:"container-main__header-section"},[e("h2",{class:"container-main__title"}," Ви зараз студент? "),e("p",{class:"container-main__description"}," Поділіться своїм студентським досвідом та напишіть відгук! ")],-1),J={class:"container-main__action-section d-flex justify-space-between align-center"},K=e("button",{class:"container-main__feedback-button cursor-pointer"}," Написати відгук ",-1),O={class:"container-main__text-center"};function Q(s,o,f,w,n,g){const _=v,l=i("v-rating"),r=M,t=W;return u(),m("div",z,[e("nav",A,[a(_,{name:"my-icon:home",class:"container-main__icon"}),k(" Головна ")]),e("section",G,[H,e("div",J,[K,e("div",O,[a(l,{modelValue:s.rating,"onUpdate:modelValue":o[0]||(o[0]=c=>s.rating=c),"active-color":"#999999",readonly:""},null,8,["modelValue"])])]),a(r)]),a(t)])}const te=h(q,[["render",Q]]);export{te as default};
