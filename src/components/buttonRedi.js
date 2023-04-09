import { useNavigate } from "react-router-dom";


const ButtonRedirect = (p) => {

    const navigate = useNavigate()
    console.log(p.p,p.t)
    return (<div>
        
        <button className={ p.value.test} onClick={() => { navigate(p.value.path) }}>
            {p.value.t}</button>


    </div> );
}
 
export default ButtonRedirect;