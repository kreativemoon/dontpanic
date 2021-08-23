import React, { useState, useEffect } from 'react';
import SplitPane from "react-split-pane";
import { CssEditor, HtmlEditor, JavascriptEditor } from "./editor";
import useDebounce from "./useDebounce";
import './codeshare.css';
import styles from './index.module.css';

const CodeShare = () => {
    const [heightValue, setHeightValue] = useState("485px");

    const [htmlValue, setHtmlValue] = useState("");
    const [jsValue, setJsValue] = useState("");
    const [cssValue, setCssValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
  
    const debouncedHtml = useDebounce(htmlValue, 1000);
    const debouncedJs = useDebounce(jsValue, 1000);
    const debouncedCss = useDebounce(cssValue, 1000);
  
    useEffect(() => {
      const output = `<html>
                      <style>
                      ${debouncedCss}
                      </style>
                      <body>
                      ${debouncedHtml}
                      <script type="text/javascript">
                      ${debouncedJs}
                      </script>
                      </body>
                    </html>`;
      setOutputValue(output);
    }, [debouncedHtml, debouncedCss, debouncedJs]);
  
    return (
      <SplitPane
        split="horizontal"
        minSize={"50%"}
        onDragFinished={(height) => {
          setHeightValue(`${height - 40}px`);
        }}
      >
        <SplitPane split="vertical" minSize={"33%"}>
          <HtmlEditor
            height={heightValue}
            value={htmlValue}
            onChange={setHtmlValue}
          />
          <SplitPane split="vertical" minSize={"50%"}>
            <CssEditor
              height={heightValue}
              value={cssValue}
              onChange={setCssValue}
            />
            <JavascriptEditor
              height={heightValue}
              value={jsValue}
              onChange={setJsValue}
            />
          </SplitPane>
        </SplitPane>
        <iframe srcDoc={outputValue} className={styles.previewIframe} />
      </SplitPane>
    );
};

export default CodeShare;
