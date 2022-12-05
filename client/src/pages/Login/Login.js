// React Components
import { useNavigate } from 'react-router-dom';

// Bootstrap components
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import style from './Login.css.js';

const Login = () => {
    const navigate = useNavigate();
    const handler = {
        handleLogin() {
            console.log('Pressing Login');
            navigate('/home');
        },
        handleSignUp() {
            console.log('Pressing SignUp');
            navigate('/home');
        },
    };

    return (
        <main style={style.centerParent}>
            <Form className="bg-dark border rounded" style={style.centerChild}>
                <h1 className="mb-3">Family Charades</h1>

                <Row>
                    <FloatingLabel
                        className="mb-3 p-2 text-dark"
                        controlId="floatingUsername"
                        label="First Name"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                        />
                    </FloatingLabel>
                </Row>

                <Row>
                    <FloatingLabel
                        className="mb-3 p-2 text-dark"
                        controlId="floatingPassword"
                        label="Password"
                    >
                        <Form.Control
                            type="password"
                            placeholder="Please Enter Password"
                        />
                    </FloatingLabel>
                </Row>

                <Row>
                    <Col className="">
                        <Button variant="primary" onClick={handler.handleLogin}>
                            Login
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            variant="primary"
                            onClick={handler.handleSignUp}
                        >
                            Sign Up
                        </Button>
                    </Col>
                </Row>
            </Form>
        </main>
    );
};

export default Login;
