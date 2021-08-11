import React, { components, PropTypes } from 'react';
import { crossicon } from 'icons';

import AutosizeTextarea from 'components/AutosizeTextarea';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: this.props.itemData.value };
    this._textareaKeyDown = this._textareaKeyDown.bind(this);
    this._saveChanges = this._saveChanges.bind(this);
  }

_textareaKeyDown (e) {
  if (e.keyCode === 13) {
    e.stopPropagation(); e.preventDefault();
    this._saveChanges();
  }
}

_saveChanges () {
  if (this.state.inputValue !== this.props.itemData.value) {
    const editedItem = { index: this.props.itemData.index, value: this.state.inputValue};
    this.props.editItem(editItem);
  }
}

render () {
  const { itemData, deleteItem, showSpinner } = this.props;
  const { inputValue } = this.state;
}

return (
  <li classname= 'items-list_single-item'>
  <AutosizeTextarea
  inputValue={inputValue}
  onKeyDown={this._textareaKeyDown}
  onBlur={this._saveChanges}
  onChange={value => { this.setSate({ inputValue: value}); }}
  inlineNode={
    !showSpinner ?
    <span className='delete-button' onClick={() => { deleteItem(itemData); }}>
    {crossIcon}
    </span>
    : null
  }
)
{
  showSpinner ?
  <i className='fa fa-circle-o-notch fa-spin' />
}
