export default `
<Form>
    <Input {...{
        label: '默认单选框',
        type: 'radio',
        name: 'demo01',
        itemList: [
            {
                text: 'Default',
                defaultValue: 'default',
            },
            {
                text: 'Disabled',
                defaultValue: 'disabled',
                disabled: true
            },
            {
                text: 'Checked',
                defaultValue: 'checked',
                defaultChecked: true
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '默认复选框',
        type: 'checkbox',
        name: 'demo01',
        itemList: [
            {
                text: 'Default',
                defaultValue: 'default',
            },
            {
                text: 'Disabled',
                defaultValue: 'disabled',
                disabled: true
            },
            {
                text: 'Checked',
                defaultValue: 'checked',
                defaultChecked: true
            }
        ],
        helper: 'Some help text goes here'
    }}/>
</Form>
`