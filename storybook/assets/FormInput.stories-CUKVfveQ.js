import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as t}from"./FormInput-CMNuvZl5.js";import{r as I}from"./iframe-BSnAbuZu.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./Form-C8ZAiCyN.js";import"./Label-CWNEERrL.js";import"./index-Bbt59Eh3.js";import"./index-CVVP2cso.js";import"./preload-helper-DoRU6K4M.js";const M={title:"UI/FormInput",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","url"],description:"Input type"},width:{control:"select",options:["small","medium","large","full"],description:"Input width"},required:{control:"boolean",description:"Required field"},disabled:{control:"boolean",description:"Disabled state"}}},a=e=>{const[s,l]=I.useState(e.value||"");return r.jsx(t,{...e,value:s,onChange:l})},o={render:e=>r.jsx(a,{...e}),args:{name:"default",label:"Default Input",placeholder:"Enter text..."}},m={render:e=>r.jsx(a,{...e}),args:{name:"with-value",label:"Input with Value",value:"Pre-filled value"}},p={render:e=>r.jsx(a,{...e}),args:{name:"required",label:"Required Field",required:!0,placeholder:"This field is required"}},d={render:e=>r.jsx(a,{...e}),args:{name:"error",label:"Input with Error",error:"This field is required",value:""}},u={render:e=>r.jsx(a,{...e}),args:{name:"help",label:"Input with Help Text",helpText:"Enter your full name as it appears on your ID"}},i={render:e=>r.jsx(a,{...e}),args:{name:"disabled",label:"Disabled Input",value:"Cannot edit this",disabled:!0}},c={render:e=>r.jsx(a,{...e}),args:{name:"email",type:"email",label:"Email Address",placeholder:"user@example.com"}},g={render:e=>r.jsx(a,{...e}),args:{name:"password",type:"password",label:"Password",placeholder:"Enter your password"}},h={render:e=>r.jsx(a,{...e}),args:{name:"number",type:"number",label:"Age",placeholder:"Enter your age"}},b={render:e=>r.jsx(a,{...e}),args:{name:"url",type:"url",label:"Website",placeholder:"https://example.com"}},x={render:e=>r.jsx(a,{...e}),args:{name:"small",label:"Small Width",width:"small",placeholder:"Small input"}},w={render:e=>r.jsx(a,{...e}),args:{name:"medium",label:"Medium Width",width:"medium",placeholder:"Medium input"}},W={render:e=>r.jsx(a,{...e}),args:{name:"large",label:"Large Width",width:"large",placeholder:"Large input"}},F={render:e=>r.jsx(a,{...e}),args:{name:"full",label:"Full Width",width:"full",placeholder:"Full width input"}},f={render:()=>{const[e,s]=I.useState({name:"",email:"",age:"",website:""}),[l,v]=I.useState({name:"",email:""});return r.jsxs("div",{className:"max-w-md",children:[r.jsx(t,{name:"name",label:"Full Name",value:e.name,onChange:n=>{s({...e,name:n}),n&&v({...l,name:""})},error:l.name,required:!0,placeholder:"John Doe"}),r.jsx(t,{name:"email",type:"email",label:"Email Address",value:e.email,onChange:n=>{s({...e,email:n}),n&&v({...l,email:""})},error:l.email,required:!0,placeholder:"john@example.com"}),r.jsx(t,{name:"age",type:"number",label:"Age",value:e.age,onChange:n=>s({...e,age:n}),helpText:"Must be 18 or older",placeholder:"25"}),r.jsx(t,{name:"website",type:"url",label:"Personal Website",value:e.website,onChange:n=>s({...e,website:n}),helpText:"Optional",placeholder:"https://example.com"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "default",
    label: "Default Input",
    placeholder: "Enter text..."
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "with-value",
    label: "Input with Value",
    value: "Pre-filled value"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "required",
    label: "Required Field",
    required: true,
    placeholder: "This field is required"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "error",
    label: "Input with Error",
    error: "This field is required",
    value: ""
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "help",
    label: "Input with Help Text",
    helpText: "Enter your full name as it appears on your ID"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "disabled",
    label: "Disabled Input",
    value: "Cannot edit this",
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "user@example.com"
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "number",
    type: "number",
    label: "Age",
    placeholder: "Enter your age"
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "url",
    type: "url",
    label: "Website",
    placeholder: "https://example.com"
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "small",
    label: "Small Width",
    width: "small",
    placeholder: "Small input"
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "medium",
    label: "Medium Width",
    width: "medium",
    placeholder: "Medium input"
  }
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "large",
    label: "Large Width",
    width: "large",
    placeholder: "Large input"
  }
}`,...W.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <FormInputWrapper {...args} />,
  args: {
    name: "full",
    label: "Full Width",
    width: "full",
    placeholder: "Full width input"
  }
}`,...F.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      age: "",
      website: ""
    });
    const [errors, setErrors] = useState({
      name: "",
      email: ""
    });
    return <div className="max-w-md">
        <FormInput name="name" label="Full Name" value={formData.name} onChange={value => {
        setFormData({
          ...formData,
          name: value
        });
        if (value) setErrors({
          ...errors,
          name: ""
        });
      }} error={errors.name} required placeholder="John Doe" />
        <FormInput name="email" type="email" label="Email Address" value={formData.email} onChange={value => {
        setFormData({
          ...formData,
          email: value
        });
        if (value) setErrors({
          ...errors,
          email: ""
        });
      }} error={errors.email} required placeholder="john@example.com" />
        <FormInput name="age" type="number" label="Age" value={formData.age} onChange={value => setFormData({
        ...formData,
        age: value
      })} helpText="Must be 18 or older" placeholder="25" />
        <FormInput name="website" type="url" label="Personal Website" value={formData.website} onChange={value => setFormData({
        ...formData,
        website: value
      })} helpText="Optional" placeholder="https://example.com" />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const P=["Default","WithValue","Required","WithError","WithHelpText","Disabled","Email","Password","Number","URL","SmallWidth","MediumWidth","LargeWidth","FullWidth","FormExample"];export{o as Default,i as Disabled,c as Email,f as FormExample,F as FullWidth,W as LargeWidth,w as MediumWidth,h as Number,g as Password,p as Required,x as SmallWidth,b as URL,d as WithError,u as WithHelpText,m as WithValue,P as __namedExportsOrder,M as default};
