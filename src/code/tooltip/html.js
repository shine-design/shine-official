export default `
<Tooltip {...{
    title: 'This is a <span style="color: red">tooltip</span>!',
    placement: 'top',
    isHtml: true
}}>
    <Button {...{
        value: 'HTML',
        color: 'brand',
        isWide: true,
    }}/>
</Tooltip>
`;