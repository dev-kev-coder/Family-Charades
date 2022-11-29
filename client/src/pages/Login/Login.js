import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import style from './Login.css.js';

const Login = () => {
    return (
        <div style={style.centerParent}>
            <div style={style.centerChild}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />

                        <Button variant="primary" type="submit">
                            submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Login;
