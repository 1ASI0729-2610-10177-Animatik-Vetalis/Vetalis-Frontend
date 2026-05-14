import{a as Wt,b as Ut,c as Yt,d as qe,e as Xt,f as Zt,g as it,h as Jt}from"./chunk-PIYSA4H3.js";import{a as mi,b as fi}from"./chunk-D3IHYPOW.js";import{a as $,b as pi}from"./chunk-XJLDR5UX.js";import{a as Q}from"./chunk-7RQNJQZR.js";import{a as ui,b as hi,c as gi,d as _i,e as xi}from"./chunk-OKDPTSKM.js";import{a as ne,b as He,c as oi,d as ae,e as le,f as oe,g as re,h as G}from"./chunk-A32WGX7H.js";import{A as Y,B as de,C as di,D as si,E as se,G as ce,H as X,I as Ke,J as je,K as Ge,M as me,N as ci,O as pe,P as Z,b as ti,c as ii,k as ni,p as ai,r as nt,s as at,t as li,w as U,y as O,z as ri}from"./chunk-W5W7ZK3Z.js";import{a as ei,b as K,c as j}from"./chunk-3SHTTZTA.js";import{A as Ve,C as Ht,I as Kt,L as jt,N as We,O as Gt,Q as we,R as Qt,S as tt,Y as $t,d as Bt,e as Lt,n as Nt,o as Vt,s as Le,t as Ne,u as q,v as H,w as qt}from"./chunk-R4XDQR5T.js";import{$b as b,Ab as l,Bb as i,Bc as W,Cb as x,Cc as et,Db as Mt,Dc as At,E as xt,Eb as Et,Fb as Ze,Gb as B,Hb as wt,J as bt,Kb as g,Lb as h,Mb as be,N as ge,Nb as D,O as Xe,Ob as Re,P as N,Pb as ve,Qa as o,Qb as C,Rb as S,Sb as Ft,Tb as Ot,Ub as Je,Vb as ye,W as Ie,Wb as F,Xb as w,Y as A,Ya as Te,Yb as It,Zb as r,_ as f,_b as c,ac as V,cc as kt,d as gt,da as P,db as R,dc as Ce,ea as T,eb as De,ec as Se,fa as vt,fb as ee,fc as Me,g as L,ga as yt,ic as ze,jb as z,ka as ke,kc as Pt,la as _e,mc as m,nc as p,oc as Tt,pa as Pe,pc as Dt,q as ue,sa as Ct,sb as te,ta as St,tb as v,tc as Ae,ub as y,v as _t,vc as Rt,wa as J,wb as xe,xb as M,xc as Ee,y as ie,yb as E,yc as zt,z as he,zb as _,zc as Be}from"./chunk-BO3SDI77.js";var Fe=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L;constructor(n=!1,e,t=!0,d){this._multiple=n,this._emitChanges=t,this.compareWith=d,e&&e.length&&(n?e.forEach(s=>this._markSelected(s)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(s=>this._getConcreteValue(s)));n.forEach(s=>this._markSelected(s)),e.filter(s=>!t.has(this._getConcreteValue(s,t))).forEach(s=>this._unmarkSelected(s));let d=this._hasQueuedChanges();return this._emitChangeEvent(),d}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var $i=["notch"],Ui=["matFormFieldNotchedOutline",""],Yi=["*"],bi=["iconPrefixContainer"],vi=["textPrefixContainer"],yi=["iconSuffixContainer"],Ci=["textSuffixContainer"],Xi=["textField"],Zi=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Ji=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function en(a,n){a&1&&x(0,"span",21)}function tn(a,n){if(a&1&&(l(0,"label",20),D(1,1),v(2,en,1,0,"span",21),i()),a&2){let e=h(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),te("for",e._control.disableAutomaticLabeling?null:e._control.id),o(2),y(!e.hideRequiredMarker&&e._control.required?2:-1)}}function nn(a,n){if(a&1&&v(0,tn,3,5,"label",20),a&2){let e=h();y(e._hasFloatingLabel()?0:-1)}}function an(a,n){a&1&&x(0,"div",7)}function ln(a,n){}function on(a,n){if(a&1&&z(0,ln,0,0,"ng-template",13),a&2){h(2);let e=ye(1);_("ngTemplateOutlet",e)}}function rn(a,n){if(a&1&&(l(0,"div",9),v(1,on,1,1,null,13),i()),a&2){let e=h();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),o(),y(e._forceDisplayInfixLabel()?-1:1)}}function dn(a,n){a&1&&(l(0,"div",10,2),D(2,2),i())}function sn(a,n){a&1&&(l(0,"div",11,3),D(2,3),i())}function cn(a,n){}function mn(a,n){if(a&1&&z(0,cn,0,0,"ng-template",13),a&2){h();let e=ye(1);_("ngTemplateOutlet",e)}}function pn(a,n){a&1&&(l(0,"div",14,4),D(2,4),i())}function fn(a,n){a&1&&(l(0,"div",15,5),D(2,5),i())}function un(a,n){a&1&&x(0,"div",16)}function hn(a,n){a&1&&(l(0,"div",18),D(1,6),i())}function gn(a,n){if(a&1&&(l(0,"mat-hint",22),r(1),i()),a&2){let e=h(2);_("id",e._hintLabelId),o(),c(e.hintLabel)}}function _n(a,n){if(a&1&&(l(0,"div",19),v(1,gn,2,2,"mat-hint",22),D(2,7),x(3,"div",23),D(4,8),i()),a&2){let e=h();o(),y(e.hintLabel?1:-1)}}var lt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=ee({type:a,selectors:[["mat-label"]]})}return a})(),xn=new A("MatError");var ot=(()=>{class a{align="start";id=f(we).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||a)};static \u0275dir=ee({type:a,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,d){t&2&&(wt("id",d.id),te("align",null),w("mat-mdc-form-field-hint-end",d.align==="end"))},inputs:{align:"align",id:"id"}})}return a})(),bn=new A("MatPrefix");var vn=new A("MatSuffix");var Ii=new A("FloatingLabelParent"),Si=(()=>{class a{_elementRef=f(J);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=f(ui);_ngZone=f(_e);_parent=f(Ii);_resizeSubscription=new gt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return yn(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=ee({type:a,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,d){t&2&&w("mdc-floating-label--float-above",d.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return a})();function yn(a){let n=a;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Mi="mdc-line-ripple--active",Qe="mdc-line-ripple--deactivating",Ei=(()=>{class a{_elementRef=f(J);_cleanupTransitionEnd;constructor(){let e=f(_e),t=f(Te);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Qe),e.add(Mi)}deactivate(){this._elementRef.nativeElement.classList.add(Qe)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,d=t.contains(Qe);e.propertyName==="opacity"&&d&&t.remove(Mi,Qe)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=ee({type:a,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return a})(),wi=(()=>{class a{_elementRef=f(J);_ngZone=f(_e);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,d){if(t&1&&ve($i,5),t&2){let s;C(s=S())&&(d._notch=s.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,d){t&2&&w("mdc-notched-outline--notched",d.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ui,ngContentSelectors:Yi,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,d){t&1&&(be(),Ze(0,"div",1),Mt(1,"div",2,0),D(3),Et(),Ze(4,"div",3))},encapsulation:2,changeDetection:0})}return a})(),rt=(()=>{class a{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||a)};static \u0275dir=ee({type:a})}return a})();var dt=new A("MatFormField"),Cn=new A("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Fi="fill",Sn="auto",Oi="fixed",Mn="translateY(-50%)",ki=(()=>{class a{_elementRef=f(J);_changeDetectorRef=f(Be);_platform=f(qt);_idGenerator=f(we);_ngZone=f(_e);_defaults=f(Cn,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ee("iconPrefixContainer");_textPrefixContainerSignal=Ee("textPrefixContainer");_iconSuffixContainerSignal=Ee("iconSuffixContainer");_textSuffixContainerSignal=Ee("textSuffixContainer");_prefixSuffixContainers=Ae(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=zt(lt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=$t(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Sn}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Fi;this._appearanceSignal.set(t)}_appearanceSignal=Pe(Fi);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Oi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Oi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new L;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ve();constructor(){let e=this._defaults,t=f(Le);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ct(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ae(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,d="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(d+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(d+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ge([void 0,void 0]),ue(()=>[t.errorState,t.userAriaDescribedBy]),bt(),he(([[s,u],[I,k]])=>s!==I||u!==k)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(N(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ie(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){At({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ae(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let s=this._hintChildren?this._hintChildren.find(I=>I.align==="start"):null,u=this._hintChildren?this._hintChildren.find(I=>I.align==="end"):null;s?e.push(s.id):this._hintLabel&&e.push(this._hintLabelId),u&&e.push(u.id)}else this._errorChildren&&e.push(...this._errorChildren.map(s=>s.id));let t=this._control.describedByIds,d;if(t){let s=this._describedByIds||e;d=e.concat(t.filter(u=>u&&!s.includes(u)))}else d=e;this._control.setDescribedByIds(d),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,d=this._iconSuffixContainer?.nativeElement,s=this._textSuffixContainer?.nativeElement,u=e?.getBoundingClientRect().width??0,I=t?.getBoundingClientRect().width??0,k=d?.getBoundingClientRect().width??0,qi=s?.getBoundingClientRect().width??0,Hi=this._currentDirection==="rtl"?"-1":"1",Ki=`${u+I}px`,ji=`calc(${Hi} * (${Ki} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Gi=`var(--mat-mdc-form-field-label-transform, ${Mn} translateX(${ji}))`,Qi=u+I+k+qi;return[Gi,Qi]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,d]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),d!==null&&this._notchedOutline?._setMaxWidth(d)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["mat-form-field"]],contentQueries:function(t,d,s){if(t&1&&(Ft(s,d._labelChild,lt,5),Re(s,rt,5)(s,bn,5)(s,vn,5)(s,xn,5)(s,ot,5)),t&2){Je();let u;C(u=S())&&(d._formFieldControl=u.first),C(u=S())&&(d._prefixChildren=u),C(u=S())&&(d._suffixChildren=u),C(u=S())&&(d._errorChildren=u),C(u=S())&&(d._hintChildren=u)}},viewQuery:function(t,d){if(t&1&&(Ot(d._iconPrefixContainerSignal,bi,5)(d._textPrefixContainerSignal,vi,5)(d._iconSuffixContainerSignal,yi,5)(d._textSuffixContainerSignal,Ci,5),ve(Xi,5)(bi,5)(vi,5)(yi,5)(Ci,5)(Si,5)(wi,5)(Ei,5)),t&2){Je(4);let s;C(s=S())&&(d._textField=s.first),C(s=S())&&(d._iconPrefixContainer=s.first),C(s=S())&&(d._textPrefixContainer=s.first),C(s=S())&&(d._iconSuffixContainer=s.first),C(s=S())&&(d._textSuffixContainer=s.first),C(s=S())&&(d._floatingLabel=s.first),C(s=S())&&(d._notchedOutline=s.first),C(s=S())&&(d._lineRipple=s.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,d){t&2&&w("mat-mdc-form-field-label-always-float",d._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",d._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",d._hasIconSuffix)("mat-form-field-invalid",d._control.errorState)("mat-form-field-disabled",d._control.disabled)("mat-form-field-autofilled",d._control.autofilled)("mat-form-field-appearance-fill",d.appearance=="fill")("mat-form-field-appearance-outline",d.appearance=="outline")("mat-form-field-hide-placeholder",d._hasFloatingLabel()&&!d._shouldLabelFloat())("mat-primary",d.color!=="accent"&&d.color!=="warn")("mat-accent",d.color==="accent")("mat-warn",d.color==="warn")("ng-untouched",d._shouldForward("untouched"))("ng-touched",d._shouldForward("touched"))("ng-pristine",d._shouldForward("pristine"))("ng-dirty",d._shouldForward("dirty"))("ng-valid",d._shouldForward("valid"))("ng-invalid",d._shouldForward("invalid"))("ng-pending",d._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ze([{provide:dt,useExisting:a},{provide:Ii,useExisting:a}])],ngContentSelectors:Ji,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,d){if(t&1&&(be(Zi),z(0,nn,1,1,"ng-template",null,0,Dt),l(2,"div",6,1),g("click",function(u){return d._control.onContainerClick(u)}),v(4,an,1,0,"div",7),l(5,"div",8),v(6,rn,2,2,"div",9),v(7,dn,3,0,"div",10),v(8,sn,3,0,"div",11),l(9,"div",12),v(10,mn,1,1,null,13),D(11),i(),v(12,pn,3,0,"div",14),v(13,fn,3,0,"div",15),i(),v(14,un,1,0,"div",16),i(),l(15,"div",17),v(16,hn,2,0,"div",18)(17,_n,5,1,"div",19),i()),t&2){let s;o(2),w("mdc-text-field--filled",!d._hasOutline())("mdc-text-field--outlined",d._hasOutline())("mdc-text-field--no-label",!d._hasFloatingLabel())("mdc-text-field--disabled",d._control.disabled)("mdc-text-field--invalid",d._control.errorState),o(2),y(!d._hasOutline()&&!d._control.disabled?4:-1),o(2),y(d._hasOutline()?6:-1),o(),y(d._hasIconPrefix?7:-1),o(),y(d._hasTextPrefix?8:-1),o(2),y(!d._hasOutline()||d._forceDisplayInfixLabel()?10:-1),o(2),y(d._hasTextSuffix?12:-1),o(),y(d._hasIconSuffix?13:-1),o(),y(d._hasOutline()?-1:14),o(),w("mat-mdc-form-field-subscript-dynamic-size",d.subscriptSizing==="dynamic");let u=d._getSubscriptMessageType();o(),y((s=u)==="error"?16:s==="hint"?17:-1)}},dependencies:[Si,wi,Lt,Ei,ot],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return a})();var Pi=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=De({type:a});static \u0275inj=Ie({imports:[Kt,ki,Ne]})}return a})();var In=["trigger"],kn=["panel"],Pn=[[["mat-select-trigger"]],"*"],Tn=["mat-select-trigger","*"];function Dn(a,n){if(a&1&&(l(0,"span",4),r(1),i()),a&2){let e=h();o(),c(e.placeholder)}}function Rn(a,n){a&1&&D(0)}function zn(a,n){if(a&1&&(l(0,"span",11),r(1),i()),a&2){let e=h(2);o(),c(e.triggerValue)}}function An(a,n){if(a&1&&(l(0,"span",5),v(1,Rn,1,0)(2,zn,2,1,"span",11),i()),a&2){let e=h();o(),y(e.customTrigger?1:2)}}function Bn(a,n){if(a&1){let e=B();l(0,"div",12,1),g("keydown",function(d){P(e);let s=h();return T(s._handleKeydown(d))}),D(2,1),i()}if(a&2){let e=h();It(e.panelClass),w("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),te("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ln=new A("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=f(yt);return()=>ni(a)}}),Nn=new A("MAT_SELECT_CONFIG"),Vn=new A("MatSelectTrigger"),st=class{source;value;constructor(n,e){this.source=n,this.value=e}},Ai=(()=>{class a{_viewportRuler=f(ti);_changeDetectorRef=f(Be);_elementRef=f(J);_dir=f(Le,{optional:!0});_idGenerator=f(we);_renderer=f(Te);_parentFormField=f(dt,{optional:!0});ngControl=f(ri,{self:!0,optional:!0});_liveAnnouncer=f(jt);_defaultOptions=f(Nn,{optional:!0});_animationsDisabled=Ve();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let d=this.panel.nativeElement,s=Xt(e,this.options,this.optionGroups),u=t._getHostElement();e===0&&s===1?d.scrollTop=0:d.scrollTop=Zt(u.offsetTop,u.offsetHeight,d.scrollTop,d.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new st(this,e)}_scrollStrategyFactory=f(Ln);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Pe(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(O.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=_t(()=>{let e=this.options;return e?e.changes.pipe(ge(e),Xe(()=>ie(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Xe(()=>this.optionSelectionChanges))});openedChange=new ke;_openedStream=this.openedChange.pipe(he(e=>e),ue(()=>{}));_closedStream=this.openedChange.pipe(he(e=>!e),ue(()=>{}));selectionChange=new ke;valueChange=new ke;constructor(){let e=f(Wt),t=f(di,{optional:!0}),d=f(X,{optional:!0}),s=f(new Rt("tabindex"),{optional:!0}),u=f(ai,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Jt(e,this.ngControl,d,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=s==null?0:parseInt(s)||0,this._popoverLocation=u?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Fe(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(N(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(N(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ge(null),N(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let d=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?d.setAttribute("aria-labelledby",e):d.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(xt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&tt(this._trackedModal,"aria-owns",t),Qt(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;tt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(d),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",s=>{s.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),d=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,d=t===40||t===38||t===37||t===39,s=t===13||t===32,u=this._keyManager;if(!u.isTyping()&&s&&!We(e)||(this.multiple||e.altKey)&&d)e.preventDefault(),this.open();else if(!this.multiple){let I=this.selected;u.onKeydown(e);let k=this.selected;k&&I!==k&&this._liveAnnouncer.announce(k.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,d=e.keyCode,s=d===40||d===38,u=t.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(!u&&(d===13||d===32)&&t.activeItem&&!We(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!u&&this._multiple&&d===65&&e.ctrlKey){e.preventDefault();let I=this.options.some(k=>!k.disabled&&!k.selected);this.options.forEach(k=>{k.disabled||(I?k.select():k.deselect())})}else{let I=t.activeItemIndex;t.onKeydown(e),this._multiple&&s&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==I&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!We(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(d=>{if(this._selectionModel.isSelected(d))return!1;try{return(d.value!=null||this.canSelectNullableOptions)&&this._compareWith(d.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof nt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Gt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ie(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(N(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ie(...this.options.map(t=>t._stateChanges)).pipe(N(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let d=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(d!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),d!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,d)=>this.sortComparator?this.sortComparator(t,d,e):e.indexOf(t)-e.indexOf(d)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(d=>d.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ht(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["mat-select"]],contentQueries:function(t,d,s){if(t&1&&Re(s,Vn,5)(s,qe,5)(s,Yt,5),t&2){let u;C(u=S())&&(d.customTrigger=u.first),C(u=S())&&(d.options=u),C(u=S())&&(d.optionGroups=u)}},viewQuery:function(t,d){if(t&1&&ve(In,5)(kn,5)(at,5),t&2){let s;C(s=S())&&(d.trigger=s.first),C(s=S())&&(d.panel=s.first),C(s=S())&&(d._overlayDir=s.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,d){t&1&&g("keydown",function(u){return d._handleKeydown(u)})("focus",function(){return d._onFocus()})("blur",function(){return d._onBlur()}),t&2&&(te("id",d.id)("tabindex",d.disabled?-1:d.tabIndex)("aria-controls",d.panelOpen?d.id+"-panel":null)("aria-expanded",d.panelOpen)("aria-label",d.ariaLabel||null)("aria-required",d.required.toString())("aria-disabled",d.disabled.toString())("aria-invalid",d.errorState)("aria-activedescendant",d._getAriaActiveDescendant()),w("mat-mdc-select-disabled",d.disabled)("mat-mdc-select-invalid",d.errorState)("mat-mdc-select-required",d.required)("mat-mdc-select-empty",d.empty)("mat-mdc-select-multiple",d.multiple)("mat-select-open",d.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",W],disableRipple:[2,"disableRipple","disableRipple",W],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:et(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",W],placeholder:"placeholder",required:[2,"required","required",W],multiple:[2,"multiple","multiple",W],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",W],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",et],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",W]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ze([{provide:rt,useExisting:a},{provide:Ut,useExisting:a}]),St],ngContentSelectors:Tn,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,d){if(t&1&&(be(Pn),l(0,"div",2,0),g("click",function(){return d.open()}),l(3,"div",3),v(4,Dn,2,1,"span",4)(5,An,3,1,"span",5),i(),l(6,"div",6)(7,"div",7),vt(),l(8,"svg",8),x(9,"path",9),i()()()(),z(10,Bn,3,16,"ng-template",10),g("detach",function(){return d.close()})("backdropClick",function(){return d.close()})("overlayKeydown",function(u){return d._handleOverlayKeydown(u)})),t&2){let s=ye(1);o(3),te("id",d._valueId),o(),y(d.empty?4:5),o(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",d._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",d._scrollStrategy)("cdkConnectedOverlayOrigin",d._preferredOverlayOrigin||s)("cdkConnectedOverlayPositions",d._positions)("cdkConnectedOverlayWidth",d._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",d._popoverLocation)}},dependencies:[nt,at],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return a})();var Bi=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=De({type:a});static \u0275inj=Ie({imports:[li,it,Ne,ii,Pi,it]})}return a})();var Li=(a,n)=>n.id;function qn(a,n){if(a&1&&(l(0,"option",5),r(1),i()),a&2){let e=n.$implicit;_("value",e.id),o(),V("",e.name," (",e.owner,")")}}function Hn(a,n){if(a&1&&(l(0,"option",5),r(1),i()),a&2){let e=n.$implicit;_("value",e.id),o(),c(e.nombre)}}var $e=class a{fb=f(me);ref=f(ne);svc=f(Q);snack=f(Z);store=f($);data=f(He,{optional:!0});today=new Date().toISOString().split("T")[0];form=this.fb.group({mascotaId:[this.data?.patientId??"",O.required],tipoVacunaId:["",O.required],fechaAplicacion:[this.today,O.required],proximaDosis:["",O.required],lote:[""],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e=this.store.vaccines().map(u=>parseInt(u.id?.replace("V-","")??"0",10)).filter(u=>!isNaN(u)),t=(e.length?Math.max(...e):0)+1,s={id:`V-${String(t).padStart(3,"0")}`,mascotaId:n.mascotaId,tipoVacunaId:n.tipoVacunaId,fechaAplicacion:n.fechaAplicacion,proximaDosis:n.proximaDosis,lote:n.lote,observaciones:n.observaciones,veterinarioId:1};this.svc.createVacuna(s).subscribe({next:()=>{this.snack.open("Vacuna registrada","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["app-registrar-vacuna-dialog"]],decls:44,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],["formControlName","tipoVacunaId"],[1,"dlg-row"],["type","date","formControlName","fechaAplicacion"],["type","date","formControlName","proximaDosis"],["type","text","formControlName","lote","placeholder","Ej: LOT-2025-001"],["formControlName","observaciones","placeholder","Reacciones adversas, notas..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(l(0,"h2",0),r(1,"Registrar Vacuna"),i(),l(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),r(6,"Paciente *"),i(),l(7,"select",3)(8,"option",4),r(9,"Seleccionar paciente..."),i(),M(10,qn,2,3,"option",5,Li),i()(),l(12,"div",2)(13,"label"),r(14,"Tipo de Vacuna *"),i(),l(15,"select",6)(16,"option",4),r(17,"Seleccionar vacuna..."),i(),M(18,Hn,2,2,"option",5,Li),i()(),l(20,"div",7)(21,"div",2)(22,"label"),r(23,"Fecha de Aplicaci\xF3n *"),i(),x(24,"input",8),i(),l(25,"div",2)(26,"label"),r(27,"Pr\xF3xima Dosis *"),i(),x(28,"input",9),i()(),l(29,"div",2)(30,"label"),r(31,"N\xFAmero de Lote"),i(),x(32,"input",10),i(),l(33,"div",2)(34,"label"),r(35,"Observaciones"),i(),x(36,"textarea",11),i()()(),l(37,"mat-dialog-actions",12)(38,"button",13),r(39,"Cancelar"),i(),l(40,"button",14),g("click",function(){return t.submit()}),l(41,"mat-icon"),r(42,"vaccines"),i(),r(43," Registrar Vacuna "),i()()),e&2&&(o(3),_("formGroup",t.form),o(7),E(t.store.patients()),o(8),E(t.store.rawTiposVacuna()),o(22),_("disabled",t.form.invalid||t.submitting))},dependencies:[pe,se,je,Ge,U,Ke,Y,de,X,ce,G,ae,le,re,oe,j,K,H,q],encapsulation:2})};var Kn=(a,n)=>n.id;function jn(a,n){if(a&1&&(l(0,"option",5),r(1),i()),a&2){let e=n.$implicit;_("value",e.id),o(),V("",e.name," (",e.owner,")")}}function Gn(a,n){if(a&1&&(l(0,"option",5),r(1),i()),a&2){let e=n.$implicit;_("value",e),o(),c(e)}}var Ue=class a{fb=f(me);ref=f(ne);svc=f(Q);snack=f(Z);store=f($);data=f(He,{optional:!0});today=new Date().toISOString().split("T")[0];estados=["Estable","Cr\xEDtico","Recuperaci\xF3n"];form=this.fb.group({mascotaId:[this.data?.patientId??"",O.required],fechaIngreso:[this.today,O.required],diagnostico:["",O.required],tratamiento:["",O.required],estado:["Estable",O.required],observaciones:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e=this.store.hospitalizations().map(u=>parseInt(u.id?.replace("H-","")??"0",10)).filter(u=>!isNaN(u)),t=(e.length?Math.max(...e):0)+1,s={id:`H-${String(t).padStart(3,"0")}`,mascotaId:n.mascotaId,veterinarioId:1,fechaIngreso:n.fechaIngreso,diagnostico:n.diagnostico,tratamientos:[n.tratamiento],estado:n.estado,observaciones:n.observaciones};this.svc.createHospitalizacion(s).subscribe({next:()=>{this.snack.open("Ingreso registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["app-registrar-ingreso-dialog"]],decls:42,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-field"],["formControlName","mascotaId"],["value",""],[3,"value"],[1,"dlg-row"],["type","date","formControlName","fechaIngreso"],["formControlName","estado"],["formControlName","diagnostico","placeholder","Diagn\xF3stico de ingreso..."],["formControlName","tratamiento","placeholder","Medicamentos, procedimientos..."],["formControlName","observaciones","placeholder","Notas adicionales..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(l(0,"h2",0),r(1,"Registrar Ingreso Hospitalario"),i(),l(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"label"),r(6,"Paciente *"),i(),l(7,"select",3)(8,"option",4),r(9,"Seleccionar paciente..."),i(),M(10,jn,2,3,"option",5,Kn),i()(),l(12,"div",6)(13,"div",2)(14,"label"),r(15,"Fecha de Ingreso *"),i(),x(16,"input",7),i(),l(17,"div",2)(18,"label"),r(19,"Estado *"),i(),l(20,"select",8),M(21,Gn,2,2,"option",5,xe),i()()(),l(23,"div",2)(24,"label"),r(25,"Diagn\xF3stico *"),i(),x(26,"textarea",9),i(),l(27,"div",2)(28,"label"),r(29,"Tratamiento Inicial *"),i(),x(30,"textarea",10),i(),l(31,"div",2)(32,"label"),r(33,"Observaciones"),i(),x(34,"textarea",11),i()()(),l(35,"mat-dialog-actions",12)(36,"button",13),r(37,"Cancelar"),i(),l(38,"button",14),g("click",function(){return t.submit()}),l(39,"mat-icon"),r(40,"local_hospital"),i(),r(41," Registrar Ingreso "),i()()),e&2&&(o(3),_("formGroup",t.form),o(7),E(t.store.patients()),o(11),E(t.estados),o(17),_("disabled",t.form.invalid||t.submitting))},dependencies:[pe,se,je,Ge,U,Ke,Y,de,X,ce,G,ae,le,re,oe,j,K,H,q],encapsulation:2})};var Ye=class a{fb=f(me);ref=f(ne);svc=f(Q);snack=f(Z);store=f($);form=this.fb.group({nombre:["",O.required],telefono:["",O.required],correo:["",[O.email]],direccion:[""],dni:[""]});submitting=!1;submit(){if(this.form.invalid)return;this.submitting=!0;let n=this.form.value,e=this.store.rawClientes().map(u=>parseInt(u.id??"0",10)).filter(u=>!isNaN(u)),t=(e.length?Math.max(...e):0)+1,s={id:String(t),nombre:n.nombre,telefono:n.telefono,email:n.correo,direccion:n.direccion,dni:n.dni};this.svc.createCliente(s).subscribe({next:()=>{this.snack.open("Cliente registrado","OK",{duration:3e3}),this.ref.close(!0)},error:()=>{this.snack.open("Error al guardar","",{duration:3e3}),this.submitting=!1}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["app-registrar-cliente-dialog"]],decls:33,vars:2,consts:[["mat-dialog-title","",1,"dlg-title"],[1,"dlg-form",3,"formGroup"],[1,"dlg-row"],[1,"dlg-field","dlg-field-full"],["type","text","formControlName","nombre","placeholder","Nombre del propietario"],[1,"dlg-field"],["type","tel","formControlName","telefono","placeholder","+51 999 000 000"],["type","text","formControlName","dni","placeholder","12345678"],["type","email","formControlName","correo","placeholder","correo@ejemplo.com"],["type","text","formControlName","direccion","placeholder","Av. Principal 123..."],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"dlg-btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(l(0,"h2",0),r(1,"Registrar Cliente"),i(),l(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"div",3)(6,"label"),r(7,"Nombre completo *"),i(),x(8,"input",4),i()(),l(9,"div",2)(10,"div",5)(11,"label"),r(12,"Tel\xE9fono *"),i(),x(13,"input",6),i(),l(14,"div",5)(15,"label"),r(16,"DNI"),i(),x(17,"input",7),i()(),l(18,"div",5)(19,"label"),r(20,"Correo electr\xF3nico"),i(),x(21,"input",8),i(),l(22,"div",5)(23,"label"),r(24,"Direcci\xF3n"),i(),x(25,"input",9),i()()(),l(26,"mat-dialog-actions",10)(27,"button",11),r(28,"Cancelar"),i(),l(29,"button",12),g("click",function(){return t.submit()}),l(30,"mat-icon"),r(31,"person_add"),i(),r(32," Registrar Cliente "),i()()),e&2&&(o(3),_("formGroup",t.form),o(26),_("disabled",t.form.invalid||t.submitting))},dependencies:[pe,se,U,Y,de,X,ce,G,ae,le,re,oe,j,K,H,q],encapsulation:2})};var Qn=(a,n)=>({current:a,total:n}),Oe=(a,n)=>n.id,Vi=(a,n)=>n.value,ht=(a,n)=>n.labelKey,$n=(a,n)=>n.date,Un=(a,n)=>n.label;function Yn(a,n){a&1&&(l(0,"mat-icon",39),r(1,"pets"),i(),r(2),m(3,"translate")),a&2&&(o(2),b(" ",p(3,1,"clinical.tabs.patients")))}function Xn(a,n){a&1&&(l(0,"div",20),r(1),m(2,"translate"),i()),a&2&&(o(),c(p(2,1,"clinical.patients.loading")))}function Zn(a,n){if(a&1){let e=B();l(0,"div",40)(1,"div",42)(2,"div",43)(3,"mat-icon"),r(4,"pets"),i()(),l(5,"div",44)(6,"div",45),r(7),i(),l(8,"div",46),r(9),i()(),l(10,"span",47),r(11),i()(),l(12,"div",48)(13,"div",49)(14,"mat-icon"),r(15,"pets"),i(),l(16,"span"),r(17),m(18,"translate"),i(),r(19),i(),l(20,"div",49)(21,"mat-icon"),r(22,"cake"),i(),l(23,"span"),r(24),m(25,"translate"),i(),r(26),i(),l(27,"div",49)(28,"mat-icon"),r(29,"monitor_weight"),i(),l(30,"span"),r(31),m(32,"translate"),i(),r(33),i(),l(34,"div",49)(35,"mat-icon"),r(36,"person"),i(),l(37,"span"),r(38),m(39,"translate"),i(),r(40),i()(),l(41,"div",50)(42,"button",51),g("click",function(){let d=P(e).$implicit,s=h(2);return T(s.verFicha(d.id))}),l(43,"mat-icon"),r(44,"visibility"),i(),r(45),m(46,"translate"),i(),l(47,"button",52),g("click",function(){let d=P(e).$implicit,s=h(2);return T(s.openRegistrarPaciente(d))}),l(48,"mat-icon"),r(49,"edit"),i()(),l(50,"button",53),g("click",function(){let d=P(e).$implicit,s=h(2);return T(s.deletePatient(d))}),l(51,"mat-icon"),r(52,"delete"),i()()()()}if(a&2){let e=n.$implicit;o(2),F("background",e.avatarColor),o(5),c(e.name),o(2),b("ID: ",e.id),o(2),c(e.status),o(6),c(p(18,15,"clinical.patients.species")),o(2),V(" ",e.species," - ",e.breed),o(5),c(p(25,17,"clinical.patients.age")),o(2),b(" ",e.age),o(5),c(p(32,19,"clinical.patients.weight")),o(2),b(" ",e.weight),o(5),c(p(39,21,"clinical.patients.owner")),o(2),b(" ",e.owner),o(5),b(" ",p(46,23,"clinical.patients.viewFile")," ")}}function Jn(a,n){a&1&&(l(0,"p",41),r(1),m(2,"translate"),i()),a&2&&(o(),c(p(2,1,"clinical.patients.empty")))}function ea(a,n){if(a&1&&(l(0,"div",21),M(1,Zn,53,25,"div",40,Oe,!1,Jn,3,3,"p",41),i()),a&2){let e=h();o(),E(e.filteredPatients)}}function ta(a,n){a&1&&(l(0,"mat-icon",39),r(1,"people"),i(),r(2),m(3,"translate")),a&2&&(o(2),b(" ",p(3,1,"clinical.tabs.clients")))}function ia(a,n){a&1&&(l(0,"div",20),r(1),m(2,"translate"),i()),a&2&&(o(),c(p(2,1,"clinical.patients.loading")))}function na(a,n){if(a&1&&(l(0,"tr")(1,"td")(2,"div",54)(3,"div",55)(4,"mat-icon"),r(5,"person"),i()(),l(6,"div",56),r(7),i()()(),l(8,"td"),r(9),i(),l(10,"td"),r(11),i(),l(12,"td"),r(13),i(),l(14,"td"),r(15),i()()),a&2){let e=n.$implicit;o(7),c(e.nombre),o(2),c(e.dni),o(2),c(e.telefono),o(2),c(e.email),o(2),c(e.direccion)}}function aa(a,n){a&1&&(l(0,"tr")(1,"td",57),r(2),m(3,"translate"),i()()),a&2&&(o(2),c(p(3,1,"clinical.clients.empty")))}function la(a,n){if(a&1&&(l(0,"div",22)(1,"table",26)(2,"thead")(3,"tr")(4,"th"),r(5),m(6,"translate"),i(),l(7,"th"),r(8),m(9,"translate"),i(),l(10,"th"),r(11),m(12,"translate"),i(),l(13,"th"),r(14),m(15,"translate"),i(),l(16,"th"),r(17),m(18,"translate"),i()()(),l(19,"tbody"),M(20,na,16,5,"tr",null,Oe,!1,aa,4,3,"tr"),i()()()),a&2){let e=h();o(5),c(p(6,6,"clinical.clients.colName")),o(3),c(p(9,8,"clinical.clients.colDni")),o(3),c(p(12,10,"clinical.clients.colPhone")),o(3),c(p(15,12,"clinical.clients.colEmail")),o(3),c(p(18,14,"clinical.clients.colAddress")),o(3),E(e.filteredClients)}}function oa(a,n){a&1&&(l(0,"mat-icon",39),r(1,"medical_services"),i(),r(2),m(3,"translate")),a&2&&(o(2),b(" ",p(3,1,"clinical.tabs.consultations")))}function ra(a,n){if(a&1&&(l(0,"tr")(1,"td",58),r(2),i(),l(3,"td")(4,"div",54)(5,"div",59)(6,"mat-icon"),r(7,"pets"),i()(),l(8,"div")(9,"div",56),r(10),i(),l(11,"div",60),r(12),i()()()(),l(13,"td")(14,"div",56),r(15),i(),l(16,"div",60),r(17),i()(),l(18,"td"),r(19),i(),l(20,"td"),r(21),i(),l(22,"td")(23,"div",56),r(24),i(),l(25,"div",60),r(26),i()(),l(27,"td")(28,"span",61),r(29),i()()()),a&2){let e=n.$implicit,t=h();o(2),c(e.id),o(3),F("background",e.patientAvatarColor),o(5),c(e.patientName),o(2),c(e.patientBreed),o(3),c(e.clientName),o(2),c(e.clientPhone),o(2),c(e.type),o(2),c(e.diagnosis),o(3),c(e.date),o(2),c(e.time),o(2),_("ngClass",t.getConsultBadge(e.status)),o(),c(e.status)}}function da(a,n){a&1&&(l(0,"tr")(1,"td",62),r(2),m(3,"translate"),i()()),a&2&&(o(2),c(p(3,1,"clinical.consultations.empty")))}function sa(a,n){if(a&1){let e=B();l(0,"button",63),g("click",function(){let d=P(e).$implicit,s=h();return T(s.consultPage=d)}),r(1),i()}if(a&2){let e=n.$implicit,t=h();w("active",t.consultPage===e),o(),c(e)}}function ca(a,n){a&1&&(l(0,"mat-icon",39),r(1,"assignment"),i(),r(2),m(3,"translate")),a&2&&(o(2),b(" ",p(3,1,"clinical.tabs.history")))}function ma(a,n){if(a&1){let e=B();l(0,"div",31)(1,"mat-icon"),r(2,"assignment_ind"),i(),l(3,"h3"),r(4),m(5,"translate"),i(),l(6,"p"),r(7),m(8,"translate"),i(),l(9,"button",64),g("click",function(){P(e);let d=h();return T(d.activeTab=0)}),r(10),m(11,"translate"),i()()}a&2&&(o(4),c(p(5,3,"clinical.history.selectPatient")),o(3),c(p(8,5,"clinical.history.selectPatientHint")),o(3),c(p(11,7,"clinical.history.goToPatients")))}function pa(a,n){if(a&1&&(l(0,"div",71)(1,"div",74),r(2),i(),l(3,"div",75),r(4),m(5,"translate"),i()()),a&2){let e=n.$implicit;o(2),c(e.value),o(2),c(p(5,2,e.labelKey))}}function fa(a,n){a&1&&(l(0,"p",41),r(1),m(2,"translate"),i()),a&2&&(o(),c(p(2,1,"clinical.history.empty")))}function ua(a,n){if(a&1&&(l(0,"div",83)(1,"div",84),r(2),i(),l(3,"p",85),r(4),i()()),a&2){let e=n.$implicit;o(2),c(e.label),o(2),c(e.content)}}function ha(a,n){if(a&1&&(l(0,"div",77)(1,"div",78)(2,"mat-icon"),r(3),i(),l(4,"span",79),r(5),i(),l(6,"span",80),r(7),i(),l(8,"span",81),r(9),i()(),l(10,"div",82),M(11,ua,5,2,"div",83,Un),i()()),a&2){let e=n.$implicit;F("border-left","4px solid "+e.borderColor),o(),F("background",e.bg),o(),F("color",e.color),o(),c(e.icon),o(),F("color",e.color),o(),c(e.type),o(2),c(e.date),o(2),c(e.doctor),o(2),E(e.sections)}}function ga(a,n){if(a&1&&(l(0,"div",73),M(1,ha,13,12,"div",76,$n),i()),a&2){let e=h(2);o(),E(e.historyRecords)}}function _a(a,n){if(a&1){let e=B();l(0,"div",65)(1,"div",66)(2,"mat-icon"),r(3,"pets"),i()(),l(4,"div",67)(5,"h2"),r(6),i(),l(7,"p"),r(8),m(9,"translate"),i()(),l(10,"div",68)(11,"button",10),g("click",function(){P(e);let d=h();return T(d.openNuevaConsulta(d.store.selectedPatientId()))}),l(12,"mat-icon"),r(13,"add"),i(),r(14),m(15,"translate"),i(),l(16,"button",69)(17,"mat-icon"),r(18,"bookmark_border"),i()()()(),l(19,"div",70),M(20,pa,6,4,"div",71,ht),i(),l(22,"div",72),r(23),m(24,"translate"),i(),v(25,fa,3,3,"p",41)(26,ga,3,0,"div",73)}if(a&2){let e=h();o(),F("background",e.historyPatient.avatarColor),o(5),c(e.historyPatient.name),o(2),kt("",e.historyPatient.breed," \xB7 ",e.historyPatient.age," \xB7 ",p(9,10,"clinical.history.owner")," ",e.historyPatient.owner),o(6),b(" ",p(15,12,"clinical.history.newConsult")," "),o(6),E(e.historyPatient.stats),o(3),c(p(24,14,"clinical.history.fullHistory")),o(2),y(e.historyRecords.length===0?25:26)}}function xa(a,n){a&1&&(l(0,"mat-icon",39),r(1,"vaccines"),i(),r(2),m(3,"translate")),a&2&&(o(2),b(" ",p(3,1,"clinical.tabs.vaccines")))}function ba(a,n){if(a&1){let e=B();l(0,"button",86),g("click",function(){let d=P(e).$implicit,s=h();return T(s.vaccineFilter=d.value)}),r(1),m(2,"translate"),i()}if(a&2){let e=n.$implicit,t=h();w("chip-active",t.vaccineFilter===e.value),o(),b(" ",p(2,3,e.labelKey)," ")}}function va(a,n){if(a&1&&(l(0,"div",87)(1,"mat-icon",88),r(2),i(),l(3,"div",89),r(4),i(),l(5,"div",90),r(6),m(7,"translate"),i(),l(8,"div",91),r(9),m(10,"translate"),i()()),a&2){let e=n.$implicit;F("background",e.bg),o(),F("color",e.color),o(),c(e.icon),o(),F("color",e.color),o(),c(e.value),o(),F("color",e.color),o(),c(p(7,12,e.labelKey)),o(3),c(p(10,14,e.sublabelKey))}}function ya(a,n){a&1&&(r(0),m(1,"translate")),a&2&&b(" ",p(1,1,"clinical.vaccines.actionViewDetails")," ")}function Ca(a,n){a&1&&(r(0),m(1,"translate")),a&2&&b(" ",p(1,1,"clinical.vaccines.actionSchedule")," ")}function Sa(a,n){a&1&&(r(0),m(1,"translate")),a&2&&b(" ",p(1,1,"clinical.vaccines.actionApplyNow")," ")}function Ma(a,n){if(a&1){let e=B();l(0,"tr")(1,"td")(2,"div",54)(3,"div",59)(4,"mat-icon"),r(5,"pets"),i()(),l(6,"div")(7,"div",56),r(8),i(),l(9,"div",60),r(10),i()()()(),l(11,"td")(12,"div",56),r(13),i(),l(14,"div",60),r(15),i()(),l(16,"td"),r(17),i(),l(18,"td"),r(19),i(),l(20,"td")(21,"span",61),r(22),i()(),l(23,"td")(24,"button",92),g("click",function(){let d=P(e).$implicit,s=h();return T(s.openRegistrarVacuna(d.mascotaId))}),v(25,ya,2,3)(26,Ca,2,3)(27,Sa,2,3),i()()()}if(a&2){let e=n.$implicit,t=h();o(3),F("background",e.patientAvatarColor),o(5),c(e.patientName),o(2),c(e.patientBreed),o(3),c(e.vaccineName),o(2),c(e.vaccineDesc),o(2),c(e.lastApplied),o(),w("text-danger",e.nextDoseHighlight),o(),c(e.nextDose),o(2),_("ngClass",t.getVaccineBadge(e.status)),o(),c(e.status),o(3),y(e.status==="Al D\xEDa"?25:e.status==="Pr\xF3xima"?26:27)}}function Ea(a,n){a&1&&(l(0,"tr")(1,"td",93),r(2),m(3,"translate"),i()()),a&2&&(o(2),c(p(3,1,"clinical.vaccines.empty")))}function wa(a,n){a&1&&(l(0,"mat-icon",39),r(1,"local_hospital"),i(),r(2),m(3,"translate")),a&2&&(o(2),b(" ",p(3,1,"clinical.tabs.hospitalization")))}function Fa(a,n){if(a&1&&(l(0,"div",37)(1,"div")(2,"div",94),r(3),m(4,"translate"),i(),l(5,"div",95),r(6),i(),l(7,"div",96),r(8),m(9,"translate"),i()(),l(10,"div",97)(11,"mat-icon"),r(12),i()()()),a&2){let e=n.$implicit;o(3),c(p(4,10,e.labelKey)),o(2),F("color",e.color),o(),c(e.value),o(2),c(p(9,12,e.sublabelKey)),o(2),F("background",e.bg),o(),F("color",e.color),o(),c(e.icon)}}function Oa(a,n){if(a&1){let e=B();l(0,"button",86),g("click",function(){let d=P(e).$implicit,s=h();return T(s.hospitalizationFilter=d.value)}),r(1),m(2,"translate"),i()}if(a&2){let e=n.$implicit,t=h();w("chip-active",t.hospitalizationFilter===e.value),o(),V(" ",p(2,4,e.labelKey)," (",t.getHospCount(e.value),") ")}}function Ia(a,n){if(a&1&&(l(0,"li"),r(1),i()),a&2){let e=n.$implicit;o(),b("\u2022 ",e)}}function ka(a,n){if(a&1){let e=B();l(0,"tr")(1,"td")(2,"div",54)(3,"div",59)(4,"mat-icon"),r(5,"pets"),i()(),l(6,"div")(7,"div",56),r(8),i(),l(9,"div",60),r(10),i()()()(),l(11,"td")(12,"div",56),r(13),i(),l(14,"div",60),r(15),i()(),l(16,"td")(17,"span",61),r(18),i()(),l(19,"td")(20,"div",56),r(21),i(),l(22,"div",60),r(23),i()(),l(24,"td"),r(25),i(),l(26,"td")(27,"ul",98),M(28,Ia,2,1,"li",null,xe),i()(),l(30,"td")(31,"div",99)(32,"button",100),g("click",function(){let d=P(e).$implicit,s=h();return T(s.verFicha(d.mascotaId))}),l(33,"mat-icon"),r(34,"visibility"),i()(),l(35,"button",101),g("click",function(){let d=P(e).$implicit,s=h();return T(s.openRegistrarIngreso(d.mascotaId))}),l(36,"mat-icon"),r(37,"edit"),i()()()()()}if(a&2){let e=n.$implicit,t=h();o(3),F("background",e.patientAvatarColor),o(5),c(e.patientName),o(2),V("",e.patientBreed," \xB7 ",e.patientAge),o(3),c(e.ownerName),o(2),c(e.ownerPhone),o(2),_("ngClass",t.getHospBadge(e.status)),o(),b("\u2022 ",e.status),o(3),c(e.admissionDate),o(2),c(e.daysAgo),o(2),c(e.diagnosis),o(3),E(e.treatments)}}function Pa(a,n){a&1&&(l(0,"tr")(1,"td",62),r(2),m(3,"translate"),i()()),a&2&&(o(2),c(p(3,1,"clinical.hospitalization.empty")))}var ut=5,Wi=class a{store=f($);svc=f(Q);dialog=f(oi);snack=f(Z);translate=f(Nt);activeTab=0;patientSearch="";clientSearch="";speciesFilter="Todas";vaccineFilter="Todas";hospitalizationFilter="Todos";consultDateFilter="all";vaccineFilters=[{value:"Todas",labelKey:"clinical.vaccines.filterAll"},{value:"Pr\xF3ximas",labelKey:"clinical.vaccines.filterUpcoming"},{value:"Vencidas",labelKey:"clinical.vaccines.filterExpired"}];hospFilters=[{value:"Todos",labelKey:"clinical.hospitalization.filterAll"},{value:"Cr\xEDtico",labelKey:"clinical.hospitalization.filterCritical"},{value:"Estable",labelKey:"clinical.hospitalization.filterStable"},{value:"Recuperaci\xF3n",labelKey:"clinical.hospitalization.filterRecovery"}];consultPage=1;get filteredPatients(){let n=this.patientSearch.toLowerCase();return this.store.patients().filter(e=>(n===""||e.name.toLowerCase().includes(n)||e.owner.toLowerCase().includes(n)||e.id.includes(n))&&(this.speciesFilter==="Todas"||e.species===this.speciesFilter))}get filteredClients(){let n=this.clientSearch.toLowerCase();return this.store.rawClientes().filter(e=>n===""||e.nombre?.toLowerCase().includes(n)||e.dni?.includes(n)||e.email?.toLowerCase().includes(n))}get filteredConsultations(){let n=new Date().toISOString().split("T")[0],e=new Date(Date.now()-7*864e5).toISOString().split("T")[0];return this.store.consultations().filter(t=>this.consultDateFilter==="today"?t.rawDate===n:this.consultDateFilter==="week"?t.rawDate>=e:!0)}get consultTotalPages(){return Math.max(1,Math.ceil(this.filteredConsultations.length/ut))}get pagedConsultations(){let n=(this.consultPage-1)*ut;return this.filteredConsultations.slice(n,n+ut)}get consultPageNumbers(){return Array.from({length:this.consultTotalPages},(n,e)=>e+1)}setConsultFilter(n){this.consultDateFilter=n,this.consultPage=1}get filteredVaccines(){return this.vaccineFilter==="Pr\xF3ximas"?this.store.vaccines().filter(n=>n.status==="Pr\xF3xima"):this.vaccineFilter==="Vencidas"?this.store.vaccines().filter(n=>n.status==="Vencida"):this.store.vaccines()}get vaccineSummary(){let n=this.store.vaccines();return[{labelKey:"clinical.vaccines.summaryExpired",sublabelKey:"clinical.vaccines.summaryExpiredSub",value:n.filter(e=>e.status==="Vencida").length,color:"#EF4444",bg:"#FEF2F2",icon:"error"},{labelKey:"clinical.vaccines.summaryUpcoming",sublabelKey:"clinical.vaccines.summaryUpcomingSub",value:n.filter(e=>e.status==="Pr\xF3xima").length,color:"#F59E0B",bg:"#FFFBEB",icon:"schedule"},{labelKey:"clinical.vaccines.summaryUpToDate",sublabelKey:"clinical.vaccines.summaryUpToDateSub",value:n.filter(e=>e.status==="Al D\xEDa").length,color:"#22C55E",bg:"#F0FDF4",icon:"check_circle"}]}get filteredHospitalizations(){return this.hospitalizationFilter==="Todos"?this.store.hospitalizations():this.store.hospitalizations().filter(n=>n.status===this.hospitalizationFilter)}getHospCount(n){return n==="Todos"?this.store.hospitalizations().length:this.store.hospitalizations().filter(e=>e.status===n).length}get hospitalStats(){let n=this.store.hospitalizations();return[{labelKey:"clinical.hospitalization.statTotal",sublabelKey:"clinical.hospitalization.statTotalSub",value:n.length,icon:"local_hospital",color:"#3B82F6",bg:"#EFF6FF"},{labelKey:"clinical.hospitalization.statCritical",sublabelKey:"clinical.hospitalization.statCriticalSub",value:n.filter(e=>e.status==="Cr\xEDtico").length,icon:"favorite",color:"#EF4444",bg:"#FEF2F2"},{labelKey:"clinical.hospitalization.statRecovery",sublabelKey:"clinical.hospitalization.statRecoverySub",value:n.filter(e=>e.status==="Recuperaci\xF3n").length,icon:"person",color:"#F59E0B",bg:"#FFFBEB"}]}get selectedConsultations(){let n=this.store.selectedPatient();return n?this.store.consultations().filter(e=>e.mascotaId===n.id):[]}get historyPatient(){let n=this.store.selectedPatient();if(!n)return null;let e=this.selectedConsultations;return{name:n.name,breed:n.breed,age:n.age,owner:n.owner,avatarColor:n.avatarColor,stats:[{labelKey:"clinical.history.statTotalConsults",value:String(e.length)},{labelKey:"clinical.history.statVaccinesApplied",value:String(this.store.vaccines().filter(t=>t.mascotaId===n.id).length)},{labelKey:"clinical.history.statHospitalizations",value:String(this.store.hospitalizations().filter(t=>t.mascotaId===n.id).length)},{labelKey:"clinical.history.statLastVisit",value:e.length>0?e[0].date:"\u2014"}]}}get historyRecords(){return this.selectedConsultations.map(n=>({type:n.type,date:n.date,doctor:n.veterinario??"Veterinario",color:"#22C55E",bg:"#F0FDF4",borderColor:"#22C55E",icon:"medical_services",sections:[...n.subjetivo?[{label:"Subjetivo (S)",type:"text",content:n.subjetivo}]:[],...n.objetivo?[{label:"Objetivo (O)",type:"text",content:n.objetivo}]:[],...n.diagnosis?[{label:"Evaluaci\xF3n (A)",type:"text",content:n.diagnosis}]:[],...n.plan?[{label:"Plan (P)",type:"text",content:n.plan}]:[]]}))}getConsultBadge(n){return{Completada:"badge-completada","En Proceso":"badge-en-proceso",Cr\u00EDtico:"badge-critico",Pendiente:"badge-pendiente"}[n]??""}getVaccineBadge(n){return{"Al D\xEDa":"badge-al-dia",Pr\u00F3xima:"badge-proxima",Vencida:"badge-vencida"}[n]??""}getHospBadge(n){return{Cr\u00EDtico:"badge-critico",Estable:"badge-estable",Recuperaci\u00F3n:"badge-recuperacion"}[n]??""}verFicha(n){this.store.selectPatient(n),this.activeTab=3}openNuevaConsulta(n){this.dialog.open(mi,{width:"640px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarPaciente(n){this.dialog.open(fi,{width:"580px",data:{patient:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openNuevaCita(n){this.dialog.open(pi,{width:"520px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarVacuna(n){this.dialog.open($e,{width:"560px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarIngreso(n){this.dialog.open(Ue,{width:"560px",data:{patientId:n}}).afterClosed().subscribe(e=>{e&&this.store.reload()})}openRegistrarCliente(){this.dialog.open(Ye,{width:"500px"}).afterClosed().subscribe(n=>{n&&this.store.reload()})}deletePatient(n){let e=this.translate.instant("clinical.messages.confirmDelete",{name:n.name});confirm(e)&&this.svc.deleteMascota(n.id).subscribe({next:()=>{this.snack.open(this.translate.instant("clinical.messages.patientDeleted"),"OK",{duration:3e3}),this.store.reload()},error:()=>this.snack.open(this.translate.instant("clinical.messages.deleteError"),"",{duration:3e3})})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["app-clinical-management"]],decls:251,vars:166,consts:[[1,"clinical"],[1,"page-header"],[1,"header-search"],[1,"search-icon"],[1,"header-search-input",3,"placeholder"],[1,"notif-icon"],["animationDuration","0ms",1,"clinical-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"tab-content"],[1,"section-header"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"filters-row"],[1,"search-wrap"],[1,"filter-input",3,"ngModelChange","ngModel","placeholder"],[1,"species-wrap"],[1,"species-select",3,"valueChange","value"],["value","Todas"],["value","Perro"],["value","Gato"],["value","Ave"],[1,"loading-msg"],[1,"patients-grid"],[1,"card","table-card"],[1,"table-top"],[1,"table-actions"],["mat-stroked-button","",1,"btn-sm",3,"click"],[1,"data-table"],[1,"table-footer"],[1,"pagination"],["mat-icon-button","",3,"click","disabled"],[1,"pg-btn",3,"active"],[1,"empty-tab"],[1,"chips-row"],[1,"chip",3,"chip-active"],[1,"vsummary-grid"],[1,"vsummary",3,"background"],[1,"hosp-stats-row"],[1,"hosp-stat-card"],[1,"table-title"],[1,"tab-icon"],[1,"patient-card"],[1,"empty-msg"],[1,"pc-top"],[1,"pc-avatar"],[1,"pc-title"],[1,"pc-name"],[1,"pc-id"],[1,"badge","badge-activo"],[1,"pc-details"],[1,"pc-row"],[1,"pc-actions"],["mat-button","",1,"btn-ver-ficha",3,"click"],["mat-icon-button","","title","Editar",3,"click"],["mat-icon-button","","title","Eliminar",3,"click"],[1,"td-patient"],[1,"td-avatar",2,"background","#6366F1"],[1,"td-name"],["colspan","5",1,"empty-msg"],[1,"td-id"],[1,"td-avatar"],[1,"td-sub"],[1,"badge",3,"ngClass"],["colspan","7",1,"empty-msg"],[1,"pg-btn",3,"click"],["mat-stroked-button","",3,"click"],[1,"history-header"],[1,"hist-avatar"],[1,"hist-info"],[1,"hist-actions"],["mat-icon-button",""],[1,"hist-stats"],[1,"hist-stat"],[1,"hist-section-title"],[1,"timeline"],[1,"hs-val"],[1,"hs-lbl"],[1,"tl-card",3,"border-left"],[1,"tl-card"],[1,"tl-header"],[1,"tl-type"],[1,"tl-date"],[1,"tl-doc"],[1,"tl-body"],[1,"tl-section"],[1,"tl-label"],[1,"tl-text"],[1,"chip",3,"click"],[1,"vsummary"],[1,"vs-icon"],[1,"vs-val"],[1,"vs-label"],[1,"vs-sub"],["mat-button","",1,"action-link",3,"click"],["colspan","6",1,"empty-msg"],[1,"hosp-stat-label"],[1,"hosp-stat-val"],[1,"hosp-stat-sub"],[1,"hosp-stat-icon"],[1,"treat-list"],[1,"td-actions"],["mat-icon-button","","title","Ver ficha",3,"click"],["mat-icon-button","","title","Editar ingreso",3,"click"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),r(4),m(5,"translate"),i(),l(6,"p"),r(7),m(8,"translate"),i()(),l(9,"div",2)(10,"mat-icon",3),r(11,"search"),i(),x(12,"input",4),m(13,"translate"),l(14,"mat-icon",5),r(15,"notifications"),i()()(),l(16,"mat-tab-group",6),Me("selectedIndexChange",function(s){return Se(t.activeTab,s)||(t.activeTab=s),s}),l(17,"mat-tab"),z(18,Yn,4,3,"ng-template",7),l(19,"div",8)(20,"div",9)(21,"div")(22,"h2"),r(23),m(24,"translate"),i(),l(25,"p"),r(26),m(27,"translate"),i()(),l(28,"button",10),g("click",function(){return t.openRegistrarPaciente()}),l(29,"mat-icon"),r(30,"add"),i(),r(31),m(32,"translate"),i()(),l(33,"div",11)(34,"div",12)(35,"mat-icon"),r(36,"search"),i(),l(37,"input",13),m(38,"translate"),Me("ngModelChange",function(s){return Se(t.patientSearch,s)||(t.patientSearch=s),s}),i()(),l(39,"div",14)(40,"mat-select",15),Me("valueChange",function(s){return Se(t.speciesFilter,s)||(t.speciesFilter=s),s}),l(41,"mat-option",16),r(42),m(43,"translate"),i(),l(44,"mat-option",17),r(45),m(46,"translate"),i(),l(47,"mat-option",18),r(48),m(49,"translate"),i(),l(50,"mat-option",19),r(51),m(52,"translate"),i()()()(),v(53,Xn,3,3,"div",20)(54,ea,4,1,"div",21),i()(),l(55,"mat-tab"),z(56,ta,4,3,"ng-template",7),l(57,"div",8)(58,"div",9)(59,"div")(60,"h2"),r(61),m(62,"translate"),i(),l(63,"p"),r(64),m(65,"translate"),i()(),l(66,"button",10),g("click",function(){return t.openRegistrarCliente()}),l(67,"mat-icon"),r(68,"add"),i(),r(69),m(70,"translate"),i()(),l(71,"div",11)(72,"div",12)(73,"mat-icon"),r(74,"search"),i(),l(75,"input",13),m(76,"translate"),Me("ngModelChange",function(s){return Se(t.clientSearch,s)||(t.clientSearch=s),s}),i()()(),v(77,ia,3,3,"div",20)(78,la,23,16,"div",22),i()(),l(79,"mat-tab"),z(80,oa,4,3,"ng-template",7),l(81,"div",8)(82,"div",9)(83,"div")(84,"h2"),r(85),m(86,"translate"),i(),l(87,"p"),r(88),m(89,"translate"),i()(),l(90,"button",10),g("click",function(){return t.openNuevaConsulta()}),l(91,"mat-icon"),r(92,"add"),i(),r(93),m(94,"translate"),i()(),l(95,"div",22)(96,"div",23)(97,"h3"),r(98),m(99,"translate"),i(),l(100,"div",24)(101,"button",25),g("click",function(){return t.setConsultFilter("all")}),r(102),m(103,"translate"),i(),l(104,"button",25),g("click",function(){return t.setConsultFilter("today")}),r(105),m(106,"translate"),i(),l(107,"button",25),g("click",function(){return t.setConsultFilter("week")}),r(108),m(109,"translate"),i()()(),l(110,"table",26)(111,"thead")(112,"tr")(113,"th"),r(114),m(115,"translate"),i(),l(116,"th"),r(117),m(118,"translate"),i(),l(119,"th"),r(120),m(121,"translate"),i(),l(122,"th"),r(123),m(124,"translate"),i(),l(125,"th"),r(126),m(127,"translate"),i(),l(128,"th"),r(129),m(130,"translate"),i(),l(131,"th"),r(132),m(133,"translate"),i()()(),l(134,"tbody"),M(135,ra,30,13,"tr",null,Oe,!1,da,4,3,"tr"),i()(),l(138,"div",27)(139,"span"),r(140),m(141,"translate"),i(),l(142,"div",28)(143,"button",29),g("click",function(){return t.consultPage=t.consultPage-1}),l(144,"mat-icon"),r(145,"chevron_left"),i()(),M(146,sa,2,3,"button",30,xe),l(148,"button",29),g("click",function(){return t.consultPage=t.consultPage+1}),l(149,"mat-icon"),r(150,"chevron_right"),i()()()()()()(),l(151,"mat-tab"),z(152,ca,4,3,"ng-template",7),l(153,"div",8),v(154,ma,12,9,"div",31)(155,_a,27,16),i()(),l(156,"mat-tab"),z(157,xa,4,3,"ng-template",7),l(158,"div",8)(159,"div",9)(160,"div",32),M(161,ba,3,5,"button",33,Vi),i(),l(163,"button",10),g("click",function(){return t.openRegistrarVacuna()}),l(164,"mat-icon"),r(165,"add"),i(),r(166),m(167,"translate"),i()(),l(168,"div",34),M(169,va,11,16,"div",35,ht),i(),l(171,"div",22)(172,"table",26)(173,"thead")(174,"tr")(175,"th"),r(176),m(177,"translate"),i(),l(178,"th"),r(179),m(180,"translate"),i(),l(181,"th"),r(182),m(183,"translate"),i(),l(184,"th"),r(185),m(186,"translate"),i(),l(187,"th"),r(188),m(189,"translate"),i(),l(190,"th"),r(191),m(192,"translate"),i()()(),l(193,"tbody"),M(194,Ma,28,13,"tr",null,Oe,!1,Ea,4,3,"tr"),i()()()()(),l(197,"mat-tab"),z(198,wa,4,3,"ng-template",7),l(199,"div",8)(200,"div",9)(201,"div")(202,"h2"),r(203),m(204,"translate"),i(),l(205,"p"),r(206),m(207,"translate"),i()(),l(208,"button",10),g("click",function(){return t.openRegistrarIngreso()}),l(209,"mat-icon"),r(210,"add"),i(),r(211),m(212,"translate"),i()(),l(213,"div",36),M(214,Fa,13,14,"div",37,ht),i(),l(216,"div",32),M(217,Oa,3,6,"button",33,Vi),i(),l(219,"div",22)(220,"h3",38),r(221),m(222,"translate"),i(),l(223,"table",26)(224,"thead")(225,"tr")(226,"th"),r(227),m(228,"translate"),i(),l(229,"th"),r(230),m(231,"translate"),i(),l(232,"th"),r(233),m(234,"translate"),i(),l(235,"th"),r(236),m(237,"translate"),i(),l(238,"th"),r(239),m(240,"translate"),i(),l(241,"th"),r(242),m(243,"translate"),i(),l(244,"th"),r(245),m(246,"translate"),i()()(),l(247,"tbody"),M(248,ka,38,12,"tr",null,Oe,!1,Pa,4,3,"tr"),i()()()()()()()),e&2&&(o(4),c(p(5,66,"clinical.title")),o(3),c(p(8,68,"clinical.subtitle")),o(5),_("placeholder",p(13,70,"clinical.search.placeholder")),o(4),Ce("selectedIndex",t.activeTab),o(7),c(p(24,72,"clinical.patients.title")),o(3),c(p(27,74,"clinical.patients.subtitle")),o(5),b(" ",p(32,76,"clinical.patients.register")," "),o(6),Ce("ngModel",t.patientSearch),_("placeholder",p(38,78,"clinical.patients.search")),o(3),Ce("value",t.speciesFilter),o(2),c(p(43,80,"clinical.patients.filterAll")),o(3),c(p(46,82,"clinical.patients.filterDog")),o(3),c(p(49,84,"clinical.patients.filterCat")),o(3),c(p(52,86,"clinical.patients.filterBird")),o(2),y(t.store.loading()?53:54),o(8),c(p(62,88,"clinical.clients.title")),o(3),c(p(65,90,"clinical.clients.subtitle")),o(5),b(" ",p(70,92,"clinical.clients.register")," "),o(6),Ce("ngModel",t.clientSearch),_("placeholder",p(76,94,"clinical.clients.search")),o(2),y(t.store.loading()?77:78),o(8),c(p(86,96,"clinical.consultations.title")),o(3),c(p(89,98,"clinical.consultations.subtitle")),o(5),b(" ",p(94,100,"clinical.consultations.newConsult")," "),o(5),c(p(99,102,"clinical.consultations.recent")),o(3),w("btn-sm-active",t.consultDateFilter==="all"),o(),c(p(103,104,"clinical.consultations.filterAll")),o(2),w("btn-sm-active",t.consultDateFilter==="today"),o(),c(p(106,106,"clinical.consultations.filterToday")),o(2),w("btn-sm-active",t.consultDateFilter==="week"),o(),c(p(109,108,"clinical.consultations.filterWeek")),o(6),c(p(115,110,"clinical.consultations.colId")),o(3),c(p(118,112,"clinical.consultations.colPatient")),o(3),c(p(121,114,"clinical.consultations.colClient")),o(3),c(p(124,116,"clinical.consultations.colType")),o(3),c(p(127,118,"clinical.consultations.colDiagnosis")),o(3),c(p(130,120,"clinical.consultations.colDate")),o(3),c(p(133,122,"clinical.consultations.colStatus")),o(3),E(t.pagedConsultations),o(5),c(Tt(141,124,"clinical.consultations.showing",Pt(163,Qn,t.pagedConsultations.length,t.filteredConsultations.length))),o(3),_("disabled",t.consultPage<=1),o(3),E(t.consultPageNumbers),o(2),_("disabled",t.consultPage>=t.consultTotalPages),o(6),y(t.historyPatient?155:154),o(7),E(t.vaccineFilters),o(5),b(" ",p(167,127,"clinical.vaccines.register")," "),o(3),E(t.vaccineSummary),o(7),c(p(177,129,"clinical.vaccines.colPatient")),o(3),c(p(180,131,"clinical.vaccines.colVaccine")),o(3),c(p(183,133,"clinical.vaccines.colLastApplied")),o(3),c(p(186,135,"clinical.vaccines.colNextDose")),o(3),c(p(189,137,"clinical.vaccines.colStatus")),o(3),c(p(192,139,"clinical.vaccines.colActions")),o(3),E(t.filteredVaccines),o(9),c(p(204,141,"clinical.hospitalization.title")),o(3),c(p(207,143,"clinical.hospitalization.subtitle")),o(5),b(" ",p(212,145,"clinical.hospitalization.register")," "),o(3),E(t.hospitalStats),o(3),E(t.hospFilters),o(4),c(p(222,147,"clinical.hospitalization.list")),o(6),c(p(228,149,"clinical.hospitalization.colPatient")),o(3),c(p(231,151,"clinical.hospitalization.colOwner")),o(3),c(p(234,153,"clinical.hospitalization.colStatus")),o(3),c(p(237,155,"clinical.hospitalization.colAdmissionDate")),o(3),c(p(240,157,"clinical.hospitalization.colDiagnosis")),o(3),c(p(243,159,"clinical.hospitalization.colTreatment")),o(3),c(p(246,161,"clinical.hospitalization.colActions")),o(3),E(t.filteredHospitalizations))},dependencies:[Bt,H,q,j,K,ei,xi,hi,gi,_i,Bi,Ai,qe,ci,U,Y,si,G,Vt],styles:[".clinical[_ngcontent-%COMP%]{min-height:100%}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.header-search-input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:8px 14px 8px 36px;font-size:13px;outline:none;width:260px;margin-left:-30px}.search-icon[_ngcontent-%COMP%]{font-size:18px;color:#94a3b8}.notif-icon[_ngcontent-%COMP%]{color:#64748b;cursor:pointer}.clinical-tabs[_ngcontent-%COMP%]{background:#fff}  .clinical-tabs .mat-mdc-tab{min-width:120px}  .clinical-tabs .mat-mdc-tab-header{border-bottom:1px solid #E2E8F0;padding:0 20px}  .clinical-tabs .mdc-tab--active .mdc-tab__text-label{color:#06b6d4!important}  .clinical-tabs .mdc-tab-indicator__content--underline{border-color:#06b6d4!important}.tab-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:4px;vertical-align:middle}.tab-content[_ngcontent-%COMP%]{padding:24px 28px}.empty-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;gap:12px;color:#94a3b8}.empty-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#475569;margin:0}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin:0 0 4px;color:#1e293b}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.filters-row[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.search-wrap[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 12px}.search-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8;font-size:18px}.filter-input[_ngcontent-%COMP%]{border:none;outline:none;font-size:13px;flex:1;padding:10px 0;background:transparent}.species-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:0 8px}.species-select[_ngcontent-%COMP%]{border:none!important}  .species-select .mat-mdc-select-trigger{padding:8px 0}.filter-icon-btn[_ngcontent-%COMP%]{color:#475569}.patients-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.patient-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 3px #0000000f;border:1px solid #F1F5F9}.pc-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.pc-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pc-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:22px;width:22px;height:22px}.pc-title[_ngcontent-%COMP%]{flex:1}.pc-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b}.pc-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.pc-details[_ngcontent-%COMP%]{margin-bottom:12px}.pc-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#475569;padding:3px 0}.pc-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#94a3b8}.pc-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#94a3b8}.pc-actions[_ngcontent-%COMP%]{display:flex;align-items:center;border-top:1px solid #F1F5F9;padding-top:10px}.btn-ver-ficha[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:13px!important;flex:1;justify-content:flex-start!important}.btn-ver-ficha[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f;overflow:hidden}.table-card[_ngcontent-%COMP%]{overflow:auto}.table-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 20px}.table-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin:0;color:#1e293b}.table-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.btn-sm[_ngcontent-%COMP%]{border-radius:6px!important;font-size:12px!important;color:#475569!important;border-color:#e2e8f0!important}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-size:12px;font-weight:600;color:#94a3b8;padding:10px 16px;background:#f8fafc;border-bottom:1px solid #E2E8F0;text-transform:uppercase;letter-spacing:.5px}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;border-bottom:1px solid #F8FAFC;font-size:13px;color:#475569;vertical-align:middle}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f8fafc}.td-id[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;font-family:monospace}.td-patient[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.td-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.td-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:16px;width:16px;height:16px}.td-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b}.td-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.table-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-top:1px solid #F1F5F9;font-size:12px;color:#94a3b8}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.pg-btn[_ngcontent-%COMP%]{width:28px;height:28px;border:1px solid #E2E8F0;border-radius:6px;background:#fff;font-size:12px;cursor:pointer;color:#475569}.pg-btn.active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.text-danger[_ngcontent-%COMP%]{color:#ef4444!important;font-weight:500}.action-link[_ngcontent-%COMP%]{color:#06b6d4!important;font-size:12px!important}.td-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.vsummary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.vsummary[_ngcontent-%COMP%]{border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:4px}.vs-icon[_ngcontent-%COMP%]{font-size:24px!important;width:24px!important;height:24px!important}.vs-val[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.vs-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.vs-sub[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.chips-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}.chip[_ngcontent-%COMP%]{padding:6px 16px;border-radius:20px;border:1px solid #E2E8F0;background:#fff;font-size:13px;font-weight:500;color:#475569;cursor:pointer;transition:all .15s}.chip.chip-active[_ngcontent-%COMP%]{background:#06b6d4;color:#fff;border-color:#06b6d4}.hosp-stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}.hosp-stat-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 3px #0000000f}.hosp-stat-label[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:4px}.hosp-stat-val[_ngcontent-%COMP%]{font-size:26px;font-weight:700}.hosp-stat-sub[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.hosp-stat-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center}.hosp-stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.treat-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;font-size:12px;color:#475569}.treat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1px 0}.table-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;padding:16px 20px 0}.history-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:20px}.hist-avatar[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.hist-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px;width:30px;height:30px}.hist-info[_ngcontent-%COMP%]{flex:1}.hist-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 4px;color:#1e293b}.hist-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin:0}.hist-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.hist-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}.hist-stat[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:16px 20px;text-align:center;box-shadow:0 1px 3px #0000000f}.hs-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b}.hs-lbl[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-top:2px}.hist-section-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.tl-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px #0000000f}.tl-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px}.tl-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.tl-type[_ngcontent-%COMP%]{font-size:14px;font-weight:600;flex:1}.tl-date[_ngcontent-%COMP%]{font-size:12px;color:#64748b}.tl-doc[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-left:8px}.tl-body[_ngcontent-%COMP%]{padding:16px}.tl-section[_ngcontent-%COMP%]{margin-bottom:14px}.tl-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.tl-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#475569;margin-bottom:6px}.tl-text[_ngcontent-%COMP%]{font-size:13px;color:#64748b;line-height:1.6;margin:0}.tl-vitals[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}.vital[_ngcontent-%COMP%]{background:#f8fafc;border-radius:6px;padding:8px 12px}.vital[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8;display:block}.vital[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;color:#1e293b}.tl-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 16px}.tl-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#64748b;padding:2px 0}"]})};export{Wi as ClinicalManagement};
