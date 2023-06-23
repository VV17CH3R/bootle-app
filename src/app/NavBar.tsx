"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Alert } from "@/components/bootstrap";

export default function NavBar() {

    const pathname = usePathname()



    return (
        <>
            <Navbar
                bg="primary"
                variant="dark"
                sticky="top"
                expand="sm"
                collapseOnSelect
            >
                <Container>
                    <Navbar.Brand as={Link} href="/">
                       Галерея - VV17CH3R Img APP
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav>
                            <Nav.Link as={Link} href="/random" active={pathname === "/random"}>В топе</Nav.Link>
                            <Nav.Link as={Link} href="/search" active={pathname === "/search"}>Поиск</Nav.Link>
                            <NavDropdown title="Категории" id="topics-dropdown">
                                <NavDropdown.Item as={Link} href="/topics/space">
                                    Космос
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} href="/topics/coding">
                                    Программирование
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Alert className="mx-20 text-center">
                {`Это приложение разработано Родионом Нараяновым | VV17CH3R PROD.`}
            </Alert>
        </>
    )
} 