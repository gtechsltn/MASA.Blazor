function e(e,n,r,t){return new(r||(r=Promise))((function(i,o){function u(e){try{s(t.next(e))}catch(e){o(e)}}function c(e){try{s(t.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(u,c)}s((t=t.apply(e,n||[])).next())}))}var n=function(e,n,r){var t=null,i=null,o=r&&r.leading,u=r&&r.trailing;null==o&&(o=!0);null==u&&(u=!o);1==o&&(u=!1);var c=function(){t&&(clearTimeout(t),t=null)},s=function(){var r=o&&!t,c=this,s=arguments;if(i=function(){return e.apply(c,s)},t||(t=setTimeout((function(){if(t=null,u)return i()}),n)),r)return r=!1,i()};return s.cancel=c,s.flush=function(){var e=i;c(),e&&e()},s};function r(r,t){if(!t)throw new Error("the handle from .NET cannot be null");if(!r)return void t.dispose();const i=n((()=>{t&&t.invokeMethodAsync("Invoke")}),300,{trailing:!0}),o=new ResizeObserver(((n=[])=>e(this,void 0,void 0,(function*(){n.length&&i()}))));r._resizeObserver=Object(r._resizeObserver),r._resizeObserver={handle:t,observer:o},o.observe(r)}function t(e){e&&e._resizeObserver&&(e._resizeObserver.observer.unobserve(e),e._resizeObserver.handle.dispose(),delete e._resizeObserver)}function i(e,n){if(e){const t=document.querySelector(e);t&&r(t,n)}}function o(e){if(e){const n=document.querySelector(e);n&&t(n)}}export{r as observe,i as observeSelector,t as unobserve,o as unobserveSelector};
//# sourceMappingURL=resize.js.map