export default
`
<Dropdown {...{
    button: {
        value: 'DropDown',
        isWide: true,
        color: 'primary'
    },
    items: [
        {
            type: 'header',
            value: 'This is a header'
        },
        {
            value: 'Dropdown-1'
        },
        {
            value: 'Dropdown-2'
        },
        {
            type: 'divider'
        },
        {
            value: 'Dropdown-3'
        }
    ]
}}/>
`;