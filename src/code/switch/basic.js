export default `
<Form>
    <Switch {...{
        label: '默认关',
        display: 'inline',
        labelCount: 5
    }}/>
    <Switch {...{
        label: '图标关',
        display: 'inline',
        labelCount: 5,
        isShowIcon: true
    }}/>
    <Switch {...{
        label: '默认开',
        display: 'inline',
        isChecked: true,
        labelCount: 5
    }}/>
    <Switch {...{
        label: '图标开',
        display: 'inline',
        isChecked: true,
        labelCount: 5,
        isShowIcon: true
    }}/>
    <Switch {...{
        label: '默认禁用',
        display: 'inline',
        isDisabled: true,
        labelCount: 5
    }}/>
    <Switch {...{
        label: '图标禁用',
        display: 'inline',
        isDisabled: true,
        labelCount: 5,
        isShowIcon: true
    }}/>
</Form>
`