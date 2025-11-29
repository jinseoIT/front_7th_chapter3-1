import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as n}from"./FormTextarea-CE_-6P8I.js";import{r as D}from"./iframe-BSnAbuZu.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./Form-C8ZAiCyN.js";import"./Label-CWNEERrL.js";import"./index-Bbt59Eh3.js";import"./index-CVVP2cso.js";import"./preload-helper-DoRU6K4M.js";const E={title:"UI/FormTextarea",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Textarea size"},required:{control:"boolean",description:"Required field"},disabled:{control:"boolean",description:"Disabled state"},rows:{control:"number",description:"Number of rows"}}},a=e=>{const[s,o]=D.useState(e.value||"");return r.jsx(n,{...e,value:s,onChange:o})},i={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Description",placeholder:"Enter your description..."}},l={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Description",value:"This is a pre-filled description text that shows how the textarea looks with content."}},d={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Description",required:!0,placeholder:"This field is required"}},c={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Description",error:"Description is required",value:""}},m={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Description",helpText:"Provide a detailed description (maximum 500 characters)"}},p={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Description",value:"This textarea is disabled and cannot be edited.",disabled:!0}},u={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Small Textarea",size:"sm",placeholder:"Small size textarea"}},x={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Medium Textarea",size:"md",placeholder:"Medium size textarea"}},g={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Large Textarea",size:"lg",placeholder:"Large size textarea"}},h={render:e=>r.jsx(a,{...e}),args:{name:"description",label:"Custom Rows",rows:8,placeholder:"This textarea has 8 rows"}},b={render:()=>{const[e,s]=D.useState({summary:"",description:"",notes:""}),[o,v]=D.useState({summary:"",description:""});return r.jsxs("div",{className:"max-w-2xl",children:[r.jsx(n,{name:"summary",label:"Summary",value:e.summary,onChange:t=>{s({...e,summary:t}),t&&v({...o,summary:""})},error:o.summary,required:!0,rows:2,placeholder:"Brief summary (1-2 sentences)"}),r.jsx(n,{name:"description",label:"Detailed Description",value:e.description,onChange:t=>{s({...e,description:t}),t&&v({...o,description:""})},error:o.description,required:!0,rows:6,placeholder:"Provide a detailed description...",helpText:"Be as detailed as possible"}),r.jsx(n,{name:"notes",label:"Additional Notes",value:e.notes,onChange:t=>s({...e,notes:t}),rows:4,placeholder:"Any additional notes (optional)",helpText:"Optional field"})]})}},T={render:()=>{const[e,s]=D.useState("");return r.jsx("div",{className:"max-w-2xl",children:r.jsx(n,{name:"bio",label:"Bio",value:e,onChange:s,placeholder:"Tell us about yourself...",helpText:`${e.length}/200 characters`,rows:5})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Description",
    placeholder: "Enter your description..."
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Description",
    value: "This is a pre-filled description text that shows how the textarea looks with content."
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Description",
    required: true,
    placeholder: "This field is required"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Description",
    error: "Description is required",
    value: ""
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Description",
    helpText: "Provide a detailed description (maximum 500 characters)"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Description",
    value: "This textarea is disabled and cannot be edited.",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Small Textarea",
    size: "sm",
    placeholder: "Small size textarea"
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Medium Textarea",
    size: "md",
    placeholder: "Medium size textarea"
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Large Textarea",
    size: "lg",
    placeholder: "Large size textarea"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <FormTextareaWrapper {...args} />,
  args: {
    name: "description",
    label: "Custom Rows",
    rows: 8,
    placeholder: "This textarea has 8 rows"
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      summary: "",
      description: "",
      notes: ""
    });
    const [errors, setErrors] = useState({
      summary: "",
      description: ""
    });
    return <div className="max-w-2xl">
        <FormTextarea name="summary" label="Summary" value={formData.summary} onChange={value => {
        setFormData({
          ...formData,
          summary: value
        });
        if (value) setErrors({
          ...errors,
          summary: ""
        });
      }} error={errors.summary} required rows={2} placeholder="Brief summary (1-2 sentences)" />
        <FormTextarea name="description" label="Detailed Description" value={formData.description} onChange={value => {
        setFormData({
          ...formData,
          description: value
        });
        if (value) setErrors({
          ...errors,
          description: ""
        });
      }} error={errors.description} required rows={6} placeholder="Provide a detailed description..." helpText="Be as detailed as possible" />
        <FormTextarea name="notes" label="Additional Notes" value={formData.notes} onChange={value => setFormData({
        ...formData,
        notes: value
      })} rows={4} placeholder="Any additional notes (optional)" helpText="Optional field" />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const maxLength = 200;
    return <div className="max-w-2xl">
        <FormTextarea name="bio" label="Bio" value={value} onChange={setValue} placeholder="Tell us about yourself..." helpText={\`\${value.length}/\${maxLength} characters\`} rows={5} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};const L=["Default","WithValue","Required","WithError","WithHelpText","Disabled","SmallSize","MediumSize","LargeSize","CustomRows","FormExample","CharacterCounter"];export{T as CharacterCounter,h as CustomRows,i as Default,p as Disabled,b as FormExample,g as LargeSize,x as MediumSize,d as Required,u as SmallSize,c as WithError,m as WithHelpText,l as WithValue,L as __namedExportsOrder,E as default};
