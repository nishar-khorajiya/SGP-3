import React ,{useContext, useEffect}from 'react'
import Provider from '../../Context/ProviderContext';

function Alert(props) {
    const show = useContext(Provider)
    
    const capitalize = (word)=>{
        if(word==='danger'){
            word="error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className={show.error?'d-block':'d-none'} style={{height: '50px'}}>
        <div className={`alert alert-${show.errortype.type} alert-dismissible fade show`} role="alert">
           <strong>{show.error?capitalize(show.errortype.type):show.errortype.type}</strong>: {show.errortype.msg} 
        </div>
        {/* <div style={{backgroundColor:'red'}}>
            {show.errortype.type}
        </div> */}
        </div>
    )
}

export default Alert