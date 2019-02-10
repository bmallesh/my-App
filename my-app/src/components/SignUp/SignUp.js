import React from 'react';


class SingUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.LoginPage=this.LoginPage.bind(this)

    }
    LoginPage(){
        alert("hello")
        alert(this.props.login)
        console.log(this.props)
    }


    render() {
        return (
            <div>
                < div class="modal-header">
                    <h4 class="modal-title">SingUp</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Username</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Password</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Password" />
                        </div>
                        <button type="button" class="btn loginBtn btn-block">SingUp</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <p>EXisting User?<a class="pointer creatAccount" onClick={this.LoginPage}> Login</a></p>
                </div>
            </div>
        );
    }
}

export default SingUp;