import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function TenantDashboard() {
    const navigate = useNavigate();
    const { setSession } = useContext(Context);

    const logout = () => {
        setSession(null);
        alert("Has cerrado tu cuenta");
        navigate("/");
    };

    return (
        <aside className="bg-warning text-center">
            <div>
                <h4>
                    <Link to="/perfil" className="text-dark text-decoration-none">
                        Mi Perfil
                    </Link>
                </h4>
            </div>

            <div>

                <Link to="/-" className="text-dark text-decoration-none">
                    Mis Canchas
                </Link>
            </div>

            <div>

                <Link to="/perfil" className="text-dark text-decoration-none">
                    Reservas
                </Link>
            </div>

            <div>
                <Button variant="danger" onClick={logout}>
                    Cerrar Sesión
                </Button>
            </div>
        </aside>
    );
}