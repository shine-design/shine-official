export default `
<Form>
    <SymbolInput {...{
        input: {
            label: '前缀图标',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: <i className="sh-icon-exclamation-triangle"/>
    }}/>
    <SymbolInput {...{
        input: {
            label: '后缀图标',
            type: 'text',
            placeholder: '请输入内容'
        },
        append: <i className="sh-icon-group"/>
    }}/>
    <SymbolInput {...{
        input: {
            label: '两端图标',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: <Icon className="sh-icon-bar-chart"/>,
        append: <Icon className="sh-icon-registered"/>
    }}/>
    <SymbolInput {...{
        input: {
            label: '多个图标',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: [
            <Icon className="sh-icon-bar-chart"/>,
            <i className="sh-icon-exclamation-triangle"/>
        ],
        append: [
            <Icon className="sh-icon-registered"/>,
            <i className="sh-icon-group"/>
        ]
    }}/>
</Form>
`