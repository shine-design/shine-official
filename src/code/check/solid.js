export default `
<Form>
    <Input {...{
        label: '反色单选框',
        type: 'radio',
        name: 'demo04',
        itemList: [
            {
                text: 'Default',
                defaultValue: 'default',
                isSolid: true
            },
            {
                text: 'Disabled',
                defaultValue: 'disabled',
                disabled: true,
                isSolid: true
            },
            {
                text: 'Checked',
                defaultValue: 'checked',
                defaultChecked: true,
                isSolid: true
            },
            {
                text: 'Success',
                defaultValue: 'success',
                color: 'success',
                defaultChecked: true,
                isSolid: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                color: 'danger',
                isSolid: true
            },
            {
                text: 'Success',
                defaultValue: 'success',
                checkedColor: 'success',
                defaultChecked: true,
                isSolid: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                checkedColor: 'danger',
                isSolid: true
            },
        ],
        helper: 'Some help text goes here'
    }}/>
        label: '反色复选框',
        type: 'checkbox',
        name: 'demo04',
        itemList: [
            {
                text: 'Default',
                defaultValue: 'default',
                isSolid: true
            },
            {
                text: 'Disabled',
                defaultValue: 'disabled',
                disabled: true,
                isSolid: true
            },
            {
                text: 'Checked',
                defaultValue: 'checked',
                defaultChecked: true,
                isSolid: true
            },
            {
                text: 'Success',
                defaultValue: 'success',
                color: 'success',
                defaultChecked: true,
                isSolid: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                color: 'danger',
                isSolid: true
            },
            {
                text: 'Success',
                defaultValue: 'success',
                checkedColor: 'success',
                defaultChecked: true,
                isSolid: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                checkedColor: 'danger',
                isSolid: true
            },
        ],
        helper: 'Some help text goes here'
    }}/>
</Form>
`