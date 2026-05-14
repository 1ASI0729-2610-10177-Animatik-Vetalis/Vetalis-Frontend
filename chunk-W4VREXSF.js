import{B as Ye,C as Ze,F as Ke,H as Xe,I as Je,J as et,K as tt,L as it,N as nt,P as at,Q as ot,a as ze,d as se,e as Ge,f as He,h as E,i as S,j as Q,l as We,m as qe,n as Qe,o as $,q as $e,t as U,v as Y,x as Ue,z as M}from"./chunk-EFOHE3XQ.js";import{b as je,c as Ve}from"./chunk-XGGPC5VX.js";import{A as W,C as oe,E as Re,I as Le,J as Ne,L as Be,M as q,P as k,r as ne,s as Se,t as Me,u as Fe,v as Pe,z as ae}from"./chunk-I5LDR5NP.js";import{$b as Ie,Ab as m,Bb as d,Cb as G,E as b,Hb as te,Ib as H,N as R,Nb as Te,Ob as xe,Pb as Oe,Qa as O,V as D,Va as ye,Vb as ie,W as L,Wa as be,Xb as u,Y as _,Ya as De,_ as o,a as p,b as pe,db as C,eb as j,fb as A,g as f,ga as g,ha as fe,hb as Ce,i as ee,ib as w,jb as V,ka as N,la as _e,nc as ke,pa as c,sb as I,ta as ve,tc as Ee,ua as B,v as P,wa as x,xb as Ae,y as ge,yb as we,z as T,zb as z}from"./chunk-5US2R7HC.js";function Dt(i,a){}var v=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var de=(()=>{class i extends He{_elementRef=o(x);_focusTrapFactory=o(Ne);_config;_interactivityChecker=o(Le);_ngZone=o(_e);_focusMonitor=o(Re);_renderer=o(De);_changeDetectorRef=o(Ee);_injector=o(g);_platform=o(Pe);_document=o(fe);_portalOutlet;_focusTrapped=new f;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=o(v,{optional:!0})||new v,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{s(),l(),e.removeAttribute("tabindex")},s=this._renderer.listen(e,"blur",n),l=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||ye(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=W(),s=this._elementRef.nativeElement;(!n||n===this._document.body||n===s||s.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=W();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=W()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&Te(E,7),t&2){let s;xe(s=Oe())&&(n._portalOutlet=s.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&I("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[w],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&V(0,Dt,0,0,"ng-template",0)},dependencies:[E],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),F=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new f;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!q(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},Ct=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=o(g);return()=>Q(i)}}),At=new _("DialogData"),wt=new _("DefaultDialogConfig");function Tt(i){let a=c(i),e=new N;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var ce=(()=>{class i{_injector=o(g);_defaultOptions=o(wt,{optional:!0});_parentDialog=o(i,{optional:!0,skipSelf:!0});_overlayContainer=o(qe);_idGenerator=o(k);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new f;_afterOpenedAtThisLevel=new f;_ariaHiddenElements=new Map;_scrollStrategy=o(Ct);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=P(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(R(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new v;t=p(p({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let s=this._getOverlayConfig(t),l=$e(this._injector,s),r=new F(l,t),h=this._attachContainer(l,r,t);if(r.containerInstance=h,!this.openDialogs.length){let J=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(b(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(J)}):this._hideNonDialogContentFromAssistiveTechnology(J)}return this._attachDialogContent(e,r,h,t),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){re(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){re(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),re(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new We({positionStrategy:e.positionStrategy||$().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let s=n.injector||n.viewContainerRef?.injector,l=[{provide:v,useValue:n},{provide:F,useValue:t},{provide:Qe,useValue:e}],r;n.container?typeof n.container=="function"?r=n.container:(r=n.container.type,l.push(...n.container.providers(n))):r=de;let h=new se(r,n.viewContainerRef,g.create({parent:s||this._injector,providers:l}));return e.attach(h).instance}_attachDialogContent(e,t,n,s){if(e instanceof be){let l=this._createInjector(s,t,n,void 0),r={$implicit:s.data,dialogRef:t};s.templateContext&&(r=p(p({},r),typeof s.templateContext=="function"?s.templateContext():s.templateContext)),n.attachTemplatePortal(new Ge(e,null,r,l))}else{let l=this._createInjector(s,t,n,this._injector),r=n.attachComponentPortal(new se(e,s.viewContainerRef,l));t.componentRef=r,t.componentInstance=r.instance}}_createInjector(e,t,n,s){let l=e.injector||e.viewContainerRef?.injector,r=[{provide:At,useValue:e.data},{provide:F,useValue:t}];return e.providers&&(typeof e.providers=="function"?r.push(...e.providers(t,e,n)):r.push(...e.providers)),e.direction&&(!l||!l.get(ne,null,{optional:!0}))&&r.push({provide:ne,useValue:Tt(e.direction)}),g.create({parent:l||s,providers:r})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,l)=>{s?l.setAttribute("aria-hidden",s):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let s=t[n];s!==e&&s.nodeName!=="SCRIPT"&&s.nodeName!=="STYLE"&&!s.hasAttribute("aria-live")&&!s.hasAttribute("popover")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function re(i,a){let e=i.length;for(;e--;)a(i[e])}var rt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=j({type:i});static \u0275inj=L({providers:[ce],imports:[U,S,Be,S]})}return i})();function xt(i,a){}var K=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},me="mdc-dialog--open",lt="mdc-dialog--opening",dt="mdc-dialog--closing",Ot=150,It=75,kt=(()=>{class i extends de{_animationStateChanged=new N;_animationsEnabled=!ae();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?mt(this._config.enterAnimationDuration)??Ot:0;_exitAnimationDuration=this._animationsEnabled?mt(this._config.exitAnimationDuration)??It:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ct,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(lt,me)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(me),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(me),this._animationsEnabled?(this._hostElement.style.setProperty(ct,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(dt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(lt,dt)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(te("id",n._config.id),I("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),ie("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[w],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(m(0,"div",0)(1,"div",1),V(2,xt,0,0,"ng-template",2),d()())},dependencies:[E],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),ct="--mat-dialog-transition-duration";function mt(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?oe(i.substring(0,i.length-2)):i.endsWith("s")?oe(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Z=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Z||{}),y=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ee(1);_beforeClosed=new ee(1);_result;_closeFallbackTimeout;_state=Z.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(T(n=>n.state==="opened"),b(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(T(n=>n.state==="closed"),b(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ge(this.backdropClick(),this.keydownEvents().pipe(T(n=>n.keyCode===27&&!this.disableClose&&!q(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),ut(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(T(t=>t.state==="closing"),b(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Z.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Z.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ut(i,a,e){return i._closeInteractionType=a,i.close(e)}var ue=new _("MatMdcDialogData"),Et=new _("mat-mdc-dialog-default-options"),St=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=o(g);return()=>Q(i)}}),he=(()=>{class i{_defaultOptions=o(Et,{optional:!0});_scrollStrategy=o(St);_parentDialog=o(i,{optional:!0,skipSelf:!0});_idGenerator=o(k);_injector=o(g);_dialog=o(ce);_animationsDisabled=ae();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new f;_afterOpenedAtThisLevel=new f;dialogConfigClass=K;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=P(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(R(void 0)));constructor(){this._dialogRefConstructor=y,this._dialogContainerType=kt,this._dialogDataToken=ue}open(e,t){let n;t=p(p({},this._defaultOptions||new K),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let s=this._dialog.open(e,pe(p({},t),{positionStrategy:$(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:v,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(l,r,h)=>(n=new this._dialogRefConstructor(l,t,h),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=s.componentRef,n.componentInstance=s.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ht=(()=>{class i{dialogRef=o(y,{optional:!0});_elementRef=o(x);_dialog=o(he);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=vt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){ut(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&H("click",function(l){return n._onButtonClick(l)}),t&2&&I("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ve]})}return i})(),pt=(()=>{class i{_dialogRef=o(y,{optional:!0});_elementRef=o(x);_dialog=o(he);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=vt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i})}return i})(),gt=(()=>{class i extends pt{id=o(k).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(i)))(n||i)}})();static \u0275dir=A({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&te("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[w]})}return i})(),ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ce([ze])]})}return i})(),_t=(()=>{class i extends pt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(i)))(n||i)}})();static \u0275dir=A({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&ie("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[w]})}return i})();function vt(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var yt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=j({type:i});static \u0275inj=L({providers:[he],imports:[rt,U,S,Se]})}return i})();var X=class i{svc=o(Y);patients=c([]);consultations=c([]);vaccines=c([]);hospitalizations=c([]);todayAppointments=c([]);loading=c(!0);rawEspecies=c([]);rawRazas=c([]);rawClientes=c([]);rawTiposVacuna=c([]);rawMascotas=c([]);rawVeterinarios=c([]);selectedPatientId=c(null);selectedPatient=ke(()=>{let a=this.selectedPatientId();return a?this.patients().find(e=>e.id===a)??null:null});constructor(){this.load()}reload(){this.loading.set(!0),this.load()}selectPatient(a){this.selectedPatientId.set(a)}load(){this.svc.loadAll().subscribe({next:a=>{this.patients.set(a.patients),this.consultations.set(a.consultations),this.vaccines.set(a.vaccines),this.hospitalizations.set(a.hospitalizations),this.todayAppointments.set(a.todayAppointments),this.rawEspecies.set(a.rawEspecies),this.rawRazas.set(a.rawRazas),this.rawClientes.set(a.rawClientes),this.rawTiposVacuna.set(a.rawTiposVacuna),this.rawMascotas.set(a.rawMascotas),this.rawVeterinarios.set(a.rawVeterinarios),this.loading.set(!1)},error:()=>this.loading.set(!1)})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ft=(i,a)=>a.id;function Pt(i,a){if(i&1&&(m(0,"option",6),u(1),d()),i&2){let e=a.$implicit;z("value",e.id),O(),Ie("",e.name," \u2014 ",e.species," (",e.owner,")")}}var bt=class i{fb=o(nt);ref=o(y);svc=o(Y);snack=o(ot);store=o(X);data=o(ue,{optional:!0});form=this.fb.group({mascotaId:[this.data?.patientId??"",M.required],fecha:[new Date().toISOString().split("T")[0],M.required],hora:["09:00",M.required],motivo:["",M.required]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={fecha:`${a.fecha}T${a.hora}:00`,motivo:a.motivo,estado:"PENDIENTE",mascotaId:a.mascotaId,veterinarioId:1};this.svc.createCita(e).subscribe({next:()=>{this.snack.open("Cita creada correctamente","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al crear la cita","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-nueva-cita-dialog"]],decls:33,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-row"],[1,"dlg-field","dlg-field-full"],["formControlName","mascotaId"],["value",""],[3,"value"],[1,"dlg-field"],["type","date","formControlName","fecha"],["type","time","formControlName","hora"],["type","text","formControlName","motivo","placeholder","Ej: Vacunaci\xF3n anual, Revisi\xF3n general..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(m(0,"h2",0),u(1,"Nueva Cita"),d(),m(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"div",3)(6,"label"),u(7,"Paciente *"),d(),m(8,"select",4)(9,"option",5),u(10,"Seleccionar paciente..."),d(),Ae(11,Pt,2,4,"option",6,Ft),d()()(),m(13,"div",2)(14,"div",7)(15,"label"),u(16,"Fecha *"),d(),G(17,"input",8),d(),m(18,"div",7)(19,"label"),u(20,"Hora *"),d(),G(21,"input",9),d()(),m(22,"div",7)(23,"label"),u(24,"Motivo / Tipo de consulta *"),d(),G(25,"input",10),d()()(),m(26,"mat-dialog-actions",11)(27,"button",12),u(28,"Cancelar"),d(),m(29,"button",13),H("click",function(){return t.submit()}),m(30,"mat-icon"),u(31,"event_available"),d(),u(32," Guardar Cita "),d()()),e&2&&(O(3),z("formGroup",t.form),O(8),we(t.store.patients()),O(18),z("disabled",t.form.invalid||t.submitting))},dependencies:[at,Ke,tt,it,Ue,et,Ye,Ze,Je,Xe,yt,ht,gt,_t,ft,Ve,je,Fe,Me],encapsulation:2})};export{y as a,ue as b,he as c,ht as d,gt as e,ft as f,_t as g,yt as h,X as i,bt as j};
