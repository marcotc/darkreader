import {m} from 'malevic';
import {Slider} from '../../../controls';
import ThemeControl from './theme-control';

export default function ColorBlindStrength(props: {value: number; onChange: (v: number) => void}) {
    return (
        <ThemeControl label="Colorblind strength">
            <Slider
                value={props.value}
                min={0}
                max={1}
                step={0.1}
                formatValue={String}
                onChange={props.onChange}
            />
        </ThemeControl>
    );
}
