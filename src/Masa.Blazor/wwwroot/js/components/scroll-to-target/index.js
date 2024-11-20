import{b as e}from"../../chunks/tslib.es6.js";import{formatToStandardOptions as t}from"../../mixins/intersect/index.js";import"../../chunks/helper.js";class s{constructor(e,s){this.activeStack=[],this.handle=e,this.options=t(s)}observe(t){const s=document.getElementById(t);if(!s)return void console.warn(`[ScrollToTarget] Element with id '${t}' not found`);if(s._intersectForScrollToTarget)return;const i=new IntersectionObserver(((s=[],i)=>e(this,void 0,void 0,(function*(){s.some((e=>e.isIntersecting))?this.activeStack.push(t):this.activeStack.includes(t)&&this.activeStack.splice(this.activeStack.indexOf(t),1),yield this.handle.invokeMethodAsync("UpdateActiveTarget",this.activeStack[this.activeStack.length-1])}))),this.options);s._intersectForScrollToTarget=Object(s._intersectForScrollToTarget),s._intersectForScrollToTarget={handle:this.handle,observer:i},i.observe(s)}unobserve(e){const t=document.getElementById(e);if(!t)return;const s=t._intersectForScrollToTarget;s&&(s.observer.unobserve(t),delete t._intersectForScrollToTarget)}dispose(){this.handle&&(this.handle.dispose(),this.handle=null)}}function i(e,t){return new s(e,t)}export{i as init};
//# sourceMappingURL=index.js.map