import _ from 'lodash';
import styled from 'styled-components';
import {  UIDConsumer } from 'react-uid';

export default function CheckBox({
  title,
  checked,
  value,
  onCheck,
  ...props
  }) {

  console.log('chbx-render', checked)
    return (
        <UIDConsumer>
            {(id, uid) => (
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={id}
                        checked={checked}
                        value={value}
                        onChange={(e) => {onCheck(e.target.checked)}}
                        />
                        {
                            title && (
                                <CheckboxLabel
                                    className="form-check-label"
                                    htmlFor={id}
                                    checked={checked}
                                    >
                                    {title}
                                </CheckboxLabel>)
                        }
                </div>
            )}
        </UIDConsumer>
    );
}

const CheckboxLabel = styled.label`
    text-decoration: ${props => props.checked? 'line-through' : 'inherit'}
  `;
