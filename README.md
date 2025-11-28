### Installation
Node Js
```vim
$npm install -g n
$sudo n [version.number]
```
Vite
```vim
$cd project-folder
$npm create vite@latest .
$npm install
$npm run dev
```
ReactJs
```vim
$npx create-react-app my-app
```
Eslint plugin react hook
```vim
$npm install eslint-plugin-react-hooks --save-dev
```
### React JS Hook Rules 
```vim
https://reactjs.org/docs/hooks-rules.html
```
1. Do not modify the state directly or Manualy
```javascript
const [count,setCount] = useState(0)
        //count = 90 Do not update state manually
        useEffect(()=>{
             //count = 40 Do not do this! //Do not update manually
             setCount(90) //use the setCount //Do this
        },[]) //Empty array dependencies to prevent continued update of useEffect if component change
                //Run only at the start of component
        useEffect(()=>{
        },[count]) //useEffect update if "count" variable change //Infinite loop
        useEffect(()=>{
        }) //Continue update everytime changes detected //Infinite loop
```
2. Call Hook always on the top level of component/component function
```javascript
useState('Mary')           // 1. Read the name state variable (argument is ignored)
// useEffect(persistForm)  // 🔴 This Hook was skipped!
useState('Poppins')        // 🔴 2 (but was 3). Fail to read the surname state variable
useEffect(updateTitle)     // 🔴 3 (but was 4). Fail to replace the effect
```
3. Put condition inside hook
```vim
useEffect(function persistForm() {
    // 👍 We're not breaking the first rule anymore
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
```
4. Do not use useEffect() for fetching Data
```vim
Race condition           // 🔴
No instant back button   // 🔴
No initial HTML content  // 🔴

// Best to use
useQuery()         // 👍
userSWR()          // 👍 
use()              // 👍
or Any framework   // 👍
```
### Use Effect CleanUp Function (Clean Memory)
1. fetch()
```javascript
const App = () => {
    const [user, setUser] = setState('')
    useEffect(()=>{
         const controller = new AbortController();
         const signal = controller.signal;
         fetch(`https://jsonplaceholder.typecode.com/users/${id}`, { signal })
             .then((res)=>res.json())
             .then((data)=>{
                setUser(data);
             });
         //CleanUp function
         return()=>{
              controller.abort();
              console.log('cancelled');
         }
    },[id]);
   
    return(
         <div>
              <p>{user.username}</p>
              <p>{user.email}</p>
         </div>
    )
}
export default App
```
2. Axios()
```javascript
const App = () => {
    const [user, setUser] = setState('')
    useEffect(()=>{
         const cancelToken = axios.CancelToken.source()
         axios.get(`https://jsonplaceholder.typecode.com/users/${id}`, { cancelToken:cancelToken.token })
             .then((res)=>{
                setUser(res.data);
             }).catch(err=>{
                if(axios.isCancel(err)){
                     console.log('cancelled');
                }
             });
         //CleanUp function
         return()=>{
              cancelToken.cancel();
              console.log('cancelled');
         }
    },[id]);
   
    return(
         <div>
              <p>{user.username}</p>
              <p>{user.email}</p>
         </div>
    )
}
export default App
```
3. Interval
```javascript
const App = () => {
     const [number, setNumber] = useState(0)
     useEffect(()=>{
          console.log('useEffect run')
          const interval = setInterval(()=>{
               setNumber((prev)=>prev + 1)
          });
          //CleanUp function
          return()=>{
               clearInterval(interval);
          }
     },[1000])
     return(
          <div><p>{number}</p></div>
     )
}
export default App
```
### ReactJs use alternative to useEffect
```javascript
import { use } from "react";
async function getPosts(){
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   return res.json();
}

const Page = () => {
  const posts = use(getPosts());
  return (
      <ul>
          {
            posts.map((p: { id: string, title: string }) => (
              <li key={p.id}>{p.title}</li>
            ))
          }
      </ul>
  );
}
export default Page;
```
### ReactJs Caching
#### ReactJs useMemo() hook
memoizing value, to compute the value when necessary only
```javascript
const [a, setA] = useState(0);
const [b, setB] = useState(0);
const sum = useMemo(()=> {
     console.log('Computing...')
     return a + b;   
},[a, b]);
return (
<>
 <p>{ sum }</p>
  <button onClick={()=> setA(a + 1) }>Increment A</button>
  <button onClick={()=> setA(b + 1) }>Increment B</button>
</>
)
```
#### ReactJs useCallback() hook
memoizing the function, when passing function as prop so its reference remain the same
```javascript
function ChildComponent({ onClick }){
  return(
      <>
         <button onClick={ onClick }>ClickMe</button>
      </>
  )
}

const [count, setCount] = useState(0);
const incrementCount = useCallback(()=> {
    setCount(prevCount => prevCount + 1);
},[setCount]);
return (
<>
 <p>{ count }</p>
  <button onClick={ setCount }>Increment</button>
  <ChildComponent onClick={ incrementCount } />
</>
)
```

### References
[Goodbye useEffect](https://www.youtube.com/watch?v=bGzanfKVFeU&t=12s)

[React JS Hooks Rules](https://reactjs.org/docs/hooks-rules.html)

### Tutorial
[React Node.Js MERN Ecommerce Tutorial](https://www.youtube.com/watch?v=y66RgYMAgSo)

[Framer Motion](https://www.freecodecamp.org/news/how-to-create-multi-page-animations-using-framer-motion-and-react-router-dom/)

### UI FRAMEWORKS
[NEXTUI](https://nextui.org/)

[ONSEN](https://onsen.io/)

[PRIME REACT](https://primereact.org/)

[BLUEPRINT](https://blueprintjs.com/)

[RSUITE](https://rsuitejs.com/)

[ASTRO website](https://astro.build/)
