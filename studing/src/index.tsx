import { createRoot } from 'react-dom/client';
import { StrictMode} from 'react';
import './styles/index.scss';
import { App } from './components/app/App'
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<BrowserRouter>
		<App />
		</BrowserRouter>
	</StrictMode>
);

