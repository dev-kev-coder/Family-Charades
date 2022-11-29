import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

// Bring in style object
import style from './Login.css.js';

const Login = () => {
    return (
        <div className="login-container" style={style.centerParent}>
            <div className="form-container" style={style.centerChild}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />

                        <Button variant="danger" type="submit">
                            submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Login;
