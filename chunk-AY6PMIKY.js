import{a as ae}from"./chunk-QKMJ76LX.js";import{B as me,E as ge,O as he,Q as pe,v as de,w as le,x as se,y as ce}from"./chunk-FBMTVQIF.js";import{b as oe,c as re}from"./chunk-NQWIFUGN.js";import{K as te,T as ie,U as ne,k as U,n as Z,o as Y,p as J,u as $,z as ee}from"./chunk-DZOPWEPU.js";import{$b as m,Eb as F,Fb as u,Hb as A,Ib as q,Kb as B,Lb as N,Mb as V,Pa as d,Qb as j,Rb as x,Sb as P,T as S,Tb as G,Ub as r,V as z,Vb as b,X as O,Z as h,Zb as s,_b as c,bc as X,cb as v,db as R,ea as I,ic as Q,ja as k,mc as H,oc as p,pb as w,pc as K,qb as D,rb as L,sa as T,ub as M,va as W,vb as C,wb as _,xb as e,yb as t,zb as f}from"./chunk-EDCRLFMK.js";var we=["switch"],ye=["*"];function ke(l,g){l&1&&(e(0,"span",11),I(),e(1,"svg",13),f(2,"path",14),t(),e(3,"svg",15),f(4,"path",16),t()())}var Me=new O("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),y=class{source;checked;constructor(g,o){this.source=g,this.checked=o}},E=(()=>{class l{_elementRef=h(W);_focusMonitor=h(ee);_changeDetectorRef=h(H);defaults=h(Me);_onChange=o=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(o){return new y(this,o)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=$();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(o){this._checked=o,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new k;toggleChange=new k;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){h(U).load(ne);let o=h(new Q("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=o==null?0:parseInt(o)||0,this.color=i.color||"accent",this.id=this._uniqueId=h(te).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(o=>{o==="keyboard"||o==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):o||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(o){o.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(o){this.checked=!!o}registerOnChange(o){this._onChange=o}registerOnTouched(o){this._onTouched=o}validate(o){return this.required&&o.value!==!0?{required:!0}:null}registerOnValidatorChange(o){this._validatorOnChange=o}setDisabledState(o){this.disabled=o,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new y(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=v({type:l,selectors:[["mat-slide-toggle"]],viewQuery:function(i,a){if(i&1&&B(we,5),i&2){let n;N(n=V())&&(a._switchElement=n.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,a){i&2&&(F("id",a.id),w("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),G(a.color?"mat-"+a.color:""),P("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",p],color:"color",disabled:[2,"disabled","disabled",p],disableRipple:[2,"disableRipple","disableRipple",p],tabIndex:[2,"tabIndex","tabIndex",o=>o==null?0:K(o)],checked:[2,"checked","checked",p],hideIcon:[2,"hideIcon","hideIcon",p],disabledInteractive:[2,"disabledInteractive","disabledInteractive",p]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[X([{provide:le,useExisting:S(()=>l),multi:!0},{provide:ce,useExisting:l,multi:!0}]),T],ngContentSelectors:ye,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,a){if(i&1&&(A(),e(0,"div",1)(1,"button",2,0),u("click",function(){return a._handleClick()}),f(3,"div",3)(4,"span",4),e(5,"span",5)(6,"span",6)(7,"span",7),f(8,"span",8),t(),e(9,"span",9),f(10,"span",10),t(),D(11,ke,5,0,"span",11),t()()(),e(12,"label",12),u("click",function(be){return be.stopPropagation()}),q(13),t()()),i&2){let n=j(2);_("labelPosition",a.labelPosition),d(),P("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled)("mat-mdc-slide-toggle-disabled-interactive",a.disabledInteractive),_("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("disabled",a.disabled&&!a.disabledInteractive),w("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),d(9),_("matRippleTrigger",n)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),d(),L(a.hideIcon?-1:11),d(),_("for",a.buttonId),w("id",a._labelId)}},dependencies:[ie,ae],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return l})(),fe=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=R({type:l});static \u0275inj=z({imports:[E,Z]})}return l})();var ue=(l,g)=>g.label;function xe(l,g){if(l&1&&(e(0,"div",36)(1,"div",40),r(2),t(),e(3,"div",41),r(4),t()()),l&2){let o=g.$implicit;d(2),b(o.value),d(2),b(o.label)}}function Pe(l,g){if(l&1&&(e(0,"button",39)(1,"div",42)(2,"mat-icon"),r(3),t()(),e(4,"span",43),r(5),t(),e(6,"mat-icon",44),r(7,"chevron_right"),t()()),l&2){let o=g.$implicit;d(),x("background",o.bg),d(),x("color",o.color),d(),b(o.icon),d(2),b(o.label)}}var _e=class l{svc=h(de);snack=h(pe);form={nombre:"Carlos",apellidos:"M\xE9ndez Rodr\xEDguez",correo:"carlos.mendez@vetalis.com",telefono:"+51 987 654 321",especialidad:"Medicina General Veterinaria",dni:"12345678"};passwords={current:"",nuevo:"",confirmar:""};preferences={emailNotifications:!0,smsNotifications:!1,appointmentReminders:!0,systemAlerts:!0,weeklyReport:!1};activityStats=[{value:"247",label:"Consultas realizadas"},{value:"89",label:"Pacientes atendidos"},{value:"4.9",label:"Calificaci\xF3n promedio"},{value:"3 a\xF1os",label:"Tiempo en el sistema"}];quickActions=[{icon:"download",label:"Exportar Datos",color:"#06B6D4",bg:"#E0F2FE"},{icon:"history",label:"Ver Actividad",color:"#8B5CF6",bg:"#EDE9FE"},{icon:"help_outline",label:"Centro de Ayuda",color:"#F59E0B",bg:"#FEF9C3"},{icon:"logout",label:"Cerrar Sesi\xF3n",color:"#EF4444",bg:"#FEE2E2"}];saveProfile(){let g={nombre:this.form.nombre,apellidos:this.form.apellidos,correo:this.form.correo,telefono:this.form.telefono,especialidad:this.form.especialidad,dni:this.form.dni};this.svc.updateVeterinario(1,g).subscribe({next:()=>this.snack.open("Perfil actualizado correctamente","OK",{duration:3e3}),error:()=>this.snack.open("Error al guardar el perfil","",{duration:3e3})})}savePassword(){if(!this.passwords.nuevo||this.passwords.nuevo!==this.passwords.confirmar){this.snack.open("Las contrase\xF1as no coinciden","",{duration:3e3});return}this.snack.open("Contrase\xF1a actualizada","OK",{duration:3e3}),this.passwords={current:"",nuevo:"",confirmar:""}}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=v({type:l,selectors:[["app-profile"]],decls:130,vars:14,consts:[[1,"profile"],[1,"page-header"],[1,"profile-body"],[1,"left-col"],[1,"card","user-hero"],[1,"hero-avatar"],[1,"hero-info"],[1,"hero-name"],[1,"hero-role"],[1,"hero-email"],["mat-stroked-button","",1,"btn-change-photo"],[1,"card","form-card"],[1,"card-title"],[1,"form-grid"],[1,"form-field"],["placeholder","Nombre",3,"ngModelChange","ngModel"],["placeholder","Apellidos",3,"ngModelChange","ngModel"],["type","email","placeholder","correo@ejemplo.com",3,"ngModelChange","ngModel"],["placeholder","+51 000 000 000",3,"ngModelChange","ngModel"],[1,"form-field","form-field--full"],["placeholder","Especialidad",3,"ngModelChange","ngModel"],["placeholder","00000000",3,"ngModelChange","ngModel"],[1,"card-footer"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"form-grid","form-grid--single"],["type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",3,"ngModelChange","ngModel"],[1,"right-col"],[1,"card","pref-card"],[1,"pref-list"],[1,"pref-item"],[1,"pref-label"],[1,"pref-name"],[1,"pref-desc"],["color","primary",3,"ngModelChange","ngModel"],[1,"card","stats-card"],[1,"stats-grid"],[1,"stat-item"],[1,"card","quick-card"],[1,"quick-list"],["mat-button","",1,"quick-item"],[1,"stat-val"],[1,"stat-lbl"],[1,"quick-icon"],[1,"quick-label"],[1,"quick-arrow"]],template:function(o,i){o&1&&(e(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),r(4,"Mi Perfil"),t(),e(5,"p"),r(6,"Gestiona tu informaci\xF3n personal y preferencias"),t()()(),e(7,"div",2)(8,"div",3)(9,"div",4)(10,"div",5)(11,"mat-icon"),r(12,"person"),t()(),e(13,"div",6)(14,"div",7),r(15,"Dr. Carlos M\xE9ndez Rodr\xEDguez"),t(),e(16,"div",8),r(17,"M\xE9dico Veterinario"),t(),e(18,"div",9),r(19,"carlos.mendez@vetalis.com"),t()(),e(20,"button",10)(21,"mat-icon"),r(22,"photo_camera"),t(),r(23," Cambiar Foto"),t()(),e(24,"div",11)(25,"div",12),r(26,"Datos Personales"),t(),e(27,"div",13)(28,"div",14)(29,"label"),r(30,"Nombre"),t(),e(31,"input",15),m("ngModelChange",function(n){return c(i.form.nombre,n)||(i.form.nombre=n),n}),t()(),e(32,"div",14)(33,"label"),r(34,"Apellidos"),t(),e(35,"input",16),m("ngModelChange",function(n){return c(i.form.apellidos,n)||(i.form.apellidos=n),n}),t()(),e(36,"div",14)(37,"label"),r(38,"Correo Electr\xF3nico"),t(),e(39,"input",17),m("ngModelChange",function(n){return c(i.form.correo,n)||(i.form.correo=n),n}),t()(),e(40,"div",14)(41,"label"),r(42,"Tel\xE9fono"),t(),e(43,"input",18),m("ngModelChange",function(n){return c(i.form.telefono,n)||(i.form.telefono=n),n}),t()(),e(44,"div",19)(45,"label"),r(46,"Especialidad"),t(),e(47,"input",20),m("ngModelChange",function(n){return c(i.form.especialidad,n)||(i.form.especialidad=n),n}),t()(),e(48,"div",14)(49,"label"),r(50,"DNI / Documento"),t(),e(51,"input",21),m("ngModelChange",function(n){return c(i.form.dni,n)||(i.form.dni=n),n}),t()()(),e(52,"div",22)(53,"button",23),u("click",function(){return i.saveProfile()}),e(54,"mat-icon"),r(55,"save"),t(),r(56," Guardar Cambios"),t()()(),e(57,"div",11)(58,"div",12),r(59,"Seguridad"),t(),e(60,"div",24)(61,"div",14)(62,"label"),r(63,"Contrase\xF1a Actual"),t(),e(64,"input",25),m("ngModelChange",function(n){return c(i.passwords.current,n)||(i.passwords.current=n),n}),t()(),e(65,"div",14)(66,"label"),r(67,"Nueva Contrase\xF1a"),t(),e(68,"input",25),m("ngModelChange",function(n){return c(i.passwords.nuevo,n)||(i.passwords.nuevo=n),n}),t()(),e(69,"div",14)(70,"label"),r(71,"Confirmar Nueva Contrase\xF1a"),t(),e(72,"input",25),m("ngModelChange",function(n){return c(i.passwords.confirmar,n)||(i.passwords.confirmar=n),n}),t()()(),e(73,"div",22)(74,"button",23),u("click",function(){return i.savePassword()}),e(75,"mat-icon"),r(76,"lock"),t(),r(77," Actualizar Contrase\xF1a"),t()()()(),e(78,"div",26)(79,"div",27)(80,"div",12),r(81,"Preferencias"),t(),e(82,"div",28)(83,"div",29)(84,"div",30)(85,"div",31),r(86,"Notificaciones por Email"),t(),e(87,"div",32),r(88,"Recibe alertas y recordatorios por correo"),t()(),e(89,"mat-slide-toggle",33),m("ngModelChange",function(n){return c(i.preferences.emailNotifications,n)||(i.preferences.emailNotifications=n),n}),t()(),e(90,"div",29)(91,"div",30)(92,"div",31),r(93,"Notificaciones SMS"),t(),e(94,"div",32),r(95,"Alertas por mensaje de texto"),t()(),e(96,"mat-slide-toggle",33),m("ngModelChange",function(n){return c(i.preferences.smsNotifications,n)||(i.preferences.smsNotifications=n),n}),t()(),e(97,"div",29)(98,"div",30)(99,"div",31),r(100,"Recordatorios de Citas"),t(),e(101,"div",32),r(102,"Avisos antes de cada consulta programada"),t()(),e(103,"mat-slide-toggle",33),m("ngModelChange",function(n){return c(i.preferences.appointmentReminders,n)||(i.preferences.appointmentReminders=n),n}),t()(),e(104,"div",29)(105,"div",30)(106,"div",31),r(107,"Alertas del Sistema"),t(),e(108,"div",32),r(109,"Notificaciones cr\xEDticas del sistema"),t()(),e(110,"mat-slide-toggle",33),m("ngModelChange",function(n){return c(i.preferences.systemAlerts,n)||(i.preferences.systemAlerts=n),n}),t()(),e(111,"div",29)(112,"div",30)(113,"div",31),r(114,"Reporte Semanal"),t(),e(115,"div",32),r(116,"Resumen de actividad semanal"),t()(),e(117,"mat-slide-toggle",33),m("ngModelChange",function(n){return c(i.preferences.weeklyReport,n)||(i.preferences.weeklyReport=n),n}),t()()()(),e(118,"div",34)(119,"div",12),r(120,"Tu Actividad"),t(),e(121,"div",35),M(122,xe,5,2,"div",36,ue),t()(),e(124,"div",37)(125,"div",12),r(126,"Acciones R\xE1pidas"),t(),e(127,"div",38),M(128,Pe,8,6,"button",39,ue),t()()()()()),o&2&&(d(31),s("ngModel",i.form.nombre),d(4),s("ngModel",i.form.apellidos),d(4),s("ngModel",i.form.correo),d(4),s("ngModel",i.form.telefono),d(4),s("ngModel",i.form.especialidad),d(4),s("ngModel",i.form.dni),d(13),s("ngModel",i.passwords.current),d(4),s("ngModel",i.passwords.nuevo),d(4),s("ngModel",i.passwords.confirmar),d(17),s("ngModel",i.preferences.emailNotifications),d(7),s("ngModel",i.preferences.smsNotifications),d(7),s("ngModel",i.preferences.appointmentReminders),d(7),s("ngModel",i.preferences.systemAlerts),d(7),s("ngModel",i.preferences.weeklyReport),d(5),C(i.activityStats),d(6),C(i.quickActions))},dependencies:[he,se,me,ge,J,Y,re,oe,fe,E],styles:[".profile[_ngcontent-%COMP%]{min-height:100%}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.profile-body[_ngcontent-%COMP%]{padding:24px 28px;display:grid;grid-template-columns:1fr 380px;gap:20px;align-items:start}.left-col[_ngcontent-%COMP%], .right-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f}.user-hero[_ngcontent-%COMP%]{padding:24px 20px;display:flex;align-items:center;gap:16px}.hero-avatar[_ngcontent-%COMP%]{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#0284c7);display:flex;align-items:center;justify-content:center;flex-shrink:0}.hero-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:34px;width:34px;height:34px}.hero-info[_ngcontent-%COMP%]{flex:1}.hero-name[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e293b;margin-bottom:2px}.hero-role[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:2px}.hero-email[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.btn-change-photo[_ngcontent-%COMP%]{color:#475569!important;font-size:13px!important;border-radius:8px!important}.form-card[_ngcontent-%COMP%]{padding:20px}.card-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-grid--single[_ngcontent-%COMP%]{grid-template-columns:1fr}.form-field--full[_ngcontent-%COMP%]{grid-column:1 / -1}.form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:#475569}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:9px 12px;font-size:13px;outline:none;color:#1e293b;background:#fff;transition:border-color .15s}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#06b6d4}.card-footer[_ngcontent-%COMP%]{margin-top:16px;display:flex;justify-content:flex-end}.pref-card[_ngcontent-%COMP%]{padding:20px}.pref-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.pref-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid #F1F5F9}.pref-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.pref-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b;margin-bottom:2px}.pref-desc[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.stats-card[_ngcontent-%COMP%]{padding:20px}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:12px}.stat-item[_ngcontent-%COMP%]{background:#f8fafc;border-radius:10px;padding:14px;text-align:center}.stat-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b;margin-bottom:4px}.stat-lbl[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.quick-card[_ngcontent-%COMP%]{padding:20px}.quick-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.quick-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:10px 8px!important;border-radius:8px!important;cursor:pointer}.quick-item[_ngcontent-%COMP%]:hover{background:#f8fafc}.quick-icon[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.quick-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.quick-label[_ngcontent-%COMP%]{flex:1;font-size:13px;color:#1e293b;font-weight:500}.quick-arrow[_ngcontent-%COMP%]{color:#cbd5e1!important;font-size:18px!important}"]})};export{_e as Profile};
