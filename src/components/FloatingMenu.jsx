import { Button, Box, DropButton } from "grommet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Icons from "../style/icons.jsx";
import { theme } from "../style/styles.js";

function FloatingMenu({ colors, isDark, changeTheme }) {
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
            <Box {...theme.boxAlignRow} pad="0 10px" gap="5px">
                {btns.map((icon, index) => (
                    <Button
                        key={index}
                        primary
                        style={{
                            padding: "8px", // Define o padding diretamente
                            margin: "0",
                            borderRadius: "5px"
                        }}
                        color={{ color: colors.contrast }}
                        pad={{ vertical: "small", horizontal: "medium" }}
                        icon={<Icons icon={icon.name} {...size} fill={colors.background} />}
                        onClick={() => navigate(icon.link)}
                    />
                ))}
                <Button
                    primary
                    style={{
                        padding: "8px", // Define o padding diretamente
                        margin: "0",
                        borderRadius: "5px"
                    }}
                    color={{ color: colors.contrast }}
                    pad={{ vertical: "small", horizontal: "medium" }}
                    icon={<Icons icon={isDark ? "sun" : "moon"} {...size} fill={colors.background} />}
                    onClick={() => changeTheme(isDark ? "light" : "dark")}
                />
            </Box>
        );
    };

    return (
        <DropButton
            alignSelf="center"
            margin={{ vertical: "small" }}
            dropContent={navBar()}
            dropAlign={{ right: "left" }}
            dropProps={{
                background: "transparent",
                elevation: "none"
            }}>
            <Button
                primary
                style={{
                    padding: "8px", // Define o padding diretamente
                    margin: "2px 12px 0 0",
                    borderRadius: "5px"
                }}
                color={{ color: colors.contrast }}
                pad={{ vertical: "small", horizontal: "medium" }}
                icon={<Icons icon={!isOpen ? "eyeClosed" : "eye"} {...size} fill={colors.background} />}
                onClick={() => setOpen(!isOpen)}
            />
        </DropButton>
    );
}

export default FloatingMenu;
