import _ from 'lodash';
import {UIDConsumer} from "react-uid";

export default function RadioGroup({
        title,
        options,
        onChange,
        selected,
        ...props
    }) {

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
                )
            }
        </UIDConsumer>
    );
}
