export default `
<Form>
    <Input {...{
        label: '全局状态单选框',
        type: 'radio',
        name: 'demo02',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                color: 'success',
                defaultChecked: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                color: 'danger'
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                color: 'primary'
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '选中状态单选框',
        type: 'radio',
        name: 'demo03',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                checkedColor: 'success',
                defaultChecked: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                checkedColor: 'danger'
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                checkedColor: 'primary'
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '全局状态复选框',
        type: 'checkbox',
        name: 'demo02',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                color: 'success',
                defaultChecked: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                color: 'danger'
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                color: 'primary'
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '选中状态复选框',
        type: 'checkbox',
        name: 'demo03',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                checkedColor: 'success',
                defaultChecked: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                checkedColor: 'danger'
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                checkedColor: 'primary'
            }
        ],
        helper: 'Some help text goes here'
    }}/>
</Form>
`