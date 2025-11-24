import { useState, useEffect } from "react";
import { Box, Form, FormField, Text, TextInput, Button, List } from "grommet";
import { theme } from "../style/styles.js";
import Icons from "../style/icons.jsx";

function BlackList(colors) {
    const [urlBlocked, setUrlBlocked] = useState("");
    const [urlBlackList, setUrlBlackList] = useState([]);

    const handleUrl = (value) => {
        setUrlBlocked("");
        if (value.url.trim() != "") {
            if (!urlBlackList.some((e) => e == value.url.trim())) {
                const temp = [...urlBlackList, value.url];
                setUrlBlackList(temp);
                chrome.storage.local.set({ urlBlackList: temp }, () => {
                    console.log("URL adicionada à lista de bloqueio:", temp);
                });
            }
        }
    };

    const getLocation = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0]; // Pega a aba ativa
            if (activeTab) {
                handleUrl(activeTab);
            }
        });
    };

    const handleDeleteUrl = (index) => {
        const temp = urlBlackList.filter((_, i) => i !== index);
        setUrlBlackList(temp);

        chrome.storage.local.set({ urlBlackList: temp }, () => {
            console.log("URL removida da lista de bloqueio:", temp);
        });
    };

    useEffect(() => {
        chrome.storage.local.get(["urlBlackList"], (result) => {
            if (result.urlBlackList) {
                setUrlBlackList(result.urlBlackList);
            }
        });
    }, []);

    return (
        <Box
            {...theme.boxAlign}
            style={{
                padding: "0",
                height: "300px",
                width: "300px"
            }}
            gap="15px">
            <Text size="xlarge" weight="bold" margin="0px" color={colors.contrast}>
                URL BlackList
            </Text>
            <Form onReset={() => setUrlBlocked("")} onSubmit={({ value }) => handleUrl(value)} {...theme.boxAlign}>
                <Box
                    {...theme.boxAlignRow}
                    style={{
                        padding: "0", // Define o padding diretamente
                        margin: "5px auto 0",
                        borderRadius: "0"
                    }}
                    width="90%"
                    align="end"
                    gap="10px">
                    <FormField name="url" htmlFor="textinput-id" margin="0">
                        <TextInput
                            id="textinput-id"
                            name="url"
                            style={{
                                padding: "0",
                                color: colors.contrast
                            }}
                            value={urlBlocked}
                            onChange={(event) => setUrlBlocked(event.target.value)}
                            placeholder="http..."
                            color={colors.contrast}
                        />
                    </FormField>

                    <Button
                        type="submit"
                        default
                        icon={
                            <Box {...theme.boxAlign} pad="2px" gap="0" background={colors.contrast} round="5px">
                                <Icons icon="addBox" height="24px" width="24px" fill={colors.back_shadown} />
                                <Text color={colors.back_shadown} size="10px" gap="0">
                                    add
                                </Text>
                            </Box>
                        }
                        size="xsmall"
                        pad="0"
                    />
                    <Button
                        onClick={() => getLocation()}
                        default
                        icon={
                            <Box {...theme.boxAlign} pad="2px" gap="0" background={colors.contrast} round="5px">
                                <Icons icon="tab" height="24px" width="24px" fill={colors.back_shadown} />
                                <Text color={colors.back_shadown} size="10px" gap="0">
                                    tab
                                </Text>
                            </Box>
                        }
                        size="xsmall"
                        pad="0"
                    />
                </Box>
            </Form>
            <List
                background={colors.back_shadown}
                data={urlBlackList.map((url, index) => ({
                    url: url.length > 20 ? url.slice(0, 21) : url,
                    key: index
                }))}
                pad="2px 5px"
                width="1000px"
                action={(item, index) => (
                    <Icons
                        icon="removeBox"
                        width="20px"
                        height="20px"
                        fill={colors.contrast}
                        onClick={() => handleDeleteUrl(index)}
                    />
                )}
                step={3}
                show={{ page: 0 }}
                paginate
            />
        </Box>
    );
}

export default BlackList;
