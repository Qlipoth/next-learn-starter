import * as React from "react";
import {  UIDConsumer } from 'react-uid';


interface RadioGroupProps {
    title: string
    selected: string | number
    options: { title: string;  id: number | string}[]
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const RadioGroup: React.FC<RadioGroupProps> = ({ title, selected,  onChange, options}) => {
    return(
        <UIDConsumer>
            {(id, uid) => (
                options.map((option, index) => (
                    <div className="form-check" key={uid(option)}>
                        <input
                            className="form-check-input"
                            type="radio"
                            name={`radio-group-name${id}`}
                            id={uid(option)}
                            value={option.id}
                            checked={selected === option.id}
                            onChange={onChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={uid(option)}
                        >
                            {option.title}
                        </label>
                    </div>
                ))
            )}
        </UIDConsumer>
    );
};

export default RadioGroup;
