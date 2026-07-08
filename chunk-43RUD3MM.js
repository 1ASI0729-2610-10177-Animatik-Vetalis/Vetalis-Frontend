import{a as Ci,b as Mi,c as Si,d as Ei,e as wi}from"./chunk-WMIEUJ2E.js";import{a as Qt,b as ii,c as ni,d as Qe,e as ai,f as oi,g as ct,h as li}from"./chunk-ZPCD4TLB.js";import{a as bi,b as yi}from"./chunk-5FTXRCKP.js";import{a as se,b as vi}from"./chunk-W5BWVXEA.js";import{a as ae,b as oe,c as xi,d as le,e as re,f as de,g as ce,h as $}from"./chunk-MTM3SF6Z.js";import{c as jt}from"./chunk-P6SFRUZB.js";import{a as Q}from"./chunk-NEU3OOPT.js";import{c as fi,d as ui,l as hi,r as gi,t as st,u as mt,v as _i,w as U}from"./chunk-4PFNYCIS.js";import{b as q,d as k,e as ri,f as K,g as J,h as di,i as ci,j as ee,k as si,l as te,m as H,n as xe,o as be,p as ve,r as mi,s as ie,t as pi,u as ne}from"./chunk-IK2YHG2I.js";import{c as _e}from"./chunk-ETUNJEQG.js";import"./chunk-LGPXEZYI.js";import{a as Ue,b as j,c as G}from"./chunk-GPXLBI6B.js";import{E as ti,a as Ut,f as Ge,h as Yt,n as Xt,q as Zt,s as $e,t as Jt,v as De,w as ei,x as dt}from"./chunk-TOPPFS3Q.js";import{A as N,B as W,d as qt,e as Kt,f as Ht,s as Gt,t as $t,y as He,z as je}from"./chunk-G3XSK2OD.js";import{$b as s,Ab as o,Ac as Nt,Bb as n,Bc as Ke,Cb as y,Db as Ot,E as Ct,Eb as It,Ec as Z,Fb as ot,Fc as rt,Gb as O,Gc as Wt,Hb as kt,J as Mt,Kb as x,Mb as u,N as Me,Nb as we,O as at,Ob as z,P as X,Pb as We,Qa as l,Qb as Fe,Rb as S,Sb as E,Tb as Tt,Ub as Pt,Vb as lt,W as Be,Wb as Oe,Xb as T,Y as L,Ya as Ve,Yb as I,Zb as Dt,_ as f,_b as r,ac as v,bc as B,cc as At,d as vt,da as C,db as P,dc as Rt,ea as M,eb as Ne,ec as Ie,fa as St,fb as pe,fc as ke,g as Y,ga as Et,gc as Te,jb as D,jc as qe,ka as Le,la as Se,lc as zt,nc as m,oc as p,pa as V,pc as Bt,q as ye,rc as Lt,sa as wt,sb as fe,ta as Ft,tb as g,ub as _,v as yt,vc as ge,wa as me,wb as Ee,xb as w,xc as Vt,y as he,yb as F,z as Ce,zb as b,zc as Pe}from"./chunk-CQB35AO6.js";var Ae=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Y;constructor(a=!1,e,i=!0,d){this._multiple=a,this._emitChanges=i,this.compareWith=d,e&&e.length&&(a?e.forEach(c=>this._markSelected(c)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,i=new Set(a.map(c=>this._getConcreteValue(c)));a.forEach(c=>this._markSelected(c)),e.filter(c=>!i.has(this._getConcreteValue(c,i))).forEach(c=>this._unmarkSelected(c));let d=this._hasQueuedChanges();return this._emitChangeEvent(),d}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(a,i))return i;return a}else return a}};var tn=["notch"],nn=["matFormFieldNotchedOutline",""],an=["*"],Fi=["iconPrefixContainer"],Oi=["textPrefixContainer"],Ii=["iconSuffixContainer"],ki=["textSuffixContainer"],on=["textField"],ln=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],rn=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function dn(t,a){t&1&&y(0,"span",21)}function cn(t,a){if(t&1&&(o(0,"label",20),z(1,1),g(2,dn,1,0,"span",21),n()),t&2){let e=u(2);b("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),l(2),_(!e.hideRequiredMarker&&e._control.required?2:-1)}}function sn(t,a){if(t&1&&g(0,cn,3,5,"label",20),t&2){let e=u();_(e._hasFloatingLabel()?0:-1)}}function mn(t,a){t&1&&y(0,"div",7)}function pn(t,a){}function fn(t,a){if(t&1&&D(0,pn,0,0,"ng-template",13),t&2){u(2);let e=Oe(1);b("ngTemplateOutlet",e)}}function un(t,a){if(t&1&&(o(0,"div",9),g(1,fn,1,1,null,13),n()),t&2){let e=u();b("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),l(),_(e._forceDisplayInfixLabel()?-1:1)}}function hn(t,a){t&1&&(o(0,"div",10,2),z(2,2),n())}function gn(t,a){t&1&&(o(0,"div",11,3),z(2,3),n())}function _n(t,a){}function xn(t,a){if(t&1&&D(0,_n,0,0,"ng-template",13),t&2){u();let e=Oe(1);b("ngTemplateOutlet",e)}}function bn(t,a){t&1&&(o(0,"div",14,4),z(2,4),n())}function vn(t,a){t&1&&(o(0,"div",15,5),z(2,5),n())}function yn(t,a){t&1&&y(0,"div",16)}function Cn(t,a){t&1&&(o(0,"div",18),z(1,6),n())}function Mn(t,a){if(t&1&&(o(0,"mat-hint",22),r(1),n()),t&2){let e=u(2);b("id",e._hintLabelId),l(),s(e.hintLabel)}}function Sn(t,a){if(t&1&&(o(0,"div",19),g(1,Mn,2,2,"mat-hint",22),z(2,7),y(3,"div",23),z(4,8),n()),t&2){let e=u();l(),_(e.hintLabel?1:-1)}}var pt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=pe({type:t,selectors:[["mat-label"]]})}return t})(),En=new L("MatError");var ft=(()=>{class t{align="start";id=f(De).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=pe({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,d){i&2&&(kt("id",d.id),fe("align",null),I("mat-mdc-form-field-hint-end",d.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),wn=new L("MatPrefix");var Fn=new L("MatSuffix");var Bi=new L("FloatingLabelParent"),Ti=(()=>{class t{_elementRef=f(me);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=f(Ci);_ngZone=f(Se);_parent=f(Bi);_resizeSubscription=new vt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return On(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=pe({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,d){i&2&&I("mdc-floating-label--float-above",d.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function On(t){let a=t;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Pi="mdc-line-ripple--active",Ye="mdc-line-ripple--deactivating",Di=(()=>{class t{_elementRef=f(me);_cleanupTransitionEnd;constructor(){let e=f(Se),i=f(Ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ye),e.add(Pi)}deactivate(){this._elementRef.nativeElement.classList.add(Ye)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,d=i.contains(Ye);e.propertyName==="opacity"&&d&&i.remove(Pi,Ye)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=pe({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Ai=(()=>{class t{_elementRef=f(me);_ngZone=f(Se);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=P({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,d){if(i&1&&Fe(tn,5),i&2){let c;S(c=E())&&(d._notch=c.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,d){i&2&&I("mdc-notched-outline--notched",d.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:nn,ngContentSelectors:an,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,d){i&1&&(we(),ot(0,"div",1),Ot(1,"div",2,0),z(3),It(),ot(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),ut=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=pe({type:t})}return t})();var ht=new L("MatFormField"),In=new L("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ri="fill",kn="auto",zi="fixed",Tn="translateY(-50%)",Li=(()=>{class t{_elementRef=f(me);_changeDetectorRef=f(Ke);_platform=f(Ut);_idGenerator=f(De);_ngZone=f(Se);_defaults=f(In,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Pe("iconPrefixContainer");_textPrefixContainerSignal=Pe("textPrefixContainer");_iconSuffixContainerSignal=Pe("iconSuffixContainer");_textSuffixContainerSignal=Pe("textSuffixContainer");_prefixSuffixContainers=ge(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Nt(pt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ti(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||kn}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Ri;this._appearanceSignal.set(i)}_appearanceSignal=V(Ri);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||zi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||zi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ge();constructor(){let e=this._defaults,i=f(He);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),wt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ge(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,d="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(d+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(d+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Me([void 0,void 0]),ye(()=>[i.errorState,i.userAriaDescribedBy]),Mt(),Ce(([[c,h],[A,R]])=>c!==A||h!==R)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(X(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),he(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Wt({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ge(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let c=this._hintChildren?this._hintChildren.find(A=>A.align==="start"):null,h=this._hintChildren?this._hintChildren.find(A=>A.align==="end"):null;c?e.push(c.id):this._hintLabel&&e.push(this._hintLabelId),h&&e.push(h.id)}else this._errorChildren&&e.push(...this._errorChildren.map(c=>c.id));let i=this._control.describedByIds,d;if(i){let c=this._describedByIds||e;d=e.concat(i.filter(h=>h&&!c.includes(h)))}else d=e;this._control.setDescribedByIds(d),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,d=this._iconSuffixContainer?.nativeElement,c=this._textSuffixContainer?.nativeElement,h=e?.getBoundingClientRect().width??0,A=i?.getBoundingClientRect().width??0,R=d?.getBoundingClientRect().width??0,Ui=c?.getBoundingClientRect().width??0,Yi=this._currentDirection==="rtl"?"-1":"1",Xi=`${h+A}px`,Zi=`calc(${Yi} * (${Xi} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Ji=`var(--mat-mdc-form-field-label-transform, ${Tn} translateX(${Zi}))`,en=h+A+R+Ui;return[Ji,en]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,d]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),d!==null&&this._notchedOutline?._setMaxWidth(d)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=P({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,d,c){if(i&1&&(Tt(c,d._labelChild,pt,5),We(c,ut,5)(c,wn,5)(c,Fn,5)(c,En,5)(c,ft,5)),i&2){lt();let h;S(h=E())&&(d._formFieldControl=h.first),S(h=E())&&(d._prefixChildren=h),S(h=E())&&(d._suffixChildren=h),S(h=E())&&(d._errorChildren=h),S(h=E())&&(d._hintChildren=h)}},viewQuery:function(i,d){if(i&1&&(Pt(d._iconPrefixContainerSignal,Fi,5)(d._textPrefixContainerSignal,Oi,5)(d._iconSuffixContainerSignal,Ii,5)(d._textSuffixContainerSignal,ki,5),Fe(on,5)(Fi,5)(Oi,5)(Ii,5)(ki,5)(Ti,5)(Ai,5)(Di,5)),i&2){lt(4);let c;S(c=E())&&(d._textField=c.first),S(c=E())&&(d._iconPrefixContainer=c.first),S(c=E())&&(d._textPrefixContainer=c.first),S(c=E())&&(d._iconSuffixContainer=c.first),S(c=E())&&(d._textSuffixContainer=c.first),S(c=E())&&(d._floatingLabel=c.first),S(c=E())&&(d._notchedOutline=c.first),S(c=E())&&(d._lineRipple=c.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,d){i&2&&I("mat-mdc-form-field-label-always-float",d._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",d._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",d._hasIconSuffix)("mat-form-field-invalid",d._control.errorState)("mat-form-field-disabled",d._control.disabled)("mat-form-field-autofilled",d._control.autofilled)("mat-form-field-appearance-fill",d.appearance=="fill")("mat-form-field-appearance-outline",d.appearance=="outline")("mat-form-field-hide-placeholder",d._hasFloatingLabel()&&!d._shouldLabelFloat())("mat-primary",d.color!=="accent"&&d.color!=="warn")("mat-accent",d.color==="accent")("mat-warn",d.color==="warn")("ng-untouched",d._shouldForward("untouched"))("ng-touched",d._shouldForward("touched"))("ng-pristine",d._shouldForward("pristine"))("ng-dirty",d._shouldForward("dirty"))("ng-valid",d._shouldForward("valid"))("ng-invalid",d._shouldForward("invalid"))("ng-pending",d._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[qe([{provide:ht,useExisting:t},{provide:Bi,useExisting:t}])],ngContentSelectors:rn,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,d){if(i&1&&(we(ln),D(0,sn,1,1,"ng-template",null,0,Lt),o(2,"div",6,1),x("click",function(h){return d._control.onContainerClick(h)}),g(4,mn,1,0,"div",7),o(5,"div",8),g(6,un,2,2,"div",9),g(7,hn,3,0,"div",10),g(8,gn,3,0,"div",11),o(9,"div",12),g(10,xn,1,1,null,13),z(11),n(),g(12,bn,3,0,"div",14),g(13,vn,3,0,"div",15),n(),g(14,yn,1,0,"div",16),n(),o(15,"div",17),g(16,Cn,2,0,"div",18)(17,Sn,5,1,"div",19),n()),i&2){let c;l(2),I("mdc-text-field--filled",!d._hasOutline())("mdc-text-field--outlined",d._hasOutline())("mdc-text-field--no-label",!d._hasFloatingLabel())("mdc-text-field--disabled",d._control.disabled)("mdc-text-field--invalid",d._control.errorState),l(2),_(!d._hasOutline()&&!d._control.disabled?4:-1),l(2),_(d._hasOutline()?6:-1),l(),_(d._hasIconPrefix?7:-1),l(),_(d._hasTextPrefix?8:-1),l(2),_(!d._hasOutline()||d._forceDisplayInfixLabel()?10:-1),l(2),_(d._hasTextSuffix?12:-1),l(),_(d._hasIconSuffix?13:-1),l(),_(d._hasOutline()?-1:14),l(),I("mat-mdc-form-field-subscript-dynamic-size",d.subscriptSizing==="dynamic");let h=d._getSubscriptMessageType();l(),_((c=h)==="error"?16:c==="hint"?17:-1)}},dependencies:[Ti,Ai,Ht,Di,ft],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Vi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ne({type:t});static \u0275inj=Be({imports:[Xt,Li,je]})}return t})();var zn=["trigger"],Bn=["panel"],Ln=[[["mat-select-trigger"]],"*"],Vn=["mat-select-trigger","*"];function Nn(t,a){if(t&1&&(o(0,"span",4),r(1),n()),t&2){let e=u();l(),s(e.placeholder)}}function Wn(t,a){t&1&&z(0)}function qn(t,a){if(t&1&&(o(0,"span",11),r(1),n()),t&2){let e=u(2);l(),s(e.triggerValue)}}function Kn(t,a){if(t&1&&(o(0,"span",5),g(1,Wn,1,0)(2,qn,2,1,"span",11),n()),t&2){let e=u();l(),_(e.customTrigger?1:2)}}function Hn(t,a){if(t&1){let e=O();o(0,"div",12,1),x("keydown",function(d){C(e);let c=u();return M(c._handleKeydown(d))}),z(2,1),n()}if(t&2){let e=u();Dt(e.panelClass),I("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),fe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var jn=new L("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=f(Et);return()=>hi(t)}}),Gn=new L("MAT_SELECT_CONFIG"),$n=new L("MatSelectTrigger"),gt=class{source;value;constructor(a,e){this.source=a,this.value=e}},Hi=(()=>{class t{_viewportRuler=f(fi);_changeDetectorRef=f(Ke);_elementRef=f(me);_dir=f(He,{optional:!0});_idGenerator=f(De);_renderer=f(Ve);_parentFormField=f(ht,{optional:!0});ngControl=f(ri,{self:!0,optional:!0});_liveAnnouncer=f(Zt);_defaultOptions=f(Gn,{optional:!0});_animationsDisabled=Ge();_popoverLocation;_initialized=new Y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let d=this.panel.nativeElement,c=ai(e,this.options,this.optionGroups),h=i._getHostElement();e===0&&c===1?d.scrollTop=0:d.scrollTop=oi(h.offsetTop,h.offsetHeight,d.scrollTop,d.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new gt(this,e)}_scrollStrategyFactory=f(jn);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new Y;_errorStateTracker;stateChanges=new Y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=V(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(k.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=yt(()=>{let e=this.options;return e?e.changes.pipe(Me(e),at(()=>he(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(at(()=>this.optionSelectionChanges))});openedChange=new Le;_openedStream=this.openedChange.pipe(Ce(e=>e),ye(()=>{}));_closedStream=this.openedChange.pipe(Ce(e=>!e),ye(()=>{}));selectionChange=new Le;valueChange=new Le;constructor(){let e=f(Qt),i=f(di,{optional:!0}),d=f(H,{optional:!0}),c=f(new Vt("tabindex"),{optional:!0}),h=f(gi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new li(e,this.ngControl,d,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=c==null?0:parseInt(c)||0,this._popoverLocation=h?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ae(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(X(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(X(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(Me(null),X(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let d=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?d.setAttribute("aria-labelledby",e):d.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ct(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&dt(this._trackedModal,"aria-owns",i),ei(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;dt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(d),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",c=>{c.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),d=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,d=i===40||i===38||i===37||i===39,c=i===13||i===32,h=this._keyManager;if(!h.isTyping()&&c&&!$e(e)||(this.multiple||e.altKey)&&d)e.preventDefault(),this.open();else if(!this.multiple){let A=this.selected;h.onKeydown(e);let R=this.selected;R&&A!==R&&this._liveAnnouncer.announce(R.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,d=e.keyCode,c=d===40||d===38,h=i.isTyping();if(c&&e.altKey)e.preventDefault(),this.close();else if(!h&&(d===13||d===32)&&i.activeItem&&!$e(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!h&&this._multiple&&d===65&&e.ctrlKey){e.preventDefault();let A=this.options.some(R=>!R.disabled&&!R.selected);this.options.forEach(R=>{R.disabled||(A?R.select():R.deselect())})}else{let A=i.activeItemIndex;i.onKeydown(e),this._multiple&&c&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==A&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!$e(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(d=>{if(this._selectionModel.isSelected(d))return!1;try{return(d.value!=null||this.canSelectNullableOptions)&&this._compareWith(d.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof st?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Jt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=he(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(X(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),he(...this.options.map(i=>i._stateChanges)).pipe(X(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let d=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(d!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),d!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,d)=>this.sortComparator?this.sortComparator(i,d,e):e.indexOf(i)-e.indexOf(d)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(d=>d.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=Yt(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=P({type:t,selectors:[["mat-select"]],contentQueries:function(i,d,c){if(i&1&&We(c,$n,5)(c,Qe,5)(c,ni,5),i&2){let h;S(h=E())&&(d.customTrigger=h.first),S(h=E())&&(d.options=h),S(h=E())&&(d.optionGroups=h)}},viewQuery:function(i,d){if(i&1&&Fe(zn,5)(Bn,5)(mt,5),i&2){let c;S(c=E())&&(d.trigger=c.first),S(c=E())&&(d.panel=c.first),S(c=E())&&(d._overlayDir=c.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,d){i&1&&x("keydown",function(h){return d._handleKeydown(h)})("focus",function(){return d._onFocus()})("blur",function(){return d._onBlur()}),i&2&&(fe("id",d.id)("tabindex",d.disabled?-1:d.tabIndex)("aria-controls",d.panelOpen?d.id+"-panel":null)("aria-expanded",d.panelOpen)("aria-label",d.ariaLabel||null)("aria-required",d.required.toString())("aria-disabled",d.disabled.toString())("aria-invalid",d.errorState)("aria-activedescendant",d._getAriaActiveDescendant()),I("mat-mdc-select-disabled",d.disabled)("mat-mdc-select-invalid",d.errorState)("mat-mdc-select-required",d.required)("mat-mdc-select-empty",d.empty)("mat-mdc-select-multiple",d.multiple)("mat-select-open",d.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:rt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Z],placeholder:"placeholder",required:[2,"required","required",Z],multiple:[2,"multiple","multiple",Z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",rt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[qe([{provide:ut,useExisting:t},{provide:ii,useExisting:t}]),Ft],ngContentSelectors:Vn,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,d){if(i&1&&(we(Ln),o(0,"div",2,0),x("click",function(){return d.open()}),o(3,"div",3),g(4,Nn,2,1,"span",4)(5,Kn,3,1,"span",5),n(),o(6,"div",6)(7,"div",7),St(),o(8,"svg",8),y(9,"path",9),n()()()(),D(10,Hn,3,16,"ng-template",10),x("detach",function(){return d.close()})("backdropClick",function(){return d.close()})("overlayKeydown",function(h){return d._handleOverlayKeydown(h)})),i&2){let c=Oe(1);l(3),fe("id",d._valueId),l(),_(d.empty?4:5),l(6),b("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",d._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",d._scrollStrategy)("cdkConnectedOverlayOrigin",d._preferredOverlayOrigin||c)("cdkConnectedOverlayPositions",d._positions)("cdkConnectedOverlayWidth",d._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",d._popoverLocation)}},dependencies:[st,mt],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var ji=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ne({type:t});static \u0275inj=Be({imports:[_i,ct,je,ui,Vi,ct]})}return t})();var Gi=(t,a)=>a.id;function Un(t,a){if(t&1&&(o(0,"option",5),r(1),n()),t&2){let e=a.$implicit;b("value",e.id),l(),B("",e.name," (",e.owner,")")}}function Yn(t,a){t&1&&(o(0,"p",6),r(1,"Cargando inventario..."),n())}function Xn(t,a){if(t&1&&(o(0,"option",5),r(1),n()),t&2){let e=a.$implicit;b("value",e.id),l(),At("",e.nombre," \u2014 Stock disponible: ",e.stockActual," ",e.unidad)}}function Zn(t,a){t&1&&(o(0,"p",16),r(1," Sin stock disponible. El administrador debe ingresar vacunas en el inventario. "),n())}function Jn(t,a){if(t&1&&r(0),t&2){let e=u(3);v(" \u2014 ",e.selectedMed.descripcion," ")}}function ea(t,a){if(t&1&&(o(0,"div",17)(1,"strong"),r(2),n(),r(3),g(4,Jn,1,1),n()),t&2){let e=u(2);l(2),s(e.selectedMed.nombre),l(),B(" \u2014 Stock: ",e.selectedMed.stockActual," ",e.selectedMed.unidad," "),l(),_(e.selectedMed.descripcion?4:-1)}}function ta(t,a){if(t&1&&(o(0,"select",15)(1,"option",4),r(2,"Seleccionar del inventario..."),n(),w(3,Xn,2,4,"option",5,Gi),n(),g(5,Zn,2,0,"p",16),g(6,ea,5,4,"div",17)),t&2){let e=u();l(3),F(e.medicamentos()),l(2),_(e.medicamentos().length===0?5:-1),l(),_(e.selectedMed?6:-1)}}var Xe=class t{fb=f(ie);ref=f(ae);svc=f(Q);snack=f(U);auth=f(_e);store=f(se);data=f(oe,{optional:!0});today=new Date().toISOString().split("T")[0];medicamentos=V([]);loadingMeds=V(!0);form=this.fb.group({mascotaId:[this.data?.patientId??"",k.required],medicamentoId:["",k.required],fechaAplicacion:[this.today,k.required],proximaDosis:[""],lote:[""],observaciones:[""]});submitting=!1;constructor(){this.svc.getMedicamentos().subscribe({next:a=>{this.medicamentos.set(a.filter(e=>e.stockActual>0)),this.loadingMeds.set(!1)},error:()=>this.loadingMeds.set(!1)})}get selectedMed(){let a=this.form.value.medicamentoId;return this.medicamentos().find(e=>String(e.id)===String(a))??null}submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e=this.selectedMed,i={mascotaId:Number(a.mascotaId),tipoVacunaId:Number(a.medicamentoId),nombreVacuna:e?.nombre??"Vacuna",lote:a.lote||null,fechaAplicacion:a.fechaAplicacion,proximaDosis:a.proximaDosis||null,estado:"Aplicada",veterinarioId:Number(this.auth.user()?.id??0)};this.svc.createVacuna(i).subscribe({next:()=>{this.snack.open("Vacuna registrada y stock actualizado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-registrar-vacuna-dialog"]],decls:41,vars:4,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[2,"font-size","12px","color","#94A3B8"],[1,"dlg-row"],["type","date","formControlName","fechaAplicacion"],["type","date","formControlName","proximaDosis"],["type","text","formControlName","lote","placeholder","Ej: LOT-2025-001"],["formControlName","observaciones","placeholder","Reacciones adversas, notas..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"],["formControlName","medicamentoId"],[2,"font-size","12px","color","#EF4444","margin-top","4px"],[2,"margin-top","6px","padding","8px 12px","background","#ECFEFF","border-radius","8px","font-size","12px","color","#0E7490"]],template:function(e,i){e&1&&(o(0,"h2",0),r(1,"Registrar Vacuna"),n(),o(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),r(6,"Paciente *"),n(),o(7,"select",3)(8,"option",4),r(9,"Seleccionar paciente..."),n(),w(10,Un,2,3,"option",5,Gi),n()(),o(12,"div",2)(13,"label"),r(14,"Vacuna / Medicamento *"),n(),g(15,Yn,2,0,"p",6)(16,ta,7,2),n(),o(17,"div",7)(18,"div",2)(19,"label"),r(20,"Fecha de Aplicaci\xF3n *"),n(),y(21,"input",8),n(),o(22,"div",2)(23,"label"),r(24,"Pr\xF3xima Dosis *"),n(),y(25,"input",9),n()(),o(26,"div",2)(27,"label"),r(28,"N\xFAmero de Lote"),n(),y(29,"input",10),n(),o(30,"div",2)(31,"label"),r(32,"Observaciones"),n(),y(33,"textarea",11),n()()(),o(34,"mat-dialog-actions",12)(35,"button",13),r(36,"Cancelar"),n(),o(37,"button",14),x("click",function(){return i.submit()}),o(38,"mat-icon"),r(39,"vaccines"),n(),r(40),n()()),e&2&&(l(3),b("formGroup",i.form),l(7),F(i.store.patients()),l(5),_(i.loadingMeds()?15:16),l(22),b("disabled",i.form.invalid||i.submitting||i.loadingMeds()),l(3),v(" ",i.submitting?"Guardando...":"Registrar Vacuna"," "))},dependencies:[ne,ee,be,ve,q,xe,K,J,H,te,$,le,re,ce,de,G,j,W,N],encapsulation:2})};var ia=(t,a)=>a.id;function na(t,a){if(t&1&&(o(0,"option",5),r(1),n()),t&2){let e=a.$implicit;b("value",e.id),l(),B("",e.name," (",e.owner,")")}}function aa(t,a){if(t&1&&(o(0,"option",5),r(1),n()),t&2){let e=a.$implicit;b("value",e),l(),s(e)}}var it=class t{fb=f(ie);ref=f(ae);svc=f(Q);snack=f(U);auth=f(_e);store=f(se);data=f(oe,{optional:!0});today=new Date().toISOString().split("T")[0];estados=["Estable","Cr\xEDtico","Recuperaci\xF3n"];form=this.fb.group({mascotaId:[this.data?.patientId??"",k.required],fechaIngreso:[this.today,k.required],diagnostico:["",k.required],tratamiento:["",k.required],estado:["Estable",k.required],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={mascotaId:Number(a.mascotaId),veterinarioId:Number(this.auth.user()?.id??0),fechaIngreso:`${a.fechaIngreso}T00:00:00`,motivo:a.diagnostico,diagnostico:a.diagnostico,tratamiento:a.tratamiento,estado:a.estado};this.svc.createHospitalizacion(e).subscribe({next:()=>{this.snack.open("Ingreso registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-registrar-ingreso-dialog"]],decls:42,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[1,"dlg-row"],["type","date","formControlName","fechaIngreso"],["formControlName","estado"],["formControlName","diagnostico","placeholder","Diagn\xF3stico de ingreso..."],["formControlName","tratamiento","placeholder","Medicamentos, procedimientos..."],["formControlName","observaciones","placeholder","Notas adicionales..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,i){e&1&&(o(0,"h2",0),r(1,"Registrar Ingreso Hospitalario"),n(),o(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),r(6,"Paciente *"),n(),o(7,"select",3)(8,"option",4),r(9,"Seleccionar paciente..."),n(),w(10,na,2,3,"option",5,ia),n()(),o(12,"div",6)(13,"div",2)(14,"label"),r(15,"Fecha de Ingreso *"),n(),y(16,"input",7),n(),o(17,"div",2)(18,"label"),r(19,"Estado *"),n(),o(20,"select",8),w(21,aa,2,2,"option",5,Ee),n()()(),o(23,"div",2)(24,"label"),r(25,"Diagn\xF3stico *"),n(),y(26,"textarea",9),n(),o(27,"div",2)(28,"label"),r(29,"Tratamiento Inicial *"),n(),y(30,"textarea",10),n(),o(31,"div",2)(32,"label"),r(33,"Observaciones"),n(),y(34,"textarea",11),n()()(),o(35,"mat-dialog-actions",12)(36,"button",13),r(37,"Cancelar"),n(),o(38,"button",14),x("click",function(){return i.submit()}),o(39,"mat-icon"),r(40,"local_hospital"),n(),r(41," Registrar Ingreso "),n()()),e&2&&(l(3),b("formGroup",i.form),l(7),F(i.store.patients()),l(11),F(i.estados),l(17),b("disabled",i.form.invalid||i.submitting))},dependencies:[ne,ee,be,ve,q,xe,K,J,H,te,$,le,re,ce,de,G,j,W,N],encapsulation:2})};var Re=class t{fb=f(ie);ref=f(ae);svc=f(Q);snack=f(U);store=f(se);data=f(oe,{optional:!0});isEdit=!!this.data?.cliente;form=this.fb.group({nombre:[this.data?.cliente?.nombre??"",k.required],telefono:[this.data?.cliente?.telefono??"",k.required],correo:[this.data?.cliente?.email??"",[k.email]],direccion:[this.data?.cliente?.direccion??""],dni:[this.data?.cliente?.dni??""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={nombre:a.nombre,telefono:a.telefono,email:a.correo,direccion:a.direccion,dni:a.dni};(this.isEdit?this.svc.updateCliente(this.data.cliente.id,e):this.svc.createCliente(e)).subscribe({next:()=>{this.snack.open(this.isEdit?"Cliente actualizado":"Cliente registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-registrar-cliente-dialog"]],decls:33,vars:5,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-row"],[1,"dlg-field","dlg-field-full"],["type","text","formControlName","nombre","placeholder","Nombre del propietario"],[1,"dlg-field"],["type","tel","formControlName","telefono","placeholder","+51 999 000 000"],["type","text","formControlName","dni","placeholder","12345678"],["type","email","formControlName","correo","placeholder","correo@ejemplo.com"],["type","text","formControlName","direccion","placeholder","Av. Principal 123..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,i){e&1&&(o(0,"h2",0),r(1),n(),o(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"div",3)(6,"label"),r(7,"Nombre completo *"),n(),y(8,"input",4),n()(),o(9,"div",2)(10,"div",5)(11,"label"),r(12,"Tel\xE9fono *"),n(),y(13,"input",6),n(),o(14,"div",5)(15,"label"),r(16,"DNI"),n(),y(17,"input",7),n()(),o(18,"div",5)(19,"label"),r(20,"Correo electr\xF3nico"),n(),y(21,"input",8),n(),o(22,"div",5)(23,"label"),r(24,"Direcci\xF3n"),n(),y(25,"input",9),n()()(),o(26,"mat-dialog-actions",10)(27,"button",11),r(28,"Cancelar"),n(),o(29,"button",12),x("click",function(){return i.submit()}),o(30,"mat-icon"),r(31),n(),r(32),n()()),e&2&&(l(),s(i.isEdit?"Editar Cliente":"Registrar Cliente"),l(2),b("formGroup",i.form),l(26),b("disabled",i.form.invalid||i.submitting),l(2),s(i.isEdit?"save":"person_add"),l(),v(" ",i.isEdit?"Guardar Cambios":"Registrar Cliente"," "))},dependencies:[ne,ee,q,K,J,H,te,$,le,re,ce,de,G,j,W,N],encapsulation:2})};function oa(t,a){if(t&1&&(o(0,"option",8),r(1),n()),t&2){let e=a.$implicit;b("value",e.id),l(),B("",e.nombre," (Stock: ",e.stockActual,")")}}var nt=class t{fb=f(ie);ref=f(ae);svc=f(Q);snack=f(U);data=f(oe,{optional:!0});isEdit=!!this.data?.tratamiento;medicamentos=V([]);loading=V(!0);form=this.fb.group({consultaId:[this.data?.consultaId??"",k.required],medicamentoId:[this.data?.tratamiento?.medicamentoId??null],cantidad:[this.data?.tratamiento?.cantidad??1,[k.min(1)]],descripcion:[this.data?.tratamiento?.descripcion??""],dosis:[this.data?.tratamiento?.dosis??""],frecuencia:[this.data?.tratamiento?.frecuencia??""],duracion:[this.data?.tratamiento?.duracion??""]});constructor(){this.svc.getMedicamentos().subscribe({next:a=>{this.medicamentos.set(a),this.loading.set(!1)},error:()=>this.loading.set(!1)})}submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let a=this.form.value,e={consultaId:Number(a.consultaId),medicamentoId:a.medicamentoId?Number(a.medicamentoId):null,cantidad:a.medicamentoId?a.cantidad??1:null,descripcion:a.descripcion,dosis:a.dosis,frecuencia:a.frecuencia,duracion:a.duracion};(this.isEdit?this.svc.updateTratamiento(this.data.tratamiento.id,e):this.svc.createTratamiento(e)).subscribe({next:()=>{this.snack.open(this.isEdit?"Tratamiento actualizado":"Tratamiento registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-tratamiento-dialog"]],decls:47,vars:6,consts:[[1,"dialog-wrap"],["mat-dialog-title","",1,"dialog-header"],[1,"d-icon"],["mat-icon-button","","mat-dialog-close","",1,"close-btn"],[1,"dialog-form",3,"formGroup"],[1,"form-row"],[1,"form-group",2,"flex","2"],["formControlName","medicamentoId",1,"form-select"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",2,"flex","1"],["formControlName","cantidad","type","number","min","1","placeholder","1",1,"form-input"],[1,"form-group"],["formControlName","descripcion","rows","3","placeholder","Descripci\xF3n del tratamiento prescrito...",1,"form-textarea"],["formControlName","dosis","placeholder","Ej: 250mg",1,"form-input"],["formControlName","frecuencia","placeholder","Ej: Cada 8 horas",1,"form-input"],["formControlName","duracion","placeholder","Ej: 7 d\xEDas",1,"form-input"],["align","end"],["mat-stroked-button","","mat-dialog-close",""],["mat-raised-button","",1,"btn-submit",3,"click","disabled"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"mat-icon",2),r(3,"medication"),n(),o(4,"span"),r(5),n(),o(6,"button",3)(7,"mat-icon"),r(8,"close"),n()()(),o(9,"mat-dialog-content")(10,"form",4)(11,"div",5)(12,"div",6)(13,"label"),r(14,"Medicamento (opcional)"),n(),o(15,"select",7)(16,"option",8),r(17,"\u2014 Sin medicamento \u2014"),n(),D(18,oa,2,3,"option",9),n()(),o(19,"div",10)(20,"label"),r(21,"Cantidad"),n(),y(22,"input",11),n()(),o(23,"div",12)(24,"label"),r(25,"Descripci\xF3n del tratamiento"),n(),y(26,"textarea",13),n(),o(27,"div",5)(28,"div",12)(29,"label"),r(30,"Dosis"),n(),y(31,"input",14),n(),o(32,"div",12)(33,"label"),r(34,"Frecuencia"),n(),y(35,"input",15),n()(),o(36,"div",12)(37,"label"),r(38,"Duraci\xF3n"),n(),y(39,"input",16),n()()(),o(40,"mat-dialog-actions",17)(41,"button",18),r(42,"Cancelar"),n(),o(43,"button",19),x("click",function(){return i.submit()}),o(44,"mat-icon"),r(45,"save"),n(),r(46),n()()()),e&2&&(l(5),s(i.isEdit?"Editar Tratamiento":"Registrar Tratamiento"),l(5),b("formGroup",i.form),l(6),b("value",null),l(2),b("ngForOf",i.medicamentos()),l(25),b("disabled",i.form.invalid||i.submitting),l(3),v(" ",i.isEdit?"Actualizar":"Registrar Tratamiento"," "))},dependencies:[ne,ee,be,ve,q,si,xe,K,J,mi,H,te,Kt,$,le,re,ce,de,G,j,Ue,W,N],encapsulation:2})};var la=(t,a)=>({current:t,total:a}),ze=(t,a)=>a.id,$i=(t,a)=>a.value,bt=(t,a)=>a.labelKey,ra=(t,a)=>a.date,da=(t,a)=>a.label;function ca(t,a){t&1&&(o(0,"div",1)(1,"mat-icon"),r(2,"admin_panel_settings"),n(),o(3,"span"),r(4,"Vista de solo lectura \u2014 Administrador"),n(),o(5,"button",41)(6,"mat-icon"),r(7,"arrow_back"),n(),r(8," Volver a Administraci\xF3n "),n()())}function sa(t,a){t&1&&(o(0,"mat-icon",42),r(1,"pets"),n(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.patients")))}function ma(t,a){if(t&1){let e=O();o(0,"button",43),x("click",function(){C(e);let d=u();return M(d.openRegistrarPaciente())}),o(1,"mat-icon"),r(2,"add"),n(),r(3),m(4,"translate"),n()}t&2&&(l(3),v(" ",p(4,1,"clinical.patients.register")," "))}function pa(t,a){t&1&&(o(0,"div",21),r(1),m(2,"translate"),n()),t&2&&(l(),s(p(2,1,"clinical.patients.loading")))}function fa(t,a){if(t&1&&(o(0,"div",54)(1,"mat-icon"),r(2,"warning"),n(),o(3,"span"),r(4),m(5,"translate"),n()()),t&2){let e=u().$implicit;l(4),B("",p(5,2,"clinical.patients.allergies")," ",e.alergias)}}function ua(t,a){if(t&1){let e=O();o(0,"button",57),x("click",function(){C(e);let d=u().$implicit,c=u(2);return M(c.openRegistrarPaciente(d))}),o(1,"mat-icon"),r(2,"edit"),n()(),o(3,"button",58),x("click",function(){C(e);let d=u().$implicit,c=u(2);return M(c.deletePatient(d))}),o(4,"mat-icon"),r(5,"delete"),n()()}}function ha(t,a){if(t&1){let e=O();o(0,"div",44)(1,"div",46)(2,"div",47)(3,"mat-icon"),r(4,"pets"),n()(),o(5,"div",48)(6,"div",49),r(7),n(),o(8,"div",50),r(9),n()(),o(10,"span",51),r(11),n()(),o(12,"div",52)(13,"div",53)(14,"mat-icon"),r(15,"pets"),n(),o(16,"span"),r(17),m(18,"translate"),n(),r(19),n(),o(20,"div",53)(21,"mat-icon"),r(22,"cake"),n(),o(23,"span"),r(24),m(25,"translate"),n(),r(26),n(),o(27,"div",53)(28,"mat-icon"),r(29,"monitor_weight"),n(),o(30,"span"),r(31),m(32,"translate"),n(),r(33),n(),o(34,"div",53)(35,"mat-icon"),r(36,"person"),n(),o(37,"span"),r(38),m(39,"translate"),n(),r(40),n(),g(41,fa,6,4,"div",54),n(),o(42,"div",55)(43,"button",56),x("click",function(){let d=C(e).$implicit,c=u(2);return M(c.verFicha(d.id))}),o(44,"mat-icon"),r(45,"visibility"),n(),r(46),m(47,"translate"),n(),g(48,ua,6,0),n()()}if(t&2){let e=a.$implicit,i=u(2);l(2),T("background",e.avatarColor),l(5),s(e.name),l(2),v("ID: ",e.id),l(2),s(e.status),l(6),s(p(18,17,"clinical.patients.species")),l(2),B(" ",e.species," - ",e.breed),l(5),s(p(25,19,"clinical.patients.age")),l(2),v(" ",e.age),l(5),s(p(32,21,"clinical.patients.weight")),l(2),v(" ",e.weight),l(5),s(p(39,23,"clinical.patients.owner")),l(2),v(" ",e.owner),l(),_(e.alergias?41:-1),l(5),v(" ",p(47,25,"clinical.patients.viewFile")," "),l(2),_(i.isAdmin()?-1:48)}}function ga(t,a){t&1&&(o(0,"p",45),r(1),m(2,"translate"),n()),t&2&&(l(),s(p(2,1,"clinical.patients.empty")))}function _a(t,a){if(t&1&&(o(0,"div",22),w(1,ha,49,27,"div",44,ze,!1,ga,3,3,"p",45),n()),t&2){let e=u();l(),F(e.filteredPatients)}}function xa(t,a){t&1&&(o(0,"mat-icon",42),r(1,"people"),n(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.clients")))}function ba(t,a){if(t&1){let e=O();o(0,"button",43),x("click",function(){C(e);let d=u();return M(d.openRegistrarCliente())}),o(1,"mat-icon"),r(2,"add"),n(),r(3),m(4,"translate"),n()}t&2&&(l(3),v(" ",p(4,1,"clinical.clients.register")," "))}function va(t,a){t&1&&(o(0,"div",21),r(1),m(2,"translate"),n()),t&2&&(l(),s(p(2,1,"clinical.patients.loading")))}function ya(t,a){if(t&1){let e=O();o(0,"div",62)(1,"button",57),x("click",function(){C(e);let d=u().$implicit,c=u(2);return M(c.openEditarCliente(d))}),o(2,"mat-icon"),r(3,"edit"),n()(),o(4,"button",58),x("click",function(){C(e);let d=u().$implicit,c=u(2);return M(c.deleteCliente(d))}),o(5,"mat-icon",63),r(6,"delete"),n()()()}}function Ca(t,a){if(t&1&&(o(0,"tr")(1,"td")(2,"div",59)(3,"div",60)(4,"mat-icon"),r(5,"person"),n()(),o(6,"div",61),r(7),n()()(),o(8,"td"),r(9),n(),o(10,"td"),r(11),n(),o(12,"td"),r(13),n(),o(14,"td"),r(15),n(),o(16,"td"),g(17,ya,7,0,"div",62),n()()),t&2){let e=a.$implicit,i=u(2);l(7),s(e.nombre),l(2),s(e.dni),l(2),s(e.telefono),l(2),s(e.email),l(2),s(e.direccion),l(2),_(i.isAdmin()?-1:17)}}function Ma(t,a){t&1&&(o(0,"tr")(1,"td",64),r(2),m(3,"translate"),n()()),t&2&&(l(2),s(p(3,1,"clinical.clients.empty")))}function Sa(t,a){if(t&1&&(o(0,"div",23)(1,"table",27)(2,"thead")(3,"tr")(4,"th"),r(5),m(6,"translate"),n(),o(7,"th"),r(8),m(9,"translate"),n(),o(10,"th"),r(11),m(12,"translate"),n(),o(13,"th"),r(14),m(15,"translate"),n(),o(16,"th"),r(17),m(18,"translate"),n(),o(19,"th"),r(20,"Acciones"),n()()(),o(21,"tbody"),w(22,Ca,18,6,"tr",null,ze,!1,Ma,4,3,"tr"),n()()()),t&2){let e=u();l(5),s(p(6,6,"clinical.clients.colName")),l(3),s(p(9,8,"clinical.clients.colDni")),l(3),s(p(12,10,"clinical.clients.colPhone")),l(3),s(p(15,12,"clinical.clients.colEmail")),l(3),s(p(18,14,"clinical.clients.colAddress")),l(5),F(e.filteredClients)}}function Ea(t,a){t&1&&(o(0,"mat-icon",42),r(1,"medical_services"),n(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.consultations")))}function wa(t,a){if(t&1){let e=O();o(0,"button",43),x("click",function(){C(e);let d=u();return M(d.openNuevaConsulta())}),o(1,"mat-icon"),r(2,"add"),n(),r(3),m(4,"translate"),n()}t&2&&(l(3),v(" ",p(4,1,"clinical.consultations.newConsult")," "))}function Fa(t,a){if(t&1&&(o(0,"div",67),r(1),n()),t&2){let e=u().$implicit;l(),v("\u{1F321} ",e.temperatura,"\xB0C")}}function Oa(t,a){t&1&&(o(0,"span",68),r(1),m(2,"translate"),n()),t&2&&(l(),s(p(2,1,"clinical.consultations.statusClosed")))}function Ia(t,a){if(t&1&&(o(0,"span",69),r(1),n()),t&2){let e=u().$implicit,i=u();b("ngClass",i.getConsultBadge(e.status)),l(),s(e.status)}}function ka(t,a){if(t&1){let e=O();o(0,"button",72),m(1,"translate"),x("click",function(){C(e);let d=u().$implicit,c=u();return M(c.closeConsulta(d.id))}),o(2,"mat-icon",73),r(3,"lock"),n()()}t&2&&b("title",p(1,1,"clinical.consultations.closeConsult"))}function Ta(t,a){t&1&&(o(0,"mat-icon",71),r(1,"lock"),n())}function Pa(t,a){if(t&1&&(o(0,"tr")(1,"td",65),r(2),n(),o(3,"td")(4,"div",59)(5,"div",66)(6,"mat-icon"),r(7,"pets"),n()(),o(8,"div")(9,"div",61),r(10),n(),o(11,"div",67),r(12),n()()()(),o(13,"td")(14,"div",61),r(15),n(),o(16,"div",67),r(17),n()(),o(18,"td"),r(19),n(),o(20,"td")(21,"div",61),r(22),n(),g(23,Fa,2,1,"div",67),n(),o(24,"td")(25,"div",61),r(26),n(),o(27,"div",67),r(28),n()(),o(29,"td"),g(30,Oa,3,3,"span",68)(31,Ia,2,2,"span",69),n(),o(32,"td"),g(33,ka,4,3,"button",70)(34,Ta,2,0,"mat-icon",71),n()()),t&2){let e=a.$implicit,i=u();I("row-closed",e.cerrada),l(2),s(e.id),l(3),T("background",e.patientAvatarColor),l(5),s(e.patientName),l(2),s(e.patientBreed),l(3),s(e.clientName),l(2),s(e.clientPhone),l(2),s(e.type),l(3),s(e.diagnosis),l(),_(e.temperatura?23:-1),l(3),s(e.date),l(2),s(e.time),l(2),_(e.cerrada?30:31),l(3),_(!e.cerrada&&!i.isAdmin()?33:e.cerrada?34:-1)}}function Da(t,a){t&1&&(o(0,"tr")(1,"td",74),r(2),m(3,"translate"),n()()),t&2&&(l(2),s(p(3,1,"clinical.consultations.empty")))}function Aa(t,a){if(t&1){let e=O();o(0,"button",75),x("click",function(){let d=C(e).$implicit,c=u();return M(c.consultPage=d)}),r(1),n()}if(t&2){let e=a.$implicit,i=u();I("active",i.consultPage===e),l(),s(e)}}function Ra(t,a){t&1&&(o(0,"mat-icon",42),r(1,"assignment"),n(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.history")))}function za(t,a){if(t&1){let e=O();o(0,"div",33)(1,"mat-icon"),r(2,"assignment_ind"),n(),o(3,"h3"),r(4),m(5,"translate"),n(),o(6,"p"),r(7),m(8,"translate"),n(),o(9,"button",76),x("click",function(){C(e);let d=u();return M(d.activeTab=0)}),r(10),m(11,"translate"),n()()}t&2&&(l(4),s(p(5,3,"clinical.history.selectPatient")),l(3),s(p(8,5,"clinical.history.selectPatientHint")),l(3),s(p(11,7,"clinical.history.goToPatients")))}function Ba(t,a){if(t&1){let e=O();o(0,"button",43),x("click",function(){C(e);let d=u(2);return M(d.openNuevaConsulta(d.store.selectedPatientId()))}),o(1,"mat-icon"),r(2,"add"),n(),r(3),m(4,"translate"),n()}t&2&&(l(3),v(" ",p(4,1,"clinical.history.newConsult")," "))}function La(t,a){if(t&1&&(o(0,"div",82)(1,"mat-icon"),r(2,"warning"),n(),o(3,"div")(4,"strong"),r(5),m(6,"translate"),n(),o(7,"span"),r(8),n()()()),t&2){let e=u(2);l(5),s(p(6,2,"clinical.history.allergyBannerTitle")),l(3),s(e.historyAllergyAlert)}}function Va(t,a){t&1&&(o(0,"div",83)(1,"mat-icon"),r(2,"check_circle"),n(),o(3,"span"),r(4),m(5,"translate"),n()()),t&2&&(l(4),s(p(5,1,"clinical.history.noAllergies")))}function Na(t,a){if(t&1&&(o(0,"div",85)(1,"div",88),r(2),n(),o(3,"div",89),r(4),m(5,"translate"),n()()),t&2){let e=a.$implicit;l(2),s(e.value),l(2),s(p(5,2,e.labelKey))}}function Wa(t,a){t&1&&(o(0,"p",45),r(1),m(2,"translate"),n()),t&2&&(l(),s(p(2,1,"clinical.history.empty")))}function qa(t,a){if(t&1&&(o(0,"span",94),r(1),n()),t&2){let e=u().$implicit;l(),v("\u{1F321} ",e.temperatura,"\xB0C")}}function Ka(t,a){t&1&&(o(0,"span",97)(1,"mat-icon",101),r(2,"lock"),n(),r(3),m(4,"translate"),n()),t&2&&(l(3),v(" ",p(4,1,"clinical.consultations.statusClosed")))}function Ha(t,a){if(t&1&&(o(0,"div",99)(1,"div",102),r(2),n(),o(3,"p",103),r(4),n()()),t&2){let e=a.$implicit;l(2),s(e.label),l(2),s(e.content)}}function ja(t,a){if(t&1){let e=O();o(0,"div",100)(1,"button",104),x("click",function(){C(e);let d=u().$implicit,c=u(3);return M(c.openTratamiento(d.consultaId))}),o(2,"mat-icon"),r(3,"medication"),n(),r(4),m(5,"translate"),n()()}t&2&&(l(4),v(" ",p(5,1,"clinical.history.addTreatment")," "))}function Ga(t,a){if(t&1&&(o(0,"div",91)(1,"div",92)(2,"mat-icon"),r(3),n(),o(4,"span",93),r(5),n(),g(6,qa,2,1,"span",94),o(7,"span",95),r(8),n(),o(9,"span",96),r(10),n(),g(11,Ka,5,3,"span",97),n(),o(12,"div",98),w(13,Ha,5,2,"div",99,da),g(15,ja,6,3,"div",100),n()()),t&2){let e=a.$implicit,i=u(3);T("border-left","4px solid "+e.borderColor),l(),T("background",e.bg),l(),T("color",e.color),l(),s(e.icon),l(),T("color",e.color),l(),s(e.type),l(),_(e.temperatura?6:-1),l(2),s(e.date),l(2),s(e.doctor),l(),_(e.cerrada?11:-1),l(2),F(e.sections),l(2),_(!e.cerrada&&!i.isAdmin()?15:-1)}}function $a(t,a){if(t&1&&(o(0,"div",87),w(1,Ga,16,15,"div",90,ra),n()),t&2){let e=u(2);l(),F(e.historyRecords)}}function Qa(t,a){if(t&1&&(o(0,"div",77)(1,"div",78)(2,"mat-icon"),r(3,"pets"),n()(),o(4,"div",79)(5,"h2"),r(6),n(),o(7,"p"),r(8),m(9,"translate"),n()(),o(10,"div",80),g(11,Ba,5,3,"button",11),o(12,"button",81)(13,"mat-icon"),r(14,"bookmark_border"),n()()()(),g(15,La,9,4,"div",82)(16,Va,6,3,"div",83),o(17,"div",84),w(18,Na,6,4,"div",85,bt),n(),o(20,"div",86),r(21),m(22,"translate"),n(),g(23,Wa,3,3,"p",45)(24,$a,3,0,"div",87)),t&2){let e=u();l(),T("background",e.historyPatient.avatarColor),l(5),s(e.historyPatient.name),l(2),Rt("",e.historyPatient.breed," \xB7 ",e.historyPatient.age," \xB7 ",p(9,11,"clinical.history.owner")," ",e.historyPatient.owner),l(3),_(e.isAdmin()?-1:11),l(4),_(e.historyAllergyAlert?15:16),l(3),F(e.historyPatient.stats),l(3),s(p(22,13,"clinical.history.fullHistory")),l(2),_(e.historyRecords.length===0?23:24)}}function Ua(t,a){t&1&&(o(0,"mat-icon",42),r(1,"vaccines"),n(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.vaccines")))}function Ya(t,a){if(t&1){let e=O();o(0,"button",105),x("click",function(){let d=C(e).$implicit,c=u();return M(c.vaccineFilter=d.value)}),r(1),m(2,"translate"),n()}if(t&2){let e=a.$implicit,i=u();I("chip-active",i.vaccineFilter===e.value),l(),v(" ",p(2,3,e.labelKey)," ")}}function Xa(t,a){if(t&1){let e=O();o(0,"button",43),x("click",function(){C(e);let d=u();return M(d.openRegistrarVacuna())}),o(1,"mat-icon"),r(2,"add"),n(),r(3),m(4,"translate"),n()}t&2&&(l(3),v(" ",p(4,1,"clinical.vaccines.register")," "))}function Za(t,a){if(t&1&&(o(0,"div",106)(1,"mat-icon",107),r(2),n(),o(3,"div",108),r(4),n(),o(5,"div",109),r(6),m(7,"translate"),n(),o(8,"div",110),r(9),m(10,"translate"),n()()),t&2){let e=a.$implicit;T("background",e.bg),l(),T("color",e.color),l(),s(e.icon),l(),T("color",e.color),l(),s(e.value),l(),T("color",e.color),l(),s(p(7,12,e.labelKey)),l(3),s(p(10,14,e.sublabelKey))}}function Ja(t,a){t&1&&(r(0),m(1,"translate")),t&2&&v(" ",p(1,1,"clinical.vaccines.actionViewDetails")," ")}function eo(t,a){t&1&&(r(0),m(1,"translate")),t&2&&v(" ",p(1,1,"clinical.vaccines.actionSchedule")," ")}function to(t,a){t&1&&(r(0),m(1,"translate")),t&2&&v(" ",p(1,1,"clinical.vaccines.actionApplyNow")," ")}function io(t,a){if(t&1){let e=O();o(0,"button",112),x("click",function(){C(e);let d=u().$implicit,c=u();return M(c.openRegistrarVacuna(d.mascotaId))}),g(1,Ja,2,3)(2,eo,2,3)(3,to,2,3),n()}if(t&2){let e=u().$implicit;l(),_(e.status==="Al D\xEDa"?1:e.status==="Pr\xF3xima"?2:3)}}function no(t,a){if(t&1&&(o(0,"tr")(1,"td")(2,"div",59)(3,"div",66)(4,"mat-icon"),r(5,"pets"),n()(),o(6,"div")(7,"div",61),r(8),n(),o(9,"div",67),r(10),n()()()(),o(11,"td")(12,"div",61),r(13),n(),o(14,"div",67),r(15),n()(),o(16,"td"),r(17),n(),o(18,"td"),r(19),n(),o(20,"td")(21,"span",69),r(22),n()(),o(23,"td"),g(24,io,4,1,"button",111),n()()),t&2){let e=a.$implicit,i=u();l(3),T("background",e.patientAvatarColor),l(5),s(e.patientName),l(2),s(e.patientBreed),l(3),s(e.vaccineName),l(2),s(e.vaccineDesc),l(2),s(e.lastApplied),l(),I("text-danger",e.nextDoseHighlight),l(),s(e.nextDose),l(2),b("ngClass",i.getVaccineBadge(e.status)),l(),s(e.status),l(2),_(i.isAdmin()?-1:24)}}function ao(t,a){t&1&&(o(0,"tr")(1,"td",64),r(2),m(3,"translate"),n()()),t&2&&(l(2),s(p(3,1,"clinical.vaccines.empty")))}function oo(t,a){t&1&&(o(0,"mat-icon",42),r(1,"local_hospital"),n(),r(2),m(3,"translate")),t&2&&(l(2),v(" ",p(3,1,"clinical.tabs.hospitalization")))}function lo(t,a){if(t&1){let e=O();o(0,"button",43),x("click",function(){C(e);let d=u();return M(d.openRegistrarIngreso())}),o(1,"mat-icon"),r(2,"add"),n(),r(3),m(4,"translate"),n()}t&2&&(l(3),v(" ",p(4,1,"clinical.hospitalization.register")," "))}function ro(t,a){if(t&1&&(o(0,"div",39)(1,"div")(2,"div",113),r(3),m(4,"translate"),n(),o(5,"div",114),r(6),n(),o(7,"div",115),r(8),m(9,"translate"),n()(),o(10,"div",116)(11,"mat-icon"),r(12),n()()()),t&2){let e=a.$implicit;l(3),s(p(4,10,e.labelKey)),l(2),T("color",e.color),l(),s(e.value),l(2),s(p(9,12,e.sublabelKey)),l(2),T("background",e.bg),l(),T("color",e.color),l(),s(e.icon)}}function co(t,a){if(t&1){let e=O();o(0,"button",105),x("click",function(){let d=C(e).$implicit,c=u();return M(c.hospitalizationFilter=d.value)}),r(1),m(2,"translate"),n()}if(t&2){let e=a.$implicit,i=u();I("chip-active",i.hospitalizationFilter===e.value),l(),B(" ",p(2,4,e.labelKey)," (",i.getHospCount(e.value),") ")}}function so(t,a){if(t&1&&(o(0,"li"),r(1),n()),t&2){let e=a.$implicit;l(),v("\u2022 ",e)}}function mo(t,a){if(t&1){let e=O();o(0,"button",120),x("click",function(){C(e);let d=u().$implicit,c=u();return M(c.openRegistrarIngreso(d.mascotaId))}),o(1,"mat-icon"),r(2,"edit"),n()()}}function po(t,a){if(t&1){let e=O();o(0,"tr")(1,"td")(2,"div",59)(3,"div",66)(4,"mat-icon"),r(5,"pets"),n()(),o(6,"div")(7,"div",61),r(8),n(),o(9,"div",67),r(10),n()()()(),o(11,"td")(12,"div",61),r(13),n(),o(14,"div",67),r(15),n()(),o(16,"td")(17,"span",69),r(18),n()(),o(19,"td")(20,"div",61),r(21),n(),o(22,"div",67),r(23),n()(),o(24,"td"),r(25),n(),o(26,"td")(27,"ul",117),w(28,so,2,1,"li",null,Ee),n()(),o(30,"td")(31,"div",62)(32,"button",118),x("click",function(){let d=C(e).$implicit,c=u();return M(c.verFicha(d.mascotaId))}),o(33,"mat-icon"),r(34,"visibility"),n()(),g(35,mo,3,0,"button",119),n()()()}if(t&2){let e=a.$implicit,i=u();l(3),T("background",e.patientAvatarColor),l(5),s(e.patientName),l(2),B("",e.patientBreed," \xB7 ",e.patientAge),l(3),s(e.ownerName),l(2),s(e.ownerPhone),l(2),b("ngClass",i.getHospBadge(e.status)),l(),v("\u2022 ",e.status),l(3),s(e.admissionDate),l(2),s(e.daysAgo),l(2),s(e.diagnosis),l(3),F(e.treatments),l(7),_(i.isAdmin()?-1:35)}}function fo(t,a){t&1&&(o(0,"tr")(1,"td",74),r(2),m(3,"translate"),n()()),t&2&&(l(2),s(p(3,1,"clinical.hospitalization.empty")))}var xt=5,Qi=class t{store=f(se);svc=f(Q);dialog=f(xi);snack=f(U);translate=f(Gt);auth=f(_e);isAdmin=ge(()=>this.auth.hasRole("admin"));activeTab=0;patientSearch="";clientSearch="";speciesFilter="Todas";vaccineFilter="Todas";hospitalizationFilter="Todos";consultDateFilter="all";vaccineFilters=[{value:"Todas",labelKey:"clinical.vaccines.filterAll"},{value:"Pr\xF3ximas",labelKey:"clinical.vaccines.filterUpcoming"},{value:"Vencidas",labelKey:"clinical.vaccines.filterExpired"}];hospFilters=[{value:"Todos",labelKey:"clinical.hospitalization.filterAll"},{value:"Cr\xEDtico",labelKey:"clinical.hospitalization.filterCritical"},{value:"Estable",labelKey:"clinical.hospitalization.filterStable"},{value:"Recuperaci\xF3n",labelKey:"clinical.hospitalization.filterRecovery"}];consultPage=1;get filteredPatients(){let a=this.patientSearch.toLowerCase();return this.store.patients().filter(e=>(a===""||e.name.toLowerCase().includes(a)||e.owner.toLowerCase().includes(a)||e.id.includes(a))&&(this.speciesFilter==="Todas"||e.species===this.speciesFilter))}get filteredClients(){let a=this.clientSearch.toLowerCase();return this.store.rawClientes().filter(e=>a===""||e.nombre?.toLowerCase().includes(a)||e.dni?.includes(a)||e.email?.toLowerCase().includes(a))}get filteredConsultations(){let a=new Date().toISOString().split("T")[0],e=new Date(Date.now()-7*864e5).toISOString().split("T")[0];return this.store.consultations().filter(i=>this.consultDateFilter==="today"?i.rawDate===a:this.consultDateFilter==="week"?i.rawDate>=e:!0)}get consultTotalPages(){return Math.max(1,Math.ceil(this.filteredConsultations.length/xt))}get pagedConsultations(){let a=(this.consultPage-1)*xt;return this.filteredConsultations.slice(a,a+xt)}get consultPageNumbers(){return Array.from({length:this.consultTotalPages},(a,e)=>e+1)}setConsultFilter(a){this.consultDateFilter=a,this.consultPage=1}get filteredVaccines(){return this.vaccineFilter==="Pr\xF3ximas"?this.store.vaccines().filter(a=>a.status==="Pr\xF3xima"):this.vaccineFilter==="Vencidas"?this.store.vaccines().filter(a=>a.status==="Vencida"):this.store.vaccines()}get vaccineSummary(){let a=this.store.vaccines();return[{labelKey:"clinical.vaccines.summaryExpired",sublabelKey:"clinical.vaccines.summaryExpiredSub",value:a.filter(e=>e.status==="Vencida").length,color:"#EF4444",bg:"#FEF2F2",icon:"error"},{labelKey:"clinical.vaccines.summaryUpcoming",sublabelKey:"clinical.vaccines.summaryUpcomingSub",value:a.filter(e=>e.status==="Pr\xF3xima").length,color:"#F59E0B",bg:"#FFFBEB",icon:"schedule"},{labelKey:"clinical.vaccines.summaryUpToDate",sublabelKey:"clinical.vaccines.summaryUpToDateSub",value:a.filter(e=>e.status==="Al D\xEDa").length,color:"#22C55E",bg:"#F0FDF4",icon:"check_circle"}]}get filteredHospitalizations(){return this.hospitalizationFilter==="Todos"?this.store.hospitalizations():this.store.hospitalizations().filter(a=>a.status===this.hospitalizationFilter)}getHospCount(a){return a==="Todos"?this.store.hospitalizations().length:this.store.hospitalizations().filter(e=>e.status===a).length}get hospitalStats(){let a=this.store.hospitalizations();return[{labelKey:"clinical.hospitalization.statTotal",sublabelKey:"clinical.hospitalization.statTotalSub",value:a.length,icon:"local_hospital",color:"#3B82F6",bg:"#EFF6FF"},{labelKey:"clinical.hospitalization.statCritical",sublabelKey:"clinical.hospitalization.statCriticalSub",value:a.filter(e=>e.status==="Cr\xEDtico").length,icon:"favorite",color:"#EF4444",bg:"#FEF2F2"},{labelKey:"clinical.hospitalization.statRecovery",sublabelKey:"clinical.hospitalization.statRecoverySub",value:a.filter(e=>e.status==="Recuperaci\xF3n").length,icon:"person",color:"#F59E0B",bg:"#FFFBEB"}]}get selectedConsultations(){let a=this.store.selectedPatient();return a?this.store.consultations().filter(e=>e.mascotaId===a.id):[]}get historyPatient(){let a=this.store.selectedPatient();if(!a)return null;let e=this.selectedConsultations;return{name:a.name,breed:a.breed,age:a.age,owner:a.owner,avatarColor:a.avatarColor,stats:[{labelKey:"clinical.history.statTotalConsults",value:String(e.length)},{labelKey:"clinical.history.statVaccinesApplied",value:String(this.store.vaccines().filter(i=>i.mascotaId===a.id).length)},{labelKey:"clinical.history.statHospitalizations",value:String(this.store.hospitalizations().filter(i=>i.mascotaId===a.id).length)},{labelKey:"clinical.history.statLastVisit",value:e.length>0?e[0].date:"\u2014"}]}}get historyRecords(){return this.selectedConsultations.map(a=>({consultaId:a.id,type:a.type,date:a.date,doctor:a.veterinario??"Veterinario",color:a.cerrada?"#64748B":"#22C55E",bg:a.cerrada?"#F1F5F9":"#F0FDF4",borderColor:a.cerrada?"#94A3B8":"#22C55E",icon:a.cerrada?"lock":"medical_services",temperatura:a.temperatura,cerrada:a.cerrada,sections:[...a.subjetivo?[{label:"Subjetivo (S)",type:"text",content:a.subjetivo}]:[],...a.objetivo?[{label:"Objetivo (O)",type:"text",content:a.objetivo}]:[],...a.diagnosis?[{label:"Evaluaci\xF3n (A)",type:"text",content:a.diagnosis}]:[],...a.plan?[{label:"Plan (P)",type:"text",content:a.plan}]:[]]}))}getConsultBadge(a){return{Completada:"badge-completada","En Proceso":"badge-en-proceso",Cr\u00EDtico:"badge-critico",Pendiente:"badge-pendiente"}[a]??""}getVaccineBadge(a){return{"Al D\xEDa":"badge-al-dia",Pr\u00F3xima:"badge-proxima",Vencida:"badge-vencida"}[a]??""}getHospBadge(a){return{Cr\u00EDtico:"badge-critico",Estable:"badge-estable",Recuperaci\u00F3n:"badge-recuperacion"}[a]??""}verFicha(a){this.store.selectPatient(a),this.activeTab=3}openNuevaConsulta(a){this.dialog.open(bi,{width:"640px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarPaciente(a){this.dialog.open(yi,{width:"580px",data:{patient:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openNuevaCita(a){this.dialog.open(vi,{width:"520px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarVacuna(a){this.dialog.open(Xe,{width:"560px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarIngreso(a){this.dialog.open(it,{width:"560px",data:{patientId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarCliente(){this.dialog.open(Re,{width:"500px"}).afterClosed().subscribe(a=>{a&&this.store.reload()})}openEditarCliente(a){this.dialog.open(Re,{width:"500px",data:{cliente:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}deleteCliente(a){confirm(`\xBFEliminar al cliente ${a.nombre}? Esta acci\xF3n no se puede deshacer.`)&&this.svc.deleteCliente(a.id).subscribe({next:()=>{this.snack.open("Cliente eliminado","OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open("Error al eliminar","",{duration:3e3})})}openTratamiento(a){this.dialog.open(nt,{width:"560px",data:{consultaId:a}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}deletePatient(a){let e=this.translate.instant("clinical.messages.confirmDelete",{name:a.name});confirm(e)&&this.svc.deleteMascota(a.id).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.messages.patientDeleted"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}closeConsulta(a){let e=this.translate.instant("clinical.consultations.confirmClose");confirm(e)&&this.svc.closeConsulta(a).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.consultations.closedSuccess"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}get historyAllergyAlert(){return this.store.selectedPatient()?.alergias??""}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-clinical-management"]],decls:235,vars:160,consts:[[1,"clinical"],[1,"admin-readonly-banner"],[1,"page-header"],[1,"header-search"],[1,"search-icon"],[1,"header-search-input",3,"placeholder"],[1,"notif-icon"],["animationDuration","0ms",1,"clinical-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"tab-content"],[1,"section-header"],["mat-raised-button","",1,"btn-primary"],[1,"filters-row"],[1,"search-wrap"],[1,"filter-input",3,"ngModelChange","ngModel","placeholder"],[1,"species-wrap"],[1,"species-select",3,"valueChange","value"],["value","Todas"],["value","Perro"],["value","Gato"],["value","Ave"],[1,"loading-msg"],[1,"patients-grid"],[1,"card","table-card"],[1,"table-top"],[1,"table-actions"],["mat-stroked-button","",1,"btn-sm",3,"click"],[1,"data-table"],[3,"row-closed"],[1,"table-footer"],[1,"pagination"],["mat-icon-button","",3,"click","disabled"],[1,"pg-btn",3,"active"],[1,"empty-tab"],[1,"chips-row"],[1,"chip",3,"chip-active"],[1,"vsummary-grid"],[1,"vsummary",3,"background"],[1,"hosp-stats-row"],[1,"hosp-stat-card"],[1,"table-title"],["mat-stroked-button","","routerLink","/admin"],[1,"tab-icon"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"patient-card"],[1,"empty-msg"],[1,"pc-top"],[1,"pc-avatar"],[1,"pc-title"],[1,"pc-name"],[1,"pc-id"],[1,"badge","badge-activo"],[1,"pc-details"],[1,"pc-row"],[1,"pc-allergy-alert"],[1,"pc-actions"],["mat-button","",1,"btn-ver-ficha",3,"click"],["mat-icon-button","","title","Editar",3,"click"],["mat-icon-button","","title","Eliminar",3,"click"],[1,"td-patient"],[1,"td-avatar",2,"background","#6366F1"],[1,"td-name"],[1,"td-actions"],[2,"color","#EF4444"],["colspan","6",1,"empty-msg"],[1,"td-id"],[1,"td-avatar"],[1,"td-sub"],[1,"badge","badge-cancelada"],[1,"badge",3,"ngClass"],["mat-icon-button","",3,"title"],[2,"color","#94A3B8","font-size","20px"],["mat-icon-button","",3,"click","title"],[2,"color","#64748B"],["colspan","7",1,"empty-msg"],[1,"pg-btn",3,"click"],["mat-stroked-button","",3,"click"],[1,"history-header"],[1,"hist-avatar"],[1,"hist-info"],[1,"hist-actions"],["mat-icon-button",""],[1,"allergy-banner"],[1,"no-allergy-banner"],[1,"hist-stats"],[1,"hist-stat"],[1,"hist-section-title"],[1,"timeline"],[1,"hs-val"],[1,"hs-lbl"],[1,"tl-card",3,"border-left"],[1,"tl-card"],[1,"tl-header"],[1,"tl-type"],[1,"tl-temp"],[1,"tl-date"],[1,"tl-doc"],[1,"badge","badge-cancelada","tl-locked"],[1,"tl-body"],[1,"tl-section"],[1,"tl-footer"],[2,"font-size","14px"],[1,"tl-label"],[1,"tl-text"],["mat-stroked-button","",1,"btn-sm-tratamiento",3,"click"],[1,"chip",3,"click"],[1,"vsummary"],[1,"vs-icon"],[1,"vs-val"],[1,"vs-label"],[1,"vs-sub"],["mat-button","",1,"action-link"],["mat-button","",1,"action-link",3,"click"],[1,"hosp-stat-label"],[1,"hosp-stat-val"],[1,"hosp-stat-sub"],[1,"hosp-stat-icon"],[1,"treat-list"],["mat-icon-button","","title","Ver ficha",3,"click"],["mat-icon-button","","title","Editar ingreso"],["mat-icon-button","","title","Editar ingreso",3,"click"]],template:function(e,i){e&1&&(o(0,"div",0),g(1,ca,9,0,"div",1),o(2,"div",2)(3,"div")(4,"h1"),r(5),m(6,"translate"),n(),o(7,"p"),r(8),m(9,"translate"),n()(),o(10,"div",3)(11,"mat-icon",4),r(12,"search"),n(),y(13,"input",5),m(14,"translate"),o(15,"mat-icon",6),r(16,"notifications"),n()()(),o(17,"mat-tab-group",7),Te("selectedIndexChange",function(c){return ke(i.activeTab,c)||(i.activeTab=c),c}),o(18,"mat-tab"),D(19,sa,4,3,"ng-template",8),o(20,"div",9)(21,"div",10)(22,"div")(23,"h2"),r(24),m(25,"translate"),n(),o(26,"p"),r(27),m(28,"translate"),n()(),g(29,ma,5,3,"button",11),n(),o(30,"div",12)(31,"div",13)(32,"mat-icon"),r(33,"search"),n(),o(34,"input",14),m(35,"translate"),Te("ngModelChange",function(c){return ke(i.patientSearch,c)||(i.patientSearch=c),c}),n()(),o(36,"div",15)(37,"mat-select",16),Te("valueChange",function(c){return ke(i.speciesFilter,c)||(i.speciesFilter=c),c}),o(38,"mat-option",17),r(39),m(40,"translate"),n(),o(41,"mat-option",18),r(42),m(43,"translate"),n(),o(44,"mat-option",19),r(45),m(46,"translate"),n(),o(47,"mat-option",20),r(48),m(49,"translate"),n()()()(),g(50,pa,3,3,"div",21)(51,_a,4,1,"div",22),n()(),o(52,"mat-tab"),D(53,xa,4,3,"ng-template",8),o(54,"div",9)(55,"div",10)(56,"div")(57,"h2"),r(58),m(59,"translate"),n(),o(60,"p"),r(61),m(62,"translate"),n()(),g(63,ba,5,3,"button",11),n(),o(64,"div",12)(65,"div",13)(66,"mat-icon"),r(67,"search"),n(),o(68,"input",14),m(69,"translate"),Te("ngModelChange",function(c){return ke(i.clientSearch,c)||(i.clientSearch=c),c}),n()()(),g(70,va,3,3,"div",21)(71,Sa,25,16,"div",23),n()(),o(72,"mat-tab"),D(73,Ea,4,3,"ng-template",8),o(74,"div",9)(75,"div",10)(76,"div")(77,"h2"),r(78),m(79,"translate"),n(),o(80,"p"),r(81),m(82,"translate"),n()(),g(83,wa,5,3,"button",11),n(),o(84,"div",23)(85,"div",24)(86,"h3"),r(87),m(88,"translate"),n(),o(89,"div",25)(90,"button",26),x("click",function(){return i.setConsultFilter("all")}),r(91),m(92,"translate"),n(),o(93,"button",26),x("click",function(){return i.setConsultFilter("today")}),r(94),m(95,"translate"),n(),o(96,"button",26),x("click",function(){return i.setConsultFilter("week")}),r(97),m(98,"translate"),n()()(),o(99,"table",27)(100,"thead")(101,"tr")(102,"th"),r(103),m(104,"translate"),n(),o(105,"th"),r(106),m(107,"translate"),n(),o(108,"th"),r(109),m(110,"translate"),n(),o(111,"th"),r(112),m(113,"translate"),n(),o(114,"th"),r(115),m(116,"translate"),n(),o(117,"th"),r(118),m(119,"translate"),n(),o(120,"th"),r(121),m(122,"translate"),n(),o(123,"th"),r(124),m(125,"translate"),n()()(),o(126,"tbody"),w(127,Pa,35,16,"tr",28,ze,!1,Da,4,3,"tr"),n()(),o(130,"div",29)(131,"span"),r(132),m(133,"translate"),n(),o(134,"div",30)(135,"button",31),x("click",function(){return i.consultPage=i.consultPage-1}),o(136,"mat-icon"),r(137,"chevron_left"),n()(),w(138,Aa,2,3,"button",32,Ee),o(140,"button",31),x("click",function(){return i.consultPage=i.consultPage+1}),o(141,"mat-icon"),r(142,"chevron_right"),n()()()()()()(),o(143,"mat-tab"),D(144,Ra,4,3,"ng-template",8),o(145,"div",9),g(146,za,12,9,"div",33)(147,Qa,25,15),n()(),o(148,"mat-tab"),D(149,Ua,4,3,"ng-template",8),o(150,"div",9)(151,"div",10)(152,"div",34),w(153,Ya,3,5,"button",35,$i),n(),g(155,Xa,5,3,"button",11),n(),o(156,"div",36),w(157,Za,11,16,"div",37,bt),n(),o(159,"div",23)(160,"table",27)(161,"thead")(162,"tr")(163,"th"),r(164),m(165,"translate"),n(),o(166,"th"),r(167),m(168,"translate"),n(),o(169,"th"),r(170),m(171,"translate"),n(),o(172,"th"),r(173),m(174,"translate"),n(),o(175,"th"),r(176),m(177,"translate"),n(),o(178,"th"),r(179),m(180,"translate"),n()()(),o(181,"tbody"),w(182,no,25,13,"tr",null,ze,!1,ao,4,3,"tr"),n()()()()(),o(185,"mat-tab"),D(186,oo,4,3,"ng-template",8),o(187,"div",9)(188,"div",10)(189,"div")(190,"h2"),r(191),m(192,"translate"),n(),o(193,"p"),r(194),m(195,"translate"),n()(),g(196,lo,5,3,"button",11),n(),o(197,"div",38),w(198,ro,13,14,"div",39,bt),n(),o(200,"div",34),w(201,co,3,6,"button",35,$i),n(),o(203,"div",23)(204,"h3",40),r(205),m(206,"translate"),n(),o(207,"table",27)(208,"thead")(209,"tr")(210,"th"),r(211),m(212,"translate"),n(),o(213,"th"),r(214),m(215,"translate"),n(),o(216,"th"),r(217),m(218,"translate"),n(),o(219,"th"),r(220),m(221,"translate"),n(),o(222,"th"),r(223),m(224,"translate"),n(),o(225,"th"),r(226),m(227,"translate"),n(),o(228,"th"),r(229),m(230,"translate"),n()()(),o(231,"tbody"),w(232,po,36,13,"tr",null,ze,!1,fo,4,3,"tr"),n()()()()()()()),e&2&&(l(),_(i.isAdmin()?1:-1),l(4),s(p(6,68,"clinical.title")),l(3),s(p(9,70,"clinical.subtitle")),l(5),b("placeholder",p(14,72,"clinical.search.placeholder")),l(4),Ie("selectedIndex",i.activeTab),l(7),s(p(25,74,"clinical.patients.title")),l(3),s(p(28,76,"clinical.patients.subtitle")),l(2),_(i.isAdmin()?-1:29),l(5),Ie("ngModel",i.patientSearch),b("placeholder",p(35,78,"clinical.patients.search")),l(3),Ie("value",i.speciesFilter),l(2),s(p(40,80,"clinical.patients.filterAll")),l(3),s(p(43,82,"clinical.patients.filterDog")),l(3),s(p(46,84,"clinical.patients.filterCat")),l(3),s(p(49,86,"clinical.patients.filterBird")),l(2),_(i.store.loading()?50:51),l(8),s(p(59,88,"clinical.clients.title")),l(3),s(p(62,90,"clinical.clients.subtitle")),l(2),_(i.isAdmin()?-1:63),l(5),Ie("ngModel",i.clientSearch),b("placeholder",p(69,92,"clinical.clients.search")),l(2),_(i.store.loading()?70:71),l(8),s(p(79,94,"clinical.consultations.title")),l(3),s(p(82,96,"clinical.consultations.subtitle")),l(2),_(i.isAdmin()?-1:83),l(4),s(p(88,98,"clinical.consultations.recent")),l(3),I("btn-sm-active",i.consultDateFilter==="all"),l(),s(p(92,100,"clinical.consultations.filterAll")),l(2),I("btn-sm-active",i.consultDateFilter==="today"),l(),s(p(95,102,"clinical.consultations.filterToday")),l(2),I("btn-sm-active",i.consultDateFilter==="week"),l(),s(p(98,104,"clinical.consultations.filterWeek")),l(6),s(p(104,106,"clinical.consultations.colId")),l(3),s(p(107,108,"clinical.consultations.colPatient")),l(3),s(p(110,110,"clinical.consultations.colClient")),l(3),s(p(113,112,"clinical.consultations.colType")),l(3),s(p(116,114,"clinical.consultations.colDiagnosis")),l(3),s(p(119,116,"clinical.consultations.colDate")),l(3),s(p(122,118,"clinical.consultations.colStatus")),l(3),s(p(125,120,"clinical.consultations.colActions")),l(3),F(i.pagedConsultations),l(5),s(Bt(133,122,"clinical.consultations.showing",zt(157,la,i.pagedConsultations.length,i.filteredConsultations.length))),l(3),b("disabled",i.consultPage<=1),l(3),F(i.consultPageNumbers),l(2),b("disabled",i.consultPage>=i.consultTotalPages),l(6),_(i.historyPatient?147:146),l(7),F(i.vaccineFilters),l(2),_(i.isAdmin()?-1:155),l(2),F(i.vaccineSummary),l(7),s(p(165,125,"clinical.vaccines.colPatient")),l(3),s(p(168,127,"clinical.vaccines.colVaccine")),l(3),s(p(171,129,"clinical.vaccines.colLastApplied")),l(3),s(p(174,131,"clinical.vaccines.colNextDose")),l(3),s(p(177,133,"clinical.vaccines.colStatus")),l(3),s(p(180,135,"clinical.vaccines.colActions")),l(3),F(i.filteredVaccines),l(9),s(p(192,137,"clinical.hospitalization.title")),l(3),s(p(195,139,"clinical.hospitalization.subtitle")),l(2),_(i.isAdmin()?-1:196),l(2),F(i.hospitalStats),l(3),F(i.hospFilters),l(4),s(p(206,141,"clinical.hospitalization.list")),l(6),s(p(212,143,"clinical.hospitalization.colPatient")),l(3),s(p(215,145,"clinical.hospitalization.colOwner")),l(3),s(p(218,147,"clinical.hospitalization.colStatus")),l(3),s(p(221,149,"clinical.hospitalization.colAdmissionDate")),l(3),s(p(224,151,"clinical.hospitalization.colDiagnosis")),l(3),s(p(227,153,"clinical.hospitalization.colTreatment")),l(3),s(p(230,155,"clinical.hospitalization.colActions")),l(3),F(i.filteredHospitalizations))},dependencies:[qt,jt,W,N,G,j,Ue,wi,Mi,Si,Ei,ji,Hi,Qe,pi,q,K,ci,$,$t],styles:[".clinical[_ngcontent-%COMP%]{min-height:100%}.admin-readonly-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;background:#ecfeff;border-bottom:1px solid #06B6D4;padding:10px 28px;font-size:13px;color:#0e7490;font-weight:500}.admin-readonly-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#06b6d4}.admin-readonly-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:auto}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.header-search-input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:8px 14px 8px 36px;font-size:13px;outline:none;width:260px;margin-left:-30px}.search-icon[_ngcontent-%COMP%]{font-size:18px;color:#94a3b8}.notif-icon[_ngcontent-%COMP%]{color:#64748b;cursor:pointer}.clinical-tabs[_ngcontent-%COMP%]{background:#fff}  .clinical-tabs .mat-mdc-tab{min-width:120px}  .clinical-tabs .mat-mdc-tab-header{border-bottom:1px solid #E2E8F0;padding:0 20px}  .clinical-tabs .mdc-tab--active .mdc-tab__text-label{color:#06b6d4!important}  .clinical-tabs .mdc-tab-indicator__content--underline{border-color:#06b6d4!important}.tab-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:4px;vertical-align:middle}.tab-content[_ngcontent-%COMP%]{padding:24px 28px}.empty-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;gap:12px;color:#94a3b8}.empty-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#475569;margin:0}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin:0 0 4px;color:#1e293b}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.filters-row[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.search-wrap[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 12px}.search-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8;font-size:18px}.filter-input[_ngcontent-%COMP%]{border:none;outline:none;font-size:13px;flex:1;padding:10px 0;background:transparent}.species-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 8px}.species-select[_ngcontent-%COMP%]{border:none!important}  .species-select .mat-mdc-select-trigger{padding:8px 0}.filter-icon-btn[_ngcontent-%COMP%]{color:#475569}.patients-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.patient-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 3px #0000000f;border:1px solid #F1F5F9}.pc-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.pc-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pc-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:22px;width:22px;height:22px}.pc-title[_ngcontent-%COMP%]{flex:1}.pc-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b}.pc-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.pc-details[_ngcontent-%COMP%]{margin-bottom:12px}.pc-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#475569;padding:3px 0}.pc-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#94a3b8}.pc-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#94a3b8}.pc-actions[_ngcontent-%COMP%]{display:flex;align-items:center;border-top:1px solid #F1F5F9;padding-top:10px}.btn-ver-ficha[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:13px!important;flex:1;justify-content:flex-start!important}.btn-ver-ficha[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f;overflow:hidden}.table-card[_ngcontent-%COMP%]{overflow:auto}.table-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 20px}.table-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin:0;color:#1e293b}.table-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.btn-sm[_ngcontent-%COMP%]{border-radius:6px!important;font-size:12px!important;color:#475569!important;border-color:#e2e8f0!important}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-size:12px;font-weight:600;color:#94a3b8;padding:10px 16px;background:#f8fafc;border-bottom:1px solid #E2E8F0;text-transform:uppercase;letter-spacing:.5px}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;border-bottom:1px solid #F8FAFC;font-size:13px;color:#475569;vertical-align:middle}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f8fafc}.td-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;font-family:monospace}.td-patient[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.td-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.td-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:16px;width:16px;height:16px}.td-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b}.td-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.table-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-top:1px solid #F1F5F9;font-size:12px;color:#94a3b8}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.pg-btn[_ngcontent-%COMP%]{width:28px;height:28px;border:1px solid #E2E8F0;border-radius:6px;background:#fff;font-size:12px;cursor:pointer;color:#475569}.pg-btn.active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.text-danger[_ngcontent-%COMP%]{color:#ef4444!important;font-weight:500}.action-link[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:12px!important}.td-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.vsummary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.vsummary[_ngcontent-%COMP%]{border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:4px}.vs-icon[_ngcontent-%COMP%]{font-size:24px!important;width:24px!important;height:24px!important}.vs-val[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.vs-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.vs-sub[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.chips-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}.chip[_ngcontent-%COMP%]{padding:6px 16px;border-radius:20px;border:1px solid #E2E8F0;background:#fff;font-size:13px;font-weight:500;color:#475569;cursor:pointer;transition:all .15s}.chip.chip-active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.hosp-stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.hosp-stat-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 3px #0000000f}.hosp-stat-label[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:4px}.hosp-stat-val[_ngcontent-%COMP%]{font-size:26px;font-weight:700}.hosp-stat-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.hosp-stat-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center}.hosp-stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.treat-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;font-size:12px;color:#475569}.treat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1px 0}.table-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;padding:16px 20px 0}.history-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:20px}.hist-avatar[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.hist-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px;width:30px;height:30px}.hist-info[_ngcontent-%COMP%]{flex:1}.hist-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 4px;color:#1e293b}.hist-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin:0}.hist-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.hist-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}.hist-stat[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:16px 20px;text-align:center;box-shadow:0 1px 3px #0000000f}.hs-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b}.hs-lbl[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-top:2px}.hist-section-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.tl-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px #0000000f}.tl-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px}.tl-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.tl-type[_ngcontent-%COMP%]{font-size:14px;font-weight:600;flex:1}.tl-date[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.tl-doc[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-left:8px}.tl-body[_ngcontent-%COMP%]{padding:16px}.tl-section[_ngcontent-%COMP%]{margin-bottom:14px}.tl-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.tl-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#475569;margin-bottom:6px}.tl-text[_ngcontent-%COMP%]{font-size:13px;color:#64748b;line-height:1.6;margin:0}.tl-vitals[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}.vital[_ngcontent-%COMP%]{background:#f8fafc;border-radius:6px;padding:8px 12px}.vital[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8;display:block}.vital[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;color:#1e293b}.tl-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 16px}.tl-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#64748b;padding:2px 0}.tl-temp[_ngcontent-%COMP%]{font-size:12px;color:#3b82f6;font-weight:500;background:#eff6ff;border-radius:4px;padding:2px 6px}.tl-locked[_ngcontent-%COMP%]{font-size:11px!important;padding:2px 8px!important;display:inline-flex;align-items:center;gap:2px}.allergy-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;background:#fef2f2;border:1px solid #FECACA;border-radius:10px;padding:12px 16px;margin-bottom:16px;color:#991b1b}.allergy-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#ef4444;flex-shrink:0}.allergy-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px;font-weight:600}.allergy-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.no-allergy-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#f0fdf4;border:1px solid #BBF7D0;border-radius:10px;padding:10px 14px;margin-bottom:16px;color:#166534;font-size:13px}.no-allergy-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#22c55e;font-size:18px;width:18px;height:18px}.tl-footer[_ngcontent-%COMP%]{padding-top:12px;border-top:1px solid #F1F5F9}.btn-sm-tratamiento[_ngcontent-%COMP%]{font-size:12px!important;height:30px!important;color:#06b6d4!important;border-color:#06b6d4!important;border-radius:6px!important}.btn-sm-tratamiento[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px!important;width:16px!important;height:16px!important;vertical-align:middle}.pc-allergy-alert[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;background:#fef2f2;border-radius:6px;padding:5px 8px;margin-top:6px;color:#991b1b;font-size:12px;font-weight:500}.pc-allergy-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;color:#ef4444}.row-closed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{opacity:.7}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:center}"]})};export{Qi as ClinicalManagement};
