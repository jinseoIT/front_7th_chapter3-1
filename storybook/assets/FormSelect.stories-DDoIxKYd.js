import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as l}from"./FormSelect-CH-BXiEm.js";import{r as v}from"./iframe-BSnAbuZu.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./Form-C8ZAiCyN.js";import"./Label-CWNEERrL.js";import"./index-Bbt59Eh3.js";import"./index-CVVP2cso.js";import"./preload-helper-DoRU6K4M.js";const w={title:"UI/FormSelect",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Select size"},required:{control:"boolean",description:"Required field"},disabled:{control:"boolean",description:"Disabled state"}}},a=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"}],n=e=>{const[s,t]=v.useState(e.value||"");return r.jsx(l,{...e,value:s,onChange:t})},c={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Select Country",options:a,placeholder:"Choose a country..."}},u={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,value:"us"}},i={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,required:!0,placeholder:"This field is required"}},m={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,error:"Please select a country",value:""}},p={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,helpText:"Select your country of residence"}},d={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,value:"us",disabled:!0}},y={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,size:"sm"}},g={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,size:"md"}},b={render:e=>r.jsx(n,{...e}),args:{name:"country",label:"Country",options:a,size:"lg"}},S={render:()=>{const[e,s]=v.useState({country:"",state:"",city:""}),[t,h]=v.useState({country:"",state:""}),C=[{value:"ny",label:"New York"},{value:"ca",label:"California"},{value:"tx",label:"Texas"},{value:"fl",label:"Florida"}],x=[{value:"nyc",label:"New York City"},{value:"la",label:"Los Angeles"},{value:"chi",label:"Chicago"},{value:"hou",label:"Houston"}];return r.jsxs("div",{className:"max-w-md",children:[r.jsx(l,{name:"country",label:"Country",options:a,value:e.country,onChange:o=>{s({...e,country:o}),o&&h({...t,country:""})},error:t.country,required:!0,placeholder:"Select your country"}),r.jsx(l,{name:"state",label:"State/Province",options:C,value:e.state,onChange:o=>{s({...e,state:o}),o&&h({...t,state:""})},error:t.state,required:!0,placeholder:"Select your state"}),r.jsx(l,{name:"city",label:"City",options:x,value:e.city,onChange:o=>s({...e,city:o}),helpText:"Optional",placeholder:"Select your city"})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Select Country",
    options: countries,
    placeholder: "Choose a country..."
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    value: "us"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    required: true,
    placeholder: "This field is required"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    error: "Please select a country",
    value: ""
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    helpText: "Select your country of residence"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    value: "us",
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    size: "sm"
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    size: "md"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <FormSelectWrapper {...args} />,
  args: {
    name: "country",
    label: "Country",
    options: countries,
    size: "lg"
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      state: "",
      city: ""
    });
    const [errors, setErrors] = useState({
      country: "",
      state: ""
    });
    const states = [{
      value: "ny",
      label: "New York"
    }, {
      value: "ca",
      label: "California"
    }, {
      value: "tx",
      label: "Texas"
    }, {
      value: "fl",
      label: "Florida"
    }];
    const cities = [{
      value: "nyc",
      label: "New York City"
    }, {
      value: "la",
      label: "Los Angeles"
    }, {
      value: "chi",
      label: "Chicago"
    }, {
      value: "hou",
      label: "Houston"
    }];
    return <div className="max-w-md">
        <FormSelect name="country" label="Country" options={countries} value={formData.country} onChange={value => {
        setFormData({
          ...formData,
          country: value
        });
        if (value) setErrors({
          ...errors,
          country: ""
        });
      }} error={errors.country} required placeholder="Select your country" />
        <FormSelect name="state" label="State/Province" options={states} value={formData.state} onChange={value => {
        setFormData({
          ...formData,
          state: value
        });
        if (value) setErrors({
          ...errors,
          state: ""
        });
      }} error={errors.state} required placeholder="Select your state" />
        <FormSelect name="city" label="City" options={cities} value={formData.city} onChange={value => setFormData({
        ...formData,
        city: value
      })} helpText="Optional" placeholder="Select your city" />
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const N=["Default","WithValue","Required","WithError","WithHelpText","Disabled","SmallSize","MediumSize","LargeSize","FormExample"];export{c as Default,d as Disabled,S as FormExample,b as LargeSize,g as MediumSize,i as Required,y as SmallSize,m as WithError,p as WithHelpText,u as WithValue,N as __namedExportsOrder,w as default};
