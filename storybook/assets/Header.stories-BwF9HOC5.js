import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as t}from"./Header-DddDVWtd.js";import"./iframe-BSnAbuZu.js";import"./preload-helper-DoRU6K4M.js";const l={title:"UI/Header",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={},a={render:()=>e.jsxs("div",{children:[e.jsx(t,{}),e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Page Content"}),e.jsx("p",{children:"This is the main content area below the header."})]})]})},s={render:()=>e.jsxs("div",{children:[e.jsx(t,{}),e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Scroll to see sticky header"}),Array.from({length:50},(n,o)=>e.jsxs("p",{className:"mb-4",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Paragraph ",o+1,"."]},o))]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Page Content</h2>
        <p>This is the main content area below the header.</p>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Scroll to see sticky header</h2>
        {Array.from({
        length: 50
      }, (_, i) => <p key={i} className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Paragraph {i + 1}.
          </p>)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};const p=["Default","WithContent","Sticky"];export{r as Default,s as Sticky,a as WithContent,p as __namedExportsOrder,l as default};
