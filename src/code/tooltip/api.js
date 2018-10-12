export default `
<Tooltip {...{
    isOpen: me.state.apiTooltip,
    title: 'This is a tooltip!',
    placement: 'top',
    trigger: 'manual'
}}>
    <Button {...{
        value: 'Manual',
        color: 'info',
        isWide: true
    }}/>
</Tooltip>
`;