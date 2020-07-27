import * as React from "react";
import styled from 'styled-components';
import {  UIDConsumer } from 'react-uid';

interface CheckBoxProps {
  title: string
  checked: boolean
  value: string | number
  onCheck(value: boolean | null): void
}

const CheckBox: React.FC<CheckBoxProps> = ({ title, checked, value,  onCheck, ...restProps}) => {

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
                  onChange={(e) => {onCheck(!!e.target.checked)}}
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
};

const CheckboxLabel = styled.label`
    text-decoration: ${props => props.checked? 'line-through' : 'inherit'};
    color: ${(props) => props.theme.colorBackgroundAccented };
  `;

export default CheckBox;
