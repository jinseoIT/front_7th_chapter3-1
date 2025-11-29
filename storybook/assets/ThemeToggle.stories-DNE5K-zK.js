import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as t,T as s}from"./ThemeToggle-CyNm049_.js";import"./iframe-BSnAbuZu.js";import"./preload-helper-DoRU6K4M.js";const i={title:"UI/ThemeToggle",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[l=>o.jsx(s,{children:o.jsx(l,{})})]},e={render:()=>o.jsxs("div",{className:"min-h-screen p-8",style:{backgroundColor:"var(--color-bg-primary)"},children:[o.jsx("h1",{className:"text-3xl font-bold mb-4",style:{color:"var(--color-text-heading)"},children:"Theme Toggle Example"}),o.jsx("p",{className:"mb-4",style:{color:"var(--color-text-body)"},children:"Click the floating button at the bottom right to toggle between light and dark themes."}),o.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[o.jsxs("div",{className:"p-4 rounded border",style:{backgroundColor:"var(--color-bg-secondary)",borderColor:"var(--color-border-primary)"},children:[o.jsx("h3",{className:"font-bold mb-2",style:{color:"var(--color-text-heading)"},children:"Card 1"}),o.jsx("p",{style:{color:"var(--color-text-body)"},children:"This is some content in a card."})]}),o.jsxs("div",{className:"p-4 rounded border",style:{backgroundColor:"var(--color-bg-secondary)",borderColor:"var(--color-border-primary)"},children:[o.jsx("h3",{className:"font-bold mb-2",style:{color:"var(--color-text-heading)"},children:"Card 2"}),o.jsx("p",{style:{color:"var(--color-text-body)"},children:"This is some content in another card."})]})]}),o.jsx(t,{})]})},r={render:()=>o.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-bg-primary)"},children:[o.jsx("header",{className:"shadow-sm p-4",style:{backgroundColor:"var(--color-bg-secondary)",borderBottom:"1px solid var(--color-border-secondary)"},children:o.jsx("h1",{className:"text-2xl font-bold",style:{color:"var(--color-text-heading)"},children:"Sample Application"})}),o.jsxs("main",{className:"p-8",children:[o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-xl font-bold mb-4",style:{color:"var(--color-text-heading)"},children:"Introduction"}),o.jsx("p",{className:"mb-4",style:{color:"var(--color-text-body)"},children:"This is a sample page demonstrating the theme toggle functionality. The button in the bottom right corner allows you to switch between light and dark modes."})]}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-xl font-bold mb-4",style:{color:"var(--color-text-heading)"},children:"Features"}),o.jsxs("ul",{className:"list-disc pl-6",style:{color:"var(--color-text-body)"},children:[o.jsx("li",{children:"Smooth theme transitions"}),o.jsx("li",{children:"Persistent theme preference"}),o.jsx("li",{children:"Accessible button with proper ARIA labels"}),o.jsx("li",{children:"Floating action button design"})]})]})]}),o.jsx(t,{})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen p-8" style={{
    backgroundColor: 'var(--color-bg-primary)'
  }}>
      <h1 className="text-3xl font-bold mb-4" style={{
      color: 'var(--color-text-heading)'
    }}>
        Theme Toggle Example
      </h1>
      <p className="mb-4" style={{
      color: 'var(--color-text-body)'
    }}>
        Click the floating button at the bottom right to toggle between light and dark themes.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded border" style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border-primary)'
      }}>
          <h3 className="font-bold mb-2" style={{
          color: 'var(--color-text-heading)'
        }}>Card 1</h3>
          <p style={{
          color: 'var(--color-text-body)'
        }}>This is some content in a card.</p>
        </div>
        <div className="p-4 rounded border" style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border-primary)'
      }}>
          <h3 className="font-bold mb-2" style={{
          color: 'var(--color-text-heading)'
        }}>Card 2</h3>
          <p style={{
          color: 'var(--color-text-body)'
        }}>This is some content in another card.</p>
        </div>
      </div>
      <ThemeToggle />
    </div>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen" style={{
    backgroundColor: 'var(--color-bg-primary)'
  }}>
      <header className="shadow-sm p-4" style={{
      backgroundColor: 'var(--color-bg-secondary)',
      borderBottom: '1px solid var(--color-border-secondary)'
    }}>
        <h1 className="text-2xl font-bold" style={{
        color: 'var(--color-text-heading)'
      }}>
          Sample Application
        </h1>
      </header>
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4" style={{
          color: 'var(--color-text-heading)'
        }}>
            Introduction
          </h2>
          <p className="mb-4" style={{
          color: 'var(--color-text-body)'
        }}>
            This is a sample page demonstrating the theme toggle functionality. The button in the bottom right corner
            allows you to switch between light and dark modes.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4" style={{
          color: 'var(--color-text-heading)'
        }}>
            Features
          </h2>
          <ul className="list-disc pl-6" style={{
          color: 'var(--color-text-body)'
        }}>
            <li>Smooth theme transitions</li>
            <li>Persistent theme preference</li>
            <li>Accessible button with proper ARIA labels</li>
            <li>Floating action button design</li>
          </ul>
        </section>
      </main>
      <ThemeToggle />
    </div>
}`,...r.parameters?.docs?.source}}};const m=["Default","WithContent"];export{e as Default,r as WithContent,m as __namedExportsOrder,i as default};
