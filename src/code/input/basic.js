export default
`
<Form>

    <Input {...{
        label: '普通文本',
        type: 'text',
        placeholder: '请输入内容',
        defaultValue:'欢迎使用Shine'
    }}/>
    
    <Input {...{
        label: '密码文本',
        type: 'password',
        placeholder: '请输入密码',
        defaultValue:'this is a pwd'
    }}/>
    
    <Input {...{
        label: 'Email',
        type: 'email',
        placeholder: '请输入电子邮箱',
        defaultValue:'help@shine.design'
    }}/>
    
    <Input {...{
        label: '数字文本',
        type: 'number',
        placeholder: '请输入数字',
        defaultValue:'10000'
    }}/>
    
    <Input {...{
        label: '网址文本',
        type: 'url',
        placeholder: '请输入网址',
        defaultValue:'https://shine.design'
    }}/>
    
    <Input {...{
        label: '颜色选择',
        type: 'color',
        placeholder: '请选择颜色',
        defaultValue:'#716ACA'
    }}/>
    
    <Input {...{
        label: '日期选择',
        type: 'date',
        placeholder: '请选择日期',
        defaultValue:new Date().format('yyyy-MM-dd')
    }}/>
    
</Form>
`