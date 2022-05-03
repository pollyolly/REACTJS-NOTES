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
### React JS Hook Rules 
```
https://reactjs.org/docs/hooks-rules.html

Do not modify the state directly or Manualy

const [count,setCount] = useState(0)
        //count = 90 Do not update state manually
        useEffect(()=>{
             setCount(90) //use the setCount
        },[]) //Empty array dependencies to prevent continued update of useEffect
   
        useEffect(()=>{
             setCount(90) //use the setCount
        }) //Continue update everytime changes detected
```
