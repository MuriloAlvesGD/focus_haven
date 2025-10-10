import { Button, Box, DropButton } from "grommet";
import { useNavigate, useLocation } from "react-router-dom";
import { Gear, Alarm, House, Wall } from "@phosphor-icons/react";

function FloatingMenu() {
    const navigate = useNavigate();
    let localURL = useLocation();

    const handleIcon = () => {
        if (localURL.pathname == "/config") {
            return <KeyReturn size={32} weight="duotone" />;
        } else {
            return <Gear size={32} weight="duotone" />;
        }
    };

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
                <Button
                    margin="small"
                    primary
                    icon={<House size={32} weight="duotone" />}
                    onClick={() => navigate("/")}
                />
                <Button
                    margin="small"
                    primary
                    icon={<Alarm size={32} weight="duotone" />}
                    onClick={() => navigate("/config")}
                />
                <Button
                    margin="small"
                    primary
                    icon={<Wall size={32} weight="duotone" />}
                    onClick={() => navigate("/black_list")}
                />
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
            <Button margin="small" primary icon={<Gear size={32} weight="duotone" />} />
        </DropButton>
    );
}

export default FloatingMenu;
