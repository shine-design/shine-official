export default `
<Form>
    <Input {...{
        label: '块妆输入',
        type: 'text',
        placeholder: '请输入内容',
        defaultValue: '欢迎使用Shine'
    }}/>
    <Input {...{
        label: '行间输入',
        type: 'text',
        display: 'inline',
        labelCount: 2,
        placeholder: '请输入内容',
        defaultValue: '欢迎使用Shine'
    }}/>
</Form>
`