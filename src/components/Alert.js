import react from 'react';
import useState from 'react';
export default function Alert(props) {

    return(
    props.alert && <div class="alert alert-success" role="alert">
    <strong>{props.alert.typ}</strong> : {props.alert.msg}
</div>);
}
