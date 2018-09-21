export default `
<Form>
    <Input {...{
        label: '正常输入',
        type: 'text',
        placeholder: '请输入内容',
        defaultValue: '欢迎使用Shine'
    }}/>
    <Input {...{
        label: '禁止输入',
        type: 'text',
        placeholder: '请输入内容',
        defaultValue: '欢迎使用Shine',
        disabled: true
    }}/>
    <Input {...{
        label: '只读输入',
        type: 'text',
        placeholder: '请输入内容',
        defaultValue: '欢迎使用Shine',
        readOnly: true
    }}/>    
</Form>
`