export default `
<Form>
    <SymbolInput {...{
        input: {
            label: '前缀标志',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: '@'
    }}/>
    <SymbolInput {...{
        input: {
            label: '后缀标志',
            type: 'text',
            placeholder: '请输入内容'
        },
        append: '@example.com'
    }}/>
    <SymbolInput {...{
        input: {
            label: '两端标志',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: '#',
        append: 'px'
    }}/>
    <SymbolInput {...{
        input: {
            label: '多个标志',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: ['Amount', '0'],
        append: ['.00', '$']
    }}/>
</Form>
`