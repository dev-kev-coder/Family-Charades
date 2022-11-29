import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import style from './Login.css.js';

const Login = () => {
    return (
        <main style={style.centerParent}>
            <Form style={style.centerChild}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />

                    <Button variant="primary" type="submit">
                        submit
                    </Button>
                </Form.Group>
            </Form>
        </main>
    );
};

export default Login;
