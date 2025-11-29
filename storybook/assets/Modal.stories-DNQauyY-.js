import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as a}from"./Modal-BQ9oYp6P.js";import{B as s}from"./Button-BJAFUK_q.js";import{r as o}from"./iframe-BSnAbuZu.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./preload-helper-DoRU6K4M.js";const k={title:"UI/Modal",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Modal size"},showFooter:{control:"boolean",description:"Show footer"}}},d={render:()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"Default Modal",children:e.jsx("p",{children:"This is the modal content. Click outside or press the close button to close."})})]})}},c={render:()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Small Modal"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"Small Modal",size:"small",children:e.jsx("p",{children:"This is a small modal with less width."})})]})}},m={render:()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Medium Modal"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"Medium Modal",size:"medium",children:e.jsx("p",{children:"This is a medium-sized modal (default size)."})})]})}},p={render:()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Large Modal"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"Large Modal",size:"large",children:e.jsx("p",{children:"This is a large modal with more width for extensive content."})})]})}},u={render:()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Modal with Footer"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"Modal with Footer",showFooter:!0,footerContent:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"This modal includes a footer with action buttons."})})]})}},h={render:()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Modal without Title"}),e.jsxs(a,{isOpen:t,onClose:()=>n(!1),children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Custom Title Inside Content"}),e.jsx("p",{children:"This modal doesn't have a title prop, so you can add custom content instead."})]})]})}},f={render:()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Modal with Long Content"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"Long Content Modal",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"This modal contains a lot of content to demonstrate the scrolling behavior. The modal body will become scrollable when the content exceeds the maximum height."}),Array.from({length:20},(r,l)=>e.jsxs("p",{className:"mb-2",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Paragraph ",l+1,"."]},l))]})})]})}},O={render:()=>{const[t,n]=o.useState(!1),[r,l]=o.useState({name:"",email:""}),x=i=>{i.preventDefault(),alert(`Submitted: ${JSON.stringify(r)}`),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Form Modal"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"User Information",showFooter:!0,footerContent:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:x,children:"Submit"})]}),children:e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold",children:"Name"}),e.jsx("input",{type:"text",value:r.name,onChange:i=>l({...r,name:i.target.value}),className:"w-full px-2 py-2 border rounded",placeholder:"Enter your name"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold",children:"Email"}),e.jsx("input",{type:"email",value:r.email,onChange:i=>l({...r,email:i.target.value}),className:"w-full px-2 py-2 border rounded",placeholder:"Enter your email"})]})]})})]})}},C={render:()=>{const[t,n]=o.useState(!1),r=()=>{alert("Confirmed!"),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"danger",onClick:()=>n(!0),children:"Delete Item"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),title:"Confirm Deletion",size:"small",showFooter:!0,footerContent:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{variant:"danger",onClick:r,children:"Delete"})]}),children:e.jsx("p",{children:"Are you sure you want to delete this item? This action cannot be undone."})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Default Modal">
          <p>This is the modal content. Click outside or press the close button to close.</p>
        </Modal>
      </>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Modal" size="small">
          <p>This is a small modal with less width.</p>
        </Modal>
      </>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Medium Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Medium Modal" size="medium">
          <p>This is a medium-sized modal (default size).</p>
        </Modal>
      </>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Modal" size="large">
          <p>This is a large modal with more width for extensive content.</p>
        </Modal>
      </>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal with Footer" showFooter footerContent={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </>}>
          <p>This modal includes a footer with action buttons.</p>
        </Modal>
      </>;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal without Title</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Custom Title Inside Content</h2>
          <p>This modal doesn't have a title prop, so you can add custom content instead.</p>
        </Modal>
      </>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Long Content</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Long Content Modal">
          <div>
            <p className="mb-4">
              This modal contains a lot of content to demonstrate the scrolling behavior. The modal body will become
              scrollable when the content exceeds the maximum height.
            </p>
            {Array.from({
            length: 20
          }, (_, i) => <p key={i} className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Paragraph {i + 1}.
              </p>)}
          </div>
        </Modal>
      </>;
  }
}`,...f.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: ""
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(\`Submitted: \${JSON.stringify(formData)}\`);
      setIsOpen(false);
    };
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="User Information" showFooter footerContent={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </>}>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold">Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="w-full px-2 py-2 border rounded" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold">Email</label>
              <input type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full px-2 py-2 border rounded" placeholder="Enter your email" />
            </div>
          </form>
        </Modal>
      </>;
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleConfirm = () => {
      alert("Confirmed!");
      setIsOpen(false);
    };
    return <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Deletion" size="small" showFooter footerContent={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleConfirm}>
                Delete
              </Button>
            </>}>
          <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        </Modal>
      </>;
  }
}`,...C.parameters?.docs?.source}}};const y=["Default","Small","Medium","Large","WithFooter","WithoutTitle","LongContent","FormInModal","ConfirmationDialog"];export{C as ConfirmationDialog,d as Default,O as FormInModal,p as Large,f as LongContent,m as Medium,c as Small,u as WithFooter,h as WithoutTitle,y as __namedExportsOrder,k as default};
