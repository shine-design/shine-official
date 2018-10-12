export default `
<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'top'
}}>
    <Button {...{
        value: 'Top',
        color: 'brand',
        isWide: true
    }}/>
</Tooltip>

<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'right'
}}>
    <Button {...{
        value: 'Right',
        color: 'info',
        isWide: true
    }}/>
</Tooltip>

<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'bottom',
    isWide: true
}}>
    <Button {...{
        value: 'Bottom',
        color: 'accent',
        isWide: true
    }}/>
</Tooltip>

<Tooltip {...{
    title: 'This is a tooltip!',
    placement: 'left'
}}>
    <Button {...{
        value: 'Left',
        color: 'danger',
        isWide: true
    }}/>
</Tooltip>
`;