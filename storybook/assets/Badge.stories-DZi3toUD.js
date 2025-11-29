import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Badge-DFHGS-C-.js";import"./iframe-BSnAbuZu.js";import"./preload-helper-DoRU6K4M.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";const j={title:"UI/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","info"],description:"Badge variant"},size:{control:"select",options:["small","medium","large"],description:"Badge size"},pill:{control:"boolean",description:"Pill style (rounded)"},children:{control:"text",description:"Badge content"}}},e={args:{variant:"primary",children:"Primary"}},n={args:{variant:"secondary",children:"Secondary"}},s={args:{variant:"success",children:"Success"}},i={args:{variant:"danger",children:"Danger"}},c={args:{variant:"warning",children:"Warning"}},d={args:{variant:"info",children:"Info"}},t={args:{variant:"primary",size:"small",children:"Small"}},l={args:{variant:"primary",size:"medium",children:"Medium"}},o={args:{variant:"primary",size:"large",children:"Large"}},m={args:{variant:"primary",pill:!0,children:"Pill Badge"}},p={render:()=>a.jsxs("div",{className:"flex gap-2 flex-wrap",children:[a.jsx(r,{variant:"primary",children:"Primary"}),a.jsx(r,{variant:"secondary",children:"Secondary"}),a.jsx(r,{variant:"success",children:"Success"}),a.jsx(r,{variant:"danger",children:"Danger"}),a.jsx(r,{variant:"warning",children:"Warning"}),a.jsx(r,{variant:"info",children:"Info"})]})},g={render:()=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(r,{size:"small",children:"Small"}),a.jsx(r,{size:"medium",children:"Medium"}),a.jsx(r,{size:"large",children:"Large"})]})},u={render:()=>a.jsxs("div",{className:"flex gap-2 flex-wrap",children:[a.jsx(r,{variant:"primary",pill:!0,children:"Primary"}),a.jsx(r,{variant:"secondary",pill:!0,children:"Secondary"}),a.jsx(r,{variant:"success",pill:!0,children:"Success"}),a.jsx(r,{variant:"danger",pill:!0,children:"Danger"}),a.jsx(r,{variant:"warning",pill:!0,children:"Warning"}),a.jsx(r,{variant:"info",pill:!0,children:"Info"})]})},v={render:()=>a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{children:"Messages"}),a.jsx(r,{variant:"danger",pill:!0,children:"5"})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{children:"Notifications"}),a.jsx(r,{variant:"info",pill:!0,children:"12"})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{children:"New"}),a.jsx(r,{variant:"success",pill:!0,children:"3"})]})]}),parameters:{layout:"padded"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Success"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Danger"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Warning"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "Info"
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "Small"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "Medium"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "Large"
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    pill: true,
    children: "Pill Badge"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap">
      <Badge variant="primary" pill>Primary</Badge>
      <Badge variant="secondary" pill>Secondary</Badge>
      <Badge variant="success" pill>Success</Badge>
      <Badge variant="danger" pill>Danger</Badge>
      <Badge variant="warning" pill>Warning</Badge>
      <Badge variant="info" pill>Info</Badge>
    </div>
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <div className="flex items-center gap-2">
        <span>Messages</span>
        <Badge variant="danger" pill>5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Notifications</span>
        <Badge variant="info" pill>12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>New</span>
        <Badge variant="success" pill>3</Badge>
      </div>
    </div>,
  parameters: {
    layout: "padded"
  }
}`,...v.parameters?.docs?.source}}};const N=["Primary","Secondary","Success","Danger","Warning","Info","Small","Medium","Large","PillStyle","AllVariants","AllSizes","PillVariants","WithNumbers"];export{g as AllSizes,p as AllVariants,i as Danger,d as Info,o as Large,l as Medium,m as PillStyle,u as PillVariants,e as Primary,n as Secondary,t as Small,s as Success,c as Warning,v as WithNumbers,N as __namedExportsOrder,j as default};
