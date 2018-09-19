export default
`
<Form>
    <Input {...{
        label: '单选控件',
        type: 'select',
        options: [
            {
                value: 'option1',
                label: '单选项一'
            },
            {
                value: 'option2',
                label: '单选项二'
            },
            {
                value: 'option3',
                label: '单选项三'
            },
            {
                value: 'option4',
                label: '单选项四'
            }
        ]
     }}/>
     
    <Input {...{
        label: '单选控件',
        type: 'select',
        multiple: true,
        options: [
            {
                value: 'option1',
                label: '多选项一'
            },
            {
                value: 'option2',
                label: '多选项二'
            },
            {
                value: 'option3',
                label: '多选项三'
            },
            {
                value: 'option4',
                label: '多选项四'
            },
            {
                value: 'option5',
                label: '多选项五'
            },
            {
                value: 'option6',
                label: '多选项六'
            }
        ]
    }}/> 
</Form>
`