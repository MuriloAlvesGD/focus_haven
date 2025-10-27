import { useState, useEffect } from "react";
import { Box, Form, FormField, Text, TextInput, Button } from "grommet";
import { customTheme } from "../style/styles.js";
import Icons from "../style/icons.jsx";

function BlackList() {
    const [urlBlocked, setUrlBlocked] = useState("");
    const [urlBlackList, setUrlBlackList] = useState([]);

    const handleUrl = (value) => {
        setUrlBlocked("");
        if (value.url.trim() != "") {
            const temp = [...urlBlackList, value.url];
            setUrlBlackList(temp);

            chrome.storage.local.set({ urlBlackList: temp }, () => {
                console.log("URL adicionada à lista de bloqueio:", temp);
            });
        }
    };

    const getLocation = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0]; // Pega a aba ativa
            if (activeTab) {
                const temp = [...urlBlackList, activeTab.url];
                setUrlBlackList(temp);

                chrome.storage.local.set({ urlBlackList: temp }, () => {
                    console.log("URL adicionada à lista de bloqueio:", temp);
                });
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
            {...customTheme.boxAlign}
            style={{
                padding: "0",
                height: "300px",
                width: "300px"
            }}>
            <Form
                onReset={() => setUrlBlocked("")}
                onSubmit={({ value }) => handleUrl(value)}
                {...customTheme.boxAlign}>
                <FormField name="url" htmlFor="textinput-id" label="Name" width="small" margin="0 auto 20px">
                    <TextInput
                        id="textinput-id"
                        name="url"
                        style={{
                            padding: "0" // Define o padding diretamente
                        }}
                        value={urlBlocked}
                        onChange={(event) => setUrlBlocked(event.target.value)}
                    />
                </FormField>
                <Box
                    {...customTheme.boxAlignRow}
                    style={{
                        padding: "0", // Define o padding diretamente
                        margin: "5px 0 10px",
                        borderRadius: "0"
                    }}>
                    <Button type="submit" primary label="Submit" />
                </Box>
            </Form>
            <Box
                {...customTheme.boxAlign}
                gap="5px"
                style={{
                    padding: "0", // Define o padding diretamente
                    margin: "0 0 20px",
                    borderRadius: "0"
                }}>
                {urlBlackList.map((url, index) => (
                    <Box
                        key={index}
                        {...customTheme.boxAlignRow}
                        style={{
                            padding: "0"
                        }}>
                        <Text key={index}>{url.length > 20 ? url.slice(0, 21) : url}</Text>
                        <Button
                            style={{
                                padding: "0", // Define o padding diretamente
                                margin: "0",
                                borderRadius: "0"
                            }}
                            icon={<Icons icon="removeBox" width="20px" height="20px" fill="black" />}
                            onClick={() => handleDeleteUrl(index)}
                        />
                    </Box>
                ))}
                <Text onClick={() => getLocation()}>add url</Text>
            </Box>
        </Box>
    );
}

export default BlackList;
