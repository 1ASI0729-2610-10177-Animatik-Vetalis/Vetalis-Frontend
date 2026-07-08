import{a as he}from"./chunk-HR7APNOM.js";import{b as te,h as ie}from"./chunk-R7MKKQDX.js";import{a as xe}from"./chunk-6BR6OEDR.js";import{u as Me}from"./chunk-AX2M7PYS.js";import{a as fe,b as ue,c as _e,f as be,i as ve,t as we}from"./chunk-MMD4IOQX.js";import"./chunk-LGPXEZYI.js";import{b as ye,c as ke}from"./chunk-YM22UJRH.js";import{D as pe,E as ge,e as se,j as ce,u as me}from"./chunk-7VA2QFRS.js";import{A as le,B as de,s as ne,t as ae,v as re,z as oe}from"./chunk-22EV46V7.js";import{$b as x,Ab as e,Ac as $,Bb as t,Cb as w,Dc as v,Ec as ee,Gb as V,Hb as K,Kb as b,Mb as j,Nb as X,Pb as G,Qa as a,Qb as Q,Rb as H,U as z,Vb as U,W as B,Wb as E,Xb as I,Y as D,Yb as Z,Zb as l,_ as f,_b as c,da as T,db as y,dc as p,ea as W,eb as A,ec as g,fa as R,fc as h,ic as Y,ka as C,mc as d,nc as s,sb as k,ta as q,tb as F,ub as N,wa as L,wc as J,xb as P,yb as S,zb as _}from"./chunk-5EIMU4SB.js";var Oe=["switch"],ze=["*"];function Be(m,u){m&1&&(e(0,"span",11),R(),e(1,"svg",13),w(2,"path",14),t(),e(3,"svg",15),w(4,"path",16),t()())}var De=new D("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),M=class{source;checked;constructor(u,o){this.source=u,this.checked=o}},O=(()=>{class m{_elementRef=f(L);_focusMonitor=f(ce);_changeDetectorRef=f($);defaults=f(De);_onChange=o=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(o){return new M(this,o)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=se();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(o){this._checked=o,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new C;toggleChange=new C;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){f(re).load(ge);let o=f(new J("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=o==null?0:parseInt(o)||0,this.color=i.color||"accent",this.id=this._uniqueId=f(me).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(o=>{o==="keyboard"||o==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):o||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(o){o.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(o){this.checked=!!o}registerOnChange(o){this._onChange=o}registerOnTouched(o){this._onTouched=o}validate(o){return this.required&&o.value!==!0?{required:!0}:null}registerOnValidatorChange(o){this._validatorOnChange=o}setDisabledState(o){this.disabled=o,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new M(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||m)};static \u0275cmp=y({type:m,selectors:[["mat-slide-toggle"]],viewQuery:function(i,r){if(i&1&&G(Oe,5),i&2){let n;Q(n=H())&&(r._switchElement=n.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,r){i&2&&(K("id",r.id),k("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Z(r.color?"mat-"+r.color:""),I("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",v],color:"color",disabled:[2,"disabled","disabled",v],disableRipple:[2,"disableRipple","disableRipple",v],tabIndex:[2,"tabIndex","tabIndex",o=>o==null?0:ee(o)],checked:[2,"checked","checked",v],hideIcon:[2,"hideIcon","hideIcon",v],disabledInteractive:[2,"disabledInteractive","disabledInteractive",v]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Y([{provide:fe,useExisting:z(()=>m),multi:!0},{provide:_e,useExisting:m,multi:!0}]),q],ngContentSelectors:ze,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,r){if(i&1&&(j(),e(0,"div",1)(1,"button",2,0),b("click",function(){return r._handleClick()}),w(3,"div",3)(4,"span",4),e(5,"span",5)(6,"span",6)(7,"span",7),w(8,"span",8),t(),e(9,"span",9),w(10,"span",10),t(),F(11,Be,5,0,"span",11),t()()(),e(12,"label",12),b("click",function(Ee){return Ee.stopPropagation()}),X(13),t()()),i&2){let n=U(2);_("labelPosition",r.labelPosition),a(),I("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),_("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),k("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),a(9),_("matRippleTrigger",n)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),a(),N(r.hideIcon?-1:11),a(),_("for",r.buttonId),k("id",r._labelId)}},dependencies:[pe,he],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return m})(),Ce=(()=>{class m{static \u0275fac=function(i){return new(i||m)};static \u0275mod=A({type:m});static \u0275inj=B({imports:[O,oe]})}return m})();var Pe=(m,u)=>u.labelKey;function We(m,u){if(m&1&&(e(0,"div",32)(1,"div",36),l(2),t(),e(3,"div",37),l(4),d(5,"translate"),t()()),m&2){let o=u.$implicit;a(2),c(o.value),a(2),c(s(5,2,o.labelKey))}}function Re(m,u){if(m&1){let o=V();e(0,"button",38),b("click",function(){let r=T(o).$implicit;return W(r.action&&r.action())}),e(1,"div",39)(2,"mat-icon"),l(3),t()(),e(4,"span",40),l(5),d(6,"translate"),t(),e(7,"mat-icon",41),l(8,"chevron_right"),t()()}if(m&2){let o=u.$implicit;a(),E("background",o.bg),a(),E("color",o.color),a(),c(o.icon),a(2),c(s(6,6,o.labelKey))}}var Se=class m{svc=f(xe);snack=f(Me);translate=f(ne);auth=f(ie);router=f(te);form={nombre:"Carlos",apellidos:"M\xE9ndez Rodr\xEDguez",correo:"carlos.mendez@vetalis.com",telefono:"+51 987 654 321",especialidad:"Medicina General Veterinaria",dni:"12345678"};passwords={current:"",nuevo:"",confirmar:""};preferences={emailNotifications:!0,smsNotifications:!1,appointmentReminders:!0,systemAlerts:!0,weeklyReport:!1};activityStats=[{value:"247",labelKey:"profile.activity.consultations"},{value:"89",labelKey:"profile.activity.patients"},{value:"4.9",labelKey:"profile.activity.rating"},{value:"3 a\xF1os",labelKey:"profile.activity.time"}];quickActions=[{icon:"download",labelKey:"profile.quickActions.exportData",color:"#06B6D4",bg:"#E0F2FE"},{icon:"history",labelKey:"profile.quickActions.viewActivity",color:"#8B5CF6",bg:"#EDE9FE"},{icon:"help_outline",labelKey:"profile.quickActions.helpCenter",color:"#F59E0B",bg:"#FEF9C3"},{icon:"logout",labelKey:"profile.quickActions.logout",color:"#EF4444",bg:"#FEE2E2",action:()=>this.logout()}];logout(){this.auth.logout(),this.router.navigate(["/login"])}saveProfile(){let u={nombre:this.form.nombre,apellidos:this.form.apellidos,correo:this.form.correo,telefono:this.form.telefono,especialidad:this.form.especialidad,dni:this.form.dni};this.svc.updateVeterinario(1,u).subscribe({next:()=>this.snack.open(this.translate.instant("profile.messages.profileSaved"),"OK",{duration:3e3}),error:()=>this.snack.open(this.translate.instant("profile.messages.profileError"),"",{duration:3e3})})}savePassword(){if(!this.passwords.nuevo||this.passwords.nuevo!==this.passwords.confirmar){this.snack.open(this.translate.instant("profile.messages.passwordMismatch"),"",{duration:3e3});return}this.snack.open(this.translate.instant("profile.messages.passwordUpdated"),"OK",{duration:3e3}),this.passwords={current:"",nuevo:"",confirmar:""}}static \u0275fac=function(o){return new(o||m)};static \u0275cmp=y({type:m,selectors:[["app-profile"]],decls:166,vars:122,consts:[[1,"profile"],[1,"page-header"],[1,"profile-body"],[1,"left-col"],[1,"card","user-hero"],[1,"hero-avatar"],[1,"hero-info"],[1,"hero-name"],[1,"hero-role"],[1,"hero-email"],["mat-stroked-button","",1,"btn-change-photo"],[1,"card","form-card"],[1,"card-title"],[1,"form-grid"],[1,"form-field"],[3,"ngModelChange","ngModel","placeholder"],["type","email",3,"ngModelChange","ngModel","placeholder"],[1,"form-field","form-field--full"],[1,"card-footer"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"form-grid","form-grid--single"],["type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",3,"ngModelChange","ngModel"],[1,"right-col"],[1,"card","pref-card"],[1,"pref-list"],[1,"pref-item"],[1,"pref-label"],[1,"pref-name"],[1,"pref-desc"],["color","primary",3,"ngModelChange","ngModel"],[1,"card","stats-card"],[1,"stats-grid"],[1,"stat-item"],[1,"card","quick-card"],[1,"quick-list"],["type","button",1,"quick-item"],[1,"stat-val"],[1,"stat-lbl"],["type","button",1,"quick-item",3,"click"],[1,"quick-icon"],[1,"quick-label"],[1,"quick-arrow"]],template:function(o,i){o&1&&(e(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),l(4),d(5,"translate"),t(),e(6,"p"),l(7),d(8,"translate"),t()()(),e(9,"div",2)(10,"div",3)(11,"div",4)(12,"div",5)(13,"mat-icon"),l(14,"person"),t()(),e(15,"div",6)(16,"div",7),l(17,"Dr. Carlos M\xE9ndez Rodr\xEDguez"),t(),e(18,"div",8),l(19),d(20,"translate"),t(),e(21,"div",9),l(22,"carlos.mendez@vetalis.com"),t()(),e(23,"button",10)(24,"mat-icon"),l(25,"photo_camera"),t(),l(26),d(27,"translate"),t()(),e(28,"div",11)(29,"div",12),l(30),d(31,"translate"),t(),e(32,"div",13)(33,"div",14)(34,"label"),l(35),d(36,"translate"),t(),e(37,"input",15),d(38,"translate"),h("ngModelChange",function(n){return g(i.form.nombre,n)||(i.form.nombre=n),n}),t()(),e(39,"div",14)(40,"label"),l(41),d(42,"translate"),t(),e(43,"input",15),d(44,"translate"),h("ngModelChange",function(n){return g(i.form.apellidos,n)||(i.form.apellidos=n),n}),t()(),e(45,"div",14)(46,"label"),l(47),d(48,"translate"),t(),e(49,"input",16),d(50,"translate"),h("ngModelChange",function(n){return g(i.form.correo,n)||(i.form.correo=n),n}),t()(),e(51,"div",14)(52,"label"),l(53),d(54,"translate"),t(),e(55,"input",15),d(56,"translate"),h("ngModelChange",function(n){return g(i.form.telefono,n)||(i.form.telefono=n),n}),t()(),e(57,"div",17)(58,"label"),l(59),d(60,"translate"),t(),e(61,"input",15),d(62,"translate"),h("ngModelChange",function(n){return g(i.form.especialidad,n)||(i.form.especialidad=n),n}),t()(),e(63,"div",14)(64,"label"),l(65),d(66,"translate"),t(),e(67,"input",15),d(68,"translate"),h("ngModelChange",function(n){return g(i.form.dni,n)||(i.form.dni=n),n}),t()()(),e(69,"div",18)(70,"button",19),b("click",function(){return i.saveProfile()}),e(71,"mat-icon"),l(72,"save"),t(),l(73),d(74,"translate"),t()()(),e(75,"div",11)(76,"div",12),l(77),d(78,"translate"),t(),e(79,"div",20)(80,"div",14)(81,"label"),l(82),d(83,"translate"),t(),e(84,"input",21),h("ngModelChange",function(n){return g(i.passwords.current,n)||(i.passwords.current=n),n}),t()(),e(85,"div",14)(86,"label"),l(87),d(88,"translate"),t(),e(89,"input",21),h("ngModelChange",function(n){return g(i.passwords.nuevo,n)||(i.passwords.nuevo=n),n}),t()(),e(90,"div",14)(91,"label"),l(92),d(93,"translate"),t(),e(94,"input",21),h("ngModelChange",function(n){return g(i.passwords.confirmar,n)||(i.passwords.confirmar=n),n}),t()()(),e(95,"div",18)(96,"button",19),b("click",function(){return i.savePassword()}),e(97,"mat-icon"),l(98,"lock"),t(),l(99),d(100,"translate"),t()()()(),e(101,"div",22)(102,"div",23)(103,"div",12),l(104),d(105,"translate"),t(),e(106,"div",24)(107,"div",25)(108,"div",26)(109,"div",27),l(110),d(111,"translate"),t(),e(112,"div",28),l(113),d(114,"translate"),t()(),e(115,"mat-slide-toggle",29),h("ngModelChange",function(n){return g(i.preferences.emailNotifications,n)||(i.preferences.emailNotifications=n),n}),t()(),e(116,"div",25)(117,"div",26)(118,"div",27),l(119),d(120,"translate"),t(),e(121,"div",28),l(122),d(123,"translate"),t()(),e(124,"mat-slide-toggle",29),h("ngModelChange",function(n){return g(i.preferences.smsNotifications,n)||(i.preferences.smsNotifications=n),n}),t()(),e(125,"div",25)(126,"div",26)(127,"div",27),l(128),d(129,"translate"),t(),e(130,"div",28),l(131),d(132,"translate"),t()(),e(133,"mat-slide-toggle",29),h("ngModelChange",function(n){return g(i.preferences.appointmentReminders,n)||(i.preferences.appointmentReminders=n),n}),t()(),e(134,"div",25)(135,"div",26)(136,"div",27),l(137),d(138,"translate"),t(),e(139,"div",28),l(140),d(141,"translate"),t()(),e(142,"mat-slide-toggle",29),h("ngModelChange",function(n){return g(i.preferences.systemAlerts,n)||(i.preferences.systemAlerts=n),n}),t()(),e(143,"div",25)(144,"div",26)(145,"div",27),l(146),d(147,"translate"),t(),e(148,"div",28),l(149),d(150,"translate"),t()(),e(151,"mat-slide-toggle",29),h("ngModelChange",function(n){return g(i.preferences.weeklyReport,n)||(i.preferences.weeklyReport=n),n}),t()()()(),e(152,"div",30)(153,"div",12),l(154),d(155,"translate"),t(),e(156,"div",31),P(157,We,6,4,"div",32,Pe),t()(),e(159,"div",33)(160,"div",12),l(161),d(162,"translate"),t(),e(163,"div",34),P(164,Re,9,8,"button",35,Pe),t()()()()()),o&2&&(a(4),c(s(5,50,"profile.title")),a(3),c(s(8,52,"profile.subtitle")),a(12),c(s(20,54,"profile.role")),a(7),x(" ",s(27,56,"profile.changePhoto")," "),a(4),c(s(31,58,"profile.personalData.title")),a(5),c(s(36,60,"profile.personalData.name")),a(2),p("ngModel",i.form.nombre),_("placeholder",s(38,62,"profile.personalData.namePlaceholder")),a(4),c(s(42,64,"profile.personalData.lastName")),a(2),p("ngModel",i.form.apellidos),_("placeholder",s(44,66,"profile.personalData.lastNamePlaceholder")),a(4),c(s(48,68,"profile.personalData.email")),a(2),p("ngModel",i.form.correo),_("placeholder",s(50,70,"profile.personalData.emailPlaceholder")),a(4),c(s(54,72,"profile.personalData.phone")),a(2),p("ngModel",i.form.telefono),_("placeholder",s(56,74,"profile.personalData.phonePlaceholder")),a(4),c(s(60,76,"profile.personalData.specialty")),a(2),p("ngModel",i.form.especialidad),_("placeholder",s(62,78,"profile.personalData.specialtyPlaceholder")),a(4),c(s(66,80,"profile.personalData.document")),a(2),p("ngModel",i.form.dni),_("placeholder",s(68,82,"profile.personalData.documentPlaceholder")),a(6),x(" ",s(74,84,"profile.personalData.save")," "),a(4),c(s(78,86,"profile.security.title")),a(5),c(s(83,88,"profile.security.currentPassword")),a(2),p("ngModel",i.passwords.current),a(3),c(s(88,90,"profile.security.newPassword")),a(2),p("ngModel",i.passwords.nuevo),a(3),c(s(93,92,"profile.security.confirmPassword")),a(2),p("ngModel",i.passwords.confirmar),a(5),x(" ",s(100,94,"profile.security.update")," "),a(5),c(s(105,96,"profile.preferences.title")),a(6),c(s(111,98,"profile.preferences.emailNotifications")),a(3),c(s(114,100,"profile.preferences.emailNotificationsDesc")),a(2),p("ngModel",i.preferences.emailNotifications),a(4),c(s(120,102,"profile.preferences.smsNotifications")),a(3),c(s(123,104,"profile.preferences.smsNotificationsDesc")),a(2),p("ngModel",i.preferences.smsNotifications),a(4),c(s(129,106,"profile.preferences.appointmentReminders")),a(3),c(s(132,108,"profile.preferences.appointmentRemindersDesc")),a(2),p("ngModel",i.preferences.appointmentReminders),a(4),c(s(138,110,"profile.preferences.systemAlerts")),a(3),c(s(141,112,"profile.preferences.systemAlertsDesc")),a(2),p("ngModel",i.preferences.systemAlerts),a(4),c(s(147,114,"profile.preferences.weeklyReport")),a(3),c(s(150,116,"profile.preferences.weeklyReportDesc")),a(2),p("ngModel",i.preferences.weeklyReport),a(3),c(s(155,118,"profile.activity.title")),a(3),S(i.activityStats),a(4),c(s(162,120,"profile.quickActions.title")),a(3),S(i.quickActions))},dependencies:[we,ue,be,ve,de,le,ke,ye,Ce,O,ae],styles:[".profile[_ngcontent-%COMP%]{min-height:100%}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#fff;border-bottom:1px solid #E2E8F0}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0 0 3px;color:#1e293b}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:0}.btn-primary[_ngcontent-%COMP%]{background:#06b6d4!important;color:#fff!important;font-weight:500!important;border-radius:8px!important}.profile-body[_ngcontent-%COMP%]{padding:24px 28px;display:grid;grid-template-columns:1fr 380px;gap:20px;align-items:start}.left-col[_ngcontent-%COMP%], .right-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 1px 3px #0000000f}.user-hero[_ngcontent-%COMP%]{padding:24px 20px;display:flex;align-items:center;gap:16px}.hero-avatar[_ngcontent-%COMP%]{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#0284c7);display:flex;align-items:center;justify-content:center;flex-shrink:0}.hero-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:34px;width:34px;height:34px}.hero-info[_ngcontent-%COMP%]{flex:1}.hero-name[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e293b;margin-bottom:2px}.hero-role[_ngcontent-%COMP%]{font-size:13px;color:#64748b;margin-bottom:2px}.hero-email[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.btn-change-photo[_ngcontent-%COMP%]{color:#475569!important;font-size:13px!important;border-radius:8px!important}.form-card[_ngcontent-%COMP%]{padding:20px}.card-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:16px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-grid--single[_ngcontent-%COMP%]{grid-template-columns:1fr}.form-field--full[_ngcontent-%COMP%]{grid-column:1 / -1}.form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:#475569}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #E2E8F0;border-radius:8px;padding:9px 12px;font-size:13px;outline:none;color:#1e293b;background:#fff;transition:border-color .15s}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#06b6d4}.card-footer[_ngcontent-%COMP%]{margin-top:16px;display:flex;justify-content:flex-end}.pref-card[_ngcontent-%COMP%]{padding:20px}.pref-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.pref-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid #F1F5F9}.pref-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.pref-name[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1e293b;margin-bottom:2px}.pref-desc[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.stats-card[_ngcontent-%COMP%]{padding:20px}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:12px}.stat-item[_ngcontent-%COMP%]{background:#f8fafc;border-radius:10px;padding:14px;text-align:center}.stat-val[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#1e293b;margin-bottom:4px}.stat-lbl[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8}.quick-card[_ngcontent-%COMP%]{padding:20px}.quick-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.quick-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:10px 8px;border-radius:8px;cursor:pointer;background:transparent;border:none;outline:none;font-family:inherit;transition:background .15s}.quick-item[_ngcontent-%COMP%]:hover{background:#f8fafc}.quick-icon[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.quick-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.quick-label[_ngcontent-%COMP%]{flex:1;font-size:13px;color:#1e293b;font-weight:500}.quick-arrow[_ngcontent-%COMP%]{color:#cbd5e1;font-size:18px;width:18px;height:18px;flex-shrink:0}"]})};export{Se as Profile};
