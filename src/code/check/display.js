export default `
<Form>
    <Input {...{
        label: '块状单选框',
        type: 'radio',
        name: 'demo07',
        itemList: [
            {
                text: 'Radio01',
                defaultValue: 'radio01',
                defaultChecked: true
            }, {
                text: 'Radio02',
                defaultValue: 'radio02',
            }, {
                text: 'Radio03',
                defaultValue: 'radio03',
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '行间单选框',
        type: 'radio',
        name: 'demo08',
        display: 'inline',
        labelCount: 2,
        itemList: [
            {
                text: 'Radio01',
                defaultValue: 'radio01',
                defaultChecked: true
            }, {
                text: 'Radio02',
                defaultValue: 'radio02',
            }, {
                text: 'Radio03',
                defaultValue: 'radio03',
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '行间单选框',
        type: 'radio',
        name: 'demo09',
        display: 'inline',
        labelCount: 2,
        itemDisplay: 'inline',
        itemList: [
            {
                text: 'Radio01',
                defaultValue: 'radio01',
                defaultChecked: true
            }, {
                text: 'Radio02',
                defaultValue: 'radio02',
            }, {
                text: 'Radio03',
                defaultValue: 'radio03',
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '块状复选框',
        type: 'checkbox',
        name: 'demo07',
        itemList: [
            {
                text: 'Radio01',
                defaultValue: 'radio01',
                defaultChecked: true
            }, {
                text: 'Radio02',
                defaultValue: 'radio02',
            }, {
                text: 'Radio03',
                defaultValue: 'radio03',
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '行间复选框',
        type: 'checkbox',
        name: 'demo08',
        display: 'inline',
        labelCount: 2,
        itemList: [
            {
                text: 'Radio01',
                defaultValue: 'radio01',
                defaultChecked: true
            }, {
                text: 'Radio02',
                defaultValue: 'radio02',
            }, {
                text: 'Radio03',
                defaultValue: 'radio03',
            }
        ],
        helper: 'Some help text goes here'
    }}/>
    <Input {...{
        label: '行间复选框',
        type: 'checkbox',
        name: 'demo09',
        display: 'inline',
        labelCount: 2,
        itemDisplay: 'inline',
        itemList: [
            {
                text: 'Radio01',
                defaultValue: 'radio01',
                defaultChecked: true
            }, {
                text: 'Radio02',
                defaultValue: 'radio02',
            }, {
                text: 'Radio03',
                defaultValue: 'radio03',
            }
        ],
        helper: 'Some help text goes here'
    }}/>
</Form>
`