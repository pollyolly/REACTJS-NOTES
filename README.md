### Tutorial
```
https://www.youtube.com/watch?v=b9eMGE7QtTk
```
### Installation
Node Js
```
npm install -g n
sudo n [version.number]
```
ReactJs
```
npx create-react-app my-app
```
Eslint plugin react hook
```
npm install eslint-plugin-react-hooks --save-dev
```
### React JS Hook Rules 
```
https://reactjs.org/docs/hooks-rules.html
```
1. Do not modify the state directly or Manualy
```
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
```
useState('Mary')           // 1. Read the name state variable (argument is ignored)
// useEffect(persistForm)  // 🔴 This Hook was skipped!
useState('Poppins')        // 🔴 2 (but was 3). Fail to read the surname state variable
useEffect(updateTitle)     // 🔴 3 (but was 4). Fail to replace the effect
```
3. Put condition inside hook
```
useEffect(function persistForm() {
    // 👍 We're not breaking the first rule anymore
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
```
