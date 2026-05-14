import{a as yi,b as Pi,c as Oi,d as it,e as Ri,f as Bi,g as xt,h as Li}from"./chunk-5YH67XEM.js";import{a as Ui,b as Xi}from"./chunk-POPMBABE.js";import{a as Se,b as at,c as qi,d as ke,e as Te,f as Ee,g as Ie,h as de,i as Fe,j as Zi}from"./chunk-W4VREXSF.js";import{A as Gi,B as pe,C as De,D as Ki,E as $i,F as Pe,H as Oe,I as fe,J as ot,K as rt,L as lt,N as Re,O as Yi,P as Be,Q as ue,a as zi,b as nt,c as Ni,e as Vi,g as Hi,h as yt,k as Wi,p as ji,r as Ct,s as Mt,t as Qi,v as ce,x as me,z as L}from"./chunk-EFOHE3XQ.js";import{a as Ai,b as le,c as se}from"./chunk-XGGPC5VX.js";import{B as Ci,F as Mi,G as wi,H as Si,K as ki,M as we,N as Ti,O as Ei,P as ve,Q as Ii,R as gt,X as Fi,Y as vt,Z as Di,d as bi,e as _i,m as gi,n as vi,p as xi,r as ge,s as Me,t as ae,u as oe,v as Ke,z as re}from"./chunk-I5LDR5NP.js";import{$a as ii,Ab as r,Bb as o,Cb as x,D as Kt,Db as oi,E as $t,Eb as ri,Fb as ht,Gb as j,Hb as li,Ib as b,J as Yt,Jb as h,Kb as Z,L as Ut,Lb as R,M as Zt,Mb as ee,N as U,Nb as K,O as ze,Ob as g,P as N,Pb as v,Qa as l,Qb as si,Rb as di,Sb as bt,Tb as te,Ub as P,V as Xt,Va as et,Vb as y,W as xe,Wa as tt,Wb as Ce,Xb as s,Y as B,Ya as be,Yb as c,Zb as k,_ as m,_b as ie,ac as ci,bc as We,cc as je,d as $,da as I,db as O,dc as Qe,ea as F,eb as ye,f as Ze,fa as Jt,fb as W,fc as X,g as z,ga as Ne,gc as mi,hc as p,ib as He,ic as f,j as jt,jb as A,jc as pi,ka as V,kb as ni,kc as fi,l as Qt,la as q,nc as qe,pa as Ve,pc as _t,q as Ae,rb as ai,rc as Ge,sa as ei,sb as H,sc as ui,ta as Xe,tb as C,tc as ne,ua as Je,ub as M,v as qt,vc as D,wa as Q,wb as J,wc as _e,x as Gt,xa as ti,xb as w,xc as hi,y as G,yb as S,z as Y,zb as _}from"./chunk-5US2R7HC.js";var wt=class{_box;_destroyed=new z;_resizeSubject=new z;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new Ze(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe(Y(e=>e.some(t=>t.target===a)),Ut({bufferSize:1,refCount:!0}),N(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},st=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=m(q);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new wt(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Xt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var It=["*"];function On(n,a){n&1&&R(0)}var Rn=["tabListContainer"],Bn=["tabList"],Ln=["tabListInner"],An=["nextPaginator"],zn=["previousPaginator"],Nn=["content"];function Vn(n,a){}var Hn=["tabBodyWrapper"],Wn=["tabHeader"];function jn(n,a){}function Qn(n,a){if(n&1&&A(0,jn,0,0,"ng-template",12),n&2){let e=h().$implicit;_("cdkPortalOutlet",e.templateLabel)}}function qn(n,a){if(n&1&&s(0),n&2){let e=h().$implicit;c(e.textLabel)}}function Gn(n,a){if(n&1){let e=j();r(0,"div",7,2),b("click",function(){let i=I(e),d=i.$implicit,u=i.$index,T=h(),E=te(1);return F(T._handleClick(d,E,u))})("cdkFocusChange",function(i){let d=I(e).$index,u=h();return F(u._tabFocusChanged(i,d))}),x(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),C(6,Qn,1,1,null,12)(7,qn,1,1),o()()()}if(n&2){let e=a.$implicit,t=a.$index,i=te(1),d=h();Ce(e.labelClass),y("mdc-tab--active",d.selectedIndex===t),_("id",d._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",d.fitInkBarToContent),H("tabIndex",d._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",d._tabs.length)("aria-controls",d._getTabContentId(t))("aria-selected",d.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),l(3),_("matRippleTrigger",i)("matRippleDisabled",e.disabled||d.disableRipple),l(3),M(e.templateLabel?6:7)}}function Kn(n,a){n&1&&R(0)}function $n(n,a){if(n&1){let e=j();r(0,"mat-tab-body",13),b("_onCentered",function(){I(e);let i=h();return F(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){I(e);let d=h();return F(d._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){I(e);let d=h();return F(d._bodyCentered(i))}),o()}if(n&2){let e=a.$implicit,t=a.$index,i=h();Ce(e.bodyClass),_("id",i._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),H("tabindex",i.contentTabIndex!=null&&i.selectedIndex===t?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(e,t))("aria-hidden",i.selectedIndex!==t)}}var Yn=new B("MatTabContent"),Un=(()=>{class n{template=m(tt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["","matTabContent",""]],features:[X([{provide:Yn,useExisting:n}])]})}return n})(),Zn=new B("MatTabLabel"),nn=new B("MAT_TAB"),Ft=(()=>{class n extends Hi{_closestTab=m(nn,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=Je(n)))(i||n)}})();static \u0275dir=W({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[X([{provide:Zn,useExisting:n}]),He]})}return n})(),an=new B("MAT_TAB_GROUP"),Dt=(()=>{class n{_viewContainerRef=m(ii);_closestTabGroup=m(an,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new z;position=null;origin=null;isActive=!1;constructor(){m(xi).load(Di)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Vi(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-tab"]],contentQueries:function(t,i,d){if(t&1&&ee(d,Ft,5)(d,Un,7,tt),t&2){let u;g(u=v())&&(i.templateLabel=u.first),g(u=v())&&(i._explicitContent=u.first)}},viewQuery:function(t,i){if(t&1&&K(tt,7),t&2){let d;g(d=v())&&(i._implicitContent=d.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,i){t&2&&H("id",null)},inputs:{disabled:[2,"disabled","disabled",D],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[X([{provide:nn,useExisting:n}]),Xe],ngContentSelectors:It,decls:1,vars:0,template:function(t,i){t&1&&(Z(),ni(0,On,1,0,"ng-template"))},encapsulation:2})}return n})(),St="mdc-tab-indicator--active",Ji="mdc-tab-indicator--no-transition",kt=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(i=>i.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},Xn=(()=>{class n{_elementRef=m(Q);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(St);return}let i=t.getBoundingClientRect(),d=e.width/i.width,u=e.left-i.left;t.classList.add(Ji),this._inkBarContentElement.style.setProperty("transform",`translateX(${u}px) scaleX(${d})`),t.getBoundingClientRect(),t.classList.remove(Ji),t.classList.add(St),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(St)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D]}})}return n})();var on=(()=>{class n extends Xn{elementRef=m(Q);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Je(n)))(i||n)}})();static \u0275dir=W({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,i){t&2&&(H("aria-disabled",!!i.disabled),y("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",D]},features:[He]})}return n})(),en={passive:!0},Jn=650,ea=100,ta=(()=>{class n{_elementRef=m(Q);_changeDetectorRef=m(ne);_viewportRuler=m(nt);_dir=m(ge,{optional:!0});_ngZone=m(q);_platform=m(Ke);_sharedResizeObserver=m(st);_injector=m(Ne);_renderer=m(be);_animationsDisabled=re();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new V;indexFocused=new V;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),en),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),en))}ngAfterContentInit(){let e=this._dir?this._dir.change:Qt("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Kt(32),N(this._destroyed)),i=this._viewportRuler.change(150).pipe(N(this._destroyed)),d=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ei(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),et(d,{injector:this._injector}),G(e,i,t,this._items.changes,this._itemsResized()).pipe(N(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),d()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(u=>{this.indexFocused.emit(u),this._setTabFocus(u)})}_itemsResized(){return typeof ResizeObserver!="function"?jt:this._items.changes.pipe(U(this._items),ze(e=>new Ze(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(d=>t.next(d));return e.forEach(d=>i.observe(d.elementRef.nativeElement)),()=>{i.disconnect()}}))),Zt(1),Y(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!we(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:d,offsetWidth:u}=t.elementRef.nativeElement,T,E;this._getLayoutDirection()=="ltr"?(T=d,E=T+u):(E=this._tabListInner.nativeElement.offsetWidth-d,T=E-u);let Le=this.scrollDistance,Ue=this.scrollDistance+i;T<Le?this.scrollDistance-=Le-T:E>Ue&&(this.scrollDistance+=Math.min(E-Ue,T-Le))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,i=e-t>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Gt(Jn,ea).pipe(N(G(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:d}=this._scrollHeader(e);(d===0||d>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",D],selectedIndex:[2,"selectedIndex","selectedIndex",_e]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),ia=(()=>{class n extends ta{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new kt(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Je(n)))(i||n)}})();static \u0275cmp=O({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,i,d){if(t&1&&ee(d,on,4),t&2){let u;g(u=v())&&(i._items=u)}},viewQuery:function(t,i){if(t&1&&K(Rn,7)(Bn,7)(Ln,7)(An,5)(zn,5),t&2){let d;g(d=v())&&(i._tabListContainer=d.first),g(d=v())&&(i._tabList=d.first),g(d=v())&&(i._tabListInner=d.first),g(d=v())&&(i._nextPaginator=d.first),g(d=v())&&(i._previousPaginator=d.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,i){t&2&&y("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",D]},features:[He],ngContentSelectors:It,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,i){t&1&&(Z(),r(0,"div",5,0),b("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(u){return i._handlePaginatorPress("before",u)})("touchend",function(){return i._stopInterval()}),x(2,"div",6),o(),r(3,"div",7,1),b("keydown",function(u){return i._handleKeydown(u)}),r(5,"div",8,2),b("cdkObserveContent",function(){return i._onContentChanges()}),r(7,"div",9,3),R(9),o()()(),r(10,"div",10,4),b("mousedown",function(u){return i._handlePaginatorPress("after",u)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),x(12,"div",6),o()),t&2&&(y("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),_("matRippleDisabled",i._disableScrollBefore||i.disableRipple),l(3),y("_mat-animation-noopable",i._animationsDisabled),l(2),H("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),l(5),y("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),_("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[vt,wi],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return n})(),na=new B("MAT_TABS_CONFIG"),tn=(()=>{class n extends yt{_host=m(Tt);_ngZone=m(q);_centeringSub=$.EMPTY;_leavingSub=$.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(U(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["","matTabBodyHost",""]],features:[He]})}return n})(),Tt=(()=>{class n{_elementRef=m(Q);_dir=m(ge,{optional:!0});_ngZone=m(q);_injector=m(Ne);_renderer=m(be);_diAnimationsDisabled=re();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=$.EMPTY;_position;_previousPosition;_onCentering=new V;_beforeCentering=new V;_afterLeavingCenter=new V;_onCentered=new V(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=m(ne);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),et(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),et(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,i){if(t&1&&K(tn,5)(Nn,5),t&2){let d;g(d=v())&&(i._portalHost=d.first),g(d=v())&&(i._contentElement=d.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,i){t&2&&H("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,i){t&1&&(r(0,"div",1,0),A(2,Vn,0,0,"ng-template",2),o()),t&2&&y("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[tn,zi],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return n})(),rn=(()=>{class n{_elementRef=m(Q);_changeDetectorRef=m(ne);_ngZone=m(q);_tabsSubscription=$.EMPTY;_tabLabelSubscription=$.EMPTY;_tabBodySubscription=$.EMPTY;_diAnimationsDisabled=re();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ti;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new V;focusChange=new V;animationDone=new V;selectedTabChange=new V(!0);_groupId;_isServer=!m(Ke).isBrowser;constructor(){let e=m(na,{optional:!0});this._groupId=m(ve).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,d)=>i.isActive=d===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,i)=>{t.position=i-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),i;for(let d=0;d<t.length;d++)if(t[d].isActive){this._indexToSelect=this._selectedIndex=d,this._lastFocusedTabIndex=null,i=t[d];break}!i&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(U(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Et;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=G(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,i){t.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,i)=>t._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,i,d){if(t&1&&ee(d,Dt,5),t&2){let u;g(u=v())&&(i._allTabs=u)}},viewQuery:function(t,i){if(t&1&&K(Hn,5)(Wn,5)(Tt,5),t&2){let d;g(d=v())&&(i._tabBodyWrapper=d.first),g(d=v())&&(i._tabHeader=d.first),g(d=v())&&(i._tabBodies=d)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,i){t&2&&(H("mat-align-tabs",i.alignTabs),Ce("mat-"+(i.color||"primary")),P("--mat-tab-animation-duration",i.animationDuration),y("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",D],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",D],selectedIndex:[2,"selectedIndex","selectedIndex",_e],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",_e],disablePagination:[2,"disablePagination","disablePagination",D],disableRipple:[2,"disableRipple","disableRipple",D],preserveContent:[2,"preserveContent","preserveContent",D],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[X([{provide:an,useExisting:n}])],ngContentSelectors:It,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,i){t&1&&(Z(),r(0,"mat-tab-header",3,0),b("indexFocused",function(u){return i._focusChanged(u)})("selectFocusedIndex",function(u){return i.selectedIndex=u}),w(2,Gn,8,17,"div",4,J),o(),C(4,Kn,1,0),r(5,"div",5,1),w(7,$n,1,10,"mat-tab-body",6,J),o()),t&2&&(_("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),ai("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),l(2),S(i._tabs),l(2),M(i._isServer?4:-1),l(),y("_mat-animation-noopable",i._animationsDisabled()),l(2),S(i._tabs))},dependencies:[ia,on,Mi,vt,yt,Tt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return n})(),Et=class{index;tab};var ln=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ye({type:n});static \u0275inj=xe({imports:[Me]})}return n})();var $e=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new z;constructor(a=!1,e,t=!0,i){this._multiple=a,this._emitChanges=t,this.compareWith=i,e&&e.length&&(a?e.forEach(d=>this._markSelected(d)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(d=>this._getConcreteValue(d)));a.forEach(d=>this._markSelected(d)),e.filter(d=>!t.has(this._getConcreteValue(d,t))).forEach(d=>this._unmarkSelected(d));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var oa=["notch"],ra=["matFormFieldNotchedOutline",""],la=["*"],sn=["iconPrefixContainer"],dn=["textPrefixContainer"],cn=["iconSuffixContainer"],mn=["textSuffixContainer"],sa=["textField"],da=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ca=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ma(n,a){n&1&&x(0,"span",21)}function pa(n,a){if(n&1&&(r(0,"label",20),R(1,1),C(2,ma,1,0,"span",21),o()),n&2){let e=h(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),H("for",e._control.disableAutomaticLabeling?null:e._control.id),l(2),M(!e.hideRequiredMarker&&e._control.required?2:-1)}}function fa(n,a){if(n&1&&C(0,pa,3,5,"label",20),n&2){let e=h();M(e._hasFloatingLabel()?0:-1)}}function ua(n,a){n&1&&x(0,"div",7)}function ha(n,a){}function ba(n,a){if(n&1&&A(0,ha,0,0,"ng-template",13),n&2){h(2);let e=te(1);_("ngTemplateOutlet",e)}}function _a(n,a){if(n&1&&(r(0,"div",9),C(1,ba,1,1,null,13),o()),n&2){let e=h();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),l(),M(e._forceDisplayInfixLabel()?-1:1)}}function ga(n,a){n&1&&(r(0,"div",10,2),R(2,2),o())}function va(n,a){n&1&&(r(0,"div",11,3),R(2,3),o())}function xa(n,a){}function ya(n,a){if(n&1&&A(0,xa,0,0,"ng-template",13),n&2){h();let e=te(1);_("ngTemplateOutlet",e)}}function Ca(n,a){n&1&&(r(0,"div",14,4),R(2,4),o())}function Ma(n,a){n&1&&(r(0,"div",15,5),R(2,5),o())}function wa(n,a){n&1&&x(0,"div",16)}function Sa(n,a){n&1&&(r(0,"div",18),R(1,6),o())}function ka(n,a){if(n&1&&(r(0,"mat-hint",22),s(1),o()),n&2){let e=h(2);_("id",e._hintLabelId),l(),c(e.hintLabel)}}function Ta(n,a){if(n&1&&(r(0,"div",19),C(1,ka,2,2,"mat-hint",22),R(2,7),x(3,"div",23),R(4,8),o()),n&2){let e=h();l(),M(e.hintLabel?1:-1)}}var Pt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["mat-label"]]})}return n})(),Ea=new B("MatError");var Ot=(()=>{class n{align="start";id=m(ve).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(li("id",i.id),H("align",null),y("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Ia=new B("MatPrefix");var Fa=new B("MatSuffix");var gn=new B("FloatingLabelParent"),pn=(()=>{class n{_elementRef=m(Q);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(st);_ngZone=m(q);_parent=m(gn);_resizeSubscription=new $;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Da(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&y("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Da(n){let a=n;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var fn="mdc-line-ripple--active",mt="mdc-line-ripple--deactivating",un=(()=>{class n{_elementRef=m(Q);_cleanupTransitionEnd;constructor(){let e=m(q),t=m(be);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(mt),e.add(fn)}deactivate(){this._elementRef.nativeElement.classList.add(mt)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(mt);e.propertyName==="opacity"&&i&&t.remove(fn,mt)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),hn=(()=>{class n{_elementRef=m(Q);_ngZone=m(q);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&K(oa,5),t&2){let d;g(d=v())&&(i._notch=d.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&y("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ra,ngContentSelectors:la,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(Z(),ht(0,"div",1),oi(1,"div",2,0),R(3),ri(),ht(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Rt=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n})}return n})();var Bt=new B("MatFormField"),Pa=new B("MAT_FORM_FIELD_DEFAULT_OPTIONS"),bn="fill",Oa="auto",_n="fixed",Ra="translateY(-50%)",vn=(()=>{class n{_elementRef=m(Q);_changeDetectorRef=m(ne);_platform=m(Ke);_idGenerator=m(ve);_ngZone=m(q);_defaults=m(Pa,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ge("iconPrefixContainer");_textPrefixContainerSignal=Ge("textPrefixContainer");_iconSuffixContainerSignal=Ge("iconSuffixContainer");_textSuffixContainerSignal=Ge("textSuffixContainer");_prefixSuffixContainers=qe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ui(Pt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Fi(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Oa}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||bn;this._appearanceSignal.set(t)}_appearanceSignal=Ve(bn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||_n}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||_n}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new z;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=re();constructor(){let e=this._defaults,t=m(ge);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ei(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=qe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(U([void 0,void 0]),Ae(()=>[t.errorState,t.userAriaDescribedBy]),Yt(),Y(([[d,u],[T,E]])=>d!==T||u!==E)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(N(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),G(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){hi({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=qe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let d=this._hintChildren?this._hintChildren.find(T=>T.align==="start"):null,u=this._hintChildren?this._hintChildren.find(T=>T.align==="end"):null;d?e.push(d.id):this._hintLabel&&e.push(this._hintLabelId),u&&e.push(u.id)}else this._errorChildren&&e.push(...this._errorChildren.map(d=>d.id));let t=this._control.describedByIds,i;if(t){let d=this._describedByIds||e;i=e.concat(t.filter(u=>u&&!d.includes(u)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,d=this._textSuffixContainer?.nativeElement,u=e?.getBoundingClientRect().width??0,T=t?.getBoundingClientRect().width??0,E=i?.getBoundingClientRect().width??0,Le=d?.getBoundingClientRect().width??0,Ue=this._currentDirection==="rtl"?"-1":"1",In=`${u+T}px`,Fn=`calc(${Ue} * (${In} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Dn=`var(--mat-mdc-form-field-label-transform, ${Ra} translateX(${Fn}))`,Pn=u+T+E+Le;return[Dn,Pn]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,i,d){if(t&1&&(si(d,i._labelChild,Pt,5),ee(d,Rt,5)(d,Ia,5)(d,Fa,5)(d,Ea,5)(d,Ot,5)),t&2){bt();let u;g(u=v())&&(i._formFieldControl=u.first),g(u=v())&&(i._prefixChildren=u),g(u=v())&&(i._suffixChildren=u),g(u=v())&&(i._errorChildren=u),g(u=v())&&(i._hintChildren=u)}},viewQuery:function(t,i){if(t&1&&(di(i._iconPrefixContainerSignal,sn,5)(i._textPrefixContainerSignal,dn,5)(i._iconSuffixContainerSignal,cn,5)(i._textSuffixContainerSignal,mn,5),K(sa,5)(sn,5)(dn,5)(cn,5)(mn,5)(pn,5)(hn,5)(un,5)),t&2){bt(4);let d;g(d=v())&&(i._textField=d.first),g(d=v())&&(i._iconPrefixContainer=d.first),g(d=v())&&(i._textPrefixContainer=d.first),g(d=v())&&(i._iconSuffixContainer=d.first),g(d=v())&&(i._textSuffixContainer=d.first),g(d=v())&&(i._floatingLabel=d.first),g(d=v())&&(i._notchedOutline=d.first),g(d=v())&&(i._lineRipple=d.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&y("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[X([{provide:Bt,useExisting:n},{provide:gn,useExisting:n}])],ngContentSelectors:ca,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(Z(da),A(0,fa,1,1,"ng-template",null,0,fi),r(2,"div",6,1),b("click",function(u){return i._control.onContainerClick(u)}),C(4,ua,1,0,"div",7),r(5,"div",8),C(6,_a,2,2,"div",9),C(7,ga,3,0,"div",10),C(8,va,3,0,"div",11),r(9,"div",12),C(10,ya,1,1,null,13),R(11),o(),C(12,Ca,3,0,"div",14),C(13,Ma,3,0,"div",15),o(),C(14,wa,1,0,"div",16),o(),r(15,"div",17),C(16,Sa,2,0,"div",18)(17,Ta,5,1,"div",19),o()),t&2){let d;l(2),y("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),l(2),M(!i._hasOutline()&&!i._control.disabled?4:-1),l(2),M(i._hasOutline()?6:-1),l(),M(i._hasIconPrefix?7:-1),l(),M(i._hasTextPrefix?8:-1),l(2),M(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),l(2),M(i._hasTextSuffix?12:-1),l(),M(i._hasIconSuffix?13:-1),l(),M(i._hasOutline()?-1:14),l(),y("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let u=i._getSubscriptMessageType();l(),M((d=u)==="error"?16:d==="hint"?17:-1)}},dependencies:[pn,hn,_i,un,Ot],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ye({type:n});static \u0275inj=xe({imports:[Si,vn,Me]})}return n})();var Na=["trigger"],Va=["panel"],Ha=[[["mat-select-trigger"]],"*"],Wa=["mat-select-trigger","*"];function ja(n,a){if(n&1&&(r(0,"span",4),s(1),o()),n&2){let e=h();l(),c(e.placeholder)}}function Qa(n,a){n&1&&R(0)}function qa(n,a){if(n&1&&(r(0,"span",11),s(1),o()),n&2){let e=h(2);l(),c(e.triggerValue)}}function Ga(n,a){if(n&1&&(r(0,"span",5),C(1,Qa,1,0)(2,qa,2,1,"span",11),o()),n&2){let e=h();l(),M(e.customTrigger?1:2)}}function Ka(n,a){if(n&1){let e=j();r(0,"div",12,1),b("keydown",function(i){I(e);let d=h();return F(d._handleKeydown(i))}),R(2,1),o()}if(n&2){let e=h();Ce(e.panelClass),y("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),H("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var $a=new B("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(Ne);return()=>Wi(n)}}),Ya=new B("MAT_SELECT_CONFIG"),Ua=new B("MatSelectTrigger"),Lt=class{source;value;constructor(a,e){this.source=a,this.value=e}},Mn=(()=>{class n{_viewportRuler=m(nt);_changeDetectorRef=m(ne);_elementRef=m(Q);_dir=m(ge,{optional:!0});_idGenerator=m(ve);_renderer=m(be);_parentFormField=m(Bt,{optional:!0});ngControl=m(Gi,{self:!0,optional:!0});_liveAnnouncer=m(ki);_defaultOptions=m(Ya,{optional:!0});_animationsDisabled=re();_popoverLocation;_initialized=new z;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,d=Ri(e,this.options,this.optionGroups),u=t._getHostElement();e===0&&d===1?i.scrollTop=0:i.scrollTop=Bi(u.offsetTop,u.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Lt(this,e)}_scrollStrategyFactory=m($a);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new z;_errorStateTracker;stateChanges=new z;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ve(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(L.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=qt(()=>{let e=this.options;return e?e.changes.pipe(U(e),ze(()=>G(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ze(()=>this.optionSelectionChanges))});openedChange=new V;_openedStream=this.openedChange.pipe(Y(e=>e),Ae(()=>{}));_closedStream=this.openedChange.pipe(Y(e=>!e),Ae(()=>{}));selectionChange=new V;valueChange=new V;constructor(){let e=m(yi),t=m(Ki,{optional:!0}),i=m(fe,{optional:!0}),d=m(new _t("tabindex"),{optional:!0}),u=m(ji,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Li(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=d==null?0:parseInt(d)||0,this._popoverLocation=u?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new $e(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(N(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(N(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(U(null),N(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe($t(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&gt(this._trackedModal,"aria-owns",t),Ii(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;gt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",d=>{d.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,d=t===13||t===32,u=this._keyManager;if(!u.isTyping()&&d&&!we(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let T=this.selected;u.onKeydown(e);let E=this.selected;E&&T!==E&&this._liveAnnouncer.announce(E.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,d=i===40||i===38,u=t.isTyping();if(d&&e.altKey)e.preventDefault(),this.close();else if(!u&&(i===13||i===32)&&t.activeItem&&!we(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!u&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let T=this.options.some(E=>!E.disabled&&!E.selected);this.options.forEach(E=>{E.disabled||(T?E.select():E.deselect())})}else{let T=t.activeItemIndex;t.onKeydown(e),this._multiple&&d&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==T&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!we(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ct?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ti(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=G(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(N(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),G(...this.options.map(t=>t._stateChanges)).pipe(N(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ci(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,d){if(t&1&&ee(d,Ua,5)(d,it,5)(d,Oi,5),t&2){let u;g(u=v())&&(i.customTrigger=u.first),g(u=v())&&(i.options=u),g(u=v())&&(i.optionGroups=u)}},viewQuery:function(t,i){if(t&1&&K(Na,5)(Va,5)(Mt,5),t&2){let d;g(d=v())&&(i.trigger=d.first),g(d=v())&&(i.panel=d.first),g(d=v())&&(i._overlayDir=d.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&b("keydown",function(u){return i._handleKeydown(u)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(H("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),y("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",D],disableRipple:[2,"disableRipple","disableRipple",D],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:_e(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",D],placeholder:"placeholder",required:[2,"required","required",D],multiple:[2,"multiple","multiple",D],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",D],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",_e],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",D]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[X([{provide:Rt,useExisting:n},{provide:Pi,useExisting:n}]),Xe],ngContentSelectors:Wa,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(Z(Ha),r(0,"div",2,0),b("click",function(){return i.open()}),r(3,"div",3),C(4,ja,2,1,"span",4)(5,Ga,3,1,"span",5),o(),r(6,"div",6)(7,"div",7),Jt(),r(8,"svg",8),x(9,"path",9),o()()()(),A(10,Ka,3,16,"ng-template",10),b("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(u){return i._handleOverlayKeydown(u)})),t&2){let d=te(1);l(3),H("id",i._valueId),l(),M(i.empty?4:5),l(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||d)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Ct,Mt],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var wn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ye({type:n});static \u0275inj=xe({imports:[Qi,xt,Me,Ni,xn,xt]})}return n})();var Sn=(n,a)=>a.id;function Xa(n,a){if(n&1&&(r(0,"option",5),s(1),o()),n&2){let e=a.$implicit;_("value",e.id),l(),ie("",e.name," (",e.owner,")")}}function Ja(n,a){if(n&1&&(r(0,"option",5),s(1),o()),n&2){let e=a.$implicit;_("value",e.id),l(),c(e.nombre)}}var pt=class n{fb=m(Re);ref=m(Se);svc=m(ce);snack=m(ue);store=m(Fe);data=m(at,{optional:!0});today=new Date().toISOString().split("T")[0];form=this.fb.group({mascotaId:[this.data?.patientId??"",L.required],tipoVacunaId:["",L.required],fechaAplicacion:[this.today,L.required],proximaDosis:["",L.required],lote:[""],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={mascotaId:a.mascotaId,tipoVacunaId:a.tipoVacunaId,fechaAplicacion:a.fechaAplicacion,proximaDosis:a.proximaDosis,lote:a.lote,observaciones:a.observaciones,veterinarioId:1};this.svc.createVacuna(e).subscribe({next:()=>{this.snack.open("Vacuna registrada","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["app-registrar-vacuna-dialog"]],decls:44,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],["formControlName","tipoVacunaId"],[1,"dlg-row"],["type","date","formControlName","fechaAplicacion"],["type","date","formControlName","proximaDosis"],["type","text","formControlName","lote","placeholder","Ej: LOT-2025-001"],["formControlName","observaciones","placeholder","Reacciones adversas, notas..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(r(0,"h2",0),s(1,"Registrar Vacuna"),o(),r(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),s(6,"Paciente *"),o(),r(7,"select",3)(8,"option",4),s(9,"Seleccionar paciente..."),o(),w(10,Xa,2,3,"option",5,Sn),o()(),r(12,"div",2)(13,"label"),s(14,"Tipo de Vacuna *"),o(),r(15,"select",6)(16,"option",4),s(17,"Seleccionar vacuna..."),o(),w(18,Ja,2,2,"option",5,Sn),o()(),r(20,"div",7)(21,"div",2)(22,"label"),s(23,"Fecha de Aplicaci\xF3n *"),o(),x(24,"input",8),o(),r(25,"div",2)(26,"label"),s(27,"Pr\xF3xima Dosis *"),o(),x(28,"input",9),o()(),r(29,"div",2)(30,"label"),s(31,"N\xFAmero de Lote"),o(),x(32,"input",10),o(),r(33,"div",2)(34,"label"),s(35,"Observaciones"),o(),x(36,"textarea",11),o()()(),r(37,"mat-dialog-actions",12)(38,"button",13),s(39,"Cancelar"),o(),r(40,"button",14),b("click",function(){return t.submit()}),r(41,"mat-icon"),s(42,"vaccines"),o(),s(43," Registrar Vacuna "),o()()),e&2&&(l(3),_("formGroup",t.form),l(7),S(t.store.patients()),l(8),S(t.store.rawTiposVacuna()),l(22),_("disabled",t.form.invalid||t.submitting))},dependencies:[Be,Pe,rt,lt,me,ot,pe,De,fe,Oe,de,ke,Te,Ie,Ee,se,le,oe,ae],encapsulation:2})};var eo=(n,a)=>a.id;function to(n,a){if(n&1&&(r(0,"option",5),s(1),o()),n&2){let e=a.$implicit;_("value",e.id),l(),ie("",e.name," (",e.owner,")")}}function io(n,a){if(n&1&&(r(0,"option",5),s(1),o()),n&2){let e=a.$implicit;_("value",e),l(),c(e)}}var ft=class n{fb=m(Re);ref=m(Se);svc=m(ce);snack=m(ue);store=m(Fe);data=m(at,{optional:!0});today=new Date().toISOString().split("T")[0];estados=["Estable","Cr\xEDtico","Recuperaci\xF3n"];form=this.fb.group({mascotaId:[this.data?.patientId??"",L.required],fechaIngreso:[this.today,L.required],diagnostico:["",L.required],tratamiento:["",L.required],estado:["Estable",L.required],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={mascotaId:a.mascotaId,veterinarioId:1,fechaIngreso:a.fechaIngreso,diagnostico:a.diagnostico,tratamientos:[a.tratamiento],estado:a.estado,observaciones:a.observaciones};this.svc.createHospitalizacion(e).subscribe({next:()=>{this.snack.open("Ingreso registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["app-registrar-ingreso-dialog"]],decls:42,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[1,"dlg-row"],["type","date","formControlName","fechaIngreso"],["formControlName","estado"],["formControlName","diagnostico","placeholder","Diagn\xF3stico de ingreso..."],["formControlName","tratamiento","placeholder","Medicamentos, procedimientos..."],["formControlName","observaciones","placeholder","Notas adicionales..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(r(0,"h2",0),s(1,"Registrar Ingreso Hospitalario"),o(),r(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),s(6,"Paciente *"),o(),r(7,"select",3)(8,"option",4),s(9,"Seleccionar paciente..."),o(),w(10,to,2,3,"option",5,eo),o()(),r(12,"div",6)(13,"div",2)(14,"label"),s(15,"Fecha de Ingreso *"),o(),x(16,"input",7),o(),r(17,"div",2)(18,"label"),s(19,"Estado *"),o(),r(20,"select",8),w(21,io,2,2,"option",5,J),o()()(),r(23,"div",2)(24,"label"),s(25,"Diagn\xF3stico *"),o(),x(26,"textarea",9),o(),r(27,"div",2)(28,"label"),s(29,"Tratamiento Inicial *"),o(),x(30,"textarea",10),o(),r(31,"div",2)(32,"label"),s(33,"Observaciones"),o(),x(34,"textarea",11),o()()(),r(35,"mat-dialog-actions",12)(36,"button",13),s(37,"Cancelar"),o(),r(38,"button",14),b("click",function(){return t.submit()}),r(39,"mat-icon"),s(40,"local_hospital"),o(),s(41," Registrar Ingreso "),o()()),e&2&&(l(3),_("formGroup",t.form),l(7),S(t.store.patients()),l(11),S(t.estados),l(17),_("disabled",t.form.invalid||t.submitting))},dependencies:[Be,Pe,rt,lt,me,ot,pe,De,fe,Oe,de,ke,Te,Ie,Ee,se,le,oe,ae],encapsulation:2})};var ut=class n{fb=m(Re);ref=m(Se);svc=m(ce);snack=m(ue);form=this.fb.group({nombre:["",L.required],telefono:["",L.required],correo:["",[L.email]],direccion:[""],dni:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={nombre:a.nombre,telefono:a.telefono,correo:a.correo,direccion:a.direccion,dni:a.dni};this.svc.createCliente(e).subscribe({next:()=>{this.snack.open("Cliente registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["app-registrar-cliente-dialog"]],decls:33,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-row"],[1,"dlg-field","dlg-field-full"],["type","text","formControlName","nombre","placeholder","Nombre del propietario"],[1,"dlg-field"],["type","tel","formControlName","telefono","placeholder","+51 999 000 000"],["type","text","formControlName","dni","placeholder","12345678"],["type","email","formControlName","correo","placeholder","correo@ejemplo.com"],["type","text","formControlName","direccion","placeholder","Av. Principal 123..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(r(0,"h2",0),s(1,"Registrar Cliente"),o(),r(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"div",3)(6,"label"),s(7,"Nombre completo *"),o(),x(8,"input",4),o()(),r(9,"div",2)(10,"div",5)(11,"label"),s(12,"Tel\xE9fono *"),o(),x(13,"input",6),o(),r(14,"div",5)(15,"label"),s(16,"DNI"),o(),x(17,"input",7),o()(),r(18,"div",5)(19,"label"),s(20,"Correo electr\xF3nico"),o(),x(21,"input",8),o(),r(22,"div",5)(23,"label"),s(24,"Direcci\xF3n"),o(),x(25,"input",9),o()()(),r(26,"mat-dialog-actions",10)(27,"button",11),s(28,"Cancelar"),o(),r(29,"button",12),b("click",function(){return t.submit()}),r(30,"mat-icon"),s(31,"person_add"),o(),s(32," Registrar Cliente "),o()()),e&2&&(l(3),_("formGroup",t.form),l(26),_("disabled",t.form.invalid||t.submitting))},dependencies:[Be,Pe,me,pe,De,fe,Oe,de,ke,Te,Ie,Ee,se,le,oe,ae],encapsulation:2})};var no=(n,a)=>({current:n,total:a}),Ye=(n,a)=>a.id,Tn=(n,a)=>a.value,Wt=(n,a)=>a.labelKey,ao=(n,a)=>a.date,oo=(n,a)=>a.label;function ro(n,a){n&1&&(r(0,"mat-icon",39),s(1,"pets"),o(),s(2),p(3,"translate")),n&2&&(l(2),k(" ",f(3,1,"clinical.tabs.patients")))}function lo(n,a){n&1&&(r(0,"div",20),s(1),p(2,"translate"),o()),n&2&&(l(),c(f(2,1,"clinical.patients.loading")))}function so(n,a){if(n&1){let e=j();r(0,"div",40)(1,"div",42)(2,"div",43)(3,"mat-icon"),s(4,"pets"),o()(),r(5,"div",44)(6,"div",45),s(7),o(),r(8,"div",46),s(9),o()(),r(10,"span",47),s(11),o()(),r(12,"div",48)(13,"div",49)(14,"mat-icon"),s(15,"pets"),o(),r(16,"span"),s(17),p(18,"translate"),o(),s(19),o(),r(20,"div",49)(21,"mat-icon"),s(22,"cake"),o(),r(23,"span"),s(24),p(25,"translate"),o(),s(26),o(),r(27,"div",49)(28,"mat-icon"),s(29,"monitor_weight"),o(),r(30,"span"),s(31),p(32,"translate"),o(),s(33),o(),r(34,"div",49)(35,"mat-icon"),s(36,"person"),o(),r(37,"span"),s(38),p(39,"translate"),o(),s(40),o()(),r(41,"div",50)(42,"button",51),b("click",function(){let i=I(e).$implicit,d=h(2);return F(d.verFicha(i.id))}),r(43,"mat-icon"),s(44,"visibility"),o(),s(45),p(46,"translate"),o(),r(47,"button",52),b("click",function(){let i=I(e).$implicit,d=h(2);return F(d.openRegistrarPaciente(i))}),r(48,"mat-icon"),s(49,"edit"),o()(),r(50,"button",53),b("click",function(){let i=I(e).$implicit,d=h(2);return F(d.deletePatient(i))}),r(51,"mat-icon"),s(52,"delete"),o()()()()}if(n&2){let e=a.$implicit;l(2),P("background",e.avatarColor),l(5),c(e.name),l(2),k("ID: ",e.id),l(2),c(e.status),l(6),c(f(18,15,"clinical.patients.species")),l(2),ie(" ",e.species," - ",e.breed),l(5),c(f(25,17,"clinical.patients.age")),l(2),k(" ",e.age),l(5),c(f(32,19,"clinical.patients.weight")),l(2),k(" ",e.weight),l(5),c(f(39,21,"clinical.patients.owner")),l(2),k(" ",e.owner),l(5),k(" ",f(46,23,"clinical.patients.viewFile")," ")}}function co(n,a){n&1&&(r(0,"p",41),s(1),p(2,"translate"),o()),n&2&&(l(),c(f(2,1,"clinical.patients.empty")))}function mo(n,a){if(n&1&&(r(0,"div",21),w(1,so,53,25,"div",40,Ye,!1,co,3,3,"p",41),o()),n&2){let e=h();l(),S(e.filteredPatients)}}function po(n,a){n&1&&(r(0,"mat-icon",39),s(1,"people"),o(),s(2),p(3,"translate")),n&2&&(l(2),k(" ",f(3,1,"clinical.tabs.clients")))}function fo(n,a){n&1&&(r(0,"div",20),s(1),p(2,"translate"),o()),n&2&&(l(),c(f(2,1,"clinical.patients.loading")))}function uo(n,a){if(n&1&&(r(0,"tr")(1,"td")(2,"div",54)(3,"div",55)(4,"mat-icon"),s(5,"person"),o()(),r(6,"div",56),s(7),o()()(),r(8,"td"),s(9),o(),r(10,"td"),s(11),o(),r(12,"td"),s(13),o(),r(14,"td"),s(15),o()()),n&2){let e=a.$implicit;l(7),c(e.nombre),l(2),c(e.dni),l(2),c(e.telefono),l(2),c(e.email),l(2),c(e.direccion)}}function ho(n,a){n&1&&(r(0,"tr")(1,"td",57),s(2),p(3,"translate"),o()()),n&2&&(l(2),c(f(3,1,"clinical.clients.empty")))}function bo(n,a){if(n&1&&(r(0,"div",22)(1,"table",26)(2,"thead")(3,"tr")(4,"th"),s(5),p(6,"translate"),o(),r(7,"th"),s(8),p(9,"translate"),o(),r(10,"th"),s(11),p(12,"translate"),o(),r(13,"th"),s(14),p(15,"translate"),o(),r(16,"th"),s(17),p(18,"translate"),o()()(),r(19,"tbody"),w(20,uo,16,5,"tr",null,Ye,!1,ho,4,3,"tr"),o()()()),n&2){let e=h();l(5),c(f(6,6,"clinical.clients.colName")),l(3),c(f(9,8,"clinical.clients.colDni")),l(3),c(f(12,10,"clinical.clients.colPhone")),l(3),c(f(15,12,"clinical.clients.colEmail")),l(3),c(f(18,14,"clinical.clients.colAddress")),l(3),S(e.filteredClients)}}function _o(n,a){n&1&&(r(0,"mat-icon",39),s(1,"medical_services"),o(),s(2),p(3,"translate")),n&2&&(l(2),k(" ",f(3,1,"clinical.tabs.consultations")))}function go(n,a){if(n&1&&(r(0,"tr")(1,"td",58),s(2),o(),r(3,"td")(4,"div",54)(5,"div",59)(6,"mat-icon"),s(7,"pets"),o()(),r(8,"div")(9,"div",56),s(10),o(),r(11,"div",60),s(12),o()()()(),r(13,"td")(14,"div",56),s(15),o(),r(16,"div",60),s(17),o()(),r(18,"td"),s(19),o(),r(20,"td"),s(21),o(),r(22,"td")(23,"div",56),s(24),o(),r(25,"div",60),s(26),o()(),r(27,"td")(28,"span",61),s(29),o()()()),n&2){let e=a.$implicit,t=h();l(2),c(e.id),l(3),P("background",e.patientAvatarColor),l(5),c(e.patientName),l(2),c(e.patientBreed),l(3),c(e.clientName),l(2),c(e.clientPhone),l(2),c(e.type),l(2),c(e.diagnosis),l(3),c(e.date),l(2),c(e.time),l(2),_("ngClass",t.getConsultBadge(e.status)),l(),c(e.status)}}function vo(n,a){n&1&&(r(0,"tr")(1,"td",62),s(2),p(3,"translate"),o()()),n&2&&(l(2),c(f(3,1,"clinical.consultations.empty")))}function xo(n,a){if(n&1){let e=j();r(0,"button",63),b("click",function(){let i=I(e).$implicit,d=h();return F(d.consultPage=i)}),s(1),o()}if(n&2){let e=a.$implicit,t=h();y("active",t.consultPage===e),l(),c(e)}}function yo(n,a){n&1&&(r(0,"mat-icon",39),s(1,"assignment"),o(),s(2),p(3,"translate")),n&2&&(l(2),k(" ",f(3,1,"clinical.tabs.history")))}function Co(n,a){if(n&1){let e=j();r(0,"div",31)(1,"mat-icon"),s(2,"assignment_ind"),o(),r(3,"h3"),s(4),p(5,"translate"),o(),r(6,"p"),s(7),p(8,"translate"),o(),r(9,"button",64),b("click",function(){I(e);let i=h();return F(i.activeTab=0)}),s(10),p(11,"translate"),o()()}n&2&&(l(4),c(f(5,3,"clinical.history.selectPatient")),l(3),c(f(8,5,"clinical.history.selectPatientHint")),l(3),c(f(11,7,"clinical.history.goToPatients")))}function Mo(n,a){if(n&1&&(r(0,"div",71)(1,"div",74),s(2),o(),r(3,"div",75),s(4),p(5,"translate"),o()()),n&2){let e=a.$implicit;l(2),c(e.value),l(2),c(f(5,2,e.labelKey))}}function wo(n,a){n&1&&(r(0,"p",41),s(1),p(2,"translate"),o()),n&2&&(l(),c(f(2,1,"clinical.history.empty")))}function So(n,a){if(n&1&&(r(0,"div",83)(1,"div",84),s(2),o(),r(3,"p",85),s(4),o()()),n&2){let e=a.$implicit;l(2),c(e.label),l(2),c(e.content)}}function ko(n,a){if(n&1&&(r(0,"div",77)(1,"div",78)(2,"mat-icon"),s(3),o(),r(4,"span",79),s(5),o(),r(6,"span",80),s(7),o(),r(8,"span",81),s(9),o()(),r(10,"div",82),w(11,So,5,2,"div",83,oo),o()()),n&2){let e=a.$implicit;P("border-left","4px solid "+e.borderColor),l(),P("background",e.bg),l(),P("color",e.color),l(),c(e.icon),l(),P("color",e.color),l(),c(e.type),l(2),c(e.date),l(2),c(e.doctor),l(2),S(e.sections)}}function To(n,a){if(n&1&&(r(0,"div",73),w(1,ko,13,12,"div",76,ao),o()),n&2){let e=h(2);l(),S(e.historyRecords)}}function Eo(n,a){if(n&1){let e=j();r(0,"div",65)(1,"div",66)(2,"mat-icon"),s(3,"pets"),o()(),r(4,"div",67)(5,"h2"),s(6),o(),r(7,"p"),s(8),p(9,"translate"),o()(),r(10,"div",68)(11,"button",10),b("click",function(){I(e);let i=h();return F(i.openNuevaConsulta(i.store.selectedPatientId()))}),r(12,"mat-icon"),s(13,"add"),o(),s(14),p(15,"translate"),o(),r(16,"button",69)(17,"mat-icon"),s(18,"bookmark_border"),o()()()(),r(19,"div",70),w(20,Mo,6,4,"div",71,Wt),o(),r(22,"div",72),s(23),p(24,"translate"),o(),C(25,wo,3,3,"p",41)(26,To,3,0,"div",73)}if(n&2){let e=h();l(),P("background",e.historyPatient.avatarColor),l(5),c(e.historyPatient.name),l(2),ci("",e.historyPatient.breed," \xB7 ",e.historyPatient.age," \xB7 ",f(9,10,"clinical.history.owner")," ",e.historyPatient.owner),l(6),k(" ",f(15,12,"clinical.history.newConsult")," "),l(6),S(e.historyPatient.stats),l(3),c(f(24,14,"clinical.history.fullHistory")),l(2),M(e.historyRecords.length===0?25:26)}}function Io(n,a){n&1&&(r(0,"mat-icon",39),s(1,"vaccines"),o(),s(2),p(3,"translate")),n&2&&(l(2),k(" ",f(3,1,"clinical.tabs.vaccines")))}function Fo(n,a){if(n&1){let e=j();r(0,"button",86),b("click",function(){let i=I(e).$implicit,d=h();return F(d.vaccineFilter=i.value)}),s(1),p(2,"translate"),o()}if(n&2){let e=a.$implicit,t=h();y("chip-active",t.vaccineFilter===e.value),l(),k(" ",f(2,3,e.labelKey)," ")}}function Do(n,a){if(n&1&&(r(0,"div",87)(1,"mat-icon",88),s(2),o(),r(3,"div",89),s(4),o(),r(5,"div",90),s(6),p(7,"translate"),o(),r(8,"div",91),s(9),p(10,"translate"),o()()),n&2){let e=a.$implicit;P("background",e.bg),l(),P("color",e.color),l(),c(e.icon),l(),P("color",e.color),l(),c(e.value),l(),P("color",e.color),l(),c(f(7,12,e.labelKey)),l(3),c(f(10,14,e.sublabelKey))}}function Po(n,a){n&1&&(s(0),p(1,"translate")),n&2&&k(" ",f(1,1,"clinical.vaccines.actionViewDetails")," ")}function Oo(n,a){n&1&&(s(0),p(1,"translate")),n&2&&k(" ",f(1,1,"clinical.vaccines.actionSchedule")," ")}function Ro(n,a){n&1&&(s(0),p(1,"translate")),n&2&&k(" ",f(1,1,"clinical.vaccines.actionApplyNow")," ")}function Bo(n,a){if(n&1){let e=j();r(0,"tr")(1,"td")(2,"div",54)(3,"div",59)(4,"mat-icon"),s(5,"pets"),o()(),r(6,"div")(7,"div",56),s(8),o(),r(9,"div",60),s(10),o()()()(),r(11,"td")(12,"div",56),s(13),o(),r(14,"div",60),s(15),o()(),r(16,"td"),s(17),o(),r(18,"td"),s(19),o(),r(20,"td")(21,"span",61),s(22),o()(),r(23,"td")(24,"button",92),b("click",function(){let i=I(e).$implicit,d=h();return F(d.openRegistrarVacuna(i.mascotaId))}),C(25,Po,2,3)(26,Oo,2,3)(27,Ro,2,3),o()()()}if(n&2){let e=a.$implicit,t=h();l(3),P("background",e.patientAvatarColor),l(5),c(e.patientName),l(2),c(e.patientBreed),l(3),c(e.vaccineName),l(2),c(e.vaccineDesc),l(2),c(e.lastApplied),l(),y("text-danger",e.nextDoseHighlight),l(),c(e.nextDose),l(2),_("ngClass",t.getVaccineBadge(e.status)),l(),c(e.status),l(3),M(e.status==="Al D\xEDa"?25:e.status==="Pr\xF3xima"?26:27)}}function Lo(n,a){n&1&&(r(0,"tr")(1,"td",93),s(2),p(3,"translate"),o()()),n&2&&(l(2),c(f(3,1,"clinical.vaccines.empty")))}function Ao(n,a){n&1&&(r(0,"mat-icon",39),s(1,"local_hospital"),o(),s(2),p(3,"translate")),n&2&&(l(2),k(" ",f(3,1,"clinical.tabs.hospitalization")))}function zo(n,a){if(n&1&&(r(0,"div",37)(1,"div")(2,"div",94),s(3),p(4,"translate"),o(),r(5,"div",95),s(6),o(),r(7,"div",96),s(8),p(9,"translate"),o()(),r(10,"div",97)(11,"mat-icon"),s(12),o()()()),n&2){let e=a.$implicit;l(3),c(f(4,10,e.labelKey)),l(2),P("color",e.color),l(),c(e.value),l(2),c(f(9,12,e.sublabelKey)),l(2),P("background",e.bg),l(),P("color",e.color),l(),c(e.icon)}}function No(n,a){if(n&1){let e=j();r(0,"button",86),b("click",function(){let i=I(e).$implicit,d=h();return F(d.hospitalizationFilter=i.value)}),s(1),p(2,"translate"),o()}if(n&2){let e=a.$implicit,t=h();y("chip-active",t.hospitalizationFilter===e.value),l(),ie(" ",f(2,4,e.labelKey)," (",t.getHospCount(e.value),") ")}}function Vo(n,a){if(n&1&&(r(0,"li"),s(1),o()),n&2){let e=a.$implicit;l(),k("\u2022 ",e)}}function Ho(n,a){if(n&1){let e=j();r(0,"tr")(1,"td")(2,"div",54)(3,"div",59)(4,"mat-icon"),s(5,"pets"),o()(),r(6,"div")(7,"div",56),s(8),o(),r(9,"div",60),s(10),o()()()(),r(11,"td")(12,"div",56),s(13),o(),r(14,"div",60),s(15),o()(),r(16,"td")(17,"span",61),s(18),o()(),r(19,"td")(20,"div",56),s(21),o(),r(22,"div",60),s(23),o()(),r(24,"td"),s(25),o(),r(26,"td")(27,"ul",98),w(28,Vo,2,1,"li",null,J),o()(),r(30,"td")(31,"div",99)(32,"button",100),b("click",function(){let i=I(e).$implicit,d=h();return F(d.verFicha(i.mascotaId))}),r(33,"mat-icon"),s(34,"visibility"),o()(),r(35,"button",101),b("click",function(){let i=I(e).$implicit,d=h();return F(d.openRegistrarIngreso(i.mascotaId))}),r(36,"mat-icon"),s(37,"edit"),o()()()()()}if(n&2){let e=a.$implicit,t=h();l(3),P("background",e.patientAvatarColor),l(5),c(e.patientName),l(2),ie("",e.patientBreed," \xB7 ",e.patientAge),l(3),c(e.ownerName),l(2),c(e.ownerPhone),l(2),_("ngClass",t.getHospBadge(e.status)),l(),k("\u2022 ",e.status),l(3),c(e.admissionDate),l(2),c(e.daysAgo),l(2),c(e.diagnosis),l(3),S(e.treatments)}}function Wo(n,a){n&1&&(r(0,"tr")(1,"td",62),s(2),p(3,"translate"),o()()),n&2&&(l(2),c(f(3,1,"clinical.hospitalization.empty")))}var Ht=5,En=class n{store=m(Fe);svc=m(ce);dialog=m(qi);snack=m(ue);translate=m(gi);activeTab=0;patientSearch="";clientSearch="";speciesFilter="Todas";vaccineFilter="Todas";hospitalizationFilter="Todos";consultDateFilter="all";vaccineFilters=[{value:"Todas",labelKey:"clinical.vaccines.filterAll"},{value:"Pr\xF3ximas",labelKey:"clinical.vaccines.filterUpcoming"},{value:"Vencidas",labelKey:"clinical.vaccines.filterExpired"}];hospFilters=[{value:"Todos",labelKey:"clinical.hospitalization.filterAll"},{value:"Cr\xEDtico",labelKey:"clinical.hospitalization.filterCritical"},{value:"Estable",labelKey:"clinical.hospitalization.filterStable"},{value:"Recuperaci\xF3n",labelKey:"clinical.hospitalization.filterRecovery"}];consultPage=1;get filteredPatients(){let a=this.patientSearch.toLowerCase();return this.store.patients().filter(e=>(a===""||e.name.toLowerCase().includes(a)||e.owner.toLowerCase().includes(a)||e.id.includes(a))&&(this.speciesFilter==="Todas"||e.species===this.speciesFilter))}get filteredClients(){let a=this.clientSearch.toLowerCase();return this.store.rawClientes().filter(e=>a===""||e.nombre?.toLowerCase().includes(a)||e.dni?.includes(a)||e.email?.toLowerCase().includes(a))}get filteredConsultations(){let a=new Date().toISOString().split("T")[0],e=new Date(Date.now()-7*864e5).toISOString().split("T")[0];return this.store.consultations().filter(t=>this.consultDateFilter==="today"?t.rawDate===a:this.consultDateFilter==="week"?t.rawDate>=e:!0)}get consultTotalPages(){return Math.max(1,Math.ceil(this.filteredConsultations.length/Ht))}get pagedConsultations(){let a=(this.consultPage-1)*Ht;return this.filteredConsultations.slice(a,a+Ht)}get consultPageNumbers(){return Array.from({length:this.consultTotalPages},(a,e)=>e+1)}setConsultFilter(a){this.consultDateFilter=a,this.consultPage=1}get filteredVaccines(){return this.vaccineFilter==="Pr\xF3ximas"?this.store.vaccines().filter(a=>a.status==="Pr\xF3xima"):this.vaccineFilter==="Vencidas"?this.store.vaccines().filter(a=>a.status==="Vencida"):this.store.vaccines()}get vaccineSummary(){let a=this.store.vaccines();return[{labelKey:"clinical.vaccines.summaryExpired",sublabelKey:"clinical.vaccines.summaryExpiredSub",value:a.filter(e=>e.status==="Vencida").length,color:"#EF4444",bg:"#FEF2F2",icon:"error"},{labelKey:"clinical.vaccines.summaryUpcoming",sublabelKey:"clinical.vaccines.summaryUpcomingSub",value:a.filter(e=>e.status==="Pr\xF3xima").length,color:"#F59E0B",bg:"#FFFBEB",icon:"schedule"},{labelKey:"clinical.vaccines.summaryUpToDate",sublabelKey:"clinical.vaccines.summaryUpToDateSub",value:a.filter(e=>e.status==="Al D\xEDa").length,color:"#22C55E",bg:"#F0FDF4",icon:"check_circle"}]}get filteredHospitalizations(){return this.hospitalizationFilter==="Todos"?this.store.hospitalizations():this.store.hospitalizations().filter(a=>a.status===this.hospitalizationFilter)}getHospCount(a){return a==="Todos"?this.store.hospitalizations().length:this.store.hospitalizations().filter(e=>e.status===a).length}get hospitalStats(){let a=this.store.hospitalizations();return[{labelKey:"clinical.hospitalization.statTotal",sublabelKey:"clinical.hospitalization.statTotalSub",value:a.length,icon:"local_hospital",color:"#3B82F6",bg:"#EFF6FF"},{labelKey:"clinical.hospitalization.statCritical",sublabelKey:"clinical.hospitalization.statCriticalSub",value:a.filter(e=>e.status==="Cr\xEDtico").length,icon:"favorite",color:"#EF4444",bg:"#FEF2F2"},{labelKey:"clinical.hospitalization.statRecovery",sublabelKey:"clinical.hospitalization.statRecoverySub",value:a.filter(e=>e.status==="Recuperaci\xF3n").length,icon:"person",color:"#F59E0B",bg:"#FFFBEB"}]}get selectedConsultations(){let a=this.store.selectedPatient();return a?this.store.consultations().filter(e=>e.mascotaId===a.id):[]}get historyPatient(){let a=this.store.selectedPatient();if(!a)return null;let e=this.selectedConsultations;return{name:a.name,breed:a.breed,age:a.age,owner:a.owner,avatarColor:a.avatarColor,stats:[{labelKey:"clinical.history.statTotalConsults",value:String(e.length)},{labelKey:"clinical.history.statVaccinesApplied",value:String(this.store.vaccines().filter(t=>t.mascotaId===a.id).length)},{labelKey:"clinical.history.statHospitalizations",value:String(this.store.hospitalizations().filter(t=>t.mascotaId===a.id).length)},{labelKey:"clinical.history.statLastVisit",value:e.length>0?e[0].date:"\u2014"}]}}get historyRecords(){return this.selectedConsultations.map(a=>({type:a.type,date:a.date,doctor:a.veterinario??"Veterinario",color:"#22C55E",bg:"#F0FDF4",borderColor:"#22C55E",icon:"medical_services",sections:[...a.subjetivo?[{label:"Subjetivo (S)",type:"text",content:a.subjetivo}]:[],...a.objetivo?[{label:"Objetivo (O)",type:"text",content:a.objetivo}]:[],...a.diagnosis?[{label:"Evaluaci\xF3n (A)",type:"text",content:a.diagnosis}]:[],...a.plan?[{label:"Plan (P)",type:"text",content:a.plan}]:[]]}))}getConsultBadge(a){return{Completada:"badge-completada","En Proceso":"badge-en-proceso",Cr\u00EDtico:"badge-critico",Pendiente:"badge-pendiente"}[a]??""}getVaccineBadge(a){return{"Al D\xEDa":"badge-al-dia",Pr\u00F3xima:"badge-proxima",Vencida:"badge-vencida"}[a]??""}getHospBadge(a){return{Cr\u00EDtico:"badge-critico",Estable:"badge-estable",Recuperaci\u00F3n:"badge-recuperacion"}[a]??""}verFicha(a){this.store.selectPatient(a),this.activeTab=3}openNuevaConsulta(a){this.dialog.open(Ui,{width:"640px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarPaciente(a){this.dialog.open(Xi,{width:"580px",data:{patient:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openNuevaCita(a){this.dialog.open(Zi,{width:"520px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarVacuna(a){this.dialog.open(pt,{width:"560px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarIngreso(a){this.dialog.open(ft,{width:"560px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarCliente(){this.dialog.open(ut,{width:"500px"}).afterClosed().subscribe(a=>{a&&this.store.reload()})}deletePatient(a){let e=this.translate.instant("clinical.messages.confirmDelete",{name:a.name});confirm(e)&&this.svc.deleteMascota(a.id).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.messages.patientDeleted"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["app-clinical-management"]],decls:251,vars:166,consts:[[1,"clinical"],[1,"page-header"],[1,"header-search"],[1,"search-icon"],[1,"header-search-input",3,"placeholder"],[1,"notif-icon"],["animationDuration","0ms",1,"clinical-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"tab-content"],[1,"section-header"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"filters-row"],[1,"search-wrap"],[1,"filter-input",3,"ngModelChange","ngModel","placeholder"],[1,"species-wrap"],[1,"species-select",3,"valueChange","value"],["value","Todas"],["value","Perro"],["value","Gato"],["value","Ave"],[1,"loading-msg"],[1,"patients-grid"],[1,"card","table-card"],[1,"table-top"],[1,"table-actions"],["mat-stroked-button","",1,"btn-sm",3,"click"],[1,"data-table"],[1,"table-footer"],[1,"pagination"],["mat-icon-button","",3,"click","disabled"],[1,"pg-btn",3,"active"],[1,"empty-tab"],[1,"chips-row"],[1,"chip",3,"chip-active"],[1,"vsummary-grid"],[1,"vsummary",3,"background"],[1,"hosp-stats-row"],[1,"hosp-stat-card"],[1,"table-title"],[1,"tab-icon"],[1,"patient-card"],[1,"empty-msg"],[1,"pc-top"],[1,"pc-avatar"],[1,"pc-title"],[1,"pc-name"],[1,"pc-id"],[1,"badge","badge-activo"],[1,"pc-details"],[1,"pc-row"],[1,"pc-actions"],["mat-button","",1,"btn-ver-ficha",3,"click"],["mat-icon-button","","title","Editar",3,"click"],["mat-icon-button","","title","Eliminar",3,"click"],[1,"td-patient"],[1,"td-avatar",2,"background","#6366F1"],[1,"td-name"],["colspan","5",1,"empty-msg"],[1,"td-id"],[1,"td-avatar"],[1,"td-sub"],[1,"badge",3,"ngClass"],["colspan","7",1,"empty-msg"],[1,"pg-btn",3,"click"],["mat-stroked-button","",3,"click"],[1,"history-header"],[1,"hist-avatar"],[1,"hist-info"],[1,"hist-actions"],["mat-icon-button",""],[1,"hist-stats"],[1,"hist-stat"],[1,"hist-section-title"],[1,"timeline"],[1,"hs-val"],[1,"hs-lbl"],[1,"tl-card",3,"border-left"],[1,"tl-card"],[1,"tl-header"],[1,"tl-type"],[1,"tl-date"],[1,"tl-doc"],[1,"tl-body"],[1,"tl-section"],[1,"tl-label"],[1,"tl-text"],[1,"chip",3,"click"],[1,"vsummary"],[1,"vs-icon"],[1,"vs-val"],[1,"vs-label"],[1,"vs-sub"],["mat-button","",1,"action-link",3,"click"],["colspan","6",1,"empty-msg"],[1,"hosp-stat-label"],[1,"hosp-stat-val"],[1,"hosp-stat-sub"],[1,"hosp-stat-icon"],[1,"treat-list"],[1,"td-actions"],["mat-icon-button","","title","Ver ficha",3,"click"],["mat-icon-button","","title","Editar ingreso",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),s(4),p(5,"translate"),o(),r(6,"p"),s(7),p(8,"translate"),o()(),r(9,"div",2)(10,"mat-icon",3),s(11,"search"),o(),x(12,"input",4),p(13,"translate"),r(14,"mat-icon",5),s(15,"notifications"),o()()(),r(16,"mat-tab-group",6),Qe("selectedIndexChange",function(d){return je(t.activeTab,d)||(t.activeTab=d),d}),r(17,"mat-tab"),A(18,ro,4,3,"ng-template",7),r(19,"div",8)(20,"div",9)(21,"div")(22,"h2"),s(23),p(24,"translate"),o(),r(25,"p"),s(26),p(27,"translate"),o()(),r(28,"button",10),b("click",function(){return t.openRegistrarPaciente()}),r(29,"mat-icon"),s(30,"add"),o(),s(31),p(32,"translate"),o()(),r(33,"div",11)(34,"div",12)(35,"mat-icon"),s(36,"search"),o(),r(37,"input",13),p(38,"translate"),Qe("ngModelChange",function(d){return je(t.patientSearch,d)||(t.patientSearch=d),d}),o()(),r(39,"div",14)(40,"mat-select",15),Qe("valueChange",function(d){return je(t.speciesFilter,d)||(t.speciesFilter=d),d}),r(41,"mat-option",16),s(42),p(43,"translate"),o(),r(44,"mat-option",17),s(45),p(46,"translate"),o(),r(47,"mat-option",18),s(48),p(49,"translate"),o(),r(50,"mat-option",19),s(51),p(52,"translate"),o()()()(),C(53,lo,3,3,"div",20)(54,mo,4,1,"div",21),o()(),r(55,"mat-tab"),A(56,po,4,3,"ng-template",7),r(57,"div",8)(58,"div",9)(59,"div")(60,"h2"),s(61),p(62,"translate"),o(),r(63,"p"),s(64),p(65,"translate"),o()(),r(66,"button",10),b("click",function(){return t.openRegistrarCliente()}),r(67,"mat-icon"),s(68,"add"),o(),s(69),p(70,"translate"),o()(),r(71,"div",11)(72,"div",12)(73,"mat-icon"),s(74,"search"),o(),r(75,"input",13),p(76,"translate"),Qe("ngModelChange",function(d){return je(t.clientSearch,d)||(t.clientSearch=d),d}),o()()(),C(77,fo,3,3,"div",20)(78,bo,23,16,"div",22),o()(),r(79,"mat-tab"),A(80,_o,4,3,"ng-template",7),r(81,"div",8)(82,"div",9)(83,"div")(84,"h2"),s(85),p(86,"translate"),o(),r(87,"p"),s(88),p(89,"translate"),o()(),r(90,"button",10),b("click",function(){return t.openNuevaConsulta()}),r(91,"mat-icon"),s(92,"add"),o(),s(93),p(94,"translate"),o()(),r(95,"div",22)(96,"div",23)(97,"h3"),s(98),p(99,"translate"),o(),r(100,"div",24)(101,"button",25),b("click",function(){return t.setConsultFilter("all")}),s(102),p(103,"translate"),o(),r(104,"button",25),b("click",function(){return t.setConsultFilter("today")}),s(105),p(106,"translate"),o(),r(107,"button",25),b("click",function(){return t.setConsultFilter("week")}),s(108),p(109,"translate"),o()()(),r(110,"table",26)(111,"thead")(112,"tr")(113,"th"),s(114),p(115,"translate"),o(),r(116,"th"),s(117),p(118,"translate"),o(),r(119,"th"),s(120),p(121,"translate"),o(),r(122,"th"),s(123),p(124,"translate"),o(),r(125,"th"),s(126),p(127,"translate"),o(),r(128,"th"),s(129),p(130,"translate"),o(),r(131,"th"),s(132),p(133,"translate"),o()()(),r(134,"tbody"),w(135,go,30,13,"tr",null,Ye,!1,vo,4,3,"tr"),o()(),r(138,"div",27)(139,"span"),s(140),p(141,"translate"),o(),r(142,"div",28)(143,"button",29),b("click",function(){return t.consultPage=t.consultPage-1}),r(144,"mat-icon"),s(145,"chevron_left"),o()(),w(146,xo,2,3,"button",30,J),r(148,"button",29),b("click",function(){return t.consultPage=t.consultPage+1}),r(149,"mat-icon"),s(150,"chevron_right"),o()()()()()()(),r(151,"mat-tab"),A(152,yo,4,3,"ng-template",7),r(153,"div",8),C(154,Co,12,9,"div",31)(155,Eo,27,16),o()(),r(156,"mat-tab"),A(157,Io,4,3,"ng-template",7),r(158,"div",8)(159,"div",9)(160,"div",32),w(161,Fo,3,5,"button",33,Tn),o(),r(163,"button",10),b("click",function(){return t.openRegistrarVacuna()}),r(164,"mat-icon"),s(165,"add"),o(),s(166),p(167,"translate"),o()(),r(168,"div",34),w(169,Do,11,16,"div",35,Wt),o(),r(171,"div",22)(172,"table",26)(173,"thead")(174,"tr")(175,"th"),s(176),p(177,"translate"),o(),r(178,"th"),s(179),p(180,"translate"),o(),r(181,"th"),s(182),p(183,"translate"),o(),r(184,"th"),s(185),p(186,"translate"),o(),r(187,"th"),s(188),p(189,"translate"),o(),r(190,"th"),s(191),p(192,"translate"),o()()(),r(193,"tbody"),w(194,Bo,28,13,"tr",null,Ye,!1,Lo,4,3,"tr"),o()()()()(),r(197,"mat-tab"),A(198,Ao,4,3,"ng-template",7),r(199,"div",8)(200,"div",9)(201,"div")(202,"h2"),s(203),p(204,"translate"),o(),r(205,"p"),s(206),p(207,"translate"),o()(),r(208,"button",10),b("click",function(){return t.openRegistrarIngreso()}),r(209,"mat-icon"),s(210,"add"),o(),s(211),p(212,"translate"),o()(),r(213,"div",36),w(214,zo,13,14,"div",37,Wt),o(),r(216,"div",32),w(217,No,3,6,"button",33,Tn),o(),r(219,"div",22)(220,"h3",38),s(221),p(222,"translate"),o(),r(223,"table",26)(224,"thead")(225,"tr")(226,"th"),s(227),p(228,"translate"),o(),r(229,"th"),s(230),p(231,"translate"),o(),r(232,"th"),s(233),p(234,"translate"),o(),r(235,"th"),s(236),p(237,"translate"),o(),r(238,"th"),s(239),p(240,"translate"),o(),r(241,"th"),s(242),p(243,"translate"),o(),r(244,"th"),s(245),p(246,"translate"),o()()(),r(247,"tbody"),w(248,Ho,38,12,"tr",null,Ye,!1,Wo,4,3,"tr"),o()()()()()()()),e&2&&(l(4),c(f(5,66,"clinical.title")),l(3),c(f(8,68,"clinical.subtitle")),l(5),_("placeholder",f(13,70,"clinical.search.placeholder")),l(4),We("selectedIndex",t.activeTab),l(7),c(f(24,72,"clinical.patients.title")),l(3),c(f(27,74,"clinical.patients.subtitle")),l(5),k(" ",f(32,76,"clinical.patients.register")," "),l(6),We("ngModel",t.patientSearch),_("placeholder",f(38,78,"clinical.patients.search")),l(3),We("value",t.speciesFilter),l(2),c(f(43,80,"clinical.patients.filterAll")),l(3),c(f(46,82,"clinical.patients.filterDog")),l(3),c(f(49,84,"clinical.patients.filterCat")),l(3),c(f(52,86,"clinical.patients.filterBird")),l(2),M(t.store.loading()?53:54),l(8),c(f(62,88,"clinical.clients.title")),l(3),c(f(65,90,"clinical.clients.subtitle")),l(5),k(" ",f(70,92,"clinical.clients.register")," "),l(6),We("ngModel",t.clientSearch),_("placeholder",f(76,94,"clinical.clients.search")),l(2),M(t.store.loading()?77:78),l(8),c(f(86,96,"clinical.consultations.title")),l(3),c(f(89,98,"clinical.consultations.subtitle")),l(5),k(" ",f(94,100,"clinical.consultations.newConsult")," "),l(5),c(f(99,102,"clinical.consultations.recent")),l(3),y("btn-sm-active",t.consultDateFilter==="all"),l(),c(f(103,104,"clinical.consultations.filterAll")),l(2),y("btn-sm-active",t.consultDateFilter==="today"),l(),c(f(106,106,"clinical.consultations.filterToday")),l(2),y("btn-sm-active",t.consultDateFilter==="week"),l(),c(f(109,108,"clinical.consultations.filterWeek")),l(6),c(f(115,110,"clinical.consultations.colId")),l(3),c(f(118,112,"clinical.consultations.colPatient")),l(3),c(f(121,114,"clinical.consultations.colClient")),l(3),c(f(124,116,"clinical.consultations.colType")),l(3),c(f(127,118,"clinical.consultations.colDiagnosis")),l(3),c(f(130,120,"clinical.consultations.colDate")),l(3),c(f(133,122,"clinical.consultations.colStatus")),l(3),S(t.pagedConsultations),l(5),c(pi(141,124,"clinical.consultations.showing",mi(163,no,t.pagedConsultations.length,t.filteredConsultations.length))),l(3),_("disabled",t.consultPage<=1),l(3),S(t.consultPageNumbers),l(2),_("disabled",t.consultPage>=t.consultTotalPages),l(6),M(t.historyPatient?155:154),l(7),S(t.vaccineFilters),l(5),k(" ",f(167,127,"clinical.vaccines.register")," "),l(3),S(t.vaccineSummary),l(7),c(f(177,129,"clinical.vaccines.colPatient")),l(3),c(f(180,131,"clinical.vaccines.colVaccine")),l(3),c(f(183,133,"clinical.vaccines.colLastApplied")),l(3),c(f(186,135,"clinical.vaccines.colNextDose")),l(3),c(f(189,137,"clinical.vaccines.colStatus")),l(3),c(f(192,139,"clinical.vaccines.colActions")),l(3),S(t.filteredVaccines),l(9),c(f(204,141,"clinical.hospitalization.title")),l(3),c(f(207,143,"clinical.hospitalization.subtitle")),l(5),k(" ",f(212,145,"clinical.hospitalization.register")," "),l(3),S(t.hospitalStats),l(3),S(t.hospFilters),l(4),c(f(222,147,"clinical.hospitalization.list")),l(6),c(f(228,149,"clinical.hospitalization.colPatient")),l(3),c(f(231,151,"clinical.hospitalization.colOwner")),l(3),c(f(234,153,"clinical.hospitalization.colStatus")),l(3),c(f(237,155,"clinical.hospitalization.colAdmissionDate")),l(3),c(f(240,157,"clinical.hospitalization.colDiagnosis")),l(3),c(f(243,159,"clinical.hospitalization.colTreatment")),l(3),c(f(246,161,"clinical.hospitalization.colActions")),l(3),S(t.filteredHospitalizations))},dependencies:[bi,oe,ae,se,le,Ai,ln,Ft,Dt,rn,wn,Mn,it,Yi,me,pe,$i,de,vi],styles:[".clinical[_ngcontent-%COMP%]{min-height:100%}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.header-search-input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:8px 14px 8px 36px;font-size:13px;outline:none;width:260px;margin-left:-30px}.search-icon[_ngcontent-%COMP%]{font-size:18px;color:#94a3b8}.notif-icon[_ngcontent-%COMP%]{color:#64748b;cursor:pointer}.clinical-tabs[_ngcontent-%COMP%]{background:#fff}  .clinical-tabs .mat-mdc-tab{min-width:120px}  .clinical-tabs .mat-mdc-tab-header{border-bottom:1px solid #E2E8F0;padding:0 20px}  .clinical-tabs .mdc-tab--active .mdc-tab__text-label{color:#06b6d4!important}  .clinical-tabs .mdc-tab-indicator__content--underline{border-color:#06b6d4!important}.tab-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:4px;vertical-align:middle}.tab-content[_ngcontent-%COMP%]{padding:24px 28px}.empty-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;gap:12px;color:#94a3b8}.empty-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#475569;margin:0}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin:0 0 4px;color:#1e293b}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.filters-row[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.search-wrap[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 12px}.search-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8;font-size:18px}.filter-input[_ngcontent-%COMP%]{border:none;outline:none;font-size:13px;flex:1;padding:10px 0;background:transparent}.species-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 8px}.species-select[_ngcontent-%COMP%]{border:none!important}  .species-select .mat-mdc-select-trigger{padding:8px 0}.filter-icon-btn[_ngcontent-%COMP%]{color:#475569}.patients-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.patient-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 3px #0000000f;border:1px solid #F1F5F9}.pc-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.pc-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pc-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:22px;width:22px;height:22px}.pc-title[_ngcontent-%COMP%]{flex:1}.pc-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b}.pc-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.pc-details[_ngcontent-%COMP%]{margin-bottom:12px}.pc-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#475569;padding:3px 0}.pc-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#94a3b8}.pc-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#94a3b8}.pc-actions[_ngcontent-%COMP%]{display:flex;align-items:center;border-top:1px solid #F1F5F9;padding-top:10px}.btn-ver-ficha[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:13px!important;flex:1;justify-content:flex-start!important}.btn-ver-ficha[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f;overflow:hidden}.table-card[_ngcontent-%COMP%]{overflow:auto}.table-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 20px}.table-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin:0;color:#1e293b}.table-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.btn-sm[_ngcontent-%COMP%]{border-radius:6px!important;font-size:12px!important;color:#475569!important;border-color:#e2e8f0!important}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-size:12px;font-weight:600;color:#94a3b8;padding:10px 16px;background:#f8fafc;border-bottom:1px solid #E2E8F0;text-transform:uppercase;letter-spacing:.5px}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;border-bottom:1px solid #F8FAFC;font-size:13px;color:#475569;vertical-align:middle}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f8fafc}.td-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;font-family:monospace}.td-patient[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.td-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.td-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:16px;width:16px;height:16px}.td-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b}.td-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.table-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-top:1px solid #F1F5F9;font-size:12px;color:#94a3b8}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.pg-btn[_ngcontent-%COMP%]{width:28px;height:28px;border:1px solid #E2E8F0;border-radius:6px;background:#fff;font-size:12px;cursor:pointer;color:#475569}.pg-btn.active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.text-danger[_ngcontent-%COMP%]{color:#ef4444!important;font-weight:500}.action-link[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:12px!important}.td-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.vsummary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.vsummary[_ngcontent-%COMP%]{border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:4px}.vs-icon[_ngcontent-%COMP%]{font-size:24px!important;width:24px!important;height:24px!important}.vs-val[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.vs-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.vs-sub[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.chips-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}.chip[_ngcontent-%COMP%]{padding:6px 16px;border-radius:20px;border:1px solid #E2E8F0;background:#fff;font-size:13px;font-weight:500;color:#475569;cursor:pointer;transition:all .15s}.chip.chip-active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.hosp-stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.hosp-stat-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 3px #0000000f}.hosp-stat-label[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:4px}.hosp-stat-val[_ngcontent-%COMP%]{font-size:26px;font-weight:700}.hosp-stat-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.hosp-stat-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center}.hosp-stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.treat-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;font-size:12px;color:#475569}.treat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1px 0}.table-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;padding:16px 20px 0}.history-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:20px}.hist-avatar[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.hist-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px;width:30px;height:30px}.hist-info[_ngcontent-%COMP%]{flex:1}.hist-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 4px;color:#1e293b}.hist-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin:0}.hist-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.hist-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}.hist-stat[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:16px 20px;text-align:center;box-shadow:0 1px 3px #0000000f}.hs-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b}.hs-lbl[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-top:2px}.hist-section-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.tl-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px #0000000f}.tl-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px}.tl-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.tl-type[_ngcontent-%COMP%]{font-size:14px;font-weight:600;flex:1}.tl-date[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.tl-doc[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-left:8px}.tl-body[_ngcontent-%COMP%]{padding:16px}.tl-section[_ngcontent-%COMP%]{margin-bottom:14px}.tl-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.tl-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#475569;margin-bottom:6px}.tl-text[_ngcontent-%COMP%]{font-size:13px;color:#64748b;line-height:1.6;margin:0}.tl-vitals[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}.vital[_ngcontent-%COMP%]{background:#f8fafc;border-radius:6px;padding:8px 12px}.vital[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8;display:block}.vital[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;color:#1e293b}.tl-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 16px}.tl-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#64748b;padding:2px 0}"]})};export{En as ClinicalManagement};
