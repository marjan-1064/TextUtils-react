import react from 'react';
import useState from 'react';
import '../App.css';
export default function Alert(props) {

    return(
        <div  className="alertclass" style={{height:'50px'}}  >
    {props.alert && <div className="alert alert-success" role="alert">
    <strong>{props.alert.typ}</strong> : {props.alert.msg}
</div>}
</div>

);
}
