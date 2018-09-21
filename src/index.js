import ReactDOM from 'react-dom'
import RouterConfig from './routers';
import './plugins';
import './index.less';
import 'shinec/dist/index.css';

ReactDOM.render(
    RouterConfig, document.getElementById('root')
);