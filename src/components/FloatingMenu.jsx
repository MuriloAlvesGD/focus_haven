import { Button, Box, DropButton } from "grommet";
import { useNavigate} from "react-router-dom";
import { useState} from "react";
import Icons from "../style/icons.jsx";

function FloatingMenu() {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate();

    const navBar = () => {
        return (
            <>
                <Button margin="small" primary icon={<Icons icon="home" height="50px" width="50px" fill="white"/>} onClick={() => navigate("/")} />
                <Button margin="small" primary icon={<Icons icon="clock" height="50px" width="50px" fill="white"/>} onClick={() => navigate("/config")} />
                <Button margin="small" primary icon={<Icons icon="listBox" height="50px" width="50px" fill="white"/>} onClick={() => navigate("/black_list")} />
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
            <Button margin="small" primary icon={<Icons icon={isOpen ? "eyeClosed" : "eye"} height="50px" width="50px" fill="white"/>} onClick={() => setOpen(!isOpen)}/>
        </DropButton>
    );
}

export default FloatingMenu;
