import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as b,a as x,b as n,c as a,d as s,e as m,f,g as l}from"./Form-C8ZAiCyN.js";import{_ as w,Z as y,a as F,o as g,s as d}from"./schemas-CWrOn5_C.js";import{B as h}from"./Button-BJAFUK_q.js";import"./iframe-BSnAbuZu.js";import"./preload-helper-DoRU6K4M.js";import"./Label-CWNEERrL.js";import"./index-Bbt59Eh3.js";import"./index-CVVP2cso.js";import"./clsx-B-dksMZM.js";import"./index-B8k91cqS.js";function S(o){return w(y,o)}const P={title:"UI/Form",component:b,parameters:{layout:"padded"},tags:["autodocs"]},j=g({username:d().min(3,"Username must be at least 3 characters"),email:d().email("Invalid email address"),age:S().min(18,"Must be at least 18 years old"),bio:d().max(200,"Bio must be less than 200 characters").optional()}),c={render:()=>{const o=x({resolver:F(j),defaultValues:{username:"",email:"",age:void 0,bio:""}}),t=r=>{console.log("Form submitted:",r),alert(JSON.stringify(r,null,2))};return e.jsx(b,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(t),className:"space-y-4 max-w-md",children:[e.jsx(n,{control:o.control,name:"username",render:({field:r})=>e.jsxs(a,{children:[e.jsx(s,{children:"Username"}),e.jsx(m,{children:e.jsx("input",{...r,className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"Enter username"})}),e.jsx(f,{children:"This will be your public display name"}),e.jsx(l,{})]})}),e.jsx(n,{control:o.control,name:"email",render:({field:r})=>e.jsxs(a,{children:[e.jsx(s,{children:"Email"}),e.jsx(m,{children:e.jsx("input",{...r,type:"email",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"user@example.com"})}),e.jsx(l,{})]})}),e.jsx(n,{control:o.control,name:"age",render:({field:r})=>e.jsxs(a,{children:[e.jsx(s,{children:"Age"}),e.jsx(m,{children:e.jsx("input",{...r,type:"number",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"18"})}),e.jsx(l,{})]})}),e.jsx(n,{control:o.control,name:"bio",render:({field:r})=>e.jsxs(a,{children:[e.jsx(s,{children:"Bio (Optional)"}),e.jsx(m,{children:e.jsx("textarea",{...r,className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"Tell us about yourself",rows:3})}),e.jsx(f,{children:"Maximum 200 characters"}),e.jsx(l,{})]})}),e.jsx(h,{type:"submit",variant:"primary",children:"Submit"})]})})}},u={render:()=>{const o=x({resolver:F(j),defaultValues:{username:"ab",email:"invalid-email",age:15}}),t=r=>{console.log("Form submitted:",r)};return o.trigger(),e.jsx(b,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(t),className:"space-y-4 max-w-md",children:[e.jsx(n,{control:o.control,name:"username",render:({field:r})=>e.jsxs(a,{children:[e.jsx(s,{children:"Username"}),e.jsx(m,{children:e.jsx("input",{...r,className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"Enter username"})}),e.jsx(l,{})]})}),e.jsx(n,{control:o.control,name:"email",render:({field:r})=>e.jsxs(a,{children:[e.jsx(s,{children:"Email"}),e.jsx(m,{children:e.jsx("input",{...r,type:"email",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"user@example.com"})}),e.jsx(l,{})]})}),e.jsx(n,{control:o.control,name:"age",render:({field:r})=>e.jsxs(a,{children:[e.jsx(s,{children:"Age"}),e.jsx(m,{children:e.jsx("input",{...r,type:"number",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"18"})}),e.jsx(l,{})]})}),e.jsx(h,{type:"submit",variant:"primary",children:"Submit"})]})})}},p={render:()=>{const o=g({email:d().email("Please enter a valid email"),password:d().min(8,"Password must be at least 8 characters")}),t=x({resolver:F(o),defaultValues:{email:"",password:""}}),r=i=>{console.log("Login:",i),alert("Login submitted!")};return e.jsxs("div",{className:"max-w-sm mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Login"}),e.jsx(b,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(n,{control:t.control,name:"email",render:({field:i})=>e.jsxs(a,{children:[e.jsx(s,{children:"Email"}),e.jsx(m,{children:e.jsx("input",{...i,type:"email",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"user@example.com"})}),e.jsx(l,{})]})}),e.jsx(n,{control:t.control,name:"password",render:({field:i})=>e.jsxs(a,{children:[e.jsx(s,{children:"Password"}),e.jsx(m,{children:e.jsx("input",{...i,type:"password",className:"w-full px-2 py-2 text-base border rounded-sm bg-white",placeholder:"Enter password"})}),e.jsx(l,{})]})}),e.jsx(h,{type:"submit",variant:"primary",className:"w-full",children:"Login"})]})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        age: undefined,
        bio: ""
      }
    });
    const onSubmit = (data: FormValues) => {
      console.log("Form submitted:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <FormField control={form.control} name="username" render={({
          field
        }) => <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <input {...field} className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="Enter username" />
                </FormControl>
                <FormDescription>
                  This will be your public display name
                </FormDescription>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input {...field} type="email" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="user@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="age" render={({
          field
        }) => <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <input {...field} type="number" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="18" />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="bio" render={({
          field
        }) => <FormItem>
                <FormLabel>Bio (Optional)</FormLabel>
                <FormControl>
                  <textarea {...field} className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="Tell us about yourself" rows={3} />
                </FormControl>
                <FormDescription>
                  Maximum 200 characters
                </FormDescription>
                <FormMessage />
              </FormItem>} />

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "ab",
        // Too short
        email: "invalid-email",
        // Invalid email
        age: 15 // Too young
      }
    });
    const onSubmit = (data: FormValues) => {
      console.log("Form submitted:", data);
    };

    // Trigger validation on mount
    form.trigger();
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <FormField control={form.control} name="username" render={({
          field
        }) => <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <input {...field} className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="Enter username" />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input {...field} type="email" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="user@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="age" render={({
          field
        }) => <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <input {...field} type="number" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="18" />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const loginSchema = z.object({
      email: z.string().email("Please enter a valid email"),
      password: z.string().min(8, "Password must be at least 8 characters")
    });
    type LoginValues = z.infer<typeof loginSchema>;
    const form = useForm<LoginValues>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: ""
      }
    });
    const onSubmit = (data: LoginValues) => {
      console.log("Login:", data);
      alert("Login submitted!");
    };
    return <div className="max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="email" render={({
            field
          }) => <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input {...field} type="email" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="user@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            <FormField control={form.control} name="password" render={({
            field
          }) => <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input {...field} type="password" className="w-full px-2 py-2 text-base border rounded-sm bg-white" placeholder="Enter password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            <Button type="submit" variant="primary" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const U=["BasicForm","WithValidationErrors","LoginForm"];export{c as BasicForm,p as LoginForm,u as WithValidationErrors,U as __namedExportsOrder,P as default};
