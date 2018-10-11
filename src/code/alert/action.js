export default `
<Alert {...{
    isOpen: me.state.actionAlert,
    color: 'info',
    title: 'Heads up! ',
    isAir: true,
    message: 'This alert needs your attention, but it\\'s not super important.',
    actions: [
        <Button {...{
            value: 'Action',
            color: 'accent',
            callbacks: {
                onClick() {
                    alert('Click me!');
                }
            }
        }}/>,
        <Button {...{
            value: 'Dismiss',
            color: 'outline-secondary',
            callbacks: {
                onClick() {
                    me.setState({
                        ...me.initState,
                        actionAlert: false
                    })
                }
            }
        }}/>
    ]
}}/>
`