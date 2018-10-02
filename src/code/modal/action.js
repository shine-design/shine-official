export default `
<Modal {...{
    isOpen: true,
    title: '林语堂语录',
    actions: [
        <Button {...{
            color: 'brand',
            value: '确认'
        }} />, <Button {...{
            color: 'secondary',
            attributes: {
                'data-dismiss': 'modal'
            },
            value: '自定义关闭'
        }} />
    ]
}}>
    <p>孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
    足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
    细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
    可都和你无关，这就叫孤独。</p>
</Modal>
`;