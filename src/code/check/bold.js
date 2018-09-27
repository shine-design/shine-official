export default `
<Form>
    <Input {...{
        label: '全局加粗单选框',
        type: 'radio',
        name: 'demo05',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                color: 'success',
                defaultChecked: true,
                isBold: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                color: 'danger',
                isBold: true
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                color: 'primary',
                isBold: true
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '选中加粗单选框',
        type: 'radio',
        name: 'demo06',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                checkedColor: 'success',
                defaultChecked: true,
                isCheckedBold: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                checkedColor: 'danger',
                isCheckedBold: true
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                checkedColor: 'primary',
                isCheckedBold: true
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '全局加粗复选框',
        type: 'checkbox',
        name: 'demo05',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                color: 'success',
                defaultChecked: true,
                isBold: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                color: 'danger',
                isBold: true
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                color: 'primary',
                isBold: true
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '选中加粗复选框',
        type: 'checkbox',
        name: 'demo06',
        itemList: [
            {
                text: 'Success',
                defaultValue: 'success',
                checkedColor: 'success',
                defaultChecked: true,
                isCheckedBold: true
            },
            {
                text: 'Danger',
                defaultValue: 'danger',
                checkedColor: 'danger',
                isCheckedBold: true
            },
            {
                text: 'Primary',
                defaultValue: 'primary',
                checkedColor: 'primary',
                isCheckedBold: true
            }
        ],
        helper: 'Some help text goes here'
    }}/>
</Form>
`