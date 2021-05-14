import React,{useEffect} from 'react';
const  useTitle = (props) => {
    useEffect(()=>{
        document.title = props + "Custom hook";
    })
}
export default useTitle;

