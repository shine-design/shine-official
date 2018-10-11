export default `
<Alert {...{
    color: 'success',
    title: 'Well done! ',
    message: 'You successfully read this important alert message。',
    isCloseable: true
}}/>
<Alert {...{
    color: 'outline-danger',
    title: 'Oh snap! ',
    message: 'Change a few things up and try submitting again.',
    isCloseable: true
}}/>

<Button {...{
    value: '隐藏',
    color: 'outline-info',
    className: ['helper', 'mb20', 'mr10'],
    callbacks: {
        onClick: () => {
            me.setState({
                closeableAlert: false
            })
        }
    }
}}/>
<Button {...{
    value: '显示',
    color: 'outline-success',
    className: ['helper', 'mb20'],
    callbacks: {
        onClick: () => {
            me.setState({
                closeableAlert: true
            })
        }
    }
}}/>

<Alert {...{
    isOpen: me.state.closeableAlert,
    color: 'outline-info',
    title: 'Heads up! ',
    message: 'This alert needs your attention, but it\\'s not super important.',
    isCloseable: true
}}/>
`