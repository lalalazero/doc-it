import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from 'prism-react-renderer/themes/github';

interface Props {
    code: string,
    lang?: Language
}

const HighLightCode: React.FunctionComponent<Props> = props => {
    return (
        <Highlight {...defaultProps} theme={github} code={props.code} language={props.lang as Language}>
            {({ tokens, getLineProps, className, style, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )

}
HighLightCode.defaultProps = {
    lang: 'jsx'
}
export default HighLightCode