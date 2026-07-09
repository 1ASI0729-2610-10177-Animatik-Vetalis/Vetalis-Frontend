import{a as Fi,b as Oi,c as Ii,d as ki,e as Ti}from"./chunk-WMIEUJ2E.js";import{a as Zt,b as li,c as ri,d as Ge,e as di,f as ci,g as dt,h as si}from"./chunk-ZPCD4TLB.js";import{a as Ci,b as wi}from"./chunk-R6AUPVSG.js";import{a as Q,b as Mi,c as Ei}from"./chunk-NSAAHXSQ.js";import{a as le,b as re,c as yi,d as de,e as ce,f as se,g as me,h as j}from"./chunk-MTM3SF6Z.js";import{a as Si}from"./chunk-Z54EB7QL.js";import{b as Qt,c as Ut}from"./chunk-P6SFRUZB.js";import{a as G}from"./chunk-3AEDX6NP.js";import{c as gi,d as _i,l as xi,r as bi,t as ct,u as st,v as vi,w as U}from"./chunk-4PFNYCIS.js";import{b as J,d as k,e as mi,f as ee,g as te,h as pi,j as ie,k as fi,l as ne,m as K,n as ve,o as ye,p as Ce,r as ui,s as ae,t as hi,u as oe}from"./chunk-IK2YHG2I.js";import{c as be}from"./chunk-ETUNJEQG.js";import"./chunk-LGPXEZYI.js";import{a as Qe,b as $,c as H}from"./chunk-GPXLBI6B.js";import{E as oi,a as Jt,f as He,h as ei,n as ti,q as ii,s as je,t as ni,v as Te,w as ai,x as rt}from"./chunk-TOPPFS3Q.js";import{A as W,B as q,d as $t,e as Ht,f as jt,g as Gt,s as Yt,t as Xt,y as Ke,z as $e}from"./chunk-G3XSK2OD.js";import{$b as c,Ab as o,Ac as qt,Bb as a,Bc as qe,Cb as y,Db as Ot,E as Ct,Eb as It,Ec as Z,Fb as at,Fc as lt,Gb as O,Gc as Kt,Hb as kt,J as St,Kb as x,Mb as u,N as pe,Nb as Fe,O as nt,Ob as V,P as X,Pb as Ne,Qa as l,Qb as Oe,Rb as w,Sb as F,Tb as Tt,Ub as Pt,Vb as ot,W as Re,Wb as Ie,Xb as T,Y as L,Ya as Be,Yb as I,Zb as Dt,_ as f,_b as r,ac as v,bc as N,cc as At,d as vt,da as C,db as R,dc as Rt,ea as S,eb as Ve,ec as zt,fa as Mt,fb as ue,fc as Bt,g as Y,ga as Et,gc as Vt,jb as z,jc as Le,ka as ze,la as we,lc as Nt,nc as m,oc as p,pa as B,pc as We,q as Me,rc as Lt,sa as wt,sb as he,ta as Ft,tb as h,ub as g,v as yt,vc as A,wa as fe,wb as ge,xb as M,xc as Wt,y as xe,yb as E,z as Ee,zb as b,zc as ke}from"./chunk-CQB35AO6.js";var Pe=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Y;constructor(n=!1,e,i=!0,d){this._multiple=n,this._emitChanges=i,this.compareWith=d,e&&e.length&&(n?e.forEach(s=>this._markSelected(s)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(s=>this._getConcreteValue(s)));n.forEach(s=>this._markSelected(s)),e.filter(s=>!i.has(this._getConcreteValue(s,i))).forEach(s=>this._unmarkSelected(s));let d=this._hasQueuedChanges();return this._emitChangeEvent(),d}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var on=["notch"],ln=["matFormFieldNotchedOutline",""],rn=["*"],Pi=["iconPrefixContainer"],Di=["textPrefixContainer"],Ai=["iconSuffixContainer"],Ri=["textSuffixContainer"],dn=["textField"],cn=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],sn=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function mn(t,n){t&1&&y(0,"span",21)}function pn(t,n){if(t&1&&(o(0,"label",20),V(1,1),h(2,mn,1,0,"span",21),a()),t&2){let e=u(2);b("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),he("for",e._control.disableAutomaticLabeling?null:e._control.id),l(2),g(!e.hideRequiredMarker&&e._control.required?2:-1)}}function fn(t,n){if(t&1&&h(0,pn,3,5,"label",20),t&2){let e=u();g(e._hasFloatingLabel()?0:-1)}}function un(t,n){t&1&&y(0,"div",7)}function hn(t,n){}function gn(t,n){if(t&1&&z(0,hn,0,0,"ng-template",13),t&2){u(2);let e=Ie(1);b("ngTemplateOutlet",e)}}function _n(t,n){if(t&1&&(o(0,"div",9),h(1,gn,1,1,null,13),a()),t&2){let e=u();b("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),l(),g(e._forceDisplayInfixLabel()?-1:1)}}function xn(t,n){t&1&&(o(0,"div",10,2),V(2,2),a())}function bn(t,n){t&1&&(o(0,"div",11,3),V(2,3),a())}function vn(t,n){}function yn(t,n){if(t&1&&z(0,vn,0,0,"ng-template",13),t&2){u();let e=Ie(1);b("ngTemplateOutlet",e)}}function Cn(t,n){t&1&&(o(0,"div",14,4),V(2,4),a())}function Sn(t,n){t&1&&(o(0,"div",15,5),V(2,5),a())}function Mn(t,n){t&1&&y(0,"div",16)}function En(t,n){t&1&&(o(0,"div",18),V(1,6),a())}function wn(t,n){if(t&1&&(o(0,"mat-hint",22),r(1),a()),t&2){let e=u(2);b("id",e._hintLabelId),l(),c(e.hintLabel)}}function Fn(t,n){if(t&1&&(o(0,"div",19),h(1,wn,2,2,"mat-hint",22),V(2,7),y(3,"div",23),V(4,8),a()),t&2){let e=u();l(),g(e.hintLabel?1:-1)}}var mt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=ue({type:t,selectors:[["mat-label"]]})}return t})(),On=new L("MatError");var pt=(()=>{class t{align="start";id=f(Te).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=ue({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,d){i&2&&(kt("id",d.id),he("align",null),I("mat-mdc-form-field-hint-end",d.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),In=new L("MatPrefix");var kn=new L("MatSuffix");var qi=new L("FloatingLabelParent"),zi=(()=>{class t{_elementRef=f(fe);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=f(Fi);_ngZone=f(we);_parent=f(qi);_resizeSubscription=new vt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Tn(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ue({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,d){i&2&&I("mdc-floating-label--float-above",d.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Tn(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Bi="mdc-line-ripple--active",Ue="mdc-line-ripple--deactivating",Vi=(()=>{class t{_elementRef=f(fe);_cleanupTransitionEnd;constructor(){let e=f(we),i=f(Be);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ue),e.add(Bi)}deactivate(){this._elementRef.nativeElement.classList.add(Ue)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,d=i.contains(Ue);e.propertyName==="opacity"&&d&&i.remove(Bi,Ue)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ue({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Ni=(()=>{class t{_elementRef=f(fe);_ngZone=f(we);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,d){if(i&1&&Oe(on,5),i&2){let s;w(s=F())&&(d._notch=s.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,d){i&2&&I("mdc-notched-outline--notched",d.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ln,ngContentSelectors:rn,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,d){i&1&&(Fe(),at(0,"div",1),Ot(1,"div",2,0),V(3),It(),at(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),ft=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=ue({type:t})}return t})();var ut=new L("MatFormField"),Pn=new L("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Li="fill",Dn="auto",Wi="fixed",An="translateY(-50%)",Ki=(()=>{class t{_elementRef=f(fe);_changeDetectorRef=f(qe);_platform=f(Jt);_idGenerator=f(Te);_ngZone=f(we);_defaults=f(Pn,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ke("iconPrefixContainer");_textPrefixContainerSignal=ke("textPrefixContainer");_iconSuffixContainerSignal=ke("iconSuffixContainer");_textSuffixContainerSignal=ke("textSuffixContainer");_prefixSuffixContainers=A(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=qt(mt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=oi(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Dn}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Li;this._appearanceSignal.set(i)}_appearanceSignal=B(Li);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Wi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Wi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=He();constructor(){let e=this._defaults,i=f(Ke);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),wt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=A(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,d="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(d+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(d+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(pe([void 0,void 0]),Me(()=>[i.errorState,i.userAriaDescribedBy]),St(),Ee(([[s,_],[P,D]])=>s!==P||_!==D)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(X(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),xe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Kt({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=A(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let s=this._hintChildren?this._hintChildren.find(P=>P.align==="start"):null,_=this._hintChildren?this._hintChildren.find(P=>P.align==="end"):null;s?e.push(s.id):this._hintLabel&&e.push(this._hintLabelId),_&&e.push(_.id)}else this._errorChildren&&e.push(...this._errorChildren.map(s=>s.id));let i=this._control.describedByIds,d;if(i){let s=this._describedByIds||e;d=e.concat(i.filter(_=>_&&!s.includes(_)))}else d=e;this._control.setDescribedByIds(d),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,d=this._iconSuffixContainer?.nativeElement,s=this._textSuffixContainer?.nativeElement,_=e?.getBoundingClientRect().width??0,P=i?.getBoundingClientRect().width??0,D=d?.getBoundingClientRect().width??0,Se=s?.getBoundingClientRect().width??0,it=this._currentDirection==="rtl"?"-1":"1",en=`${_+P}px`,tn=`calc(${it} * (${en} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,nn=`var(--mat-mdc-form-field-label-transform, ${An} translateX(${tn}))`,an=_+P+D+Se;return[nn,an]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,d]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),d!==null&&this._notchedOutline?._setMaxWidth(d)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,d,s){if(i&1&&(Tt(s,d._labelChild,mt,5),Ne(s,ft,5)(s,In,5)(s,kn,5)(s,On,5)(s,pt,5)),i&2){ot();let _;w(_=F())&&(d._formFieldControl=_.first),w(_=F())&&(d._prefixChildren=_),w(_=F())&&(d._suffixChildren=_),w(_=F())&&(d._errorChildren=_),w(_=F())&&(d._hintChildren=_)}},viewQuery:function(i,d){if(i&1&&(Pt(d._iconPrefixContainerSignal,Pi,5)(d._textPrefixContainerSignal,Di,5)(d._iconSuffixContainerSignal,Ai,5)(d._textSuffixContainerSignal,Ri,5),Oe(dn,5)(Pi,5)(Di,5)(Ai,5)(Ri,5)(zi,5)(Ni,5)(Vi,5)),i&2){ot(4);let s;w(s=F())&&(d._textField=s.first),w(s=F())&&(d._iconPrefixContainer=s.first),w(s=F())&&(d._textPrefixContainer=s.first),w(s=F())&&(d._iconSuffixContainer=s.first),w(s=F())&&(d._textSuffixContainer=s.first),w(s=F())&&(d._floatingLabel=s.first),w(s=F())&&(d._notchedOutline=s.first),w(s=F())&&(d._lineRipple=s.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,d){i&2&&I("mat-mdc-form-field-label-always-float",d._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",d._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",d._hasIconSuffix)("mat-form-field-invalid",d._control.errorState)("mat-form-field-disabled",d._control.disabled)("mat-form-field-autofilled",d._control.autofilled)("mat-form-field-appearance-fill",d.appearance=="fill")("mat-form-field-appearance-outline",d.appearance=="outline")("mat-form-field-hide-placeholder",d._hasFloatingLabel()&&!d._shouldLabelFloat())("mat-primary",d.color!=="accent"&&d.color!=="warn")("mat-accent",d.color==="accent")("mat-warn",d.color==="warn")("ng-untouched",d._shouldForward("untouched"))("ng-touched",d._shouldForward("touched"))("ng-pristine",d._shouldForward("pristine"))("ng-dirty",d._shouldForward("dirty"))("ng-valid",d._shouldForward("valid"))("ng-invalid",d._shouldForward("invalid"))("ng-pending",d._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Le([{provide:ut,useExisting:t},{provide:qi,useExisting:t}])],ngContentSelectors:sn,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,d){if(i&1&&(Fe(cn),z(0,fn,1,1,"ng-template",null,0,Lt),o(2,"div",6,1),x("click",function(_){return d._control.onContainerClick(_)}),h(4,un,1,0,"div",7),o(5,"div",8),h(6,_n,2,2,"div",9),h(7,xn,3,0,"div",10),h(8,bn,3,0,"div",11),o(9,"div",12),h(10,yn,1,1,null,13),V(11),a(),h(12,Cn,3,0,"div",14),h(13,Sn,3,0,"div",15),a(),h(14,Mn,1,0,"div",16),a(),o(15,"div",17),h(16,En,2,0,"div",18)(17,Fn,5,1,"div",19),a()),i&2){let s;l(2),I("mdc-text-field--filled",!d._hasOutline())("mdc-text-field--outlined",d._hasOutline())("mdc-text-field--no-label",!d._hasFloatingLabel())("mdc-text-field--disabled",d._control.disabled)("mdc-text-field--invalid",d._control.errorState),l(2),g(!d._hasOutline()&&!d._control.disabled?4:-1),l(2),g(d._hasOutline()?6:-1),l(),g(d._hasIconPrefix?7:-1),l(),g(d._hasTextPrefix?8:-1),l(2),g(!d._hasOutline()||d._forceDisplayInfixLabel()?10:-1),l(2),g(d._hasTextSuffix?12:-1),l(),g(d._hasIconSuffix?13:-1),l(),g(d._hasOutline()?-1:14),l(),I("mat-mdc-form-field-subscript-dynamic-size",d.subscriptSizing==="dynamic");let _=d._getSubscriptMessageType();l(),g((s=_)==="error"?16:s==="hint"?17:-1)}},dependencies:[zi,Ni,jt,Vi,pt],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var $i=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ve({type:t});static \u0275inj=Re({imports:[ti,Ki,$e]})}return t})();var Nn=["trigger"],Ln=["panel"],Wn=[[["mat-select-trigger"]],"*"],qn=["mat-select-trigger","*"];function Kn(t,n){if(t&1&&(o(0,"span",4),r(1),a()),t&2){let e=u();l(),c(e.placeholder)}}function $n(t,n){t&1&&V(0)}function Hn(t,n){if(t&1&&(o(0,"span",11),r(1),a()),t&2){let e=u(2);l(),c(e.triggerValue)}}function jn(t,n){if(t&1&&(o(0,"span",5),h(1,$n,1,0)(2,Hn,2,1,"span",11),a()),t&2){let e=u();l(),g(e.customTrigger?1:2)}}function Gn(t,n){if(t&1){let e=O();o(0,"div",12,1),x("keydown",function(d){C(e);let s=u();return S(s._handleKeydown(d))}),V(2,1),a()}if(t&2){let e=u();Dt(e.panelClass),I("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),he("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Qn=new L("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=f(Et);return()=>xi(t)}}),Un=new L("MAT_SELECT_CONFIG"),Yn=new L("MatSelectTrigger"),ht=class{source;value;constructor(n,e){this.source=n,this.value=e}},Ui=(()=>{class t{_viewportRuler=f(gi);_changeDetectorRef=f(qe);_elementRef=f(fe);_dir=f(Ke,{optional:!0});_idGenerator=f(Te);_renderer=f(Be);_parentFormField=f(ut,{optional:!0});ngControl=f(mi,{self:!0,optional:!0});_liveAnnouncer=f(ii);_defaultOptions=f(Un,{optional:!0});_animationsDisabled=He();_popoverLocation;_initialized=new Y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let d=this.panel.nativeElement,s=di(e,this.options,this.optionGroups),_=i._getHostElement();e===0&&s===1?d.scrollTop=0:d.scrollTop=ci(_.offsetTop,_.offsetHeight,d.scrollTop,d.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ht(this,e)}_scrollStrategyFactory=f(Qn);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new Y;_errorStateTracker;stateChanges=new Y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=B(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(k.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=yt(()=>{let e=this.options;return e?e.changes.pipe(pe(e),nt(()=>xe(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(nt(()=>this.optionSelectionChanges))});openedChange=new ze;_openedStream=this.openedChange.pipe(Ee(e=>e),Me(()=>{}));_closedStream=this.openedChange.pipe(Ee(e=>!e),Me(()=>{}));selectionChange=new ze;valueChange=new ze;constructor(){let e=f(Zt),i=f(pi,{optional:!0}),d=f(K,{optional:!0}),s=f(new Wt("tabindex"),{optional:!0}),_=f(bi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new si(e,this.ngControl,d,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=s==null?0:parseInt(s)||0,this._popoverLocation=_?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Pe(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(X(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(X(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(pe(null),X(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let d=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?d.setAttribute("aria-labelledby",e):d.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ct(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&rt(this._trackedModal,"aria-owns",i),ai(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;rt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(d),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",s=>{s.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),d=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,d=i===40||i===38||i===37||i===39,s=i===13||i===32,_=this._keyManager;if(!_.isTyping()&&s&&!je(e)||(this.multiple||e.altKey)&&d)e.preventDefault(),this.open();else if(!this.multiple){let P=this.selected;_.onKeydown(e);let D=this.selected;D&&P!==D&&this._liveAnnouncer.announce(D.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,d=e.keyCode,s=d===40||d===38,_=i.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(!_&&(d===13||d===32)&&i.activeItem&&!je(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!_&&this._multiple&&d===65&&e.ctrlKey){e.preventDefault();let P=this.options.some(D=>!D.disabled&&!D.selected);this.options.forEach(D=>{D.disabled||(P?D.select():D.deselect())})}else{let P=i.activeItemIndex;i.onKeydown(e),this._multiple&&s&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==P&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!je(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(d=>{if(this._selectionModel.isSelected(d))return!1;try{return(d.value!=null||this.canSelectNullableOptions)&&this._compareWith(d.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ct?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ni(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=xe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(X(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),xe(...this.options.map(i=>i._stateChanges)).pipe(X(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let d=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(d!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),d!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,d)=>this.sortComparator?this.sortComparator(i,d,e):e.indexOf(i)-e.indexOf(d)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(d=>d.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=ei(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-select"]],contentQueries:function(i,d,s){if(i&1&&Ne(s,Yn,5)(s,Ge,5)(s,ri,5),i&2){let _;w(_=F())&&(d.customTrigger=_.first),w(_=F())&&(d.options=_),w(_=F())&&(d.optionGroups=_)}},viewQuery:function(i,d){if(i&1&&Oe(Nn,5)(Ln,5)(st,5),i&2){let s;w(s=F())&&(d.trigger=s.first),w(s=F())&&(d.panel=s.first),w(s=F())&&(d._overlayDir=s.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,d){i&1&&x("keydown",function(_){return d._handleKeydown(_)})("focus",function(){return d._onFocus()})("blur",function(){return d._onBlur()}),i&2&&(he("id",d.id)("tabindex",d.disabled?-1:d.tabIndex)("aria-controls",d.panelOpen?d.id+"-panel":null)("aria-expanded",d.panelOpen)("aria-label",d.ariaLabel||null)("aria-required",d.required.toString())("aria-disabled",d.disabled.toString())("aria-invalid",d.errorState)("aria-activedescendant",d._getAriaActiveDescendant()),I("mat-mdc-select-disabled",d.disabled)("mat-mdc-select-invalid",d.errorState)("mat-mdc-select-required",d.required)("mat-mdc-select-empty",d.empty)("mat-mdc-select-multiple",d.multiple)("mat-select-open",d.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:lt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Z],placeholder:"placeholder",required:[2,"required","required",Z],multiple:[2,"multiple","multiple",Z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",lt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Le([{provide:ft,useExisting:t},{provide:li,useExisting:t}]),Ft],ngContentSelectors:qn,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,d){if(i&1&&(Fe(Wn),o(0,"div",2,0),x("click",function(){return d.open()}),o(3,"div",3),h(4,Kn,2,1,"span",4)(5,jn,3,1,"span",5),a(),o(6,"div",6)(7,"div",7),Mt(),o(8,"svg",8),y(9,"path",9),a()()()(),z(10,Gn,3,16,"ng-template",10),x("detach",function(){return d.close()})("backdropClick",function(){return d.close()})("overlayKeydown",function(_){return d._handleOverlayKeydown(_)})),i&2){let s=Ie(1);l(3),he("id",d._valueId),l(),g(d.empty?4:5),l(6),b("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",d._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",d._scrollStrategy)("cdkConnectedOverlayOrigin",d._preferredOverlayOrigin||s)("cdkConnectedOverlayPositions",d._positions)("cdkConnectedOverlayWidth",d._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",d._popoverLocation)}},dependencies:[ct,st],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var Yi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ve({type:t});static \u0275inj=Re({imports:[vi,dt,$e,_i,$i,dt]})}return t})();var Xi=(t,n)=>n.id;function Zn(t,n){if(t&1&&(o(0,"option",6),r(1),a()),t&2){let e=n.$implicit;b("value",e.id),l(),N("",e.name," (",e.owner,")")}}function Jn(t,n){if(t&1&&(o(0,"div",7)(1,"mat-icon",21),r(2,"warning"),a(),o(3,"span")(4,"strong"),r(5,"Alergia conocida:"),a(),r(6),a()()),t&2){let e=u();l(6),v(" ",e.allergyWarning())}}function ea(t,n){t&1&&(o(0,"p",8),r(1,"Cargando inventario..."),a())}function ta(t,n){if(t&1&&(o(0,"option",6),r(1),a()),t&2){let e=n.$implicit;b("value",e.id),l(),At("",e.nombre," \u2014 Stock disponible: ",e.stockActual," ",e.unidad)}}function ia(t,n){t&1&&(o(0,"p",23),r(1," Sin stock disponible. El administrador debe ingresar vacunas en el inventario. "),a())}function na(t,n){if(t&1&&r(0),t&2){let e=u(3);v(" \u2014 ",e.selectedMed.descripcion," ")}}function aa(t,n){if(t&1&&(o(0,"div",24)(1,"strong"),r(2),a(),r(3),h(4,na,1,1),a()),t&2){let e=u(2);l(2),c(e.selectedMed.nombre),l(),N(" \u2014 Stock: ",e.selectedMed.stockActual," ",e.selectedMed.unidad," "),l(),g(e.selectedMed.descripcion?4:-1)}}function oa(t,n){if(t&1&&(o(0,"select",22)(1,"option",5),r(2,"Seleccionar del inventario..."),a(),M(3,ta,2,4,"option",6,Xi),a(),h(5,ia,2,0,"p",23),h(6,aa,5,4,"div",24)),t&2){let e=u();l(3),E(e.medicamentos()),l(2),g(e.medicamentos().length===0?5:-1),l(),g(e.selectedMed?6:-1)}}function la(t,n){if(t&1&&(r(0),m(1,"number")),t&2){let e=u();v(" S/ ",We(1,1,e.selectedMed.precioUnitario,"1.2-2")," ")}}function ra(t,n){t&1&&(o(0,"span",16),r(1,"Selecciona una vacuna"),a())}function da(t,n){if(t&1&&(o(0,"option",6),r(1),a()),t&2){let e=n.$implicit;b("value",e),l(),c(e)}}var Ye=class t{fb=f(ae);ref=f(le);svc=f(G);snack=f(U);auth=f(be);reminderStore=f(Si);store=f(Q);data=f(re,{optional:!0});today=new Date().toISOString().split("T")[0];medicamentos=B([]);loadingMeds=B(!0);metodos=["Efectivo","Tarjeta","Transferencia","QR/Yape"];form=this.fb.group({mascotaId:[this.data?.patientId??"",k.required],medicamentoId:["",k.required],fechaAplicacion:[this.today,k.required],proximaDosis:[""],lote:[""],observaciones:[""],metodoPago:["Efectivo"]});mascotaIdValue=Ei(this.form.controls.mascotaId.valueChanges.pipe(pe(this.data?.patientId??null)),{initialValue:this.data?.patientId??null});allergyWarning=A(()=>{let n=this.mascotaIdValue();return n&&this.store.patients().find(i=>String(i.id)===String(n))?.alergias||null});submitting=!1;constructor(){this.svc.getMedicamentos().subscribe({next:n=>{this.medicamentos.set(n.filter(e=>e.stockActual>0)),this.loadingMeds.set(!1)},error:()=>this.loadingMeds.set(!1)})}get selectedMed(){let n=this.form.value.medicamentoId;return this.medicamentos().find(e=>String(e.id)===String(n))??null}submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e=this.selectedMed,i=Number(n.mascotaId),d=`${n.fechaAplicacion}T09:00:00`,s={mascotaId:i,tipoVacunaId:Number(n.medicamentoId),nombreVacuna:e?.nombre??"Vacuna",lote:n.lote||null,fechaAplicacion:n.fechaAplicacion,proximaDosis:n.proximaDosis||null,estado:"Aplicada",veterinarioId:Number(this.auth.user()?.id??0)};this.svc.createVacuna(s).subscribe({next:_=>{let P=e?.precioUnitario??0,D={mascotaId:i,medicamentoId:Number(n.medicamentoId),monto:P,metodoPago:n.metodoPago??"Efectivo",fechaPago:d,estado:"Pagado",descripcion:`Vacuna: ${e?.nombre??"Vacuna"}`};if(this.svc.createPago(D).subscribe({next:()=>{},error:Se=>console.warn("Pago no registrado:",Se)}),n.proximaDosis){let Se=this.store.patients().find(it=>String(it.id)===String(n.mascotaId));this.reminderStore.add({icon:"vaccines",title:`Pr\xF3xima dosis: ${e?.nombre??"Vacuna"}`,desc:`${Se?.name??"Paciente"} \xB7 ${n.proximaDosis}`,color:"#EF4444",bg:"#FEE2E2"})}this.snack.open("Vacuna y cobro registrados","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=R({type:t,selectors:[["app-registrar-vacuna-dialog"]],decls:58,vars:6,consts:[["mat-dialog-title","",1,"dlg-title"],[3,"ngSubmit","formGroup"],[1,"dlg-form"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[2,"display","flex","align-items","center","gap","8px","background","#FEF3C7","border","1px solid #F59E0B","border-radius","8px","padding","10px 14px","margin-bottom","12px","color","#92400E","font-size","13px"],[2,"font-size","12px","color","#94A3B8"],[1,"dlg-row"],["type","date","formControlName","fechaAplicacion"],["type","date","formControlName","proximaDosis"],["type","text","formControlName","lote","placeholder","Ej: LOT-2025-001"],["formControlName","observaciones","placeholder","Reacciones adversas, notas..."],[2,"margin","16px 0 8px","font-size","12px","font-weight","600","color","#64748B","text-transform","uppercase","letter-spacing",".5px","border-top","1px solid #E2E8F0","padding-top","16px"],[2,"padding","8px 12px","background","#F8FAFC","border","1px solid #E2E8F0","border-radius","8px","font-size","14px","color","#1E293B","font-weight","600"],[2,"color","#94A3B8","font-weight","400"],["formControlName","metodoPago"],["align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","mat-raised-button","",1,"dlg-btn-primary",3,"disabled"],[2,"color","#F59E0B","font-size","20px","min-width","20px"],["formControlName","medicamentoId"],[2,"font-size","12px","color","#EF4444","margin-top","4px"],[2,"margin-top","6px","padding","8px 12px","background","#ECFEFF","border-radius","8px","font-size","12px","color","#0E7490"]],template:function(e,i){e&1&&(o(0,"h2",0),r(1,"Registrar Vacuna"),a(),o(2,"form",1),x("ngSubmit",function(){return i.submit()}),o(3,"mat-dialog-content")(4,"div",2)(5,"div",3)(6,"label"),r(7,"Paciente *"),a(),o(8,"select",4)(9,"option",5),r(10,"Seleccionar paciente..."),a(),M(11,Zn,2,3,"option",6,Xi),a()(),h(13,Jn,7,1,"div",7),o(14,"div",3)(15,"label"),r(16,"Vacuna / Medicamento *"),a(),h(17,ea,2,0,"p",8)(18,oa,7,2),a(),o(19,"div",9)(20,"div",3)(21,"label"),r(22,"Fecha de Aplicaci\xF3n *"),a(),y(23,"input",10),a(),o(24,"div",3)(25,"label"),r(26,"Pr\xF3xima Dosis"),a(),y(27,"input",11),a()(),o(28,"div",3)(29,"label"),r(30,"N\xFAmero de Lote"),a(),y(31,"input",12),a(),o(32,"div",3)(33,"label"),r(34,"Observaciones"),a(),y(35,"textarea",13),a(),o(36,"div",14),r(37," Cobro "),a(),o(38,"div",9)(39,"div",3)(40,"label"),r(41,"Precio"),a(),o(42,"div",15),h(43,la,2,4)(44,ra,2,0,"span",16),a()(),o(45,"div",3)(46,"label"),r(47,"M\xE9todo de pago"),a(),o(48,"select",17),M(49,da,2,2,"option",6,ge),a()()()()(),o(51,"mat-dialog-actions",18)(52,"button",19),r(53,"Cancelar"),a(),o(54,"button",20)(55,"mat-icon"),r(56,"vaccines"),a(),r(57),a()()()),e&2&&(l(2),b("formGroup",i.form),l(9),E(i.store.patients()),l(2),g(i.allergyWarning()?13:-1),l(4),g(i.loadingMeds()?17:18),l(26),g(i.selectedMed!=null&&i.selectedMed.precioUnitario?43:44),l(6),E(i.metodos),l(5),b("disabled",i.submitting||i.loadingMeds()),l(3),v(" ",i.submitting?"Guardando...":"Registrar Vacuna"," "))},dependencies:[oe,ie,ye,Ce,J,ve,ee,te,K,ne,j,de,ce,me,se,H,$,q,W,Gt],encapsulation:2})};var ca=(t,n)=>n.id;function sa(t,n){if(t&1&&(o(0,"option",5),r(1),a()),t&2){let e=n.$implicit;b("value",e.id),l(),N("",e.name," (",e.owner,")")}}function ma(t,n){if(t&1&&(o(0,"option",5),r(1),a()),t&2){let e=n.$implicit;b("value",e),l(),c(e)}}var et=class t{fb=f(ae);ref=f(le);svc=f(G);snack=f(U);auth=f(be);store=f(Q);data=f(re,{optional:!0});today=new Date().toISOString().split("T")[0];estados=["Estable","Cr\xEDtico","Recuperaci\xF3n"];form=this.fb.group({mascotaId:[this.data?.patientId??"",k.required],fechaIngreso:[this.today,k.required],diagnostico:["",k.required],tratamiento:["",k.required],estado:["Estable",k.required],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e={mascotaId:Number(n.mascotaId),veterinarioId:Number(this.auth.user()?.id??0),fechaIngreso:`${n.fechaIngreso}T00:00:00`,motivo:n.diagnostico,diagnostico:n.diagnostico,tratamiento:n.tratamiento,estado:n.estado};this.svc.createHospitalizacion(e).subscribe({next:()=>{this.snack.open("Ingreso registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=R({type:t,selectors:[["app-registrar-ingreso-dialog"]],decls:42,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[1,"dlg-row"],["type","date","formControlName","fechaIngreso"],["formControlName","estado"],["formControlName","diagnostico","placeholder","Diagn\xF3stico de ingreso..."],["formControlName","tratamiento","placeholder","Medicamentos, procedimientos..."],["formControlName","observaciones","placeholder","Notas adicionales..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,i){e&1&&(o(0,"h2",0),r(1,"Registrar Ingreso Hospitalario"),a(),o(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),r(6,"Paciente *"),a(),o(7,"select",3)(8,"option",4),r(9,"Seleccionar paciente..."),a(),M(10,sa,2,3,"option",5,ca),a()(),o(12,"div",6)(13,"div",2)(14,"label"),r(15,"Fecha de Ingreso *"),a(),y(16,"input",7),a(),o(17,"div",2)(18,"label"),r(19,"Estado *"),a(),o(20,"select",8),M(21,ma,2,2,"option",5,ge),a()()(),o(23,"div",2)(24,"label"),r(25,"Diagn\xF3stico *"),a(),y(26,"textarea",9),a(),o(27,"div",2)(28,"label"),r(29,"Tratamiento Inicial *"),a(),y(30,"textarea",10),a(),o(31,"div",2)(32,"label"),r(33,"Observaciones"),a(),y(34,"textarea",11),a()()(),o(35,"mat-dialog-actions",12)(36,"button",13),r(37,"Cancelar"),a(),o(38,"button",14),x("click",function(){return i.submit()}),o(39,"mat-icon"),r(40,"local_hospital"),a(),r(41," Registrar Ingreso "),a()()),e&2&&(l(3),b("formGroup",i.form),l(7),E(i.store.patients()),l(11),E(i.estados),l(17),b("disabled",i.form.invalid||i.submitting))},dependencies:[oe,ie,ye,Ce,J,ve,ee,te,K,ne,j,de,ce,me,se,H,$,q,W],encapsulation:2})};var De=class t{fb=f(ae);ref=f(le);svc=f(G);snack=f(U);store=f(Q);data=f(re,{optional:!0});isEdit=!!this.data?.cliente;form=this.fb.group({nombre:[this.data?.cliente?.nombre??"",k.required],telefono:[this.data?.cliente?.telefono??"",k.required],correo:[this.data?.cliente?.email??"",[k.email]],direccion:[this.data?.cliente?.direccion??""],dni:[this.data?.cliente?.dni??""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e={nombre:n.nombre,telefono:n.telefono,email:n.correo,direccion:n.direccion,dni:n.dni};(this.isEdit?this.svc.updateCliente(this.data.cliente.id,e):this.svc.createCliente(e)).subscribe({next:()=>{this.snack.open(this.isEdit?"Cliente actualizado":"Cliente registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=R({type:t,selectors:[["app-registrar-cliente-dialog"]],decls:33,vars:5,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-row"],[1,"dlg-field","dlg-field-full"],["type","text","formControlName","nombre","placeholder","Nombre del propietario"],[1,"dlg-field"],["type","tel","formControlName","telefono","placeholder","+51 999 000 000"],["type","text","formControlName","dni","placeholder","12345678"],["type","email","formControlName","correo","placeholder","correo@ejemplo.com"],["type","text","formControlName","direccion","placeholder","Av. Principal 123..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,i){e&1&&(o(0,"h2",0),r(1),a(),o(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"div",3)(6,"label"),r(7,"Nombre completo *"),a(),y(8,"input",4),a()(),o(9,"div",2)(10,"div",5)(11,"label"),r(12,"Tel\xE9fono *"),a(),y(13,"input",6),a(),o(14,"div",5)(15,"label"),r(16,"DNI"),a(),y(17,"input",7),a()(),o(18,"div",5)(19,"label"),r(20,"Correo electr\xF3nico"),a(),y(21,"input",8),a(),o(22,"div",5)(23,"label"),r(24,"Direcci\xF3n"),a(),y(25,"input",9),a()()(),o(26,"mat-dialog-actions",10)(27,"button",11),r(28,"Cancelar"),a(),o(29,"button",12),x("click",function(){return i.submit()}),o(30,"mat-icon"),r(31),a(),r(32),a()()),e&2&&(l(),c(i.isEdit?"Editar Cliente":"Registrar Cliente"),l(2),b("formGroup",i.form),l(26),b("disabled",i.form.invalid||i.submitting),l(2),c(i.isEdit?"save":"person_add"),l(),v(" ",i.isEdit?"Guardar Cambios":"Registrar Cliente"," "))},dependencies:[oe,ie,J,ee,te,K,ne,j,de,ce,me,se,H,$,q,W],encapsulation:2})};function pa(t,n){if(t&1&&(o(0,"div",5)(1,"mat-icon",21),r(2,"warning"),a(),o(3,"span")(4,"strong"),r(5,"Alergia conocida:"),a(),r(6),a()()),t&2){let e=u();l(6),v(" ",e.allergyWarning())}}function fa(t,n){if(t&1&&(o(0,"option",9),r(1),a()),t&2){let e=n.$implicit;b("value",e.id),l(),N("",e.nombre," (Stock: ",e.stockActual,")")}}var tt=class t{fb=f(ae);ref=f(le);svc=f(G);snack=f(U);store=f(Q);data=f(re,{optional:!0});isEdit=!!this.data?.tratamiento;medicamentos=B([]);loading=B(!0);form=this.fb.group({consultaId:[this.data?.consultaId??"",k.required],medicamentoId:[this.data?.tratamiento?.medicamentoId??null],cantidad:[this.data?.tratamiento?.cantidad??1,[k.min(1)]],descripcion:[this.data?.tratamiento?.descripcion??""],dosis:[this.data?.tratamiento?.dosis??""],frecuencia:[this.data?.tratamiento?.frecuencia??""],duracion:[this.data?.tratamiento?.duracion??""]});allergyWarning=A(()=>{let n=this.data?.consultaId;if(!n)return null;let e=this.store.consultations().find(d=>String(d.id)===String(n));return e&&this.store.patients().find(d=>String(d.id)===String(e.mascotaId))?.alergias||null});constructor(){this.svc.getMedicamentos().subscribe({next:n=>{this.medicamentos.set(n),this.loading.set(!1)},error:()=>this.loading.set(!1)})}submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e={consultaId:Number(n.consultaId),medicamentoId:n.medicamentoId?Number(n.medicamentoId):null,cantidad:n.medicamentoId?n.cantidad??1:null,descripcion:n.descripcion,dosis:n.dosis,frecuencia:n.frecuencia,duracion:n.duracion};(this.isEdit?this.svc.updateTratamiento(this.data.tratamiento.id,e):this.svc.createTratamiento(e)).subscribe({next:()=>{this.snack.open(this.isEdit?"Tratamiento actualizado":"Tratamiento registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=R({type:t,selectors:[["app-tratamiento-dialog"]],decls:48,vars:7,consts:[[1,"dialog-wrap"],["mat-dialog-title","",1,"dialog-header"],[1,"d-icon"],["mat-icon-button","","mat-dialog-close","",1,"close-btn"],[1,"dialog-form",3,"formGroup"],[2,"display","flex","align-items","center","gap","8px","background","#FEF3C7","border","1px solid #F59E0B","border-radius","8px","padding","10px 14px","margin-bottom","16px","color","#92400E","font-size","13px"],[1,"form-row"],[1,"form-group",2,"flex","2"],["formControlName","medicamentoId",1,"form-select"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",2,"flex","1"],["formControlName","cantidad","type","number","min","1","placeholder","1",1,"form-input"],[1,"form-group"],["formControlName","descripcion","rows","3","placeholder","Descripci\xF3n del tratamiento prescrito...",1,"form-textarea"],["formControlName","dosis","placeholder","Ej: 250mg",1,"form-input"],["formControlName","frecuencia","placeholder","Ej: Cada 8 horas",1,"form-input"],["formControlName","duracion","placeholder","Ej: 7 d\xEDas",1,"form-input"],["align","end"],["mat-stroked-button","","mat-dialog-close",""],["mat-raised-button","",1,"btn-submit",3,"click","disabled"],[2,"color","#F59E0B","font-size","20px","min-width","20px"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"mat-icon",2),r(3,"medication"),a(),o(4,"span"),r(5),a(),o(6,"button",3)(7,"mat-icon"),r(8,"close"),a()()(),o(9,"mat-dialog-content")(10,"form",4),h(11,pa,7,1,"div",5),o(12,"div",6)(13,"div",7)(14,"label"),r(15,"Medicamento (opcional)"),a(),o(16,"select",8)(17,"option",9),r(18,"\u2014 Sin medicamento \u2014"),a(),z(19,fa,2,3,"option",10),a()(),o(20,"div",11)(21,"label"),r(22,"Cantidad"),a(),y(23,"input",12),a()(),o(24,"div",13)(25,"label"),r(26,"Descripci\xF3n del tratamiento"),a(),y(27,"textarea",14),a(),o(28,"div",6)(29,"div",13)(30,"label"),r(31,"Dosis"),a(),y(32,"input",15),a(),o(33,"div",13)(34,"label"),r(35,"Frecuencia"),a(),y(36,"input",16),a()(),o(37,"div",13)(38,"label"),r(39,"Duraci\xF3n"),a(),y(40,"input",17),a()()(),o(41,"mat-dialog-actions",18)(42,"button",19),r(43,"Cancelar"),a(),o(44,"button",20),x("click",function(){return i.submit()}),o(45,"mat-icon"),r(46,"save"),a(),r(47),a()()()),e&2&&(l(5),c(i.isEdit?"Editar Tratamiento":"Registrar Tratamiento"),l(5),b("formGroup",i.form),l(),g(i.allergyWarning()?11:-1),l(6),b("value",null),l(2),b("ngForOf",i.medicamentos()),l(25),b("disabled",i.form.invalid||i.submitting),l(3),v(" ",i.isEdit?"Actualizar":"Registrar Tratamiento"," "))},dependencies:[oe,ie,ye,Ce,J,fi,ve,ee,te,ui,K,ne,Ht,j,de,ce,me,se,H,$,Qe,q,W],encapsulation:2})};var ua=(t,n)=>({current:t,total:n}),Ae=(t,n)=>n.id,Zi=(t,n)=>n.value,bt=(t,n)=>n.labelKey,ha=(t,n)=>n.date,ga=(t,n)=>n.label;function _a(t,n){t&1&&(o(0,"div",1)(1,"mat-icon"),r(2,"admin_panel_settings"),a(),o(3,"span"),r(4,"Vista de solo lectura \u2014 Administrador"),a(),o(5,"button",39)(6,"mat-icon"),r(7,"arrow_back"),a(),r(8," Volver a Administraci\xF3n "),a()())}function xa(t,n){t&1&&(o(0,"mat-icon",40),r(1,"pets"),a(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.patients")))}function ba(t,n){if(t&1){let e=O();o(0,"button",41),x("click",function(){C(e);let d=u();return S(d.openRegistrarPaciente())}),o(1,"mat-icon"),r(2,"add"),a(),r(3),m(4,"translate"),a()}t&2&&(l(3),v(" ",p(4,1,"clinical.patients.register")," "))}function va(t,n){t&1&&(o(0,"div",19),r(1),m(2,"translate"),a()),t&2&&(l(),c(p(2,1,"clinical.patients.loading")))}function ya(t,n){if(t&1&&(o(0,"div",52)(1,"mat-icon"),r(2,"warning"),a(),o(3,"span"),r(4),m(5,"translate"),a()()),t&2){let e=u().$implicit;l(4),N("",p(5,2,"clinical.patients.allergies")," ",e.alergias)}}function Ca(t,n){if(t&1){let e=O();o(0,"button",55),x("click",function(){C(e);let d=u().$implicit,s=u(2);return S(s.openRegistrarPaciente(d))}),o(1,"mat-icon"),r(2,"edit"),a()(),o(3,"button",56),x("click",function(){C(e);let d=u().$implicit,s=u(2);return S(s.deletePatient(d))}),o(4,"mat-icon"),r(5,"delete"),a()()}}function Sa(t,n){if(t&1){let e=O();o(0,"div",42)(1,"div",44)(2,"div",45)(3,"mat-icon"),r(4,"pets"),a()(),o(5,"div",46)(6,"div",47),r(7),a(),o(8,"div",48),r(9),a()(),o(10,"span",49),r(11),a()(),o(12,"div",50)(13,"div",51)(14,"mat-icon"),r(15,"pets"),a(),o(16,"span"),r(17),m(18,"translate"),a(),r(19),a(),o(20,"div",51)(21,"mat-icon"),r(22,"cake"),a(),o(23,"span"),r(24),m(25,"translate"),a(),r(26),a(),o(27,"div",51)(28,"mat-icon"),r(29,"monitor_weight"),a(),o(30,"span"),r(31),m(32,"translate"),a(),r(33),a(),o(34,"div",51)(35,"mat-icon"),r(36,"person"),a(),o(37,"span"),r(38),m(39,"translate"),a(),r(40),a(),h(41,ya,6,4,"div",52),a(),o(42,"div",53)(43,"button",54),x("click",function(){let d=C(e).$implicit,s=u(2);return S(s.verFicha(d.id))}),o(44,"mat-icon"),r(45,"visibility"),a(),r(46),m(47,"translate"),a(),h(48,Ca,6,0),a()()}if(t&2){let e=n.$implicit,i=u(2);l(2),T("background",e.avatarColor),l(5),c(e.name),l(2),v("ID: ",e.id),l(2),c(e.status),l(6),c(p(18,17,"clinical.patients.species")),l(2),N(" ",e.species," - ",e.breed),l(5),c(p(25,19,"clinical.patients.age")),l(2),v(" ",e.age),l(5),c(p(32,21,"clinical.patients.weight")),l(2),v(" ",e.weight),l(5),c(p(39,23,"clinical.patients.owner")),l(2),v(" ",e.owner),l(),g(e.alergias?41:-1),l(5),v(" ",p(47,25,"clinical.patients.viewFile")," "),l(2),g(i.isAdmin()?-1:48)}}function Ma(t,n){t&1&&(o(0,"p",43),r(1),m(2,"translate"),a()),t&2&&(l(),c(p(2,1,"clinical.patients.empty")))}function Ea(t,n){if(t&1&&(o(0,"div",20),M(1,Sa,49,27,"div",42,Ae,!1,Ma,3,3,"p",43),a()),t&2){let e=u();l(),E(e.filteredPatients())}}function wa(t,n){t&1&&(o(0,"mat-icon",40),r(1,"people"),a(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.clients")))}function Fa(t,n){if(t&1){let e=O();o(0,"button",41),x("click",function(){C(e);let d=u();return S(d.openRegistrarCliente())}),o(1,"mat-icon"),r(2,"add"),a(),r(3),m(4,"translate"),a()}t&2&&(l(3),v(" ",p(4,1,"clinical.clients.register")," "))}function Oa(t,n){t&1&&(o(0,"div",19),r(1),m(2,"translate"),a()),t&2&&(l(),c(p(2,1,"clinical.patients.loading")))}function Ia(t,n){if(t&1){let e=O();o(0,"div",60)(1,"button",55),x("click",function(){C(e);let d=u().$implicit,s=u(2);return S(s.openEditarCliente(d))}),o(2,"mat-icon"),r(3,"edit"),a()(),o(4,"button",56),x("click",function(){C(e);let d=u().$implicit,s=u(2);return S(s.deleteCliente(d))}),o(5,"mat-icon",61),r(6,"delete"),a()()()}}function ka(t,n){if(t&1&&(o(0,"tr")(1,"td")(2,"div",57)(3,"div",58)(4,"mat-icon"),r(5,"person"),a()(),o(6,"div",59),r(7),a()()(),o(8,"td"),r(9),a(),o(10,"td"),r(11),a(),o(12,"td"),r(13),a(),o(14,"td"),r(15),a(),o(16,"td"),h(17,Ia,7,0,"div",60),a()()),t&2){let e=n.$implicit,i=u(2);l(7),c(e.nombre),l(2),c(e.dni),l(2),c(e.telefono),l(2),c(e.email),l(2),c(e.direccion),l(2),g(i.isAdmin()?-1:17)}}function Ta(t,n){t&1&&(o(0,"tr")(1,"td",62),r(2),m(3,"translate"),a()()),t&2&&(l(2),c(p(3,1,"clinical.clients.empty")))}function Pa(t,n){if(t&1&&(o(0,"div",21)(1,"table",25)(2,"thead")(3,"tr")(4,"th"),r(5),m(6,"translate"),a(),o(7,"th"),r(8),m(9,"translate"),a(),o(10,"th"),r(11),m(12,"translate"),a(),o(13,"th"),r(14),m(15,"translate"),a(),o(16,"th"),r(17),m(18,"translate"),a(),o(19,"th"),r(20,"Acciones"),a()()(),o(21,"tbody"),M(22,ka,18,6,"tr",null,Ae,!1,Ta,4,3,"tr"),a()()()),t&2){let e=u();l(5),c(p(6,6,"clinical.clients.colName")),l(3),c(p(9,8,"clinical.clients.colDni")),l(3),c(p(12,10,"clinical.clients.colPhone")),l(3),c(p(15,12,"clinical.clients.colEmail")),l(3),c(p(18,14,"clinical.clients.colAddress")),l(5),E(e.filteredClients())}}function Da(t,n){t&1&&(o(0,"mat-icon",40),r(1,"medical_services"),a(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.consultations")))}function Aa(t,n){if(t&1){let e=O();o(0,"button",41),x("click",function(){C(e);let d=u();return S(d.openNuevaConsulta())}),o(1,"mat-icon"),r(2,"add"),a(),r(3),m(4,"translate"),a()}t&2&&(l(3),v(" ",p(4,1,"clinical.consultations.newConsult")," "))}function Ra(t,n){if(t&1&&(o(0,"div",65),r(1),a()),t&2){let e=u().$implicit;l(),v("\u{1F321} ",e.temperatura,"\xB0C")}}function za(t,n){t&1&&(o(0,"span",66),r(1),m(2,"translate"),a()),t&2&&(l(),c(p(2,1,"clinical.consultations.statusClosed")))}function Ba(t,n){if(t&1&&(o(0,"span",67),r(1),a()),t&2){let e=u().$implicit,i=u();b("ngClass",i.getConsultBadge(e.status)),l(),c(e.status)}}function Va(t,n){if(t&1){let e=O();o(0,"button",70),m(1,"translate"),x("click",function(){C(e);let d=u().$implicit,s=u();return S(s.closeConsulta(d.id))}),o(2,"mat-icon",71),r(3,"lock"),a()()}t&2&&b("title",p(1,1,"clinical.consultations.closeConsult"))}function Na(t,n){t&1&&(o(0,"mat-icon",69),r(1,"lock"),a())}function La(t,n){if(t&1&&(o(0,"tr")(1,"td",63),r(2),a(),o(3,"td")(4,"div",57)(5,"div",64)(6,"mat-icon"),r(7,"pets"),a()(),o(8,"div")(9,"div",59),r(10),a(),o(11,"div",65),r(12),a()()()(),o(13,"td")(14,"div",59),r(15),a(),o(16,"div",65),r(17),a()(),o(18,"td"),r(19),a(),o(20,"td")(21,"div",59),r(22),a(),h(23,Ra,2,1,"div",65),a(),o(24,"td")(25,"div",59),r(26),a(),o(27,"div",65),r(28),a()(),o(29,"td"),h(30,za,3,3,"span",66)(31,Ba,2,2,"span",67),a(),o(32,"td"),h(33,Va,4,3,"button",68)(34,Na,2,0,"mat-icon",69),a()()),t&2){let e=n.$implicit,i=u();I("row-closed",e.cerrada),l(2),c(e.id),l(3),T("background",e.patientAvatarColor),l(5),c(e.patientName),l(2),c(e.patientBreed),l(3),c(e.clientName),l(2),c(e.clientPhone),l(2),c(e.type),l(3),c(e.diagnosis),l(),g(e.temperatura?23:-1),l(3),c(e.date),l(2),c(e.time),l(2),g(e.cerrada?30:31),l(3),g(!e.cerrada&&!i.isAdmin()?33:e.cerrada?34:-1)}}function Wa(t,n){t&1&&(o(0,"tr")(1,"td",72),r(2),m(3,"translate"),a()()),t&2&&(l(2),c(p(3,1,"clinical.consultations.empty")))}function qa(t,n){if(t&1){let e=O();o(0,"button",73),x("click",function(){let d=C(e).$implicit,s=u();return S(s.consultPage=d)}),r(1),a()}if(t&2){let e=n.$implicit,i=u();I("active",i.consultPage===e),l(),c(e)}}function Ka(t,n){t&1&&(o(0,"mat-icon",40),r(1,"assignment"),a(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.history")))}function $a(t,n){if(t&1){let e=O();o(0,"div",31)(1,"mat-icon"),r(2,"assignment_ind"),a(),o(3,"h3"),r(4),m(5,"translate"),a(),o(6,"p"),r(7),m(8,"translate"),a(),o(9,"button",74),x("click",function(){C(e);let d=u();return S(d.activeTab=0)}),r(10),m(11,"translate"),a()()}t&2&&(l(4),c(p(5,3,"clinical.history.selectPatient")),l(3),c(p(8,5,"clinical.history.selectPatientHint")),l(3),c(p(11,7,"clinical.history.goToPatients")))}function Ha(t,n){if(t&1){let e=O();o(0,"button",41),x("click",function(){C(e);let d=u(2);return S(d.openNuevaConsulta(d.store.selectedPatientId()))}),o(1,"mat-icon"),r(2,"add"),a(),r(3),m(4,"translate"),a()}t&2&&(l(3),v(" ",p(4,1,"clinical.history.newConsult")," "))}function ja(t,n){if(t&1&&(o(0,"div",80)(1,"mat-icon"),r(2,"warning"),a(),o(3,"div")(4,"strong"),r(5),m(6,"translate"),a(),o(7,"span"),r(8),a()()()),t&2){let e=u(2);l(5),c(p(6,2,"clinical.history.allergyBannerTitle")),l(3),c(e.historyAllergyAlert)}}function Ga(t,n){t&1&&(o(0,"div",81)(1,"mat-icon"),r(2,"check_circle"),a(),o(3,"span"),r(4),m(5,"translate"),a()()),t&2&&(l(4),c(p(5,1,"clinical.history.noAllergies")))}function Qa(t,n){if(t&1&&(o(0,"div",83)(1,"div",86),r(2),a(),o(3,"div",87),r(4),m(5,"translate"),a()()),t&2){let e=n.$implicit;l(2),c(e.value),l(2),c(p(5,2,e.labelKey))}}function Ua(t,n){t&1&&(o(0,"p",43),r(1),m(2,"translate"),a()),t&2&&(l(),c(p(2,1,"clinical.history.empty")))}function Ya(t,n){if(t&1&&(o(0,"span",92),r(1),a()),t&2){let e=u().$implicit;l(),v("\u{1F321} ",e.temperatura,"\xB0C")}}function Xa(t,n){t&1&&(o(0,"span",95)(1,"mat-icon",99),r(2,"lock"),a(),r(3),m(4,"translate"),a()),t&2&&(l(3),v(" ",p(4,1,"clinical.consultations.statusClosed")))}function Za(t,n){if(t&1&&(o(0,"div",97)(1,"div",100),r(2),a(),o(3,"p",101),r(4),a()()),t&2){let e=n.$implicit;l(2),c(e.label),l(2),c(e.content)}}function Ja(t,n){if(t&1){let e=O();o(0,"div",98)(1,"button",102),x("click",function(){C(e);let d=u().$implicit,s=u(3);return S(s.openTratamiento(d.consultaId))}),o(2,"mat-icon"),r(3,"medication"),a(),r(4),m(5,"translate"),a()()}t&2&&(l(4),v(" ",p(5,1,"clinical.history.addTreatment")," "))}function eo(t,n){if(t&1&&(o(0,"div",89)(1,"div",90)(2,"mat-icon"),r(3),a(),o(4,"span",91),r(5),a(),h(6,Ya,2,1,"span",92),o(7,"span",93),r(8),a(),o(9,"span",94),r(10),a(),h(11,Xa,5,3,"span",95),a(),o(12,"div",96),M(13,Za,5,2,"div",97,ga),h(15,Ja,6,3,"div",98),a()()),t&2){let e=n.$implicit,i=u(3);T("border-left","4px solid "+e.borderColor),l(),T("background",e.bg),l(),T("color",e.color),l(),c(e.icon),l(),T("color",e.color),l(),c(e.type),l(),g(e.temperatura?6:-1),l(2),c(e.date),l(2),c(e.doctor),l(),g(e.cerrada?11:-1),l(2),E(e.sections),l(2),g(!e.cerrada&&!i.isAdmin()?15:-1)}}function to(t,n){if(t&1&&(o(0,"div",85),M(1,eo,16,15,"div",88,ha),a()),t&2){let e=u(2);l(),E(e.historyRecords())}}function io(t,n){if(t&1&&(o(0,"div",75)(1,"div",76)(2,"mat-icon"),r(3,"pets"),a()(),o(4,"div",77)(5,"h2"),r(6),a(),o(7,"p"),r(8),m(9,"translate"),a()(),o(10,"div",78),h(11,Ha,5,3,"button",9),o(12,"button",79)(13,"mat-icon"),r(14,"bookmark_border"),a()()()(),h(15,ja,9,4,"div",80)(16,Ga,6,3,"div",81),o(17,"div",82),M(18,Qa,6,4,"div",83,bt),a(),o(20,"div",84),r(21),m(22,"translate"),a(),h(23,Ua,3,3,"p",43)(24,to,3,0,"div",85)),t&2){let e=u();l(),T("background",e.historyPatient().avatarColor),l(5),c(e.historyPatient().name),l(2),Rt("",e.historyPatient().breed," \xB7 ",e.historyPatient().age," \xB7 ",p(9,11,"clinical.history.owner")," ",e.historyPatient().owner),l(3),g(e.isAdmin()?-1:11),l(4),g(e.historyAllergyAlert?15:16),l(3),E(e.historyPatient().stats),l(3),c(p(22,13,"clinical.history.fullHistory")),l(2),g(e.historyRecords().length===0?23:24)}}function no(t,n){t&1&&(o(0,"mat-icon",40),r(1,"vaccines"),a(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.vaccines")))}function ao(t,n){if(t&1){let e=O();o(0,"button",103),x("click",function(){let d=C(e).$implicit,s=u();return S(s.vaccineFilter=d.value)}),r(1),m(2,"translate"),a()}if(t&2){let e=n.$implicit,i=u();I("chip-active",i.vaccineFilter===e.value),l(),v(" ",p(2,3,e.labelKey)," ")}}function oo(t,n){if(t&1){let e=O();o(0,"button",41),x("click",function(){C(e);let d=u();return S(d.openRegistrarVacuna())}),o(1,"mat-icon"),r(2,"add"),a(),r(3),m(4,"translate"),a()}t&2&&(l(3),v(" ",p(4,1,"clinical.vaccines.register")," "))}function lo(t,n){if(t&1&&(o(0,"div",104)(1,"mat-icon",105),r(2),a(),o(3,"div",106),r(4),a(),o(5,"div",107),r(6),m(7,"translate"),a(),o(8,"div",108),r(9),m(10,"translate"),a()()),t&2){let e=n.$implicit;T("background",e.bg),l(),T("color",e.color),l(),c(e.icon),l(),T("color",e.color),l(),c(e.value),l(),T("color",e.color),l(),c(p(7,12,e.labelKey)),l(3),c(p(10,14,e.sublabelKey))}}function ro(t,n){t&1&&(r(0),m(1,"translate")),t&2&&v(" ",p(1,1,"clinical.vaccines.actionViewDetails")," ")}function co(t,n){t&1&&(r(0),m(1,"translate")),t&2&&v(" ",p(1,1,"clinical.vaccines.actionSchedule")," ")}function so(t,n){t&1&&(r(0),m(1,"translate")),t&2&&v(" ",p(1,1,"clinical.vaccines.actionApplyNow")," ")}function mo(t,n){if(t&1){let e=O();o(0,"button",110),x("click",function(){C(e);let d=u().$implicit,s=u();return S(s.openRegistrarVacuna(d.mascotaId))}),h(1,ro,2,3)(2,co,2,3)(3,so,2,3),a()}if(t&2){let e=u().$implicit;l(),g(e.status==="Al D\xEDa"?1:e.status==="Pr\xF3xima"?2:3)}}function po(t,n){if(t&1&&(o(0,"tr")(1,"td")(2,"div",57)(3,"div",64)(4,"mat-icon"),r(5,"pets"),a()(),o(6,"div")(7,"div",59),r(8),a(),o(9,"div",65),r(10),a()()()(),o(11,"td")(12,"div",59),r(13),a(),o(14,"div",65),r(15),a()(),o(16,"td"),r(17),a(),o(18,"td"),r(19),a(),o(20,"td")(21,"span",67),r(22),a()(),o(23,"td"),h(24,mo,4,1,"button",109),a()()),t&2){let e=n.$implicit,i=u();l(3),T("background",e.patientAvatarColor),l(5),c(e.patientName),l(2),c(e.patientBreed),l(3),c(e.vaccineName),l(2),c(e.vaccineDesc),l(2),c(e.lastApplied),l(),I("text-danger",e.nextDoseHighlight),l(),c(e.nextDose),l(2),b("ngClass",i.getVaccineBadge(e.status)),l(),c(e.status),l(2),g(i.isAdmin()?-1:24)}}function fo(t,n){t&1&&(o(0,"tr")(1,"td",62),r(2),m(3,"translate"),a()()),t&2&&(l(2),c(p(3,1,"clinical.vaccines.empty")))}function uo(t,n){t&1&&(o(0,"mat-icon",40),r(1,"local_hospital"),a(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.hospitalization")))}function ho(t,n){if(t&1){let e=O();o(0,"button",41),x("click",function(){C(e);let d=u();return S(d.openRegistrarIngreso())}),o(1,"mat-icon"),r(2,"add"),a(),r(3),m(4,"translate"),a()}t&2&&(l(3),v(" ",p(4,1,"clinical.hospitalization.register")," "))}function go(t,n){if(t&1&&(o(0,"div",37)(1,"div")(2,"div",111),r(3),m(4,"translate"),a(),o(5,"div",112),r(6),a(),o(7,"div",113),r(8),m(9,"translate"),a()(),o(10,"div",114)(11,"mat-icon"),r(12),a()()()),t&2){let e=n.$implicit;l(3),c(p(4,10,e.labelKey)),l(2),T("color",e.color),l(),c(e.value),l(2),c(p(9,12,e.sublabelKey)),l(2),T("background",e.bg),l(),T("color",e.color),l(),c(e.icon)}}function _o(t,n){if(t&1){let e=O();o(0,"button",103),x("click",function(){let d=C(e).$implicit,s=u();return S(s.hospitalizationFilter=d.value)}),r(1),m(2,"translate"),a()}if(t&2){let e=n.$implicit,i=u();I("chip-active",i.hospitalizationFilter===e.value),l(),N(" ",p(2,4,e.labelKey)," (",i.getHospCount(e.value),") ")}}function xo(t,n){if(t&1&&(o(0,"li"),r(1),a()),t&2){let e=n.$implicit;l(),v("\u2022 ",e)}}function bo(t,n){if(t&1){let e=O();o(0,"button",118),x("click",function(){C(e);let d=u().$implicit,s=u();return S(s.openRegistrarIngreso(d.mascotaId))}),o(1,"mat-icon"),r(2,"edit"),a()()}}function vo(t,n){if(t&1){let e=O();o(0,"tr")(1,"td")(2,"div",57)(3,"div",64)(4,"mat-icon"),r(5,"pets"),a()(),o(6,"div")(7,"div",59),r(8),a(),o(9,"div",65),r(10),a()()()(),o(11,"td")(12,"div",59),r(13),a(),o(14,"div",65),r(15),a()(),o(16,"td")(17,"span",67),r(18),a()(),o(19,"td")(20,"div",59),r(21),a(),o(22,"div",65),r(23),a()(),o(24,"td"),r(25),a(),o(26,"td")(27,"ul",115),M(28,xo,2,1,"li",null,ge),a()(),o(30,"td")(31,"div",60)(32,"button",116),x("click",function(){let d=C(e).$implicit,s=u();return S(s.verFicha(d.mascotaId))}),o(33,"mat-icon"),r(34,"visibility"),a()(),h(35,bo,3,0,"button",117),a()()()}if(t&2){let e=n.$implicit,i=u();l(3),T("background",e.patientAvatarColor),l(5),c(e.patientName),l(2),N("",e.patientBreed," \xB7 ",e.patientAge),l(3),c(e.ownerName),l(2),c(e.ownerPhone),l(2),b("ngClass",i.getHospBadge(e.status)),l(),v("\u2022 ",e.status),l(3),c(e.admissionDate),l(2),c(e.daysAgo),l(2),c(e.diagnosis),l(3),E(e.treatments),l(7),g(i.isAdmin()?-1:35)}}function yo(t,n){t&1&&(o(0,"tr")(1,"td",72),r(2),m(3,"translate"),a()()),t&2&&(l(2),c(p(3,1,"clinical.hospitalization.empty")))}var xt=5,Ji=class t{store=f(Q);svc=f(G);dialog=f(yi);snack=f(U);translate=f(Yt);auth=f(be);router=f(Qt);isAdmin=A(()=>this.auth.hasRole("admin"));activeTab=0;patientSearch=B("");clientSearch=B("");speciesFilter=B("Todas");vaccineFilter="Todas";hospitalizationFilter="Todos";consultDateFilter="all";vaccineFilters=[{value:"Todas",labelKey:"clinical.vaccines.filterAll"},{value:"Pr\xF3ximas",labelKey:"clinical.vaccines.filterUpcoming"},{value:"Vencidas",labelKey:"clinical.vaccines.filterExpired"}];hospFilters=[{value:"Todos",labelKey:"clinical.hospitalization.filterAll"},{value:"Cr\xEDtico",labelKey:"clinical.hospitalization.filterCritical"},{value:"Estable",labelKey:"clinical.hospitalization.filterStable"},{value:"Recuperaci\xF3n",labelKey:"clinical.hospitalization.filterRecovery"}];consultPage=1;filteredPatients=A(()=>{let n=this.patientSearch().toLowerCase(),e=this.speciesFilter();return this.store.patients().filter(i=>(n===""||i.name.toLowerCase().includes(n)||i.owner.toLowerCase().includes(n)||String(i.id).includes(n))&&(e==="Todas"||i.species===e))});filteredClients=A(()=>{let n=this.clientSearch().toLowerCase();return this.store.rawClientes().filter(e=>n===""||e.nombre?.toLowerCase().includes(n)||e.dni?.includes(n)||e.email?.toLowerCase().includes(n))});get filteredConsultations(){let n=new Date().toISOString().split("T")[0],e=new Date(Date.now()-7*864e5).toISOString().split("T")[0];return this.store.consultations().filter(i=>this.consultDateFilter==="today"?i.rawDate===n:this.consultDateFilter==="week"?i.rawDate>=e:!0)}get consultTotalPages(){return Math.max(1,Math.ceil(this.filteredConsultations.length/xt))}get pagedConsultations(){let n=(this.consultPage-1)*xt;return this.filteredConsultations.slice(n,n+xt)}get consultPageNumbers(){return Array.from({length:this.consultTotalPages},(n,e)=>e+1)}setConsultFilter(n){this.consultDateFilter=n,this.consultPage=1}filteredVaccines=A(()=>{let n=this.vaccineFilter,e=this.store.vaccines();return n==="Pr\xF3ximas"?e.filter(i=>i.status==="Pr\xF3xima"):n==="Vencidas"?e.filter(i=>i.status==="Vencida"):e});get vaccineSummary(){let n=this.store.vaccines();return[{labelKey:"clinical.vaccines.summaryExpired",sublabelKey:"clinical.vaccines.summaryExpiredSub",value:n.filter(e=>e.status==="Vencida").length,color:"#EF4444",bg:"#FEF2F2",icon:"error"},{labelKey:"clinical.vaccines.summaryUpcoming",sublabelKey:"clinical.vaccines.summaryUpcomingSub",value:n.filter(e=>e.status==="Pr\xF3xima").length,color:"#F59E0B",bg:"#FFFBEB",icon:"schedule"},{labelKey:"clinical.vaccines.summaryUpToDate",sublabelKey:"clinical.vaccines.summaryUpToDateSub",value:n.filter(e=>e.status==="Al D\xEDa").length,color:"#22C55E",bg:"#F0FDF4",icon:"check_circle"}]}get filteredHospitalizations(){return this.hospitalizationFilter==="Todos"?this.store.hospitalizations():this.store.hospitalizations().filter(n=>n.status===this.hospitalizationFilter)}getHospCount(n){return n==="Todos"?this.store.hospitalizations().length:this.store.hospitalizations().filter(e=>e.status===n).length}get hospitalStats(){let n=this.store.hospitalizations();return[{labelKey:"clinical.hospitalization.statTotal",sublabelKey:"clinical.hospitalization.statTotalSub",value:n.length,icon:"local_hospital",color:"#3B82F6",bg:"#EFF6FF"},{labelKey:"clinical.hospitalization.statCritical",sublabelKey:"clinical.hospitalization.statCriticalSub",value:n.filter(e=>e.status==="Cr\xEDtico").length,icon:"favorite",color:"#EF4444",bg:"#FEF2F2"},{labelKey:"clinical.hospitalization.statRecovery",sublabelKey:"clinical.hospitalization.statRecoverySub",value:n.filter(e=>e.status==="Recuperaci\xF3n").length,icon:"person",color:"#F59E0B",bg:"#FFFBEB"}]}selectedConsultations=A(()=>{let n=this.store.selectedPatient();return n?this.store.consultations().filter(e=>e.mascotaId===n.id):[]});historyPatient=A(()=>{let n=this.store.selectedPatient();if(!n)return null;let e=this.selectedConsultations();return{name:n.name,breed:n.breed,age:n.age,owner:n.owner,avatarColor:n.avatarColor,stats:[{labelKey:"clinical.history.statTotalConsults",value:String(e.length)},{labelKey:"clinical.history.statVaccinesApplied",value:String(this.store.vaccines().filter(i=>i.mascotaId===n.id).length)},{labelKey:"clinical.history.statHospitalizations",value:String(this.store.hospitalizations().filter(i=>i.mascotaId===n.id).length)},{labelKey:"clinical.history.statLastVisit",value:e.length>0?e[0].date:"\u2014"}]}});historyRecords=A(()=>this.selectedConsultations().map(n=>({consultaId:n.id,type:n.type,date:n.date,doctor:n.veterinario??"Veterinario",color:n.cerrada?"#64748B":"#22C55E",bg:n.cerrada?"#F1F5F9":"#F0FDF4",borderColor:n.cerrada?"#94A3B8":"#22C55E",icon:n.cerrada?"lock":"medical_services",temperatura:n.temperatura,cerrada:n.cerrada,sections:[...n.subjetivo?[{label:"Subjetivo (S)",type:"text",content:n.subjetivo}]:[],...n.objetivo?[{label:"Objetivo (O)",type:"text",content:n.objetivo}]:[],...n.diagnosis?[{label:"Evaluaci\xF3n (A)",type:"text",content:n.diagnosis}]:[],...n.plan?[{label:"Plan (P)",type:"text",content:n.plan}]:[]]})));getConsultBadge(n){return{Completada:"badge-completada","En Proceso":"badge-en-proceso",Cr\u00EDtico:"badge-critico",Pendiente:"badge-pendiente"}[n]??""}getVaccineBadge(n){return{"Al D\xEDa":"badge-al-dia",Pr\u00F3xima:"badge-proxima",Vencida:"badge-vencida"}[n]??""}getHospBadge(n){return{Cr\u00EDtico:"badge-critico",Estable:"badge-estable",Recuperaci\u00F3n:"badge-recuperacion"}[n]??""}verFicha(n){this.store.selectPatient(n),this.activeTab=3}openNuevaConsulta(n){this.dialog.open(Ci,{width:"640px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarPaciente(n){this.dialog.open(wi,{width:"580px",data:{patient:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openNuevaCita(n){this.dialog.open(Mi,{width:"520px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&(this.store.reload(),this.router.navigate(["/schedule"]))})}openRegistrarVacuna(n){this.dialog.open(Ye,{width:"560px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarIngreso(n){this.dialog.open(et,{width:"560px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarCliente(){this.dialog.open(De,{width:"500px"}).afterClosed().subscribe(n=>{n&&this.store.reload()})}openEditarCliente(n){this.dialog.open(De,{width:"500px",data:{cliente:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}deleteCliente(n){confirm(`\xBFEliminar al cliente ${n.nombre}? Esta acci\xF3n no se puede deshacer.`)&&this.svc.deleteCliente(n.id).subscribe({next:()=>{this.snack.open("Cliente eliminado","OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open("Error al eliminar","",{duration:3e3})})}openTratamiento(n){this.dialog.open(tt,{width:"560px",data:{consultaId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}deletePatient(n){let e=this.translate.instant("clinical.messages.confirmDelete",{name:n.name});confirm(e)&&this.svc.deleteMascota(n.id).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.messages.patientDeleted"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}closeConsulta(n){let e=this.translate.instant("clinical.consultations.confirmClose");confirm(e)&&this.svc.closeConsulta(n).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.consultations.closedSuccess"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}get historyAllergyAlert(){return this.store.selectedPatient()?.alergias??""}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=R({type:t,selectors:[["app-clinical-management"]],decls:231,vars:157,consts:[[1,"clinical"],[1,"admin-readonly-banner"],[1,"page-header"],[1,"header-search"],[1,"notif-icon"],["animationDuration","0ms",1,"clinical-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"tab-content"],[1,"section-header"],["mat-raised-button","",1,"btn-primary"],[1,"filters-row"],[1,"search-wrap"],[1,"filter-input",3,"input","value","placeholder"],[1,"species-wrap"],[1,"species-select",3,"selectionChange","value"],["value","Todas"],["value","Perro"],["value","Gato"],["value","Ave"],[1,"loading-msg"],[1,"patients-grid"],[1,"card","table-card"],[1,"table-top"],[1,"table-actions"],["mat-stroked-button","",1,"btn-sm",3,"click"],[1,"data-table"],[3,"row-closed"],[1,"table-footer"],[1,"pagination"],["mat-icon-button","",3,"click","disabled"],[1,"pg-btn",3,"active"],[1,"empty-tab"],[1,"chips-row"],[1,"chip",3,"chip-active"],[1,"vsummary-grid"],[1,"vsummary",3,"background"],[1,"hosp-stats-row"],[1,"hosp-stat-card"],[1,"table-title"],["mat-stroked-button","","routerLink","/admin"],[1,"tab-icon"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"patient-card"],[1,"empty-msg"],[1,"pc-top"],[1,"pc-avatar"],[1,"pc-title"],[1,"pc-name"],[1,"pc-id"],[1,"badge","badge-activo"],[1,"pc-details"],[1,"pc-row"],[1,"pc-allergy-alert"],[1,"pc-actions"],["mat-button","",1,"btn-ver-ficha",3,"click"],["mat-icon-button","","title","Editar",3,"click"],["mat-icon-button","","title","Eliminar",3,"click"],[1,"td-patient"],[1,"td-avatar",2,"background","#6366F1"],[1,"td-name"],[1,"td-actions"],[2,"color","#EF4444"],["colspan","6",1,"empty-msg"],[1,"td-id"],[1,"td-avatar"],[1,"td-sub"],[1,"badge","badge-cancelada"],[1,"badge",3,"ngClass"],["mat-icon-button","",3,"title"],[2,"color","#94A3B8","font-size","20px"],["mat-icon-button","",3,"click","title"],[2,"color","#64748B"],["colspan","7",1,"empty-msg"],[1,"pg-btn",3,"click"],["mat-stroked-button","",3,"click"],[1,"history-header"],[1,"hist-avatar"],[1,"hist-info"],[1,"hist-actions"],["mat-icon-button",""],[1,"allergy-banner"],[1,"no-allergy-banner"],[1,"hist-stats"],[1,"hist-stat"],[1,"hist-section-title"],[1,"timeline"],[1,"hs-val"],[1,"hs-lbl"],[1,"tl-card",3,"border-left"],[1,"tl-card"],[1,"tl-header"],[1,"tl-type"],[1,"tl-temp"],[1,"tl-date"],[1,"tl-doc"],[1,"badge","badge-cancelada","tl-locked"],[1,"tl-body"],[1,"tl-section"],[1,"tl-footer"],[2,"font-size","14px"],[1,"tl-label"],[1,"tl-text"],["mat-stroked-button","",1,"btn-sm-tratamiento",3,"click"],[1,"chip",3,"click"],[1,"vsummary"],[1,"vs-icon"],[1,"vs-val"],[1,"vs-label"],[1,"vs-sub"],["mat-button","",1,"action-link"],["mat-button","",1,"action-link",3,"click"],[1,"hosp-stat-label"],[1,"hosp-stat-val"],[1,"hosp-stat-sub"],[1,"hosp-stat-icon"],[1,"treat-list"],["mat-icon-button","","title","Ver ficha",3,"click"],["mat-icon-button","","title","Editar ingreso"],["mat-icon-button","","title","Editar ingreso",3,"click"]],template:function(e,i){e&1&&(o(0,"div",0),h(1,_a,9,0,"div",1),o(2,"div",2)(3,"div")(4,"h1"),r(5),m(6,"translate"),a(),o(7,"p"),r(8),m(9,"translate"),a()(),o(10,"div",3)(11,"mat-icon",4),r(12,"notifications"),a()()(),o(13,"mat-tab-group",5),Vt("selectedIndexChange",function(s){return Bt(i.activeTab,s)||(i.activeTab=s),s}),o(14,"mat-tab"),z(15,xa,4,3,"ng-template",6),o(16,"div",7)(17,"div",8)(18,"div")(19,"h2"),r(20),m(21,"translate"),a(),o(22,"p"),r(23),m(24,"translate"),a()(),h(25,ba,5,3,"button",9),a(),o(26,"div",10)(27,"div",11)(28,"mat-icon"),r(29,"search"),a(),o(30,"input",12),m(31,"translate"),x("input",function(s){return i.patientSearch.set(s.target.value)}),a()(),o(32,"div",13)(33,"mat-select",14),x("selectionChange",function(s){return i.speciesFilter.set(s.value)}),o(34,"mat-option",15),r(35),m(36,"translate"),a(),o(37,"mat-option",16),r(38),m(39,"translate"),a(),o(40,"mat-option",17),r(41),m(42,"translate"),a(),o(43,"mat-option",18),r(44),m(45,"translate"),a()()()(),h(46,va,3,3,"div",19)(47,Ea,4,1,"div",20),a()(),o(48,"mat-tab"),z(49,wa,4,3,"ng-template",6),o(50,"div",7)(51,"div",8)(52,"div")(53,"h2"),r(54),m(55,"translate"),a(),o(56,"p"),r(57),m(58,"translate"),a()(),h(59,Fa,5,3,"button",9),a(),o(60,"div",10)(61,"div",11)(62,"mat-icon"),r(63,"search"),a(),o(64,"input",12),m(65,"translate"),x("input",function(s){return i.clientSearch.set(s.target.value)}),a()()(),h(66,Oa,3,3,"div",19)(67,Pa,25,16,"div",21),a()(),o(68,"mat-tab"),z(69,Da,4,3,"ng-template",6),o(70,"div",7)(71,"div",8)(72,"div")(73,"h2"),r(74),m(75,"translate"),a(),o(76,"p"),r(77),m(78,"translate"),a()(),h(79,Aa,5,3,"button",9),a(),o(80,"div",21)(81,"div",22)(82,"h3"),r(83),m(84,"translate"),a(),o(85,"div",23)(86,"button",24),x("click",function(){return i.setConsultFilter("all")}),r(87),m(88,"translate"),a(),o(89,"button",24),x("click",function(){return i.setConsultFilter("today")}),r(90),m(91,"translate"),a(),o(92,"button",24),x("click",function(){return i.setConsultFilter("week")}),r(93),m(94,"translate"),a()()(),o(95,"table",25)(96,"thead")(97,"tr")(98,"th"),r(99),m(100,"translate"),a(),o(101,"th"),r(102),m(103,"translate"),a(),o(104,"th"),r(105),m(106,"translate"),a(),o(107,"th"),r(108),m(109,"translate"),a(),o(110,"th"),r(111),m(112,"translate"),a(),o(113,"th"),r(114),m(115,"translate"),a(),o(116,"th"),r(117),m(118,"translate"),a(),o(119,"th"),r(120),m(121,"translate"),a()()(),o(122,"tbody"),M(123,La,35,16,"tr",26,Ae,!1,Wa,4,3,"tr"),a()(),o(126,"div",27)(127,"span"),r(128),m(129,"translate"),a(),o(130,"div",28)(131,"button",29),x("click",function(){return i.consultPage=i.consultPage-1}),o(132,"mat-icon"),r(133,"chevron_left"),a()(),M(134,qa,2,3,"button",30,ge),o(136,"button",29),x("click",function(){return i.consultPage=i.consultPage+1}),o(137,"mat-icon"),r(138,"chevron_right"),a()()()()()()(),o(139,"mat-tab"),z(140,Ka,4,3,"ng-template",6),o(141,"div",7),h(142,$a,12,9,"div",31)(143,io,25,15),a()(),o(144,"mat-tab"),z(145,no,4,3,"ng-template",6),o(146,"div",7)(147,"div",8)(148,"div",32),M(149,ao,3,5,"button",33,Zi),a(),h(151,oo,5,3,"button",9),a(),o(152,"div",34),M(153,lo,11,16,"div",35,bt),a(),o(155,"div",21)(156,"table",25)(157,"thead")(158,"tr")(159,"th"),r(160),m(161,"translate"),a(),o(162,"th"),r(163),m(164,"translate"),a(),o(165,"th"),r(166),m(167,"translate"),a(),o(168,"th"),r(169),m(170,"translate"),a(),o(171,"th"),r(172),m(173,"translate"),a(),o(174,"th"),r(175),m(176,"translate"),a()()(),o(177,"tbody"),M(178,po,25,13,"tr",null,Ae,!1,fo,4,3,"tr"),a()()()()(),o(181,"mat-tab"),z(182,uo,4,3,"ng-template",6),o(183,"div",7)(184,"div",8)(185,"div")(186,"h2"),r(187),m(188,"translate"),a(),o(189,"p"),r(190),m(191,"translate"),a()(),h(192,ho,5,3,"button",9),a(),o(193,"div",36),M(194,go,13,14,"div",37,bt),a(),o(196,"div",32),M(197,_o,3,6,"button",33,Zi),a(),o(199,"div",21)(200,"h3",38),r(201),m(202,"translate"),a(),o(203,"table",25)(204,"thead")(205,"tr")(206,"th"),r(207),m(208,"translate"),a(),o(209,"th"),r(210),m(211,"translate"),a(),o(212,"th"),r(213),m(214,"translate"),a(),o(215,"th"),r(216),m(217,"translate"),a(),o(218,"th"),r(219),m(220,"translate"),a(),o(221,"th"),r(222),m(223,"translate"),a(),o(224,"th"),r(225),m(226,"translate"),a()()(),o(227,"tbody"),M(228,vo,36,13,"tr",null,Ae,!1,yo,4,3,"tr"),a()()()()()()()),e&2&&(l(),g(i.isAdmin()?1:-1),l(4),c(p(6,67,"clinical.title")),l(3),c(p(9,69,"clinical.subtitle")),l(5),zt("selectedIndex",i.activeTab),l(7),c(p(21,71,"clinical.patients.title")),l(3),c(p(24,73,"clinical.patients.subtitle")),l(2),g(i.isAdmin()?-1:25),l(5),b("value",i.patientSearch())("placeholder",p(31,75,"clinical.patients.search")),l(3),b("value",i.speciesFilter()),l(2),c(p(36,77,"clinical.patients.filterAll")),l(3),c(p(39,79,"clinical.patients.filterDog")),l(3),c(p(42,81,"clinical.patients.filterCat")),l(3),c(p(45,83,"clinical.patients.filterBird")),l(2),g(i.store.loading()?46:47),l(8),c(p(55,85,"clinical.clients.title")),l(3),c(p(58,87,"clinical.clients.subtitle")),l(2),g(i.isAdmin()?-1:59),l(5),b("value",i.clientSearch())("placeholder",p(65,89,"clinical.clients.search")),l(2),g(i.store.loading()?66:67),l(8),c(p(75,91,"clinical.consultations.title")),l(3),c(p(78,93,"clinical.consultations.subtitle")),l(2),g(i.isAdmin()?-1:79),l(4),c(p(84,95,"clinical.consultations.recent")),l(3),I("btn-sm-active",i.consultDateFilter==="all"),l(),c(p(88,97,"clinical.consultations.filterAll")),l(2),I("btn-sm-active",i.consultDateFilter==="today"),l(),c(p(91,99,"clinical.consultations.filterToday")),l(2),I("btn-sm-active",i.consultDateFilter==="week"),l(),c(p(94,101,"clinical.consultations.filterWeek")),l(6),c(p(100,103,"clinical.consultations.colId")),l(3),c(p(103,105,"clinical.consultations.colPatient")),l(3),c(p(106,107,"clinical.consultations.colClient")),l(3),c(p(109,109,"clinical.consultations.colType")),l(3),c(p(112,111,"clinical.consultations.colDiagnosis")),l(3),c(p(115,113,"clinical.consultations.colDate")),l(3),c(p(118,115,"clinical.consultations.colStatus")),l(3),c(p(121,117,"clinical.consultations.colActions")),l(3),E(i.pagedConsultations),l(5),c(We(129,119,"clinical.consultations.showing",Nt(154,ua,i.pagedConsultations.length,i.filteredConsultations.length))),l(3),b("disabled",i.consultPage<=1),l(3),E(i.consultPageNumbers),l(2),b("disabled",i.consultPage>=i.consultTotalPages),l(6),g(i.historyPatient()?143:142),l(7),E(i.vaccineFilters),l(2),g(i.isAdmin()?-1:151),l(2),E(i.vaccineSummary),l(7),c(p(161,122,"clinical.vaccines.colPatient")),l(3),c(p(164,124,"clinical.vaccines.colVaccine")),l(3),c(p(167,126,"clinical.vaccines.colLastApplied")),l(3),c(p(170,128,"clinical.vaccines.colNextDose")),l(3),c(p(173,130,"clinical.vaccines.colStatus")),l(3),c(p(176,132,"clinical.vaccines.colActions")),l(3),E(i.filteredVaccines()),l(9),c(p(188,134,"clinical.hospitalization.title")),l(3),c(p(191,136,"clinical.hospitalization.subtitle")),l(2),g(i.isAdmin()?-1:192),l(2),E(i.hospitalStats),l(3),E(i.hospFilters),l(4),c(p(202,138,"clinical.hospitalization.list")),l(6),c(p(208,140,"clinical.hospitalization.colPatient")),l(3),c(p(211,142,"clinical.hospitalization.colOwner")),l(3),c(p(214,144,"clinical.hospitalization.colStatus")),l(3),c(p(217,146,"clinical.hospitalization.colAdmissionDate")),l(3),c(p(220,148,"clinical.hospitalization.colDiagnosis")),l(3),c(p(223,150,"clinical.hospitalization.colTreatment")),l(3),c(p(226,152,"clinical.hospitalization.colActions")),l(3),E(i.filteredHospitalizations))},dependencies:[$t,Ut,q,W,H,$,Qe,Ti,Oi,Ii,ki,Yi,Ui,Ge,hi,j,Xt],styles:[".clinical[_ngcontent-%COMP%]{min-height:100%}.admin-readonly-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;background:#ecfeff;border-bottom:1px solid #06B6D4;padding:10px 28px;font-size:13px;color:#0e7490;font-weight:500}.admin-readonly-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#06b6d4}.admin-readonly-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:auto}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.header-search-input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:8px 14px 8px 36px;font-size:13px;outline:none;width:260px;margin-left:-30px}.search-icon[_ngcontent-%COMP%]{font-size:18px;color:#94a3b8}.notif-icon[_ngcontent-%COMP%]{color:#64748b;cursor:pointer}.clinical-tabs[_ngcontent-%COMP%]{background:#fff}  .clinical-tabs .mat-mdc-tab{min-width:120px}  .clinical-tabs .mat-mdc-tab-header{border-bottom:1px solid #E2E8F0;padding:0 20px}  .clinical-tabs .mdc-tab--active .mdc-tab__text-label{color:#06b6d4!important}  .clinical-tabs .mdc-tab-indicator__content--underline{border-color:#06b6d4!important}.tab-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:4px;vertical-align:middle}.tab-content[_ngcontent-%COMP%]{padding:24px 28px}.empty-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;gap:12px;color:#94a3b8}.empty-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#475569;margin:0}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin:0 0 4px;color:#1e293b}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.filters-row[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.search-wrap[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 12px}.search-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8;font-size:18px}.filter-input[_ngcontent-%COMP%]{border:none;outline:none;font-size:13px;flex:1;padding:10px 0;background:transparent}.species-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 8px}.species-select[_ngcontent-%COMP%]{border:none!important}  .species-select .mat-mdc-select-trigger{padding:8px 0}.filter-icon-btn[_ngcontent-%COMP%]{color:#475569}.patients-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.patient-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 3px #0000000f;border:1px solid #F1F5F9}.pc-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.pc-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pc-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:22px;width:22px;height:22px}.pc-title[_ngcontent-%COMP%]{flex:1}.pc-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b}.pc-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.pc-details[_ngcontent-%COMP%]{margin-bottom:12px}.pc-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#475569;padding:3px 0}.pc-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#94a3b8}.pc-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#94a3b8}.pc-actions[_ngcontent-%COMP%]{display:flex;align-items:center;border-top:1px solid #F1F5F9;padding-top:10px}.btn-ver-ficha[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:13px!important;flex:1;justify-content:flex-start!important}.btn-ver-ficha[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f;overflow:hidden}.table-card[_ngcontent-%COMP%]{overflow:auto}.table-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 20px}.table-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin:0;color:#1e293b}.table-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.btn-sm[_ngcontent-%COMP%]{border-radius:6px!important;font-size:12px!important;color:#475569!important;border-color:#e2e8f0!important}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-size:12px;font-weight:600;color:#94a3b8;padding:10px 16px;background:#f8fafc;border-bottom:1px solid #E2E8F0;text-transform:uppercase;letter-spacing:.5px}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;border-bottom:1px solid #F8FAFC;font-size:13px;color:#475569;vertical-align:middle}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f8fafc}.td-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;font-family:monospace}.td-patient[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.td-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.td-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:16px;width:16px;height:16px}.td-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b}.td-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.table-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-top:1px solid #F1F5F9;font-size:12px;color:#94a3b8}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.pg-btn[_ngcontent-%COMP%]{width:28px;height:28px;border:1px solid #E2E8F0;border-radius:6px;background:#fff;font-size:12px;cursor:pointer;color:#475569}.pg-btn.active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.text-danger[_ngcontent-%COMP%]{color:#ef4444!important;font-weight:500}.action-link[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:12px!important}.td-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.vsummary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.vsummary[_ngcontent-%COMP%]{border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:4px}.vs-icon[_ngcontent-%COMP%]{font-size:24px!important;width:24px!important;height:24px!important}.vs-val[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.vs-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.vs-sub[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.chips-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}.chip[_ngcontent-%COMP%]{padding:6px 16px;border-radius:20px;border:1px solid #E2E8F0;background:#fff;font-size:13px;font-weight:500;color:#475569;cursor:pointer;transition:all .15s}.chip.chip-active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.hosp-stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.hosp-stat-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 3px #0000000f}.hosp-stat-label[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:4px}.hosp-stat-val[_ngcontent-%COMP%]{font-size:26px;font-weight:700}.hosp-stat-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.hosp-stat-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center}.hosp-stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.treat-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;font-size:12px;color:#475569}.treat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1px 0}.table-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;padding:16px 20px 0}.history-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:20px}.hist-avatar[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.hist-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px;width:30px;height:30px}.hist-info[_ngcontent-%COMP%]{flex:1}.hist-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 4px;color:#1e293b}.hist-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin:0}.hist-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.hist-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}.hist-stat[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:16px 20px;text-align:center;box-shadow:0 1px 3px #0000000f}.hs-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b}.hs-lbl[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-top:2px}.hist-section-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.tl-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px #0000000f}.tl-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px}.tl-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.tl-type[_ngcontent-%COMP%]{font-size:14px;font-weight:600;flex:1}.tl-date[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.tl-doc[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-left:8px}.tl-body[_ngcontent-%COMP%]{padding:16px}.tl-section[_ngcontent-%COMP%]{margin-bottom:14px}.tl-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.tl-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#475569;margin-bottom:6px}.tl-text[_ngcontent-%COMP%]{font-size:13px;color:#64748b;line-height:1.6;margin:0}.tl-vitals[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}.vital[_ngcontent-%COMP%]{background:#f8fafc;border-radius:6px;padding:8px 12px}.vital[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8;display:block}.vital[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;color:#1e293b}.tl-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 16px}.tl-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#64748b;padding:2px 0}.tl-temp[_ngcontent-%COMP%]{font-size:12px;color:#3b82f6;font-weight:500;background:#eff6ff;border-radius:4px;padding:2px 6px}.tl-locked[_ngcontent-%COMP%]{font-size:11px!important;padding:2px 8px!important;display:inline-flex;align-items:center;gap:2px}.allergy-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;background:#fef2f2;border:1px solid #FECACA;border-radius:10px;padding:12px 16px;margin-bottom:16px;color:#991b1b}.allergy-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#ef4444;flex-shrink:0}.allergy-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px;font-weight:600}.allergy-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.no-allergy-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#f0fdf4;border:1px solid #BBF7D0;border-radius:10px;padding:10px 14px;margin-bottom:16px;color:#166534;font-size:13px}.no-allergy-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#22c55e;font-size:18px;width:18px;height:18px}.tl-footer[_ngcontent-%COMP%]{padding-top:12px;border-top:1px solid #F1F5F9}.btn-sm-tratamiento[_ngcontent-%COMP%]{font-size:12px!important;height:30px!important;color:#06b6d4!important;border-color:#06b6d4!important;border-radius:6px!important}.btn-sm-tratamiento[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px!important;width:16px!important;height:16px!important;vertical-align:middle}.pc-allergy-alert[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;background:#fef2f2;border-radius:6px;padding:5px 8px;margin-top:6px;color:#991b1b;font-size:12px;font-weight:500}.pc-allergy-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;color:#ef4444}.row-closed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{opacity:.7}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:center}"]})};export{Ji as ClinicalManagement};
