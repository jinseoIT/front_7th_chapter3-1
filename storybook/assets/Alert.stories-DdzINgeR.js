import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as r}from"./Alert-wdN2ojnN.js";import{r as h}from"./iframe-BSnAbuZu.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./preload-helper-DoRU6K4M.js";const S={title:"UI/Alert",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","info","success","warning","error"],description:"Alert variant"},title:{control:"text",description:"Alert title"},showIcon:{control:"boolean",description:"Show icon"},children:{control:"text",description:"Alert content"}}},t={args:{variant:"default",title:"Default Alert",children:"This is a default alert message."}},a={args:{variant:"info",title:"Information",children:"This is an informational alert message."}},s={args:{variant:"success",title:"Success",children:"Your operation was completed successfully!"}},n={args:{variant:"warning",title:"Warning",children:"Please proceed with caution."}},o={args:{variant:"error",title:"Error",children:"An error occurred while processing your request."}},i={args:{variant:"info",children:"This alert has no title, only a message."}},l={args:{variant:"success",title:"Success",children:"This alert has no icon.",showIcon:!1}},c={render:()=>{const[p,m]=h.useState(!0);return p?e.jsx(r,{variant:"info",title:"Closeable Alert",onClose:()=>m(!1),children:"Click the close button to dismiss this alert."}):e.jsx("button",{onClick:()=>m(!0),className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Show Alert"})}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx(r,{variant:"default",title:"Default",children:"This is a default alert message."}),e.jsx(r,{variant:"info",title:"Information",children:"This is an informational alert message."}),e.jsx(r,{variant:"success",title:"Success",children:"Your operation was completed successfully!"}),e.jsx(r,{variant:"warning",title:"Warning",children:"Please proceed with caution."}),e.jsx(r,{variant:"error",title:"Error",children:"An error occurred while processing your request."})]})},d={args:{variant:"info",title:"Detailed Information",children:"This is a longer alert message that contains multiple sentences. It demonstrates how the alert component handles more extensive content. The alert should expand to accommodate all the text while maintaining its visual design and readability."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "Default Alert",
    children: "This is a default alert message."
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    children: "This is an informational alert message."
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    children: "Your operation was completed successfully!"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please proceed with caution."
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    children: "An error occurred while processing your request."
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "This alert has no title, only a message."
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    children: "This alert has no icon.",
    showIcon: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
      return <button onClick={() => setVisible(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Show Alert
        </button>;
    }
    return <Alert variant="info" title="Closeable Alert" onClose={() => setVisible(false)}>
        Click the close button to dismiss this alert.
      </Alert>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-0">
      <Alert variant="default" title="Default">
        This is a default alert message.
      </Alert>
      <Alert variant="info" title="Information">
        This is an informational alert message.
      </Alert>
      <Alert variant="success" title="Success">
        Your operation was completed successfully!
      </Alert>
      <Alert variant="warning" title="Warning">
        Please proceed with caution.
      </Alert>
      <Alert variant="error" title="Error">
        An error occurred while processing your request.
      </Alert>
    </div>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Detailed Information",
    children: "This is a longer alert message that contains multiple sentences. It demonstrates how the alert component handles more extensive content. The alert should expand to accommodate all the text while maintaining its visual design and readability."
  }
}`,...d.parameters?.docs?.source}}};const b=["Default","Info","Success","Warning","Error","WithoutTitle","WithoutIcon","WithCloseButton","AllVariants","LongContent"];export{u as AllVariants,t as Default,o as Error,a as Info,d as LongContent,s as Success,n as Warning,c as WithCloseButton,l as WithoutIcon,i as WithoutTitle,b as __namedExportsOrder,S as default};
