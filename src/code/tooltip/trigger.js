export default `
<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'top',
    trigger: 'hover'
}}>
    <Button {...{
        value: 'Hover',
        color: 'info',
        isWide: true
    }}/>
</Tooltip>

<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'top',
    trigger: 'click'
}}>
    <Button {...{
        value: 'Click',
        color: 'info',
        isWide: true
    }}/>
</Tooltip>

<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'top',
    trigger: 'focus'
}}>
    <Button {...{
        value: 'Focus',
        color: 'info',
        isWide: true
    }}/>
</Tooltip>

<Tooltip {...{
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