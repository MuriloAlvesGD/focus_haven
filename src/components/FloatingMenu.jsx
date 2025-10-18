import { Button, Box, DropButton } from "grommet";
import { useNavigate, useLocation } from "react-router-dom";
import { Clock } from "pixelarticons/fonts/react/Clock.js";
import { CloseBox } from "pixelarticons/fonts/react/CloseBox.js";
import { Home } from "pixelarticons/fonts/react/Home.js";
import { Menu } from "pixelarticons/fonts/react/Menu.js";

function FloatingMenu() {
    const navigate = useNavigate();
    let localURL = useLocation();

    //useEffect(() => {
    //    if (localURL.pathname == "/config") {
    //        destination = "/";
    //    } else {
    //        destination = "/config";
    //    }
    //}, [localURL]);

    const navBar = () => {
        return (
            <>
                <Button margin="small" primary icon={<Home height="50px" width="50px" viewBox="0 0 24 24" fill="white"/>} onClick={() => navigate("/")} />
                <Button margin="small" primary icon={<Clock height="50px" width="50px" viewBox="0 0 24 24" fill="white"/>} onClick={() => navigate("/config")} />
                <Button margin="small" primary icon={<CloseBox height="50px" width="50px" viewBox="0 0 24 24" fill="white"/>} onClick={() => navigate("/black_list")} />
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
            <Button margin="small" primary icon={<Menu height="50px" width="50px" viewBox="0 0 24 24" fill="white"/>} />
        </DropButton>
    );
}

export default FloatingMenu;
