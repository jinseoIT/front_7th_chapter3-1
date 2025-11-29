import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as a}from"./Label-CWNEERrL.js";import"./iframe-BSnAbuZu.js";import"./preload-helper-DoRU6K4M.js";import"./index-Bbt59Eh3.js";import"./index-CVVP2cso.js";import"./clsx-B-dksMZM.js";const h={title:"UI/Label",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Label text"}}},s={args:{children:"Default Label"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"input-example",children:"Email Address"}),e.jsx("input",{id:"input-example",type:"email",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"user@example.com"})]})},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(a,{htmlFor:"required-input",children:["Username ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{id:"required-input",type:"text",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"Enter username",required:!0})]})},t={render:()=>e.jsxs("div",{className:"group","data-disabled":"true",children:[e.jsx(a,{htmlFor:"disabled-input",children:"Disabled Field"}),e.jsx("input",{id:"disabled-input",type:"text",className:"w-full px-2 py-2 text-base border rounded-sm bg-white opacity-50",placeholder:"Cannot edit",disabled:!0})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"help-input",children:"Password"}),e.jsx("input",{id:"help-input",type:"password",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"Enter password"}),e.jsx("span",{className:"text-sm text-gray-500",children:"Must be at least 8 characters"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"first-name",children:"First Name"}),e.jsx("input",{id:"first-name",type:"text",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"John"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"last-name",children:"Last Name"}),e.jsx("input",{id:"last-name",type:"text",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"Doe"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"email-field",children:"Email"}),e.jsx("input",{id:"email-field",type:"email",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"john@example.com"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default Label"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="input-example">Email Address</Label>
      <input id="input-example" type="email" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="user@example.com" />
    </div>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="required-input">
        Username <span className="text-red-500">*</span>
      </Label>
      <input id="required-input" type="text" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="Enter username" required />
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="group" data-disabled="true">
      <Label htmlFor="disabled-input">Disabled Field</Label>
      <input id="disabled-input" type="text" className="w-full px-2 py-2 text-base border rounded-sm bg-white opacity-50" placeholder="Cannot edit" disabled />
    </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="help-input">Password</Label>
      <input id="help-input" type="password" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="Enter password" />
      <span className="text-sm text-gray-500">
        Must be at least 8 characters
      </span>
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-2">
        <Label htmlFor="first-name">First Name</Label>
        <input id="first-name" type="text" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="John" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="last-name">Last Name</Label>
        <input id="last-name" type="text" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="Doe" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-field">Email</Label>
        <input id="email-field" type="email" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="john@example.com" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const b=["Default","WithInput","Required","Disabled","WithHelpText","MultipleFields"];export{s as Default,t as Disabled,i as MultipleFields,r as Required,d as WithHelpText,l as WithInput,b as __namedExportsOrder,h as default};
