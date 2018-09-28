export default `
<Progress {...{
    itemList: [{
        value: 50,
        className: 'sh--bg-brand'
    }],
    size: 'sm'
}}/>
<Progress {...{
    itemList: [{
        value: 50,
        className: 'sh--bg-accent'
    }]
}}/>
<Progress {...{
    itemList: [{
        value: 50,
        className: 'sh--bg-warning'
    }],
    size: 'lg'
}}/>
<Progress {...{
    itemList: [{
        value: 50,
        className: 'sh--bg-danger'
    }],
    className: 'custom-height'
}}/>
`