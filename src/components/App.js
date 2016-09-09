import { Provider } from 'redux';
import './App.scss';
import ColorDisplay from './ColorDisplay';
import ColorInput from './ColorInput';

// This is the top level component
// If we had a navigation bar, header, footer, etc. they could go here

export default () => (
    <div>
        <ColorDisplay />
        <ColorInput />
    </div>
);