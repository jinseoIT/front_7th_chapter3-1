import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Button-BJAFUK_q.js";import"./iframe-BSnAbuZu.js";import"./preload-helper-DoRU6K4M.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";const S={title:"UI/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","success"],description:"Button variant"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},fullWidth:{control:"boolean",description:"Full width button"},disabled:{control:"boolean",description:"Disabled state"},children:{control:"text",description:"Button content"}}},e={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},t={args:{variant:"danger",children:"Danger Button"}},s={args:{variant:"success",children:"Success Button"}},o={args:{variant:"primary",size:"sm",children:"Small Button"}},i={args:{variant:"primary",size:"md",children:"Medium Button"}},c={args:{variant:"primary",size:"lg",children:"Large Button"}},d={args:{variant:"primary",children:"Disabled Button",disabled:!0}},l={args:{variant:"primary",children:"Full Width Button",fullWidth:!0},parameters:{layout:"padded"}},u={render:()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(a,{variant:"primary",children:"Primary Button"}),r.jsx(a,{variant:"secondary",children:"Secondary Button"}),r.jsx(a,{variant:"danger",children:"Danger Button"}),r.jsx(a,{variant:"success",children:"Success Button"})]}),parameters:{layout:"padded"}},m={render:()=>r.jsxs("div",{className:"flex items-end gap-4",children:[r.jsx(a,{size:"sm",children:"Small"}),r.jsx(a,{size:"md",children:"Medium"}),r.jsx(a,{size:"lg",children:"Large"})]}),parameters:{layout:"padded"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Danger Button"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Success Button"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    children: "Small Button"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Medium Button"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    children: "Large Button"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Full Width Button",
    fullWidth: true
  },
  parameters: {
    layout: "padded"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="success">Success Button</Button>
    </div>,
  parameters: {
    layout: "padded"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>,
  parameters: {
    layout: "padded"
  }
}`,...m.parameters?.docs?.source}}};const x=["Primary","Secondary","Danger","Success","Small","Medium","Large","Disabled","FullWidth","AllVariants","AllSizes"];export{m as AllSizes,u as AllVariants,t as Danger,d as Disabled,l as FullWidth,c as Large,i as Medium,e as Primary,n as Secondary,o as Small,s as Success,x as __namedExportsOrder,S as default};
