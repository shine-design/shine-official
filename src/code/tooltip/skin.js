export default `
<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'top',
    skin: 'light'
}}>
    <Button {...{
        value: 'Light',
        color: 'info',
        isWide: true,
    }}/>
</Tooltip>

<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'top',
    skin: 'dark'
}}>
    <Button {...{
        value: 'Dark',
        color: 'danger',
        isWide: true,
    }}/>
</Tooltip>
`;