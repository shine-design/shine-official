export default `
<Form>
    <SymbolInput {...{
        input: {
            label: '前缀单选框',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: (
            <Input {...{
                type: 'radio',
                name: 'demo1',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        )
    }}/>
    <SymbolInput {...{
        input: {
            label: '前缀复选框',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: (
            <Input {...{
                type: 'checkbox',
                name: 'demo2',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        )
    }}/>
    <SymbolInput {...{
        input: {
            label: '后缀单选框',
            type: 'text',
            placeholder: '请输入内容'
        },
        append: (
            <Input {...{
                type: 'radio',
                name: 'demo3',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        )
    }}/>
    <SymbolInput {...{
        input: {
            label: '后缀复选框',
            type: 'text',
            placeholder: '请输入内容'
        },
        append: (
            <Input {...{
                type: 'checkbox',
                name: 'demo4',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        )
    }}/>
    <SymbolInput {...{
        input: {
            label: '两端选框',
            type: 'text',
            placeholder: '请输入内容'
        },
        prepend: (
            <Input {...{
                type: 'checkbox',
                name: 'demo5',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        ),
        append: (
            <Input {...{
                type: 'radio',
                name: 'demo6',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        )
    }}/>
    <SymbolInput {...{
        input: {
            label: '两端选框',
            type: 'text',
            placeholder: '请输入内容'
        },
        append: (
            <Input {...{
                type: 'checkbox',
                name: 'demo7',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        ),
        prepend: (
            <Input {...{
                type: 'radio',
                name: 'demo8',
                itemList: [{
                    value: 'value01'
                }]
            }}/>
        )
    }}/>
</Form>
`