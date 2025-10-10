import { useState, useEffect } from "react";
import { Box, Form, FormField, Text, TextInput, Button } from "grommet";
import { customTheme } from "../styles.js";

function BlackList() {
    const [urlBlocked, setUrlBlocked] = useState("");
    const [urlBlackList, setUrlBlackList] = useState([]);

    const handleUrl = (value) => {
        setUrlBlocked("");
        const temp = [...urlBlackList, value.url];
        setUrlBlackList(temp);

        chrome.storage.local.set({ urlBlackList: temp }, () => {
            console.log("URL adicionada à lista de bloqueio:", temp);
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
        <>
            <Form onReset={() => setUrlBlocked("")} onSubmit={({ value }) => handleUrl(value)}>
                <FormField name="url" htmlFor="textinput-id" label="Name">
                    <TextInput
                        id="textinput-id"
                        name="url"
                        value={urlBlocked}
                        onChange={(event) => setUrlBlocked(event.target.value)}
                    />
                </FormField>
                <Box {...customTheme.boxAlignRow}>
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
            <Box {...customTheme.boxAlign}>
                {urlBlackList.map((url, index) => (
                    <Text key={index} onClick={() => handleDeleteUrl(index)}>
                        {url}
                    </Text>
                ))}
            </Box>
        </>
    );
}

export default BlackList;
