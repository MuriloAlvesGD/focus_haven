import { Button, Box, DropButton } from "grommet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Icons from "../style/icons.jsx";

function FloatingMenu() {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const size = { height: "24px", width: "24px" };
    const btns = [
        { name: "home", link: "/" },
        { name: "clock", link: "/config" },
        { name: "listBox", link: "/black_list" }
    ];

    const navBar = () => {
        return (
            <>
                {btns.map((icon, index) => (
                    <Button
                        key={index}
                        style={{
                            padding: "8px", // Define o padding diretamente
                            margin: "2px 12px",
                            borderRadius: "5px"
                        }}
                        pad={{ vertical: "small", horizontal: "medium" }}
                        primary
                        icon={<Icons icon={icon.name} {...size} fill="#fffae3" />}
                        onClick={() => navigate(icon.link)}
                    />
                ))}
            </>
        );
    };

    return (
        <DropButton
            alignSelf="center"
            margin={{ vertical: "small" }}
            dropContent={navBar()}
            dropAlign={{ top: "bottom" }}
            dropProps={{
                background: "transparent",
                elevation: "none"
            }}>
            <Button
                style={{
                    padding: "8px", // Define o padding diretamente
                    margin: "2px 12px",
                    borderRadius: "5px"
                }}
                pad={{ vertical: "small", horizontal: "medium" }}
                primary
                icon={<Icons icon={!isOpen ? "eyeClosed" : "eye"} {...size} fill="#fffae3" />}
                onClick={() => setOpen(!isOpen)}
            />
        </DropButton>
    );
}

export default FloatingMenu;
