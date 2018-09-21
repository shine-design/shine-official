export default `
<Form>
    <Input {...{
        label: '事件测试',
        type: 'text',
        placeholder: '请输入内容',
        callbacks: {
            onFocus: ()=>{
                // Focus event
            },
            onBlur: ()=>{
                // Blur event
            },
            onChange: ()=>{
                // Change event
            }
        }
    }}/>
</Form>
`