import{a as _n,b as En,c as In,d as Je,e as Fn,f as Pn,g as xt,h as Dn}from"./chunk-DOUD2ZBI.js";import{a as Gn,b as Kn}from"./chunk-C2OGCAUE.js";import{a as Me,b as tt,c as Hn,d as we,e as ke,f as Se,g as Te,h as re,i as Ee,j as $n}from"./chunk-TDMMU3OY.js";import{A as Wn,B as de,C as Ie,D as jn,E as qn,F as Fe,H as Pe,I as ce,J as nt,K as it,L as at,N as De,O as Qn,P as Oe,Q as me,a as Rn,b as et,c as Ln,e as An,g as Bn,h as yt,k as zn,p as Nn,r as Ct,s as Mt,t as Vn,v as le,x as se,z as O}from"./chunk-FBMTVQIF.js";import{a as On,b as ae,c as oe}from"./chunk-NQWIFUGN.js";import{A as vn,B as xn,C as yn,F as Cn,H as Ce,I as Mn,J as wn,K as _e,L as kn,M as gt,S as Sn,T as vt,U as Tn,d as un,e as hn,k as bn,m as be,n as ye,o as te,p as ne,q as We,u as ie,w as gn}from"./chunk-DZOPWEPU.js";import{$b as Xe,Ab as on,Bb as rn,C as Gt,Cb as ut,D as $t,Db as V,Eb as ln,Fb as u,Gb as f,Hb as Y,I as Kt,Ib as P,Jb as X,K as Yt,Kb as Q,L as Zt,Lb as h,M as K,Mb as b,N as Ae,Nb as sn,O as A,Ob as dn,Pa as d,Pb as ht,Qb as J,Rb as I,Sb as v,Tb as xe,U as Ut,Ua as Ke,Ub as l,V as ge,Va as Ye,Vb as p,Wb as ue,X as D,Xa as fe,Xb as Z,Yb as cn,Z as c,Zb as Ze,_a as tn,_b as Ue,bc as U,ca as S,cb as F,cc as bt,d as G,da as T,db as ve,dc as mn,ea as Xt,eb as N,f as Qe,fa as Be,g as L,gb as Ne,gc as Ve,hb as R,ib as nn,ic as _t,j as Wt,ja as B,ka as W,kc as He,l as jt,lc as pn,mc as ee,oa as ze,ob as an,oc as E,p as Le,pb as z,pc as he,qb as x,qc as fn,ra as Jt,rb as y,sa as Ge,ta as $e,tb as q,u as qt,ub as M,va as H,vb as w,w as Qt,wa as en,wb as _,x as j,xb as r,y as $,yb as o,zb as g}from"./chunk-EDCRLFMK.js";var wt=class{_box;_destroyed=new L;_resizeSubject=new L;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new Qe(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe($(e=>e.some(t=>t.target===a)),Yt({bufferSize:1,refCount:!0}),A(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ot=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new wt(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ut({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var It=["*"];function Ti(i,a){i&1&&P(0)}var Ei=["tabListContainer"],Ii=["tabList"],Fi=["tabListInner"],Pi=["nextPaginator"],Di=["previousPaginator"],Oi=["content"];function Ri(i,a){}var Li=["tabBodyWrapper"],Ai=["tabHeader"];function Bi(i,a){}function zi(i,a){if(i&1&&R(0,Bi,0,0,"ng-template",12),i&2){let e=f().$implicit;_("cdkPortalOutlet",e.templateLabel)}}function Ni(i,a){if(i&1&&l(0),i&2){let e=f().$implicit;p(e.textLabel)}}function Vi(i,a){if(i&1){let e=V();r(0,"div",7,2),u("click",function(){let n=S(e),s=n.$implicit,m=n.$index,C=f(),k=J(1);return T(C._handleClick(s,k,m))})("cdkFocusChange",function(n){let s=S(e).$index,m=f();return T(m._tabFocusChanged(n,s))}),g(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),x(6,zi,1,1,null,12)(7,Ni,1,1),o()()()}if(i&2){let e=a.$implicit,t=a.$index,n=J(1),s=f();xe(e.labelClass),v("mdc-tab--active",s.selectedIndex===t),_("id",s._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",s.fitInkBarToContent),z("tabIndex",s._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",s._tabs.length)("aria-controls",s._getTabContentId(t))("aria-selected",s.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),d(3),_("matRippleTrigger",n)("matRippleDisabled",e.disabled||s.disableRipple),d(3),y(e.templateLabel?6:7)}}function Hi(i,a){i&1&&P(0)}function Wi(i,a){if(i&1){let e=V();r(0,"mat-tab-body",13),u("_onCentered",function(){S(e);let n=f();return T(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){S(e);let s=f();return T(s._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){S(e);let s=f();return T(s._bodyCentered(n))}),o()}if(i&2){let e=a.$implicit,t=a.$index,n=f();xe(e.bodyClass),_("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),z("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var ji=new D("MatTabContent"),qi=(()=>{class i{template=c(Ye);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","matTabContent",""]],features:[U([{provide:ji,useExisting:i}])]})}return i})(),Qi=new D("MatTabLabel"),Xn=new D("MAT_TAB"),Ft=(()=>{class i extends Bn{_closestTab=c(Xn,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=$e(i)))(n||i)}})();static \u0275dir=N({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[U([{provide:Qi,useExisting:i}]),Ne]})}return i})(),Jn=new D("MAT_TAB_GROUP"),Pt=(()=>{class i{_viewContainerRef=c(tn);_closestTabGroup=c(Jn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new L;position=null;origin=null;isActive=!1;constructor(){c(bn).load(Tn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new An(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,s){if(t&1&&X(s,Ft,5)(s,qi,7,Ye),t&2){let m;h(m=b())&&(n.templateLabel=m.first),h(m=b())&&(n._explicitContent=m.first)}},viewQuery:function(t,n){if(t&1&&Q(Ye,7),t&2){let s;h(s=b())&&(n._implicitContent=s.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&z("id",null)},inputs:{disabled:[2,"disabled","disabled",E],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[U([{provide:Xn,useExisting:i}]),Ge],ngContentSelectors:It,decls:1,vars:0,template:function(t,n){t&1&&(Y(),nn(0,Ti,1,0,"ng-template"))},encapsulation:2})}return i})(),kt="mdc-tab-indicator--active",Yn="mdc-tab-indicator--no-transition",St=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(n=>n.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Gi=(()=>{class i{_elementRef=c(H);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(kt);return}let n=t.getBoundingClientRect(),s=e.width/n.width,m=e.left-n.left;t.classList.add(Yn),this._inkBarContentElement.style.setProperty("transform",`translateX(${m}px) scaleX(${s})`),t.getBoundingClientRect(),t.classList.remove(Yn),t.classList.add(kt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(kt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E]}})}return i})();var ei=(()=>{class i extends Gi{elementRef=c(H);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$e(i)))(n||i)}})();static \u0275dir=N({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(z("aria-disabled",!!n.disabled),v("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",E]},features:[Ne]})}return i})(),Zn={passive:!0},$i=650,Ki=100,Yi=(()=>{class i{_elementRef=c(H);_changeDetectorRef=c(ee);_viewportRuler=c(et);_dir=c(be,{optional:!0});_ngZone=c(W);_platform=c(We);_sharedResizeObserver=c(ot);_injector=c(Be);_renderer=c(fe);_animationsDisabled=ie();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new L;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new L;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new B;indexFocused=new B;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Zn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Zn))}ngAfterContentInit(){let e=this._dir?this._dir.change:jt("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Gt(32),A(this._destroyed)),n=this._viewportRuler.change(150).pipe(A(this._destroyed)),s=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new wn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ke(s,{injector:this._injector}),j(e,n,t,this._items.changes,this._itemsResized()).pipe(A(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),s()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!="function"?Wt:this._items.changes.pipe(K(this._items),Ae(e=>new Qe(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(s=>t.next(s));return e.forEach(s=>n.observe(s.elementRef.nativeElement)),()=>{n.disconnect()}}))),Zt(1),$(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ce(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:m}=t.elementRef.nativeElement,C,k;this._getLayoutDirection()=="ltr"?(C=s,k=C+m):(k=this._tabListInner.nativeElement.offsetWidth-s,C=k-m);let Re=this.scrollDistance,qe=this.scrollDistance+n;C<Re?this.scrollDistance-=Re-C:k>qe&&(this.scrollDistance+=Math.min(k-qe,C-Re))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Qt($i,Ki).pipe(A(j(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:s}=this._scrollHeader(e);(s===0||s>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",E],selectedIndex:[2,"selectedIndex","selectedIndex",he]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Zi=(()=>{class i extends Yi{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new St(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$e(i)))(n||i)}})();static \u0275cmp=F({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,s){if(t&1&&X(s,ei,4),t&2){let m;h(m=b())&&(n._items=m)}},viewQuery:function(t,n){if(t&1&&Q(Ei,7)(Ii,7)(Fi,7)(Pi,5)(Di,5),t&2){let s;h(s=b())&&(n._tabListContainer=s.first),h(s=b())&&(n._tabList=s.first),h(s=b())&&(n._tabListInner=s.first),h(s=b())&&(n._nextPaginator=s.first),h(s=b())&&(n._previousPaginator=s.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&v("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",E]},features:[Ne],ngContentSelectors:It,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(Y(),r(0,"div",5,0),u("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(m){return n._handlePaginatorPress("before",m)})("touchend",function(){return n._stopInterval()}),g(2,"div",6),o(),r(3,"div",7,1),u("keydown",function(m){return n._handleKeydown(m)}),r(5,"div",8,2),u("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),P(9),o()()(),r(10,"div",10,4),u("mousedown",function(m){return n._handlePaginatorPress("after",m)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),g(12,"div",6),o()),t&2&&(v("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),_("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),v("_mat-animation-noopable",n._animationsDisabled),d(2),z("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),v("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),_("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[vt,xn],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return i})(),Ui=new D("MAT_TABS_CONFIG"),Un=(()=>{class i extends yt{_host=c(Tt);_ngZone=c(W);_centeringSub=G.EMPTY;_leavingSub=G.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(K(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","matTabBodyHost",""]],features:[Ne]})}return i})(),Tt=(()=>{class i{_elementRef=c(H);_dir=c(be,{optional:!0});_ngZone=c(W);_injector=c(Be);_renderer=c(fe);_diAnimationsDisabled=ie();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=G.EMPTY;_position;_previousPosition;_onCentering=new B;_beforeCentering=new B;_afterLeavingCenter=new B;_onCentered=new B(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(ee);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ke(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ke(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&Q(Un,5)(Oi,5),t&2){let s;h(s=b())&&(n._portalHost=s.first),h(s=b())&&(n._contentElement=s.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&z("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(r(0,"div",1,0),R(2,Ri,0,0,"ng-template",2),o()),t&2&&v("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Un,Rn],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return i})(),ti=(()=>{class i{_elementRef=c(H);_changeDetectorRef=c(ee);_ngZone=c(W);_tabsSubscription=G.EMPTY;_tabLabelSubscription=G.EMPTY;_tabBodySubscription=G.EMPTY;_diAnimationsDisabled=ie();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new en;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new B;focusChange=new B;animationDone=new B;selectedTabChange=new B(!0);_groupId;_isServer=!c(We).isBrowser;constructor(){let e=c(Ui,{optional:!0});this._groupId=c(_e).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,s)=>n.isActive=s===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let s=0;s<t.length;s++)if(t[s].isActive){this._indexToSelect=this._selectedIndex=s,this._lastFocusedTabIndex=null,n=t[s];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(K(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Et;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=j(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,s){if(t&1&&X(s,Pt,5),t&2){let m;h(m=b())&&(n._allTabs=m)}},viewQuery:function(t,n){if(t&1&&Q(Li,5)(Ai,5)(Tt,5),t&2){let s;h(s=b())&&(n._tabBodyWrapper=s.first),h(s=b())&&(n._tabHeader=s.first),h(s=b())&&(n._tabBodies=s)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(z("mat-align-tabs",n.alignTabs),xe("mat-"+(n.color||"primary")),I("--mat-tab-animation-duration",n.animationDuration),v("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",E],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",E],selectedIndex:[2,"selectedIndex","selectedIndex",he],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",he],disablePagination:[2,"disablePagination","disablePagination",E],disableRipple:[2,"disableRipple","disableRipple",E],preserveContent:[2,"preserveContent","preserveContent",E],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[U([{provide:Jn,useExisting:i}])],ngContentSelectors:It,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(Y(),r(0,"mat-tab-header",3,0),u("indexFocused",function(m){return n._focusChanged(m)})("selectFocusedIndex",function(m){return n.selectedIndex=m}),M(2,Vi,8,17,"div",4,q),o(),x(4,Hi,1,0),r(5,"div",5,1),M(7,Wi,1,10,"mat-tab-body",6,q),o()),t&2&&(_("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),an("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),w(n._tabs),d(2),y(n._isServer?4:-1),d(),v("_mat-animation-noopable",n._animationsDisabled()),d(2),w(n._tabs))},dependencies:[Zi,ei,vn,vt,yt,Tt],styles:[`.mdc-tab {
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
`],encapsulation:2})}return i})(),Et=class{index;tab};var ni=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ve({type:i});static \u0275inj=ge({imports:[ye]})}return i})();var je=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L;constructor(a=!1,e,t=!0,n){this._multiple=a,this._emitChanges=t,this.compareWith=n,e&&e.length&&(a?e.forEach(s=>this._markSelected(s)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(s=>this._getConcreteValue(s)));a.forEach(s=>this._markSelected(s)),e.filter(s=>!t.has(this._getConcreteValue(s,t))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var Ji=["notch"],ea=["matFormFieldNotchedOutline",""],ta=["*"],ii=["iconPrefixContainer"],ai=["textPrefixContainer"],oi=["iconSuffixContainer"],ri=["textSuffixContainer"],na=["textField"],ia=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],aa=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function oa(i,a){i&1&&g(0,"span",21)}function ra(i,a){if(i&1&&(r(0,"label",20),P(1,1),x(2,oa,1,0,"span",21),o()),i&2){let e=f(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),z("for",e._control.disableAutomaticLabeling?null:e._control.id),d(2),y(!e.hideRequiredMarker&&e._control.required?2:-1)}}function la(i,a){if(i&1&&x(0,ra,3,5,"label",20),i&2){let e=f();y(e._hasFloatingLabel()?0:-1)}}function sa(i,a){i&1&&g(0,"div",7)}function da(i,a){}function ca(i,a){if(i&1&&R(0,da,0,0,"ng-template",13),i&2){f(2);let e=J(1);_("ngTemplateOutlet",e)}}function ma(i,a){if(i&1&&(r(0,"div",9),x(1,ca,1,1,null,13),o()),i&2){let e=f();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),d(),y(e._forceDisplayInfixLabel()?-1:1)}}function pa(i,a){i&1&&(r(0,"div",10,2),P(2,2),o())}function fa(i,a){i&1&&(r(0,"div",11,3),P(2,3),o())}function ua(i,a){}function ha(i,a){if(i&1&&R(0,ua,0,0,"ng-template",13),i&2){f();let e=J(1);_("ngTemplateOutlet",e)}}function ba(i,a){i&1&&(r(0,"div",14,4),P(2,4),o())}function _a(i,a){i&1&&(r(0,"div",15,5),P(2,5),o())}function ga(i,a){i&1&&g(0,"div",16)}function va(i,a){i&1&&(r(0,"div",18),P(1,6),o())}function xa(i,a){if(i&1&&(r(0,"mat-hint",22),l(1),o()),i&2){let e=f(2);_("id",e._hintLabelId),d(),p(e.hintLabel)}}function ya(i,a){if(i&1&&(r(0,"div",19),x(1,xa,2,2,"mat-hint",22),P(2,7),g(3,"div",23),P(4,8),o()),i&2){let e=f();d(),y(e.hintLabel?1:-1)}}var Dt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["mat-label"]]})}return i})(),Ca=new D("MatError");var Ot=(()=>{class i{align="start";id=c(_e).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(ln("id",n.id),z("align",null),v("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Ma=new D("MatPrefix");var wa=new D("MatSuffix");var fi=new D("FloatingLabelParent"),li=(()=>{class i{_elementRef=c(H);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(ot);_ngZone=c(W);_parent=c(fi);_resizeSubscription=new G;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ka(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&v("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function ka(i){let a=i;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var si="mdc-line-ripple--active",st="mdc-line-ripple--deactivating",di=(()=>{class i{_elementRef=c(H);_cleanupTransitionEnd;constructor(){let e=c(W),t=c(fe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(st),e.add(si)}deactivate(){this._elementRef.nativeElement.classList.add(st)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(st);e.propertyName==="opacity"&&n&&t.remove(si,st)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),ci=(()=>{class i{_elementRef=c(H);_ngZone=c(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&Q(Ji,5),t&2){let s;h(s=b())&&(n._notch=s.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&v("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ea,ngContentSelectors:ta,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(Y(),ut(0,"div",1),on(1,"div",2,0),P(3),rn(),ut(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Rt=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i})}return i})();var Lt=new D("MatFormField"),Sa=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),mi="fill",Ta="auto",pi="fixed",Ea="translateY(-50%)",ui=(()=>{class i{_elementRef=c(H);_changeDetectorRef=c(ee);_platform=c(We);_idGenerator=c(_e);_ngZone=c(W);_defaults=c(Sa,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=He("iconPrefixContainer");_textPrefixContainerSignal=He("textPrefixContainer");_iconSuffixContainerSignal=He("iconSuffixContainer");_textSuffixContainerSignal=He("textSuffixContainer");_prefixSuffixContainers=Ve(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=pn(Dt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Sn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ta}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||mi;this._appearanceSignal.set(t)}_appearanceSignal=ze(mi);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||pi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||pi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new L;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ie();constructor(){let e=this._defaults,t=c(be);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Jt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ve(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(K([void 0,void 0]),Le(()=>[t.errorState,t.userAriaDescribedBy]),Kt(),$(([[s,m],[C,k]])=>s!==C||m!==k)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(A(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),j(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){fn({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ve(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let s=this._hintChildren?this._hintChildren.find(C=>C.align==="start"):null,m=this._hintChildren?this._hintChildren.find(C=>C.align==="end"):null;s?e.push(s.id):this._hintLabel&&e.push(this._hintLabelId),m&&e.push(m.id)}else this._errorChildren&&e.push(...this._errorChildren.map(s=>s.id));let t=this._control.describedByIds,n;if(t){let s=this._describedByIds||e;n=e.concat(t.filter(m=>m&&!s.includes(m)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,s=this._textSuffixContainer?.nativeElement,m=e?.getBoundingClientRect().width??0,C=t?.getBoundingClientRect().width??0,k=n?.getBoundingClientRect().width??0,Re=s?.getBoundingClientRect().width??0,qe=this._currentDirection==="rtl"?"-1":"1",Mi=`${m+C}px`,wi=`calc(${qe} * (${Mi} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ki=`var(--mat-mdc-form-field-label-transform, ${Ea} translateX(${wi}))`,Si=m+C+k+Re;return[ki,Si]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,s){if(t&1&&(sn(s,n._labelChild,Dt,5),X(s,Rt,5)(s,Ma,5)(s,wa,5)(s,Ca,5)(s,Ot,5)),t&2){ht();let m;h(m=b())&&(n._formFieldControl=m.first),h(m=b())&&(n._prefixChildren=m),h(m=b())&&(n._suffixChildren=m),h(m=b())&&(n._errorChildren=m),h(m=b())&&(n._hintChildren=m)}},viewQuery:function(t,n){if(t&1&&(dn(n._iconPrefixContainerSignal,ii,5)(n._textPrefixContainerSignal,ai,5)(n._iconSuffixContainerSignal,oi,5)(n._textSuffixContainerSignal,ri,5),Q(na,5)(ii,5)(ai,5)(oi,5)(ri,5)(li,5)(ci,5)(di,5)),t&2){ht(4);let s;h(s=b())&&(n._textField=s.first),h(s=b())&&(n._iconPrefixContainer=s.first),h(s=b())&&(n._textPrefixContainer=s.first),h(s=b())&&(n._iconSuffixContainer=s.first),h(s=b())&&(n._textSuffixContainer=s.first),h(s=b())&&(n._floatingLabel=s.first),h(s=b())&&(n._notchedOutline=s.first),h(s=b())&&(n._lineRipple=s.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&v("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[U([{provide:Lt,useExisting:i},{provide:fi,useExisting:i}])],ngContentSelectors:aa,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(Y(ia),R(0,la,1,1,"ng-template",null,0,mn),r(2,"div",6,1),u("click",function(m){return n._control.onContainerClick(m)}),x(4,sa,1,0,"div",7),r(5,"div",8),x(6,ma,2,2,"div",9),x(7,pa,3,0,"div",10),x(8,fa,3,0,"div",11),r(9,"div",12),x(10,ha,1,1,null,13),P(11),o(),x(12,ba,3,0,"div",14),x(13,_a,3,0,"div",15),o(),x(14,ga,1,0,"div",16),o(),r(15,"div",17),x(16,va,2,0,"div",18)(17,ya,5,1,"div",19),o()),t&2){let s;d(2),v("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),d(2),y(!n._hasOutline()&&!n._control.disabled?4:-1),d(2),y(n._hasOutline()?6:-1),d(),y(n._hasIconPrefix?7:-1),d(),y(n._hasTextPrefix?8:-1),d(2),y(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),d(2),y(n._hasTextSuffix?12:-1),d(),y(n._hasIconSuffix?13:-1),d(),y(n._hasOutline()?-1:14),d(),v("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let m=n._getSubscriptMessageType();d(),y((s=m)==="error"?16:s==="hint"?17:-1)}},dependencies:[li,ci,hn,di,Ot],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var hi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ve({type:i});static \u0275inj=ge({imports:[yn,ui,ye]})}return i})();var Oa=["trigger"],Ra=["panel"],La=[[["mat-select-trigger"]],"*"],Aa=["mat-select-trigger","*"];function Ba(i,a){if(i&1&&(r(0,"span",4),l(1),o()),i&2){let e=f();d(),p(e.placeholder)}}function za(i,a){i&1&&P(0)}function Na(i,a){if(i&1&&(r(0,"span",11),l(1),o()),i&2){let e=f(2);d(),p(e.triggerValue)}}function Va(i,a){if(i&1&&(r(0,"span",5),x(1,za,1,0)(2,Na,2,1,"span",11),o()),i&2){let e=f();d(),y(e.customTrigger?1:2)}}function Ha(i,a){if(i&1){let e=V();r(0,"div",12,1),u("keydown",function(n){S(e);let s=f();return T(s._handleKeydown(n))}),P(2,1),o()}if(i&2){let e=f();xe(e.panelClass),v("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Wa=new D("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Be);return()=>zn(i)}}),ja=new D("MAT_SELECT_CONFIG"),qa=new D("MatSelectTrigger"),At=class{source;value;constructor(a,e){this.source=a,this.value=e}},gi=(()=>{class i{_viewportRuler=c(et);_changeDetectorRef=c(ee);_elementRef=c(H);_dir=c(be,{optional:!0});_idGenerator=c(_e);_renderer=c(fe);_parentFormField=c(Lt,{optional:!0});ngControl=c(Wn,{self:!0,optional:!0});_liveAnnouncer=c(Cn);_defaultOptions=c(ja,{optional:!0});_animationsDisabled=ie();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,s=Fn(e,this.options,this.optionGroups),m=t._getHostElement();e===0&&s===1?n.scrollTop=0:n.scrollTop=Pn(m.offsetTop,m.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new At(this,e)}_scrollStrategyFactory=c(Wa);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ze(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(O.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=qt(()=>{let e=this.options;return e?e.changes.pipe(K(e),Ae(()=>j(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ae(()=>this.optionSelectionChanges))});openedChange=new B;_openedStream=this.openedChange.pipe($(e=>e),Le(()=>{}));_closedStream=this.openedChange.pipe($(e=>!e),Le(()=>{}));selectionChange=new B;valueChange=new B;constructor(){let e=c(_n),t=c(jn,{optional:!0}),n=c(ce,{optional:!0}),s=c(new _t("tabindex"),{optional:!0}),m=c(Nn,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Dn(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=s==null?0:parseInt(s)||0,this._popoverLocation=m?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new je(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(A(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(A(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(K(null),A(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe($t(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&gt(this._trackedModal,"aria-owns",t),kn(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;gt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",s=>{s.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,s=t===13||t===32,m=this._keyManager;if(!m.isTyping()&&s&&!Ce(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let C=this.selected;m.onKeydown(e);let k=this.selected;k&&C!==k&&this._liveAnnouncer.announce(k.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,s=n===40||n===38,m=t.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(!m&&(n===13||n===32)&&t.activeItem&&!Ce(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!m&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let C=this.options.some(k=>!k.disabled&&!k.selected);this.options.forEach(k=>{k.disabled||(C?k.select():k.deselect())})}else{let C=t.activeItemIndex;t.onKeydown(e),this._multiple&&s&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==C&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ce(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ct?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Mn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=j(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(A(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),j(...this.options.map(t=>t._stateChanges)).pipe(A(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=gn(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,s){if(t&1&&X(s,qa,5)(s,Je,5)(s,In,5),t&2){let m;h(m=b())&&(n.customTrigger=m.first),h(m=b())&&(n.options=m),h(m=b())&&(n.optionGroups=m)}},viewQuery:function(t,n){if(t&1&&Q(Oa,5)(Ra,5)(Mt,5),t&2){let s;h(s=b())&&(n.trigger=s.first),h(s=b())&&(n.panel=s.first),h(s=b())&&(n._overlayDir=s.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&u("keydown",function(m){return n._handleKeydown(m)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(z("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),v("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",E],disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:he(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E],placeholder:"placeholder",required:[2,"required","required",E],multiple:[2,"multiple","multiple",E],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",E],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",he],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",E]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[U([{provide:Rt,useExisting:i},{provide:En,useExisting:i}]),Ge],ngContentSelectors:Aa,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(Y(La),r(0,"div",2,0),u("click",function(){return n.open()}),r(3,"div",3),x(4,Ba,2,1,"span",4)(5,Va,3,1,"span",5),o(),r(6,"div",6)(7,"div",7),Xt(),r(8,"svg",8),g(9,"path",9),o()()()(),R(10,Ha,3,16,"ng-template",10),u("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(m){return n._handleOverlayKeydown(m)})),t&2){let s=J(1);d(3),z("id",n._valueId),d(),y(n.empty?4:5),d(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||s)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[Ct,Mt],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return i})();var vi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ve({type:i});static \u0275inj=ge({imports:[Vn,xt,ye,Ln,hi,xt]})}return i})();var xi=(i,a)=>a.id;function Ga(i,a){if(i&1&&(r(0,"option",5),l(1),o()),i&2){let e=a.$implicit;_("value",e.id),d(),Z("",e.name," (",e.owner,")")}}function $a(i,a){if(i&1&&(r(0,"option",5),l(1),o()),i&2){let e=a.$implicit;_("value",e.id),d(),p(e.nombre)}}var dt=class i{fb=c(De);ref=c(Me);svc=c(le);snack=c(me);store=c(Ee);data=c(tt,{optional:!0});today=new Date().toISOString().split("T")[0];form=this.fb.group({mascotaId:[this.data?.patientId??"",O.required],tipoVacunaId:["",O.required],fechaAplicacion:[this.today,O.required],proximaDosis:["",O.required],lote:[""],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={mascotaId:a.mascotaId,tipoVacunaId:a.tipoVacunaId,fechaAplicacion:a.fechaAplicacion,proximaDosis:a.proximaDosis,lote:a.lote,observaciones:a.observaciones,veterinarioId:1};this.svc.createVacuna(e).subscribe({next:()=>{this.snack.open("Vacuna registrada","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=F({type:i,selectors:[["app-registrar-vacuna-dialog"]],decls:44,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],["formControlName","tipoVacunaId"],[1,"dlg-row"],["type","date","formControlName","fechaAplicacion"],["type","date","formControlName","proximaDosis"],["type","text","formControlName","lote","placeholder","Ej: LOT-2025-001"],["formControlName","observaciones","placeholder","Reacciones adversas, notas..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(r(0,"h2",0),l(1,"Registrar Vacuna"),o(),r(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),l(6,"Paciente *"),o(),r(7,"select",3)(8,"option",4),l(9,"Seleccionar paciente..."),o(),M(10,Ga,2,3,"option",5,xi),o()(),r(12,"div",2)(13,"label"),l(14,"Tipo de Vacuna *"),o(),r(15,"select",6)(16,"option",4),l(17,"Seleccionar vacuna..."),o(),M(18,$a,2,2,"option",5,xi),o()(),r(20,"div",7)(21,"div",2)(22,"label"),l(23,"Fecha de Aplicaci\xF3n *"),o(),g(24,"input",8),o(),r(25,"div",2)(26,"label"),l(27,"Pr\xF3xima Dosis *"),o(),g(28,"input",9),o()(),r(29,"div",2)(30,"label"),l(31,"N\xFAmero de Lote"),o(),g(32,"input",10),o(),r(33,"div",2)(34,"label"),l(35,"Observaciones"),o(),g(36,"textarea",11),o()()(),r(37,"mat-dialog-actions",12)(38,"button",13),l(39,"Cancelar"),o(),r(40,"button",14),u("click",function(){return t.submit()}),r(41,"mat-icon"),l(42,"vaccines"),o(),l(43," Registrar Vacuna "),o()()),e&2&&(d(3),_("formGroup",t.form),d(7),w(t.store.patients()),d(8),w(t.store.rawTiposVacuna()),d(22),_("disabled",t.form.invalid||t.submitting))},dependencies:[Oe,Fe,it,at,se,nt,de,Ie,ce,Pe,re,we,ke,Te,Se,oe,ae,ne,te],encapsulation:2})};var Ka=(i,a)=>a.id;function Ya(i,a){if(i&1&&(r(0,"option",5),l(1),o()),i&2){let e=a.$implicit;_("value",e.id),d(),Z("",e.name," (",e.owner,")")}}function Za(i,a){if(i&1&&(r(0,"option",5),l(1),o()),i&2){let e=a.$implicit;_("value",e),d(),p(e)}}var ct=class i{fb=c(De);ref=c(Me);svc=c(le);snack=c(me);store=c(Ee);data=c(tt,{optional:!0});today=new Date().toISOString().split("T")[0];estados=["Estable","Cr\xEDtico","Recuperaci\xF3n"];form=this.fb.group({mascotaId:[this.data?.patientId??"",O.required],fechaIngreso:[this.today,O.required],diagnostico:["",O.required],tratamiento:["",O.required],estado:["Estable",O.required],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={mascotaId:a.mascotaId,veterinarioId:1,fechaIngreso:a.fechaIngreso,diagnostico:a.diagnostico,tratamientos:[a.tratamiento],estado:a.estado,observaciones:a.observaciones};this.svc.createHospitalizacion(e).subscribe({next:()=>{this.snack.open("Ingreso registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=F({type:i,selectors:[["app-registrar-ingreso-dialog"]],decls:42,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[1,"dlg-row"],["type","date","formControlName","fechaIngreso"],["formControlName","estado"],["formControlName","diagnostico","placeholder","Diagn\xF3stico de ingreso..."],["formControlName","tratamiento","placeholder","Medicamentos, procedimientos..."],["formControlName","observaciones","placeholder","Notas adicionales..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(r(0,"h2",0),l(1,"Registrar Ingreso Hospitalario"),o(),r(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),l(6,"Paciente *"),o(),r(7,"select",3)(8,"option",4),l(9,"Seleccionar paciente..."),o(),M(10,Ya,2,3,"option",5,Ka),o()(),r(12,"div",6)(13,"div",2)(14,"label"),l(15,"Fecha de Ingreso *"),o(),g(16,"input",7),o(),r(17,"div",2)(18,"label"),l(19,"Estado *"),o(),r(20,"select",8),M(21,Za,2,2,"option",5,q),o()()(),r(23,"div",2)(24,"label"),l(25,"Diagn\xF3stico *"),o(),g(26,"textarea",9),o(),r(27,"div",2)(28,"label"),l(29,"Tratamiento Inicial *"),o(),g(30,"textarea",10),o(),r(31,"div",2)(32,"label"),l(33,"Observaciones"),o(),g(34,"textarea",11),o()()(),r(35,"mat-dialog-actions",12)(36,"button",13),l(37,"Cancelar"),o(),r(38,"button",14),u("click",function(){return t.submit()}),r(39,"mat-icon"),l(40,"local_hospital"),o(),l(41," Registrar Ingreso "),o()()),e&2&&(d(3),_("formGroup",t.form),d(7),w(t.store.patients()),d(11),w(t.estados),d(17),_("disabled",t.form.invalid||t.submitting))},dependencies:[Oe,Fe,it,at,se,nt,de,Ie,ce,Pe,re,we,ke,Te,Se,oe,ae,ne,te],encapsulation:2})};var mt=class i{fb=c(De);ref=c(Me);svc=c(le);snack=c(me);form=this.fb.group({nombre:["",O.required],telefono:["",O.required],correo:["",[O.email]],direccion:[""],dni:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={nombre:a.nombre,telefono:a.telefono,correo:a.correo,direccion:a.direccion,dni:a.dni};this.svc.createCliente(e).subscribe({next:()=>{this.snack.open("Cliente registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=F({type:i,selectors:[["app-registrar-cliente-dialog"]],decls:33,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-row"],[1,"dlg-field","dlg-field-full"],["type","text","formControlName","nombre","placeholder","Nombre del propietario"],[1,"dlg-field"],["type","tel","formControlName","telefono","placeholder","+51 999 000 000"],["type","text","formControlName","dni","placeholder","12345678"],["type","email","formControlName","correo","placeholder","correo@ejemplo.com"],["type","text","formControlName","direccion","placeholder","Av. Principal 123..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(r(0,"h2",0),l(1,"Registrar Cliente"),o(),r(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"div",3)(6,"label"),l(7,"Nombre completo *"),o(),g(8,"input",4),o()(),r(9,"div",2)(10,"div",5)(11,"label"),l(12,"Tel\xE9fono *"),o(),g(13,"input",6),o(),r(14,"div",5)(15,"label"),l(16,"DNI"),o(),g(17,"input",7),o()(),r(18,"div",5)(19,"label"),l(20,"Correo electr\xF3nico"),o(),g(21,"input",8),o(),r(22,"div",5)(23,"label"),l(24,"Direcci\xF3n"),o(),g(25,"input",9),o()()(),r(26,"mat-dialog-actions",10)(27,"button",11),l(28,"Cancelar"),o(),r(29,"button",12),u("click",function(){return t.submit()}),r(30,"mat-icon"),l(31,"person_add"),o(),l(32," Registrar Cliente "),o()()),e&2&&(d(3),_("formGroup",t.form),d(26),_("disabled",t.form.invalid||t.submitting))},dependencies:[Oe,Fe,se,de,Ie,ce,Pe,re,we,ke,Te,Se,oe,ae,ne,te],encapsulation:2})};var Ua=()=>["Todas","Pr\xF3ximas","Vencidas"],Xa=()=>["Todos","Cr\xEDtico","Estable","Recuperaci\xF3n"],pt=(i,a)=>a.id,ft=(i,a)=>a.label,Ja=(i,a)=>a.date;function eo(i,a){i&1&&(r(0,"mat-icon",40),l(1,"pets"),o(),l(2," Pacientes"))}function to(i,a){i&1&&(r(0,"div",20),l(1,"Cargando pacientes..."),o())}function no(i,a){if(i&1){let e=V();r(0,"div",41)(1,"div",43)(2,"div",44)(3,"mat-icon"),l(4,"pets"),o()(),r(5,"div",45)(6,"div",46),l(7),o(),r(8,"div",47),l(9),o()(),r(10,"span",48),l(11),o()(),r(12,"div",49)(13,"div",50)(14,"mat-icon"),l(15,"pets"),o(),r(16,"span"),l(17,"Especie:"),o(),l(18),o(),r(19,"div",50)(20,"mat-icon"),l(21,"cake"),o(),r(22,"span"),l(23,"Edad:"),o(),l(24),o(),r(25,"div",50)(26,"mat-icon"),l(27,"monitor_weight"),o(),r(28,"span"),l(29,"Peso:"),o(),l(30),o(),r(31,"div",50)(32,"mat-icon"),l(33,"person"),o(),r(34,"span"),l(35,"Propietario:"),o(),l(36),o()(),r(37,"div",51)(38,"button",52),u("click",function(){let n=S(e).$implicit,s=f(2);return T(s.verFicha(n.id))}),r(39,"mat-icon"),l(40,"visibility"),o(),l(41," Ver Ficha "),o(),r(42,"button",53),u("click",function(){let n=S(e).$implicit,s=f(2);return T(s.openRegistrarPaciente(n))}),r(43,"mat-icon"),l(44,"edit"),o()(),r(45,"button",54),u("click",function(){let n=S(e).$implicit,s=f(2);return T(s.deletePatient(n))}),r(46,"mat-icon"),l(47,"delete"),o()()()()}if(i&2){let e=a.$implicit;d(2),I("background",e.avatarColor),d(5),p(e.name),d(2),ue("ID: ",e.id),d(2),p(e.status),d(7),Z(" ",e.species," - ",e.breed),d(6),ue(" ",e.age),d(6),ue(" ",e.weight),d(6),ue(" ",e.owner)}}function io(i,a){i&1&&(r(0,"p",42),l(1,"No se encontraron pacientes."),o())}function ao(i,a){if(i&1&&(r(0,"div",21),M(1,no,48,10,"div",41,pt,!1,io,2,0,"p",42),o()),i&2){let e=f();d(),w(e.filteredPatients)}}function oo(i,a){i&1&&(r(0,"mat-icon",40),l(1,"people"),o(),l(2," Clientes"))}function ro(i,a){i&1&&(r(0,"mat-icon",40),l(1,"medical_services"),o(),l(2," Consultas"))}function lo(i,a){if(i&1&&(r(0,"tr")(1,"td",55),l(2),o(),r(3,"td")(4,"div",56)(5,"div",57)(6,"mat-icon"),l(7,"pets"),o()(),r(8,"div")(9,"div",58),l(10),o(),r(11,"div",59),l(12),o()()()(),r(13,"td")(14,"div",58),l(15),o(),r(16,"div",59),l(17),o()(),r(18,"td"),l(19),o(),r(20,"td"),l(21),o(),r(22,"td")(23,"div",58),l(24),o(),r(25,"div",59),l(26),o()(),r(27,"td")(28,"span",60),l(29),o()()()),i&2){let e=a.$implicit,t=f();d(2),p(e.id),d(3),I("background",e.patientAvatarColor),d(5),p(e.patientName),d(2),p(e.patientBreed),d(3),p(e.clientName),d(2),p(e.clientPhone),d(2),p(e.type),d(2),p(e.diagnosis),d(3),p(e.date),d(2),p(e.time),d(2),_("ngClass",t.getConsultBadge(e.status)),d(),p(e.status)}}function so(i,a){i&1&&(r(0,"tr")(1,"td",61),l(2,"No hay consultas."),o()())}function co(i,a){if(i&1){let e=V();r(0,"button",62),u("click",function(){let n=S(e).$implicit,s=f();return T(s.consultPage=n)}),l(1),o()}if(i&2){let e=a.$implicit,t=f();v("active",t.consultPage===e),d(),p(e)}}function mo(i,a){i&1&&(r(0,"mat-icon",40),l(1,"assignment"),o(),l(2," Historial Cl\xEDnico"))}function po(i,a){if(i&1){let e=V();r(0,"div",32)(1,"mat-icon"),l(2,"assignment_ind"),o(),r(3,"h3"),l(4,"Selecciona un paciente"),o(),r(5,"p"),l(6,'Haz clic en "Ver Ficha" desde la pesta\xF1a de Pacientes'),o(),r(7,"button",63),u("click",function(){S(e);let n=f();return T(n.activeTab=0)}),l(8,"Ir a Pacientes"),o()()}}function fo(i,a){if(i&1&&(r(0,"div",70)(1,"div",73),l(2),o(),r(3,"div",74),l(4),o()()),i&2){let e=a.$implicit;d(2),p(e.value),d(2),p(e.label)}}function uo(i,a){i&1&&(r(0,"p",42),l(1,"No hay consultas registradas para este paciente."),o())}function ho(i,a){if(i&1&&(r(0,"div",82)(1,"div",83),l(2),o(),r(3,"p",84),l(4),o()()),i&2){let e=a.$implicit;d(2),p(e.label),d(2),p(e.content)}}function bo(i,a){if(i&1&&(r(0,"div",76)(1,"div",77)(2,"mat-icon"),l(3),o(),r(4,"span",78),l(5),o(),r(6,"span",79),l(7),o(),r(8,"span",80),l(9),o()(),r(10,"div",81),M(11,ho,5,2,"div",82,ft),o()()),i&2){let e=a.$implicit;I("border-left","4px solid "+e.borderColor),d(),I("background",e.bg),d(),I("color",e.color),d(),p(e.icon),d(),I("color",e.color),d(),p(e.type),d(2),p(e.date),d(2),p(e.doctor),d(2),w(e.sections)}}function _o(i,a){if(i&1&&(r(0,"div",72),M(1,bo,13,12,"div",75,Ja),o()),i&2){let e=f(2);d(),w(e.historyRecords)}}function go(i,a){if(i&1){let e=V();r(0,"div",64)(1,"div",65)(2,"mat-icon"),l(3,"pets"),o()(),r(4,"div",66)(5,"h2"),l(6),o(),r(7,"p"),l(8),o()(),r(9,"div",67)(10,"button",10),u("click",function(){S(e);let n=f();return T(n.openNuevaConsulta(n.store.selectedPatientId()))}),r(11,"mat-icon"),l(12,"add"),o(),l(13," Nueva Consulta "),o(),r(14,"button",68)(15,"mat-icon"),l(16,"bookmark_border"),o()()()(),r(17,"div",69),M(18,fo,5,2,"div",70,ft),o(),r(20,"div",71),l(21,"Historial M\xE9dico Completo"),o(),x(22,uo,2,0,"p",42)(23,_o,3,0,"div",72)}if(i&2){let e=f();d(),I("background",e.historyPatient.avatarColor),d(5),p(e.historyPatient.name),d(2),cn("",e.historyPatient.breed," \xB7 ",e.historyPatient.age," \xB7 Propietario: ",e.historyPatient.owner),d(10),w(e.historyPatient.stats),d(4),y(e.historyRecords.length===0?22:23)}}function vo(i,a){i&1&&(r(0,"mat-icon",40),l(1,"vaccines"),o(),l(2," Vacunas"))}function xo(i,a){if(i&1){let e=V();r(0,"button",85),u("click",function(){let n=S(e).$implicit,s=f();return T(s.vaccineFilter=n)}),l(1),o()}if(i&2){let e=a.$implicit,t=f();v("chip-active",t.vaccineFilter===e),d(),p(e)}}function yo(i,a){if(i&1&&(r(0,"div",86)(1,"mat-icon",87),l(2),o(),r(3,"div",88),l(4),o(),r(5,"div",89),l(6),o(),r(7,"div",90),l(8),o()()),i&2){let e=a.$implicit;I("background",e.bg),d(),I("color",e.color),d(),p(e.icon),d(),I("color",e.color),d(),p(e.value),d(),I("color",e.color),d(),p(e.label),d(2),p(e.sublabel)}}function Co(i,a){i&1&&l(0," Ver Detalles ")}function Mo(i,a){i&1&&l(0," Programar ")}function wo(i,a){i&1&&l(0," Aplicar Ya ")}function ko(i,a){if(i&1){let e=V();r(0,"tr")(1,"td")(2,"div",56)(3,"div",57)(4,"mat-icon"),l(5,"pets"),o()(),r(6,"div")(7,"div",58),l(8),o(),r(9,"div",59),l(10),o()()()(),r(11,"td")(12,"div",58),l(13),o(),r(14,"div",59),l(15),o()(),r(16,"td"),l(17),o(),r(18,"td"),l(19),o(),r(20,"td")(21,"span",60),l(22),o()(),r(23,"td")(24,"button",91),u("click",function(){let n=S(e).$implicit,s=f();return T(s.openRegistrarVacuna(n.mascotaId))}),x(25,Co,1,0)(26,Mo,1,0)(27,wo,1,0),o()()()}if(i&2){let e=a.$implicit,t=f();d(3),I("background",e.patientAvatarColor),d(5),p(e.patientName),d(2),p(e.patientBreed),d(3),p(e.vaccineName),d(2),p(e.vaccineDesc),d(2),p(e.lastApplied),d(),v("text-danger",e.nextDoseHighlight),d(),p(e.nextDose),d(2),_("ngClass",t.getVaccineBadge(e.status)),d(),p(e.status),d(3),y(e.status==="Al D\xEDa"?25:e.status==="Pr\xF3xima"?26:27)}}function So(i,a){i&1&&(r(0,"tr")(1,"td",92),l(2,"No hay vacunas."),o()())}function To(i,a){i&1&&(r(0,"mat-icon",40),l(1,"local_hospital"),o(),l(2," Hospitalizaci\xF3n"))}function Eo(i,a){if(i&1&&(r(0,"div",38)(1,"div")(2,"div",93),l(3),o(),r(4,"div",94),l(5),o(),r(6,"div",95),l(7),o()(),r(8,"div",96)(9,"mat-icon"),l(10),o()()()),i&2){let e=a.$implicit;d(3),p(e.label),d(),I("color",e.color),d(),p(e.value),d(2),p(e.sublabel),d(),I("background",e.bg),d(),I("color",e.color),d(),p(e.icon)}}function Io(i,a){if(i&1){let e=V();r(0,"button",85),u("click",function(){let n=S(e).$implicit,s=f();return T(s.hospitalizationFilter=n)}),l(1),o()}if(i&2){let e=a.$implicit,t=f();v("chip-active",t.hospitalizationFilter===e),d(),Z(" ",e," (",t.getHospCount(e),") ")}}function Fo(i,a){if(i&1&&(r(0,"li"),l(1),o()),i&2){let e=a.$implicit;d(),ue("\u2022 ",e)}}function Po(i,a){if(i&1){let e=V();r(0,"tr")(1,"td")(2,"div",56)(3,"div",57)(4,"mat-icon"),l(5,"pets"),o()(),r(6,"div")(7,"div",58),l(8),o(),r(9,"div",59),l(10),o()()()(),r(11,"td")(12,"div",58),l(13),o(),r(14,"div",59),l(15),o()(),r(16,"td")(17,"span",60),l(18),o()(),r(19,"td")(20,"div",58),l(21),o(),r(22,"div",59),l(23),o()(),r(24,"td"),l(25),o(),r(26,"td")(27,"ul",97),M(28,Fo,2,1,"li",null,q),o()(),r(30,"td")(31,"div",98)(32,"button",99),u("click",function(){let n=S(e).$implicit,s=f();return T(s.verFicha(n.mascotaId))}),r(33,"mat-icon"),l(34,"visibility"),o()(),r(35,"button",100),u("click",function(){let n=S(e).$implicit,s=f();return T(s.openRegistrarIngreso(n.mascotaId))}),r(36,"mat-icon"),l(37,"edit"),o()()()()()}if(i&2){let e=a.$implicit,t=f();d(3),I("background",e.patientAvatarColor),d(5),p(e.patientName),d(2),Z("",e.patientBreed," \xB7 ",e.patientAge),d(3),p(e.ownerName),d(2),p(e.ownerPhone),d(2),_("ngClass",t.getHospBadge(e.status)),d(),ue("\u2022 ",e.status),d(3),p(e.admissionDate),d(2),p(e.daysAgo),d(2),p(e.diagnosis),d(3),w(e.treatments)}}function Do(i,a){i&1&&(r(0,"tr")(1,"td",61),l(2,"No hay pacientes hospitalizados."),o()())}var Ht=5,Ci=class i{store=c(Ee);svc=c(le);dialog=c(Hn);snack=c(me);activeTab=0;patientSearch="";speciesFilter="Todas";vaccineFilter="Todas";hospitalizationFilter="Todos";consultDateFilter="all";consultPage=1;get filteredPatients(){let a=this.patientSearch.toLowerCase();return this.store.patients().filter(e=>(a===""||e.name.toLowerCase().includes(a)||e.owner.toLowerCase().includes(a)||e.id.includes(a))&&(this.speciesFilter==="Todas"||e.species===this.speciesFilter))}get filteredConsultations(){let a=new Date().toISOString().split("T")[0],e=new Date(Date.now()-7*864e5).toISOString().split("T")[0];return this.store.consultations().filter(t=>this.consultDateFilter==="today"?t.rawDate===a:this.consultDateFilter==="week"?t.rawDate>=e:!0)}get consultTotalPages(){return Math.max(1,Math.ceil(this.filteredConsultations.length/Ht))}get pagedConsultations(){let a=(this.consultPage-1)*Ht;return this.filteredConsultations.slice(a,a+Ht)}get consultPageNumbers(){return Array.from({length:this.consultTotalPages},(a,e)=>e+1)}setConsultFilter(a){this.consultDateFilter=a,this.consultPage=1}get filteredVaccines(){return this.vaccineFilter==="Pr\xF3ximas"?this.store.vaccines().filter(a=>a.status==="Pr\xF3xima"):this.vaccineFilter==="Vencidas"?this.store.vaccines().filter(a=>a.status==="Vencida"):this.store.vaccines()}get vaccineSummary(){let a=this.store.vaccines();return[{label:"Vacunas Vencidas",sublabel:"Requieren atenci\xF3n inmediata",value:a.filter(e=>e.status==="Vencida").length,color:"#EF4444",bg:"#FEF2F2",icon:"error"},{label:"Pr\xF3ximas 7 d\xEDas",sublabel:"Programar citas pronto",value:a.filter(e=>e.status==="Pr\xF3xima").length,color:"#F59E0B",bg:"#FFFBEB",icon:"schedule"},{label:"Al D\xEDa",sublabel:"Vacunaci\xF3n completa",value:a.filter(e=>e.status==="Al D\xEDa").length,color:"#22C55E",bg:"#F0FDF4",icon:"check_circle"}]}get filteredHospitalizations(){return this.hospitalizationFilter==="Todos"?this.store.hospitalizations():this.store.hospitalizations().filter(a=>a.status===this.hospitalizationFilter)}getHospCount(a){return a==="Todos"?this.store.hospitalizations().length:this.store.hospitalizations().filter(e=>e.status===a).length}get hospitalStats(){let a=this.store.hospitalizations();return[{label:"Total Hospitalizados",sublabel:"Pacientes activos",value:a.length,icon:"local_hospital",color:"#3B82F6",bg:"#EFF6FF"},{label:"Estado Cr\xEDtico",sublabel:"Requieren atenci\xF3n inmediata",value:a.filter(e=>e.status==="Cr\xEDtico").length,icon:"favorite",color:"#EF4444",bg:"#FEF2F2"},{label:"En Recuperaci\xF3n",sublabel:"Progreso favorable",value:a.filter(e=>e.status==="Recuperaci\xF3n").length,icon:"person",color:"#F59E0B",bg:"#FFFBEB"}]}get selectedConsultations(){let a=this.store.selectedPatient();return a?this.store.consultations().filter(e=>e.mascotaId===a.id):[]}get historyPatient(){let a=this.store.selectedPatient();if(!a)return null;let e=this.selectedConsultations;return{name:a.name,breed:a.breed,age:a.age,owner:a.owner,avatarColor:a.avatarColor,stats:[{label:"Total Consultas",value:String(e.length)},{label:"Vacunas Aplicadas",value:String(this.store.vaccines().filter(t=>t.mascotaId===a.id).length)},{label:"Hospitalizaciones",value:String(this.store.hospitalizations().filter(t=>t.mascotaId===a.id).length)},{label:"\xDAltima Visita",value:e.length>0?e[0].date:"\u2014"}]}}get historyRecords(){return this.selectedConsultations.map(a=>({type:a.type,date:a.date,doctor:a.veterinario??"Veterinario",color:"#22C55E",bg:"#F0FDF4",borderColor:"#22C55E",icon:"medical_services",sections:[...a.subjetivo?[{label:"Subjetivo (S)",type:"text",content:a.subjetivo}]:[],...a.objetivo?[{label:"Objetivo (O)",type:"text",content:a.objetivo}]:[],...a.diagnosis?[{label:"Evaluaci\xF3n (A)",type:"text",content:a.diagnosis}]:[],...a.plan?[{label:"Plan (P)",type:"text",content:a.plan}]:[]]}))}getConsultBadge(a){return{Completada:"badge-completada","En Proceso":"badge-en-proceso",Cr\u00EDtico:"badge-critico",Pendiente:"badge-pendiente"}[a]??""}getVaccineBadge(a){return{"Al D\xEDa":"badge-al-dia",Pr\u00F3xima:"badge-proxima",Vencida:"badge-vencida"}[a]??""}getHospBadge(a){return{Cr\u00EDtico:"badge-critico",Estable:"badge-estable",Recuperaci\u00F3n:"badge-recuperacion"}[a]??""}verFicha(a){this.store.selectPatient(a),this.activeTab=3}openNuevaConsulta(a){this.dialog.open(Gn,{width:"640px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarPaciente(a){this.dialog.open(Kn,{width:"580px",data:{patient:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openNuevaCita(a){this.dialog.open($n,{width:"520px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarVacuna(a){this.dialog.open(dt,{width:"560px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarIngreso(a){this.dialog.open(ct,{width:"560px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarCliente(){this.dialog.open(mt,{width:"500px"}).afterClosed().subscribe(a=>{a&&this.store.reload()})}deletePatient(a){confirm(`\xBFEliminar a ${a.name}? Esta acci\xF3n no se puede deshacer.`)&&this.svc.deleteMascota(a.id).subscribe({next:()=>{this.snack.open("Paciente eliminado","OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open("Error al eliminar","",{duration:3e3})})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=F({type:i,selectors:[["app-clinical-management"]],decls:196,vars:20,consts:[[1,"clinical"],[1,"page-header"],[1,"header-search"],[1,"search-icon"],["placeholder","Buscar paciente o cliente...",1,"header-search-input"],[1,"notif-icon"],["animationDuration","0ms",1,"clinical-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"tab-content"],[1,"section-header"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"filters-row"],[1,"search-wrap"],["placeholder","Buscar por nombre, ID o propietario...",1,"filter-input",3,"ngModelChange","ngModel"],[1,"species-wrap"],[1,"species-select",3,"valueChange","value"],["value","Todas"],["value","Perro"],["value","Gato"],["value","Ave"],[1,"loading-msg"],[1,"patients-grid"],[1,"tab-content","empty-tab"],[1,"card","table-card"],[1,"table-top"],[1,"table-actions"],["mat-stroked-button","",1,"btn-sm",3,"click"],[1,"data-table"],[1,"table-footer"],[1,"pagination"],["mat-icon-button","",3,"click","disabled"],[1,"pg-btn",3,"active"],[1,"empty-tab"],[1,"chips-row"],[1,"chip",3,"chip-active"],[1,"vsummary-grid"],[1,"vsummary",3,"background"],[1,"hosp-stats-row"],[1,"hosp-stat-card"],[1,"table-title"],[1,"tab-icon"],[1,"patient-card"],[1,"empty-msg"],[1,"pc-top"],[1,"pc-avatar"],[1,"pc-title"],[1,"pc-name"],[1,"pc-id"],[1,"badge","badge-activo"],[1,"pc-details"],[1,"pc-row"],[1,"pc-actions"],["mat-button","",1,"btn-ver-ficha",3,"click"],["mat-icon-button","","title","Editar",3,"click"],["mat-icon-button","","title","Eliminar",3,"click"],[1,"td-id"],[1,"td-patient"],[1,"td-avatar"],[1,"td-name"],[1,"td-sub"],[1,"badge",3,"ngClass"],["colspan","7",1,"empty-msg"],[1,"pg-btn",3,"click"],["mat-stroked-button","",3,"click"],[1,"history-header"],[1,"hist-avatar"],[1,"hist-info"],[1,"hist-actions"],["mat-icon-button",""],[1,"hist-stats"],[1,"hist-stat"],[1,"hist-section-title"],[1,"timeline"],[1,"hs-val"],[1,"hs-lbl"],[1,"tl-card",3,"border-left"],[1,"tl-card"],[1,"tl-header"],[1,"tl-type"],[1,"tl-date"],[1,"tl-doc"],[1,"tl-body"],[1,"tl-section"],[1,"tl-label"],[1,"tl-text"],[1,"chip",3,"click"],[1,"vsummary"],[1,"vs-icon"],[1,"vs-val"],[1,"vs-label"],[1,"vs-sub"],["mat-button","",1,"action-link",3,"click"],["colspan","6",1,"empty-msg"],[1,"hosp-stat-label"],[1,"hosp-stat-val"],[1,"hosp-stat-sub"],[1,"hosp-stat-icon"],[1,"treat-list"],[1,"td-actions"],["mat-icon-button","","title","Ver ficha",3,"click"],["mat-icon-button","","title","Editar ingreso",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),l(4,"Gesti\xF3n Cl\xEDnica"),o(),r(5,"p"),l(6,"Administra pacientes, consultas e historial m\xE9dico"),o()(),r(7,"div",2)(8,"mat-icon",3),l(9,"search"),o(),g(10,"input",4),r(11,"mat-icon",5),l(12,"notifications"),o()()(),r(13,"mat-tab-group",6),Xe("selectedIndexChange",function(s){return Ue(t.activeTab,s)||(t.activeTab=s),s}),r(14,"mat-tab"),R(15,eo,3,0,"ng-template",7),r(16,"div",8)(17,"div",9)(18,"div")(19,"h2"),l(20,"Pacientes Registrados"),o(),r(21,"p"),l(22,"Gestiona la informaci\xF3n de las mascotas"),o()(),r(23,"button",10),u("click",function(){return t.openRegistrarPaciente()}),r(24,"mat-icon"),l(25,"add"),o(),l(26," Registrar Paciente "),o()(),r(27,"div",11)(28,"div",12)(29,"mat-icon"),l(30,"search"),o(),r(31,"input",13),Xe("ngModelChange",function(s){return Ue(t.patientSearch,s)||(t.patientSearch=s),s}),o()(),r(32,"div",14)(33,"mat-select",15),Xe("valueChange",function(s){return Ue(t.speciesFilter,s)||(t.speciesFilter=s),s}),r(34,"mat-option",16),l(35,"Todas las especies"),o(),r(36,"mat-option",17),l(37,"Perro"),o(),r(38,"mat-option",18),l(39,"Gato"),o(),r(40,"mat-option",19),l(41,"Ave"),o()()()(),x(42,to,2,0,"div",20)(43,ao,4,1,"div",21),o()(),r(44,"mat-tab"),R(45,oo,3,0,"ng-template",7),r(46,"div",22)(47,"mat-icon"),l(48,"people_outline"),o(),r(49,"h3"),l(50,"M\xF3dulo de Clientes"),o(),r(51,"p"),l(52,"Gestiona la informaci\xF3n de los propietarios"),o(),r(53,"button",10),u("click",function(){return t.openRegistrarCliente()}),r(54,"mat-icon"),l(55,"add"),o(),l(56," Registrar Cliente "),o()()(),r(57,"mat-tab"),R(58,ro,3,0,"ng-template",7),r(59,"div",8)(60,"div",9)(61,"div")(62,"h2"),l(63,"Consultas M\xE9dicas"),o(),r(64,"p"),l(65,"Registra y gestiona consultas veterinarias"),o()(),r(66,"button",10),u("click",function(){return t.openNuevaConsulta()}),r(67,"mat-icon"),l(68,"add"),o(),l(69," Nueva Consulta "),o()(),r(70,"div",23)(71,"div",24)(72,"h3"),l(73,"Consultas Recientes"),o(),r(74,"div",25)(75,"button",26),u("click",function(){return t.setConsultFilter("all")}),l(76,"Todas"),o(),r(77,"button",26),u("click",function(){return t.setConsultFilter("today")}),l(78,"Hoy"),o(),r(79,"button",26),u("click",function(){return t.setConsultFilter("week")}),l(80,"Esta semana"),o()()(),r(81,"table",27)(82,"thead")(83,"tr")(84,"th"),l(85,"ID"),o(),r(86,"th"),l(87,"Paciente"),o(),r(88,"th"),l(89,"Cliente"),o(),r(90,"th"),l(91,"Tipo"),o(),r(92,"th"),l(93,"Diagn\xF3stico"),o(),r(94,"th"),l(95,"Fecha"),o(),r(96,"th"),l(97,"Estado"),o()()(),r(98,"tbody"),M(99,lo,30,13,"tr",null,pt,!1,so,3,0,"tr"),o()(),r(102,"div",28)(103,"span"),l(104),o(),r(105,"div",29)(106,"button",30),u("click",function(){return t.consultPage=t.consultPage-1}),r(107,"mat-icon"),l(108,"chevron_left"),o()(),M(109,co,2,3,"button",31,q),r(111,"button",30),u("click",function(){return t.consultPage=t.consultPage+1}),r(112,"mat-icon"),l(113,"chevron_right"),o()()()()()()(),r(114,"mat-tab"),R(115,mo,3,0,"ng-template",7),r(116,"div",8),x(117,po,9,0,"div",32)(118,go,24,7),o()(),r(119,"mat-tab"),R(120,vo,3,0,"ng-template",7),r(121,"div",8)(122,"div",9)(123,"div",33),M(124,xo,2,3,"button",34,q),o(),r(126,"button",10),u("click",function(){return t.openRegistrarVacuna()}),r(127,"mat-icon"),l(128,"add"),o(),l(129," Registrar Vacuna "),o()(),r(130,"div",35),M(131,yo,9,12,"div",36,ft),o(),r(133,"div",23)(134,"table",27)(135,"thead")(136,"tr")(137,"th"),l(138,"Paciente"),o(),r(139,"th"),l(140,"Vacuna"),o(),r(141,"th"),l(142,"\xDAltima Aplicaci\xF3n"),o(),r(143,"th"),l(144,"Pr\xF3xima Dosis"),o(),r(145,"th"),l(146,"Estado"),o(),r(147,"th"),l(148,"Acciones"),o()()(),r(149,"tbody"),M(150,ko,28,13,"tr",null,pt,!1,So,3,0,"tr"),o()()()()(),r(153,"mat-tab"),R(154,To,3,0,"ng-template",7),r(155,"div",8)(156,"div",9)(157,"div")(158,"h2"),l(159,"Pacientes Hospitalizados"),o(),r(160,"p"),l(161,"Gesti\xF3n y seguimiento de pacientes en hospitalizaci\xF3n"),o()(),r(162,"button",10),u("click",function(){return t.openRegistrarIngreso()}),r(163,"mat-icon"),l(164,"add"),o(),l(165," Registrar Ingreso "),o()(),r(166,"div",37),M(167,Eo,11,10,"div",38,ft),o(),r(169,"div",33),M(170,Io,2,4,"button",34,q),o(),r(172,"div",23)(173,"h3",39),l(174,"Lista de Pacientes"),o(),r(175,"table",27)(176,"thead")(177,"tr")(178,"th"),l(179,"Paciente"),o(),r(180,"th"),l(181,"Propietario"),o(),r(182,"th"),l(183,"Estado"),o(),r(184,"th"),l(185,"Fecha Ingreso"),o(),r(186,"th"),l(187,"Diagn\xF3stico"),o(),r(188,"th"),l(189,"Tratamiento"),o(),r(190,"th"),l(191,"Acciones"),o()()(),r(192,"tbody"),M(193,Po,38,12,"tr",null,pt,!1,Do,3,0,"tr"),o()()()()()()()),e&2&&(d(13),Ze("selectedIndex",t.activeTab),d(18),Ze("ngModel",t.patientSearch),d(2),Ze("value",t.speciesFilter),d(9),y(t.store.loading()?42:43),d(33),v("btn-sm-active",t.consultDateFilter==="all"),d(2),v("btn-sm-active",t.consultDateFilter==="today"),d(2),v("btn-sm-active",t.consultDateFilter==="week"),d(20),w(t.pagedConsultations),d(5),Z("Mostrando ",t.pagedConsultations.length," de ",t.filteredConsultations.length," consultas"),d(2),_("disabled",t.consultPage<=1),d(3),w(t.consultPageNumbers),d(2),_("disabled",t.consultPage>=t.consultTotalPages),d(6),y(t.historyPatient?118:117),d(7),w(bt(18,Ua)),d(7),w(t.vaccineSummary),d(19),w(t.filteredVaccines),d(17),w(t.hospitalStats),d(3),w(bt(19,Xa)),d(23),w(t.filteredHospitalizations))},dependencies:[un,ne,te,oe,ae,On,ni,Ft,Pt,ti,vi,gi,Je,Qn,se,de,qn,re],styles:[".clinical[_ngcontent-%COMP%]{min-height:100%}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.header-search-input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:8px 14px 8px 36px;font-size:13px;outline:none;width:260px;margin-left:-30px}.search-icon[_ngcontent-%COMP%]{font-size:18px;color:#94a3b8}.notif-icon[_ngcontent-%COMP%]{color:#64748b;cursor:pointer}.clinical-tabs[_ngcontent-%COMP%]{background:#fff}  .clinical-tabs .mat-mdc-tab{min-width:120px}  .clinical-tabs .mat-mdc-tab-header{border-bottom:1px solid #E2E8F0;padding:0 20px}  .clinical-tabs .mdc-tab--active .mdc-tab__text-label{color:#06b6d4!important}  .clinical-tabs .mdc-tab-indicator__content--underline{border-color:#06b6d4!important}.tab-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:4px;vertical-align:middle}.tab-content[_ngcontent-%COMP%]{padding:24px 28px}.empty-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;gap:12px;color:#94a3b8}.empty-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#475569;margin:0}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin:0 0 4px;color:#1e293b}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.filters-row[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.search-wrap[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 12px}.search-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8;font-size:18px}.filter-input[_ngcontent-%COMP%]{border:none;outline:none;font-size:13px;flex:1;padding:10px 0;background:transparent}.species-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 8px}.species-select[_ngcontent-%COMP%]{border:none!important}  .species-select .mat-mdc-select-trigger{padding:8px 0}.filter-icon-btn[_ngcontent-%COMP%]{color:#475569}.patients-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.patient-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 3px #0000000f;border:1px solid #F1F5F9}.pc-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.pc-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pc-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:22px;width:22px;height:22px}.pc-title[_ngcontent-%COMP%]{flex:1}.pc-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b}.pc-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.pc-details[_ngcontent-%COMP%]{margin-bottom:12px}.pc-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#475569;padding:3px 0}.pc-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#94a3b8}.pc-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#94a3b8}.pc-actions[_ngcontent-%COMP%]{display:flex;align-items:center;border-top:1px solid #F1F5F9;padding-top:10px}.btn-ver-ficha[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:13px!important;flex:1;justify-content:flex-start!important}.btn-ver-ficha[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f;overflow:hidden}.table-card[_ngcontent-%COMP%]{overflow:auto}.table-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 20px}.table-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin:0;color:#1e293b}.table-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.btn-sm[_ngcontent-%COMP%]{border-radius:6px!important;font-size:12px!important;color:#475569!important;border-color:#e2e8f0!important}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-size:12px;font-weight:600;color:#94a3b8;padding:10px 16px;background:#f8fafc;border-bottom:1px solid #E2E8F0;text-transform:uppercase;letter-spacing:.5px}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;border-bottom:1px solid #F8FAFC;font-size:13px;color:#475569;vertical-align:middle}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f8fafc}.td-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;font-family:monospace}.td-patient[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.td-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.td-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:16px;width:16px;height:16px}.td-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b}.td-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.table-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-top:1px solid #F1F5F9;font-size:12px;color:#94a3b8}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.pg-btn[_ngcontent-%COMP%]{width:28px;height:28px;border:1px solid #E2E8F0;border-radius:6px;background:#fff;font-size:12px;cursor:pointer;color:#475569}.pg-btn.active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.text-danger[_ngcontent-%COMP%]{color:#ef4444!important;font-weight:500}.action-link[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:12px!important}.td-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.vsummary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.vsummary[_ngcontent-%COMP%]{border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:4px}.vs-icon[_ngcontent-%COMP%]{font-size:24px!important;width:24px!important;height:24px!important}.vs-val[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.vs-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.vs-sub[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.chips-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}.chip[_ngcontent-%COMP%]{padding:6px 16px;border-radius:20px;border:1px solid #E2E8F0;background:#fff;font-size:13px;font-weight:500;color:#475569;cursor:pointer;transition:all .15s}.chip.chip-active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.hosp-stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.hosp-stat-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 3px #0000000f}.hosp-stat-label[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:4px}.hosp-stat-val[_ngcontent-%COMP%]{font-size:26px;font-weight:700}.hosp-stat-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.hosp-stat-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center}.hosp-stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.treat-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;font-size:12px;color:#475569}.treat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1px 0}.table-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;padding:16px 20px 0}.history-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:20px}.hist-avatar[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.hist-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px;width:30px;height:30px}.hist-info[_ngcontent-%COMP%]{flex:1}.hist-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 4px;color:#1e293b}.hist-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin:0}.hist-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.hist-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}.hist-stat[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:16px 20px;text-align:center;box-shadow:0 1px 3px #0000000f}.hs-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b}.hs-lbl[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-top:2px}.hist-section-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.tl-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px #0000000f}.tl-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px}.tl-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.tl-type[_ngcontent-%COMP%]{font-size:14px;font-weight:600;flex:1}.tl-date[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.tl-doc[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-left:8px}.tl-body[_ngcontent-%COMP%]{padding:16px}.tl-section[_ngcontent-%COMP%]{margin-bottom:14px}.tl-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.tl-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#475569;margin-bottom:6px}.tl-text[_ngcontent-%COMP%]{font-size:13px;color:#64748b;line-height:1.6;margin:0}.tl-vitals[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}.vital[_ngcontent-%COMP%]{background:#f8fafc;border-radius:6px;padding:8px 12px}.vital[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8;display:block}.vital[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;color:#1e293b}.tl-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 16px}.tl-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#64748b;padding:2px 0}"]})};export{Ci as ClinicalManagement};
