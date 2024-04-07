import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {ButtonColor, styles} from '../../styles/styles';

export function SearchForm(props) {
  const [inputValue, setInputValue] = useState('');
  const [typeError, setTypeError] = useState(false);

  const handleSubmit = function (event) {
    event.preventDefault();
    if (inputValue?.trim()) {
      props.onSubmit(inputValue);
    } else {
      setTypeError(true);
      setTimeout(() => setTypeError(false), 1000);
    }

    setInputValue('');
  };

  return (
    <View
      action=""
      style={styles.searchWrapper}
      onSubmit={handleSubmit}
      className="search">
      <SearchInput
        value={inputValue}
        onChangeText={setInputValue}
        showError={typeError}
      />
      <Button
        style={styles}
        color={ButtonColor}
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}

function SearchInput(props) {
  const {value, onChangeText, showError} = props;
  return (
    <TextInput
      style={styles.search__search_input}
      // className={'search-input' + ' error'.repeat(showError)}
      type="text"
      placeholder="Which city?"
      onChangeText={onChangeText}
      value={value}
    />
  );
}
