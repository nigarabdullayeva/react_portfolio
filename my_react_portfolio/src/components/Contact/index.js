import React, {useState} from "react";

export default function () {
    const[state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleOnChange = event => {
         const {name, value} = event.target
         setState({
             ...state,
             [name]: value
         });
        console.log(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        window.location.href= "mailto:neka27@gmail.com?name="+state.name+"&email="+state.email+"&body="+state.message
    }
    return (

        <section className="jumbotron">
        <h1 className="display-3">Contact</h1>
        <hr className="my-4"></hr>
        <form className="container mt-5 shadow align-items-center col-sm-7">
            <div className="row">
                <div className="col-md-8">
                <label className="form-group">Name</label>
                    <input className="form-control rounded" name="email" value={state.email} onChange={handleOnChange} ></input>
                    <label className="form-group">Email</label>
                    <input className="form-control rounded" name="name" value={state.name} onChange={handleOnChange} ></input>
                    <label className="form-group">Your message</label>
                    <textarea className="form-control rounded" rows="10" name="message" value={state.message} onChange={handleOnChange}></textarea>
                </div>
            </div>
            <button className="btn btn-primary bg-dark" onClick={handleSubmit}>
                Send
            </button>
        </form>
        </section>
    )
}
