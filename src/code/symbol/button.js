export default `
<Form>
     <SymbolInput {...{
        input: {
            label: '前缀按钮',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: <Button {...{
            value: 'Go!'
        }}/>
    }}/>
    <SymbolInput {...{
        input: {
            label: '后缀按钮',
            type: 'text',
            placeholder: '请输入内容'
        },
        append: <Button {...{
            value: 'Go!',
            color: 'brand'
        }}/>
    }}/>
    <SymbolInput {...{
        input: {
            label: '两端按钮',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: <Button {...{
            value: 'Go!',
            color: 'warning'
        }}/>,
        append: <Button {...{
            value: 'Go!',
            color: 'outline-info'
        }}/>
    }}/>
</Form>
`