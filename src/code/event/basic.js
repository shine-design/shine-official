export default `<Button {...{
    callbacks:{
        onClick:function(e){
            console.log('Click it');
        },
        onDoubleClick:function(e){
            console.log('Double Click it);
        },
        onMouseEnter:function(e){
            console.log('Mouse Enter);
        }
    }
}}/>
`;