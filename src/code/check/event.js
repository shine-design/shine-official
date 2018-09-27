export default `
<Form>
    <Input {...{
        label: '单选框',
        type: 'radio',
        name: 'demo10',
        display: 'inline',
        labelCount: 3,
        itemList: [
            {
                text: 'Radio01',
                defaultValue: 'radio01',
                callbacks: {
                    onChange: (e)=>{
                        // Change Event
                    }
                }
            },
            {
                text: 'Radio02',
                defaultValue: 'radio02',
                callbacks: {
                    onChange: (e)=>{
                        // Change Event
                    }
                }
            }
        ]
    }}/>
    <Input {...{
        label: '复选框',
        type: 'checkbox',
        name: 'demo11',
        display: 'inline',
        labelCount: 3,
        itemList: [
            {
                text: 'Checkbox01',
                defaultValue: 'checkbox01',
                callbacks: {
                    onChange: (e)=>{
                        // Change Event
                    }                
                }
            },
            {
                text: 'Checkbox02',
                defaultValue: 'checkbox02',
                callbacks: {
                    onChange: (e)=>{
                        // Change Event
                    }                
                }
            }
        ]
    }}/>
</Form>
`