import{a as bi,b as vi,c as yi,d as Ci,e as Si}from"./chunk-WMIEUJ2E.js";import{a as jt,b as Jt,c as ei,d as $e,e as ti,f as ii,g as dt,h as ni}from"./chunk-ZPCD4TLB.js";import{a as gi,b as xi}from"./chunk-QZYBKJX5.js";import{a as ce,b as _i}from"./chunk-XSO5BQM7.js";import{a as ne,b as ae,c as hi,d as oe,e as le,f as re,g as de,h as G}from"./chunk-MTM3SF6Z.js";import{a as $}from"./chunk-NEU3OOPT.js";import{c as si,d as mi,l as pi,r as fi,t as ct,u as st,v as ui,w as Q}from"./chunk-4PFNYCIS.js";import{b as W,d as w,e as ai,f as q,g as Z,h as oi,i as li,j as J,k as ri,l as ee,m as K,n as ge,o as _e,p as xe,r as di,s as te,t as ci,u as ie}from"./chunk-IK2YHG2I.js";import"./chunk-LGPXEZYI.js";import{a as Qe,b as H,c as j}from"./chunk-GPXLBI6B.js";import{E as Zt,a as Gt,f as je,h as $t,n as Qt,q as Ut,s as Ge,t as Yt,v as Pe,w as Xt,x as rt}from"./chunk-TOPPFS3Q.js";import{A as N,B as V,d as Vt,e as Wt,f as qt,s as Kt,t as Ht,y as Ke,z as He}from"./chunk-G3XSK2OD.js";import{$b as s,Ab as a,Ac as Lt,Bb as i,Bc as qe,Cb as y,Db as Ft,E as yt,Eb as Ot,Ec as X,Fb as at,Fc as lt,Gb as z,Gc as Nt,Hb as It,J as Ct,Kb as g,Mb as h,N as ye,Nb as Me,O as nt,Ob as A,P as Y,Pb as Ne,Qa as r,Qb as Ee,Rb as C,Sb as S,Tb as kt,Ub as Pt,Vb as ot,W as ze,Wb as we,Xb as k,Y as B,Ya as Be,Yb as F,Zb as Tt,_ as f,_b as l,ac as x,bc as L,d as bt,da as O,db as P,dc as Dt,ea as I,eb as Le,ec as Fe,fa as St,fb as pe,fc as Oe,g as U,ga as Mt,gc as Ie,jb as T,jc as Ve,ka as Ae,la as Ce,lc as Rt,nc as m,oc as p,pa as se,pc as zt,q as be,rc as At,sa as Et,sb as fe,ta as wt,tb as b,ub as v,v as vt,vc as We,wa as me,wb as Se,xb as M,xc as Bt,y as he,yb as E,z as ve,zb as _,zc as ke}from"./chunk-CQB35AO6.js";var Te=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new U;constructor(n=!1,e,t=!0,d){this._multiple=n,this._emitChanges=t,this.compareWith=d,e&&e.length&&(n?e.forEach(c=>this._markSelected(c)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(c=>this._getConcreteValue(c)));n.forEach(c=>this._markSelected(c)),e.filter(c=>!t.has(this._getConcreteValue(c,t))).forEach(c=>this._unmarkSelected(c));let d=this._hasQueuedChanges();return this._emitChangeEvent(),d}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Zi=["notch"],Ji=["matFormFieldNotchedOutline",""],en=["*"],Mi=["iconPrefixContainer"],Ei=["textPrefixContainer"],wi=["iconSuffixContainer"],Fi=["textSuffixContainer"],tn=["textField"],nn=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],an=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function on(o,n){o&1&&y(0,"span",21)}function ln(o,n){if(o&1&&(a(0,"label",20),A(1,1),b(2,on,1,0,"span",21),i()),o&2){let e=h(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),r(2),v(!e.hideRequiredMarker&&e._control.required?2:-1)}}function rn(o,n){if(o&1&&b(0,ln,3,5,"label",20),o&2){let e=h();v(e._hasFloatingLabel()?0:-1)}}function dn(o,n){o&1&&y(0,"div",7)}function cn(o,n){}function sn(o,n){if(o&1&&T(0,cn,0,0,"ng-template",13),o&2){h(2);let e=we(1);_("ngTemplateOutlet",e)}}function mn(o,n){if(o&1&&(a(0,"div",9),b(1,sn,1,1,null,13),i()),o&2){let e=h();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),r(),v(e._forceDisplayInfixLabel()?-1:1)}}function pn(o,n){o&1&&(a(0,"div",10,2),A(2,2),i())}function fn(o,n){o&1&&(a(0,"div",11,3),A(2,3),i())}function un(o,n){}function hn(o,n){if(o&1&&T(0,un,0,0,"ng-template",13),o&2){h();let e=we(1);_("ngTemplateOutlet",e)}}function gn(o,n){o&1&&(a(0,"div",14,4),A(2,4),i())}function _n(o,n){o&1&&(a(0,"div",15,5),A(2,5),i())}function xn(o,n){o&1&&y(0,"div",16)}function bn(o,n){o&1&&(a(0,"div",18),A(1,6),i())}function vn(o,n){if(o&1&&(a(0,"mat-hint",22),l(1),i()),o&2){let e=h(2);_("id",e._hintLabelId),r(),s(e.hintLabel)}}function yn(o,n){if(o&1&&(a(0,"div",19),b(1,vn,2,2,"mat-hint",22),A(2,7),y(3,"div",23),A(4,8),i()),o&2){let e=h();r(),v(e.hintLabel?1:-1)}}var mt=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275dir=pe({type:o,selectors:[["mat-label"]]})}return o})(),Cn=new B("MatError");var pt=(()=>{class o{align="start";id=f(Pe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||o)};static \u0275dir=pe({type:o,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,d){t&2&&(It("id",d.id),fe("align",null),F("mat-mdc-form-field-hint-end",d.align==="end"))},inputs:{align:"align",id:"id"}})}return o})(),Sn=new B("MatPrefix");var Mn=new B("MatSuffix");var Ri=new B("FloatingLabelParent"),Oi=(()=>{class o{_elementRef=f(me);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=f(bi);_ngZone=f(Ce);_parent=f(Ri);_resizeSubscription=new bt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return En(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||o)};static \u0275dir=pe({type:o,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,d){t&2&&F("mdc-floating-label--float-above",d.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return o})();function En(o){let n=o;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Ii="mdc-line-ripple--active",Ue="mdc-line-ripple--deactivating",ki=(()=>{class o{_elementRef=f(me);_cleanupTransitionEnd;constructor(){let e=f(Ce),t=f(Be);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ue),e.add(Ii)}deactivate(){this._elementRef.nativeElement.classList.add(Ue)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,d=t.contains(Ue);e.propertyName==="opacity"&&d&&t.remove(Ii,Ue)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||o)};static \u0275dir=pe({type:o,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return o})(),Pi=(()=>{class o{_elementRef=f(me);_ngZone=f(Ce);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=P({type:o,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,d){if(t&1&&Ee(Zi,5),t&2){let c;C(c=S())&&(d._notch=c.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,d){t&2&&F("mdc-notched-outline--notched",d.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ji,ngContentSelectors:en,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,d){t&1&&(Me(),at(0,"div",1),Ft(1,"div",2,0),A(3),Ot(),at(4,"div",3))},encapsulation:2,changeDetection:0})}return o})(),ft=(()=>{class o{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||o)};static \u0275dir=pe({type:o})}return o})();var ut=new B("MatFormField"),wn=new B("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ti="fill",Fn="auto",Di="fixed",On="translateY(-50%)",zi=(()=>{class o{_elementRef=f(me);_changeDetectorRef=f(qe);_platform=f(Gt);_idGenerator=f(Pe);_ngZone=f(Ce);_defaults=f(wn,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ke("iconPrefixContainer");_textPrefixContainerSignal=ke("textPrefixContainer");_iconSuffixContainerSignal=ke("iconSuffixContainer");_textSuffixContainerSignal=ke("textSuffixContainer");_prefixSuffixContainers=We(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Lt(mt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Zt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Fn}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Ti;this._appearanceSignal.set(t)}_appearanceSignal=se(Ti);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Di}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Di}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new U;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=je();constructor(){let e=this._defaults,t=f(Ke);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Et(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=We(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,d="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(d+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(d+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ye([void 0,void 0]),be(()=>[t.errorState,t.userAriaDescribedBy]),Ct(),ve(([[c,u],[D,R]])=>c!==D||u!==R)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Y(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),he(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Nt({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=We(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let c=this._hintChildren?this._hintChildren.find(D=>D.align==="start"):null,u=this._hintChildren?this._hintChildren.find(D=>D.align==="end"):null;c?e.push(c.id):this._hintLabel&&e.push(this._hintLabelId),u&&e.push(u.id)}else this._errorChildren&&e.push(...this._errorChildren.map(c=>c.id));let t=this._control.describedByIds,d;if(t){let c=this._describedByIds||e;d=e.concat(t.filter(u=>u&&!c.includes(u)))}else d=e;this._control.setDescribedByIds(d),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,d=this._iconSuffixContainer?.nativeElement,c=this._textSuffixContainer?.nativeElement,u=e?.getBoundingClientRect().width??0,D=t?.getBoundingClientRect().width??0,R=d?.getBoundingClientRect().width??0,Gi=c?.getBoundingClientRect().width??0,$i=this._currentDirection==="rtl"?"-1":"1",Qi=`${u+D}px`,Ui=`calc(${$i} * (${Qi} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Yi=`var(--mat-mdc-form-field-label-transform, ${On} translateX(${Ui}))`,Xi=u+D+R+Gi;return[Yi,Xi]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,d]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),d!==null&&this._notchedOutline?._setMaxWidth(d)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=P({type:o,selectors:[["mat-form-field"]],contentQueries:function(t,d,c){if(t&1&&(kt(c,d._labelChild,mt,5),Ne(c,ft,5)(c,Sn,5)(c,Mn,5)(c,Cn,5)(c,pt,5)),t&2){ot();let u;C(u=S())&&(d._formFieldControl=u.first),C(u=S())&&(d._prefixChildren=u),C(u=S())&&(d._suffixChildren=u),C(u=S())&&(d._errorChildren=u),C(u=S())&&(d._hintChildren=u)}},viewQuery:function(t,d){if(t&1&&(Pt(d._iconPrefixContainerSignal,Mi,5)(d._textPrefixContainerSignal,Ei,5)(d._iconSuffixContainerSignal,wi,5)(d._textSuffixContainerSignal,Fi,5),Ee(tn,5)(Mi,5)(Ei,5)(wi,5)(Fi,5)(Oi,5)(Pi,5)(ki,5)),t&2){ot(4);let c;C(c=S())&&(d._textField=c.first),C(c=S())&&(d._iconPrefixContainer=c.first),C(c=S())&&(d._textPrefixContainer=c.first),C(c=S())&&(d._iconSuffixContainer=c.first),C(c=S())&&(d._textSuffixContainer=c.first),C(c=S())&&(d._floatingLabel=c.first),C(c=S())&&(d._notchedOutline=c.first),C(c=S())&&(d._lineRipple=c.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,d){t&2&&F("mat-mdc-form-field-label-always-float",d._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",d._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",d._hasIconSuffix)("mat-form-field-invalid",d._control.errorState)("mat-form-field-disabled",d._control.disabled)("mat-form-field-autofilled",d._control.autofilled)("mat-form-field-appearance-fill",d.appearance=="fill")("mat-form-field-appearance-outline",d.appearance=="outline")("mat-form-field-hide-placeholder",d._hasFloatingLabel()&&!d._shouldLabelFloat())("mat-primary",d.color!=="accent"&&d.color!=="warn")("mat-accent",d.color==="accent")("mat-warn",d.color==="warn")("ng-untouched",d._shouldForward("untouched"))("ng-touched",d._shouldForward("touched"))("ng-pristine",d._shouldForward("pristine"))("ng-dirty",d._shouldForward("dirty"))("ng-valid",d._shouldForward("valid"))("ng-invalid",d._shouldForward("invalid"))("ng-pending",d._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ve([{provide:ut,useExisting:o},{provide:Ri,useExisting:o}])],ngContentSelectors:an,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,d){if(t&1&&(Me(nn),T(0,rn,1,1,"ng-template",null,0,At),a(2,"div",6,1),g("click",function(u){return d._control.onContainerClick(u)}),b(4,dn,1,0,"div",7),a(5,"div",8),b(6,mn,2,2,"div",9),b(7,pn,3,0,"div",10),b(8,fn,3,0,"div",11),a(9,"div",12),b(10,hn,1,1,null,13),A(11),i(),b(12,gn,3,0,"div",14),b(13,_n,3,0,"div",15),i(),b(14,xn,1,0,"div",16),i(),a(15,"div",17),b(16,bn,2,0,"div",18)(17,yn,5,1,"div",19),i()),t&2){let c;r(2),F("mdc-text-field--filled",!d._hasOutline())("mdc-text-field--outlined",d._hasOutline())("mdc-text-field--no-label",!d._hasFloatingLabel())("mdc-text-field--disabled",d._control.disabled)("mdc-text-field--invalid",d._control.errorState),r(2),v(!d._hasOutline()&&!d._control.disabled?4:-1),r(2),v(d._hasOutline()?6:-1),r(),v(d._hasIconPrefix?7:-1),r(),v(d._hasTextPrefix?8:-1),r(2),v(!d._hasOutline()||d._forceDisplayInfixLabel()?10:-1),r(2),v(d._hasTextSuffix?12:-1),r(),v(d._hasIconSuffix?13:-1),r(),v(d._hasOutline()?-1:14),r(),F("mat-mdc-form-field-subscript-dynamic-size",d.subscriptSizing==="dynamic");let u=d._getSubscriptMessageType();r(),v((c=u)==="error"?16:c==="hint"?17:-1)}},dependencies:[Oi,Pi,qt,ki,pt],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return o})();var Ai=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Le({type:o});static \u0275inj=ze({imports:[Qt,zi,He]})}return o})();var Dn=["trigger"],Rn=["panel"],zn=[[["mat-select-trigger"]],"*"],An=["mat-select-trigger","*"];function Bn(o,n){if(o&1&&(a(0,"span",4),l(1),i()),o&2){let e=h();r(),s(e.placeholder)}}function Ln(o,n){o&1&&A(0)}function Nn(o,n){if(o&1&&(a(0,"span",11),l(1),i()),o&2){let e=h(2);r(),s(e.triggerValue)}}function Vn(o,n){if(o&1&&(a(0,"span",5),b(1,Ln,1,0)(2,Nn,2,1,"span",11),i()),o&2){let e=h();r(),v(e.customTrigger?1:2)}}function Wn(o,n){if(o&1){let e=z();a(0,"div",12,1),g("keydown",function(d){O(e);let c=h();return I(c._handleKeydown(d))}),A(2,1),i()}if(o&2){let e=h();Tt(e.panelClass),F("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),fe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var qn=new B("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=f(Mt);return()=>pi(o)}}),Kn=new B("MAT_SELECT_CONFIG"),Hn=new B("MatSelectTrigger"),ht=class{source;value;constructor(n,e){this.source=n,this.value=e}},Wi=(()=>{class o{_viewportRuler=f(si);_changeDetectorRef=f(qe);_elementRef=f(me);_dir=f(Ke,{optional:!0});_idGenerator=f(Pe);_renderer=f(Be);_parentFormField=f(ut,{optional:!0});ngControl=f(ai,{self:!0,optional:!0});_liveAnnouncer=f(Ut);_defaultOptions=f(Kn,{optional:!0});_animationsDisabled=je();_popoverLocation;_initialized=new U;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let d=this.panel.nativeElement,c=ti(e,this.options,this.optionGroups),u=t._getHostElement();e===0&&c===1?d.scrollTop=0:d.scrollTop=ii(u.offsetTop,u.offsetHeight,d.scrollTop,d.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ht(this,e)}_scrollStrategyFactory=f(qn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new U;_errorStateTracker;stateChanges=new U;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=se(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(w.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=vt(()=>{let e=this.options;return e?e.changes.pipe(ye(e),nt(()=>he(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(nt(()=>this.optionSelectionChanges))});openedChange=new Ae;_openedStream=this.openedChange.pipe(ve(e=>e),be(()=>{}));_closedStream=this.openedChange.pipe(ve(e=>!e),be(()=>{}));selectionChange=new Ae;valueChange=new Ae;constructor(){let e=f(jt),t=f(oi,{optional:!0}),d=f(K,{optional:!0}),c=f(new Bt("tabindex"),{optional:!0}),u=f(fi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ni(e,this.ngControl,d,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=c==null?0:parseInt(c)||0,this._popoverLocation=u?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Te(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Y(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Y(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ye(null),Y(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let d=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?d.setAttribute("aria-labelledby",e):d.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(yt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&rt(this._trackedModal,"aria-owns",t),Xt(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;rt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(d),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",c=>{c.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),d=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,d=t===40||t===38||t===37||t===39,c=t===13||t===32,u=this._keyManager;if(!u.isTyping()&&c&&!Ge(e)||(this.multiple||e.altKey)&&d)e.preventDefault(),this.open();else if(!this.multiple){let D=this.selected;u.onKeydown(e);let R=this.selected;R&&D!==R&&this._liveAnnouncer.announce(R.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,d=e.keyCode,c=d===40||d===38,u=t.isTyping();if(c&&e.altKey)e.preventDefault(),this.close();else if(!u&&(d===13||d===32)&&t.activeItem&&!Ge(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!u&&this._multiple&&d===65&&e.ctrlKey){e.preventDefault();let D=this.options.some(R=>!R.disabled&&!R.selected);this.options.forEach(R=>{R.disabled||(D?R.select():R.deselect())})}else{let D=t.activeItemIndex;t.onKeydown(e),this._multiple&&c&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==D&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ge(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(d=>{if(this._selectionModel.isSelected(d))return!1;try{return(d.value!=null||this.canSelectNullableOptions)&&this._compareWith(d.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ct?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Yt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=he(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Y(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),he(...this.options.map(t=>t._stateChanges)).pipe(Y(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let d=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(d!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),d!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,d)=>this.sortComparator?this.sortComparator(t,d,e):e.indexOf(t)-e.indexOf(d)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(d=>d.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=$t(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=P({type:o,selectors:[["mat-select"]],contentQueries:function(t,d,c){if(t&1&&Ne(c,Hn,5)(c,$e,5)(c,ei,5),t&2){let u;C(u=S())&&(d.customTrigger=u.first),C(u=S())&&(d.options=u),C(u=S())&&(d.optionGroups=u)}},viewQuery:function(t,d){if(t&1&&Ee(Dn,5)(Rn,5)(st,5),t&2){let c;C(c=S())&&(d.trigger=c.first),C(c=S())&&(d.panel=c.first),C(c=S())&&(d._overlayDir=c.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,d){t&1&&g("keydown",function(u){return d._handleKeydown(u)})("focus",function(){return d._onFocus()})("blur",function(){return d._onBlur()}),t&2&&(fe("id",d.id)("tabindex",d.disabled?-1:d.tabIndex)("aria-controls",d.panelOpen?d.id+"-panel":null)("aria-expanded",d.panelOpen)("aria-label",d.ariaLabel||null)("aria-required",d.required.toString())("aria-disabled",d.disabled.toString())("aria-invalid",d.errorState)("aria-activedescendant",d._getAriaActiveDescendant()),F("mat-mdc-select-disabled",d.disabled)("mat-mdc-select-invalid",d.errorState)("mat-mdc-select-required",d.required)("mat-mdc-select-empty",d.empty)("mat-mdc-select-multiple",d.multiple)("mat-select-open",d.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",X],disableRipple:[2,"disableRipple","disableRipple",X],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:lt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",X],placeholder:"placeholder",required:[2,"required","required",X],multiple:[2,"multiple","multiple",X],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",X],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",lt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",X]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ve([{provide:ft,useExisting:o},{provide:Jt,useExisting:o}]),wt],ngContentSelectors:An,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,d){if(t&1&&(Me(zn),a(0,"div",2,0),g("click",function(){return d.open()}),a(3,"div",3),b(4,Bn,2,1,"span",4)(5,Vn,3,1,"span",5),i(),a(6,"div",6)(7,"div",7),St(),a(8,"svg",8),y(9,"path",9),i()()()(),T(10,Wn,3,16,"ng-template",10),g("detach",function(){return d.close()})("backdropClick",function(){return d.close()})("overlayKeydown",function(u){return d._handleOverlayKeydown(u)})),t&2){let c=we(1);r(3),fe("id",d._valueId),r(),v(d.empty?4:5),r(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",d._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",d._scrollStrategy)("cdkConnectedOverlayOrigin",d._preferredOverlayOrigin||c)("cdkConnectedOverlayPositions",d._positions)("cdkConnectedOverlayWidth",d._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",d._popoverLocation)}},dependencies:[ct,st],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return o})();var qi=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Le({type:o});static \u0275inj=ze({imports:[ui,dt,He,mi,Ai,dt]})}return o})();var Ki=(o,n)=>n.id;function Gn(o,n){if(o&1&&(a(0,"option",5),l(1),i()),o&2){let e=n.$implicit;_("value",e.id),r(),L("",e.name," (",e.owner,")")}}function $n(o,n){if(o&1&&(a(0,"option",5),l(1),i()),o&2){let e=n.$implicit;_("value",e.id),r(),s(e.nombre)}}var Ye=class o{fb=f(te);ref=f(ne);svc=f($);snack=f(Q);store=f(ce);data=f(ae,{optional:!0});today=new Date().toISOString().split("T")[0];form=this.fb.group({mascotaId:[this.data?.patientId??"",w.required],tipoVacunaId:["",w.required],fechaAplicacion:[this.today,w.required],proximaDosis:["",w.required],lote:[""],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e=this.store.vaccines().map(u=>parseInt(u.id?.replace("V-","")??"0",10)).filter(u=>!isNaN(u)),t=(e.length?Math.max(...e):0)+1,c={id:`V-${String(t).padStart(3,"0")}`,mascotaId:n.mascotaId,tipoVacunaId:n.tipoVacunaId,fechaAplicacion:n.fechaAplicacion,proximaDosis:n.proximaDosis,lote:n.lote,observaciones:n.observaciones,veterinarioId:1};this.svc.createVacuna(c).subscribe({next:()=>{this.snack.open("Vacuna registrada","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=P({type:o,selectors:[["app-registrar-vacuna-dialog"]],decls:44,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],["formControlName","tipoVacunaId"],[1,"dlg-row"],["type","date","formControlName","fechaAplicacion"],["type","date","formControlName","proximaDosis"],["type","text","formControlName","lote","placeholder","Ej: LOT-2025-001"],["formControlName","observaciones","placeholder","Reacciones adversas, notas..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(a(0,"h2",0),l(1,"Registrar Vacuna"),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),l(6,"Paciente *"),i(),a(7,"select",3)(8,"option",4),l(9,"Seleccionar paciente..."),i(),M(10,Gn,2,3,"option",5,Ki),i()(),a(12,"div",2)(13,"label"),l(14,"Tipo de Vacuna *"),i(),a(15,"select",6)(16,"option",4),l(17,"Seleccionar vacuna..."),i(),M(18,$n,2,2,"option",5,Ki),i()(),a(20,"div",7)(21,"div",2)(22,"label"),l(23,"Fecha de Aplicaci\xF3n *"),i(),y(24,"input",8),i(),a(25,"div",2)(26,"label"),l(27,"Pr\xF3xima Dosis *"),i(),y(28,"input",9),i()(),a(29,"div",2)(30,"label"),l(31,"N\xFAmero de Lote"),i(),y(32,"input",10),i(),a(33,"div",2)(34,"label"),l(35,"Observaciones"),i(),y(36,"textarea",11),i()()(),a(37,"mat-dialog-actions",12)(38,"button",13),l(39,"Cancelar"),i(),a(40,"button",14),g("click",function(){return t.submit()}),a(41,"mat-icon"),l(42,"vaccines"),i(),l(43," Registrar Vacuna "),i()()),e&2&&(r(3),_("formGroup",t.form),r(7),E(t.store.patients()),r(8),E(t.store.rawTiposVacuna()),r(22),_("disabled",t.form.invalid||t.submitting))},dependencies:[ie,J,_e,xe,W,ge,q,Z,K,ee,G,oe,le,de,re,j,H,V,N],encapsulation:2})};var Qn=(o,n)=>n.id;function Un(o,n){if(o&1&&(a(0,"option",5),l(1),i()),o&2){let e=n.$implicit;_("value",e.id),r(),L("",e.name," (",e.owner,")")}}function Yn(o,n){if(o&1&&(a(0,"option",5),l(1),i()),o&2){let e=n.$implicit;_("value",e),r(),s(e)}}var tt=class o{fb=f(te);ref=f(ne);svc=f($);snack=f(Q);store=f(ce);data=f(ae,{optional:!0});today=new Date().toISOString().split("T")[0];estados=["Estable","Cr\xEDtico","Recuperaci\xF3n"];form=this.fb.group({mascotaId:[this.data?.patientId??"",w.required],fechaIngreso:[this.today,w.required],diagnostico:["",w.required],tratamiento:["",w.required],estado:["Estable",w.required],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e=this.store.hospitalizations().map(u=>parseInt(u.id?.replace("H-","")??"0",10)).filter(u=>!isNaN(u)),t=(e.length?Math.max(...e):0)+1,c={id:`H-${String(t).padStart(3,"0")}`,mascotaId:n.mascotaId,veterinarioId:1,fechaIngreso:n.fechaIngreso,diagnostico:n.diagnostico,tratamientos:[n.tratamiento],estado:n.estado,observaciones:n.observaciones};this.svc.createHospitalizacion(c).subscribe({next:()=>{this.snack.open("Ingreso registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=P({type:o,selectors:[["app-registrar-ingreso-dialog"]],decls:42,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[1,"dlg-row"],["type","date","formControlName","fechaIngreso"],["formControlName","estado"],["formControlName","diagnostico","placeholder","Diagn\xF3stico de ingreso..."],["formControlName","tratamiento","placeholder","Medicamentos, procedimientos..."],["formControlName","observaciones","placeholder","Notas adicionales..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(a(0,"h2",0),l(1,"Registrar Ingreso Hospitalario"),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),l(6,"Paciente *"),i(),a(7,"select",3)(8,"option",4),l(9,"Seleccionar paciente..."),i(),M(10,Un,2,3,"option",5,Qn),i()(),a(12,"div",6)(13,"div",2)(14,"label"),l(15,"Fecha de Ingreso *"),i(),y(16,"input",7),i(),a(17,"div",2)(18,"label"),l(19,"Estado *"),i(),a(20,"select",8),M(21,Yn,2,2,"option",5,Se),i()()(),a(23,"div",2)(24,"label"),l(25,"Diagn\xF3stico *"),i(),y(26,"textarea",9),i(),a(27,"div",2)(28,"label"),l(29,"Tratamiento Inicial *"),i(),y(30,"textarea",10),i(),a(31,"div",2)(32,"label"),l(33,"Observaciones"),i(),y(34,"textarea",11),i()()(),a(35,"mat-dialog-actions",12)(36,"button",13),l(37,"Cancelar"),i(),a(38,"button",14),g("click",function(){return t.submit()}),a(39,"mat-icon"),l(40,"local_hospital"),i(),l(41," Registrar Ingreso "),i()()),e&2&&(r(3),_("formGroup",t.form),r(7),E(t.store.patients()),r(11),E(t.estados),r(17),_("disabled",t.form.invalid||t.submitting))},dependencies:[ie,J,_e,xe,W,ge,q,Z,K,ee,G,oe,le,de,re,j,H,V,N],encapsulation:2})};var De=class o{fb=f(te);ref=f(ne);svc=f($);snack=f(Q);store=f(ce);data=f(ae,{optional:!0});isEdit=!!this.data?.cliente;form=this.fb.group({nombre:[this.data?.cliente?.nombre??"",w.required],telefono:[this.data?.cliente?.telefono??"",w.required],correo:[this.data?.cliente?.email??"",[w.email]],direccion:[this.data?.cliente?.direccion??""],dni:[this.data?.cliente?.dni??""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e={nombre:n.nombre,telefono:n.telefono,email:n.correo,direccion:n.direccion,dni:n.dni};(this.isEdit?this.svc.updateCliente(this.data.cliente.id,e):this.svc.createCliente(e)).subscribe({next:()=>{this.snack.open(this.isEdit?"Cliente actualizado":"Cliente registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=P({type:o,selectors:[["app-registrar-cliente-dialog"]],decls:33,vars:5,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-row"],[1,"dlg-field","dlg-field-full"],["type","text","formControlName","nombre","placeholder","Nombre del propietario"],[1,"dlg-field"],["type","tel","formControlName","telefono","placeholder","+51 999 000 000"],["type","text","formControlName","dni","placeholder","12345678"],["type","email","formControlName","correo","placeholder","correo@ejemplo.com"],["type","text","formControlName","direccion","placeholder","Av. Principal 123..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(a(0,"h2",0),l(1),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"div",3)(6,"label"),l(7,"Nombre completo *"),i(),y(8,"input",4),i()(),a(9,"div",2)(10,"div",5)(11,"label"),l(12,"Tel\xE9fono *"),i(),y(13,"input",6),i(),a(14,"div",5)(15,"label"),l(16,"DNI"),i(),y(17,"input",7),i()(),a(18,"div",5)(19,"label"),l(20,"Correo electr\xF3nico"),i(),y(21,"input",8),i(),a(22,"div",5)(23,"label"),l(24,"Direcci\xF3n"),i(),y(25,"input",9),i()()(),a(26,"mat-dialog-actions",10)(27,"button",11),l(28,"Cancelar"),i(),a(29,"button",12),g("click",function(){return t.submit()}),a(30,"mat-icon"),l(31),i(),l(32),i()()),e&2&&(r(),s(t.isEdit?"Editar Cliente":"Registrar Cliente"),r(2),_("formGroup",t.form),r(26),_("disabled",t.form.invalid||t.submitting),r(2),s(t.isEdit?"save":"person_add"),r(),x(" ",t.isEdit?"Guardar Cambios":"Registrar Cliente"," "))},dependencies:[ie,J,W,q,Z,K,ee,G,oe,le,de,re,j,H,V,N],encapsulation:2})};function Xn(o,n){if(o&1&&(a(0,"option",8),l(1),i()),o&2){let e=n.$implicit;_("value",e.id),r(),L("",e.nombre," (Stock: ",e.stockActual,")")}}var it=class o{fb=f(te);ref=f(ne);svc=f($);snack=f(Q);data=f(ae,{optional:!0});isEdit=!!this.data?.tratamiento;medicamentos=se([]);loading=se(!0);form=this.fb.group({consultaId:[this.data?.consultaId??"",w.required],medicamentoId:[this.data?.tratamiento?.medicamentoId??null],cantidad:[this.data?.tratamiento?.cantidad??1,[w.min(1)]],descripcion:[this.data?.tratamiento?.descripcion??""],dosis:[this.data?.tratamiento?.dosis??""],frecuencia:[this.data?.tratamiento?.frecuencia??""],duracion:[this.data?.tratamiento?.duracion??""]});constructor(){this.svc.getMedicamentos().subscribe({next:n=>{this.medicamentos.set(n),this.loading.set(!1)},error:()=>this.loading.set(!1)})}submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e={consultaId:n.consultaId,medicamentoId:n.medicamentoId||null,cantidad:n.medicamentoId?n.cantidad??1:null,descripcion:n.descripcion,dosis:n.dosis,frecuencia:n.frecuencia,duracion:n.duracion};(this.isEdit?this.svc.updateTratamiento(this.data.tratamiento.id,e):this.svc.createTratamiento(e)).subscribe({next:()=>{this.snack.open(this.isEdit?"Tratamiento actualizado":"Tratamiento registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=P({type:o,selectors:[["app-tratamiento-dialog"]],decls:47,vars:6,consts:[[1,"dialog-wrap"],["mat-dialog-title","",1,"dialog-header"],[1,"d-icon"],["mat-icon-button","","mat-dialog-close","",1,"close-btn"],[1,"dialog-form",3,"formGroup"],[1,"form-row"],[1,"form-group",2,"flex","2"],["formControlName","medicamentoId",1,"form-select"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",2,"flex","1"],["formControlName","cantidad","type","number","min","1","placeholder","1",1,"form-input"],[1,"form-group"],["formControlName","descripcion","rows","3","placeholder","Descripci\xF3n del tratamiento prescrito...",1,"form-textarea"],["formControlName","dosis","placeholder","Ej: 250mg",1,"form-input"],["formControlName","frecuencia","placeholder","Ej: Cada 8 horas",1,"form-input"],["formControlName","duracion","placeholder","Ej: 7 d\xEDas",1,"form-input"],["align","end"],["mat-stroked-button","","mat-dialog-close",""],["mat-raised-button","",1,"btn-submit",3,"click","disabled"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"mat-icon",2),l(3,"medication"),i(),a(4,"span"),l(5),i(),a(6,"button",3)(7,"mat-icon"),l(8,"close"),i()()(),a(9,"mat-dialog-content")(10,"form",4)(11,"div",5)(12,"div",6)(13,"label"),l(14,"Medicamento (opcional)"),i(),a(15,"select",7)(16,"option",8),l(17,"\u2014 Sin medicamento \u2014"),i(),T(18,Xn,2,3,"option",9),i()(),a(19,"div",10)(20,"label"),l(21,"Cantidad"),i(),y(22,"input",11),i()(),a(23,"div",12)(24,"label"),l(25,"Descripci\xF3n del tratamiento"),i(),y(26,"textarea",13),i(),a(27,"div",5)(28,"div",12)(29,"label"),l(30,"Dosis"),i(),y(31,"input",14),i(),a(32,"div",12)(33,"label"),l(34,"Frecuencia"),i(),y(35,"input",15),i()(),a(36,"div",12)(37,"label"),l(38,"Duraci\xF3n"),i(),y(39,"input",16),i()()(),a(40,"mat-dialog-actions",17)(41,"button",18),l(42,"Cancelar"),i(),a(43,"button",19),g("click",function(){return t.submit()}),a(44,"mat-icon"),l(45,"save"),i(),l(46),i()()()),e&2&&(r(5),s(t.isEdit?"Editar Tratamiento":"Registrar Tratamiento"),r(5),_("formGroup",t.form),r(6),_("value",null),r(2),_("ngForOf",t.medicamentos()),r(25),_("disabled",t.form.invalid||t.submitting),r(3),x(" ",t.isEdit?"Actualizar":"Registrar Tratamiento"," "))},dependencies:[ie,J,_e,xe,W,ri,ge,q,Z,di,K,ee,Wt,G,oe,le,de,re,j,H,Qe,V,N],encapsulation:2})};var Zn=(o,n)=>({current:o,total:n}),Re=(o,n)=>n.id,Hi=(o,n)=>n.value,xt=(o,n)=>n.labelKey,Jn=(o,n)=>n.date,ea=(o,n)=>n.label;function ta(o,n){o&1&&(a(0,"mat-icon",40),l(1,"pets"),i(),l(2),m(3,"translate")),o&2&&(r(2),x(" ",p(3,1,"clinical.tabs.patients")))}function ia(o,n){o&1&&(a(0,"div",20),l(1),m(2,"translate"),i()),o&2&&(r(),s(p(2,1,"clinical.patients.loading")))}function na(o,n){if(o&1&&(a(0,"div",51)(1,"mat-icon"),l(2,"warning"),i(),a(3,"span"),l(4),m(5,"translate"),i()()),o&2){let e=h().$implicit;r(4),L("",p(5,2,"clinical.patients.allergies")," ",e.alergias)}}function aa(o,n){if(o&1){let e=z();a(0,"div",41)(1,"div",43)(2,"div",44)(3,"mat-icon"),l(4,"pets"),i()(),a(5,"div",45)(6,"div",46),l(7),i(),a(8,"div",47),l(9),i()(),a(10,"span",48),l(11),i()(),a(12,"div",49)(13,"div",50)(14,"mat-icon"),l(15,"pets"),i(),a(16,"span"),l(17),m(18,"translate"),i(),l(19),i(),a(20,"div",50)(21,"mat-icon"),l(22,"cake"),i(),a(23,"span"),l(24),m(25,"translate"),i(),l(26),i(),a(27,"div",50)(28,"mat-icon"),l(29,"monitor_weight"),i(),a(30,"span"),l(31),m(32,"translate"),i(),l(33),i(),a(34,"div",50)(35,"mat-icon"),l(36,"person"),i(),a(37,"span"),l(38),m(39,"translate"),i(),l(40),i(),b(41,na,6,4,"div",51),i(),a(42,"div",52)(43,"button",53),g("click",function(){let d=O(e).$implicit,c=h(2);return I(c.verFicha(d.id))}),a(44,"mat-icon"),l(45,"visibility"),i(),l(46),m(47,"translate"),i(),a(48,"button",54),g("click",function(){let d=O(e).$implicit,c=h(2);return I(c.openRegistrarPaciente(d))}),a(49,"mat-icon"),l(50,"edit"),i()(),a(51,"button",55),g("click",function(){let d=O(e).$implicit,c=h(2);return I(c.deletePatient(d))}),a(52,"mat-icon"),l(53,"delete"),i()()()()}if(o&2){let e=n.$implicit;r(2),k("background",e.avatarColor),r(5),s(e.name),r(2),x("ID: ",e.id),r(2),s(e.status),r(6),s(p(18,16,"clinical.patients.species")),r(2),L(" ",e.species," - ",e.breed),r(5),s(p(25,18,"clinical.patients.age")),r(2),x(" ",e.age),r(5),s(p(32,20,"clinical.patients.weight")),r(2),x(" ",e.weight),r(5),s(p(39,22,"clinical.patients.owner")),r(2),x(" ",e.owner),r(),v(e.alergias?41:-1),r(5),x(" ",p(47,24,"clinical.patients.viewFile")," ")}}function oa(o,n){o&1&&(a(0,"p",42),l(1),m(2,"translate"),i()),o&2&&(r(),s(p(2,1,"clinical.patients.empty")))}function la(o,n){if(o&1&&(a(0,"div",21),M(1,aa,54,26,"div",41,Re,!1,oa,3,3,"p",42),i()),o&2){let e=h();r(),E(e.filteredPatients)}}function ra(o,n){o&1&&(a(0,"mat-icon",40),l(1,"people"),i(),l(2),m(3,"translate")),o&2&&(r(2),x(" ",p(3,1,"clinical.tabs.clients")))}function da(o,n){o&1&&(a(0,"div",20),l(1),m(2,"translate"),i()),o&2&&(r(),s(p(2,1,"clinical.patients.loading")))}function ca(o,n){if(o&1){let e=z();a(0,"tr")(1,"td")(2,"div",56)(3,"div",57)(4,"mat-icon"),l(5,"person"),i()(),a(6,"div",58),l(7),i()()(),a(8,"td"),l(9),i(),a(10,"td"),l(11),i(),a(12,"td"),l(13),i(),a(14,"td"),l(15),i(),a(16,"td")(17,"div",59)(18,"button",54),g("click",function(){let d=O(e).$implicit,c=h(2);return I(c.openEditarCliente(d))}),a(19,"mat-icon"),l(20,"edit"),i()(),a(21,"button",55),g("click",function(){let d=O(e).$implicit,c=h(2);return I(c.deleteCliente(d))}),a(22,"mat-icon",60),l(23,"delete"),i()()()()()}if(o&2){let e=n.$implicit;r(7),s(e.nombre),r(2),s(e.dni),r(2),s(e.telefono),r(2),s(e.email),r(2),s(e.direccion)}}function sa(o,n){o&1&&(a(0,"tr")(1,"td",61),l(2),m(3,"translate"),i()()),o&2&&(r(2),s(p(3,1,"clinical.clients.empty")))}function ma(o,n){if(o&1&&(a(0,"div",22)(1,"table",26)(2,"thead")(3,"tr")(4,"th"),l(5),m(6,"translate"),i(),a(7,"th"),l(8),m(9,"translate"),i(),a(10,"th"),l(11),m(12,"translate"),i(),a(13,"th"),l(14),m(15,"translate"),i(),a(16,"th"),l(17),m(18,"translate"),i(),a(19,"th"),l(20,"Acciones"),i()()(),a(21,"tbody"),M(22,ca,24,5,"tr",null,Re,!1,sa,4,3,"tr"),i()()()),o&2){let e=h();r(5),s(p(6,6,"clinical.clients.colName")),r(3),s(p(9,8,"clinical.clients.colDni")),r(3),s(p(12,10,"clinical.clients.colPhone")),r(3),s(p(15,12,"clinical.clients.colEmail")),r(3),s(p(18,14,"clinical.clients.colAddress")),r(5),E(e.filteredClients)}}function pa(o,n){o&1&&(a(0,"mat-icon",40),l(1,"medical_services"),i(),l(2),m(3,"translate")),o&2&&(r(2),x(" ",p(3,1,"clinical.tabs.consultations")))}function fa(o,n){if(o&1&&(a(0,"div",64),l(1),i()),o&2){let e=h().$implicit;r(),x("\u{1F321} ",e.temperatura,"\xB0C")}}function ua(o,n){o&1&&(a(0,"span",65),l(1),m(2,"translate"),i()),o&2&&(r(),s(p(2,1,"clinical.consultations.statusClosed")))}function ha(o,n){if(o&1&&(a(0,"span",66),l(1),i()),o&2){let e=h().$implicit,t=h();_("ngClass",t.getConsultBadge(e.status)),r(),s(e.status)}}function ga(o,n){if(o&1){let e=z();a(0,"button",69),m(1,"translate"),g("click",function(){O(e);let d=h().$implicit,c=h();return I(c.closeConsulta(d.id))}),a(2,"mat-icon",70),l(3,"lock"),i()()}o&2&&_("title",p(1,1,"clinical.consultations.closeConsult"))}function _a(o,n){o&1&&(a(0,"mat-icon",68),l(1,"lock"),i())}function xa(o,n){if(o&1&&(a(0,"tr")(1,"td",62),l(2),i(),a(3,"td")(4,"div",56)(5,"div",63)(6,"mat-icon"),l(7,"pets"),i()(),a(8,"div")(9,"div",58),l(10),i(),a(11,"div",64),l(12),i()()()(),a(13,"td")(14,"div",58),l(15),i(),a(16,"div",64),l(17),i()(),a(18,"td"),l(19),i(),a(20,"td")(21,"div",58),l(22),i(),b(23,fa,2,1,"div",64),i(),a(24,"td")(25,"div",58),l(26),i(),a(27,"div",64),l(28),i()(),a(29,"td"),b(30,ua,3,3,"span",65)(31,ha,2,2,"span",66),i(),a(32,"td"),b(33,ga,4,3,"button",67)(34,_a,2,0,"mat-icon",68),i()()),o&2){let e=n.$implicit;F("row-closed",e.cerrada),r(2),s(e.id),r(3),k("background",e.patientAvatarColor),r(5),s(e.patientName),r(2),s(e.patientBreed),r(3),s(e.clientName),r(2),s(e.clientPhone),r(2),s(e.type),r(3),s(e.diagnosis),r(),v(e.temperatura?23:-1),r(3),s(e.date),r(2),s(e.time),r(2),v(e.cerrada?30:31),r(3),v(e.cerrada?34:33)}}function ba(o,n){o&1&&(a(0,"tr")(1,"td",71),l(2),m(3,"translate"),i()()),o&2&&(r(2),s(p(3,1,"clinical.consultations.empty")))}function va(o,n){if(o&1){let e=z();a(0,"button",72),g("click",function(){let d=O(e).$implicit,c=h();return I(c.consultPage=d)}),l(1),i()}if(o&2){let e=n.$implicit,t=h();F("active",t.consultPage===e),r(),s(e)}}function ya(o,n){o&1&&(a(0,"mat-icon",40),l(1,"assignment"),i(),l(2),m(3,"translate")),o&2&&(r(2),x(" ",p(3,1,"clinical.tabs.history")))}function Ca(o,n){if(o&1){let e=z();a(0,"div",32)(1,"mat-icon"),l(2,"assignment_ind"),i(),a(3,"h3"),l(4),m(5,"translate"),i(),a(6,"p"),l(7),m(8,"translate"),i(),a(9,"button",73),g("click",function(){O(e);let d=h();return I(d.activeTab=0)}),l(10),m(11,"translate"),i()()}o&2&&(r(4),s(p(5,3,"clinical.history.selectPatient")),r(3),s(p(8,5,"clinical.history.selectPatientHint")),r(3),s(p(11,7,"clinical.history.goToPatients")))}function Sa(o,n){if(o&1&&(a(0,"div",79)(1,"mat-icon"),l(2,"warning"),i(),a(3,"div")(4,"strong"),l(5),m(6,"translate"),i(),a(7,"span"),l(8),i()()()),o&2){let e=h(2);r(5),s(p(6,2,"clinical.history.allergyBannerTitle")),r(3),s(e.historyAllergyAlert)}}function Ma(o,n){o&1&&(a(0,"div",80)(1,"mat-icon"),l(2,"check_circle"),i(),a(3,"span"),l(4),m(5,"translate"),i()()),o&2&&(r(4),s(p(5,1,"clinical.history.noAllergies")))}function Ea(o,n){if(o&1&&(a(0,"div",82)(1,"div",85),l(2),i(),a(3,"div",86),l(4),m(5,"translate"),i()()),o&2){let e=n.$implicit;r(2),s(e.value),r(2),s(p(5,2,e.labelKey))}}function wa(o,n){o&1&&(a(0,"p",42),l(1),m(2,"translate"),i()),o&2&&(r(),s(p(2,1,"clinical.history.empty")))}function Fa(o,n){if(o&1&&(a(0,"span",91),l(1),i()),o&2){let e=h().$implicit;r(),x("\u{1F321} ",e.temperatura,"\xB0C")}}function Oa(o,n){o&1&&(a(0,"span",94)(1,"mat-icon",98),l(2,"lock"),i(),l(3),m(4,"translate"),i()),o&2&&(r(3),x(" ",p(4,1,"clinical.consultations.statusClosed")))}function Ia(o,n){if(o&1&&(a(0,"div",96)(1,"div",99),l(2),i(),a(3,"p",100),l(4),i()()),o&2){let e=n.$implicit;r(2),s(e.label),r(2),s(e.content)}}function ka(o,n){if(o&1){let e=z();a(0,"div",97)(1,"button",101),g("click",function(){O(e);let d=h().$implicit,c=h(3);return I(c.openTratamiento(d.consultaId))}),a(2,"mat-icon"),l(3,"medication"),i(),l(4),m(5,"translate"),i()()}o&2&&(r(4),x(" ",p(5,1,"clinical.history.addTreatment")," "))}function Pa(o,n){if(o&1&&(a(0,"div",88)(1,"div",89)(2,"mat-icon"),l(3),i(),a(4,"span",90),l(5),i(),b(6,Fa,2,1,"span",91),a(7,"span",92),l(8),i(),a(9,"span",93),l(10),i(),b(11,Oa,5,3,"span",94),i(),a(12,"div",95),M(13,Ia,5,2,"div",96,ea),b(15,ka,6,3,"div",97),i()()),o&2){let e=n.$implicit;k("border-left","4px solid "+e.borderColor),r(),k("background",e.bg),r(),k("color",e.color),r(),s(e.icon),r(),k("color",e.color),r(),s(e.type),r(),v(e.temperatura?6:-1),r(2),s(e.date),r(2),s(e.doctor),r(),v(e.cerrada?11:-1),r(2),E(e.sections),r(2),v(e.cerrada?-1:15)}}function Ta(o,n){if(o&1&&(a(0,"div",84),M(1,Pa,16,15,"div",87,Jn),i()),o&2){let e=h(2);r(),E(e.historyRecords)}}function Da(o,n){if(o&1){let e=z();a(0,"div",74)(1,"div",75)(2,"mat-icon"),l(3,"pets"),i()(),a(4,"div",76)(5,"h2"),l(6),i(),a(7,"p"),l(8),m(9,"translate"),i()(),a(10,"div",77)(11,"button",10),g("click",function(){O(e);let d=h();return I(d.openNuevaConsulta(d.store.selectedPatientId()))}),a(12,"mat-icon"),l(13,"add"),i(),l(14),m(15,"translate"),i(),a(16,"button",78)(17,"mat-icon"),l(18,"bookmark_border"),i()()()(),b(19,Sa,9,4,"div",79)(20,Ma,6,3,"div",80),a(21,"div",81),M(22,Ea,6,4,"div",82,xt),i(),a(24,"div",83),l(25),m(26,"translate"),i(),b(27,wa,3,3,"p",42)(28,Ta,3,0,"div",84)}if(o&2){let e=h();r(),k("background",e.historyPatient.avatarColor),r(5),s(e.historyPatient.name),r(2),Dt("",e.historyPatient.breed," \xB7 ",e.historyPatient.age," \xB7 ",p(9,11,"clinical.history.owner")," ",e.historyPatient.owner),r(6),x(" ",p(15,13,"clinical.history.newConsult")," "),r(5),v(e.historyAllergyAlert?19:20),r(3),E(e.historyPatient.stats),r(3),s(p(26,15,"clinical.history.fullHistory")),r(2),v(e.historyRecords.length===0?27:28)}}function Ra(o,n){o&1&&(a(0,"mat-icon",40),l(1,"vaccines"),i(),l(2),m(3,"translate")),o&2&&(r(2),x(" ",p(3,1,"clinical.tabs.vaccines")))}function za(o,n){if(o&1){let e=z();a(0,"button",102),g("click",function(){let d=O(e).$implicit,c=h();return I(c.vaccineFilter=d.value)}),l(1),m(2,"translate"),i()}if(o&2){let e=n.$implicit,t=h();F("chip-active",t.vaccineFilter===e.value),r(),x(" ",p(2,3,e.labelKey)," ")}}function Aa(o,n){if(o&1&&(a(0,"div",103)(1,"mat-icon",104),l(2),i(),a(3,"div",105),l(4),i(),a(5,"div",106),l(6),m(7,"translate"),i(),a(8,"div",107),l(9),m(10,"translate"),i()()),o&2){let e=n.$implicit;k("background",e.bg),r(),k("color",e.color),r(),s(e.icon),r(),k("color",e.color),r(),s(e.value),r(),k("color",e.color),r(),s(p(7,12,e.labelKey)),r(3),s(p(10,14,e.sublabelKey))}}function Ba(o,n){o&1&&(l(0),m(1,"translate")),o&2&&x(" ",p(1,1,"clinical.vaccines.actionViewDetails")," ")}function La(o,n){o&1&&(l(0),m(1,"translate")),o&2&&x(" ",p(1,1,"clinical.vaccines.actionSchedule")," ")}function Na(o,n){o&1&&(l(0),m(1,"translate")),o&2&&x(" ",p(1,1,"clinical.vaccines.actionApplyNow")," ")}function Va(o,n){if(o&1){let e=z();a(0,"tr")(1,"td")(2,"div",56)(3,"div",63)(4,"mat-icon"),l(5,"pets"),i()(),a(6,"div")(7,"div",58),l(8),i(),a(9,"div",64),l(10),i()()()(),a(11,"td")(12,"div",58),l(13),i(),a(14,"div",64),l(15),i()(),a(16,"td"),l(17),i(),a(18,"td"),l(19),i(),a(20,"td")(21,"span",66),l(22),i()(),a(23,"td")(24,"button",108),g("click",function(){let d=O(e).$implicit,c=h();return I(c.openRegistrarVacuna(d.mascotaId))}),b(25,Ba,2,3)(26,La,2,3)(27,Na,2,3),i()()()}if(o&2){let e=n.$implicit,t=h();r(3),k("background",e.patientAvatarColor),r(5),s(e.patientName),r(2),s(e.patientBreed),r(3),s(e.vaccineName),r(2),s(e.vaccineDesc),r(2),s(e.lastApplied),r(),F("text-danger",e.nextDoseHighlight),r(),s(e.nextDose),r(2),_("ngClass",t.getVaccineBadge(e.status)),r(),s(e.status),r(3),v(e.status==="Al D\xEDa"?25:e.status==="Pr\xF3xima"?26:27)}}function Wa(o,n){o&1&&(a(0,"tr")(1,"td",61),l(2),m(3,"translate"),i()()),o&2&&(r(2),s(p(3,1,"clinical.vaccines.empty")))}function qa(o,n){o&1&&(a(0,"mat-icon",40),l(1,"local_hospital"),i(),l(2),m(3,"translate")),o&2&&(r(2),x(" ",p(3,1,"clinical.tabs.hospitalization")))}function Ka(o,n){if(o&1&&(a(0,"div",38)(1,"div")(2,"div",109),l(3),m(4,"translate"),i(),a(5,"div",110),l(6),i(),a(7,"div",111),l(8),m(9,"translate"),i()(),a(10,"div",112)(11,"mat-icon"),l(12),i()()()),o&2){let e=n.$implicit;r(3),s(p(4,10,e.labelKey)),r(2),k("color",e.color),r(),s(e.value),r(2),s(p(9,12,e.sublabelKey)),r(2),k("background",e.bg),r(),k("color",e.color),r(),s(e.icon)}}function Ha(o,n){if(o&1){let e=z();a(0,"button",102),g("click",function(){let d=O(e).$implicit,c=h();return I(c.hospitalizationFilter=d.value)}),l(1),m(2,"translate"),i()}if(o&2){let e=n.$implicit,t=h();F("chip-active",t.hospitalizationFilter===e.value),r(),L(" ",p(2,4,e.labelKey)," (",t.getHospCount(e.value),") ")}}function ja(o,n){if(o&1&&(a(0,"li"),l(1),i()),o&2){let e=n.$implicit;r(),x("\u2022 ",e)}}function Ga(o,n){if(o&1){let e=z();a(0,"tr")(1,"td")(2,"div",56)(3,"div",63)(4,"mat-icon"),l(5,"pets"),i()(),a(6,"div")(7,"div",58),l(8),i(),a(9,"div",64),l(10),i()()()(),a(11,"td")(12,"div",58),l(13),i(),a(14,"div",64),l(15),i()(),a(16,"td")(17,"span",66),l(18),i()(),a(19,"td")(20,"div",58),l(21),i(),a(22,"div",64),l(23),i()(),a(24,"td"),l(25),i(),a(26,"td")(27,"ul",113),M(28,ja,2,1,"li",null,Se),i()(),a(30,"td")(31,"div",59)(32,"button",114),g("click",function(){let d=O(e).$implicit,c=h();return I(c.verFicha(d.mascotaId))}),a(33,"mat-icon"),l(34,"visibility"),i()(),a(35,"button",115),g("click",function(){let d=O(e).$implicit,c=h();return I(c.openRegistrarIngreso(d.mascotaId))}),a(36,"mat-icon"),l(37,"edit"),i()()()()()}if(o&2){let e=n.$implicit,t=h();r(3),k("background",e.patientAvatarColor),r(5),s(e.patientName),r(2),L("",e.patientBreed," \xB7 ",e.patientAge),r(3),s(e.ownerName),r(2),s(e.ownerPhone),r(2),_("ngClass",t.getHospBadge(e.status)),r(),x("\u2022 ",e.status),r(3),s(e.admissionDate),r(2),s(e.daysAgo),r(2),s(e.diagnosis),r(3),E(e.treatments)}}function $a(o,n){o&1&&(a(0,"tr")(1,"td",71),l(2),m(3,"translate"),i()()),o&2&&(r(2),s(p(3,1,"clinical.hospitalization.empty")))}var _t=5,ji=class o{store=f(ce);svc=f($);dialog=f(hi);snack=f(Q);translate=f(Kt);activeTab=0;patientSearch="";clientSearch="";speciesFilter="Todas";vaccineFilter="Todas";hospitalizationFilter="Todos";consultDateFilter="all";vaccineFilters=[{value:"Todas",labelKey:"clinical.vaccines.filterAll"},{value:"Pr\xF3ximas",labelKey:"clinical.vaccines.filterUpcoming"},{value:"Vencidas",labelKey:"clinical.vaccines.filterExpired"}];hospFilters=[{value:"Todos",labelKey:"clinical.hospitalization.filterAll"},{value:"Cr\xEDtico",labelKey:"clinical.hospitalization.filterCritical"},{value:"Estable",labelKey:"clinical.hospitalization.filterStable"},{value:"Recuperaci\xF3n",labelKey:"clinical.hospitalization.filterRecovery"}];consultPage=1;get filteredPatients(){let n=this.patientSearch.toLowerCase();return this.store.patients().filter(e=>(n===""||e.name.toLowerCase().includes(n)||e.owner.toLowerCase().includes(n)||e.id.includes(n))&&(this.speciesFilter==="Todas"||e.species===this.speciesFilter))}get filteredClients(){let n=this.clientSearch.toLowerCase();return this.store.rawClientes().filter(e=>n===""||e.nombre?.toLowerCase().includes(n)||e.dni?.includes(n)||e.email?.toLowerCase().includes(n))}get filteredConsultations(){let n=new Date().toISOString().split("T")[0],e=new Date(Date.now()-7*864e5).toISOString().split("T")[0];return this.store.consultations().filter(t=>this.consultDateFilter==="today"?t.rawDate===n:this.consultDateFilter==="week"?t.rawDate>=e:!0)}get consultTotalPages(){return Math.max(1,Math.ceil(this.filteredConsultations.length/_t))}get pagedConsultations(){let n=(this.consultPage-1)*_t;return this.filteredConsultations.slice(n,n+_t)}get consultPageNumbers(){return Array.from({length:this.consultTotalPages},(n,e)=>e+1)}setConsultFilter(n){this.consultDateFilter=n,this.consultPage=1}get filteredVaccines(){return this.vaccineFilter==="Pr\xF3ximas"?this.store.vaccines().filter(n=>n.status==="Pr\xF3xima"):this.vaccineFilter==="Vencidas"?this.store.vaccines().filter(n=>n.status==="Vencida"):this.store.vaccines()}get vaccineSummary(){let n=this.store.vaccines();return[{labelKey:"clinical.vaccines.summaryExpired",sublabelKey:"clinical.vaccines.summaryExpiredSub",value:n.filter(e=>e.status==="Vencida").length,color:"#EF4444",bg:"#FEF2F2",icon:"error"},{labelKey:"clinical.vaccines.summaryUpcoming",sublabelKey:"clinical.vaccines.summaryUpcomingSub",value:n.filter(e=>e.status==="Pr\xF3xima").length,color:"#F59E0B",bg:"#FFFBEB",icon:"schedule"},{labelKey:"clinical.vaccines.summaryUpToDate",sublabelKey:"clinical.vaccines.summaryUpToDateSub",value:n.filter(e=>e.status==="Al D\xEDa").length,color:"#22C55E",bg:"#F0FDF4",icon:"check_circle"}]}get filteredHospitalizations(){return this.hospitalizationFilter==="Todos"?this.store.hospitalizations():this.store.hospitalizations().filter(n=>n.status===this.hospitalizationFilter)}getHospCount(n){return n==="Todos"?this.store.hospitalizations().length:this.store.hospitalizations().filter(e=>e.status===n).length}get hospitalStats(){let n=this.store.hospitalizations();return[{labelKey:"clinical.hospitalization.statTotal",sublabelKey:"clinical.hospitalization.statTotalSub",value:n.length,icon:"local_hospital",color:"#3B82F6",bg:"#EFF6FF"},{labelKey:"clinical.hospitalization.statCritical",sublabelKey:"clinical.hospitalization.statCriticalSub",value:n.filter(e=>e.status==="Cr\xEDtico").length,icon:"favorite",color:"#EF4444",bg:"#FEF2F2"},{labelKey:"clinical.hospitalization.statRecovery",sublabelKey:"clinical.hospitalization.statRecoverySub",value:n.filter(e=>e.status==="Recuperaci\xF3n").length,icon:"person",color:"#F59E0B",bg:"#FFFBEB"}]}get selectedConsultations(){let n=this.store.selectedPatient();return n?this.store.consultations().filter(e=>e.mascotaId===n.id):[]}get historyPatient(){let n=this.store.selectedPatient();if(!n)return null;let e=this.selectedConsultations;return{name:n.name,breed:n.breed,age:n.age,owner:n.owner,avatarColor:n.avatarColor,stats:[{labelKey:"clinical.history.statTotalConsults",value:String(e.length)},{labelKey:"clinical.history.statVaccinesApplied",value:String(this.store.vaccines().filter(t=>t.mascotaId===n.id).length)},{labelKey:"clinical.history.statHospitalizations",value:String(this.store.hospitalizations().filter(t=>t.mascotaId===n.id).length)},{labelKey:"clinical.history.statLastVisit",value:e.length>0?e[0].date:"\u2014"}]}}get historyRecords(){return this.selectedConsultations.map(n=>({consultaId:n.id,type:n.type,date:n.date,doctor:n.veterinario??"Veterinario",color:n.cerrada?"#64748B":"#22C55E",bg:n.cerrada?"#F1F5F9":"#F0FDF4",borderColor:n.cerrada?"#94A3B8":"#22C55E",icon:n.cerrada?"lock":"medical_services",temperatura:n.temperatura,cerrada:n.cerrada,sections:[...n.subjetivo?[{label:"Subjetivo (S)",type:"text",content:n.subjetivo}]:[],...n.objetivo?[{label:"Objetivo (O)",type:"text",content:n.objetivo}]:[],...n.diagnosis?[{label:"Evaluaci\xF3n (A)",type:"text",content:n.diagnosis}]:[],...n.plan?[{label:"Plan (P)",type:"text",content:n.plan}]:[]]}))}getConsultBadge(n){return{Completada:"badge-completada","En Proceso":"badge-en-proceso",Cr\u00EDtico:"badge-critico",Pendiente:"badge-pendiente"}[n]??""}getVaccineBadge(n){return{"Al D\xEDa":"badge-al-dia",Pr\u00F3xima:"badge-proxima",Vencida:"badge-vencida"}[n]??""}getHospBadge(n){return{Cr\u00EDtico:"badge-critico",Estable:"badge-estable",Recuperaci\u00F3n:"badge-recuperacion"}[n]??""}verFicha(n){this.store.selectPatient(n),this.activeTab=3}openNuevaConsulta(n){this.dialog.open(gi,{width:"640px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarPaciente(n){this.dialog.open(xi,{width:"580px",data:{patient:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openNuevaCita(n){this.dialog.open(_i,{width:"520px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarVacuna(n){this.dialog.open(Ye,{width:"560px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarIngreso(n){this.dialog.open(tt,{width:"560px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarCliente(){this.dialog.open(De,{width:"500px"}).afterClosed().subscribe(n=>{n&&this.store.reload()})}openEditarCliente(n){this.dialog.open(De,{width:"500px",data:{cliente:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}deleteCliente(n){confirm(`\xBFEliminar al cliente ${n.nombre}? Esta acci\xF3n no se puede deshacer.`)&&this.svc.deleteCliente(n.id).subscribe({next:()=>{this.snack.open("Cliente eliminado","OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open("Error al eliminar","",{duration:3e3})})}openTratamiento(n){this.dialog.open(it,{width:"560px",data:{consultaId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}deletePatient(n){let e=this.translate.instant("clinical.messages.confirmDelete",{name:n.name});confirm(e)&&this.svc.deleteMascota(n.id).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.messages.patientDeleted"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}closeConsulta(n){let e=this.translate.instant("clinical.consultations.confirmClose");confirm(e)&&this.svc.closeConsulta(n).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.consultations.closedSuccess"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}get historyAllergyAlert(){return this.store.selectedPatient()?.alergias??""}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=P({type:o,selectors:[["app-clinical-management"]],decls:254,vars:169,consts:[[1,"clinical"],[1,"page-header"],[1,"header-search"],[1,"search-icon"],[1,"header-search-input",3,"placeholder"],[1,"notif-icon"],["animationDuration","0ms",1,"clinical-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"tab-content"],[1,"section-header"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"filters-row"],[1,"search-wrap"],[1,"filter-input",3,"ngModelChange","ngModel","placeholder"],[1,"species-wrap"],[1,"species-select",3,"valueChange","value"],["value","Todas"],["value","Perro"],["value","Gato"],["value","Ave"],[1,"loading-msg"],[1,"patients-grid"],[1,"card","table-card"],[1,"table-top"],[1,"table-actions"],["mat-stroked-button","",1,"btn-sm",3,"click"],[1,"data-table"],[3,"row-closed"],[1,"table-footer"],[1,"pagination"],["mat-icon-button","",3,"click","disabled"],[1,"pg-btn",3,"active"],[1,"empty-tab"],[1,"chips-row"],[1,"chip",3,"chip-active"],[1,"vsummary-grid"],[1,"vsummary",3,"background"],[1,"hosp-stats-row"],[1,"hosp-stat-card"],[1,"table-title"],[1,"tab-icon"],[1,"patient-card"],[1,"empty-msg"],[1,"pc-top"],[1,"pc-avatar"],[1,"pc-title"],[1,"pc-name"],[1,"pc-id"],[1,"badge","badge-activo"],[1,"pc-details"],[1,"pc-row"],[1,"pc-allergy-alert"],[1,"pc-actions"],["mat-button","",1,"btn-ver-ficha",3,"click"],["mat-icon-button","","title","Editar",3,"click"],["mat-icon-button","","title","Eliminar",3,"click"],[1,"td-patient"],[1,"td-avatar",2,"background","#6366F1"],[1,"td-name"],[1,"td-actions"],[2,"color","#EF4444"],["colspan","6",1,"empty-msg"],[1,"td-id"],[1,"td-avatar"],[1,"td-sub"],[1,"badge","badge-cancelada"],[1,"badge",3,"ngClass"],["mat-icon-button","",3,"title"],[2,"color","#94A3B8","font-size","20px"],["mat-icon-button","",3,"click","title"],[2,"color","#64748B"],["colspan","7",1,"empty-msg"],[1,"pg-btn",3,"click"],["mat-stroked-button","",3,"click"],[1,"history-header"],[1,"hist-avatar"],[1,"hist-info"],[1,"hist-actions"],["mat-icon-button",""],[1,"allergy-banner"],[1,"no-allergy-banner"],[1,"hist-stats"],[1,"hist-stat"],[1,"hist-section-title"],[1,"timeline"],[1,"hs-val"],[1,"hs-lbl"],[1,"tl-card",3,"border-left"],[1,"tl-card"],[1,"tl-header"],[1,"tl-type"],[1,"tl-temp"],[1,"tl-date"],[1,"tl-doc"],[1,"badge","badge-cancelada","tl-locked"],[1,"tl-body"],[1,"tl-section"],[1,"tl-footer"],[2,"font-size","14px"],[1,"tl-label"],[1,"tl-text"],["mat-stroked-button","",1,"btn-sm-tratamiento",3,"click"],[1,"chip",3,"click"],[1,"vsummary"],[1,"vs-icon"],[1,"vs-val"],[1,"vs-label"],[1,"vs-sub"],["mat-button","",1,"action-link",3,"click"],[1,"hosp-stat-label"],[1,"hosp-stat-val"],[1,"hosp-stat-sub"],[1,"hosp-stat-icon"],[1,"treat-list"],["mat-icon-button","","title","Ver ficha",3,"click"],["mat-icon-button","","title","Editar ingreso",3,"click"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),l(4),m(5,"translate"),i(),a(6,"p"),l(7),m(8,"translate"),i()(),a(9,"div",2)(10,"mat-icon",3),l(11,"search"),i(),y(12,"input",4),m(13,"translate"),a(14,"mat-icon",5),l(15,"notifications"),i()()(),a(16,"mat-tab-group",6),Ie("selectedIndexChange",function(c){return Oe(t.activeTab,c)||(t.activeTab=c),c}),a(17,"mat-tab"),T(18,ta,4,3,"ng-template",7),a(19,"div",8)(20,"div",9)(21,"div")(22,"h2"),l(23),m(24,"translate"),i(),a(25,"p"),l(26),m(27,"translate"),i()(),a(28,"button",10),g("click",function(){return t.openRegistrarPaciente()}),a(29,"mat-icon"),l(30,"add"),i(),l(31),m(32,"translate"),i()(),a(33,"div",11)(34,"div",12)(35,"mat-icon"),l(36,"search"),i(),a(37,"input",13),m(38,"translate"),Ie("ngModelChange",function(c){return Oe(t.patientSearch,c)||(t.patientSearch=c),c}),i()(),a(39,"div",14)(40,"mat-select",15),Ie("valueChange",function(c){return Oe(t.speciesFilter,c)||(t.speciesFilter=c),c}),a(41,"mat-option",16),l(42),m(43,"translate"),i(),a(44,"mat-option",17),l(45),m(46,"translate"),i(),a(47,"mat-option",18),l(48),m(49,"translate"),i(),a(50,"mat-option",19),l(51),m(52,"translate"),i()()()(),b(53,ia,3,3,"div",20)(54,la,4,1,"div",21),i()(),a(55,"mat-tab"),T(56,ra,4,3,"ng-template",7),a(57,"div",8)(58,"div",9)(59,"div")(60,"h2"),l(61),m(62,"translate"),i(),a(63,"p"),l(64),m(65,"translate"),i()(),a(66,"button",10),g("click",function(){return t.openRegistrarCliente()}),a(67,"mat-icon"),l(68,"add"),i(),l(69),m(70,"translate"),i()(),a(71,"div",11)(72,"div",12)(73,"mat-icon"),l(74,"search"),i(),a(75,"input",13),m(76,"translate"),Ie("ngModelChange",function(c){return Oe(t.clientSearch,c)||(t.clientSearch=c),c}),i()()(),b(77,da,3,3,"div",20)(78,ma,25,16,"div",22),i()(),a(79,"mat-tab"),T(80,pa,4,3,"ng-template",7),a(81,"div",8)(82,"div",9)(83,"div")(84,"h2"),l(85),m(86,"translate"),i(),a(87,"p"),l(88),m(89,"translate"),i()(),a(90,"button",10),g("click",function(){return t.openNuevaConsulta()}),a(91,"mat-icon"),l(92,"add"),i(),l(93),m(94,"translate"),i()(),a(95,"div",22)(96,"div",23)(97,"h3"),l(98),m(99,"translate"),i(),a(100,"div",24)(101,"button",25),g("click",function(){return t.setConsultFilter("all")}),l(102),m(103,"translate"),i(),a(104,"button",25),g("click",function(){return t.setConsultFilter("today")}),l(105),m(106,"translate"),i(),a(107,"button",25),g("click",function(){return t.setConsultFilter("week")}),l(108),m(109,"translate"),i()()(),a(110,"table",26)(111,"thead")(112,"tr")(113,"th"),l(114),m(115,"translate"),i(),a(116,"th"),l(117),m(118,"translate"),i(),a(119,"th"),l(120),m(121,"translate"),i(),a(122,"th"),l(123),m(124,"translate"),i(),a(125,"th"),l(126),m(127,"translate"),i(),a(128,"th"),l(129),m(130,"translate"),i(),a(131,"th"),l(132),m(133,"translate"),i(),a(134,"th"),l(135),m(136,"translate"),i()()(),a(137,"tbody"),M(138,xa,35,16,"tr",27,Re,!1,ba,4,3,"tr"),i()(),a(141,"div",28)(142,"span"),l(143),m(144,"translate"),i(),a(145,"div",29)(146,"button",30),g("click",function(){return t.consultPage=t.consultPage-1}),a(147,"mat-icon"),l(148,"chevron_left"),i()(),M(149,va,2,3,"button",31,Se),a(151,"button",30),g("click",function(){return t.consultPage=t.consultPage+1}),a(152,"mat-icon"),l(153,"chevron_right"),i()()()()()()(),a(154,"mat-tab"),T(155,ya,4,3,"ng-template",7),a(156,"div",8),b(157,Ca,12,9,"div",32)(158,Da,29,17),i()(),a(159,"mat-tab"),T(160,Ra,4,3,"ng-template",7),a(161,"div",8)(162,"div",9)(163,"div",33),M(164,za,3,5,"button",34,Hi),i(),a(166,"button",10),g("click",function(){return t.openRegistrarVacuna()}),a(167,"mat-icon"),l(168,"add"),i(),l(169),m(170,"translate"),i()(),a(171,"div",35),M(172,Aa,11,16,"div",36,xt),i(),a(174,"div",22)(175,"table",26)(176,"thead")(177,"tr")(178,"th"),l(179),m(180,"translate"),i(),a(181,"th"),l(182),m(183,"translate"),i(),a(184,"th"),l(185),m(186,"translate"),i(),a(187,"th"),l(188),m(189,"translate"),i(),a(190,"th"),l(191),m(192,"translate"),i(),a(193,"th"),l(194),m(195,"translate"),i()()(),a(196,"tbody"),M(197,Va,28,13,"tr",null,Re,!1,Wa,4,3,"tr"),i()()()()(),a(200,"mat-tab"),T(201,qa,4,3,"ng-template",7),a(202,"div",8)(203,"div",9)(204,"div")(205,"h2"),l(206),m(207,"translate"),i(),a(208,"p"),l(209),m(210,"translate"),i()(),a(211,"button",10),g("click",function(){return t.openRegistrarIngreso()}),a(212,"mat-icon"),l(213,"add"),i(),l(214),m(215,"translate"),i()(),a(216,"div",37),M(217,Ka,13,14,"div",38,xt),i(),a(219,"div",33),M(220,Ha,3,6,"button",34,Hi),i(),a(222,"div",22)(223,"h3",39),l(224),m(225,"translate"),i(),a(226,"table",26)(227,"thead")(228,"tr")(229,"th"),l(230),m(231,"translate"),i(),a(232,"th"),l(233),m(234,"translate"),i(),a(235,"th"),l(236),m(237,"translate"),i(),a(238,"th"),l(239),m(240,"translate"),i(),a(241,"th"),l(242),m(243,"translate"),i(),a(244,"th"),l(245),m(246,"translate"),i(),a(247,"th"),l(248),m(249,"translate"),i()()(),a(250,"tbody"),M(251,Ga,38,12,"tr",null,Re,!1,$a,4,3,"tr"),i()()()()()()()),e&2&&(r(4),s(p(5,67,"clinical.title")),r(3),s(p(8,69,"clinical.subtitle")),r(5),_("placeholder",p(13,71,"clinical.search.placeholder")),r(4),Fe("selectedIndex",t.activeTab),r(7),s(p(24,73,"clinical.patients.title")),r(3),s(p(27,75,"clinical.patients.subtitle")),r(5),x(" ",p(32,77,"clinical.patients.register")," "),r(6),Fe("ngModel",t.patientSearch),_("placeholder",p(38,79,"clinical.patients.search")),r(3),Fe("value",t.speciesFilter),r(2),s(p(43,81,"clinical.patients.filterAll")),r(3),s(p(46,83,"clinical.patients.filterDog")),r(3),s(p(49,85,"clinical.patients.filterCat")),r(3),s(p(52,87,"clinical.patients.filterBird")),r(2),v(t.store.loading()?53:54),r(8),s(p(62,89,"clinical.clients.title")),r(3),s(p(65,91,"clinical.clients.subtitle")),r(5),x(" ",p(70,93,"clinical.clients.register")," "),r(6),Fe("ngModel",t.clientSearch),_("placeholder",p(76,95,"clinical.clients.search")),r(2),v(t.store.loading()?77:78),r(8),s(p(86,97,"clinical.consultations.title")),r(3),s(p(89,99,"clinical.consultations.subtitle")),r(5),x(" ",p(94,101,"clinical.consultations.newConsult")," "),r(5),s(p(99,103,"clinical.consultations.recent")),r(3),F("btn-sm-active",t.consultDateFilter==="all"),r(),s(p(103,105,"clinical.consultations.filterAll")),r(2),F("btn-sm-active",t.consultDateFilter==="today"),r(),s(p(106,107,"clinical.consultations.filterToday")),r(2),F("btn-sm-active",t.consultDateFilter==="week"),r(),s(p(109,109,"clinical.consultations.filterWeek")),r(6),s(p(115,111,"clinical.consultations.colId")),r(3),s(p(118,113,"clinical.consultations.colPatient")),r(3),s(p(121,115,"clinical.consultations.colClient")),r(3),s(p(124,117,"clinical.consultations.colType")),r(3),s(p(127,119,"clinical.consultations.colDiagnosis")),r(3),s(p(130,121,"clinical.consultations.colDate")),r(3),s(p(133,123,"clinical.consultations.colStatus")),r(3),s(p(136,125,"clinical.consultations.colActions")),r(3),E(t.pagedConsultations),r(5),s(zt(144,127,"clinical.consultations.showing",Rt(166,Zn,t.pagedConsultations.length,t.filteredConsultations.length))),r(3),_("disabled",t.consultPage<=1),r(3),E(t.consultPageNumbers),r(2),_("disabled",t.consultPage>=t.consultTotalPages),r(6),v(t.historyPatient?158:157),r(7),E(t.vaccineFilters),r(5),x(" ",p(170,130,"clinical.vaccines.register")," "),r(3),E(t.vaccineSummary),r(7),s(p(180,132,"clinical.vaccines.colPatient")),r(3),s(p(183,134,"clinical.vaccines.colVaccine")),r(3),s(p(186,136,"clinical.vaccines.colLastApplied")),r(3),s(p(189,138,"clinical.vaccines.colNextDose")),r(3),s(p(192,140,"clinical.vaccines.colStatus")),r(3),s(p(195,142,"clinical.vaccines.colActions")),r(3),E(t.filteredVaccines),r(9),s(p(207,144,"clinical.hospitalization.title")),r(3),s(p(210,146,"clinical.hospitalization.subtitle")),r(5),x(" ",p(215,148,"clinical.hospitalization.register")," "),r(3),E(t.hospitalStats),r(3),E(t.hospFilters),r(4),s(p(225,150,"clinical.hospitalization.list")),r(6),s(p(231,152,"clinical.hospitalization.colPatient")),r(3),s(p(234,154,"clinical.hospitalization.colOwner")),r(3),s(p(237,156,"clinical.hospitalization.colStatus")),r(3),s(p(240,158,"clinical.hospitalization.colAdmissionDate")),r(3),s(p(243,160,"clinical.hospitalization.colDiagnosis")),r(3),s(p(246,162,"clinical.hospitalization.colTreatment")),r(3),s(p(249,164,"clinical.hospitalization.colActions")),r(3),E(t.filteredHospitalizations))},dependencies:[Vt,V,N,j,H,Qe,Si,vi,yi,Ci,qi,Wi,$e,ci,W,q,li,G,Ht],styles:[".clinical[_ngcontent-%COMP%]{min-height:100%}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.header-search-input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:8px 14px 8px 36px;font-size:13px;outline:none;width:260px;margin-left:-30px}.search-icon[_ngcontent-%COMP%]{font-size:18px;color:#94a3b8}.notif-icon[_ngcontent-%COMP%]{color:#64748b;cursor:pointer}.clinical-tabs[_ngcontent-%COMP%]{background:#fff}  .clinical-tabs .mat-mdc-tab{min-width:120px}  .clinical-tabs .mat-mdc-tab-header{border-bottom:1px solid #E2E8F0;padding:0 20px}  .clinical-tabs .mdc-tab--active .mdc-tab__text-label{color:#06b6d4!important}  .clinical-tabs .mdc-tab-indicator__content--underline{border-color:#06b6d4!important}.tab-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:4px;vertical-align:middle}.tab-content[_ngcontent-%COMP%]{padding:24px 28px}.empty-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;gap:12px;color:#94a3b8}.empty-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#475569;margin:0}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin:0 0 4px;color:#1e293b}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.filters-row[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.search-wrap[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 12px}.search-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8;font-size:18px}.filter-input[_ngcontent-%COMP%]{border:none;outline:none;font-size:13px;flex:1;padding:10px 0;background:transparent}.species-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 8px}.species-select[_ngcontent-%COMP%]{border:none!important}  .species-select .mat-mdc-select-trigger{padding:8px 0}.filter-icon-btn[_ngcontent-%COMP%]{color:#475569}.patients-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.patient-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 3px #0000000f;border:1px solid #F1F5F9}.pc-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.pc-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pc-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:22px;width:22px;height:22px}.pc-title[_ngcontent-%COMP%]{flex:1}.pc-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b}.pc-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.pc-details[_ngcontent-%COMP%]{margin-bottom:12px}.pc-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#475569;padding:3px 0}.pc-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#94a3b8}.pc-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#94a3b8}.pc-actions[_ngcontent-%COMP%]{display:flex;align-items:center;border-top:1px solid #F1F5F9;padding-top:10px}.btn-ver-ficha[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:13px!important;flex:1;justify-content:flex-start!important}.btn-ver-ficha[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f;overflow:hidden}.table-card[_ngcontent-%COMP%]{overflow:auto}.table-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 20px}.table-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin:0;color:#1e293b}.table-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.btn-sm[_ngcontent-%COMP%]{border-radius:6px!important;font-size:12px!important;color:#475569!important;border-color:#e2e8f0!important}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-size:12px;font-weight:600;color:#94a3b8;padding:10px 16px;background:#f8fafc;border-bottom:1px solid #E2E8F0;text-transform:uppercase;letter-spacing:.5px}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;border-bottom:1px solid #F8FAFC;font-size:13px;color:#475569;vertical-align:middle}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f8fafc}.td-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;font-family:monospace}.td-patient[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.td-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.td-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:16px;width:16px;height:16px}.td-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b}.td-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.table-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-top:1px solid #F1F5F9;font-size:12px;color:#94a3b8}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.pg-btn[_ngcontent-%COMP%]{width:28px;height:28px;border:1px solid #E2E8F0;border-radius:6px;background:#fff;font-size:12px;cursor:pointer;color:#475569}.pg-btn.active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.text-danger[_ngcontent-%COMP%]{color:#ef4444!important;font-weight:500}.action-link[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:12px!important}.td-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.vsummary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.vsummary[_ngcontent-%COMP%]{border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:4px}.vs-icon[_ngcontent-%COMP%]{font-size:24px!important;width:24px!important;height:24px!important}.vs-val[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.vs-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.vs-sub[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.chips-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}.chip[_ngcontent-%COMP%]{padding:6px 16px;border-radius:20px;border:1px solid #E2E8F0;background:#fff;font-size:13px;font-weight:500;color:#475569;cursor:pointer;transition:all .15s}.chip.chip-active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.hosp-stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.hosp-stat-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 3px #0000000f}.hosp-stat-label[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:4px}.hosp-stat-val[_ngcontent-%COMP%]{font-size:26px;font-weight:700}.hosp-stat-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.hosp-stat-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center}.hosp-stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.treat-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;font-size:12px;color:#475569}.treat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1px 0}.table-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;padding:16px 20px 0}.history-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:20px}.hist-avatar[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.hist-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px;width:30px;height:30px}.hist-info[_ngcontent-%COMP%]{flex:1}.hist-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 4px;color:#1e293b}.hist-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin:0}.hist-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.hist-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}.hist-stat[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:16px 20px;text-align:center;box-shadow:0 1px 3px #0000000f}.hs-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b}.hs-lbl[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-top:2px}.hist-section-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.tl-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px #0000000f}.tl-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px}.tl-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.tl-type[_ngcontent-%COMP%]{font-size:14px;font-weight:600;flex:1}.tl-date[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.tl-doc[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-left:8px}.tl-body[_ngcontent-%COMP%]{padding:16px}.tl-section[_ngcontent-%COMP%]{margin-bottom:14px}.tl-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.tl-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#475569;margin-bottom:6px}.tl-text[_ngcontent-%COMP%]{font-size:13px;color:#64748b;line-height:1.6;margin:0}.tl-vitals[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}.vital[_ngcontent-%COMP%]{background:#f8fafc;border-radius:6px;padding:8px 12px}.vital[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8;display:block}.vital[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;color:#1e293b}.tl-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 16px}.tl-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#64748b;padding:2px 0}.tl-temp[_ngcontent-%COMP%]{font-size:12px;color:#3b82f6;font-weight:500;background:#eff6ff;border-radius:4px;padding:2px 6px}.tl-locked[_ngcontent-%COMP%]{font-size:11px!important;padding:2px 8px!important;display:inline-flex;align-items:center;gap:2px}.allergy-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;background:#fef2f2;border:1px solid #FECACA;border-radius:10px;padding:12px 16px;margin-bottom:16px;color:#991b1b}.allergy-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#ef4444;flex-shrink:0}.allergy-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px;font-weight:600}.allergy-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.no-allergy-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#f0fdf4;border:1px solid #BBF7D0;border-radius:10px;padding:10px 14px;margin-bottom:16px;color:#166534;font-size:13px}.no-allergy-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#22c55e;font-size:18px;width:18px;height:18px}.tl-footer[_ngcontent-%COMP%]{padding-top:12px;border-top:1px solid #F1F5F9}.btn-sm-tratamiento[_ngcontent-%COMP%]{font-size:12px!important;height:30px!important;color:#06b6d4!important;border-color:#06b6d4!important;border-radius:6px!important}.btn-sm-tratamiento[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px!important;width:16px!important;height:16px!important;vertical-align:middle}.pc-allergy-alert[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;background:#fef2f2;border-radius:6px;padding:5px 8px;margin-top:6px;color:#991b1b;font-size:12px;font-weight:500}.pc-allergy-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;color:#ef4444}.row-closed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{opacity:.7}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:center}"]})};export{ji as ClinicalManagement};
